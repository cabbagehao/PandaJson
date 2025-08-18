'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX } from 'react-icons/fi';
import { Locale } from '@/i18n';
import LanguageSwitcher from './LanguageSwitcher';
import { TranslationType } from '@/i18n/locales';

interface NavbarProps {
  locale: Locale;
  translations: TranslationType;
}

export default function Navbar({ locale, translations }: NavbarProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const common = translations.common;
  
  const navItems = [
    { name: common.nav.formatter, href: '/formatter' },
    { name: common.nav.validator, href: '/validator' },
    { name: common.nav.converter, href: '/converter' },
    { name: common.nav.diff, href: '/diff' },
    { name: common.nav.treeEditor, href: '/tree-editor' },
    { name: common.nav.schemaValidator, href: '/schema-validator' },
  ];
  
  // 修复链接生成逻辑，检查当前路径是否包含语言前缀
  const getLocalizedHref = (path: string) => {
    // 检查当前路径是否包含语言前缀
    const hasLangPrefix = pathname.split('/').filter(Boolean)[0] === locale;
    
    // 如果当前路径不包含语言前缀（即在根路径访问时），不添加语言前缀
    if (!hasLangPrefix) {
      return path;
    }
    
    // 否则按原来的方式添加语言前缀
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return `/${locale}${cleanPath ? `/${cleanPath}` : ''}`;
  };
  
  // 判断给定路径是否为活动路径
  const isActivePath = (itemHref: string) => {
    // 如果是formatter路径且当前在首页，高亮显示formatter选项
    if (itemHref === '/formatter' && (pathname === '/' || pathname === `/${locale}`)) {
      return true;
    }
    
    // 去除前导斜杠
    const cleanHref = itemHref.startsWith('/') ? itemHref.slice(1) : itemHref;
    
    // 检查当前路径是否以该href结尾（考虑带语言前缀和不带语言前缀两种情况）
    return pathname === itemHref || // 精确匹配
           pathname.endsWith(`/${cleanHref}`) || // 以工具名结尾
           pathname === `/${locale}/${cleanHref}`; // 带语言前缀
  };
  
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between h-14 sm:h-16">
          <div className="flex items-center">
            <Link 
              href={getLocalizedHref('/formatter')}
              className="flex-shrink-0 flex items-center text-lg sm:text-xl font-bold text-blue-600 dark:text-blue-400"
            >
              <span className="text-2xl mr-2">🐼</span>
              {common.siteTitle}
            </Link>
          </div>
          
          <div className="flex items-center">
            {/* 将导航菜单移到右侧，与语言切换按钮相邻 */}
            <div className="hidden md:flex md:items-center">
              <div className="md:flex md:space-x-2 lg:space-x-4 mr-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={getLocalizedHref(item.href)}
                    className={`whitespace-nowrap inline-flex items-center px-2 lg:px-3 py-2 border-b-2 text-sm font-medium ${
                      isActivePath(item.href)
                        ? 'border-blue-500 text-gray-900 dark:text-white'
                        : 'border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600 hover:text-gray-700 dark:hover:text-gray-200'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <LanguageSwitcher locale={locale} />
            </div>
            
            <div className="md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
              >
                <span className="sr-only">打开菜单</span>
                {mobileMenuOpen ? (
                  <FiX className="block h-6 w-6" aria-hidden="true" suppressHydrationWarning />
                ) : (
                  <FiMenu className="block h-6 w-6" aria-hidden="true" suppressHydrationWarning />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 移动端菜单 */}
      <div 
        className={`md:hidden fixed inset-0 bg-gray-900 bg-opacity-50 z-40 transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      ></div>
      <div 
        className={`md:hidden fixed right-0 top-0 bottom-0 w-64 bg-white dark:bg-gray-800 shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white">导航菜单</h2>
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
            onClick={() => setMobileMenuOpen(false)}
          >
            <FiX className="block h-6 w-6" aria-hidden="true" suppressHydrationWarning />
          </button>
        </div>
        <div className="py-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={getLocalizedHref(item.href)}
              className={`block px-4 py-3 text-base font-medium ${
                isActivePath(item.href)
                  ? 'bg-blue-50 dark:bg-blue-900 border-l-4 border-blue-500 text-blue-700 dark:text-blue-300'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          
          <div className="mt-4 px-4 py-2 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">切换语言</p>
            <LanguageSwitcher locale={locale} />
          </div>
        </div>
      </div>
    </nav>
  );
} 