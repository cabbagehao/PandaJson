import { getServerTranslation } from '@/i18n/server';
import { Locale } from '@/i18n';
import ConverterClient from './ConverterClient';
import { Suspense } from 'react';
import { resolveParams } from '@/app/types';

// 导出元数据生成函数
export { generateMetadata } from './metadata';

export default async function ConverterPage({ 
  params 
}: {
  params: Promise<{ lang: string }> | { lang: string };
}) {
  const resolvedParams = await resolveParams(params);
  const locale = resolvedParams.lang as Locale;
  const { t } = await getServerTranslation(locale);
  const converter = t.converter;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ConverterClient 
        pageTitle={converter.h1Title}
        pageDescription={converter.description}
        pageKeywords={converter.keywords}
        pageIntroduction={converter.introduction}
        locale={locale}
      />
    </Suspense>
  );
} 