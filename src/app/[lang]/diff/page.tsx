import { getServerTranslation } from '@/i18n/server';
import { Locale } from '@/i18n';
import DiffClient from './DiffClient';

// 导出元数据生成函数
export { generateMetadata } from './metadata';

export default async function JsonDiff({
  params,
}: {
  params: { lang: string };
}) {
  const locale = params.lang as Locale;
  const { t } = await getServerTranslation(locale);
  const diff = t.diff;

  return (
    <DiffClient 
      pageTitle={diff.title}
      pageDescription={diff.description}
      pageKeywords={diff.keywords}
    />
  );
} 