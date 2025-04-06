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
  titleKey = 'siteTitle',
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
  // 首先获取正确的命名空间
  const namespace = namespaceName === 'common' 
    ? (dictionary as any).common 
    : (dictionary as any)[namespaceName];
  
  // 从命名空间中提取翻译内容
  const title = titleKey.split('.').reduce((obj: any, key) => obj?.[key], namespace) || '';
  const description = descriptionKey.split('.').reduce((obj: any, key) => obj?.[key], namespace) || '';
  const keywords = keywordsKey.split('.').reduce((obj: any, key) => obj?.[key], namespace) || '';
  const imageUrl = imageKey.split('.').reduce((obj: any, key) => obj?.[key], namespace) || '/images/json-formatter-og.png';
  
  // 返回元数据配置
  return {
    title,
    description,
    keywords: keywords,
    metadataBase: new URL(baseUrl),
    icons: {
      icon: [
        { url: '/favicon.ico' },
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
      ],
    },
    alternates: {
      canonical: currentUrl,
      languages: alternateLanguages,
    },
    openGraph: {
      title,
      description,
      url: currentUrl,
      siteName: (dictionary as any).common?.siteTitle || title,
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
  const dictionary = await getDictionary(lang as any);
  const namespace = toolName === 'tree-editor' ? 'treeEditor' : toolName;
  
  // 获取通用网站标题
  const siteTitle = (dictionary as any).common?.siteTitle || 'JSON Panda';
  
  // 获取工具标题
  const toolTitle = (dictionary as any)[namespace]?.title || '';
  
  // 组合标题：工具名称 + 网站名称
  const combinedTitle = `${toolTitle} - ${siteTitle}`;
  
  const result = await generateBaseMetadata({
    lang,
    path: toolName,
    namespaceName: namespace,
    titleKey: 'title',
    descriptionKey: 'description',
    keywordsKey: 'keywords',
  });
  
  // 替换标题为组合标题
  return {
    ...result,
    title: combinedTitle,
    openGraph: {
      ...result.openGraph,
      title: combinedTitle
    },
    twitter: {
      ...result.twitter,
      title: combinedTitle
    }
  };
} 