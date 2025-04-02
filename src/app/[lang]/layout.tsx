import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/app/components/Navbar";
import { Locale, defaultLocale } from "@/i18n";
import { getDictionary } from "@/i18n/dictionaries";

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
  // 获取当前语言的字典
  const locale = (params.lang as string || defaultLocale) as Locale;
  const dictionary = await getDictionary(locale);

  return {
    title: `${dictionary.siteTitle} | ${dictionary.seo.description.split('。')[0]}`,
    description: dictionary.seo.description,
    keywords: dictionary.seo.keywords,
    authors: [{name: dictionary.siteTitle}],
    robots: "index, follow",
    openGraph: {
      title: dictionary.siteTitle,
      description: dictionary.seo.description,
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
  // 获取当前语言的字典
  const locale = (params.lang as string || defaultLocale) as Locale;
  const dictionary = await getDictionary(locale);

  // 确保字典已加载
  if (!dictionary) {
    console.error('Dictionary not loaded for locale:', locale);
    return <div>Error loading page content</div>;
  }
  
  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 dark:bg-gray-900`}
        suppressHydrationWarning
      >
        <div className="min-h-screen flex flex-col">
          <Navbar locale={locale} dictionary={dictionary} />
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
          <footer className="bg-gray-100 dark:bg-gray-800 py-6">
            <div className="container mx-auto px-4 text-center text-gray-500 dark:text-gray-400">
              <p>© 2023 JSON工具集. {dictionary?.footer?.copyright || '版权所有'}</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
} 