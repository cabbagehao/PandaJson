import { getServerTranslation } from '@/i18n/server';
import { Locale } from '@/i18n';
import FormatterClient from './FormatterClient';
import { Suspense } from 'react';

// 导出元数据生成函数
export { generateMetadata } from './metadata';

export default async function JsonFormatter({
  params,
}: {
  params: { lang: string };
}) {
  const resolvedParams = await Promise.resolve(params);
  const locale = resolvedParams.lang as Locale;
  const { t } = await getServerTranslation(locale);
  const formatter = t.formatter;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FormatterClient 
        pageTitle={formatter.title}
        pageDescription={formatter.description}
        pageKeywords={formatter.keywords}
        pageIntroduction={formatter.introduction}
        locale={locale}
      />
    </Suspense>
  );
} 