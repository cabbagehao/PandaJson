import { getServerTranslation } from '@/i18n/server';
import { Locale } from '@/i18n';
import MinifierClient from './MinifierClient';
import { Suspense } from 'react';
import { resolveParams } from '@/app/types';

// 导出元数据生成函数
export { generateMetadata } from './metadata';

export default async function JsonMinifier({
  params,
}: {
  params: Promise<{ lang: string }> | { lang: string };
}) {
  const resolvedParams = await resolveParams(params);
  const locale = resolvedParams.lang as Locale;
  const { t } = await getServerTranslation(locale);
  const minifier = t.minifier;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MinifierClient 
        pageTitle={minifier.h1Title}
        pageDescription={minifier.description}
        pageKeywords={minifier.keywords}
      />
    </Suspense>
  );
} 