import { getServerTranslation } from '@/i18n/server';
import { Locale } from '@/i18n';
import SchemaValidatorClient from './SchemaValidatorClient';
import { Suspense } from 'react';
import { resolveParams } from '@/app/types';

// 导出元数据生成函数
export { generateMetadata } from './metadata';

export default async function SchemaValidator({
  params,
}: {
  params: Promise<{ lang: string }> | { lang: string };
}) {
  const resolvedParams = await resolveParams(params);
  const locale = resolvedParams.lang as Locale;
  const { t } = await getServerTranslation(locale);
  const schemaValidator = t.schemaValidator;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SchemaValidatorClient 
        pageTitle={schemaValidator.h1Title}
        pageDescription={schemaValidator.description}
        pageKeywords={schemaValidator.keywords}
        pageIntroduction={schemaValidator.introduction}
        locale={locale}
      />
    </Suspense>
  );
} 