import { Metadata } from 'next';
import { getServerTranslation } from '@/i18n/server';
import { Locale } from '@/i18n';

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params);
  const locale = resolvedParams.lang as Locale;
  const { t } = await getServerTranslation(locale);
  const treeEditor = t.treeEditor;

  return {
    // title属性由客户端组件动态设置，这里不设置title
    description: treeEditor.description,
    keywords: treeEditor.keywords,
  };
} 