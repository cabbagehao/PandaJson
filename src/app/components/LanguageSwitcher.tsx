'use client';

import { Fragment, useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Popover, Transition } from '@headlessui/react';
import { FiGlobe } from 'react-icons/fi';
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

  // 如果不是客户端渲染，返回占位元素保持布局一致
  if (!mounted) {
    return (
      <div className="w-9 h-9"></div>
    );
  }

  return (
    <Popover className="relative">
      <Popover.Button className="flex items-center justify-center w-9 h-9 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
        <FiGlobe className="w-5 h-5" />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Popover.Panel className="absolute right-0 z-10 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 p-2 min-w-[180px] max-w-[220px]">
          <div className="grid grid-cols-2 gap-1">
            {locales.map((lang) => (
              <Link
                key={lang}
                href={getLanguageUrl(lang)}
                className={`
                  flex items-center justify-center px-2 py-1.5 text-sm rounded 
                  ${locale === lang ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium' : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'}
                `}
              >
                {languageNames[lang]}
              </Link>
            ))}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
} 