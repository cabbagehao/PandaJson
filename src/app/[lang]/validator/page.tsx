import { getServerTranslation } from '@/i18n/server';
import { Locale } from '@/i18n';
import ValidatorClient from './ValidatorClient';

// 导出元数据生成函数
export { generateMetadata } from './metadata';

export default async function JsonValidator({
  params,
}: {
  params: { lang: string };
}) {
  const locale = params.lang as Locale;
  const { t } = await getServerTranslation(locale);
  const validator = t.validator;

  return (
    <ValidatorClient 
      pageTitle={validator.title}
      pageDescription={validator.description}
      pageKeywords={validator.keywords}
    />
  );
} 