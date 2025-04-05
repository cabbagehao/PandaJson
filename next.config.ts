import type { NextConfig } from "next";
import path from 'path';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // 移除i18n配置，使用中间件处理国际化
  
  webpack: (config, { isServer }) => {
    // 忽略worker相关文件以避免404错误
    if (!isServer) {
      // 在客户端构建中忽略特定的worker文件
      config.module.noParse = [/worker-json\.js$/];
      
      // 提供空模块用于替换
      config.module.rules.push({
        test: /worker-json\.js$/,
        use: [{ loader: 'null-loader' }]
      });
    }
    
    return config;
  },
  
  // ESLint配置
  eslint: {
    // 警告不会导致构建失败
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
