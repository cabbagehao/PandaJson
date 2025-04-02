'use client';

import { useState } from 'react';
import jsBeautify from 'js-beautify';
import { FiCopy, FiDownload, FiRefreshCw } from 'react-icons/fi';
import JsonEditor from '../../components/JsonEditor';
import ToolLayout from '../../components/ToolLayout';
import { useParams } from 'next/navigation';
import { Locale, defaultLocale } from '@/i18n';

type BraceStyle = 'collapse' | 'expand' | 'end-expand' | 'none' | 'preserve-inline';

// 翻译文本
const translations = {
  zh: {
    title: 'JSON 格式化工具',
    description: '将JSON数据格式化成易读的形式，支持自定义缩进、风格和行宽',
    keywords: 'JSON格式化,JSON美化,JSON压缩,JSON验证,在线JSON工具',
    options: '格式化选项',
    indentSize: '缩进大小',
    spaces2: '2个空格',
    spaces4: '4个空格',
    spaces8: '8个空格',
    braceStyle: '大括号风格',
    collapse: '折叠',
    expand: '展开',
    preserveInline: '保持原样',
    lineWidth: '行宽限制',
    noLimit: '不限制',
    chars80: '80字符',
    chars100: '100字符',
    chars120: '120字符',
    format: '格式化 JSON',
    input: '输入 JSON',
    output: '格式化结果',
    placeholder: '在此粘贴需要格式化的JSON数据',
    copy: '复制',
    download: '下载',
    clear: '清除',
    error: 'JSON解析错误: ',
    unknown: '解析JSON时发生未知错误',
    copied: '已复制到剪贴板',
    copyFailed: '复制失败'
  },
  en: {
    title: 'JSON Formatter',
    description: 'Format JSON data into readable form, supports custom indentation, style and line width',
    keywords: 'JSON formatter,JSON beautifier,JSON minifier,JSON validator,online JSON tools',
    options: 'Formatting Options',
    indentSize: 'Indent Size',
    spaces2: '2 spaces',
    spaces4: '4 spaces',
    spaces8: '8 spaces',
    braceStyle: 'Brace Style',
    collapse: 'Collapse',
    expand: 'Expand',
    preserveInline: 'Preserve Inline',
    lineWidth: 'Line Width',
    noLimit: 'No Limit',
    chars80: '80 chars',
    chars100: '100 chars',
    chars120: '120 chars',
    format: 'Format JSON',
    input: 'Input JSON',
    output: 'Output Result',
    placeholder: 'Paste your JSON data here to format...',
    copy: 'Copy',
    download: 'Download',
    clear: 'Clear',
    error: 'JSON parsing error: ',
    unknown: 'Unknown error while parsing JSON',
    copied: 'Copied to clipboard',
    copyFailed: 'Copy failed'
  }
};

export default function JsonFormatter() {
  const params = useParams();
  const locale = (params?.lang as Locale) || defaultLocale;
  const t = translations[locale] || translations.zh;

  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [indentSize, setIndentSize] = useState(2);
  const [formatOptions, setFormatOptions] = useState({
    braceStyle: 'collapse' as BraceStyle,
    preserveNewlines: true,
    maxPreserveNewlines: 2,
    wrapLineLength: 80, 
  });

  const formatJson = () => {
    setError(null);
    
    try {
      // 首先检查输入是否为有效JSON
      const parsedJson = JSON.parse(input);
      
      // 使用js-beautify格式化
      const formattedJson = jsBeautify.js_beautify(JSON.stringify(parsedJson), {
        indent_size: indentSize,
        brace_style: formatOptions.braceStyle,
        preserve_newlines: formatOptions.preserveNewlines,
        max_preserve_newlines: formatOptions.maxPreserveNewlines,
        wrap_line_length: formatOptions.wrapLineLength,
      });
      
      setOutput(formattedJson);
    } catch (err) {
      if (err instanceof Error) {
        setError(`${t.error}${err.message}`);
      } else {
        setError(t.unknown);
      }
      setOutput('');
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
      a.download = 'formatted-json.json';
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
  };

  return (
    <ToolLayout
      title={t.title}
      description={t.description}
      keywords={t.keywords}
    >
      <div className="space-y-6">
        {/* 工具配置 */}
        <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-md">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">{t.options}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label htmlFor="indent-size" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {t.indentSize}
              </label>
              <select
                id="indent-size"
                className="block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:text-white sm:text-sm"
                value={indentSize}
                onChange={(e) => setIndentSize(Number(e.target.value))}
              >
                <option value="2">{t.spaces2}</option>
                <option value="4">{t.spaces4}</option>
                <option value="8">{t.spaces8}</option>
              </select>
            </div>

            <div>
              <label htmlFor="brace-style" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {t.braceStyle}
              </label>
              <select
                id="brace-style"
                className="block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:text-white sm:text-sm"
                value={formatOptions.braceStyle}
                onChange={(e) => setFormatOptions({...formatOptions, braceStyle: e.target.value as BraceStyle})}
              >
                <option value="collapse">{t.collapse}</option>
                <option value="expand">{t.expand}</option>
                <option value="preserve-inline">{t.preserveInline}</option>
              </select>
            </div>

            <div>
              <label htmlFor="wrap-line" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {t.lineWidth}
              </label>
              <select
                id="wrap-line"
                className="block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:text-white sm:text-sm"
                value={formatOptions.wrapLineLength}
                onChange={(e) => setFormatOptions({...formatOptions, wrapLineLength: Number(e.target.value)})}
              >
                <option value="0">{t.noLimit}</option>
                <option value="80">{t.chars80}</option>
                <option value="100">{t.chars100}</option>
                <option value="120">{t.chars120}</option>
              </select>
            </div>

            <div className="flex items-end">
              <button
                type="button"
                onClick={formatJson}
                className="inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-full h-10"
              >
                {t.format}
              </button>
            </div>
          </div>
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
                <button 
                  onClick={clearAll}
                  className="inline-flex items-center px-3 py-2 border border-gray-300 dark:border-gray-700 shadow-sm text-sm font-medium rounded text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <FiRefreshCw className="mr-1" />
                  {t.clear}
                </button>
              </div>
            </div>
            <JsonEditor
              value={output}
              onChange={setOutput}
              readOnly={true}
            />
          </div>
        </div>
      </div>
    </ToolLayout>
  );
} 