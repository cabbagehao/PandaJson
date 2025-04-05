'use client';

import React, { useState } from 'react';
import yaml from 'js-yaml';
import { xml2json, json2xml } from 'xml-js';
import { Parser } from 'json2csv';
import Papa from 'papaparse';
import { FiCopy, FiDownload, FiX } from 'react-icons/fi';
import { useTranslation } from '@/i18n/client';
import { Locale } from '@/i18n';

interface ConverterClientProps {
  params: {
    lang: string;
  };
}

export default function ConverterClient({ params }: ConverterClientProps) {
  const { t } = useTranslation(params.lang, 'converter');
  const [input, setInput] = useState<string>('');
  const [output, setOutput] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [conversionType, setConversionType] = useState<string>('json2yaml');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const handleConvert = () => {
    if (!input.trim()) {
      setError(t('errors.emptyInput'));
      return;
    }

    setIsProcessing(true);
    setError(null);

    try {
      switch (conversionType) {
        case 'json2yaml':
          convertJsonToYaml();
          break;
        case 'yaml2json':
          convertYamlToJson();
          break;
        case 'json2xml':
          convertJsonToXml();
          break;
        case 'xml2json':
          convertXmlToJson();
          break;
        case 'json2csv':
          convertJsonToCsv();
          break;
        case 'csv2json':
          convertCsvToJson();
          break;
        default:
          setError(t('errors.unsupportedConversion'));
      }
    } catch (err) {
      setError(t('errors.conversionFailed') + ': ' + (err as Error).message);
    } finally {
      setIsProcessing(false);
    }
  };

  const convertJsonToYaml = () => {
    try {
      const jsonObj = JSON.parse(input);
      const yamlStr = yaml.dump(jsonObj, { indent: 2 });
      setOutput(yamlStr);
    } catch (err) {
      setError(t('errors.invalidJson') + ': ' + (err as Error).message);
    }
  };

  const convertYamlToJson = () => {
    try {
      const jsonObj = yaml.load(input);
      const jsonStr = JSON.stringify(jsonObj, null, 2);
      setOutput(jsonStr);
    } catch (err) {
      setError(t('errors.invalidYaml') + ': ' + (err as Error).message);
    }
  };

  const convertJsonToXml = () => {
    try {
      const jsonObj = JSON.parse(input);
      const xmlStr = json2xml(JSON.stringify(jsonObj), { compact: true, spaces: 2 });
      setOutput(xmlStr);
    } catch (err) {
      setError(t('errors.invalidJson') + ': ' + (err as Error).message);
    }
  };

  const convertXmlToJson = () => {
    try {
      const jsonStr = xml2json(input, { compact: true, spaces: 2 });
      const formattedJson = JSON.stringify(JSON.parse(jsonStr), null, 2);
      setOutput(formattedJson);
    } catch (err) {
      setError(t('errors.invalidXml') + ': ' + (err as Error).message);
    }
  };

  const convertJsonToCsv = () => {
    try {
      const jsonObj = JSON.parse(input);
      
      if (!Array.isArray(jsonObj)) {
        setError(t('errors.jsonNotArray'));
        return;
      }
      
      const parser = new Parser();
      const csv = parser.parse(jsonObj);
      setOutput(csv);
    } catch (err) {
      setError(t('errors.invalidJson') + ': ' + (err as Error).message);
    }
  };

  const convertCsvToJson = () => {
    try {
      const result = Papa.parse(input, { header: true });
      
      if (result.errors.length > 0) {
        setError(t('errors.invalidCsv') + ': ' + result.errors[0].message);
        return;
      }
      
      const jsonStr = JSON.stringify(result.data, null, 2);
      setOutput(jsonStr);
    } catch (err) {
      setError(t('errors.invalidCsv') + ': ' + (err as Error).message);
    }
  };

  const handleCopyOutput = () => {
    navigator.clipboard.writeText(output);
  };

  const handleDownloadOutput = () => {
    const blob = new Blob([output], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    
    let extension = 'txt';
    
    switch (conversionType) {
      case 'json2yaml':
        extension = 'yaml';
        break;
      case 'yaml2json':
      case 'xml2json':
      case 'csv2json':
        extension = 'json';
        break;
      case 'json2xml':
        extension = 'xml';
        break;
      case 'json2csv':
        extension = 'csv';
        break;
    }
    
    a.download = `converted.${extension}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const clearInput = () => {
    setInput('');
    setOutput('');
    setError(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">{t('title')}</h1>
      <p className="mb-6 text-muted-foreground">{t('description')}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="flex justify-between items-center mb-2">
            <label htmlFor="input" className="block text-sm font-medium">
              {t('input.label')}
            </label>
            <button
              onClick={clearInput}
              disabled={!input}
              className="flex items-center px-2 py-1 text-sm rounded hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <FiX className="w-4 h-4 mr-1" />
              {t('actions.clear')}
            </button>
          </div>
          <textarea
            id="input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={t('input.placeholder')}
            className="w-full h-[400px] p-2 border rounded font-mono resize-none mb-4"
          />
        </div>
        
        <div>
          <div className="flex justify-between items-center mb-2">
            <label htmlFor="output" className="block text-sm font-medium">
              {t('output.label')}
            </label>
            <div className="flex gap-2">
              <button
                onClick={handleCopyOutput}
                disabled={!output}
                className="flex items-center px-2 py-1 text-sm rounded hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <FiCopy className="w-4 h-4 mr-1" />
                {t('actions.copy')}
              </button>
              <button
                onClick={handleDownloadOutput}
                disabled={!output}
                className="flex items-center px-2 py-1 text-sm rounded hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <FiDownload className="w-4 h-4 mr-1" />
                {t('actions.download')}
              </button>
            </div>
          </div>
          <textarea
            id="output"
            value={output}
            readOnly
            placeholder={t('output.placeholder')}
            className="w-full h-[400px] p-2 border rounded font-mono resize-none mb-4"
          />
        </div>
      </div>
      
      <div className="my-6 flex flex-col sm:flex-row gap-4">
        <div className="w-full sm:w-1/3">
          <label htmlFor="conversion-type" className="block text-sm font-medium mb-2">
            {t('conversionType.label')}
          </label>
          <select
            id="conversion-type"
            value={conversionType}
            onChange={(e) => setConversionType(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="json2yaml">{t('conversionType.options.json2yaml')}</option>
            <option value="yaml2json">{t('conversionType.options.yaml2json')}</option>
            <option value="json2xml">{t('conversionType.options.json2xml')}</option>
            <option value="xml2json">{t('conversionType.options.xml2json')}</option>
            <option value="json2csv">{t('conversionType.options.json2csv')}</option>
            <option value="csv2json">{t('conversionType.options.csv2json')}</option>
          </select>
        </div>
        
        <div className="w-full sm:w-2/3 flex items-end">
          <button
            onClick={handleConvert}
            disabled={isProcessing || !input.trim()}
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded disabled:opacity-50"
          >
            {isProcessing ? t('actions.processing') : t('actions.convert')}
          </button>
        </div>
      </div>
      
      {error && (
        <div className="mt-4 p-4 bg-red-100 text-red-800 rounded">
          {error}
        </div>
      )}
    </div>
  );
} 