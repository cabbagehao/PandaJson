/**
 * 辅助函数：安全解析params - Next.js 15兼容
 */
export async function resolveParams(params: Promise<{ lang: string }> | { lang: string }): Promise<{ lang: string }> {
  try {
    const resolved = await Promise.resolve(params);
    // 确保resolved不为null或undefined且包含lang属性
    if (!resolved || typeof resolved !== 'object' || !resolved.lang) {
      throw new Error('Invalid params: missing lang property');
    }
    return resolved;
  } catch (error) {
    console.error('Error resolving params:', error);
    // 提供默认值以防出错
    return { lang: 'en' };
  }
} 