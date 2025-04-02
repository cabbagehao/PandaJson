'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { FiPlus, FiMinus, FiEdit2, FiTrash2, FiCopy, FiDownload, FiRefreshCw } from 'react-icons/fi';
import ToolLayout from '../../components/ToolLayout';
import JsonEditor from '../../components/JsonEditor';
import { Locale, defaultLocale } from '@/i18n';

// 翻译文本
const translations = {
  zh: {
    title: 'JSON 树形编辑器',
    description: '通过树形结构可视化编辑JSON数据',
    keywords: 'JSON编辑器,JSON树形编辑,JSON可视化,JSON节点编辑,JSON树形结构',
    input: '输入JSON',
    output: '编辑结果',
    placeholder: '在此粘贴需要编辑的JSON数据...',
    generate: '生成树形结构',
    copy: '复制',
    download: '下载',
    clear: '清除',
    error: '无效的JSON数据，请检查语法',
    copied: '已复制到剪贴板',
    copyFailed: '复制失败',
    addProperty: '添加属性',
    editProperty: '编辑属性',
    deleteProperty: '删除属性',
    expandAll: '展开全部',
    collapseAll: '折叠全部',
    key: '键',
    value: '值',
    type: '类型',
    action: '操作',
    string: '字符串',
    number: '数字',
    boolean: '布尔值',
    object: '对象',
    array: '数组',
    null: 'null',
    add: '添加',
    cancel: '取消',
    save: '保存',
    keyPlaceholder: '输入键名',
    valuePlaceholder: '输入值',
    emptyObject: '(空对象)',
    emptyArray: '(空数组)'
  },
  en: {
    title: 'JSON Tree Editor',
    description: 'Visually edit JSON data through a tree structure',
    keywords: 'JSON editor,JSON tree edit,JSON visualization,JSON node editor,JSON tree structure',
    input: 'Input JSON',
    output: 'Edited Result',
    placeholder: 'Paste your JSON data here to edit...',
    generate: 'Generate Tree',
    copy: 'Copy',
    download: 'Download',
    clear: 'Clear',
    error: 'Invalid JSON data, please check syntax',
    copied: 'Copied to clipboard',
    copyFailed: 'Copy failed',
    addProperty: 'Add Property',
    editProperty: 'Edit Property',
    deleteProperty: 'Delete Property',
    expandAll: 'Expand All',
    collapseAll: 'Collapse All',
    key: 'Key',
    value: 'Value',
    type: 'Type',
    action: 'Action',
    string: 'String',
    number: 'Number',
    boolean: 'Boolean',
    object: 'Object',
    array: 'Array',
    null: 'Null',
    add: 'Add',
    cancel: 'Cancel',
    save: 'Save',
    keyPlaceholder: 'Enter key',
    valuePlaceholder: 'Enter value',
    emptyObject: '(empty object)',
    emptyArray: '(empty array)'
  }
};

type JsonValue = string | number | boolean | null | JsonObject | JsonArray;
type JsonObject = { [key: string]: JsonValue };
type JsonArray = JsonValue[];

interface TreeNode {
  key: string;
  value: JsonValue;
  type: string;
  expanded: boolean;
  path: string;
  children?: TreeNode[];
}

