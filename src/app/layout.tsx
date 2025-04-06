import './globals.css';
import { Inter } from 'next/font/google';
import { defaultLocale as locale } from '@/i18n';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export async function generateMetadata(): Promise<Metadata> {
  // 导入并使用英文版本的元数据生成函数
  const { generateBaseMetadata } = await import('./[lang]/generateMetadata');
  return generateBaseMetadata({ lang: locale });
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={locale}>
      <head>
        {/* 百度站点验证 */}
        <meta name="baidu-site-verification" content="codeva-iyqAn3UUTP" />
        
        {/* 添加hreflang标签，包括x-default */}
        <link
          rel="alternate"
          hrefLang="x-default"
          href={`https://jsonpanda.com`}
        />
        <link
          rel="alternate"
          hrefLang="en"
          href={`https://jsonpanda.com/en`}
        />
        <link
          rel="alternate"
          hrefLang="zh"
          href={`https://jsonpanda.com/zh`}
        />
        <link
          rel="alternate"
          hrefLang="es"
          href={`https://jsonpanda.com/es`}
        />
        <link
          rel="alternate"
          hrefLang="ja"
          href={`https://jsonpanda.com/ja`}
        />
        <link
          rel="alternate"
          hrefLang="zh-tw"
          href={`https://jsonpanda.com/zh-tw`}
        />
        <link
          rel="alternate"
          hrefLang="ar"
          href={`https://jsonpanda.com/ar`}
        />
        <link
          rel="alternate"
          hrefLang="hi"
          href={`https://jsonpanda.com/hi`}
        />
        <link
          rel="alternate"
          hrefLang="pt"
          href={`https://jsonpanda.com/pt`}
        />
        <link
          rel="alternate"
          hrefLang="fr"
          href={`https://jsonpanda.com/fr`}
        />
        <link
          rel="alternate"
          hrefLang="ru"
          href={`https://jsonpanda.com/ru`}
        />
        <link
          rel="alternate"
          hrefLang="de"
          href={`https://jsonpanda.com/de`}
        />
        <link
          rel="alternate"
          hrefLang="vi"
          href={`https://jsonpanda.com/vi`}
        />
        <link
          rel="alternate"
          hrefLang="sw"
          href={`https://jsonpanda.com/sw`}
        />
        <link
          rel="alternate"
          hrefLang="mk"
          href={`https://jsonpanda.com/mk`}
        />
        <link
          rel="alternate"
          hrefLang="uz"
          href={`https://jsonpanda.com/uz`}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
} 