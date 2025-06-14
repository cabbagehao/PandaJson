'use client';

import { useState, useEffect } from 'react';
import { FiRefreshCw, FiCopy, FiGitPullRequest } from 'react-icons/fi';
import JsonEditor from '../../components/JsonEditor';
import JsonDiffViewer from '../../components/JsonDiffViewer';
import ToolLayout from '../../components/ToolLayout';
import { useTranslation } from '@/i18n/hooks';

interface DiffClientProps {
  pageTitle: string;
  pageDescription: string;
  pageKeywords: string;
  pageIntroduction?: string;
}

export default function DiffClient({
  pageTitle,
  pageDescription,
  pageKeywords,
  pageIntroduction
}: DiffClientProps) {
  const { t } = useTranslation();
  const diff = t('diff');
  const ui = t('common').ui;

  const [json1, setJson1] = useState('');
  const [json2, setJson2] = useState('');
  const [showDiff, setShowDiff] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  // 设置页面标题
  useEffect(() => {
    // 直接使用翻译文件中的seo_title设置页面标题
    document.title = diff.seo_title;
  }, [diff.seo_title]);

  const handleCompare = () => {
    setError(null);
    setIsProcessing(true);

    try {
      // 验证JSON格式
      JSON.parse(json1);
      JSON.parse(json2);

      // 显示差异视图
      setShowDiff(true);
    } catch (err) {
      if (err instanceof Error) {
        setError(`${diff.error}${err.message}`);
      } else {
        setError(diff.unknown);
      }
      setShowDiff(false);
    } finally {
      setIsProcessing(false);
    }
  };

  const clearAll = () => {
    setJson1('');
    setJson2('');
    setShowDiff(false);
    setError(null);
  };

  // 加载示例JSON
  const loadExample = () => {
    setJson1(JSON.stringify({
      "name": "Product",
      "version": "1.0.0",
      "description": "Sample product",
      "price": 19.99,
      "categories": ["electronics", "gadgets"],
      "features": {
        "color": "black",
        "weight": "300g",
        "dimensions": "10x5x2 cm"
      },
      "inStock": true
    }, null, 2));

    setJson2(JSON.stringify({
      "name": "Product",
      "version": "1.1.0",
      "description": "Improved sample product",
      "price": 24.99,
      "categories": ["electronics", "gadgets", "new"],
      "features": {
        "color": "white",
        "weight": "250g",
        "dimensions": "10x5x2 cm",
        "waterproof": true
      },
      "inStock": true,
      "releaseDate": "2023-12-01"
    }, null, 2));
  };

  return (
    <ToolLayout
      title={pageTitle}
      description={pageDescription}
      keywords={pageKeywords}
      introduction={pageIntroduction}
      iconComponent={<FiGitPullRequest className="w-6 h-6 text-purple-500" />}
    >
      <div className="space-y-6">
        {/* 工具栏 */}
        <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-md">
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={handleCompare}
              disabled={isProcessing || !json1.trim() || !json2.trim()}
              className="inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50"
            >
              {isProcessing ? diff.processing : diff.compare}
            </button>

            <button
              type="button"
              onClick={clearAll}
              className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-700 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <FiRefreshCw className="mr-2" />
              {ui.clear}
            </button>

            <button
              type="button"
              onClick={loadExample}
              className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-700 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {diff.loadExample}
            </button>
          </div>
        </div>

        {/* 错误提示 */}
        {error && (
          <div className="p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-md">
            <p className="text-sm text-red-700 dark:text-red-300">{error}</p>
          </div>
        )}

        {/* 差异查看器 */}
        {showDiff ? (
          <div className="h-[500px]">
            <JsonDiffViewer
              leftValue={json1}
              rightValue={json2}
              onLeftChange={setJson1}
              onRightChange={setJson2}
            />
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <JsonEditor
                value={json1}
                onChange={setJson1}
                label={diff.leftInput}
                placeholder={diff.placeholderLeft}
              />
            </div>

            <div>
              <JsonEditor
                value={json2}
                onChange={setJson2}
                label={diff.rightInput}
                placeholder={diff.placeholderRight}
              />
            </div>
          </div>
        )}

        {/* 说明信息 */}
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-md">
          <h3 className="text-lg font-medium text-blue-800 dark:text-blue-200 mb-2">{diff.diffGuide}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-green-200 dark:bg-green-800 mr-2"></div>
              <span className="text-blue-700 dark:text-blue-300">{diff.addedContent}</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-red-200 dark:bg-red-800 mr-2"></div>
              <span className="text-blue-700 dark:text-blue-300">{diff.removedContent}</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-yellow-200 dark:bg-yellow-800 mr-2"></div>
              <span className="text-blue-700 dark:text-blue-300">{diff.modifiedContent}</span>
            </div>
          </div>
        </div>
      </div>
    </ToolLayout>
  );
}