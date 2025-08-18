import { getServerTranslation } from '@/i18n/server';
import { Locale } from '@/i18n';
import SchemaValidatorClient from './SchemaValidatorClient';
import { Suspense } from 'react';

// 导出元数据生成函数
export { generateMetadata } from './metadata';

export default async function SchemaValidator({
  params,
}: {
  params: { lang: string };
}) {
  const resolvedParams = await Promise.resolve(params);
  const locale = resolvedParams.lang as Locale;
  const { t } = await getServerTranslation(locale);
  const schemaValidator = t.schemaValidator;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SchemaValidatorClient 
        pageTitle={schemaValidator.title}
        pageDescription={schemaValidator.description}
        pageKeywords={schemaValidator.keywords}
        pageIntroduction={schemaValidator.introduction}
        locale={locale}
      />
    </Suspense>
  );
} 