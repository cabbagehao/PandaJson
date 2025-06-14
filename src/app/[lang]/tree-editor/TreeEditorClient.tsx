'use client';

import { useState, useEffect } from 'react';
import { FiRefreshCw, FiCopy, FiDownload, FiEdit } from 'react-icons/fi';
import dynamic from 'next/dynamic';
import ToolLayout from '../../components/ToolLayout';
import JsonEditor from '../../components/JsonEditor';
import { useTranslation } from '@/i18n/hooks';

// 动态导入JSONTree组件以避免服务端渲染问题
const JsonTree = dynamic(() => import('../../components/JsonTree'), { ssr: false });

interface TreeEditorClientProps {
  pageTitle: string;
  pageDescription: string;
  pageKeywords: string;
  pageIntroduction?: string;
}

export default function TreeEditorClient({
  pageTitle,
  pageDescription,
  pageKeywords,
  pageIntroduction
}: TreeEditorClientProps) {
  const { t } = useTranslation();
  const treeEditor = t('treeEditor');
  const ui = t('common').ui;

  const [jsonText, setJsonText] = useState('');
  const [jsonData, setJsonData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'text' | 'tree'>('text');

  // 设置页面标题
  useEffect(() => {
    // 直接使用翻译文件中的seo_title设置页面标题
    document.title = treeEditor.seo_title;
  }, [treeEditor.seo_title]);

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
        setError(`${treeEditor.parseError}: ${err.message}`);
      } else {
        setError(treeEditor.unknownError);
      }
      setJsonData(null);
    }
  }, [jsonText, treeEditor.parseError, treeEditor.unknownError]);

  // 当树视图编辑后更新文本编辑器
  const handleTreeChange = (data: any) => {
    try {
      setJsonData(data);
      setJsonText(JSON.stringify(data, null, 2));
      setError(null);
    } catch (err) {
      if (err instanceof Error) {
        setError(`${treeEditor.updateError}: ${err.message}`);
      } else {
        setError(treeEditor.unknownError);
      }
    }
  };

  // 复制到剪贴板
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(jsonText);
      alert(treeEditor.copied);
    } catch (err) {
      alert(treeEditor.copyFailed);
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
      title={pageTitle}
      description={pageDescription}
      keywords={pageKeywords}
      introduction={pageIntroduction}
      iconComponent={<FiEdit className="w-6 h-6 text-indigo-500" />}
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
                {treeEditor.textView}
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
                {treeEditor.treeView}
              </button>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={copyToClipboard}
                disabled={!jsonText}
                className="inline-flex items-center px-3 py-2 border border-gray-300 dark:border-gray-700 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
              >
                <FiCopy className="mr-1" />
                {treeEditor.copy}
              </button>
              <button
                onClick={downloadJson}
                disabled={!jsonText}
                className="inline-flex items-center px-3 py-2 border border-gray-300 dark:border-gray-700 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
              >
                <FiDownload className="mr-1" />
                {treeEditor.download}
              </button>
              <button
                onClick={clearAll}
                className="inline-flex items-center px-3 py-2 border border-gray-300 dark:border-gray-700 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <FiRefreshCw className="mr-1" />
                {treeEditor.clear}
              </button>
            </div>
          </div>
        </div>

        {/* 编辑器区域 */}
        <div className="space-y-4">
          {viewMode === 'text' ? (
            <div>
              {/* 错误信息显示区域 */}
              {error && (
                <div className="mb-3 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-red-800 dark:text-red-300">{error}</p>
                    </div>
                  </div>
                </div>
              )}
              <JsonEditor
                value={jsonText}
                onChange={setJsonText}
                label={treeEditor.jsonText}
                placeholder={treeEditor.placeholder}
              />
            </div>
          ) : (
            <div className="bg-white dark:bg-gray-800 rounded-md shadow-sm border border-gray-300 dark:border-gray-700 p-4 h-[400px] overflow-auto">
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {treeEditor.jsonTree}
              </h3>
              {jsonData ? (
                <JsonTree data={jsonData} onChange={handleTreeChange} />
              ) : (
                <div className="flex items-center justify-center h-full text-gray-500 dark:text-gray-400">
                  {error ? error : treeEditor.emptyInputMessage}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </ToolLayout>
  );
}