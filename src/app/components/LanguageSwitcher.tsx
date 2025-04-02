'use client';

import { Fragment, useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Transition } from '@headlessui/react';
import { FiChevronDown, FiCheck, FiGlobe } from 'react-icons/fi';
import { Locale, locales, languageNames } from '@/i18n';

interface LanguageSwitcherProps {
  locale: Locale;
  dictionary: any;
}

export default function LanguageSwitcher({ locale, dictionary }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  
  // 客户端挂载后再显示，避免服务端渲染不匹配
  useEffect(() => {
    setMounted(true);
  }, []);

  // 确保dictionary存在
  if (!dictionary || !dictionary.language) {
    console.error('Language dictionary is not loaded', dictionary);
    return null; // 如果字典未加载，不渲染任何内容
  }
  
  // 生成语言切换链接
  const getLanguageUrl = (targetLocale: Locale) => {
    // 从当前路径中提取不带语言前缀的路径
    let path = pathname || '/';
    
    // 如果当前路径以语言代码开头，需要移除它
    for (const loc of locales) {
      if (path.startsWith(`/${loc}/`) || path === `/${loc}`) {
        path = path.substring(loc.length + 1) || '/';
        break;
      }
    }
    
    // 如果路径现在是 '/'，并且不是首页链接
    if (path === '/' && locale !== targetLocale) {
      return `/${targetLocale}`;
    }
    
    // 如果是默认语言(zh)，则不需要加语言前缀
    if (targetLocale === 'zh') {
      return path;
    }
    
    // 其他语言需要加上语言前缀
    return `/${targetLocale}${path.startsWith('/') ? path : `/${path}`}`;
  };

  // 获取当前语言名称
  const currentLanguageName = languageNames[locale] || dictionary.language[locale] || locale;

  // 如果不是客户端渲染，返回占位元素保持布局一致
  if (!mounted) {
    return (
      <div className="w-[120px] h-8"></div>
    );
  }

  return (
    <Menu as="div" className="relative inline-block text-left z-10">
      <div>
        <Menu.Button className="inline-flex w-full justify-center items-center rounded-md bg-white dark:bg-gray-800 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <FiGlobe className="mr-1" aria-hidden="true" />
          <span className="mx-1">{currentLanguageName}</span>
          <FiChevronDown className="-mr-1 ml-2 h-4 w-4" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none divide-y divide-gray-100 dark:divide-gray-700 max-h-80 overflow-y-auto">
          <div className="py-1">
            {locales.map((lang) => (
              <Menu.Item key={lang}>
                {({ active }) => (
                  <Link
                    href={getLanguageUrl(lang)}
                    className={`
                      ${active ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100' : 'text-gray-700 dark:text-gray-300'} 
                      ${locale === lang ? 'font-medium' : 'font-normal'}
                      flex items-center justify-between px-4 py-2 text-sm
                    `}
                  >
                    <span>{languageNames[lang]}</span>
                    {locale === lang && <FiCheck className="h-4 w-4" aria-hidden="true" />}
                  </Link>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
} 