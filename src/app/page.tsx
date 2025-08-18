import { defaultLocale as locale } from "@/i18n";
import { getServerTranslation } from "@/i18n/server";
import { redirect } from "next/navigation";
import { Suspense } from 'react';
import LayoutWrapper from "./components/LayoutWrapper";

// 重用英文版本的formatter元数据生成函数
export async function generateMetadata() {
  // 导入并使用英文版本的formatter元数据生成函数
  const { generateMetadata } = await import('./[lang]/formatter/metadata');
  return {
    ...await generateMetadata({ params: { lang: locale } }),
    alternates: {
      canonical: `https://jsonpanda.com`,
    }
  };
}

export default async function Home() {
  // 获取英文版本的翻译内容
  const { t } = await getServerTranslation(locale);
  const formatter = t.formatter;

  // 动态导入英文版本的formatter页面组件
  const FormatterClient = (await import('./[lang]/formatter/FormatterClient')).default;

  return (
    <LayoutWrapper locale={locale} translations={t}>
      <Suspense fallback={<div>Loading...</div>}>
        <FormatterClient
          pageTitle={formatter.title}
          pageDescription={formatter.description}
          pageKeywords={formatter.keywords}
          locale={locale}
        />
      </Suspense>
    </LayoutWrapper>
  );
}