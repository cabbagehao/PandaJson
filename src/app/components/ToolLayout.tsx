'use client';

import { useState, ReactNode } from 'react';
import { FiInfo, FiCopy } from 'react-icons/fi';
import { useParams } from 'next/navigation';

interface ToolLayoutProps {
  title: string;
  description: string;
  children: ReactNode;
  actionComponent?: ReactNode;
  keywords?: string;
}

export default function ToolLayout({
  title,
  description,
  children,
  actionComponent,
  keywords
}: ToolLayoutProps) {
  const [showCopiedMessage, setShowCopiedMessage] = useState(false);
  const params = useParams();
  const lang = (params && 'lang' in params) ? params.lang as string : 'zh';

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setShowCopiedMessage(true);
      setTimeout(() => setShowCopiedMessage(false), 2000);
    } catch (err) {
      console.error('复制失败:', err);
    }
  };

  // 多语言文本
  const t = (key: string) => {
    if (lang === 'en') {
      const texts: Record<string, string> = {
        'guideTitle': 'Usage Guide',
        'step1': 'Paste the JSON data to be processed into the input box',
        'step2': 'Adjust options as needed (if any)',
        'step3': 'After processing, you can copy or download the results',
        'copied': 'Copied to clipboard'
      };
      return texts[key] || key;
    }
    
    // 默认中文
    const texts: Record<string, string> = {
      'guideTitle': '使用说明',
      'step1': '将需要处理的JSON数据粘贴到输入框中',
      'step2': '根据需要调整选项（如果有）',
      'step3': '处理完成后，可以复制或下载结果',
      'copied': '已复制到剪贴板'
    };
    return texts[key] || key;
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">{title}</h1>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">{description}</p>
        {keywords && (
          <meta name="keywords" content={keywords} />
        )}
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 sm:p-6">
        {children}
      </div>

      {actionComponent && (
        <div className="mt-4 sm:mt-6 flex justify-end">
          {actionComponent}
        </div>
      )}

      <div className="mt-8 sm:mt-10 border-t border-gray-200 dark:border-gray-700 pt-4 sm:pt-6">
        <div className="flex flex-col sm:flex-row sm:items-start">
          <div className="flex-shrink-0 mb-3 sm:mb-0 sm:mt-1">
            <FiInfo className="h-5 w-5 text-blue-500" />
          </div>
          <div className="sm:ml-3">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">{t('guideTitle')}</h3>
            <div className="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-300">
              <p className="mb-1">
                1. {t('step1')}
              </p>
              <p className="mb-1">
                2. {t('step2')}
              </p>
              <p className="mb-1">
                3. {t('step3')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {showCopiedMessage && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg z-50">
          {t('copied')}
        </div>
      )}
    </div>
  );
} 