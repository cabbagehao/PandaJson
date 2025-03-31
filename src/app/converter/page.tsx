'use client';

import { useState } from 'react';
import { FiDownload, FiCopy, FiRefreshCw } from 'react-icons/fi';
import * as yaml from 'js-yaml';
import { xml2json, json2xml } from 'xml-js';
import Papa from 'papaparse';
import JsonEditor from '../components/JsonEditor';
import ToolLayout from '../components/ToolLayout';

type ConversionType = 'json-to-yaml' | 'json-to-xml' | 'json-to-csv' | 'yaml-to-json' | 'xml-to-json' | 'csv-to-json';

export default function JsonConverter() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [conversionType, setConversionType] = useState<ConversionType>('json-to-yaml');
  const [isProcessing, setIsProcessing] = useState(false);

  // 转换处理函数
  const handleConvert = () => {
    setError(null);
    setOutput('');
    setIsProcessing(true);

    try {
      let result = '';

      switch (conversionType) {
        case 'json-to-yaml':
          result = convertJsonToYaml(input);
          break;
        case 'json-to-xml':
          result = convertJsonToXml(input);
          break;
        case 'json-to-csv':
          result = convertJsonToCsv(input);
          break;
        case 'yaml-to-json':
          result = convertYamlToJson(input);
          break;
        case 'xml-to-json':
          result = convertXmlToJson(input);
          break;
        case 'csv-to-json':
          result = convertCsvToJson(input);
          break;
        default:
          throw new Error('不支持的转换类型');
      }

      setOutput(result);
    } catch (err) {
      if (err instanceof Error) {
        setError(`转换错误: ${err.message}`);
      } else {
        setError('转换过程中发生未知错误');
      }
    } finally {
      setIsProcessing(false);
    }
  };

  // JSON -> YAML 转换
  const convertJsonToYaml = (jsonStr: string): string => {
    const parsed = JSON.parse(jsonStr);
    return yaml.dump(parsed, { indent: 2 });
  };

  // JSON -> XML 转换
  const convertJsonToXml = (jsonStr: string): string => {
    const parsed = JSON.parse(jsonStr);
    return json2xml(JSON.stringify(parsed), { compact: true, spaces: 2 });
  };

  // JSON -> CSV 转换
  const convertJsonToCsv = (jsonStr: string): string => {
    const parsed = JSON.parse(jsonStr);
    
    // 检查是否为数组
    if (!Array.isArray(parsed)) {
      throw new Error('JSON 必须是对象数组才能转换为 CSV');
    }

    // 检查数组是否为空
    if (parsed.length === 0) {
      return '';
    }

    return Papa.unparse(parsed);
  };

  // YAML -> JSON 转换
  const convertYamlToJson = (yamlStr: string): string => {
    const parsed = yaml.load(yamlStr);
    return JSON.stringify(parsed, null, 2);
  };

  // XML -> JSON 转换
  const convertXmlToJson = (xmlStr: string): string => {
    const options = { compact: true, spaces: 2 };
    const result = xml2json(xmlStr, options);
    return result;
  };

  // CSV -> JSON 转换
  const convertCsvToJson = (csvStr: string): string => {
    const result = Papa.parse(csvStr, { header: true });
    return JSON.stringify(result.data, null, 2);
  };

  const copyOutput = async () => {
    if (output) {
      try {
        await navigator.clipboard.writeText(output);
        alert('已复制到剪贴板');
      } catch (err) {
        alert('复制失败');
      }
    }
  };

  const downloadOutput = () => {
    if (!output) return;

    let fileExtension = 'txt';
    let mimeType = 'text/plain';

    // 根据转换类型设置下载文件的扩展名和MIME类型
    switch (conversionType) {
      case 'json-to-yaml':
        fileExtension = 'yaml';
        mimeType = 'application/yaml';
        break;
      case 'json-to-xml':
        fileExtension = 'xml';
        mimeType = 'application/xml';
        break;
      case 'json-to-csv':
        fileExtension = 'csv';
        mimeType = 'text/csv';
        break;
      case 'yaml-to-json':
      case 'xml-to-json':
      case 'csv-to-json':
        fileExtension = 'json';
        mimeType = 'application/json';
        break;
    }

    const blob = new Blob([output], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `converted.${fileExtension}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const clearAll = () => {
    setInput('');
    setOutput('');
    setError(null);
  };

  const getInputPlaceholder = () => {
    switch (conversionType) {
      case 'json-to-yaml':
      case 'json-to-xml':
      case 'json-to-csv':
        return '在此粘贴 JSON 数据';
      case 'yaml-to-json':
        return '在此粘贴 YAML 数据';
      case 'xml-to-json':
        return '在此粘贴 XML 数据';
      case 'csv-to-json':
        return '在此粘贴 CSV 数据';
      default:
        return '在此粘贴数据';
    }
  };

  const getInputLabel = () => {
    switch (conversionType) {
      case 'json-to-yaml':
      case 'json-to-xml':
      case 'json-to-csv':
        return 'JSON 输入';
      case 'yaml-to-json':
        return 'YAML 输入';
      case 'xml-to-json':
        return 'XML 输入';
      case 'csv-to-json':
        return 'CSV 输入';
      default:
        return '输入';
    }
  };

  const getOutputLabel = () => {
    switch (conversionType) {
      case 'json-to-yaml':
        return 'YAML 输出';
      case 'json-to-xml':
        return 'XML 输出';
      case 'json-to-csv':
        return 'CSV 输出';
      case 'yaml-to-json':
      case 'xml-to-json':
      case 'csv-to-json':
        return 'JSON 输出';
      default:
        return '输出';
    }
  };

  return (
    <ToolLayout
      title="JSON 转换"
      description="将 JSON 数据转换为其他格式（YAML、XML、CSV），或将其他格式转换为 JSON。"
    >
      <div className="space-y-6">
        {/* 转换选项 */}
        <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-md">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">转换选项</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="conversion-type" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                转换类型
              </label>
              <select
                id="conversion-type"
                className="block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:text-white sm:text-sm"
                value={conversionType}
                onChange={(e) => setConversionType(e.target.value as ConversionType)}
              >
                <optgroup label="JSON 转换为">
                  <option value="json-to-yaml">JSON 到 YAML</option>
                  <option value="json-to-xml">JSON 到 XML</option>
                  <option value="json-to-csv">JSON 到 CSV</option>
                </optgroup>
                <optgroup label="转换为 JSON">
                  <option value="yaml-to-json">YAML 到 JSON</option>
                  <option value="xml-to-json">XML 到 JSON</option>
                  <option value="csv-to-json">CSV 到 JSON</option>
                </optgroup>
              </select>
            </div>

            <div className="flex items-end sm:col-span-2">
              <button
                type="button"
                onClick={handleConvert}
                disabled={isProcessing || !input.trim()}
                className="inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50"
              >
                {isProcessing ? '处理中...' : '转换'}
              </button>
            </div>
          </div>
        </div>

        {/* 输入/输出区域 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <JsonEditor
              value={input}
              onChange={setInput}
              label={getInputLabel()}
              placeholder={getInputPlaceholder()}
              error={error || undefined}
            />
          </div>
          
          <div>
            <div className="mb-2 flex justify-between items-center">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                {getOutputLabel()}
              </label>
              <div className="flex space-x-2">
                <button 
                  onClick={copyOutput}
                  disabled={!output}
                  className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 dark:border-gray-700 shadow-sm text-xs font-medium rounded text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                >
                  <FiCopy className="mr-1" />
                  复制
                </button>
                <button 
                  onClick={downloadOutput}
                  disabled={!output}
                  className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 dark:border-gray-700 shadow-sm text-xs font-medium rounded text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                >
                  <FiDownload className="mr-1" />
                  下载
                </button>
                <button 
                  onClick={clearAll}
                  className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 dark:border-gray-700 shadow-sm text-xs font-medium rounded text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <FiRefreshCw className="mr-1" />
                  清除
                </button>
              </div>
            </div>
            <JsonEditor
              value={output}
              onChange={setOutput}
              readOnly={true}
            />
          </div>
        </div>
      </div>
    </ToolLayout>
  );
} 