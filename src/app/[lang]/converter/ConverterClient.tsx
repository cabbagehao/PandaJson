'use client';

import React, { useState, useEffect } from 'react';
import { FiDownload, FiCopy, FiRefreshCw, FiRepeat } from 'react-icons/fi';
import * as yaml from 'js-yaml';
import { xml2json, json2xml } from 'xml-js';
import Papa from 'papaparse';
import { useTranslation } from '@/i18n/hooks';
import JsonEditor from '@/app/components/JsonEditor';
import ToolLayout from '@/app/components/ToolLayout';
import { Locale } from '@/i18n';

type ConversionType = 'json-to-yaml' | 'json-to-xml' | 'json-to-csv' | 'yaml-to-json' | 'xml-to-json' | 'csv-to-json';

interface ConverterClientProps {
  pageTitle: string;
  pageDescription: string;
  pageKeywords: string;
  pageIntroduction?: string;
  locale: Locale;
}

export default function ConverterClient({
  pageTitle,
  pageDescription,
  pageKeywords,
  pageIntroduction,
  locale
}: ConverterClientProps) {
  const { t } = useTranslation();
  const converter = t('converter');
  const ui = t('common').ui;

  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [conversionType, setConversionType] = useState<ConversionType>('json-to-yaml');
  const [isProcessing, setIsProcessing] = useState(false);

  // 设置页面标题
  useEffect(() => {
    // 直接使用翻译文件中的seo_title设置页面标题
    document.title = converter.seo_title;
  }, [converter.seo_title]);

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
      title={pageTitle}
      description={pageDescription}
      keywords={pageKeywords}
      introduction={pageIntroduction}
      iconComponent={<FiRepeat className="w-6 h-6 text-orange-500" />}
    >
      <div className="space-y-6">
        {/* 转换选项 */}
        <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-900 border border-orange-100 dark:border-gray-700 p-4 sm:p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
              <FiRepeat className="w-5 h-5 mr-2 text-orange-600 dark:text-orange-400" />
              {converter.options.title}
            </h3>
            <button
              type="button"
              onClick={handleConvert}
              disabled={isProcessing || !input.trim()}
              className="inline-flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 text-white text-sm font-medium rounded-lg shadow-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
              <FiRepeat className="w-4 h-4 mr-2" />
              {isProcessing ? converter.actions.processing : converter.actions.convert}
            </button>
          </div>

          <div className="max-w-md">
            <div className="space-y-2">
              <label htmlFor="conversion-type" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                {converter.options.conversionType}
              </label>
              <select
                id="conversion-type"
                className="block w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition-colors sm:text-sm"
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
          </div>
        </div>

        {/* 错误信息显示区域 */}
        {error && (
          <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-red-800 dark:text-red-300">{error}</p>
              </div>
            </div>
          </div>
        )}

        {/* 输入/输出区域 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <div className="mb-2 flex justify-between items-center">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                {getInputLabel()}
              </label>
              {/* 空div，用于占位对齐 */}
              <div className="opacity-0 invisible h-10"></div>
            </div>
            <JsonEditor
              value={input}
              onChange={setInput}
              placeholder={getInputPlaceholder()}
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