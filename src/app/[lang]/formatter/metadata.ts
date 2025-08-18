import { Metadata } from 'next';
import { getServerTranslation } from '@/i18n/server';
import { Locale } from '@/i18n';
import { generateToolPageSEO } from '@/lib/seo-utils';
import { resolveParams } from '@/app/types';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }> | { lang: string };
}): Promise<Metadata> {
  const resolvedParams = await resolveParams(params);
  const locale = resolvedParams.lang as Locale;
  const { t } = await getServerTranslation(locale);
  const formatter = t.formatter;
  const common = t.common;

  // 组合标题：工具名称 + 网站名称
  const title = `${formatter.title} - ${common.siteTitle}`;

  return {
    title,
    ...generateToolPageSEO('formatter', locale, formatter.description, formatter.keywords),
  };
}