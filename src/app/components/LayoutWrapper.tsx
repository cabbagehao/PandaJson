'use client';

import { Locale } from '@/i18n';
import { TranslationType } from '@/i18n/locales';
import Navbar from '@/app/components/Navbar';
import { Suspense } from 'react';
import Analytics from '@/app/components/Analytics';

interface LayoutWrapperProps {
  locale: Locale;
  translations: TranslationType;
  children: React.ReactNode;
}

export default function LayoutWrapper({ locale, translations, children }: LayoutWrapperProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar locale={locale} translations={translations} />
      <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
      <footer className="bg-gray-100 dark:bg-gray-800 py-6">
        <div className="container mx-auto px-4 text-center text-gray-500 dark:text-gray-400">
          <p>© 2025 {translations.common.siteTitle}. {translations.common.footer.copyright}</p>
        </div>
      </footer>
      <Suspense fallback={null}>
        <Analytics />
      </Suspense>
    </div>
  );
} 