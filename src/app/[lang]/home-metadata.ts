import { getServerTranslation } from '@/i18n/server';
import { Locale } from '@/i18n';
import { Metadata } from 'next';
import { resolveParams } from '@/app/types';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }> | { lang: string };
}): Promise<Metadata> {
  const resolvedParams = await resolveParams(params);
  const locale = resolvedParams.lang as Locale;
  const { t } = await getServerTranslation(locale);
  const common = t.common;
  
  return {
    title: common.siteTitle,
    description: common.seo.description,
    keywords: common.seo.keywords,
  };
} 