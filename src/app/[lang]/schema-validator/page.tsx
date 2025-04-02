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
    title: 'JSON Schema 验证工具',
    description: '使用JSON Schema验证JSON数据的结构和格式',
    keywords: 'JSON Schema,JSON验证,Schema验证,JSON结构验证,JSON格式验证',
    jsonInput: 'JSON 数据',
    schemaInput: 'JSON Schema',
    result: '验证结果',
    placeholderJson: '在此粘贴需要验证的JSON数据...',
    placeholderSchema: '在此粘贴JSON Schema...',
    validate: '验证',
    copy: '复制',
    download: '下载',
    clear: '清除',
    errorJson: '无效的JSON数据，请检查语法',
    errorSchema: '无效的JSON Schema，请检查语法',
    valid: '验证通过',
    invalid: '验证失败',
    validMessage: '恭喜! 您的JSON数据符合Schema的要求',
    errorCount: '错误数量',
    warningCount: '警告数量',
    errorDetails: '错误详情',
    warningDetails: '警告详情',
    path: '路径',
    message: '消息',
    noErrors: '没有错误',
    noWarnings: '没有警告',
    copied: '已复制到剪贴板',
    copyFailed: '复制失败',
    sampleSchema: '示例Schema',
    loadSample: '加载示例'
  },
  en: {
    title: 'JSON Schema Validator',
    description: 'Validate JSON data structure and format using JSON Schema',
    keywords: 'JSON Schema,JSON validation,Schema validation,JSON structure validation,JSON format validation',
    jsonInput: 'JSON Data',
    schemaInput: 'JSON Schema',
    result: 'Validation Result',
    placeholderJson: 'Paste your JSON data here to validate...',
    placeholderSchema: 'Paste your JSON Schema here...',
    validate: 'Validate',
    copy: 'Copy',
    download: 'Download',
    clear: 'Clear',
    errorJson: 'Invalid JSON data, please check syntax',
    errorSchema: 'Invalid JSON Schema, please check syntax',
    valid: 'Valid',
    invalid: 'Invalid',
    validMessage: 'Congratulations! Your JSON data conforms to the Schema',
    errorCount: 'Error Count',
    warningCount: 'Warning Count',
    errorDetails: 'Error Details',
    warningDetails: 'Warning Details',
    path: 'Path',
    message: 'Message',
    noErrors: 'No errors',
    noWarnings: 'No warnings',
    copied: 'Copied to clipboard',
    copyFailed: 'Copy failed',
    sampleSchema: 'Sample Schema',
    loadSample: 'Load Sample'
  }
};

// 示例Schema
const sampleSchema = {
  type: 'object',
  required: ['name', 'age', 'email'],
  properties: {
    name: {
      type: 'string',
      minLength: 2,
      maxLength: 50
    },
    age: {
      type: 'integer',
      minimum: 0,
      maximum: 120
    },
    email: {
      type: 'string',
      format: 'email'
    },
    address: {
      type: 'object',
      properties: {
        street: { type: 'string' },
        city: { type: 'string' },
        zipCode: { type: 'string', pattern: '^[0-9]{5}(?:-[0-9]{4})?$' }
      },
      required: ['street', 'city']
    },
    phoneNumbers: {
      type: 'array',
      items: {
        type: 'string',
        pattern: '^[0-9]{10}$'
      },
      minItems: 1
    }
  }
};

// 示例JSON数据
const sampleJson = {
  name: 'John Doe',
  age: 30,
  email: 'john.doe@example.com',
  address: {
    street: '123 Main St',
    city: 'Anytown'
  },
  phoneNumbers: ['1234567890']
};

// 简单的验证错误接口
interface ValidationError {
  path: string;
  message: string;
}

