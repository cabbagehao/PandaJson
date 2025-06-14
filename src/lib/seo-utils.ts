import { Metadata } from 'next';

// 支持的语言列表
const SUPPORTED_LOCALES = [
  'zh', 'en', 'es', 'ja', 'zh-tw', 'ar', 'hi',
  'pt', 'fr', 'ru', 'de', 'vi', 'sw', 'mk', 'uz'
];

// 网站域名
const DOMAIN = 'https://jsonpanda.com';

/**
 * 为工具页面生成SEO metadata
 * @param toolPath 工具路径（如 'formatter', 'validator' 等）
 * @param locale 当前语言
 * @param description 页面描述
 * @param keywords 页面关键词
 * @returns Metadata对象
 */
export function generateToolPageSEO(
  toolPath: string,
  locale: string,
  description: string,
  keywords: string
): Partial<Metadata> {
  // 主要版本的canonical URL（不带语言前缀）
  const canonical = `${DOMAIN}/${toolPath}`;

  // 生成所有语言版本的链接
  const languages: Record<string, string> = {};

  SUPPORTED_LOCALES.forEach(lang => {
    languages[lang] = `${DOMAIN}/${lang}/${toolPath}`;
  });

  // x-default指向根路径版本
  languages['x-default'] = canonical;

  return {
    description,
    keywords,
    alternates: {
      canonical: canonical,
      languages: languages,
    },
  };
}

/**
 * 为首页生成SEO metadata
 * @param locale 当前语言
 * @param description 页面描述
 * @param keywords 页面关键词
 * @returns Metadata对象
 */
export function generateHomePageSEO(
  locale: string,
  description: string,
  keywords: string
): Partial<Metadata> {
  // 首页的canonical URL
  const canonical = DOMAIN;

  // 生成所有语言版本的链接
  const languages: Record<string, string> = {};

  SUPPORTED_LOCALES.forEach(lang => {
    languages[lang] = `${DOMAIN}/${lang}`;
  });

  // x-default指向根域名
  languages['x-default'] = canonical;

  return {
    description,
    keywords,
    alternates: {
      canonical: canonical,
      languages: languages,
    },
  };
}