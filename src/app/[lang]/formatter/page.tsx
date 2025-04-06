import { getServerTranslation } from '@/i18n/server';
import { Locale } from '@/i18n';
import FormatterClient from './FormatterClient';

// 导出元数据生成函数
export { generateMetadata } from './metadata';

export default async function JsonFormatter({
  params,
}: {
  params: { lang: string };
}) {
  const locale = params.lang as Locale;
  const { t } = await getServerTranslation(locale);
  const formatter = t.formatter;

  return (
    <FormatterClient 
      pageTitle={formatter.title}
      pageDescription={formatter.description}
      pageKeywords={formatter.keywords}
      locale={locale}
    />
  );
} 