'use client';

import { useEffect, useMemo } from 'react';

// 定义组件接口
interface WebsiteJsonLdProps {
  url: string;
  name: string;
  description: string;
  logoUrl?: string;
  siteType?: 'WebSite' | 'WebApplication';
  language?: string;
  imageUrl?: string;
  additionalLanguages?: string[];
}

// Website/WebApplication的结构化数据
export function WebsiteJsonLd({
  url,
  name,
  description,
  logoUrl = 'https://jsonpanda.com/logo.png',
  siteType = 'WebApplication',
  language = 'en',
  imageUrl,
  additionalLanguages = []
}: WebsiteJsonLdProps) {
  // 构建基础结构化数据
  const jsonLd = useMemo(() => {
    const languages = [language, ...additionalLanguages];
    return {
      '@context': 'https://schema.org',
      '@type': siteType,
      name,
      description,
      url,
      ...(logoUrl && {
        logo: logoUrl,
        image: imageUrl || logoUrl,
      }),
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'All',
      inLanguage: languages
    };
  }, [url, name, description, logoUrl, siteType, language, imageUrl, additionalLanguages]);

  // 当组件挂载时插入 JSON-LD 脚本
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [jsonLd]);

  // 这个组件不渲染任何可见内容
  return null;
}

// 定义工具页面的结构化数据接口
interface ToolJsonLdProps {
  toolName: string;
  toolDescription: string;
  toolUrl: string;
  siteUrl: string;
  siteName: string;
  language?: string;
}

// 工具页面的结构化数据（SoftwareApplication类型）
export function ToolJsonLd({
  toolName,
  toolDescription,
  toolUrl,
  siteUrl,
  siteName,
  language = 'en'
}: ToolJsonLdProps) {
  // 构建工具页面的结构化数据
  const jsonLd = useMemo(() => {
    return {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: toolName,
      description: toolDescription,
      applicationCategory: 'DeveloperApplication',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD'
      },
      operatingSystem: 'All',
      url: toolUrl,
      inLanguage: language,
      isPartOf: {
        '@type': 'WebSite',
        name: siteName,
        url: siteUrl
      }
    };
  }, [toolName, toolDescription, toolUrl, siteUrl, siteName, language]);

  // 当组件挂载时插入 JSON-LD 脚本
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [jsonLd]);

  // 这个组件不渲染任何可见内容
  return null;
} 