import { Metadata } from 'next';
import { getServerTranslation } from '@/i18n/server';
import { Locale } from '@/i18n';
import { generateToolPageSEO } from '@/lib/seo-utils';

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params);
  const locale = resolvedParams.lang as Locale;
  const { t } = await getServerTranslation(locale);
  const converter = t.converter;
  const common = t.common;

  // 组合标题：工具名称 + 网站名称
  const title = `${converter.title} - ${common.siteTitle}`;

  return {
    title,
    ...generateToolPageSEO('converter', locale, converter.description, converter.keywords),
  };
}