export default function JsonSchemaValidator() {
  const params = useParams();
  const locale = (params?.lang as Locale) || defaultLocale;
  const t = translations[locale] || translations.zh;
  
  const [jsonInput, setJsonInput] = useState('');
  const [schemaInput, setSchemaInput] = useState('');
  const [jsonError, setJsonError] = useState<string | null>(null);
  const [schemaError, setSchemaError] = useState<string | null>(null);
  const [validationResult, setValidationResult] = useState<{
    valid: boolean;
    errors: ValidationError[];
    warnings: ValidationError[];
  } | null>(null);
  
  // 加载示例
  const loadSample = () => {
    setJsonInput(JSON.stringify(sampleJson, null, 2));
    setSchemaInput(JSON.stringify(sampleSchema, null, 2));
    setJsonError(null);
    setSchemaError(null);
    setValidationResult(null);
  };
  
  // 验证JSON数据
  const validateJson = () => {
    setJsonError(null);
    setSchemaError(null);
    setValidationResult(null);
    
    if (!jsonInput.trim() || !schemaInput.trim()) {
      return;
    }
    
    try {
      const json = JSON.parse(jsonInput);
      
      try {
        const schema = JSON.parse(schemaInput);
        
        // 模拟验证过程，实际项目中应使用ajv等验证库
        const errors: ValidationError[] = [];
        const warnings: ValidationError[] = [];
        
        // 简单的验证逻辑
        validateObject(json, schema, '', errors, warnings);
        
        setValidationResult({
          valid: errors.length === 0,
          errors,
          warnings
        });
      } catch (err) {
        if (err instanceof Error) {
          setSchemaError(`${t.errorSchema}: ${err.message}`);
        } else {
          setSchemaError(t.errorSchema);
        }
      }
    } catch (err) {
      if (err instanceof Error) {
        setJsonError(`${t.errorJson}: ${err.message}`);
      } else {
        setJsonError(t.errorJson);
      }
    }
  };
  
  // 简单的验证函数
  const validateObject = (
    obj: any, 
    schema: any, 
    path: string, 
    errors: ValidationError[], 
    warnings: ValidationError[]
  ) => {
    // 检查类型
    if (schema.type && typeof obj !== schema.type && 
        !(schema.type === 'integer' && Number.isInteger(obj))) {
      errors.push({
        path: path || 'root',
        message: `Expected type "${schema.type}" but got "${typeof obj}"`
      });
      return;
    }
    
    if (schema.type === 'object' && obj && typeof obj === 'object') {
      // 检查必填属性
      if (schema.required && Array.isArray(schema.required)) {
        for (const prop of schema.required) {
          if (!(prop in obj)) {
            errors.push({
              path: path ? `${path}.${prop}` : prop,
              message: `Required property "${prop}" is missing`
            });
          }
        }
      }
      
      // 递归验证属性
      if (schema.properties) {
        for (const [key, propSchema] of Object.entries(schema.properties)) {
          if (key in obj) {
            validateObject(
              obj[key], 
              propSchema, 
              path ? `${path}.${key}` : key, 
              errors, 
              warnings
            );
          }
        }
      }
    } 
    else if (schema.type === 'array' && Array.isArray(obj)) {
      // 验证数组长度
      if (schema.minItems !== undefined && obj.length < schema.minItems) {
        errors.push({
          path: path || 'root',
          message: `Array must have at least ${schema.minItems} items, but has ${obj.length}`
        });
      }
      
      if (schema.maxItems !== undefined && obj.length > schema.maxItems) {
        errors.push({
          path: path || 'root',
          message: `Array must have at most ${schema.maxItems} items, but has ${obj.length}`
        });
      }
      
      // 验证数组项
      if (schema.items) {
        for (let i = 0; i < obj.length; i++) {
          validateObject(
            obj[i], 
            schema.items, 
            path ? `${path}[${i}]` : `[${i}]`, 
            errors, 
            warnings
          );
        }
      }
    }
    else if (schema.type === 'string' && typeof obj === 'string') {
      // 验证字符串长度
      if (schema.minLength !== undefined && obj.length < schema.minLength) {
        errors.push({
          path: path || 'root',
          message: `String must be at least ${schema.minLength} characters long, but is ${obj.length}`
        });
      }
      
      if (schema.maxLength !== undefined && obj.length > schema.maxLength) {
        errors.push({
          path: path || 'root',
          message: `String must be at most ${schema.maxLength} characters long, but is ${obj.length}`
        });
      }
      
      // 验证格式
      if (schema.format === 'email' && !validateEmail(obj)) {
        errors.push({
          path: path || 'root',
          message: `String must be a valid email address`
        });
      }
      
      // 验证正则表达式
      if (schema.pattern) {
        const regex = new RegExp(schema.pattern);
        if (!regex.test(obj)) {
          errors.push({
            path: path || 'root',
            message: `String does not match pattern: ${schema.pattern}`
          });
        }
      }
    }
    else if ((schema.type === 'number' || schema.type === 'integer') && typeof obj === 'number') {
      // 验证数字范围
      if (schema.minimum !== undefined && obj < schema.minimum) {
        errors.push({
          path: path || 'root',
          message: `Number must be greater than or equal to ${schema.minimum}, but is ${obj}`
        });
      }
      
      if (schema.maximum !== undefined && obj > schema.maximum) {
        errors.push({
          path: path || 'root',
          message: `Number must be less than or equal to ${schema.maximum}, but is ${obj}`
        });
      }
      
      // 验证整数
      if (schema.type === 'integer' && !Number.isInteger(obj)) {
        errors.push({
          path: path || 'root',
          message: `Number must be an integer, but is ${obj}`
        });
      }
    }
  };
  
  // 简单的邮箱验证
  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };
  
  const copyResult = async () => {
    if (validationResult) {
      try {
        await navigator.clipboard.writeText(
          JSON.stringify(validationResult, null, 2)
        );
        alert(t.copied);
      } catch (err) {
        alert(t.copyFailed);
      }
    }
  };
  
  const downloadResult = () => {
    if (validationResult) {
      const blob = new Blob([JSON.stringify(validationResult, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'validation-result.json';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };
  
  const clearAll = () => {
    setJsonInput('');
    setSchemaInput('');
    setJsonError(null);
    setSchemaError(null);
    setValidationResult(null);
  };
  
  return (
    <ToolLayout
      title={t.title}
      description={t.description}
      keywords={t.keywords}
    >
      <div className="space-y-6">
        {/* 工具配置 */}
        <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-md flex justify-between flex-wrap gap-4">
          <div>
            <button
              onClick={loadSample}
              className="inline-flex items-center px-3 py-2 border border-gray-300 dark:border-gray-700 shadow-sm text-sm font-medium rounded text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {t.loadSample}
            </button>
          </div>
          
          <div className="flex space-x-2">
            <button
              type="button"
              onClick={validateJson}
              className="inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {t.validate}
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

        {/* 输入区域 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <JsonEditor
              value={jsonInput}
              onChange={setJsonInput}
              label={t.jsonInput}
              placeholder={t.placeholderJson}
              error={jsonError || undefined}
            />
          </div>
          
          <div>
            <JsonEditor
              value={schemaInput}
              onChange={setSchemaInput}
              label={t.schemaInput}
              placeholder={t.placeholderSchema}
              error={schemaError || undefined}
            />
          </div>
        </div>
        
        {/* 验证结果 */}
        {validationResult && (
          <div className="mt-6">
            <div className="mb-2 flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2 sm:mb-0">
                {t.result}
              </h3>
              <div className="flex space-x-2">
                <button 
                  onClick={copyResult}
                  className="inline-flex items-center px-3 py-2 border border-gray-300 dark:border-gray-700 shadow-sm text-sm font-medium rounded text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <FiCopy className="mr-1" />
                  {t.copy}
                </button>
                <button 
                  onClick={downloadResult}
                  className="inline-flex items-center px-3 py-2 border border-gray-300 dark:border-gray-700 shadow-sm text-sm font-medium rounded text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <FiDownload className="mr-1" />
                  {t.download}
                </button>
              </div>
            </div>
            
            {validationResult.valid ? (
              <div className="bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-400 p-4 rounded-md">
                <div className="flex items-center">
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">{t.valid}: </span>
                  <span className="ml-1">{t.validMessage}</span>
                </div>
              </div>
            ) : (
              <div>
                <div className="bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-400 p-4 rounded-md mb-4">
                  <div className="flex items-center">
                    <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">{t.invalid}: </span>
                    <span className="ml-1">{t.errorCount}: {validationResult.errors.length}, {t.warningCount}: {validationResult.warnings.length}</span>
                  </div>
                </div>
                
                {/* 错误详情 */}
                {validationResult.errors.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-md font-medium text-gray-900 dark:text-white mb-2">
                      {t.errorDetails}
                    </h4>
                    <div className="border rounded-md overflow-hidden">
                      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-50 dark:bg-gray-800">
                          <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                              {t.path}
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                              {t.message}
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
                          {validationResult.errors.map((error, index) => (
                            <tr key={index}>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900 dark:text-gray-300">
                                {error.path}
                              </td>
                              <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                                {error.message}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
                
                {/* 警告详情 */}
                {validationResult.warnings.length > 0 && (
                  <div>
                    <h4 className="text-md font-medium text-gray-900 dark:text-white mb-2">
                      {t.warningDetails}
                    </h4>
                    <div className="border rounded-md overflow-hidden">
                      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-50 dark:bg-gray-800">
                          <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                              {t.path}
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                              {t.message}
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
                          {validationResult.warnings.map((warning, index) => (
                            <tr key={index}>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900 dark:text-gray-300">
                                {warning.path}
                              </td>
                              <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                                {warning.message}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </ToolLayout>
  );
} 