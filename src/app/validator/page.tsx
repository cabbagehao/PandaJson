'use client';

import { useState, useEffect } from 'react';
import { FiCheckCircle, FiXCircle, FiInfo, FiRefreshCw } from 'react-icons/fi';
import JsonEditor from '../components/JsonEditor';
import ToolLayout from '../components/ToolLayout';

interface ErrorHighlight {
  line: number;
  column: number;
  errorText: string;
  expectedType: 'missingComma' | 'wrongSeparator' | 'other';
  fixSuggestion?: string;
}

export default function JsonValidator() {
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
        message: '请输入要验证的JSON数据',
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
          message: 'JSON 格式有效',
          details: `解析成功，包含 ${countNodes(parsedJson)} 个数据节点。`,
        });
      } else {
        setValidationResults({
          isValid: false,
          message: '格式有效，但结构存在问题',
          details: validation.message,
        });
      }
    } catch (err) {
      // 解析失败
      if (err instanceof SyntaxError) {
        const errorInfo = parseJsonError(err, input);
        setValidationResults({
          isValid: false,
          message: '无效的 JSON 格式',
          details: err.message,
          errorHighlight: errorInfo || undefined
        });
      } else if (err instanceof Error) {
        setValidationResults({
          isValid: false,
          message: '无效的 JSON',
          details: err.message,
        });
      } else {
        setValidationResults({
          isValid: false,
          message: '无效的 JSON',
          details: '未知错误',
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
      return { line, column, errorText: '未知错误', expectedType: 'other' };
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
    // 这里可以添加更多的验证规则
    
    // 检查空对象或空数组
    if (
      (typeof json === 'object' && Object.keys(json).length === 0 && !Array.isArray(json)) ||
      (Array.isArray(json) && json.length === 0)
    ) {
      return { 
        ok: true, 
        message: '注意: JSON 是空对象或空数组。这是有效的，但可能不是你期望的。' 
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
      title="JSON 校验"
      description="验证 JSON 数据的语法和结构正确性，检测格式错误和位置。"
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
                      错误位置: 第 {validationResults.errorHighlight.line} 行，第 {validationResults.errorHighlight.column} 列
                    </p>
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
            验证 JSON
          </button>
          
          <button 
            onClick={clearAll}
            className="inline-flex items-center px-3 py-2 border border-gray-300 dark:border-gray-700 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <FiRefreshCw className="mr-1.5 h-4 w-4" />
            清除
          </button>
        </div>

        {/* 输入区域 */}
        <div>
          <JsonEditor
            value={input}
            onChange={setInput}
            label="输入 JSON"
            placeholder="在此粘贴需要校验的JSON数据"
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
              <h3 className="text-sm font-medium text-gray-800 dark:text-gray-200">JSON 验证提示</h3>
              <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                <ul className="list-disc pl-5 space-y-1">
                  <li>JSON 中的键必须使用双引号</li>
                  <li>字符串值必须使用双引号，不能使用单引号</li>
                  <li>数字不能有前导零</li>
                  <li>不允许尾随逗号</li>
                  <li>不允许注释</li>
                  <li>布尔值必须是小写的 true 或 false</li>
                  <li>null 值必须是小写的 null</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ToolLayout>
  );
} 