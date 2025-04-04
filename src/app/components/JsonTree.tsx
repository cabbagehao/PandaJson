'use client';

import { useState } from 'react';
import { FiChevronRight, FiChevronDown, FiPlus, FiMinus, FiEdit, FiTrash2 } from 'react-icons/fi';

interface JsonTreeProps {
  data: any;
  onChange: (data: any) => void;
}

const JsonTree: React.FC<JsonTreeProps> = ({ data, onChange }) => {
  return (
    <div className="text-sm font-mono">
      <TreeNode 
        data={data} 
        path="" 
        onUpdate={(newData) => onChange(newData)} 
        isRoot={true} 
      />
    </div>
  );
};

interface TreeNodeProps {
  data: any;
  path: string;
  onUpdate: (newData: any) => void;
  isRoot?: boolean;
}

const TreeNode: React.FC<TreeNodeProps> = ({ data, path, onUpdate, isRoot = false }) => {
  const [expanded, setExpanded] = useState(true);
  const [editKey, setEditKey] = useState<string | null>(null);
  const [editValue, setEditValue] = useState<string>('');
  const [newKey, setNewKey] = useState('');
  const [newValue, setNewValue] = useState('');
  const [addingNew, setAddingNew] = useState(false);

  if (data === null) {
    return (
      <div className="py-1 text-gray-500 dark:text-gray-400">null</div>
    );
  }

  if (typeof data !== 'object') {
    return (
      <div className="py-1">
        <span className={
          typeof data === 'string' 
            ? 'text-green-600 dark:text-green-400' 
            : typeof data === 'number' 
              ? 'text-blue-600 dark:text-blue-400'
              : typeof data === 'boolean'
                ? 'text-purple-600 dark:text-purple-400'
                : 'text-gray-600 dark:text-gray-400'
        }>
          {typeof data === 'string' ? `"${data}"` : String(data)}
        </span>
      </div>
    );
  }

  const isArray = Array.isArray(data);
  const isEmpty = Object.keys(data).length === 0;

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const updateValue = (key: string, value: any) => {
    const newData = isArray ? [...data] : { ...data };
    newData[key] = value;
    onUpdate(newData);
  };

  const removeItem = (key: string) => {
    const newData = isArray ? [...data] : { ...data };
    if (isArray) {
      newData.splice(parseInt(key), 1);
    } else {
      delete newData[key];
    }
    onUpdate(newData);
  };

  const startEdit = (key: string, value: any) => {
    setEditKey(key);
    setEditValue(typeof value === 'object' ? JSON.stringify(value) : String(value));
  };

  const saveEdit = () => {
    if (editKey !== null) {
      try {
        let parsedValue;
        // 尝试解析为JSON，如果失败则保持为字符串
        try {
          parsedValue = JSON.parse(editValue);
        } catch {
          // 尝试解析为数字或布尔值
          if (editValue === 'true') parsedValue = true;
          else if (editValue === 'false') parsedValue = false;
          else if (!isNaN(Number(editValue)) && editValue.trim() !== '') parsedValue = Number(editValue);
          else parsedValue = editValue;
        }
        updateValue(editKey, parsedValue);
        setEditKey(null);
      } catch (err) {
        alert('无效的值');
      }
    }
  };

  const addNewItem = () => {
    try {
      let parsedValue;
      try {
        parsedValue = JSON.parse(newValue);
      } catch {
        if (newValue === 'true') parsedValue = true;
        else if (newValue === 'false') parsedValue = false;
        else if (!isNaN(Number(newValue)) && newValue.trim() !== '') parsedValue = Number(newValue);
        else parsedValue = newValue;
      }

      const newData = isArray ? [...data] : { ...data };
      if (isArray) {
        newData.push(parsedValue);
      } else {
        if (newKey.trim() === '') {
          alert('键名不能为空');
          return;
        }
        newData[newKey] = parsedValue;
      }
      onUpdate(newData);
      setNewKey('');
      setNewValue('');
      setAddingNew(false);
    } catch (err) {
      alert('添加失败');
    }
  };

  return (
    <div className="ml-2">
      {!isRoot && (
        <div className="flex items-center">
          {typeof data === 'object' && !isEmpty && (
            <button 
              onClick={toggleExpand} 
              className="p-1 focus:outline-none text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              {expanded ? <FiChevronDown size={16} /> : <FiChevronRight size={16} />}
            </button>
          )}
          
          <span className="text-gray-700 dark:text-gray-300">
            {isArray ? '[ ]' : '{ }'}
          </span>

          {isEmpty && <span className="ml-2 text-gray-500 dark:text-gray-400">(空)</span>}
        </div>
      )}

      {expanded && !isEmpty && (
        <div className="ml-4 border-l border-gray-200 dark:border-gray-700 pl-2">
          {Object.keys(data).map((key) => (
            <div key={key} className="py-1">
              <div className="flex items-start group">
                <div className="flex-1">
                  {editKey === key ? (
                    <div className="flex items-center space-x-2">
                      {!isArray && (
                        <input
                          type="text"
                          value={key}
                          disabled
                          className="px-1 py-0.5 text-sm border border-gray-300 dark:border-gray-700 rounded bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                        />
                      )}
                      <input
                        type="text"
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                        className="px-1 py-0.5 text-sm border border-gray-300 dark:border-gray-700 rounded text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 flex-1"
                        autoFocus
                      />
                      <button
                        onClick={saveEdit}
                        className="px-2 py-0.5 text-xs bg-blue-600 hover:bg-blue-700 text-white rounded"
                      >
                        保存
                      </button>
                      <button
                        onClick={() => setEditKey(null)}
                        className="px-2 py-0.5 text-xs bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded"
                      >
                        取消
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-start">
                      {!isArray && (
                        <span className="text-red-600 dark:text-red-400 mr-1">"{key}":</span>
                      )}
                      {isArray && (
                        <span className="text-gray-500 dark:text-gray-400 mr-1">[{key}]</span>
                      )}
                      
                      {typeof data[key] === 'object' && data[key] !== null ? (
                        <TreeNode
                          data={data[key]}
                          path={path ? `${path}.${key}` : key}
                          onUpdate={(newValue) => updateValue(key, newValue)}
                        />
                      ) : (
                        <span className={
                          typeof data[key] === 'string' 
                            ? 'text-green-600 dark:text-green-400' 
                            : typeof data[key] === 'number' 
                              ? 'text-blue-600 dark:text-blue-400'
                              : typeof data[key] === 'boolean'
                                ? 'text-purple-600 dark:text-purple-400'
                                : 'text-gray-600 dark:text-gray-400'
                        }>
                          {typeof data[key] === 'string' 
                            ? `"${data[key]}"` 
                            : data[key] === null 
                              ? 'null' 
                              : String(data[key])
                          }
                        </span>
                      )}
                    </div>
                  )}
                </div>
                
                {editKey !== key && (
                  <div className="ml-2 opacity-0 group-hover:opacity-100 flex space-x-1">
                    <button
                      onClick={() => startEdit(key, data[key])}
                      className="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    >
                      <FiEdit size={14} />
                    </button>
                    <button
                      onClick={() => removeItem(key)}
                      className="p-1 text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400"
                    >
                      <FiTrash2 size={14} />
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
          
          {/* 添加新项 */}
          {addingNew ? (
            <div className="py-2">
              <div className="flex items-center space-x-2">
                {!isArray && (
                  <input
                    type="text"
                    value={newKey}
                    onChange={(e) => setNewKey(e.target.value)}
                    placeholder="键名"
                    className="px-1 py-0.5 text-sm border border-gray-300 dark:border-gray-700 rounded text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 w-1/3"
                    autoFocus
                  />
                )}
                <input
                  type="text"
                  value={newValue}
                  onChange={(e) => setNewValue(e.target.value)}
                  placeholder="值"
                  className="px-1 py-0.5 text-sm border border-gray-300 dark:border-gray-700 rounded text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 flex-1"
                />
                <button
                  onClick={addNewItem}
                  className="px-2 py-0.5 text-xs bg-green-600 hover:bg-green-700 text-white rounded"
                >
                  添加
                </button>
                <button
                  onClick={() => setAddingNew(false)}
                  className="px-2 py-0.5 text-xs bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded"
                >
                  取消
                </button>
              </div>
            </div>
          ) : (
            <div className="py-1">
              <button
                onClick={() => setAddingNew(true)}
                className="inline-flex items-center px-2 py-1 text-xs text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <FiPlus size={14} className="mr-1" />
                添加{isArray ? '项' : '属性'}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default JsonTree; 