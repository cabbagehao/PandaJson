'use client';

import { useState } from 'react';
import { FiCheckCircle, FiXCircle, FiInfo, FiRefreshCw } from 'react-icons/fi';
import JsonEditor from '../../components/JsonEditor';
import ToolLayout from '../../components/ToolLayout';
import { useTranslation } from '@/i18n/hooks';

interface ErrorHighlight {
  line: number;
  column: number;
  errorText: string;
  errorChar?: string;
  expectedType: 'missingComma' | 'wrongSeparator' | 'other';
  fixSuggestion?: string;
}

export default function JsonValidator() {
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

  // 显示错误强调建议
  const renderErrorSuggestion = (highlight: ErrorHighlight) => {
    switch (highlight.expectedType) {
      case 'missingComma':
        return validator.missingComma;
      case 'wrongSeparator':
        return highlight.errorChar === "'" 
          ? validator.expectedToken.replace('{token}', '"') 
          : validator.expectedToken.replace('{token}', ':');
      default:
        return '';
    }
  };

  return (
    <ToolLayout
      title={validator.title}
      description={validator.description}
      keywords={validator.keywords}
    >
      <div className="space-y-6">
        {/* 工具操作 */}
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
              ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800' 
              : 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800'
          }`}>
            <div className="flex">
              <div className="flex-shrink-0">
                {validationResults.isValid ? (
                  <FiCheckCircle className="h-5 w-5 text-green-400" />
                ) : (
                  <FiXCircle className="h-5 w-5 text-red-400" />
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
                  <div className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                    <p>{validationResults.details}</p>
                  </div>
                )}
                
                {validationResults.errorHighlight && (
                  <div className="mt-3 bg-gray-50 dark:bg-gray-800 p-3 rounded-md border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center mb-2">
                      <FiInfo className="text-blue-500 mr-1" />
                      <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100">{validator.errorDetails}</h4>
                    </div>
                    
                    <div className="space-y-2 text-xs">
                      <p>
                        <span className="font-medium text-gray-700 dark:text-gray-300">{validator.position}:</span> 
                        <span className="ml-1 text-red-600 dark:text-red-400">
                          {validator.errorAt.replace('{line}', validationResults.errorHighlight.line.toString()).replace('{column}', validationResults.errorHighlight.column.toString())}
                        </span>
                      </p>
                      
                      <div>
                        <p className="font-medium text-gray-700 dark:text-gray-300 mb-1">{validator.contextLine}:</p>
                        <pre className="bg-gray-100 dark:bg-gray-900 p-2 rounded overflow-x-auto whitespace-pre">
                          <code>{validationResults.errorHighlight.errorText}</code>
                          <div className="relative h-0">
                            <div className="absolute top-0 left-0" style={{ 
                              marginLeft: `${validationResults.errorHighlight.column - 1}ch`,
                            }}>
                              <span className="inline-block w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-red-500 -mt-1"></span>
                            </div>
                          </div>
                        </pre>
                      </div>
                      
                      {renderErrorSuggestion(validationResults.errorHighlight) && (
                        <p>
                          <span className="font-medium text-gray-700 dark:text-gray-300">{validator.repairSuggestion}:</span> 
                          <span className="ml-1 text-green-600 dark:text-green-400">
                            {renderErrorSuggestion(validationResults.errorHighlight)}
                          </span>
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* 输入框 */}
        <div>
          <JsonEditor
            value={input}
            onChange={setInput}
            label={validator.input}
            placeholder={validator.placeholder}
          />
        </div>
      </div>
    </ToolLayout>
  );
} 