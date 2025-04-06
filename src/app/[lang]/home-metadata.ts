import { getServerTranslation } from '@/i18n/server';
import { Locale } from '@/i18n';
import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params);
  const locale = resolvedParams.lang as Locale;
  const { t } = await getServerTranslation(locale);
  const common = t.common;
  
  return {
    title: common.siteTitle,
    description: common.seo.description,
    keywords: common.seo.keywords,
  };
} 