import { getServerTranslation } from '@/i18n/server';
import { Locale } from '@/i18n';
import DiffClient from './DiffClient';
import { Suspense } from 'react';
import { resolveParams } from '@/app/types';

// 导出元数据生成函数
export { generateMetadata } from './metadata';

export default async function JsonDiff({
  params,
}: {
  params: Promise<{ lang: string }> | { lang: string };
}) {
  const resolvedParams = await resolveParams(params);
  const locale = resolvedParams.lang as Locale;
  const { t } = await getServerTranslation(locale);
  const diff = t.diff;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DiffClient 
        pageTitle={diff.title}
        pageDescription={diff.description}
        pageKeywords={diff.keywords}
        pageIntroduction={diff.introduction}
      />
    </Suspense>
  );
} 