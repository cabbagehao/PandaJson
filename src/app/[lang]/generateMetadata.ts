import { Metadata } from 'next';
import { getDictionary } from '@/i18n';
import { locales } from '@/i18n';

// 域名配置
const DOMAIN = process.env.NODE_ENV === 'production' 
  ? 'https://jsonpanda.com' 
  : 'http://localhost:3003';

// 基本元数据生成函数
export async function generateBaseMetadata({
  lang,
  path = '',
  params = {},
  namespaceName = 'common',
  titleKey = 'seo.title',
  descriptionKey = 'seo.description',
  keywordsKey = 'seo.keywords',
  imageKey = 'seo.image',
}: {
  lang: string;
  path?: string;
  params?: Record<string, string>;
  namespaceName?: string;
  titleKey?: string;
  descriptionKey?: string;
  keywordsKey?: string;
  imageKey?: string;
}): Promise<Metadata> {
  const dictionary = await getDictionary(lang as any);
  
  // 获取路径（默认为当前路径或提供的路径）
  const currentPath = path || '';
  
  // 基础URL，不包含语言代码
  const baseUrl = `${DOMAIN}`;
  
  // 当前完整URL
  const currentUrl = `${baseUrl}/${lang}${currentPath ? `/${currentPath}` : ''}`;
  
  // 生成所有语言版本的替代链接
  const alternateLanguages = locales.reduce((acc, locale) => {
    acc[locale] = `${baseUrl}/${locale}${currentPath ? `/${currentPath}` : ''}`;
    return acc;
  }, {} as Record<string, string>);
  
  // 提取翻译内容
  const title = titleKey.split('.').reduce((obj, key) => obj?.[key], dictionary as any) || '';
  const description = descriptionKey.split('.').reduce((obj, key) => obj?.[key], dictionary as any) || '';
  const keywords = keywordsKey.split('.').reduce((obj, key) => obj?.[key], dictionary as any) || '';
  const imageUrl = imageKey.split('.').reduce((obj, key) => obj?.[key], dictionary as any) || '/images/json-formatter-og.png';
  
  // 返回元数据配置
  return {
    title,
    description,
    keywords: keywords,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: currentUrl,
      languages: alternateLanguages,
    },
    openGraph: {
      title,
      description,
      url: currentUrl,
      siteName: title,
      images: [
        {
          url: imageUrl.startsWith('http') ? imageUrl : `${baseUrl}${imageUrl}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: lang,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl.startsWith('http') ? imageUrl : `${baseUrl}${imageUrl}`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

// 为特定工具页面生成元数据的便捷函数
export async function generateToolMetadata({
  lang,
  toolName,
}: {
  lang: string;
  toolName: 'formatter' | 'validator' | 'converter' | 'diff' | 'tree-editor' | 'schema-validator' | 'minifier';
}) {
  return generateBaseMetadata({
    lang,
    path: toolName,
    namespaceName: toolName === 'tree-editor' ? 'treeEditor' : toolName,
    titleKey: 'seo.title',
    descriptionKey: 'seo.description',
    keywordsKey: 'seo.keywords',
  });
} 