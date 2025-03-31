'use client';

import { useState, useEffect, useRef } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/ext-language_tools';

// 添加一次性 CSS 样式
const ERROR_STYLES = `
  .ace_missing-comma-marker {
    position: absolute;
    background-color: rgba(255, 255, 0, 0.3);
    border-bottom: 2px dashed #f00;
    z-index: 5;
  }
  .ace_wrong-separator-marker {
    position: absolute;
    background-color: rgba(255, 0, 0, 0.3);
    border-bottom: 2px solid #f00;
    z-index: 5;
  }
  .ace_error-marker {
    position: absolute;
    background-color: rgba(255, 0, 0, 0.2);
    border-bottom: 1px dotted #f00;
    z-index: 5;
  }
`;

// 添加样式到文档
const addErrorStyles = () => {
  if (typeof document !== 'undefined' && !document.getElementById('json-editor-error-styles')) {
    const styleElement = document.createElement('style');
    styleElement.id = 'json-editor-error-styles';
    styleElement.textContent = ERROR_STYLES;
    document.head.appendChild(styleElement);
  }
};

interface JsonEditorProps {
  value: string;
  onChange: (value: string) => void;
  height?: string;
  readOnly?: boolean;
  label?: string;
  placeholder?: string;
  error?: string;
  errorPosition?: {
    line: number;
    column: number;
    type: 'missingComma' | 'wrongSeparator' | 'other';
  };
}

export default function JsonEditor({
  value,
  onChange,
  height = '400px',
  readOnly = false,
  label,
  placeholder = '在此输入JSON数据',
  error,
  errorPosition
}: JsonEditorProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [editorHeight, setEditorHeight] = useState(height);
  const editorRef = useRef<any>(null);
  
  // 添加错误样式
  useEffect(() => {
    addErrorStyles();
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

  // 根据屏幕尺寸调整编辑器高度
  useEffect(() => {
    const handleResize = () => {
      // 在移动设备上使用较小的高度
      if (window.innerWidth < 640) { // sm 断点
        setEditorHeight('280px');
      } else if (window.innerWidth < 768) { // md 断点
        setEditorHeight('320px');
      } else {
        setEditorHeight(height);
      }
    };

    // 初始化时执行一次
    handleResize();
    
    // 监听窗口大小变化
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [height]);

  // 处理错误高亮和自动定位
  useEffect(() => {
    // 即使没有errorPosition也进入此逻辑，用于清除高亮
    if (!editorRef.current) return;
    
    const editor = editorRef.current.editor;
    if (!editor) return;
    
    // 清除所有现有标记
    try {
      const session = editor.getSession();
      if (session.getMarkers) {
        const markers = session.getMarkers(true); 
        if (markers) {
          Object.keys(markers).forEach(markerId => {
            session.removeMarker(parseInt(markerId));
          });
        }
      }
      
      // 强制编辑器重新渲染
      editor.renderer.updateFull();
      
      // 如果没有错误位置，到此结束
      if (!errorPosition) {
        // 重置错误处理状态
        editorRef.current.lastProcessedError = null;
        editorRef.current.userHasEdited = false;
        return;
      }
      
      // 以下是有错误时的高亮逻辑...
      // 为当前错误位置创建一个唯一标识
      const errorPosKey = `${errorPosition.line}-${errorPosition.column}-${errorPosition.type}`;
      
      // 如果与上次处理的错误位置相同，且用户已经开始编辑，则不再跳转
      if (editorRef.current.lastProcessedError === errorPosKey && 
          editorRef.current.userHasEdited) {
        return;
      }
      
      // 记录此次处理的错误位置
      editorRef.current.lastProcessedError = errorPosKey;
      editorRef.current.userHasEdited = false;
      
      // 行和列从1开始，但Ace编辑器从0开始，需要减1
      const line = Math.max(0, errorPosition.line - 1);
      const column = Math.max(0, errorPosition.column - 1);
      
      // 清除选择后移动光标到错误位置
      editor.clearSelection();
      editor.moveCursorTo(line, column);
      
      // 滚动到错误位置，确保可见
      editor.scrollToLine(line, true, true, () => {});
      
      // 聚焦编辑器
      editor.focus();
      
      // 添加错误标记
      let markerClass = 'ace_error-marker';
      
      // 动态导入 Range
      const Range = require('ace-builds').Range;
      
      if (errorPosition.type === 'missingComma') {
        markerClass = 'ace_missing-comma-marker';
        
        // 高亮显示缺少逗号的位置
        session.addMarker(
          new Range(line, Math.max(0, column - 1), line, column),
          markerClass,
          "text",
          true
        );
      } else if (errorPosition.type === 'wrongSeparator') {
        markerClass = 'ace_wrong-separator-marker';
        
        // 高亮显示错误的分隔符
        session.addMarker(
          new Range(line, column, line, column + 1),
          markerClass,
          "text",
          true
        );
      } else {
        // 高亮整行
        const lineLength = session.getLine(line)?.length || 0;
        session.addMarker(
          new Range(line, 0, line, lineLength),
          markerClass,
          "fullLine",
          true
        );
      }
      
      // 强制编辑器重新渲染
      editor.renderer.updateFull();
    } catch (e) {
      console.error("Error handling JSON editor markers:", e);
    }
  }, [errorPosition]);

  // 添加监听用户编辑的事件
  useEffect(() => {
    if (!editorRef.current || !editorRef.current.editor) return;
    
    const editor = editorRef.current.editor;
    
    // 监听输入事件，标记用户已开始编辑
    const onInput = () => {
      if (editorRef.current) {
        editorRef.current.userHasEdited = true;
      }
    };
    
    editor.on('change', onInput);
    
    return () => {
      editor.off('change', onInput);
    };
  }, []);

  const editorOptions = {
    useWorker: false,
    showLineNumbers: true,
    tabSize: 2,
    enableBasicAutocompletion: true,
    enableLiveAutocompletion: true,
    // 移动端优化选项
    showGutter: window.innerWidth > 640, // 在小屏幕上隐藏行号
    fontSize: window.innerWidth < 640 ? 12 : 14, // 在小屏幕上减小字体大小
  };

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {label}
        </label>
      )}
      
      <div className={`relative rounded-md shadow-sm ${error ? 'border border-red-500' : ''}`}>
        <AceEditor
          ref={editorRef}
          mode="json"
          theme={isDarkMode ? 'monokai' : 'github'}
          value={value}
          onChange={onChange}
          name={`json-editor-${label?.replace(/\s+/g, '-').toLowerCase() || 'default'}`}
          editorProps={{ $blockScrolling: true }}
          setOptions={editorOptions}
          placeholder={placeholder}
          width="100%"
          height={editorHeight}
          readOnly={readOnly}
          fontSize={window.innerWidth < 640 ? 12 : 14}
          showPrintMargin={false}
          className="rounded-md"
          wrapEnabled={true}
        />
      </div>
      
      {error && (
        <p className="mt-2 text-sm text-red-600 dark:text-red-400">{error}</p>
      )}
    </div>
  );
} 