'use client';

import { useState } from 'react';
import jsBeautify from 'js-beautify';
import { FiCopy, FiDownload, FiRefreshCw } from 'react-icons/fi';
import JsonEditor from '../components/JsonEditor';
import ToolLayout from '../components/ToolLayout';

type BraceStyle = 'collapse' | 'expand' | 'end-expand' | 'none' | 'preserve-inline';

export default function JsonFormatter() {
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
        setError(`JSON解析错误: ${err.message}`);
      } else {
        setError('解析JSON时发生未知错误');
      }
      setOutput('');
    }
  };

  const copyOutput = async () => {
    if (output) {
      try {
        await navigator.clipboard.writeText(output);
        alert('已复制到剪贴板');
      } catch (err) {
        alert('复制失败');
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
      title="JSON 格式化工具 | 在线美化JSON数据"
      description="专业的在线JSON格式化工具，可以将混乱的JSON数据转换为格式化、缩进规范的形式，提高JSON可读性。支持自定义缩进大小、大括号风格和行宽限制，帮助开发者调试和检查JSON数据。"
      keywords="JSON格式化,JSON美化,JSON在线格式化,JSON格式工具,JSON编辑器,JSON缩进,JSON格式化工具,格式化JSON,美化JSON,JSON排版工具,JSON pretty print"
    >
      <div className="space-y-6">
        {/* 工具配置 */}
        <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-md">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">格式化选项</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label htmlFor="indent-size" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                缩进大小
              </label>
              <select
                id="indent-size"
                className="block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:text-white sm:text-sm"
                value={indentSize}
                onChange={(e) => setIndentSize(Number(e.target.value))}
              >
                <option value="2">2个空格</option>
                <option value="4">4个空格</option>
                <option value="8">8个空格</option>
              </select>
            </div>

            <div>
              <label htmlFor="brace-style" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                大括号风格
              </label>
              <select
                id="brace-style"
                className="block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:text-white sm:text-sm"
                value={formatOptions.braceStyle}
                onChange={(e) => setFormatOptions({...formatOptions, braceStyle: e.target.value as BraceStyle})}
              >
                <option value="collapse">折叠</option>
                <option value="expand">展开</option>
                <option value="preserve-inline">保持原样</option>
              </select>
            </div>

            <div>
              <label htmlFor="wrap-line" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                行宽限制
              </label>
              <select
                id="wrap-line"
                className="block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:text-white sm:text-sm"
                value={formatOptions.wrapLineLength}
                onChange={(e) => setFormatOptions({...formatOptions, wrapLineLength: Number(e.target.value)})}
              >
                <option value="0">不限制</option>
                <option value="80">80字符</option>
                <option value="100">100字符</option>
                <option value="120">120字符</option>
              </select>
            </div>

            <div className="flex items-end">
              <button
                type="button"
                onClick={formatJson}
                className="inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-full h-10"
              >
                格式化 JSON
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
              label="输入 JSON"
              placeholder="在此粘贴需要格式化的JSON数据"
              error={error || undefined}
            />
          </div>
          
          <div>
            <div className="mb-2 flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 sm:mb-0">
                格式化结果
              </label>
              <div className="flex space-x-2">
                <button 
                  onClick={copyOutput}
                  disabled={!output}
                  className="inline-flex items-center px-3 py-2 border border-gray-300 dark:border-gray-700 shadow-sm text-sm font-medium rounded text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                >
                  <FiCopy className="mr-1" />
                  复制
                </button>
                <button 
                  onClick={downloadOutput}
                  disabled={!output}
                  className="inline-flex items-center px-3 py-2 border border-gray-300 dark:border-gray-700 shadow-sm text-sm font-medium rounded text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                >
                  <FiDownload className="mr-1" />
                  下载
                </button>
                <button 
                  onClick={clearAll}
                  className="inline-flex items-center px-3 py-2 border border-gray-300 dark:border-gray-700 shadow-sm text-sm font-medium rounded text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <FiRefreshCw className="mr-1" />
                  清除
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