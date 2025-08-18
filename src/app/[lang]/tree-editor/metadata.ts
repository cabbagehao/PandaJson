import { Metadata } from 'next';
import { getServerTranslation } from '@/i18n/server';
import { Locale } from '@/i18n';
import { generateToolPageSEO } from '@/lib/seo-utils';
import { resolveParams } from '@/app/types';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }> | { lang: string };
}): Promise<Metadata> {
  const resolvedParams = await resolveParams(params);
  const locale = resolvedParams.lang as Locale;
  const { t } = await getServerTranslation(locale);
  const treeEditor = t.treeEditor;
  const common = t.common;

  // 使用工具的完整SEO标题
  const title = treeEditor.title;

  return {
    title,
    ...generateToolPageSEO('tree-editor', locale, treeEditor.description, treeEditor.keywords),
  };
}