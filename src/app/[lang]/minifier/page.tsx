'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { FiCopy, FiDownload, FiRefreshCw } from 'react-icons/fi';
import ToolLayout from '../../components/ToolLayout';
import JsonEditor from '../../components/JsonEditor';
import { Locale, defaultLocale } from '@/i18n';

// 翻译文本
const translations: Record<string, any> = {
  zh: {
    title: 'JSON 压缩工具',
    description: '压缩JSON数据，去除空格和换行符，减小文件大小，适合传输和存储。',
    keywords: 'JSON压缩,JSON最小化,JSON体积优化,JSON去空格,JSON压缩器',
    input: '输入 JSON',
    output: '压缩结果',
    placeholder: '在此粘贴需要压缩的JSON数据',
    minify: '压缩 JSON',
    copy: '复制',
    download: '下载',
    clear: '清除全部',
    error: '无效的JSON数据，请检查语法',
    copied: '已复制到剪贴板',
    copyFailed: '复制失败',
    compressionResult: '压缩结果',
    originalSize: '原始大小',
    compressedSize: '压缩后大小',
    compressionRatio: '压缩率'
  },
  en: {
    title: 'JSON Minifier',
    description: 'Compress JSON data by removing whitespace and line breaks, reducing file size for transmission and storage.',
    keywords: 'JSON minifier,JSON minification,JSON size optimization,JSON whitespace removal,JSON compressor',
    input: 'Input JSON',
    output: 'Minified Result',
    placeholder: 'Paste your JSON data here to minify',
    minify: 'Minify JSON',
    copy: 'Copy',
    download: 'Download',
    clear: 'Clear All',
    error: 'Invalid JSON data, please check syntax',
    copied: 'Copied to clipboard',
    copyFailed: 'Copy failed',
    compressionResult: 'Compression Result',
    originalSize: 'Original Size',
    compressedSize: 'Compressed Size',
    compressionRatio: 'Compression Ratio'
  }
};

export default function JsonMinifier() {
  const params = useParams();
  const locale = (params?.lang as Locale) || defaultLocale;
  const t = translations[locale as 'zh' | 'en'] || translations.zh;
  
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [compressionResults, setCompressionResults] = useState<{
    originalSize: number;
    compressedSize: number;
    compressionRatio: number;
  } | null>(null);

  const minifyJson = () => {
    setError(null);
    
    try {
      // 首先检查输入是否为有效JSON
      const parsedJson = JSON.parse(input);
      
      // 使用JSON.stringify压缩（不包含空格）
      const minifiedJson = JSON.stringify(parsedJson);
      
      // 计算压缩比
      const originalSize = new Blob([input]).size;
      const compressedSize = new Blob([minifiedJson]).size;
      const compressionRatio = ((originalSize - compressedSize) / originalSize) * 100;
      
      setOutput(minifiedJson);
      setCompressionResults({
        originalSize,
        compressedSize,
        compressionRatio
      });
    } catch (err) {
      if (err instanceof Error) {
        setError(`${t.error}: ${err.message}`);
      } else {
        setError(t.error);
      }
      setOutput('');
      setCompressionResults(null);
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
      a.download = 'minified-json.json';
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
    setCompressionResults(null);
  };

  const formatSize = (bytes: number) => {
    if (bytes < 1024) {
      return `${bytes} B`;
    } else if (bytes < 1024 * 1024) {
      return `${(bytes / 1024).toFixed(2)} KB`;
    } else {
      return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
    }
  };

  return (
    <ToolLayout
      title={t.title}
      description={t.description}
      keywords={t.keywords}
    >
      <div className="space-y-6">
        {/* 工具操作 */}
        <div className="flex justify-between items-center">
          <button
            type="button"
            onClick={minifyJson}
            className="inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            {t.minify}
          </button>
          
          <button 
            onClick={clearAll}
            className="inline-flex items-center px-3 py-2 border border-gray-300 dark:border-gray-700 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <FiRefreshCw className="mr-1.5 h-4 w-4" />
            {t.clear}
          </button>
        </div>

        {/* 压缩结果统计信息 */}
        {compressionResults && (
          <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-md p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-sm font-medium text-blue-800 dark:text-blue-300">{t.compressionResult}</h3>
                  <div className="mt-1 text-sm text-blue-700 dark:text-blue-200">
                    <p>{t.originalSize}: {formatSize(compressionResults.originalSize)}</p>
                    <p>{t.compressedSize}: {formatSize(compressionResults.compressedSize)}</p>
                    <p>{t.compressionRatio}: {compressionResults.compressionRatio.toFixed(2)}%</p>
                  </div>
                </div>
                <div className="mt-4 sm:mt-0 flex space-x-2">
                  <button 
                    onClick={copyOutput}
                    disabled={!output}
                    className="inline-flex items-center px-2.5 py-1.5 border border-blue-300 dark:border-blue-700 shadow-sm text-xs font-medium rounded text-blue-700 dark:text-blue-300 bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                  >
                    <FiCopy className="mr-1" />
                    {t.copy}
                  </button>
                  <button 
                    onClick={downloadOutput}
                    disabled={!output}
                    className="inline-flex items-center px-2.5 py-1.5 border border-blue-300 dark:border-blue-700 shadow-sm text-xs font-medium rounded text-blue-700 dark:text-blue-300 bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                  >
                    <FiDownload className="mr-1" />
                    {t.download}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

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
            <JsonEditor
              value={output}
              onChange={setOutput}
              label={t.output}
              readOnly={true}
            />
          </div>
        </div>
      </div>
    </ToolLayout>
  );
} 