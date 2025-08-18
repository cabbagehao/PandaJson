import { getServerTranslation } from '@/i18n/server';
import { Locale } from '@/i18n';
import ValidatorClient from './ValidatorClient';
import { Suspense } from 'react';
import { resolveParams } from '@/app/types';

// 导出元数据生成函数
export { generateMetadata } from './metadata';

export default async function JsonValidator({
  params,
}: {
  params: Promise<{ lang: string }> | { lang: string };
}) {
  const resolvedParams = await resolveParams(params);
  const locale = resolvedParams.lang as Locale;
  const { t } = await getServerTranslation(locale);
  const validator = t.validator;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ValidatorClient 
        pageTitle={validator.h1Title}
        pageDescription={validator.description}
        pageKeywords={validator.keywords}
        pageIntroduction={validator.introduction}
      />
    </Suspense>
  );
} 