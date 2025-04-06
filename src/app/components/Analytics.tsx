'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';

// 为百度统计添加全局类型声明
declare global {
  interface Window {
    _hmt: any[];
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export default function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // 监听路由变化，发送页面浏览到Google Analytics和百度统计
  useEffect(() => {
    if (pathname) {
      // 构建完整URL路径
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');

      // 初始化百度统计
      window._hmt = window._hmt || [];
      
      // 百度统计页面浏览
      window._hmt.push(['_trackPageview', url]);
      
      // Google Analytics页面浏览
      if (typeof window.gtag === 'function') {
        window.gtag('config', 'G-NRDYF5ZZDC', {
          page_path: url,
        });
      }
    }
  }, [pathname, searchParams]);

  return (
    <>
      {/* Google Analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-NRDYF5ZZDC`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-NRDYF5ZZDC');
        `}
      </Script>

      {/* 百度统计 */}
      <Script id="baidu-analytics" strategy="afterInteractive">
        {`
          var _hmt = _hmt || [];
          (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?d37cd659bc7d89ea4bac5aa2ca497341";
            var s = document.getElementsByTagName("script")[0]; 
            s.parentNode.insertBefore(hm, s);
          })();
        `}
      </Script>
    </>
  );
} 