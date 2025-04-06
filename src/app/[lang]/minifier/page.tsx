import { getServerTranslation } from '@/i18n/server';
import { Locale } from '@/i18n';
import MinifierClient from './MinifierClient';

// 导出元数据生成函数
export { generateMetadata } from './metadata';

export default async function JsonMinifier({
  params,
}: {
  params: { lang: string };
}) {
  const locale = params.lang as Locale;
  const { t } = await getServerTranslation(locale);
  const minifier = t.minifier;

  return (
    <MinifierClient 
      pageTitle={minifier.title}
      pageDescription={minifier.description}
      pageKeywords={minifier.keywords}
    />
  );
} 