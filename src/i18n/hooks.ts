'use client';

import { useParams } from 'next/navigation';
import { Locale, defaultLocale } from './index';
import { getTranslation, TranslationType, TranslationNamespace } from './locales';

/**
 * 客户端组件使用的hook，获取当前语言的翻译
 */
export function useTranslation() {
  const params = useParams();
  const locale = (params?.lang as Locale) || defaultLocale;
  const translations = getTranslation(locale);
  
  /**
   * 获取特定命名空间的翻译
   * @param namespace 命名空间 (common, formatter, validator 等)
   */
  const t = <T extends TranslationNamespace>(namespace: T): TranslationType[T] => {
    return translations[namespace];
  };
  
  return { t, locale };
} 