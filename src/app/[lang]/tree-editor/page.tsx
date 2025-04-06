import { getServerTranslation } from '@/i18n/server';
import { Locale } from '@/i18n';
import TreeEditorClient from './TreeEditorClient';
import { Suspense } from 'react';

// 导出元数据生成函数
export { generateMetadata } from './metadata';

export default async function TreeEditor({
  params,
}: {
  params: { lang: string };
}) {
  const locale = params.lang as Locale;
  const { t } = await getServerTranslation(locale);
  const treeEditor = t.treeEditor;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TreeEditorClient 
        pageTitle={treeEditor.title}
        pageDescription={treeEditor.description}
        pageKeywords={treeEditor.keywords}
      />
    </Suspense>
  );
} 