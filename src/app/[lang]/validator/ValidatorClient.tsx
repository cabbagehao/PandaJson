'use client';

import { useState, useEffect } from 'react';
import { FiCheckCircle, FiXCircle, FiInfo, FiRefreshCw, FiCopy, FiCheck } from 'react-icons/fi';
import JsonEditor from '../../components/JsonEditor';
import ToolLayout from '../../components/ToolLayout';
import { useTranslation } from '@/i18n/hooks';

interface ValidatorClientProps {
  pageTitle: string;
  pageDescription: string;
  pageKeywords: string;
  pageIntroduction?: string;
}

interface ErrorHighlight {
  line: number;
  column: number;
  errorText: string;
  errorChar?: string;
  expectedType: 'missingComma' | 'wrongSeparator' | 'other';
  fixSuggestion?: string;
}

export default function ValidatorClient({
  pageTitle,
  pageDescription,
  pageKeywords,
  pageIntroduction
}: ValidatorClientProps) {
  const { t } = useTranslation();
  const validator = t('validator');
  const ui = t('common').ui;

  const [input, setInput] = useState('');
  const [validationResults, setValidationResults] = useState<{
    isValid: boolean;
    message: string;
    details?: string;
    errorHighlight?: ErrorHighlight;
  } | null>(null);

  // 设置页面标题
  useEffect(() => {
    // 直接使用翻译文件中的seo_title设置页面标题
    document.title = validator.seo_title;
  }, [validator.seo_title]);

  const validateJson = () => {
    if (!input.trim()) {
      setValidationResults({
        isValid: false,
        message: validator.placeholder,
      });
      return;
    }

    try {
      // 尝试解析JSON
      const parsedJson = JSON.parse(input);
      
      // 检查一些常见的JSON结构问题
      const validation = validateStructure(parsedJson);
      
      if (validation.ok) {
        setValidationResults({
          isValid: true,
          message: validator.validJson,
          details: validator.parseSuccess.replace('{count}', `${countNodes(parsedJson)}`),
        });
      } else {
        setValidationResults({
          isValid: false,
          message: validator.invalidJson,
          details: validation.message,
        });
      }
    } catch (err) {
      // 解析失败
      if (err instanceof SyntaxError) {
        const errorInfo = parseJsonError(err, input);
        setValidationResults({
          isValid: false,
          message: validator.jsonSyntaxError,
          details: err.message,
          errorHighlight: errorInfo || undefined
        });
      } else if (err instanceof Error) {
        setValidationResults({
          isValid: false,
          message: validator.invalidJson,
          details: err.message,
        });
      } else {
        setValidationResults({
          isValid: false,
          message: validator.invalidJson,
          details: validator.unknownError,
        });
      }
    }
  };

  // 从JSON错误消息中提取行号和列号
  const parseJsonError = (error: SyntaxError, input: string): ErrorHighlight | null => {
    try {
      const message = error.message;
      
      // 尝试从常见的JSON错误消息中提取位置信息
      let positionMatch = message.match(/at position (\d+)/);
      if (positionMatch) {
        const position = parseInt(positionMatch[1], 10);
        return findErrorPosition(input, position);
      }
      
      // 另一种常见格式: line X, column Y
      positionMatch = message.match(/line (\d+) column (\d+)/i);
      if (positionMatch) {
        const line = parseInt(positionMatch[1], 10);
        const column = parseInt(positionMatch[2], 10);
        return analyzeError(input, line, column);
      }
      
      return null;
    } catch (e) {
      console.error("Error parsing JSON error:", e);
      return null;
    }
  };

  // 根据绝对位置查找行号和列号
  const findErrorPosition = (input: string, position: number): ErrorHighlight | null => {
    try {
      const lines = input.substring(0, position).split('\n');
      const line = lines.length;
      const column = lines[lines.length - 1].length + 1;
      
      return analyzeError(input, line, column);
    } catch (e) {
      return null;
    }
  };

  // 分析错误类型并提供修复建议
  const analyzeError = (input: string, line: number, column: number): ErrorHighlight => {
    // 获取错误行的内容
    const lines = input.split('\n');
    const errorLine = lines[line - 1] || '';
    const errorChar = errorLine[column - 1] || '';
    const prevChar = errorLine[column - 2] || '';
    const nextChar = errorLine[column] || '';
    
    // 默认结果
    const result: ErrorHighlight = {
      line,
      column,
      errorText: errorLine,
      errorChar,
      expectedType: 'other'
    };
    
    // 根据上下文判断可能的错误类型
    if (errorChar === '') {
      // 行尾错误，可能是缺少逗号、括号或引号
      if (prevChar === '"' && !errorLine.trim().endsWith(',')) {
        result.expectedType = 'missingComma';
        result.fixSuggestion = ',';
      }
      else if (prevChar === '}' || prevChar === ']') {
        // 对象或数组结束后可能缺少逗号
        if (!errorLine.trim().endsWith(',') && 
            line < lines.length && 
            (lines[line].trim().startsWith('"') || lines[line].trim().startsWith('{'))) {
          result.expectedType = 'missingComma';
          result.fixSuggestion = ',';
        }
      }
    }
    // 常见的错误：使用了单引号而不是双引号
    else if (errorChar === "'") {
      result.expectedType = 'wrongSeparator';
      result.fixSuggestion = '"';
    }
    // 属性名后使用了=而不是:
    else if (errorChar === '=' && prevChar === '"') {
      result.expectedType = 'wrongSeparator';
      result.fixSuggestion = ':';
    }
    // 缺少逗号
    else if ((errorChar === '"' || errorChar === '{' || errorChar === '[') &&
             (prevChar === '}' || prevChar === ']' || prevChar === '"')) {
      result.expectedType = 'missingComma';
      result.fixSuggestion = ',';
    }
    
    return result;
  };

  // 统计JSON中的节点数量（用于显示成功信息）
  const countNodes = (obj: any): number => {
    if (obj === null || obj === undefined) {
      return 0;
    }
    
    if (typeof obj !== 'object') {
      return 1;
    }
    
    let count = 1; // 当前对象/数组计为1
    
    if (Array.isArray(obj)) {
      obj.forEach(item => {
        count += countNodes(item);
      });
    } else {
      Object.keys(obj).forEach(key => {
        count += countNodes(obj[key]);
      });
    }
    
    return count;
  };

  // 检查JSON结构问题（有效但有问题的JSON）
  const validateStructure = (data: any): { ok: boolean; message: string } => {
    // 检查根节点为空
    if (data === null) {
      return { ok: true, message: '' }; // null是合法的JSON值
    }
    
    // 验证对象中的键是否有重复
    if (typeof data === 'object' && !Array.isArray(data)) {
      const keySet = new Set();
      for (const key in data) {
        if (keySet.has(key)) {
          return { 
            ok: false, 
            message: validator.duplicateKey + `: "${key}"` 
          };
        }
        keySet.add(key);
        
        // 递归检查子对象
        if (typeof data[key] === 'object' && data[key] !== null) {
          const result = validateStructure(data[key]);
          if (!result.ok) {
            return result;
          }
        }
      }
    }
    
    // 递归检查数组中的元素
    if (Array.isArray(data)) {
      for (const item of data) {
        if (typeof item === 'object' && item !== null) {
          const result = validateStructure(item);
          if (!result.ok) {
            return result;
          }
        }
      }
    }
    
    return { ok: true, message: '' };
  };

  // 清除输入和结果
  const clearAll = () => {
    setInput('');
    setValidationResults(null);
  };

  // 渲染错误建议
  const renderErrorSuggestion = (highlight: ErrorHighlight) => {
    switch (highlight.expectedType) {
      case 'missingComma':
        return (
          <div>
            <p className="text-sm font-medium">{validator.errorType}: {validator.missingComma}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              {validator.repairSuggestion}: {highlight.fixSuggestion ? `"${highlight.fixSuggestion}"` : validator.missingComma}
            </p>
          </div>
        );
      case 'wrongSeparator':
        return (
          <div>
            <p className="text-sm font-medium">{validator.errorType}: {highlight.errorChar === "'" ? 
              validator.unexpectedToken.replace('{token}', "'") : 
              validator.missingColon}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              {validator.repairSuggestion}: {highlight.fixSuggestion ? 
                validator.expectedToken.replace('{token}', highlight.fixSuggestion) : 
                ''}
            </p>
          </div>
        );
      default:
        return (
          <p className="text-sm font-medium">{validator.errorMessage}</p>
        );
    }
  };

  return (
    <ToolLayout
      title={pageTitle}
      description={pageDescription}
      keywords={pageKeywords}
      introduction={pageIntroduction}
      iconComponent={<FiCheck className="w-6 h-6 text-green-500" />}
    >
      <div className="space-y-6">
        {/* 验证操作按钮 */}
        <div className="flex justify-between items-center">
          <button
            type="button"
            onClick={validateJson}
            className="inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            {validator.validate}
          </button>
          
          <button 
            onClick={clearAll}
            className="inline-flex items-center px-3 py-2 border border-gray-300 dark:border-gray-700 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <FiRefreshCw className="mr-1.5 h-4 w-4" />
            {ui.clear}
          </button>
        </div>

        {/* 验证结果 */}
        {validationResults && (
          <div className={`rounded-md p-4 ${
            validationResults.isValid 
              ? 'bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800' 
              : 'bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800'
          }`}>
            <div className="flex">
              <div className="flex-shrink-0">
                {validationResults.isValid ? (
                  <FiCheckCircle className="h-5 w-5 text-green-400" aria-hidden="true" />
                ) : (
                  <FiXCircle className="h-5 w-5 text-red-400" aria-hidden="true" />
                )}
              </div>
              <div className="ml-3">
                <h3 className={`text-sm font-medium ${
                  validationResults.isValid 
                    ? 'text-green-800 dark:text-green-300' 
                    : 'text-red-800 dark:text-red-300'
                }`}>
                  {validationResults.message}
                </h3>
                {validationResults.details && (
                  <div className={`mt-2 text-sm ${
                    validationResults.isValid 
                      ? 'text-green-700 dark:text-green-200' 
                      : 'text-red-700 dark:text-red-200'
                  }`}>
                    <p>{validationResults.details}</p>
                  </div>
                )}
                {validationResults.errorHighlight && (
                  <div className="mt-3 border-t border-red-200 dark:border-red-800 pt-3">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <FiInfo className="h-5 w-5 text-red-400" aria-hidden="true" />
                      </div>
                      <div className="ml-3">
                        {renderErrorSuggestion(validationResults.errorHighlight)}
                        <div className="mt-2">
                          <div className="bg-red-100 dark:bg-red-900/50 rounded p-2 overflow-x-auto">
                            <pre className="text-xs text-red-800 dark:text-red-200 whitespace-pre-wrap break-all">{validationResults.errorHighlight.errorText}</pre>
                          </div>
                          <p className="text-xs text-red-700 dark:text-red-300 mt-1">
                            {validator.errorAt.replace('{line}', validationResults.errorHighlight.line.toString()).replace('{column}', validationResults.errorHighlight.column.toString())}
                            {validationResults.errorHighlight.errorChar && ", Character: \"" + validationResults.errorHighlight.errorChar + "\""}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* JSON输入编辑器 */}
        <div className="h-[450px]">
          <JsonEditor
            value={input}
            onChange={setInput}
            label={validator.input}
            placeholder={validator.placeholder}
            error={undefined}
          />
        </div>
      </div>
    </ToolLayout>
  );
} 