import { Locale } from "@/i18n";
import { getServerTranslation } from "@/i18n/server";
import HomeClient from "./HomeClient";

// 导出元数据生成函数
export { generateMetadata } from "./home-metadata";

export default async function Home({
  params,
}: {
  params: { lang: string };
}) {
  const locale = params.lang as Locale;
  
  // 获取翻译内容
  const { t } = getServerTranslation(locale);
  const { common } = t;
  const home = common.home;
  
  // 构建SEO数据
  const seoData = {
    url: `https://jsonpanda.com/${locale}`,
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

  return <HomeClient pageData={pageData} />;
} 