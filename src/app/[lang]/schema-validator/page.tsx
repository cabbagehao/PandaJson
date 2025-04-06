import { getServerTranslation } from '@/i18n/server';
import { Locale } from '@/i18n';
import SchemaValidatorClient from './SchemaValidatorClient';

// 导出元数据生成函数
export { generateMetadata } from './metadata';

export default async function SchemaValidator({
  params,
}: {
  params: { lang: string };
}) {
  const locale = params.lang as Locale;
  const { t } = await getServerTranslation(locale);
  const schemaValidator = t.schemaValidator;

  return (
    <SchemaValidatorClient 
      pageTitle={schemaValidator.title}
      pageDescription={schemaValidator.description}
      pageKeywords={schemaValidator.keywords}
    />
  );
} 