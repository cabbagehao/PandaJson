import { NextRequest, NextResponse } from 'next/server'
import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

// 支持的语言列表
const locales = ['zh', 'en']
// 默认语言
export const defaultLocale = 'zh'

// 获取请求的首选语言
function getLocale(request: NextRequest): string {
  // 避免自动重定向
  return defaultLocale
  
  // 如果需要根据浏览器语言自动切换，可以使用下面的代码
  /*
  const negotiatorHeaders: Record<string, string> = {}
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

  const languages = new Negotiator({ headers: negotiatorHeaders }).languages()
  const locales: string[] = ['zh', 'en']

  return matchLocale(languages, locales, defaultLocale)
  */
}

export function middleware(request: NextRequest) {
  // 检查请求的路径是否已包含语言前缀
  const pathname = request.nextUrl.pathname
  
  // 排除静态资源
  if (
    [
      '/favicon.ico',
      '/robots.txt',
      '/sitemap.xml',
      '/api',
      '/_next',
    ].some(path => pathname.startsWith(path)) ||
    /\.(jpg|png|gif|svg|css|js)$/.test(pathname)
  ) {
    return
  }

  // 检查URL是否已经包含语言前缀
  const pathnameIsMissingLocale = locales.every(
    locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  // 如果URL已经有语言前缀，不做处理
  if (!pathnameIsMissingLocale) return

  // 从URL中获取语言前缀，如果没有则使用默认语言
  const locale = defaultLocale
  
  // 重定向到带有语言前缀的URL
  request.nextUrl.pathname = `/${locale}${pathname === '/' ? '' : pathname}`
  
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  // 匹配所有路径，但排除静态资源路径
  matcher: ['/((?!api|_next/static|_next/image|images|favicon.ico).*)'],
} 