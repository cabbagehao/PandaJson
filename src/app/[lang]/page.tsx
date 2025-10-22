import { Locale } from "@/i18n";
import { getServerTranslation } from "@/i18n/server";
import { Suspense } from 'react';
import FormatterClient from "./formatter/FormatterClient";
import { resolveParams } from '@/app/types';

// 导出自定义元数据生成函数
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }> | { lang: string };
}) {
  const resolvedParams = await resolveParams(params);
  const locale = resolvedParams.lang as Locale;

  // 获取翻译内容
  const { t } = await getServerTranslation(locale);
  const formatter = t.formatter;

  // 使用SEO工具生成首页元数据
  const { generateHomePageSEO } = await import('@/lib/seo-utils');
  const seoMetadata = generateHomePageSEO(locale, formatter.description, formatter.keywords);

  return {
    title: formatter.title,
    ...seoMetadata,
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }> | { lang: string };
}) {
  const resolvedParams = await resolveParams(params);
  const locale = resolvedParams.lang as Locale;

  // 获取翻译内容
  const { t } = await getServerTranslation(locale);
  const formatter = t.formatter;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FormatterClient
        pageTitle={formatter.title}
        pageDescription={formatter.description}
        pageKeywords={formatter.keywords}
        locale={locale}
      />
    </Suspense>
  );
}