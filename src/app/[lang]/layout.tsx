import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/app/components/Navbar";
import { Locale, defaultLocale } from "@/i18n";
import { getServerTranslation } from "@/i18n/server";

// 导入CSS
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata({ 
  params
}: { 
  params: { lang: string } 
}): Promise<Metadata> {
  // 获取当前语言的翻译
  const resolvedParams = await Promise.resolve(params);
  const lang = resolvedParams.lang || defaultLocale;
  const locale = (lang as Locale);
  const { t } = getServerTranslation(locale);
  const common = t.common;

  return {
    title: `${common.siteTitle} | ${common.seo.description.split('。')[0]}`,
    description: common.seo.description,
    keywords: common.seo.keywords,
    authors: [{name: common.siteTitle}],
    robots: "index, follow",
    openGraph: {
      title: common.siteTitle,
      description: common.seo.description,
      type: "website",
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  // 获取当前语言的翻译
  const resolvedParams = await Promise.resolve(params);
  const lang = resolvedParams.lang || defaultLocale;
  const locale = (lang as Locale);
  const { t } = getServerTranslation(locale);
  
  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 dark:bg-gray-900`}
        suppressHydrationWarning
      >
        <div className="min-h-screen flex flex-col">
          <Navbar locale={locale} translations={t} />
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
          <footer className="bg-gray-100 dark:bg-gray-800 py-6">
            <div className="container mx-auto px-4 text-center text-gray-500 dark:text-gray-400">
              <p>© 2025 {t.common.siteTitle}. {t.common.footer.copyright}</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
} 