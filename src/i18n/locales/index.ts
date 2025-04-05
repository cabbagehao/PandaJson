import { zh } from './zh';
import { en } from './en';
import { es } from './es';
import { ja } from './ja';
import { Locale } from '../index';

export type TranslationNamespace = keyof typeof zh;

const translations = {
  zh,
  en,
  es,
  ja
};

export type TranslationType = typeof zh;

export const getTranslation = (locale: Locale): TranslationType => {
  if (locale in translations) {
    return translations[locale as keyof typeof translations];
  }
  
  // 如果找不到请求的语言，默认返回英文（非中文）或中文
  return locale === 'zh' ? zh : en;
}; 