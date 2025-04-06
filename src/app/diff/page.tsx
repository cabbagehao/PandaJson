import { defaultLocale as locale } from "@/i18n";
import { getServerTranslation } from "@/i18n/server";
import { Suspense } from 'react';
import LayoutWrapper from "../components/LayoutWrapper";

// 重用英文版本的diff页面组件
export default async function DiffPage() {
  // 获取翻译内容
  const { t } = await getServerTranslation(locale);
  
  // 动态导入英文版本的diff页面组件
  const DiffPage = (await import('../[lang]/diff/page')).default;
  
  // 返回英文版本的diff页面
  return (
    <LayoutWrapper locale={locale} translations={t}>
      <Suspense fallback={<div>Loading...</div>}>
        <DiffPage params={{ lang: locale }} />
      </Suspense>
    </LayoutWrapper>
  );
} 