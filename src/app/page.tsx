import { defaultLocale as locale } from "@/i18n";
import { getServerTranslation } from "@/i18n/server";
import { redirect } from "next/navigation";
import HomeClient from "./[lang]/HomeClient";
import { Suspense } from 'react';
import LayoutWrapper from "./components/LayoutWrapper";

// 重用英文版本的元数据生成函数
export async function generateMetadata() {
  // 导入并使用英文版本的元数据生成函数
  const { generateMetadata } = await import('./[lang]/home-metadata');
  return generateMetadata({ params: { lang: locale } });
}

export default async function Home() {
  // 获取英文版本的翻译内容
  const { t } = await getServerTranslation(locale);
  const { common } = t;
  const home = common.home;
  
  // 构建SEO数据
  const seoData = {
    url: `https://jsonpanda.com`,
    name: common.siteTitle,
    description: common.seo.description,
    language: locale,
  };
  
  // 准备页面数据
  const pageData = {
    locale,
    seoData,
    home,
    common
  };

  return (
    <LayoutWrapper locale={locale} translations={t}>
      <Suspense fallback={<div>Loading...</div>}>
        <HomeClient pageData={pageData} />
      </Suspense>
    </LayoutWrapper>
  );
} 