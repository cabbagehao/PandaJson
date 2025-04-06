import { defaultLocale as locale } from "@/i18n";
import { getServerTranslation } from "@/i18n/server";
import { Suspense } from 'react';
import LayoutWrapper from "../components/LayoutWrapper";

// 重用英文版本的schema-validator页面组件
export default async function SchemaValidatorPage() {
  // 获取翻译内容
  const { t } = await getServerTranslation(locale);
  
  // 动态导入英文版本的schema-validator页面组件
  const SchemaValidatorPage = (await import('../[lang]/schema-validator/page')).default;
  
  // 返回英文版本的schema-validator页面
  return (
    <LayoutWrapper locale={locale} translations={t}>
      <Suspense fallback={<div>Loading...</div>}>
        <SchemaValidatorPage params={{ lang: locale }} />
      </Suspense>
    </LayoutWrapper>
  );
} 