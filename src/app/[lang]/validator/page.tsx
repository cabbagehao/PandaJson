import { getServerTranslation } from '@/i18n/server';
import { Locale } from '@/i18n';
import ValidatorClient from './ValidatorClient';
import { Suspense } from 'react';

// 导出元数据生成函数
export { generateMetadata } from './metadata';

export default async function JsonValidator({
  params,
}: {
  params: { lang: string };
}) {
  const resolvedParams = await Promise.resolve(params);
  const locale = resolvedParams.lang as Locale;
  const { t } = await getServerTranslation(locale);
  const validator = t.validator;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ValidatorClient 
        pageTitle={validator.title}
        pageDescription={validator.description}
        pageKeywords={validator.keywords}
        pageIntroduction={validator.introduction}
      />
    </Suspense>
  );
} 