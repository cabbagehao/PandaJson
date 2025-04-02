'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX } from 'react-icons/fi';
import { Locale } from '@/i18n';
import LanguageSwitcher from './LanguageSwitcher';

interface NavbarProps {
  locale: Locale;
  dictionary: any;
}

export default function Navbar({ locale, dictionary }: NavbarProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // 确保dictionary和nav存在
  if (!dictionary || !dictionary.nav) {
    console.error('Navigation dictionary is not loaded', dictionary);
    return null; // 如果字典或导航未加载，不渲染任何内容
  }
  
  const navItems = [
    { name: dictionary.nav.home, href: '/' },
    { name: dictionary.nav.formatter, href: '/formatter' },
    { name: dictionary.nav.validator, href: '/validator' },
    { name: dictionary.nav.converter, href: '/converter' },
    { name: dictionary.nav.diff, href: '/diff' },
    { name: dictionary.nav.treeEditor, href: '/tree-editor' },
    { name: dictionary.nav.schemaValidator, href: '/schema-validator' },
  ];
  
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between h-14 sm:h-16">
          <div className="flex items-center">
            <Link 
              href={`/${locale === 'zh' ? '' : locale}`}
              className="flex-shrink-0 flex items-center text-lg sm:text-xl font-bold text-blue-600 dark:text-blue-400"
            >
              {dictionary.siteTitle || 'JSON工具集'}
            </Link>
            <div className="hidden md:ml-6 md:flex md:space-x-2 lg:space-x-4 overflow-x-auto">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={`/${locale === 'zh' ? '' : locale + '/'}${item.href.replace('/', '')}`}
                  className={`whitespace-nowrap inline-flex items-center px-2 lg:px-3 py-2 border-b-2 text-sm font-medium ${
                    pathname.endsWith(item.href) || (item.href === '/' && pathname === `/${locale}`)
                      ? 'border-blue-500 text-gray-900 dark:text-white'
                      : 'border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600 hover:text-gray-700 dark:hover:text-gray-200'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="hidden md:block mr-4">
              <LanguageSwitcher locale={locale} dictionary={dictionary} />
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
                  <FiX className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <FiMenu className="block h-6 w-6" aria-hidden="true" />
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
            <FiX className="block h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="py-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={`/${locale === 'zh' ? '' : locale + '/'}${item.href.replace('/', '')}`}
              className={`block px-4 py-3 text-base font-medium ${
                pathname.endsWith(item.href) || (item.href === '/' && pathname === `/${locale}`)
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
            <LanguageSwitcher locale={locale} dictionary={dictionary} />
          </div>
        </div>
      </div>
    </nav>
  );
} 