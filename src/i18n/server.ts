import 'server-only';
import { Locale, defaultLocale } from './index';
import { getTranslation } from './locales';

/**
 * 服务器端组件使用的翻译函数
 * @param locale 当前语言
 */
export function getServerTranslation(locale: Locale = defaultLocale) {
  const translations = getTranslation(locale);
  
  return {
    t: translations,
    locale
  };
} 