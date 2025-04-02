'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import ToolLayout from '../../components/ToolLayout';
import JsonEditor from '../../components/JsonEditor';
import { Locale, defaultLocale } from '@/i18n';
import { FiRefreshCw } from 'react-icons/fi';

// 翻译文本
const translations = {
  zh: {
    title: 'JSON 对比工具',
    description: '比较两个JSON数据之间的差异',
    keywords: 'JSON对比,JSON比较,JSON差异,JSON比对,JSON比较器',
    leftInput: '第一个JSON',
    rightInput: '第二个JSON',
    result: '比较结果',
    placeholderLeft: '在此粘贴第一个JSON数据...',
    placeholderRight: '在此粘贴第二个JSON数据...',
    compare: '比较',
    clear: '清除',
    error: '无效的JSON数据，请检查语法',
    identical: '两个JSON数据完全相同',
    different: '两个JSON数据有差异',
    addedIn2: '第二个JSON中添加的内容',
    removedFrom1: '第一个JSON中移除的内容',
    modified: '被修改的内容',
    from: '从',
    to: '到',
    added: '已添加',
    removed: '已删除',
    changed: '已修改'
  },
  en: {
    title: 'JSON Diff',
    description: 'Compare differences between two JSON datasets',
    keywords: 'JSON diff,JSON compare,JSON difference,JSON comparison,JSON comparator',
    leftInput: 'First JSON',
    rightInput: 'Second JSON',
    result: 'Comparison Result',
    placeholderLeft: 'Paste your first JSON data here...',
    placeholderRight: 'Paste your second JSON data here...',
    compare: 'Compare',
    clear: 'Clear',
    error: 'Invalid JSON data, please check syntax',
    identical: 'The two JSON datasets are identical',
    different: 'The two JSON datasets have differences',
    addedIn2: 'Added in second JSON',
    removedFrom1: 'Removed from first JSON',
    modified: 'Modified content',
    from: 'from',
    to: 'to',
    added: 'Added',
    removed: 'Removed',
    changed: 'Changed'
  }
};

// 简单的深度比较函数
function deepCompare(obj1: any, obj2: any, path = ''): any[] {
  const differences: any[] = [];
  
  // 检查obj1中存在但obj2中不存在的键
  for (const key in obj1) {
    const currentPath = path ? `${path}.${key}` : key;
    
    if (!(key in obj2)) {
      differences.push({
        type: 'removed',
        path: currentPath,
        value: obj1[key]
      });
      continue;
    }
    
    // 比较值
    if (typeof obj1[key] !== typeof obj2[key]) {
      differences.push({
        type: 'changed',
        path: currentPath,
        oldValue: obj1[key],
        newValue: obj2[key]
      });
      continue;
    }
    
    // 如果是对象，递归比较
    if (typeof obj1[key] === 'object' && obj1[key] !== null && obj2[key] !== null) {
      // 检查数组和对象
      if (Array.isArray(obj1[key]) !== Array.isArray(obj2[key])) {
        differences.push({
          type: 'changed',
          path: currentPath,
          oldValue: obj1[key],
          newValue: obj2[key]
        });
      } else {
        // 递归比较子对象或数组
        const childDiffs = deepCompare(obj1[key], obj2[key], currentPath);
        differences.push(...childDiffs);
      }
    } 
    // 比较基本类型值
    else if (obj1[key] !== obj2[key]) {
      differences.push({
        type: 'changed',
        path: currentPath,
        oldValue: obj1[key],
        newValue: obj2[key]
      });
    }
  }
  
  // 检查obj2中存在但obj1中不存在的键
  for (const key in obj2) {
    const currentPath = path ? `${path}.${key}` : key;
    
    if (!(key in obj1)) {
      differences.push({
        type: 'added',
        path: currentPath,
        value: obj2[key]
      });
    }
  }
  
  return differences;
}

