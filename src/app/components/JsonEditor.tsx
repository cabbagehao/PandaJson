'use client';

import React, { useRef, useEffect, useState } from 'react';

interface JsonEditorProps {
  value: string;
  onChange?: (value: string) => void;
  readOnly?: boolean;
  label?: string;
  placeholder?: string;
  error?: string;
}

export default function JsonEditor({ value, onChange, readOnly = false, label, placeholder, error }: JsonEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);
  const [editor, setEditor] = useState<any>(null);
  
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // 动态导入 ace-builds
    const loadAce = async () => {
      try {
        const ace = await import('ace-builds');
        await import('ace-builds/src-noconflict/mode-json');
        await import('ace-builds/src-noconflict/theme-monokai');
        await import('ace-builds/src-noconflict/theme-github');
        
        if (editorRef.current) {
          const editor = ace.default.edit(editorRef.current);
          editor.setTheme('ace/theme/github');
          editor.session.setMode('ace/mode/json');
          editor.setReadOnly(readOnly);
          editor.setOption('showPrintMargin', false);
          editor.setShowFoldWidgets(true);
          editor.setValue(value || '', -1);
          
          // 禁用worker以避免404错误
          editor.session.setUseWorker(false);
          
          if (!readOnly) {
            editor.on('change', () => {
              onChange && onChange(editor.getValue());
            });
          }
          
          setEditor(editor);
        }
      } catch (err) {
        console.error('Failed to load Ace editor:', err);
      }
    };
    
    loadAce();
    
    return () => {
      if (editor) {
        editor.destroy();
      }
    };
  }, []);
  
  useEffect(() => {
    if (editor && editor.getValue() !== value) {
      const cursorPosition = editor.getCursorPosition();
      editor.setValue(value || '', -1);
      editor.moveCursorToPosition(cursorPosition);
    }
  }, [value, editor]);
  
  return (
    <div className="space-y-2">
      {label && (
        <div className="flex justify-between items-center">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            {label}
          </label>
        </div>
      )}
      <div 
        ref={editorRef} 
        className="w-full h-[400px] border border-gray-300 dark:border-gray-700 rounded-md overflow-hidden"
      ></div>
      {error && (
        <div className="mt-2 text-sm text-red-600">{error}</div>
      )}
    </div>
  );
} 