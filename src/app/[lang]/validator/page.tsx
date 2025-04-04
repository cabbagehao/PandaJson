'use client';

import { useState } from 'react';
import { FiCheckCircle, FiXCircle, FiInfo, FiRefreshCw } from 'react-icons/fi';
import JsonEditor from '../../components/JsonEditor';
import ToolLayout from '../../components/ToolLayout';
import { useParams } from 'next/navigation';
import { Locale, defaultLocale } from '@/i18n';

interface ErrorHighlight {
  line: number;
  column: number;
  errorText: string;
  expectedType: 'missingComma' | 'wrongSeparator' | 'other';
  fixSuggestion?: string;
}

// 翻译文本
const translations: Record<string, any> = {
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
    validationResults: '校验结果',
    emptyInput: '请输入要验证的JSON数据',
    formatValid: 'JSON 格式有效',
    structureIssue: '格式有效，但结构存在问题',
    formatInvalid: '无效的 JSON 格式',
    unknownError: '未知错误',
    dataNodes: '解析成功，包含 {count} 个数据节点。',
    validationTips: 'JSON 验证提示',
    emptyJsonWarning: '注意: JSON 是空对象或空数组。这是有效的，但可能不是你期望的。',
    errorPosition: '错误位置: 第 {line} 行，第 {column} 列',
    possiblyMissing: '可能缺少: {suggestion}',
    jsonRules: {
      title: 'JSON 验证提示',
      quoteKeys: 'JSON 中的键必须使用双引号',
      quoteStrings: '字符串值必须使用双引号，不能使用单引号',
      noLeadingZeros: '数字不能有前导零',
      noTrailingCommas: '不允许尾随逗号',
      noComments: '不允许注释',
      booleanCase: '布尔值必须是小写的 true 或 false',
      nullCase: 'null 值必须是小写的 null'
    }
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
    validationResults: 'Validation Results',
    emptyInput: 'Please enter JSON data to validate',
    formatValid: 'JSON format is valid',
    structureIssue: 'Format is valid, but there are structure issues',
    formatInvalid: 'Invalid JSON format',
    unknownError: 'Unknown error',
    dataNodes: 'Successfully parsed, contains {count} data nodes.',
    validationTips: 'JSON Validation Tips',
    emptyJsonWarning: 'Note: JSON is an empty object or array. This is valid, but may not be what you expected.',
    errorPosition: 'Error at: Line {line}, Column {column}',
    possiblyMissing: 'Possibly missing: {suggestion}',
    jsonRules: {
      title: 'JSON Validation Tips',
      quoteKeys: 'Keys in JSON must use double quotes',
      quoteStrings: 'String values must use double quotes, not single quotes',
      noLeadingZeros: 'Numbers cannot have leading zeros',
      noTrailingCommas: 'Trailing commas are not allowed',
      noComments: 'Comments are not allowed',
      booleanCase: 'Boolean values must be lowercase true or false',
      nullCase: 'Null values must be lowercase null'
    }
  }
};

