import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // 移除i18n配置，使用中间件处理国际化
};

export default nextConfig;
