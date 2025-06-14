import fs from 'fs';
import path from 'path';

// 网站支持的语言
const locales = [
  'zh', 'en', 'es', 'ja', 'zh-tw', 'ar', 'hi',
  'pt', 'fr', 'ru', 'de', 'vi', 'sw', 'mk', 'uz'
];

// 默认语言
const defaultLocale = 'en';

// 网站域名
const DOMAIN = 'https://jsonpanda.com';

// 工具页面路径
const TOOL_PATHS = [
  'formatter',
  'validator',
  'converter',
  'diff',
  'tree-editor',
  'schema-validator',
  'minifier'
];

// 生成站点地图XML
function generateSitemap() {
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">

  <!-- 首页 -->
  <url>
    <loc>${DOMAIN}</loc>
`;

  // 添加所有语言版本的首页链接
  locales.forEach(locale => {
    sitemap += `    <xhtml:link rel="alternate" hreflang="${locale}" href="${DOMAIN}/${locale}" />\n`;
  });

  // 添加x-default标签
  sitemap += `    <xhtml:link rel="alternate" hreflang="x-default" href="${DOMAIN}" />\n`;

  sitemap += `    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>

`;

  // 为每个工具页面生成URL
  TOOL_PATHS.forEach(tool => {
    sitemap += `  <!-- ${getTitleForTool(tool)}页面 -->
  <url>
    <loc>${DOMAIN}/${tool}</loc>
`;

    // 添加所有语言版本的工具页面链接
    locales.forEach(locale => {
      sitemap += `    <xhtml:link rel="alternate" hreflang="${locale}" href="${DOMAIN}/${locale}/${tool}" />\n`;
    });

    // 添加x-default标签（指向根路径，不是/en/路径）
    sitemap += `    <xhtml:link rel="alternate" hreflang="x-default" href="${DOMAIN}/${tool}" />\n`;

    // 为formatter页面设置更高的优先级
    const priority = tool === 'formatter' ? '1.0' : '0.9';

    sitemap += `    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>

`;
  });

  sitemap += `</urlset>`;

  // 写入文件
  fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), sitemap);
  console.log('站点地图已生成: public/sitemap.xml');
}

// 获取工具页面的中文标题
function getTitleForTool(tool: string): string {
  const toolTitles: Record<string, string> = {
    'formatter': '格式化工具',
    'validator': '验证工具',
    'converter': '转换工具',
    'diff': '比较工具',
    'tree-editor': '树编辑器',
    'schema-validator': 'Schema验证工具',
    'minifier': '压缩工具'
  };

  return toolTitles[tool] || tool;
}

// 执行生成
generateSitemap();