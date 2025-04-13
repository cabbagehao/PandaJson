import { getServerTranslation } from '@/i18n/server';
import { Locale } from '@/i18n';
import ConverterClient from './ConverterClient';
import { Suspense } from 'react';

// 导出元数据生成函数
export { generateMetadata } from './metadata';

export default async function ConverterPage({ 
  params 
}: { 
  params: { lang: string } 
}) {
  const locale = params.lang as Locale;
  const { t } = await getServerTranslation(locale);
  const converter = t.converter;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ConverterClient 
        pageTitle={converter.title}
        pageDescription={converter.description}
        pageKeywords={converter.keywords}
        pageIntroduction={converter.introduction}
        locale={locale}
      />
    </Suspense>
  );
} 