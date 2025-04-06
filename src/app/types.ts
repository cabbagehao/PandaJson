/**
 * 页面组件的属性类型定义
 */
export type PageProps = {
  params: { lang: string };
  searchParams?: Record<string, string | string[] | undefined>;
}; 