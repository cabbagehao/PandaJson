'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { FiRefreshCw } from 'react-icons/fi';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import ToolLayout from '../../components/ToolLayout';
import JsonEditor from '../../components/JsonEditor';
import { Locale, defaultLocale } from '@/i18n';

// 验证错误接口
interface ValidationError {
  path: string;
  message: string;
}

// 翻译文本
const translations: Record<string, any> = {
  zh: {
    title: 'JSON Schema 验证工具',
    description: '基于 JSON Schema 验证 JSON 数据，支持丰富的验证规则和详细的错误提示。',
    keywords: 'JSON Schema,JSON验证,Schema验证,JSON结构验证,JSON格式验证',
    jsonInput: 'JSON 数据',
    schemaInput: 'JSON Schema',
    options: '验证选项',
    validate: '验证',
    validating: '验证中...',
    clear: '清除',
    loadExample: '加载示例',
    placeholderJson: '在此输入或粘贴要验证的 JSON 数据',
    placeholderSchema: '在此输入或粘贴 JSON Schema',
    result: '验证结果',
    valid: '通过',
    invalid: '不通过',
    errorDetails: '错误详情',
    guideTitle: 'JSON Schema 使用指南',
    guideDescription: 'JSON Schema 是一种用于描述和验证 JSON 数据结构的标准。以下是一些常用的验证规则：',
    basicTypesTitle: '基本类型验证',
    commonRulesTitle: '常用验证规则'
  },
  en: {
    title: 'JSON Schema Validator',
    description: 'Validate JSON data using JSON Schema, supporting rich validation rules and detailed error messages.',
    keywords: 'JSON Schema,JSON validation,Schema validation,JSON structure validation,JSON format validation',
    jsonInput: 'JSON Data',
    schemaInput: 'JSON Schema',
    options: 'Validation Options',
    validate: 'Validate',
    validating: 'Validating...',
    clear: 'Clear',
    loadExample: 'Load Example',
    placeholderJson: 'Enter or paste JSON data to validate',
    placeholderSchema: 'Enter or paste JSON Schema',
    result: 'Validation Result',
    valid: 'Valid',
    invalid: 'Invalid',
    errorDetails: 'Error Details',
    guideTitle: 'JSON Schema Guide',
    guideDescription: 'JSON Schema is a standard for describing and validating JSON data structures. Here are some common validation rules:',
    basicTypesTitle: 'Basic Type Validation',
    commonRulesTitle: 'Common Validation Rules'
  }
};

