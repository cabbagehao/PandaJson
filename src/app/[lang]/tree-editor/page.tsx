'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { FiRefreshCw, FiCopy, FiDownload } from 'react-icons/fi';
import dynamic from 'next/dynamic';
import ToolLayout from '../../components/ToolLayout';
import JsonEditor from '../../components/JsonEditor';
import { Locale, defaultLocale } from '@/i18n';

// 动态导入JSONTree组件以避免服务端渲染问题
const JsonTree = dynamic(() => import('../../components/JsonTree'), { ssr: false });

// 翻译文本
const translations: Record<string, any> = {
  zh: {
    title: 'JSON 树状编辑器',
    description: '以树状结构可视化展示和编辑JSON数据，支持文本和树状视图之间的切换。',
    keywords: 'JSON编辑器,JSON树形编辑,JSON可视化,JSON节点编辑,JSON树形结构',
    textView: '文本视图',
    treeView: '树状视图',
    jsonText: 'JSON 文本',
    jsonTree: 'JSON 树状结构',
    placeholder: '在此输入或粘贴 JSON 数据',
    copy: '复制',
    download: '下载',
    clear: '清除',
    copied: '已复制到剪贴板',
    copyFailed: '复制失败',
    parseError: '解析错误',
    unknownError: '解析过程中发生未知错误',
    updateError: '更新错误',
    emptyInputMessage: '请先在文本编辑器中输入有效的 JSON'
  },
  en: {
    title: 'JSON Tree Editor',
    description: 'Visualize and edit JSON data with a tree structure, supporting switching between text and tree views.',
    keywords: 'JSON editor,JSON tree edit,JSON visualization,JSON node editor,JSON tree structure',
    textView: 'Text View',
    treeView: 'Tree View',
    jsonText: 'JSON Text',
    jsonTree: 'JSON Tree Structure',
    placeholder: 'Enter or paste JSON data here',
    copy: 'Copy',
    download: 'Download',
    clear: 'Clear',
    copied: 'Copied to clipboard',
    copyFailed: 'Copy failed',
    parseError: 'Parse error',
    unknownError: 'Unknown error during parsing',
    updateError: 'Update error',
    emptyInputMessage: 'Please enter valid JSON in the text editor first'
  }
};

export default function TreeEditor() {
  const params = useParams();
  const locale = (params?.lang as Locale) || defaultLocale;
  const t = translations[locale as 'zh' | 'en'] || translations.zh;

  const [jsonText, setJsonText] = useState('');
  const [jsonData, setJsonData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'text' | 'tree'>('text');

  // 当文本编辑器内容变化时更新树视图
  useEffect(() => {
    if (jsonText.trim() === '') {
      setJsonData(null);
      setError(null);
      return;
    }

    try {
      const parsed = JSON.parse(jsonText);
      setJsonData(parsed);
      setError(null);
    } catch (err) {
      if (err instanceof Error) {
        setError(`${t.parseError}: ${err.message}`);
      } else {
        setError(t.unknownError);
      }
      setJsonData(null);
    }
  }, [jsonText, t.parseError, t.unknownError]);

  // 当树视图编辑后更新文本编辑器
  const handleTreeChange = (data: any) => {
    try {
      setJsonData(data);
      setJsonText(JSON.stringify(data, null, 2));
      setError(null);
    } catch (err) {
      if (err instanceof Error) {
        setError(`${t.updateError}: ${err.message}`);
      } else {
        setError(t.unknownError);
      }
    }
  };

  // 复制到剪贴板
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(jsonText);
      alert(t.copied);
    } catch (err) {
      alert(t.copyFailed);
    }
  };

  // 下载JSON文件
  const downloadJson = () => {
    if (!jsonText) return;
    
    const blob = new Blob([jsonText], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'data.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // 清除所有内容
  const clearAll = () => {
    setJsonText('');
    setJsonData(null);
    setError(null);
  };

  return (
    <ToolLayout
      title={t.title}
      description={t.description}
      keywords={t.keywords}
    >
      <div className="space-y-6">
        {/* 视图切换 */}
        <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-md">
          <div className="flex justify-between items-center">
            <div className="flex space-x-4">
              <button
                onClick={() => setViewMode('text')}
                className={`px-4 py-2 rounded-md ${
                  viewMode === 'text'
                    ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {t.textView}
              </button>
              <button
                onClick={() => setViewMode('tree')}
                className={`px-4 py-2 rounded-md ${
                  viewMode === 'tree'
                    ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
                disabled={!jsonData}
              >
                {t.treeView}
              </button>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={copyToClipboard}
                disabled={!jsonText}
                className="inline-flex items-center px-3 py-2 border border-gray-300 dark:border-gray-700 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
              >
                <FiCopy className="mr-1" />
                {t.copy}
              </button>
              <button
                onClick={downloadJson}
                disabled={!jsonText}
                className="inline-flex items-center px-3 py-2 border border-gray-300 dark:border-gray-700 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
              >
                <FiDownload className="mr-1" />
                {t.download}
              </button>
              <button
                onClick={clearAll}
                className="inline-flex items-center px-3 py-2 border border-gray-300 dark:border-gray-700 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <FiRefreshCw className="mr-1" />
                {t.clear}
              </button>
            </div>
          </div>
        </div>

        {/* 编辑器区域 */}
        <div className="space-y-4">
          {viewMode === 'text' ? (
            <JsonEditor
              value={jsonText}
              onChange={setJsonText}
              label={t.jsonText}
              placeholder={t.placeholder}
              error={error || undefined}
            />
          ) : (
            <div className="bg-white dark:bg-gray-800 rounded-md shadow-sm border border-gray-300 dark:border-gray-700 p-4 h-[400px] overflow-auto">
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t.jsonTree}
              </h3>
              {jsonData ? (
                <JsonTree data={jsonData} onChange={handleTreeChange} />
              ) : (
                <div className="flex items-center justify-center h-full text-gray-500 dark:text-gray-400">
                  {error ? error : t.emptyInputMessage}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </ToolLayout>
  );
} 