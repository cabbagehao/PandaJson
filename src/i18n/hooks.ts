'use client';

import { useParams } from 'next/navigation';
import { Locale, defaultLocale } from './index';
import { getTranslation, TranslationType, TranslationNamespace } from './locales';

/**
 * 客户端组件使用的hook，获取当前语言的翻译
 */
export function useTranslation() {
  const params = useParams();
  // 确保始终获取URL中的语言参数，并验证它是否为支持的语言
  const lang = params?.lang as string;
  const locale = (lang && typeof lang === 'string' ? lang : defaultLocale) as Locale;
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