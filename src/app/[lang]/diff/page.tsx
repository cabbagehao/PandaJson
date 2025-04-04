'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { FiRefreshCw } from 'react-icons/fi';
import JsonEditor from '../../components/JsonEditor';
import JsonDiffViewer from '../../components/JsonDiffViewer';
import ToolLayout from '../../components/ToolLayout';
import { Locale, defaultLocale } from '@/i18n';

// 翻译文本
const translations: Record<string, any> = {
  zh: {
    title: 'JSON 对比工具',
    description: '比较两个 JSON 对象的差异，直观展示新增、删除和修改的内容。',
    keywords: 'JSON对比,JSON比较,JSON差异,JSON比对,JSON比较器',
    leftInput: '第一个 JSON',
    rightInput: '第二个 JSON',
    result: '比较结果',
    placeholderLeft: '在此粘贴第一个 JSON 数据',
    placeholderRight: '在此粘贴第二个 JSON 数据',
    compare: '比较',
    clear: '清除',
    loadExample: '加载示例',
    processing: '处理中...',
    error: '比较错误: ',
    unknown: '比较过程中发生未知错误',
    diffGuide: '差异对比说明',
    addedContent: '新增内容',
    removedContent: '删除内容',
    modifiedContent: '修改内容'
  },
  en: {
    title: 'JSON Diff Tool',
    description: 'Compare two JSON objects and visualize additions, deletions and modifications.',
    keywords: 'JSON diff,JSON compare,JSON difference,JSON comparison,JSON comparator',
    leftInput: 'First JSON',
    rightInput: 'Second JSON',
    result: 'Comparison Result',
    placeholderLeft: 'Paste your first JSON data here',
    placeholderRight: 'Paste your second JSON data here',
    compare: 'Compare',
    clear: 'Clear',
    loadExample: 'Load Example',
    processing: 'Processing...',
    error: 'Comparison error: ',
    unknown: 'Unknown error during comparison',
    diffGuide: 'Diff Guide',
    addedContent: 'Added Content',
    removedContent: 'Removed Content',
    modifiedContent: 'Modified Content'
  }
};

export default function JsonDiff() {
  const params = useParams();
  const locale = (params?.lang as Locale) || defaultLocale;
  const t = translations[locale as 'zh' | 'en'] || translations.zh;

  const [json1, setJson1] = useState('');
  const [json2, setJson2] = useState('');
  const [showDiff, setShowDiff] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

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
        setError(`${t.error}${err.message}`);
      } else {
        setError(t.unknown);
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
      title={t.title}
      description={t.description}
      keywords={t.keywords}
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
              {isProcessing ? t.processing : t.compare}
            </button>
            
            <button
              type="button"
              onClick={clearAll}
              className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-700 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <FiRefreshCw className="mr-2" />
              {t.clear}
            </button>
            
            <button
              type="button"
              onClick={loadExample}
              className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-700 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {t.loadExample}
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
          <JsonDiffViewer
            leftValue={json1}
            rightValue={json2}
            onLeftChange={setJson1}
            onRightChange={setJson2}
            height="500px"
          />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <JsonEditor
                value={json1}
                onChange={setJson1}
                label={t.leftInput}
                placeholder={t.placeholderLeft}
                error={error || undefined}
              />
            </div>
            
            <div>
              <JsonEditor
                value={json2}
                onChange={setJson2}
                label={t.rightInput}
                placeholder={t.placeholderRight}
              />
            </div>
          </div>
        )}

        {/* 说明信息 */}
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-md">
          <h3 className="text-lg font-medium text-blue-800 dark:text-blue-200 mb-2">{t.diffGuide}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-green-200 dark:bg-green-800 mr-2"></div>
              <span className="text-blue-700 dark:text-blue-300">{t.addedContent}</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-red-200 dark:bg-red-800 mr-2"></div>
              <span className="text-blue-700 dark:text-blue-300">{t.removedContent}</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-yellow-200 dark:bg-yellow-800 mr-2"></div>
              <span className="text-blue-700 dark:text-blue-300">{t.modifiedContent}</span>
            </div>
          </div>
        </div>
      </div>
    </ToolLayout>
  );
} 