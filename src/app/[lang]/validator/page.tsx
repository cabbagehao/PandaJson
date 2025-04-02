'use client';

import { useState } from 'react';
import { FiCheckCircle, FiAlertTriangle, FiRefreshCw } from 'react-icons/fi';
import JsonEditor from '../../components/JsonEditor';
import ToolLayout from '../../components/ToolLayout';
import { useParams } from 'next/navigation';
import { Locale, defaultLocale } from '@/i18n';

// 翻译文本
const translations = {
  zh: {
    title: 'JSON 校验工具',
    description: '在线JSON校验工具，检测JSON格式是否有效，并显示详细的错误信息',
    keywords: 'JSON校验,JSON验证,JSON检查,JSON语法检查,JSON在线验证,JSON错误检测',
    inputLabel: '输入 JSON',
    inputPlaceholder: '在此粘贴需要校验的JSON数据',
    validateBtn: '校验 JSON',
    clearBtn: '清除',
    valid: '有效的JSON',
    invalid: '无效的JSON',
    error: '错误: ',
    line: '行',
    position: '位置',
    validationResults: '校验结果'
  },
  en: {
    title: 'JSON Validator',
    description: 'Online JSON validator to check if your JSON is valid and display detailed error information',
    keywords: 'JSON validator,JSON validation,JSON checker,JSON syntax check,online JSON validator,JSON error detection',
    inputLabel: 'Input JSON',
    inputPlaceholder: 'Paste your JSON data here to validate',
    validateBtn: 'Validate JSON',
    clearBtn: 'Clear',
    valid: 'Valid JSON',
    invalid: 'Invalid JSON',
    error: 'Error: ',
    line: 'Line',
    position: 'Position',
    validationResults: 'Validation Results'
  }
};

export default function JsonValidator() {
  const params = useParams();
  const locale = (params?.lang as Locale) || defaultLocale;
  const t = translations[locale] || translations.zh;

  const [input, setInput] = useState('');
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [errorLine, setErrorLine] = useState<number | null>(null);
  const [errorPosition, setErrorPosition] = useState<number | null>(null);

  const validateJson = () => {
    if (!input.trim()) {
      setIsValid(null);
      setError(null);
      setErrorLine(null);
      setErrorPosition(null);
      return;
    }

    try {
      JSON.parse(input);
      setIsValid(true);
      setError(null);
      setErrorLine(null);
      setErrorPosition(null);
    } catch (err) {
      setIsValid(false);
      if (err instanceof Error) {
        setError(err.message);
        
        // 尝试解析错误信息中的行号和位置
        const positionMatch = err.message.match(/position\s+(\d+)/i);
        if (positionMatch && positionMatch[1]) {
          const position = parseInt(positionMatch[1], 10);
          
          // 计算行号和列号
          const lines = input.substring(0, position).split('\n');
          const lineNumber = lines.length;
          const columnNumber = lines[lines.length - 1].length + 1;
          
          setErrorLine(lineNumber);
          setErrorPosition(columnNumber);
        }
      } else {
        setError('未知错误');
        setErrorLine(null);
        setErrorPosition(null);
      }
    }
  };

  const clearAll = () => {
    setInput('');
    setIsValid(null);
    setError(null);
    setErrorLine(null);
    setErrorPosition(null);
  };

  return (
    <ToolLayout
      title={t.title}
      description={t.description}
      keywords={t.keywords}
    >
      <div className="space-y-6">
        <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-md flex justify-between items-center">
          <div className="flex-grow"></div>
          <div className="flex space-x-2">
            <button
              type="button"
              onClick={validateJson}
              className="inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {t.validateBtn}
            </button>
            <button 
              onClick={clearAll}
              className="inline-flex items-center px-3 py-2 border border-gray-300 dark:border-gray-700 shadow-sm text-sm font-medium rounded text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <FiRefreshCw className="mr-1" />
              {t.clearBtn}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <JsonEditor
              value={input}
              onChange={setInput}
              label={t.inputLabel}
              placeholder={t.inputPlaceholder}
              error={isValid === false ? error || undefined : undefined}
            />
          </div>
          
          <div>
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t.validationResults}
              </label>
            </div>
            <div className="border rounded-md overflow-hidden">
              {isValid === null ? (
                <div className="p-4 text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 h-32 flex items-center justify-center">
                  <p>输入JSON并点击校验按钮</p>
                </div>
              ) : isValid ? (
                <div className="p-4 text-green-800 bg-green-50 dark:text-green-400 dark:bg-green-900/20 flex items-center">
                  <FiCheckCircle className="h-5 w-5 mr-2" />
                  <span>{t.valid}</span>
                </div>
              ) : (
                <div className="p-4 text-red-800 bg-red-50 dark:text-red-400 dark:bg-red-900/20">
                  <div className="flex items-center mb-2">
                    <FiAlertTriangle className="h-5 w-5 mr-2" />
                    <span className="font-medium">{t.invalid}</span>
                  </div>
                  <p className="text-sm">{t.error}{error}</p>
                  {errorLine && (
                    <p className="text-sm mt-1">
                      {t.line}: {errorLine}, {t.position}: {errorPosition}
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </ToolLayout>
  );
} 