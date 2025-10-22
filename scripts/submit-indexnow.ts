#!/usr/bin/env node
import { readFileSync } from 'fs';
import { join } from 'path';
import { XMLParser } from 'fast-xml-parser';


const DOMAIN = 'jsonpanda.com';
const INDEXNOW_KEY = '9ac7e04b8f50ca567e921535ae4ea444';
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

  // 分批提交，每批最多10个URL
  const batchSize = 50;
  const batches = [];
  
  for (let i = 0; i < urls.length; i += batchSize) {
    batches.push(urls.slice(i, i + batchSize));
  }

  console.log(`Submitting ${urls.length} URLs in ${batches.length} batches to IndexNow...`);

  for (let i = 0; i < batches.length; i++) {
    const batch = batches[i];
    console.log(`📦 Batch ${i + 1}/${batches.length}: ${batch.length} URLs`);
    console.log('📝 URLs:', batch);

    const submission: IndexNowSubmission = {
      host: DOMAIN,
      key: INDEXNOW_KEY,
      keyLocation: `https://${DOMAIN}/${INDEXNOW_KEY}.txt`,
      urlList: batch
    };

    console.log('🔍 Submission payload:', JSON.stringify(submission, null, 2));

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
        console.log(`✅ Batch ${i + 1} submitted successfully`);
        console.log(`Response status: ${response.status}`);
      } else {
        console.log(`❌ Batch ${i + 1} failed: ${response.status} ${response.statusText}`);
        
        // 尝试获取响应体以获取更多错误信息
        try {
          const errorText = await response.text();
          console.log('Error details:', errorText);
        } catch (e) {
          console.log('Could not read error response');
        }
        
        // 403错误时不抛出异常，继续处理其他批次
        if (response.status !== 403) {
          throw new Error(`IndexNow submission failed: ${response.status} ${response.statusText}`);
        }
      }
    } catch (error) {
      console.error(`❌ Error submitting batch ${i + 1}:`, error);
      
      // 网络错误或其他严重错误时继续，但403错误不中断
      if (!(error instanceof Error) || !error.message.includes('403')) {
        throw error;
      }
    }

    // 批次间延迟，避免速率限制
    if (i < batches.length - 1) {
      console.log('⏳ Waiting 2 seconds before next batch...');
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
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
