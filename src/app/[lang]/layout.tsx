import '../globals.css';
import { Inter } from 'next/font/google';
import { locales, Locale } from '@/i18n';
import { Metadata } from 'next';
import Navbar from '@/app/components/Navbar';
import Analytics from '@/app/components/Analytics';
import { generateBaseMetadata } from './generateMetadata';
import { getServerTranslation } from '@/i18n/server';
import { Suspense } from 'react';

const inter = Inter({ subsets: ['latin'] });

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params);
  const { lang } = resolvedParams;
  return {
    ...await generateBaseMetadata({ lang }),
    viewport: 'width=device-width, initial-scale=1',
  };
}

// 声明支持的语言
export async function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const resolvedParams = await Promise.resolve(params);
  const locale = resolvedParams.lang as Locale;
  const { t } = await getServerTranslation(locale);

  return (
    <html lang={locale}>
      <body className={`${inter.className} bg-gray-50 dark:bg-gray-900`}>
        <div className="min-h-screen flex flex-col">
          <Navbar locale={locale} translations={t} />
          <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
          <footer className="bg-gray-100 dark:bg-gray-800 py-6">
            <div className="container mx-auto px-4 text-center text-gray-500 dark:text-gray-400">
              <p>© 2025 {t.common.siteTitle}. {t.common.footer.copyright}</p>
            </div>
          </footer>
        </div>
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
      </body>
    </html>
  );
} 