export default function JsonValidator() {
  const params = useParams();
  const locale = (params?.lang as Locale) || defaultLocale;
  const t = translations[locale as 'zh' | 'en'] || translations.zh;

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
        message: t.emptyInput,
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
          message: t.formatValid,
          details: t.dataNodes.replace('{count}', countNodes(parsedJson).toString()),
        });
      } else {
        setValidationResults({
          isValid: false,
          message: t.structureIssue,
          details: validation.message,
        });
      }
    } catch (err) {
      // 解析失败
      if (err instanceof SyntaxError) {
        const errorInfo = parseJsonError(err, input);
        setValidationResults({
          isValid: false,
          message: t.formatInvalid,
          details: err.message,
          errorHighlight: errorInfo || undefined
        });
      } else if (err instanceof Error) {
        setValidationResults({
          isValid: false,
          message: t.invalid,
          details: err.message,
        });
      } else {
        setValidationResults({
          isValid: false,
          message: t.invalid,
          details: t.unknownError,
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
    const lines = input.split('\n');
    if (line <= 0 || line > lines.length) {
      return { line, column, errorText: t.unknownError, expectedType: 'other' };
    }
    
    const errorLine = lines[line - 1];
    let errorText = column <= errorLine.length ? errorLine.charAt(column - 1) : '';
    
    // 数组项错误的特殊处理
    // 如果错误出现在数组项的开始花括号处，很可能是前一行缺少逗号
    if (errorLine.trim().startsWith('{') && column <= 3) {
      // 检查前一行是否为数组项并且没有以逗号结尾
      if (line > 1) {
        const prevLine = lines[line - 2].trim();
        if (prevLine.endsWith('}') && !prevLine.endsWith('},')) {
          return {
            line: line - 1,
            column: lines[line - 2].length + 1,
            errorText: prevLine,
            expectedType: 'missingComma',
            fixSuggestion: ','
          };
        }
      }
    }
    
    // 检查是否是常见的"Expected ',' or '}' after property value"错误
    // 这类错误几乎总是前一行结尾缺少逗号
    if (errorText === '"' || 
        errorText === "'" || 
        !errorText.trim()) { // "user" 开头的"u" 
      
      const currentLineStart = lines[line - 1].trimStart();
      
      // 如果当前行以引号开头，很可能是新的属性键名
      if ((currentLineStart.startsWith('"') || currentLineStart.startsWith("'")) && line > 1) {
        const prevLine = lines[line - 2].trim();
        
        // 检查前一行是否以值结尾但没有逗号
        if ((prevLine.endsWith('"') || 
             prevLine.endsWith("'") || 
             prevLine.endsWith('}') || 
             prevLine.endsWith(']') || 
             /\d+$/.test(prevLine) ||
             prevLine.endsWith("true") ||
             prevLine.endsWith("false") ||
             prevLine.endsWith("null")) && 
            !prevLine.endsWith(',')) {
          
          // 修正到前一行行尾
          return {
            line: line - 1,
            column: lines[line - 2].length + 1,
            errorText: prevLine,
            expectedType: 'missingComma',
            fixSuggestion: ','
          };
        }
      }
    }
    
    // 检查是否在当前行缺少逗号
    if (errorLine.trim().startsWith('"') && 
        errorLine.includes(':') &&
        !errorLine.trim().endsWith(',')) {
      
      // 这可能是"port"这一行，需要检查前一行是否缺少逗号
      if (line > 1) {
        const prevLine = lines[line - 2].trim();
        // 如果前一行是键值对但没有逗号结尾
        if (prevLine.startsWith('"') && 
            prevLine.includes(':') && 
            (prevLine.endsWith('"') || 
             prevLine.endsWith('}') || 
             prevLine.endsWith(']') || 
             /\d+$/.test(prevLine)) && 
            !prevLine.endsWith(',')) {
          
          // 错误很可能是前一行缺少逗号
          return {
            line: line - 1, // 修正为前一行
            column: lines[line - 2].length + 1, // 定位到行尾
            errorText: prevLine,
            expectedType: 'missingComma',
            fixSuggestion: ','
          };
        }
      }
    }
    
    // 检查是否缺少逗号（原有逻辑）
    if (errorLine.trim().endsWith('"') || 
        errorLine.trim().endsWith('}') || 
        errorLine.trim().endsWith(']') || 
        /\d+$/.test(errorLine.trim())) {
      
      const nextLine = line < lines.length ? lines[line].trim() : '';
      if (nextLine.startsWith('"') || nextLine.startsWith('{') || nextLine.startsWith('[')) {
        return {
          line,
          column,
          errorText: errorLine,
          expectedType: 'missingComma',
          fixSuggestion: ','
        };
      }
    }
    
    // 检查是否使用了错误的分隔符（如分号代替逗号）
    if (errorText === ';') {
      return {
        line,
        column,
        errorText: errorLine,
        expectedType: 'wrongSeparator',
        fixSuggestion: ','
      };
    }
    
    return {
      line,
      column,
      errorText: errorLine,
      expectedType: 'other'
    };
  };

  // 计算JSON中的节点数
  const countNodes = (obj: any): number => {
    if (obj === null || typeof obj !== 'object') {
      return 1;
    }
    
    let count = 1; // 当前对象算一个节点
    
    if (Array.isArray(obj)) {
      // 数组: 递归计算每个元素
      obj.forEach(item => {
        count += countNodes(item);
      });
    } else {
      // 对象: 递归计算每个属性值
      Object.values(obj).forEach(value => {
        count += countNodes(value);
      });
    }
    
    return count;
  };

  // 额外的结构验证（检查常见问题）
  const validateStructure = (json: any): { ok: boolean; message?: string } => {
    // 检查空对象或空数组
    if (
      (typeof json === 'object' && Object.keys(json).length === 0 && !Array.isArray(json)) ||
      (Array.isArray(json) && json.length === 0)
    ) {
      return { 
        ok: true, 
        message: t.emptyJsonWarning
      };
    }
    
    // 所有验证通过
    return { ok: true };
  };

  const clearAll = () => {
    setInput('');
    setValidationResults(null);
  };

  return (
    <ToolLayout
      title={t.title}
      description={t.description}
      keywords={t.keywords}
    >
      <div className="space-y-6">
        {/* 验证结果区域 */}
        {validationResults && (
          <div className={`p-4 rounded-md ${
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
                  <div className="mt-3">
                    <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                      {t.errorPosition.replace('{line}', validationResults.errorHighlight.line.toString())
                                     .replace('{column}', validationResults.errorHighlight.column.toString())}
                    </p>
                    {validationResults.errorHighlight.fixSuggestion && (
                      <p className="text-sm text-orange-600 dark:text-orange-400 mt-1">
                        {t.possiblyMissing.replace('{suggestion}', validationResults.errorHighlight.fixSuggestion)}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* 工具操作按钮 */}
        <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={validateJson}
            disabled={!input.trim()}
            className="inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:opacity-50"
            >
              {t.validateBtn}
            </button>
          
            <button 
              onClick={clearAll}
            className="inline-flex items-center px-3 py-2 border border-gray-300 dark:border-gray-700 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
            <FiRefreshCw className="mr-1.5 h-4 w-4" />
              {t.clearBtn}
            </button>
        </div>

        {/* 输入区域 */}
          <div>
            <JsonEditor
              value={input}
              onChange={setInput}
              label={t.inputLabel}
              placeholder={t.inputPlaceholder}
            height="500px"
            error={validationResults?.isValid === false ? validationResults.message : undefined}
            errorPosition={validationResults?.errorHighlight ? {
              line: validationResults.errorHighlight.line,
              column: validationResults.errorHighlight.column,
              type: validationResults.errorHighlight.expectedType
            } : undefined}
            />
          </div>
          
        {/* 验证提示信息 */}
        <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-md">
          <div className="flex">
            <div className="flex-shrink-0">
              <FiInfo className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-gray-800 dark:text-gray-200">{t.jsonRules.title}</h3>
              <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                <ul className="list-disc pl-5 space-y-1">
                  <li>{t.jsonRules.quoteKeys}</li>
                  <li>{t.jsonRules.quoteStrings}</li>
                  <li>{t.jsonRules.noLeadingZeros}</li>
                  <li>{t.jsonRules.noTrailingCommas}</li>
                  <li>{t.jsonRules.noComments}</li>
                  <li>{t.jsonRules.booleanCase}</li>
                  <li>{t.jsonRules.nullCase}</li>
                </ul>
                </div>
            </div>
          </div>
        </div>
      </div>
    </ToolLayout>
  );
} 