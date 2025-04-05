import { zh } from './zh';
import { en } from './en';
import { es } from './es';
import { ja } from './ja';
import { zhTw } from './zh-tw';
import { ar } from './ar';
import { hi } from './hi';
import { pt } from './pt';
import { fr } from './fr';
import { ru } from './ru';
import { de } from './de';
import { vi } from './vi';
import { sw } from './sw';
import { mk } from './mk';
import { uz } from './uz';
import { Locale } from '../index';

export type TranslationNamespace = keyof typeof zh;

const translations = {
  zh,
  en,
  es,
  ja,
  'zh-tw': zhTw,
  ar,
  hi,
  pt,
  fr,
  ru,
  de,
  vi,
  sw,
  mk,
  uz
};

export type TranslationType = typeof zh;

export const getTranslation = (locale: Locale): TranslationType => {
  // 验证请求的语言是否在支持的语言列表中
  if (locale in translations) {
    return translations[locale as keyof typeof translations];
  }
  
  // 如果找不到请求的语言，返回默认语言(英文)
  return en;
}; 