'use client';

import { useState, ReactNode } from 'react';
import { FiInfo, FiCopy } from 'react-icons/fi';
import { useParams } from 'next/navigation';
import { useTranslation } from '@/i18n/hooks';

interface ToolLayoutProps {
  title: string;
  description: string;
  children: ReactNode;
  actionComponent?: ReactNode;
  keywords?: string;
  iconComponent?: ReactNode;
}

export default function ToolLayout({
  title,
  description,
  children,
  actionComponent,
  keywords,
  iconComponent
}: ToolLayoutProps) {
  const [showCopiedMessage, setShowCopiedMessage] = useState(false);
  const { t } = useTranslation();
  const common = t('common');
  const home = common.home;

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
        <div className="flex items-center mb-2 sm:mb-3">
          {iconComponent && (
            <div className="mr-2">
              {iconComponent}
            </div>
          )}
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">{title}</h1>
        </div>
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

      {showCopiedMessage && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg z-50">
          {common.ui.copied || 'Copied to clipboard'}
        </div>
      )}
    </div>
  );
} 