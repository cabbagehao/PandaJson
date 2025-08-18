export const converter = {
  title: 'Convert JSON to YAML, XML, CSV - Free Data Format Converter',
  h1Title: 'Transform JSON to Any Format',
  seo_title: 'Convert JSON to YAML, XML, CSV - Free Data Format Converter',
  description: 'Seamlessly convert JSON to YAML, XML, CSV formats and back. Perfect for data migration, configuration management, and cross-platform data exchange workflows.',
  keywords: 'JSON converter,JSON to YAML,JSON to XML,JSON to CSV,JSON transformation,data format converter,JSON export,YAML to JSON,XML to JSON,CSV to JSON,convert data formats,JSON data transformation,format conversion tool,bidirectional conversion,data interchange formats,convert JSON online,data format translator,file format conversion,JSON import export,JSON migration tool',
  introduction: 'The JSON Converter is your all-in-one solution for seamlessly transforming data between JSON and other popular formats. Whether you need to convert JSON to YAML for configuration files, transform JSON to XML for legacy systems, or export JSON to CSV for data analysis, our tool handles these conversions with precision and ease.\n\nOur converter maintains data integrity during transformation, preserving hierarchical relationships, data types, and structural elements. The intuitive interface allows you to paste or upload your source data, select your target format, and instantly view the converted output.\n\nKey features include:\n• Bi-directional conversion between JSON and YAML, XML, CSV, and TSV\n• Preservation of nested structures and data types where supported\n• Customizable options for each format conversion\n• Real-time preview of converted output\n• Copy to clipboard or download functionality\n• Support for large datasets\n\nSimply paste your data, select your target format, and let our converter handle the rest—saving you valuable time and effort in your development workflow.',
  options: {
    title: 'Conversion Options',
    conversionType: 'Conversion Type',
    jsonTo: 'JSON to',
    toJson: 'To JSON',
    jsonToYaml: 'JSON to YAML',
    jsonToXml: 'JSON to XML',
    jsonToCsv: 'JSON to CSV',
    yamlToJson: 'YAML to JSON',
    xmlToJson: 'XML to JSON',
    csvToJson: 'CSV to JSON'
  },
  input: {
    defaultLabel: 'Input',
    jsonLabel: 'JSON Input',
    yamlLabel: 'YAML Input',
    xmlLabel: 'XML Input',
    csvLabel: 'CSV Input',
    defaultPlaceholder: 'Paste data here',
    jsonPlaceholder: 'Paste JSON data here',
    yamlPlaceholder: 'Paste YAML data here',
    xmlPlaceholder: 'Paste XML data here',
    csvPlaceholder: 'Paste CSV data here'
  },
  output: {
    defaultLabel: 'Output',
    jsonLabel: 'JSON Output',
    yamlLabel: 'YAML Output',
    xmlLabel: 'XML Output',
    csvLabel: 'CSV Output',
    placeholder: 'Conversion result will appear here'
  },
  actions: {
    convert: 'Convert',
    processing: 'Processing...',
    copy: 'Copy',
    download: 'Download',
    clear: 'Clear'
  },
  errors: {
    emptyInput: 'Please enter data to convert',
    conversionFailed: 'Conversion error',
    unsupportedConversion: 'Unsupported conversion type',
    invalidJson: 'Invalid JSON',
    invalidYaml: 'Invalid YAML',
    invalidXml: 'Invalid XML',
    invalidCsv: 'Invalid CSV',
    jsonNotArray: 'JSON must be an array of objects to convert to CSV',
    unknownError: 'Unknown error occurred during conversion'
  },
  alerts: {
    copySuccess: 'Copied to clipboard',
    copyFailed: 'Copy failed'
  }
}; 