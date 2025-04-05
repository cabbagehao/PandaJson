'use client';

import { useParams } from 'next/navigation';
import { Locale, defaultLocale } from './index';
import { getTranslation, TranslationType } from './locales';

/**
 * 客户端组件使用的hook，获取当前语言和指定命名空间的翻译
 * @param locale 当前语言
 * @param namespace 翻译命名空间
 */
export function useTranslation(locale: string, namespace: string) {
  const translations = getTranslation(locale as Locale || defaultLocale);
  
  const t = (key: string): string => {
    const keys = key.split('.');
    let current: any = translations[namespace as keyof TranslationType];
    
    for (const k of keys) {
      if (current === undefined) return key;
      current = current[k];
    }
    
    return current !== undefined ? current : key;
  };
  
  return { t };
}