'use client';

import { useState } from 'react';
import { FiCopy, FiRefreshCw, FiInfo } from 'react-icons/fi';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import JsonEditor from '../../components/JsonEditor';
import ToolLayout from '../../components/ToolLayout';
import { useTranslation } from '@/i18n/hooks';

// 初始化验证器
const ajv = new Ajv({ allErrors: true });
addFormats(ajv);

interface SchemaValidatorClientProps {
  pageTitle: string;
  pageDescription: string;
  pageKeywords: string;
}

export default function SchemaValidatorClient({
  pageTitle,
  pageDescription,
  pageKeywords
}: SchemaValidatorClientProps) {
  const { t } = useTranslation();
  const sv = t('schemaValidator');
  const ui = t('common').ui;
  
  const [jsonInput, setJsonInput] = useState('');
  const [schemaInput, setSchemaInput] = useState('');
  const [validationResults, setValidationResults] = useState<{
    valid: boolean;
    errors: any[] | null;
  } | null>(null);
  const [strictMode, setStrictMode] = useState(true);
  const [isValidating, setIsValidating] = useState(false);
  const [jsonError, setJsonError] = useState<string | null>(null);
  const [schemaError, setSchemaError] = useState<string | null>(null);

  const validateJson = () => {
    setIsValidating(true);
    setJsonError(null);
    setSchemaError(null);
    setValidationResults(null);

    try {
      // 解析输入的JSON数据
      const jsonData = JSON.parse(jsonInput);
      
      try {
        // 解析输入的JSON Schema
        const schema = JSON.parse(schemaInput);
        
        // 创建一个新的验证器实例（根据严格模式设置选项）
        const validator = ajv.compile({
          ...schema,
          additionalProperties: strictMode ? false : undefined
        });
        
        // 执行验证
        const isValid = validator(jsonData);
        
        // 设置验证结果
        setValidationResults({
          valid: isValid,
          errors: validator.errors || null
        });
      } catch (err) {
        // Schema解析错误
        if (err instanceof Error) {
          setSchemaError(`${sv.schemaParseError}: ${err.message}`);
        } else {
          setSchemaError(sv.schemaParseError);
        }
      }
    } catch (err) {
      // JSON解析错误
      if (err instanceof Error) {
        setJsonError(`${sv.jsonParseError}: ${err.message}`);
      } else {
        setJsonError(sv.jsonParseError);
      }
    } finally {
      setIsValidating(false);
    }
  };

  const clearAll = () => {
    setJsonInput('');
    setSchemaInput('');
    setValidationResults(null);
    setJsonError(null);
    setSchemaError(null);
  };

  const loadExample = () => {
    // 加载示例JSON和Schema
    const exampleSchema = JSON.stringify({
      type: "object",
      properties: {
        name: { type: "string" },
        age: { type: "integer", minimum: 0 },
        email: { type: "string", format: "email" }
      },
      required: ["name", "email"]
    }, null, 2);
    
    const exampleJson = JSON.stringify({
      name: "John Doe",
      age: 30,
      email: "john@example.com"
    }, null, 2);
    
    setSchemaInput(exampleSchema);
    setJsonInput(exampleJson);
    setValidationResults(null);
    setJsonError(null);
    setSchemaError(null);
  };

  const formatValidationError = (error: any) => {
    // 处理additionalProperties错误，显示具体多余的字段名
    if (error.keyword === 'additionalProperties') {
      return `${error.instancePath} ${error.message}: '${error.params.additionalProperty}'`;
    }
    
    return `${error.instancePath} ${error.message}`;
  };

  return (
    <ToolLayout
      title={pageTitle}
      description={pageDescription}
      keywords={pageKeywords}
    >
      <div className="space-y-6">
        {/* 工具操作按钮 */}
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <button
              type="button"
              onClick={validateJson}
              disabled={isValidating}
              className="inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50"
            >
              {isValidating ? sv.validating : sv.validate}
            </button>
            
            <button
              type="button"
              onClick={loadExample}
              className="inline-flex justify-center items-center px-4 py-2 border border-gray-300 dark:border-gray-700 text-sm font-medium rounded-md shadow-sm text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {sv.loadExample}
            </button>
          </div>
          
          <button 
            onClick={clearAll}
            className="inline-flex items-center px-3 py-2 border border-gray-300 dark:border-gray-700 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <FiRefreshCw className="mr-1.5 h-4 w-4" />
            {ui.clear}
          </button>
        </div>

        {/* 验证选项 */}
        <div className="relative">
          <div className="flex items-center">
            <input
              id="strict-mode"
              name="strict-mode"
              type="checkbox"
              checked={strictMode}
              onChange={(e) => setStrictMode(e.target.checked)}
              className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 dark:border-gray-700 rounded"
            />
            <div className="ml-3 text-sm flex items-center">
              <label htmlFor="strict-mode" className="font-medium text-gray-700 dark:text-gray-300">{sv.strictMode}</label>
              <div className="relative ml-1 inline-block">
                <span className="group">
                  <FiInfo className="h-4 w-4 text-gray-400 inline-block" />
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 p-2 w-64 bg-gray-800 text-white text-xs rounded shadow-lg z-10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    {sv.strictModeDescription}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* 验证结果 */}
        {validationResults && (
          <div className={`rounded-md p-4 ${
            validationResults.valid 
              ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800' 
              : 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800'
          }`}>
            <div className="flex">
              <div className="flex-shrink-0">
                {validationResults.valid ? (
                  <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
              <div className="ml-3">
                <h3 className={`text-sm font-medium ${
                  validationResults.valid 
                    ? 'text-green-800 dark:text-green-300' 
                    : 'text-red-800 dark:text-red-300'
                }`}>
                  {validationResults.valid ? sv.valid : sv.invalid}
                </h3>
                {!validationResults.valid && validationResults.errors && (
                  <div className="mt-2">
                    <ul className="list-disc pl-5 space-y-1 text-sm text-red-700 dark:text-red-300">
                      {validationResults.errors.map((error, index) => (
                        <li key={index}>{formatValidationError(error)}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* 输入区域 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <JsonEditor
              value={jsonInput}
              onChange={setJsonInput}
              label={sv.jsonData}
              error={jsonError || undefined}
              placeholder={sv.jsonPlaceholder}
            />
          </div>
          
          <div>
            <JsonEditor
              value={schemaInput}
              onChange={setSchemaInput}
              label={sv.jsonSchema}
              error={schemaError || undefined}
              placeholder={sv.schemaPlaceholder}
            />
          </div>
        </div>
      </div>
    </ToolLayout>
  );
} 