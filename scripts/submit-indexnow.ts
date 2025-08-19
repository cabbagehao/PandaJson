#!/usr/bin/env node
import { readFileSync } from 'fs';
import { join } from 'path';
import { XMLParser } from 'fast-xml-parser';


const DOMAIN = 'jsonpanda.com';
const INDEXNOW_KEY = '9ac7e04b8f50ca567e921535ae4ea4da';
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow';

// 检测是否在CI/云端构建环境
const isCI = process.env.CI === 'true' || 
             !!process.env.VERCEL || 
             !!process.env.NETLIFY || 
             process.env.CF_PAGES === '1' ||
             process.env.GITHUB_ACTIONS === 'true';

if (!isCI) {
  console.log('🔍 Local build detected, skipping IndexNow submission');
  process.exit(0);
}

interface IndexNowSubmission {
  host: string;
  key: string;
  keyLocation: string;
  urlList: string[];
}

interface XhtmlLink {
  '@_rel': string;
  '@_hreflang': string;
  '@_href': string;
}

interface SitemapUrl {
  loc: string;
  lastmod?: string;
  'xhtml:link'?: XhtmlLink[] | XhtmlLink;
}

interface Sitemap {
  urlset: {
    url: SitemapUrl[] | SitemapUrl;
  };
}

async function submitToIndexNow(urls: string[]): Promise<void> {
  if (!urls.length) {
    console.log('No URLs to submit to IndexNow');
    return;
  }

  const submission: IndexNowSubmission = {
    host: DOMAIN,
    key: INDEXNOW_KEY,
    keyLocation: `https://${DOMAIN}/${INDEXNOW_KEY}.txt`,
    urlList: urls
  };

  console.log(`Submitting ${urls.length} URLs to IndexNow...`);
  console.log('📝 URL list:', urls);

  try {
    const response = await fetch(INDEXNOW_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'PandaJson-IndexNow-Bot/1.0'
      },
      body: JSON.stringify(submission)
    });

    if (response.ok) {
      console.log(`✅ Successfully submitted to ${INDEXNOW_ENDPOINT}`);
      console.log(`Response status: ${response.status}`);
    } else {
      console.log(`❌ Failed to submit to ${INDEXNOW_ENDPOINT}: ${response.status} ${response.statusText}`);
      throw new Error(`IndexNow submission failed: ${response.status} ${response.statusText}`);
    }
  } catch (error) {
    console.error(`❌ Error submitting to ${INDEXNOW_ENDPOINT}:`, error);
    throw error;
  }
}

async function extractUrlsFromSitemap(): Promise<string[]> {
  const sitemapPath = join(process.cwd(), 'public', 'sitemap.xml');
  
  try {
    const sitemapContent = readFileSync(sitemapPath, 'utf-8');
    
    const parser = new XMLParser({ ignoreAttributes: false });
    const sitemap = parser.parse(sitemapContent) as Sitemap;
    
    if (!sitemap.urlset?.url) {
      console.error('No URLs found in sitemap');
      process.exit(1);
    }

    const urlEntries = Array.isArray(sitemap.urlset.url) 
      ? sitemap.urlset.url 
      : [sitemap.urlset.url];

    const allUrls = new Set<string>();

    for (const urlEntry of urlEntries) {
      // 添加主URL
      allUrls.add(urlEntry.loc);

      // 添加所有alternate语言版本URL
      if (urlEntry['xhtml:link']) {
        const links = Array.isArray(urlEntry['xhtml:link']) 
          ? urlEntry['xhtml:link'] 
          : [urlEntry['xhtml:link']];

        for (const link of links) {
          if (link['@_rel'] === 'alternate' && link['@_href']) {
            allUrls.add(link['@_href']);
          }
        }
      }
    }

    const urls = Array.from(allUrls).sort();
    console.log(`Found ${urls.length} URLs in sitemap (including all language versions)`);
    return urls;
  } catch (error) {
    console.error('❌ Error: sitemap.xml file not found or invalid:', error);
    process.exit(1);
  }
}

async function main() {
  console.log('🚀 Starting IndexNow submission...');
  
  try {
    const urls = await extractUrlsFromSitemap();
    
    if (urls.length === 0) {
      console.log('No URLs to submit');
      process.exit(0);
    }

    await submitToIndexNow(urls);
    console.log('✅ IndexNow submission completed');
  } catch (error) {
    console.error('❌ Error during IndexNow submission:', error);
    process.exit(1);
  }
}

// ES 模块中检测是否为主模块
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}