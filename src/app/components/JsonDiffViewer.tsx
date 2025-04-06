'use client';

import { useEffect, useRef, useState } from 'react';
import AceEditor from 'react-ace';
import { create } from 'jsondiffpatch';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/ext-language_tools';
import { useTranslation } from '@/i18n/hooks';

// 创建jsondiffpatch实例
const diffpatcher = create({
  arrays: { detectMove: true },
  objectHash: (obj) => {
    return obj.id || obj._id || JSON.stringify(obj);
  },
});

// 添加差异高亮样式
const DIFF_STYLES = `
  .ace_added {
    background-color: rgba(0, 255, 0, 0.2);
    position: absolute;
  }
  .ace_removed {
    background-color: rgba(255, 0, 0, 0.2);
    position: absolute;
    text-decoration: line-through;
  }
  .ace_modified {
    background-color: rgba(255, 255, 0, 0.2);
    position: absolute;
  }
`;

// 添加样式到文档
const addDiffStyles = () => {
  if (typeof document !== 'undefined' && !document.getElementById('json-diff-styles')) {
    const styleElement = document.createElement('style');
    styleElement.id = 'json-diff-styles';
    styleElement.textContent = DIFF_STYLES;
    document.head.appendChild(styleElement);
  }
};

interface JsonDiffViewerProps {
  leftValue: string;
  rightValue: string;
  height?: string;
  onLeftChange?: (value: string) => void;
  onRightChange?: (value: string) => void;
  readOnly?: boolean;
}

