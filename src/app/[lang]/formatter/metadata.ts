import { Metadata } from 'next';
import { getServerTranslation } from '@/i18n/server';
import { Locale } from '@/i18n';

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params);
  const locale = resolvedParams.lang as Locale;
  const { t } = await getServerTranslation(locale);
  const formatter = t.formatter;
  const common = t.common;

  // 组合标题：工具名称 + 网站名称
  const combinedTitle = `${formatter.title} - ${common.siteTitle}`;

  return {
    title: combinedTitle,
    description: formatter.description,
    keywords: formatter.keywords,
  };
} 