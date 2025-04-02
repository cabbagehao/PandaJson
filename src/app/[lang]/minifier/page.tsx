'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { FiCopy, FiDownload, FiRefreshCw } from 'react-icons/fi';
import ToolLayout from '../../components/ToolLayout';
import JsonEditor from '../../components/JsonEditor';
import { Locale, defaultLocale } from '@/i18n';

// 翻译文本
const translations = {
  zh: {
    title: 'JSON 压缩工具',
    description: '压缩JSON数据以减小文件大小，移除空格和换行符',
    keywords: 'JSON压缩,JSON最小化,JSON体积优化,JSON去空格,JSON压缩器',
    input: '输入JSON',
    output: '压缩结果',
    placeholder: '在此粘贴需要压缩的JSON数据...',
    minify: '压缩',
    copy: '复制',
    download: '下载',
    clear: '清除',
    error: '无效的JSON数据，请检查语法',
    copied: '已复制到剪贴板',
    copyFailed: '复制失败',
    stats: '统计信息',
    originalSize: '原始大小',
    minifiedSize: '压缩后大小',
    savings: '节省',
    bytes: '字节',
    characters: '字符'
  },
  en: {
    title: 'JSON Minifier',
    description: 'Minify JSON data to reduce file size by removing whitespace and line breaks',
    keywords: 'JSON minifier,JSON minification,JSON size optimization,JSON whitespace removal,JSON compressor',
    input: 'Input JSON',
    output: 'Minified Result',
    placeholder: 'Paste your JSON data here to minify...',
    minify: 'Minify',
    copy: 'Copy',
    download: 'Download',
    clear: 'Clear',
    error: 'Invalid JSON data, please check syntax',
    copied: 'Copied to clipboard',
    copyFailed: 'Copy failed',
    stats: 'Statistics',
    originalSize: 'Original Size',
    minifiedSize: 'Minified Size',
    savings: 'Savings',
    bytes: 'bytes',
    characters: 'characters'
  }
};

export default function JsonMinifier() {
  const params = useParams();
  const locale = (params?.lang as Locale) || defaultLocale;
  const t = translations[locale] || translations.zh;
  
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [stats, setStats] = useState<{
    originalSize: number;
    minifiedSize: number;
    savings: number;
    savingsPercent: number;
  } | null>(null);

  const minifyJson = () => {
    setError(null);
    setOutput('');
    setStats(null);
    
    if (!input.trim()) {
      return;
    }
    
    try {
      // 解析JSON以验证格式
      const parsedJson = JSON.parse(input);
      
      // 使用JSON.stringify压缩JSON（移除所有空格）
      const minified = JSON.stringify(parsedJson);
      
      setOutput(minified);
      
      // 计算压缩统计信息
      const originalSize = input.length;
      const minifiedSize = minified.length;
      const savings = originalSize - minifiedSize;
      const savingsPercent = originalSize > 0 ? Math.round((savings / originalSize) * 100) : 0;
      
      setStats({
        originalSize,
        minifiedSize,
        savings,
        savingsPercent
      });
    } catch (err) {
      if (err instanceof Error) {
        setError(`${t.error}: ${err.message}`);
      } else {
        setError(t.error);
      }
    }
  };

  const copyOutput = async () => {
    if (output) {
      try {
        await navigator.clipboard.writeText(output);
        alert(t.copied);
      } catch (err) {
        alert(t.copyFailed);
      }
    }
  };

  const downloadOutput = () => {
    if (output) {
      const blob = new Blob([output], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'minified.json';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  const clearAll = () => {
    setInput('');
    setOutput('');
    setError(null);
    setStats(null);
  };

  return (
    <ToolLayout
      title={t.title}
      description={t.description}
      keywords={t.keywords}
    >
      <div className="space-y-6">
        {/* 工具配置 */}
        <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-md flex justify-end space-x-2">
          <button
            type="button"
            onClick={minifyJson}
            className="inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            {t.minify}
          </button>
          <button 
            onClick={clearAll}
            className="inline-flex items-center px-3 py-2 border border-gray-300 dark:border-gray-700 shadow-sm text-sm font-medium rounded text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <FiRefreshCw className="mr-1" />
            {t.clear}
          </button>
        </div>

        {/* 输入/输出区域 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <JsonEditor
              value={input}
              onChange={setInput}
              label={t.input}
              placeholder={t.placeholder}
              error={error || undefined}
            />
          </div>
          
          <div>
            <div className="mb-2 flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 sm:mb-0">
                {t.output}
              </label>
              <div className="flex space-x-2">
                <button 
                  onClick={copyOutput}
                  disabled={!output}
                  className="inline-flex items-center px-3 py-2 border border-gray-300 dark:border-gray-700 shadow-sm text-sm font-medium rounded text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                >
                  <FiCopy className="mr-1" />
                  {t.copy}
                </button>
                <button 
                  onClick={downloadOutput}
                  disabled={!output}
                  className="inline-flex items-center px-3 py-2 border border-gray-300 dark:border-gray-700 shadow-sm text-sm font-medium rounded text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                >
                  <FiDownload className="mr-1" />
                  {t.download}
                </button>
              </div>
            </div>
            <div className="border rounded-md bg-white dark:bg-gray-800 p-4 h-[300px] overflow-auto">
              <pre className="text-sm text-gray-800 dark:text-gray-200 whitespace-pre-wrap break-words font-mono">
                {output}
              </pre>
            </div>
            
            {/* 压缩统计信息 */}
            {stats && (
              <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-md">
                <h4 className="text-sm font-medium text-blue-800 dark:text-blue-300 mb-2">
                  {t.stats}
                </h4>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="text-gray-600 dark:text-gray-400">{t.originalSize}</div>
                    <div className="font-medium text-gray-900 dark:text-white">
                      {stats.originalSize.toLocaleString()} {t.characters}
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-600 dark:text-gray-400">{t.minifiedSize}</div>
                    <div className="font-medium text-gray-900 dark:text-white">
                      {stats.minifiedSize.toLocaleString()} {t.characters}
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-600 dark:text-gray-400">{t.savings}</div>
                    <div className="font-medium text-green-600 dark:text-green-400">
                      {stats.savings.toLocaleString()} {t.characters} ({stats.savingsPercent}%)
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </ToolLayout>
  );
} 