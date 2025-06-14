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
  const schemaValidator = t.schemaValidator;

  return {
    // title属性由客户端组件动态设置，这里不设置title
    ...generateToolPageSEO('schema-validator', locale, schemaValidator.description, schemaValidator.keywords),
  };
}