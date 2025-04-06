export const converter = {
  title: 'JSON Converter',
  description: 'Easily convert between XML, YAML, CSV and JSON formats, with bidirectional conversion and custom options',
  keywords: 'JSON converter,JSON to XML,JSON to YAML,XML to JSON,YAML to JSON,CSV to JSON,JSON to CSV',
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