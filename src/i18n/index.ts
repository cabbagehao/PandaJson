import { cache } from 'react'
import { getDictionary as getDict } from './dictionaries'

// 支持的语言
export const locales = ['zh', 'en'] as const
export type Locale = (typeof locales)[number]

// 语言显示名称
export const languageNames: Record<Locale, string> = {
  zh: '中文',
  en: 'English'
}

// 默认语言
export const defaultLocale: Locale = 'zh'

// i18n配置
export const i18n = {
  locales: locales,
  defaultLocale: defaultLocale
}

// 获取字典内容的函数，使用React cache优化
export const getDictionary = cache(async (locale: Locale) => {
  return getDict(locale)
}) 