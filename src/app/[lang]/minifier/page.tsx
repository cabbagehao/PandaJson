import { getServerTranslation } from '@/i18n/server';
import { Locale } from '@/i18n';
import MinifierClient from './MinifierClient';
import { Suspense } from 'react';

// 导出元数据生成函数
export { generateMetadata } from './metadata';

export default async function JsonMinifier({
  params,
}: {
  params: { lang: string };
}) {
  const resolvedParams = await Promise.resolve(params);
  const locale = resolvedParams.lang as Locale;
  const { t } = await getServerTranslation(locale);
  const minifier = t.minifier;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MinifierClient 
        pageTitle={minifier.title}
        pageDescription={minifier.description}
        pageKeywords={minifier.keywords}
      />
    </Suspense>
  );
} 