import { defaultLocale as locale } from "@/i18n";
import { getServerTranslation } from "@/i18n/server";
import { Suspense } from 'react';
import LayoutWrapper from "../components/LayoutWrapper";

// 重用英文版本的tree-editor页面组件
export default async function TreeEditorPage() {
  // 获取翻译内容
  const { t } = await getServerTranslation(locale);
  
  // 动态导入英文版本的tree-editor页面组件
  const TreeEditorPage = (await import('../[lang]/tree-editor/page')).default;
  
  // 返回英文版本的tree-editor页面
  return (
    <LayoutWrapper locale={locale} translations={t}>
      <Suspense fallback={<div>Loading...</div>}>
        <TreeEditorPage params={{ lang: locale }} />
      </Suspense>
    </LayoutWrapper>
  );
} 