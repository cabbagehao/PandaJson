'use client';

import { useState, ReactNode, useEffect } from 'react';
import { FiInfo, FiCopy, FiHelpCircle, FiBook } from 'react-icons/fi';
import { useParams } from 'next/navigation';
import { useTranslation } from '@/i18n/hooks';

interface ToolLayoutProps {
  title: string;
  description: string;
  introduction?: string;
  children: ReactNode;
  actionComponent?: ReactNode;
  keywords?: string;
  iconComponent?: ReactNode;
}

export default function ToolLayout({
  title,
  description,
  introduction,
  children,
  actionComponent,
  keywords,
  iconComponent
}: ToolLayoutProps) {
  const [showCopiedMessage, setShowCopiedMessage] = useState(false);
  const params = useParams();
  const { t } = useTranslation();
  const common = t('common');
  const home = common.home;
  
  // Get the tool-specific translations based on current path
  const getCurrentTool = (pathname?: string) => {
    // Use provided pathname or get from window (client-side only)
    const path = pathname || (typeof window !== 'undefined' ? window.location.pathname : '');
    if (path.includes('/formatter')) return t('formatter');
    if (path.includes('/validator')) return t('validator');
    if (path.includes('/converter')) return t('converter');
    if (path.includes('/diff')) return t('diff');
    if (path.includes('/tree-editor')) return t('treeEditor');
    if (path.includes('/schema-validator')) return t('schemaValidator');
    if (path.includes('/minifier')) return t('minifier');
    return null;
  };
  
  const [toolTranslations, setToolTranslations] = useState(null);
  const [isClient, setIsClient] = useState(false);

  // Set tool translations on client side
  useEffect(() => {
    setIsClient(true);
    const tool = getCurrentTool();
    setToolTranslations(tool);
  }, []);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setShowCopiedMessage(true);
      setTimeout(() => setShowCopiedMessage(false), 2000);
    } catch (err) {
      console.error('复制失败:', err);
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div>
        <div className="flex items-center justify-center mb-2 sm:mb-3">
          {iconComponent && (
            <div className="mr-2">
              {iconComponent}
            </div>
          )}
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white text-center">{title}</h1>
        </div>
        <div className="prose dark:prose-invert max-w-none text-base sm:text-lg text-gray-600 dark:text-gray-300">
          {description.split('\n').map((paragraph, index) => (
            <p key={index} dangerouslySetInnerHTML={{
              __html: paragraph
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                .replace(/\*(.*?)\*/g, '<em>$1</em>')
                .replace(/`([^`]+)`/g, '<code class="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-sm">$1</code>')
            }} />
          ))}
        </div>
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
            <FiInfo className="h-5 w-5 text-blue-500" suppressHydrationWarning />
          </div>
          <div className="sm:ml-3">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">{common.ui.usageGuide || 'Usage Guide'}</h3>
            <div className="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-300">
              <p className="mb-1">
                1. {common.ui.step1 || 'Paste the JSON data to be processed into the input box'}
              </p>
              <p className="mb-1">
                2. {common.ui.step2 || 'Adjust options as needed (if any)'}
              </p>
              <p className="mb-1">
                3. {common.ui.step3 || 'After processing, you can copy or download the results'}
              </p>
            </div>
          </div>
        </div>
      </div>

            {introduction && (
        <div className="mt-8 sm:mt-10 border-t border-gray-200 dark:border-gray-700 pt-4 sm:pt-6">
          <div className="prose dark:prose-invert max-w-none">
            {introduction.split('\n\n').map((paragraph, index) => {
                            // 处理包含冒号的列表部分（支持中英文模式）
              const listPatterns = [
                'Key features include:',
                'This tool is perfect for:',
                '主要功能包括：',
                '功能包括：',
                '特点包括：',
                '优势包括：',
                '包括：'
              ];

              const hasListPattern = listPatterns.some(pattern => paragraph.includes(pattern));

              if (hasListPattern || paragraph.includes('：') && paragraph.includes('•')) {
                const parts = paragraph.split(/[：:]([\s\S]*)/);
                const beforeText = parts[0] + (paragraph.includes('：') ? '：' : ':');
                const listContent = parts[1] ? parts[1].trim() : '';

                if (listContent) {
                  const listItems = listContent.split('•').filter(item => item.trim().length > 0);

                  return (
                    <div key={index} className="mb-4">
                      <p className="mb-2 text-gray-700 dark:text-gray-300">{beforeText}</p>
                      <ul className="list-disc pl-6 space-y-2">
                        {listItems.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-gray-700 dark:text-gray-300 leading-relaxed">{item.trim()}</li>
                        ))}
                      </ul>
                    </div>
                  );
                }
              }

              // 处理数字编号列表 (1. 2. 3. 等)
              const numberedListRegex = /^\d+\.\s/;
              if (numberedListRegex.test(paragraph.trim())) {
                const items = paragraph.split(/(?=\d+\.\s)/).filter(item => item.trim().length > 0);

                return (
                  <div key={index} className="mb-4">
                    <ol className="list-decimal list-inside space-y-2">
                      {items.map((item, itemIndex) => {
                        const cleanItem = item.replace(/^\d+\.\s/, '').trim();
                        return (
                          <li key={itemIndex} className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            {cleanItem}
                          </li>
                        );
                      })}
                    </ol>
                  </div>
                );
              }

              return (
                <p key={index} className="mb-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </div>
        </div>
      )}

      <div className="mt-12 sm:mt-16 text-center px-4 sm:px-0 border-t border-gray-200 dark:border-gray-700 pt-6 sm:pt-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
          {home.whyChooseUs}
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
          <div className="p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
            <h3 className="font-semibold text-base sm:text-lg mb-2">{home.features.comprehensive}</h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">{home.descriptions?.comprehensive || ""}</p>
          </div>
          <div className="p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
            <h3 className="font-semibold text-base sm:text-lg mb-2">{home.features.free}</h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">{home.descriptions?.free || ""}</p>
          </div>
          <div className="p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
            <h3 className="font-semibold text-base sm:text-lg mb-2">{home.features.secure}</h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">{home.descriptions?.secure || ""}</p>
          </div>
        </div>
      </div>

      {/* How to Use Section - Show for all languages if tool translations available */}
      {isClient && toolTranslations?.howToUse && (
        <div className="mt-12 sm:mt-16 border-t border-gray-200 dark:border-gray-700 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row sm:items-start mb-6">
            <div className="flex-shrink-0 mb-3 sm:mb-0 sm:mt-1">
              <FiBook className="h-6 w-6 text-green-500" suppressHydrationWarning />
            </div>
            <div className="sm:ml-3 w-full">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {toolTranslations.howToUse.title}
              </h2>
              <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
                {toolTranslations.howToUse.steps?.map((step: any, index: number) => (
                  <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-100 dark:border-gray-700">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center text-sm font-semibold mr-3">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FAQ Section - Show for all languages if tool translations available */}
      {isClient && toolTranslations?.faq && (
        <div className="mt-12 sm:mt-16 border-t border-gray-200 dark:border-gray-700 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row sm:items-start">
            <div className="flex-shrink-0 mb-3 sm:mb-0 sm:mt-1">
              <FiHelpCircle className="h-6 w-6 text-purple-500" suppressHydrationWarning />
            </div>
            <div className="sm:ml-3 w-full">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {toolTranslations.faq.title}
              </h2>
              <div className="space-y-4">
                {toolTranslations.faq.items?.map((item: any, index: number) => (
                  <details key={index} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700 overflow-hidden">
                    <summary className="px-6 py-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors">
                      <span className="font-medium text-gray-900 dark:text-white">{item.question}</span>
                    </summary>
                    <div className="px-6 pb-4">
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.answer}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {showCopiedMessage && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg z-50">
          {common.ui.copied || 'Copied to clipboard'}
        </div>
      )}
    </div>
  );
}