export default function SchemaValidator() {
  const params = useParams();
  const locale = (params?.lang as Locale) || defaultLocale;
  const t = translations[locale as 'zh' | 'en'] || translations.zh;

  const [jsonData, setJsonData] = useState('');
  const [jsonSchema, setJsonSchema] = useState('');
  const [validationResult, setValidationResult] = useState<{
    valid: boolean;
    errors: ValidationError[];
  } | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const validateSchema = () => {
    setIsProcessing(true);
    setValidationResult(null);

    try {
      // 解析JSON和Schema
      const dataObj = JSON.parse(jsonData);
      const schemaObj = JSON.parse(jsonSchema);

      // 创建验证器实例
      const ajv = new Ajv({ allErrors: true });
      addFormats(ajv);

      // 编译Schema
      const validate = ajv.compile(schemaObj);
      
      // 执行验证
      const valid = validate(dataObj);
      
      // 处理验证结果
      if (!valid) {
        const errors = (validate.errors || []).map(err => ({
          path: err.instancePath || '根元素',
          message: err.message || '未知错误'
        }));
        
        setValidationResult({
          valid: false,
          errors
        });
      } else {
        setValidationResult({
          valid: true,
          errors: []
        });
      }
    } catch (err) {
      let message = '处理过程中发生错误';
      if (err instanceof Error) {
        message = err.message;
      }
      
      setValidationResult({
        valid: false,
        errors: [{ path: '', message }]
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const clearAll = () => {
    setJsonData('');
    setJsonSchema('');
    setValidationResult(null);
  };

  // 示例JSON数据和Schema
  const loadExample = () => {
    const exampleData = JSON.stringify({
      "id": 1,
      "name": "张三",
      "email": "zhangsan@example.com",
      "age": 28,
      "address": {
        "city": "北京",
        "zipCode": "100000"
      },
      "tags": ["开发", "设计"]
    }, null, 2);
    
    const exampleSchema = JSON.stringify({
      "type": "object",
      "required": ["id", "name", "email"],
      "properties": {
        "id": { "type": "integer" },
        "name": { "type": "string", "minLength": 2 },
        "email": { "type": "string", "format": "email" },
        "age": { "type": "integer", "minimum": 18, "maximum": 100 },
        "address": {
          "type": "object",
          "properties": {
            "city": { "type": "string" },
            "zipCode": { "type": "string", "pattern": "^\\d{6}$" }
          },
          "required": ["city"]
        },
        "tags": {
          "type": "array",
          "items": { "type": "string" }
        }
      }
    }, null, 2);
    
    setJsonData(exampleData);
    setJsonSchema(exampleSchema);
  };

  return (
    <ToolLayout
      title={t.title}
      description={t.description}
      keywords={t.keywords}
    >
      <div className="space-y-6">
        {/* 操作按钮 */}
        <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-md">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">{t.options}</h3>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={validateSchema}
              disabled={isProcessing || !jsonData.trim() || !jsonSchema.trim()}
              className="inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50"
            >
              {isProcessing ? t.validating : t.validate}
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

        {/* JSON和Schema编辑器 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <JsonEditor
              value={jsonData}
              onChange={setJsonData}
              label={t.jsonInput}
              placeholder={t.placeholderJson}
            />
          </div>
          
          <div>
            <JsonEditor
              value={jsonSchema}
              onChange={setJsonSchema}
              label={t.schemaInput}
              placeholder={t.placeholderSchema}
            />
          </div>
        </div>

        {/* 验证结果 */}
        {validationResult && (
          <div className={`p-4 rounded-md ${
            validationResult.valid 
              ? 'bg-green-50 dark:bg-green-900/30' 
              : 'bg-red-50 dark:bg-red-900/30'
          }`}>
            <h3 className={`text-lg font-medium mb-3 ${
              validationResult.valid 
                ? 'text-green-800 dark:text-green-200' 
                : 'text-red-800 dark:text-red-200'
            }`}>
              {t.result}: {validationResult.valid ? t.valid : t.invalid}
            </h3>
            
            {!validationResult.valid && validationResult.errors.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-red-700 dark:text-red-300">{t.errorDetails}:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {validationResult.errors.map((error, index) => (
                    <li key={index} className="text-sm text-red-700 dark:text-red-300">
                      <span className="font-medium">{error.path}</span>: {error.message}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {validationResult.valid && (
              <p className="text-green-700 dark:text-green-300">
                JSON 数据符合 Schema 要求，验证通过。
              </p>
            )}
          </div>
        )}

        {/* Schema指南 */}
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-md">
          <h3 className="text-lg font-medium text-blue-800 dark:text-blue-200 mb-2">{t.guideTitle}</h3>
          <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
            {t.guideDescription}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-sm font-medium text-blue-700 dark:text-blue-300 mb-1">{t.basicTypesTitle}</h4>
              <ul className="text-xs text-blue-600 dark:text-blue-400 list-disc pl-5 space-y-1">
                <li><code>"type": "string"</code> - 字符串类型</li>
                <li><code>"type": "number"</code> - 数字类型</li>
                <li><code>"type": "integer"</code> - 整数类型</li>
                <li><code>"type": "boolean"</code> - 布尔类型</li>
                <li><code>"type": "array"</code> - 数组类型</li>
                <li><code>"type": "object"</code> - 对象类型</li>
                <li><code>"type": "null"</code> - null值</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium text-blue-700 dark:text-blue-300 mb-1">{t.commonRulesTitle}</h4>
              <ul className="text-xs text-blue-600 dark:text-blue-400 list-disc pl-5 space-y-1">
                <li><code>"required": ["field1", "field2"]</code> - 必填字段</li>
                <li><code>"minLength" / "maxLength"</code> - 字符串长度限制</li>
                <li><code>"minimum" / "maximum"</code> - 数值范围限制</li>
                <li><code>"pattern": "^\\d+$"</code> - 正则表达式匹配</li>
                <li><code>"format": "email"</code> - 特定格式验证</li>
                <li><code>"enum": ["选项1", "选项2"]</code> - 枚举值验证</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </ToolLayout>
  );
} 