'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import ToolLayout from '../../components/ToolLayout';
import JsonEditor from '../../components/JsonEditor';
import { Locale, defaultLocale } from '@/i18n';
import { FiRefreshCw, FiCopy, FiDownload } from 'react-icons/fi';

// 翻译文本
const translations = {
  zh: {
    title: 'JSON 转换工具',
    description: '在JSON、XML、YAML等格式之间进行转换',
    keywords: 'JSON转换,JSON到XML,JSON到YAML,XML到JSON,YAML到JSON',
    input: '输入JSON',
    output: '转换结果',
    convertToXml: '转换为XML',
    convertToYaml: '转换为YAML',
    convertToCsv: '转换为CSV',
    copy: '复制',
    download: '下载',
    clear: '清除',
    placeholder: '在此粘贴需要转换的JSON数据...',
    error: '无效的JSON数据，请检查语法',
    copied: '已复制到剪贴板',
    copyFailed: '复制失败',
    formatType: '格式类型',
    convert: '转换'
  },
  en: {
    title: 'JSON Converter',
    description: 'Convert between JSON, XML, YAML and other formats',
    keywords: 'JSON converter,JSON to XML,JSON to YAML,XML to JSON,YAML to JSON',
    input: 'Input JSON',
    output: 'Conversion Result',
    convertToXml: 'Convert to XML',
    convertToYaml: 'Convert to YAML',
    convertToCsv: 'Convert to CSV',
    copy: 'Copy',
    download: 'Download',
    clear: 'Clear',
    placeholder: 'Paste your JSON data here to convert...',
    error: 'Invalid JSON data, please check syntax',
    copied: 'Copied to clipboard',
    copyFailed: 'Copy failed',
    formatType: 'Format Type',
    convert: 'Convert'
  }
};

// 简单的JSON到XML转换函数
function jsonToXml(obj: any, indent = ''): string {
  let xml = '';
  for (const prop in obj) {
    if (obj[prop] === null || obj[prop] === undefined) {
      xml += `${indent}<${prop}/>\n`;
    } else if (typeof obj[prop] === 'object') {
      if (Array.isArray(obj[prop])) {
        // 处理数组
        for (const item of obj[prop]) {
          if (typeof item === 'object') {
            xml += `${indent}<${prop}>\n${jsonToXml(item, indent + '  ')}${indent}</${prop}>\n`;
          } else {
            xml += `${indent}<${prop}>${item}</${prop}>\n`;
          }
        }
      } else {
        // 处理对象
        xml += `${indent}<${prop}>\n${jsonToXml(obj[prop], indent + '  ')}${indent}</${prop}>\n`;
      }
    } else {
      xml += `${indent}<${prop}>${obj[prop]}</${prop}>\n`;
    }
  }
  return xml;
}

// 简单的JSON到YAML转换函数
function jsonToYaml(obj: any, indent = 0): string {
  let yaml = '';
  const spaces = ' '.repeat(indent);
  
  for (const key in obj) {
    if (obj[key] === null || obj[key] === undefined) {
      yaml += `${spaces}${key}: null\n`;
    } else if (typeof obj[key] === 'object') {
      if (Array.isArray(obj[key])) {
        // 处理数组
        yaml += `${spaces}${key}:\n`;
        for (const item of obj[key]) {
          if (typeof item === 'object') {
            yaml += `${spaces}- \n${jsonToYaml(item, indent + 2).split('\n').map(line => `${spaces}  ${line}`).join('\n')}\n`;
          } else {
            yaml += `${spaces}- ${item}\n`;
          }
        }
      } else {
        // 处理对象
        yaml += `${spaces}${key}:\n${jsonToYaml(obj[key], indent + 2)}`;
      }
    } else {
      if (typeof obj[key] === 'string' && (obj[key].includes('\n') || obj[key].includes(':'))) {
        yaml += `${spaces}${key}: |\n${obj[key].split('\n').map(line => `${spaces}  ${line}`).join('\n')}\n`;
      } else {
        yaml += `${spaces}${key}: ${obj[key]}\n`;
      }
    }
  }
  return yaml;
}

// 简单的JSON到CSV转换函数（只处理简单的数组对象）
function jsonToCsv(obj: any): string {
  if (!Array.isArray(obj)) {
    // 如果不是数组，尝试将单个对象转换为数组
    obj = [obj];
  }
  
  if (obj.length === 0) return '';
  
  // 提取标题
  const headers = Object.keys(obj[0]);
  let csv = headers.join(',') + '\n';
  
  // 处理每行数据
  for (const row of obj) {
    const values = headers.map(header => {
      const value = row[header];
      if (value === null || value === undefined) return '';
      if (typeof value === 'object') return JSON.stringify(value);
      // 处理包含逗号的字符串
      if (typeof value === 'string' && value.includes(',')) {
        return `"${value.replace(/"/g, '""')}"`;
      }
      return value;
    });
    csv += values.join(',') + '\n';
  }
  
  return csv;
}

type ConversionType = 'xml' | 'yaml' | 'csv';

export default function JsonConverter() {
  const params = useParams();
  const locale = (params?.lang as Locale) || defaultLocale;
  const t = translations[locale] || translations.zh;
  
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [conversionType, setConversionType] = useState<ConversionType>('xml');
  
  const convertJson = () => {
    setError(null);
    
    if (!input.trim()) {
      setOutput('');
      return;
    }
    
    try {
      const parsedJson = JSON.parse(input);
      
      let result = '';
      switch (conversionType) {
        case 'xml':
          result = '<?xml version="1.0" encoding="UTF-8"?>\n<root>\n' + 
                  jsonToXml(parsedJson, '  ') + 
                  '</root>';
          break;
        case 'yaml':
          result = jsonToYaml(parsedJson);
          break;
        case 'csv':
          result = jsonToCsv(parsedJson);
          break;
      }
      
      setOutput(result);
    } catch (err) {
      if (err instanceof Error) {
        setError(`${t.error}: ${err.message}`);
      } else {
        setError(t.error);
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
    if (!output) return;
    
    let fileName = 'converted';
    let mimeType = 'text/plain';
    
    switch (conversionType) {
      case 'xml':
        fileName += '.xml';
        mimeType = 'application/xml';
        break;
      case 'yaml':
        fileName += '.yaml';
        mimeType = 'application/yaml';
        break;
      case 'csv':
        fileName += '.csv';
        mimeType = 'text/csv';
        break;
    }
    
    const blob = new Blob([output], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
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
          <div className="flex flex-wrap gap-4 items-center">
            <div>
              <label htmlFor="conversion-type" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {t.formatType}
              </label>
              <select
                id="conversion-type"
                className="block rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:text-white sm:text-sm"
                value={conversionType}
                onChange={(e) => setConversionType(e.target.value as ConversionType)}
              >
                <option value="xml">XML</option>
                <option value="yaml">YAML</option>
                <option value="csv">CSV</option>
              </select>
            </div>
            
            <div className="flex-grow"></div>
            
            <button
              type="button"
              onClick={convertJson}
              className="inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {t.convert}
            </button>
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
            <div className="border rounded-md bg-white dark:bg-gray-800 p-4 h-[400px] overflow-auto">
              <pre className="text-sm text-gray-800 dark:text-gray-200 whitespace-pre-wrap break-words font-mono">
                {output}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </ToolLayout>
  );
} 