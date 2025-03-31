import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JSON工具集 | 在线JSON格式化、压缩、校验、转换和对比工具",
  description: "专业免费的JSON工具集合，提供JSON格式化、压缩、校验、转换、差异对比、树形编辑器和Schema验证。处理JSON数据的最佳在线工具，支持各种JSON操作。",
  keywords: "JSON工具,JSON格式化,JSON校验,JSON转换,JSON对比,JSON编辑器,JSON Schema,JSON压缩,JSON美化,JSON解析,JSON在线工具",
  authors: [{name: "JSON工具集"}],
  robots: "index, follow",
  openGraph: {
    title: "JSON工具集 | 在线JSON数据处理工具",
    description: "免费在线JSON工具，提供格式化、校验、转换、对比和编辑功能，轻松处理各类JSON数据",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 dark:bg-gray-900`}
        suppressHydrationWarning
      >
        <Navbar />
        <main className="container mx-auto px-2 sm:px-4 py-4 sm:py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
