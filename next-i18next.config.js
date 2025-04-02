module.exports = {
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
  },
  localePath: './public/locales',
  // 重要：不自动检测语言
  detection: {
    order: ['path', 'cookie', 'header'],
    caches: ['cookie'],
  }
} 