export default function JsonTreeEditor() {
  const params = useParams();
  const locale = (params?.lang as Locale) || defaultLocale;
  const t = translations[locale] || translations.zh;
  
  const [input, setInput] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [treeData, setTreeData] = useState<TreeNode | null>(null);
  const [output, setOutput] = useState('');
  const [expandedPaths, setExpandedPaths] = useState<Set<string>>(new Set());
  
  // 生成树形结构
  const generateTree = () => {
    setError(null);
    
    if (!input.trim()) {
      setTreeData(null);
      setOutput('');
      return;
    }
    
    try {
      const parsedData = JSON.parse(input);
      const rootNode = buildTreeNode('root', parsedData, '', true);
      setTreeData(rootNode);
      setOutput(JSON.stringify(parsedData, null, 2));
      
      // 默认展开前两层
      const paths = new Set<string>();
      populateInitialExpandedPaths(rootNode, paths, 0, 2);
      setExpandedPaths(paths);
    } catch (err) {
      if (err instanceof Error) {
        setError(`${t.error}: ${err.message}`);
      } else {
        setError(t.error);
      }
      setTreeData(null);
      setOutput('');
    }
  };
  
  // 递归构建树节点
  const buildTreeNode = (key: string, value: JsonValue, parentPath: string, expanded: boolean): TreeNode => {
    const path = parentPath ? `${parentPath}.${key}` : key;
    const type = value === null ? 'null' : Array.isArray(value) ? 'array' : typeof value;
    
    const node: TreeNode = {
      key,
      value,
      type,
      expanded,
      path
    };
    
    if (type === 'object' && value !== null) {
      node.children = Object.entries(value as JsonObject).map(([k, v]) => 
        buildTreeNode(k, v, path, false)
      );
    } else if (type === 'array') {
      node.children = (value as JsonArray).map((item, index) => 
        buildTreeNode(String(index), item, path, false)
      );
    }
    
    return node;
  };
  
  // 递归标记初始展开的路径
  const populateInitialExpandedPaths = (node: TreeNode, paths: Set<string>, currentLevel: number, maxLevel: number) => {
    if (currentLevel <= maxLevel) {
      paths.add(node.path);
      if (node.children) {
        node.children.forEach(child => {
          populateInitialExpandedPaths(child, paths, currentLevel + 1, maxLevel);
        });
      }
    }
  };
  
  // 更新树节点数据
  const updateTreeData = (data: JsonObject | JsonArray) => {
    const rootNode = buildTreeNode('root', data, '', true);
    setTreeData(rootNode);
    setOutput(JSON.stringify(data, null, 2));
  };
  
  // 根据路径更新值
  const updateValueAtPath = (obj: JsonObject | JsonArray, path: string[], value: JsonValue): JsonObject | JsonArray => {
    if (path.length === 0) return obj;
    
    const [head, ...rest] = path;
    
    if (Array.isArray(obj)) {
      const index = parseInt(head);
      if (isNaN(index)) return obj;
      
      const result = [...obj];
      if (rest.length === 0) {
        result[index] = value;
      } else {
        if (typeof result[index] === 'object' && result[index] !== null) {
          result[index] = updateValueAtPath(result[index] as JsonObject | JsonArray, rest, value);
        }
      }
      return result;
    } else {
      const result = { ...obj };
      if (rest.length === 0) {
        result[head] = value;
      } else {
        if (typeof result[head] === 'object' && result[head] !== null) {
          result[head] = updateValueAtPath(result[head] as JsonObject | JsonArray, rest, value);
        }
      }
      return result;
    }
  };
  
  // 处理节点展开/折叠
  const handleToggle = (path: string) => {
    setExpandedPaths(prev => {
      const newPaths = new Set(prev);
      if (newPaths.has(path)) {
        newPaths.delete(path);
      } else {
        newPaths.add(path);
      }
      return newPaths;
    });
  };
  
  // 展开全部节点
  const expandAll = () => {
    const allPaths = new Set<string>();
    const collectAllPaths = (node: TreeNode) => {
      allPaths.add(node.path);
      if (node.children) {
        node.children.forEach(child => collectAllPaths(child));
      }
    };
    
    if (treeData) {
      collectAllPaths(treeData);
      setExpandedPaths(allPaths);
    }
  };
  
  // 折叠全部节点
  const collapseAll = () => {
    setExpandedPaths(new Set([treeData?.path || '']));
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
    if (output) {
      const blob = new Blob([output], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'edited.json';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };
  
  const clearAll = () => {
    setInput('');
    setOutput('');
    setTreeData(null);
    setError(null);
    setExpandedPaths(new Set());
  };
  
  // 递归渲染树节点
  const renderTreeNode = (node: TreeNode) => {
    const isExpanded = expandedPaths.has(node.path);
    const hasChildren = node.children && node.children.length > 0;
    
    const getDisplayValue = (value: JsonValue, type: string): string => {
      if (value === null) return 'null';
      if (type === 'object') return t.emptyObject;
      if (type === 'array') return t.emptyArray;
      if (type === 'string') return `"${value}"`;
      return String(value);
    };
    
    return (
      <div key={node.path} className="ml-6">
        <div className="flex items-center py-1">
          {hasChildren ? (
            <button 
              onClick={() => handleToggle(node.path)}
              className="mr-1 text-gray-500 hover:text-gray-800 dark:hover:text-gray-300"
            >
              {isExpanded ? <FiMinus size={14} /> : <FiPlus size={14} />}
            </button>
          ) : (
            <span className="mr-1 w-3.5"></span>
          )}
          
          <span className="font-medium text-blue-600 dark:text-blue-400">{node.key}</span>
          <span className="mx-1">:</span>
          
          {!hasChildren && (
            <span className={`
              ${node.type === 'string' ? 'text-green-600 dark:text-green-400' : ''}
              ${node.type === 'number' ? 'text-purple-600 dark:text-purple-400' : ''}
              ${node.type === 'boolean' ? 'text-orange-600 dark:text-orange-400' : ''}
              ${node.type === 'null' ? 'text-red-600 dark:text-red-400' : ''}
            `}>
              {getDisplayValue(node.value, node.type)}
            </span>
          )}
          
          {hasChildren && !isExpanded && (
            <span className="text-gray-600 dark:text-gray-400 italic ml-1">
              {node.type === 'array' ? 
                `[${node.children?.length} ${(node.children?.length || 0) === 1 ? 'item' : 'items'}]` : 
                `{${node.children?.length} ${(node.children?.length || 0) === 1 ? 'property' : 'properties'}}`
              }
            </span>
          )}
          
          {/* 操作按钮 - 编辑、删除等 */}
          <div className="ml-auto flex space-x-1">
            <button 
              title={t.editProperty}
              className="p-1 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <FiEdit2 size={14} />
            </button>
            <button 
              title={t.deleteProperty}
              className="p-1 text-gray-400 hover:text-red-600 dark:hover:text-red-400"
            >
              <FiTrash2 size={14} />
            </button>
            <button 
              title={t.addProperty}
              className="p-1 text-gray-400 hover:text-green-600 dark:hover:text-green-400"
            >
              <FiPlus size={14} />
            </button>
          </div>
        </div>
        
        {hasChildren && isExpanded && node.children && (
          <div className="border-l border-gray-300 dark:border-gray-700 ml-1.5">
            {node.children.map(child => renderTreeNode(child))}
          </div>
        )}
      </div>
    );
  };
  
  return (
    <ToolLayout
      title={t.title}
      description={t.description}
      keywords={t.keywords}
    >
      <div className="space-y-6">
        {/* 工具配置 */}
        <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-md flex justify-between">
          <div className="flex space-x-2">
            {treeData && (
              <>
                <button
                  onClick={expandAll}
                  className="inline-flex items-center px-3 py-2 border border-gray-300 dark:border-gray-700 shadow-sm text-sm font-medium rounded text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <FiPlus className="mr-1" />
                  {t.expandAll}
                </button>
                <button
                  onClick={collapseAll}
                  className="inline-flex items-center px-3 py-2 border border-gray-300 dark:border-gray-700 shadow-sm text-sm font-medium rounded text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <FiMinus className="mr-1" />
                  {t.collapseAll}
                </button>
              </>
            )}
          </div>
          
          <div className="flex space-x-2">
            <button
              type="button"
              onClick={generateTree}
              className="inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {t.generate}
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
              </div>
            </div>
            
            {/* 编辑树视图 */}
            {treeData ? (
              <div className="border rounded-md bg-white dark:bg-gray-800 p-4 h-[400px] overflow-auto">
                {renderTreeNode(treeData)}
              </div>
            ) : (
              <div className="border rounded-md bg-white dark:bg-gray-800 p-4 h-[400px] overflow-auto">
                <pre className="text-sm text-gray-800 dark:text-gray-200 whitespace-pre-wrap break-words font-mono">
                  {output}
                </pre>
              </div>
            )}
          </div>
        </div>
      </div>
    </ToolLayout>
  );
} 