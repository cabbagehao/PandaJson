'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { FiDownload, FiCopy, FiRefreshCw } from 'react-icons/fi';
import * as yaml from 'js-yaml';
import { xml2json, json2xml } from 'xml-js';
import Papa from 'papaparse';
import JsonEditor from '../../components/JsonEditor';
import ToolLayout from '../../components/ToolLayout';
import { Locale, defaultLocale } from '@/i18n';

type ConversionType = 'json-to-yaml' | 'json-to-xml' | 'json-to-csv' | 'yaml-to-json' | 'xml-to-json' | 'csv-to-json';

// 翻译文本
const translations: Record<string, any> = {
  zh: {
    title: 'JSON 转换工具',
    description: '将 JSON 数据转换为其他格式（YAML、XML、CSV），或将其他格式转换为 JSON。',
    keywords: 'JSON转换,JSON到XML,JSON到YAML,XML到JSON,YAML到JSON,CSV到JSON,JSON到CSV',
    options: '转换选项',
    conversionType: '转换类型',
    jsonToOthers: 'JSON 转换为',
    othersToJson: '转换为 JSON',
    jsonToYaml: 'JSON 到 YAML',
    jsonToXml: 'JSON 到 XML',
    jsonToCsv: 'JSON 到 CSV',
    yamlToJson: 'YAML 到 JSON',
    xmlToJson: 'XML 到 JSON',
    csvToJson: 'CSV 到 JSON',
    convert: '开始转换',
    jsonInput: 'JSON 输入',
    yamlInput: 'YAML 输入',
    xmlInput: 'XML 输入',
    csvInput: 'CSV 输入',
    yamlOutput: 'YAML 输出',
    xmlOutput: 'XML 输出',
    csvOutput: 'CSV 输出',
    jsonOutput: 'JSON 输出',
    placeholderJson: '在此粘贴 JSON 数据',
    placeholderYaml: '在此粘贴 YAML 数据',
    placeholderXml: '在此粘贴 XML 数据',
    placeholderCsv: '在此粘贴 CSV 数据',
    error: '转换错误: ',
    unknown: '转换过程中发生未知错误',
    copy: '复制',
    download: '下载',
    clear: '清除',
    copied: '已复制到剪贴板',
    copyFailed: '复制失败',
    csvArrayError: 'JSON 必须是对象数组才能转换为 CSV',
  },
  en: {
    title: 'JSON Converter',
    description: 'Convert JSON data to other formats (YAML, XML, CSV), or convert other formats to JSON.',
    keywords: 'JSON converter,JSON to XML,JSON to YAML,XML to JSON,YAML to JSON,CSV to JSON,JSON to CSV',
    options: 'Conversion Options',
    conversionType: 'Conversion Type',
    jsonToOthers: 'JSON to',
    othersToJson: 'To JSON',
    jsonToYaml: 'JSON to YAML',
    jsonToXml: 'JSON to XML',
    jsonToCsv: 'JSON to CSV',
    yamlToJson: 'YAML to JSON',
    xmlToJson: 'XML to JSON',
    csvToJson: 'CSV to JSON',
    convert: 'Convert',
    jsonInput: 'JSON Input',
    yamlInput: 'YAML Input',
    xmlInput: 'XML Input',
    csvInput: 'CSV Input',
    yamlOutput: 'YAML Output',
    xmlOutput: 'XML Output',
    csvOutput: 'CSV Output',
    jsonOutput: 'JSON Output',
    placeholderJson: 'Paste JSON data here',
    placeholderYaml: 'Paste YAML data here',
    placeholderXml: 'Paste XML data here',
    placeholderCsv: 'Paste CSV data here',
    error: 'Conversion error: ',
    unknown: 'Unknown error during conversion',
    copy: 'Copy',
    download: 'Download',
    clear: 'Clear',
    copied: 'Copied to clipboard',
    copyFailed: 'Copy failed',
    csvArrayError: 'JSON must be an array of objects to convert to CSV',
  }
};

export default function JsonConverter() {
  const params = useParams();
  const locale = (params?.lang as Locale) || defaultLocale;
  const t = translations[locale as 'zh' | 'en'] || translations.zh;

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
        setError(`${t.error}${err.message}`);
      } else {
        setError(t.unknown);
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
      throw new Error(t.csvArrayError);
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
        alert(t.copied);
      } catch (err) {
        alert(t.copyFailed);
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
        return t.placeholderJson;
      case 'yaml-to-json':
        return t.placeholderYaml;
      case 'xml-to-json':
        return t.placeholderXml;
      case 'csv-to-json':
        return t.placeholderCsv;
      default:
        return '';
    }
  };

  const getInputLabel = () => {
    switch (conversionType) {
      case 'json-to-yaml':
      case 'json-to-xml':
      case 'json-to-csv':
        return t.jsonInput;
      case 'yaml-to-json':
        return t.yamlInput;
      case 'xml-to-json':
        return t.xmlInput;
      case 'csv-to-json':
        return t.csvInput;
      default:
        return '';
    }
  };

  const getOutputLabel = () => {
    switch (conversionType) {
      case 'json-to-yaml':
        return t.yamlOutput;
      case 'json-to-xml':
        return t.xmlOutput;
      case 'json-to-csv':
        return t.csvOutput;
      case 'yaml-to-json':
      case 'xml-to-json':
      case 'csv-to-json':
        return t.jsonOutput;
      default:
        return '';
    }
  };

  return (
    <ToolLayout
      title={t.title}
      description={t.description}
      keywords={t.keywords}
    >
      <div className="space-y-6">
        {/* 转换选项 */}
        <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-md">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">{t.options}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="conversion-type" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {t.conversionType}
              </label>
              <select
                id="conversion-type"
                className="block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:text-white sm:text-sm"
                value={conversionType}
                onChange={(e) => setConversionType(e.target.value as ConversionType)}
              >
                <optgroup label={t.jsonToOthers}>
                  <option value="json-to-yaml">{t.jsonToYaml}</option>
                  <option value="json-to-xml">{t.jsonToXml}</option>
                  <option value="json-to-csv">{t.jsonToCsv}</option>
                </optgroup>
                <optgroup label={t.othersToJson}>
                  <option value="yaml-to-json">{t.yamlToJson}</option>
                  <option value="xml-to-json">{t.xmlToJson}</option>
                  <option value="csv-to-json">{t.csvToJson}</option>
                </optgroup>
              </select>
            </div>
            <div className="flex items-end">
              <button
                type="button"
                onClick={handleConvert}
                disabled={isProcessing}
                className="inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-full h-10 disabled:opacity-50"
              >
                {t.convert}
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
            <div className="mb-2 flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 sm:mb-0">
                {getOutputLabel()}
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
                <button 
                  onClick={clearAll}
                  className="inline-flex items-center px-3 py-2 border border-gray-300 dark:border-gray-700 shadow-sm text-sm font-medium rounded text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <FiRefreshCw className="mr-1" />
                  {t.clear}
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