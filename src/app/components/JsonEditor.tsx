'use client';

import React, { useEffect, useRef } from 'react';
import { Textarea } from '@/components/ui/textarea';

interface JsonEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  readOnly?: boolean;
  height?: string;
  error?: string;
  label?: string;
}

export default function JsonEditor({
  value,
  onChange,
  placeholder = '',
  readOnly = false,
  height = '400px',
  error,
  label
}: JsonEditorProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // 行号渲染
  const renderLineNumbers = () => {
    if (!value) return <div className="px-2 text-right text-gray-400">1</div>;
    
    const lines = value.split('\n');
    return lines.map((_, i) => (
      <div key={i} className="px-2 text-right text-gray-400">
        {i + 1}
      </div>
    ));
  };

  // 自动调整高度
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = height;
    }
  }, [height]);

  return (
    <div className="w-full">
      {label && (
        <div className="mb-1 font-medium">{label}</div>
      )}
      <div 
        className={`relative border rounded-md bg-white dark:bg-gray-950 overflow-hidden ${
          error ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
        } ${readOnly ? 'bg-gray-50 dark:bg-gray-900' : ''}`}
      >
        <div className="flex h-full">
          <div className="flex-none w-10 bg-gray-100 dark:bg-gray-900 border-r border-gray-300 dark:border-gray-700 py-2 select-none">
            {renderLineNumbers()}
          </div>
          <Textarea
            ref={textareaRef}
            value={value}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => onChange(e.target.value)}
            placeholder={placeholder}
            readOnly={readOnly}
            className="flex-1 resize-none p-2 font-mono text-sm border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            style={{ minHeight: height, fontFamily: 'monospace' }}
          />
        </div>
      </div>
      {error && (
        <div className="mt-1 text-sm text-red-500">{error}</div>
      )}
    </div>
  );
} 