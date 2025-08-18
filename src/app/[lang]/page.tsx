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

  // 导入并使用formatter元数据生成函数
  const { generateMetadata } = await import('./formatter/metadata');
  const formatterMetadata = await generateMetadata({ params: { lang: locale } });

  return {
    ...formatterMetadata,
    alternates: {
      canonical: `https://jsonpanda.com`,
    }
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