export default function JsonDiff() {
  const params = useParams();
  const locale = (params?.lang as Locale) || defaultLocale;
  const t = translations[locale] || translations.zh;
  
  const [leftInput, setLeftInput] = useState('');
  const [rightInput, setRightInput] = useState('');
  const [differences, setDifferences] = useState<any[]>([]);
  const [errorLeft, setErrorLeft] = useState<string | null>(null);
  const [errorRight, setErrorRight] = useState<string | null>(null);
  const [compared, setCompared] = useState(false);
  
  const compareJson = () => {
    setErrorLeft(null);
    setErrorRight(null);
    setDifferences([]);
    setCompared(false);
    
    if (!leftInput.trim() || !rightInput.trim()) {
      return;
    }
    
    try {
      const leftObj = JSON.parse(leftInput);
      try {
        const rightObj = JSON.parse(rightInput);
        
        // 比较两个对象
        const diffs = deepCompare(leftObj, rightObj);
        setDifferences(diffs);
        setCompared(true);
      } catch (err) {
        if (err instanceof Error) {
          setErrorRight(`${t.error}: ${err.message}`);
        } else {
          setErrorRight(t.error);
        }
      }
    } catch (err) {
      if (err instanceof Error) {
        setErrorLeft(`${t.error}: ${err.message}`);
      } else {
        setErrorLeft(t.error);
      }
    }
  };
  
  const clearAll = () => {
    setLeftInput('');
    setRightInput('');
    setDifferences([]);
    setErrorLeft(null);
    setErrorRight(null);
    setCompared(false);
  };
  
  return (
    <ToolLayout
      title={t.title}
      description={t.description}
      keywords={t.keywords}
    >
      <div className="space-y-6">
        {/* 按钮区域 */}
        <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-md flex justify-end space-x-2">
          <button
            type="button"
            onClick={compareJson}
            className="inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            {t.compare}
          </button>
          <button 
            onClick={clearAll}
            className="inline-flex items-center px-3 py-2 border border-gray-300 dark:border-gray-700 shadow-sm text-sm font-medium rounded text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <FiRefreshCw className="mr-1" />
            {t.clear}
          </button>
        </div>

        {/* 输入区域 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <JsonEditor
              value={leftInput}
              onChange={setLeftInput}
              label={t.leftInput}
              placeholder={t.placeholderLeft}
              error={errorLeft || undefined}
            />
          </div>
          
          <div>
            <JsonEditor
              value={rightInput}
              onChange={setRightInput}
              label={t.rightInput}
              placeholder={t.placeholderRight}
              error={errorRight || undefined}
            />
          </div>
        </div>
        
        {/* 结果区域 */}
        {compared && (
          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
              {t.result}
            </h3>
            
            {differences.length === 0 ? (
              <div className="bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-400 p-4 rounded-md">
                {t.identical}
              </div>
            ) : (
              <div>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-400 p-4 rounded-md mb-4">
                  {t.different} ({differences.length} {differences.length === 1 ? 'change' : 'changes'})
                </div>
                
                <div className="border rounded-md overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                          Type
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                          Path
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                          Value
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
                      {differences.map((diff, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <span 
                              className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                diff.type === 'added' ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400' :
                                diff.type === 'removed' ? 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400' :
                                'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
                              }`}
                            >
                              {diff.type === 'added' ? t.added : 
                               diff.type === 'removed' ? t.removed : 
                               t.changed}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300 font-mono">
                            {diff.path}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                            {diff.type === 'added' && (
                              <div className="bg-green-50 dark:bg-green-900/10 p-2 rounded">
                                <pre className="whitespace-pre-wrap break-words text-xs font-mono">
                                  {JSON.stringify(diff.value, null, 2)}
                                </pre>
                              </div>
                            )}
                            {diff.type === 'removed' && (
                              <div className="bg-red-50 dark:bg-red-900/10 p-2 rounded">
                                <pre className="whitespace-pre-wrap break-words text-xs font-mono">
                                  {JSON.stringify(diff.value, null, 2)}
                                </pre>
                              </div>
                            )}
                            {diff.type === 'changed' && (
                              <div>
                                <div className="bg-red-50 dark:bg-red-900/10 p-2 rounded mb-2">
                                  <div className="text-xs text-red-700 dark:text-red-400 font-semibold mb-1">
                                    {t.from}:
                                  </div>
                                  <pre className="whitespace-pre-wrap break-words text-xs font-mono">
                                    {JSON.stringify(diff.oldValue, null, 2)}
                                  </pre>
                                </div>
                                <div className="bg-green-50 dark:bg-green-900/10 p-2 rounded">
                                  <div className="text-xs text-green-700 dark:text-green-400 font-semibold mb-1">
                                    {t.to}:
                                  </div>
                                  <pre className="whitespace-pre-wrap break-words text-xs font-mono">
                                    {JSON.stringify(diff.newValue, null, 2)}
                                  </pre>
                                </div>
                              </div>
                            )}
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
    </ToolLayout>
  );
} 