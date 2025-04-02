import { NextRequest, NextResponse } from 'next/server'
import { defaultLocale, locales } from './i18n'

// 需要排除的路径，不需要重定向
const PUBLIC_FILES = /\.(.*)$/

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // 静态文件和API路由不处理
  if (
    PUBLIC_FILES.test(pathname) ||
    pathname.startsWith('/_next') ||
    pathname.includes('/api/')
  ) {
    return NextResponse.next()
  }

  // 检查URL的第一段是否是受支持的语言
  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  // 如果已经有语言代码，不需要重定向
  if (pathnameHasLocale) return NextResponse.next()

  // 否则重定向到默认语言
  const locale = defaultLocale
  request.nextUrl.pathname = pathname === '/' 
    ? `/${locale}` 
    : `/${locale}${pathname}`

  // 重定向到相同的URL但添加默认语言前缀
  return NextResponse.redirect(request.nextUrl)
} 