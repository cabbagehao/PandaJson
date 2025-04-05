'use client';

import React, { useState } from 'react';
import { FiDownload, FiCopy, FiRefreshCw } from 'react-icons/fi';
import * as yaml from 'js-yaml';
import { xml2json, json2xml } from 'xml-js';
import Papa from 'papaparse';
import { useTranslation } from '@/i18n/hooks';
import JsonEditor from '@/app/components/JsonEditor';
import ToolLayout from '@/app/components/ToolLayout';

type ConversionType = 'json-to-yaml' | 'json-to-xml' | 'json-to-csv' | 'yaml-to-json' | 'xml-to-json' | 'csv-to-json';

interface ConverterClientProps {
  params: {
    lang: string;
  };
}

export default function ConverterClient({ params }: ConverterClientProps) {
  const { t } = useTranslation();
  const converter = t('converter');
  const ui = t('common').ui;
  
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
          throw new Error(converter.errors.unsupportedConversion);
      }

      setOutput(result);
    } catch (err) {
      if (err instanceof Error) {
        setError(`${converter.errors.conversionFailed}: ${err.message}`);
      } else {
        setError(converter.errors.unknownError);
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
      throw new Error(converter.errors.jsonNotArray);
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
        alert(ui.copied);
      } catch (err) {
        alert(ui.copyFailed);
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
        return converter.input.jsonPlaceholder;
      case 'yaml-to-json':
        return converter.input.yamlPlaceholder;
      case 'xml-to-json':
        return converter.input.xmlPlaceholder;
      case 'csv-to-json':
        return converter.input.csvPlaceholder;
      default:
        return converter.input.defaultPlaceholder;
    }
  };

  const getInputLabel = () => {
    switch (conversionType) {
      case 'json-to-yaml':
      case 'json-to-xml':
      case 'json-to-csv':
        return converter.input.jsonLabel;
      case 'yaml-to-json':
        return converter.input.yamlLabel;
      case 'xml-to-json':
        return converter.input.xmlLabel;
      case 'csv-to-json':
        return converter.input.csvLabel;
      default:
        return converter.input.defaultLabel;
    }
  };

  const getOutputLabel = () => {
    switch (conversionType) {
      case 'json-to-yaml':
        return converter.output.yamlLabel;
      case 'json-to-xml':
        return converter.output.xmlLabel;
      case 'json-to-csv':
        return converter.output.csvLabel;
      case 'yaml-to-json':
      case 'xml-to-json':
      case 'csv-to-json':
        return converter.output.jsonLabel;
      default:
        return converter.output.defaultLabel;
    }
  };

  return (
    <ToolLayout
      title={converter.title}
      description={converter.description}
      keywords={converter.keywords}
    >
      <div className="space-y-6">
        {/* 转换选项 */}
        <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-md">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">{converter.options.title}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="conversion-type" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {converter.options.conversionType}
              </label>
              <select
                id="conversion-type"
                className="block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:text-white sm:text-sm"
                value={conversionType}
                onChange={(e) => setConversionType(e.target.value as ConversionType)}
              >
                <optgroup label={converter.options.jsonTo}>
                  <option value="json-to-yaml">{converter.options.jsonToYaml}</option>
                  <option value="json-to-xml">{converter.options.jsonToXml}</option>
                  <option value="json-to-csv">{converter.options.jsonToCsv}</option>
                </optgroup>
                <optgroup label={converter.options.toJson}>
                  <option value="yaml-to-json">{converter.options.yamlToJson}</option>
                  <option value="xml-to-json">{converter.options.xmlToJson}</option>
                  <option value="csv-to-json">{converter.options.csvToJson}</option>
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
                {isProcessing ? converter.actions.processing : converter.actions.convert}
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
                  {ui.copy}
                </button>
                <button 
                  onClick={downloadOutput}
                  disabled={!output}
                  className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 dark:border-gray-700 shadow-sm text-xs font-medium rounded text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                >
                  <FiDownload className="mr-1" />
                  {ui.download}
                </button>
                <button 
                  onClick={clearAll}
                  className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 dark:border-gray-700 shadow-sm text-xs font-medium rounded text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <FiRefreshCw className="mr-1" />
                  {ui.clear}
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