export default function JsonDiffViewer({
  leftValue,
  rightValue,
  height = '500px',
  onLeftChange,
  onRightChange,
  readOnly = false,
}: JsonDiffViewerProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const leftEditorRef = useRef<any>(null);
  const rightEditorRef = useRef<any>(null);
  const { t } = useTranslation();
  const diff = t('diff');
  
  // 添加差异样式
  useEffect(() => {
    addDiffStyles();
  }, []);

  // 检测系统主题偏好
  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(darkModeMediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };
    
    darkModeMediaQuery.addEventListener('change', handleChange);
    return () => {
      darkModeMediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  // 高亮差异
  useEffect(() => {
    if (!leftEditorRef.current || !rightEditorRef.current) return;
    
    try {
      // 清除现有标记
      const clearMarkers = (editor: any) => {
        const session = editor.getSession();
        if (session.getMarkers) {
          const markers = session.getMarkers(true);
          if (markers) {
            Object.keys(markers).forEach(markerId => {
              session.removeMarker(parseInt(markerId));
            });
          }
        }
      };
      
      clearMarkers(leftEditorRef.current.editor);
      clearMarkers(rightEditorRef.current.editor);
      
      // 如果有一个是空的，不进行对比
      if (!leftValue.trim() || !rightValue.trim()) return;
      
      // 解析JSON
      let leftJson, rightJson;
      try {
        leftJson = JSON.parse(leftValue);
        rightJson = JSON.parse(rightValue);
      } catch (e) {
        // 解析错误时不进行对比
        return;
      }
      
      // 计算差异
      const delta = diffpatcher.diff(leftJson, rightJson);
      if (!delta) return; // 没有差异
      
      console.log('Delta:', JSON.stringify(delta, null, 2)); // 调试输出
      
      // 创建Range类用于标记
      const Range = require('ace-builds').Range;
      
      // 修改后的查找位置函数，更精确地处理新增和删除
      const findPositionInEditor = (editor: any, path: string[], isArray = false) => {
        const text = editor.getValue();
        const lines = text.split('\n');
        
        let currentPath = '';
        let searchPos = 0;
        
        // 针对数组元素的特殊处理
        if (isArray && typeof path[path.length - 1] === 'number') {
          // 处理数组索引
          const arrayPath = path.slice(0, -1);
          const index = path[path.length - 1] as number;
          
          // 先找到数组位置
          for (let i = 0; i < arrayPath.length; i++) {
            const key = arrayPath[i];
            const keyStr = typeof key === 'number' ? `[${key}]` : `"${key}"`;
            const regexPattern = typeof key === 'number' 
              ? `\\[${key}\\]` 
              : `"${key}"\\s*:`;
            
            const regex = new RegExp(regexPattern);
            for (let j = searchPos; j < lines.length; j++) {
              if (regex.test(lines[j])) {
                searchPos = j;
                break;
              }
            }
          }
          
          // 然后查找数组中的索引位置
          let bracketCount = 0;
          let itemCount = 0;
          
          for (let j = searchPos; j < lines.length; j++) {
            const line = lines[j];
            
            // 计算括号平衡
            for (let k = 0; k < line.length; k++) {
              if (line[k] === '[') bracketCount++;
              if (line[k] === ']') bracketCount--;
            }
            
            // 检查是否是新的数组项
            if (line.trim().startsWith('{') && bracketCount > 0) {
              if (itemCount === index) {
                return j;
              }
              itemCount++;
            }
            
            // 如果括号已关闭，说明数组已结束
            if (bracketCount <= 0) break;
          }
          
          // 如果找不到确切位置，返回数组开始位置
          return searchPos;
        }
        
        // 常规对象属性查找
        for (let i = 0; i < path.length; i++) {
          const key = path[i];
          
          // 跳过索引查找，已在上面处理
          if (typeof key === 'number') continue;
          
          const regexPattern = `"${key}"\\s*:`;
          const regex = new RegExp(regexPattern);
          
          let found = false;
          for (let j = searchPos; j < lines.length; j++) {
            if (regex.test(lines[j])) {
              searchPos = j;
              found = true;
              break;
            }
          }
          
          if (!found) {
            // 如果找不到确切的键，尝试找一个大致位置
            return 0;
          }
        }
        
        return searchPos;
      };
      
      // 修改高亮差异函数
      const highlightDiff = (path: string[], diff: any, leftEditor: any, rightEditor: any) => {
        // 检查是否是新增（右侧才有）
        // 处理以下三种情况:
        // 1. [值] - 单元素数组表示新增
        // 2. [undefined, 值] - 明确表示从无到有
        // 3. diff不是数组，而是新键 - 常见于嵌套对象的新增属性
        if (diff && 
            (
              // 情况1: 单元素数组 [值]
              (Array.isArray(diff) && diff.length === 1) || 
              // 情况2: [undefined, 值]
              (Array.isArray(diff) && diff.length > 1 && diff[0] === undefined && diff[1] !== undefined) || 
              // 情况3: 新键，不在原始对象中
              (typeof diff === 'object' && !Array.isArray(diff) && Object.keys(leftJson).indexOf(path[path.length-1] as string) === -1)
            )
           ) {
          // 新增项 - 只在右侧显示绿色
          const rightPos = findPositionInEditor(rightEditor, path);
          console.log('New item at path:', path, 'position:', rightPos);
          
          rightEditor.getSession().addMarker(
            new Range(rightPos, 0, rightPos, rightEditor.getSession().getLine(rightPos)?.length || 0),
            "ace_added",
            "fullLine",
            true
          );
          return;
        }
        
        // 检查是否是删除（左侧才有）
        if (diff && typeof diff === 'object' && diff[0] !== undefined && diff[1] === 0) {
          // 删除项 - 只在左侧显示红色
          const leftPos = findPositionInEditor(leftEditor, path);
          console.log('Deleted item at path:', path, 'position:', leftPos);
          
          leftEditor.getSession().addMarker(
            new Range(leftPos, 0, leftPos, leftEditor.getSession().getLine(leftPos)?.length || 0),
            "ace_removed",
            "fullLine",
            true
          );
          return;
        }
        
        // 数组处理 - 更完整的处理
        if (Array.isArray(diff)) {
          // 修改值
          if (diff.length === 2 && diff[2] === undefined) {
            const leftPos = findPositionInEditor(leftEditor, path);
            const rightPos = findPositionInEditor(rightEditor, path);
            
            leftEditor.getSession().addMarker(
              new Range(leftPos, 0, leftPos, leftEditor.getSession().getLine(leftPos)?.length || 0),
              "ace_modified",
              "fullLine",
              true
            );
            
            rightEditor.getSession().addMarker(
              new Range(rightPos, 0, rightPos, rightEditor.getSession().getLine(rightPos)?.length || 0),
              "ace_modified",
              "fullLine",
              true
            );
          }
          // 数组特殊操作 - 处理移动、添加或删除
          else if (diff.length === 3) {
            const arrayAction = diff[2] || '';
            // 处理数组元素移动
            if (typeof arrayAction === 'string' && arrayAction.startsWith('_')) {
              // 移动元素
            } 
            // 处理其他数组操作
            else {
              const oldVal = diff[0];
              const newVal = diff[1];
              
              // 删除的元素
              if (newVal === 0 && oldVal !== undefined) {
                const leftPos = findPositionInEditor(leftEditor, path, true);
                leftEditor.getSession().addMarker(
                  new Range(leftPos, 0, leftPos, leftEditor.getSession().getLine(leftPos)?.length || 0),
                  "ace_removed",
                  "fullLine",
                  true
                );
              }
              // 新增的元素
              else if (oldVal === 0 && newVal !== undefined) {
                const rightPos = findPositionInEditor(rightEditor, path, true);
                rightEditor.getSession().addMarker(
                  new Range(rightPos, 0, rightPos, rightEditor.getSession().getLine(rightPos)?.length || 0),
                  "ace_added",
                  "fullLine",
                  true
                );
              }
            }
          }
        }
        // 对象处理
        else if (typeof diff === 'object') {
          // 递归处理嵌套对象的所有键
          Object.keys(diff).forEach(key => {
            const newPath = [...path, key];
            highlightDiff(newPath, diff[key], leftEditor, rightEditor);
          });
        }
        // 简单值处理
        else {
          if (diff === 0) {
            // 删除的项 - 左侧标记
            const leftPos = findPositionInEditor(leftEditor, path);
            leftEditor.getSession().addMarker(
              new Range(leftPos, 0, leftPos, leftEditor.getSession().getLine(leftPos)?.length || 0),
              "ace_removed",
              "fullLine",
              true
            );
          } else if (diff === undefined && path.length > 0) {
            // 新增的项 - 右侧标记
            const rightPos = findPositionInEditor(rightEditor, path);
            rightEditor.getSession().addMarker(
              new Range(rightPos, 0, rightPos, rightEditor.getSession().getLine(rightPos)?.length || 0),
              "ace_added",
              "fullLine",
              true
            );
          }
        }
      };
      
      // 开始遍历差异
      Object.keys(delta).forEach(key => {
        highlightDiff([key], delta[key], leftEditorRef.current.editor, rightEditorRef.current.editor);
      });
      
      // 强制编辑器重新渲染
      leftEditorRef.current.editor.renderer.updateFull();
      rightEditorRef.current.editor.renderer.updateFull();
      
    } catch (e) {
      console.error("Error highlighting JSON differences:", e);
    }
  }, [leftValue, rightValue]);

  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <div className="mb-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            {diff.originalJson}
          </label>
        </div>
        <AceEditor
          ref={leftEditorRef}
          mode="json"
          theme={isDarkMode ? 'monokai' : 'github'}
          value={leftValue}
          onChange={onLeftChange}
          name="json-diff-left"
          editorProps={{ $blockScrolling: true }}
          setOptions={{
            useWorker: false,
            showLineNumbers: true,
            tabSize: 2,
          }}
          width="100%"
          height={height}
          readOnly={readOnly}
          fontSize={14}
          showPrintMargin={false}
          className="rounded-md border border-gray-300 dark:border-gray-700"
        />
      </div>
      <div>
        <div className="mb-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            {diff.updatedJson}
          </label>
        </div>
        <AceEditor
          ref={rightEditorRef}
          mode="json"
          theme={isDarkMode ? 'monokai' : 'github'}
          value={rightValue}
          onChange={onRightChange}
          name="json-diff-right"
          editorProps={{ $blockScrolling: true }}
          setOptions={{
            useWorker: false,
            showLineNumbers: true,
            tabSize: 2,
          }}
          width="100%"
          height={height}
          readOnly={readOnly}
          fontSize={14}
          showPrintMargin={false}
          className="rounded-md border border-gray-300 dark:border-gray-700"
        />
      </div>
    </div>
  );
} 