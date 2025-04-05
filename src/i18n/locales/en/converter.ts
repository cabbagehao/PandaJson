export const converter = {
  title: 'JSON Converter',
  description: 'Convert JSON data to other formats (YAML, XML, CSV), or convert other formats to JSON.',
  keywords: 'JSON converter,JSON to XML,JSON to YAML,XML to JSON,YAML to JSON,CSV to JSON,JSON to CSV',
  options: 'Conversion Options',
  conversionType: {
    label: 'Conversion Type',
    placeholder: 'Select conversion type',
    options: {
      json2yaml: 'JSON to YAML',
      yaml2json: 'YAML to JSON',
      json2xml: 'JSON to XML',
      xml2json: 'XML to JSON',
      json2csv: 'JSON to CSV',
      csv2json: 'CSV to JSON'
    }
  },
  input: {
    label: 'Input',
    placeholder: 'Paste data to convert'
  },
  output: {
    label: 'Output',
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
    conversionFailed: 'Conversion failed',
    unsupportedConversion: 'Unsupported conversion type',
    invalidJson: 'Invalid JSON',
    invalidYaml: 'Invalid YAML',
    invalidXml: 'Invalid XML',
    invalidCsv: 'Invalid CSV',
    jsonNotArray: 'JSON must be an array of objects to convert to CSV'
  }
}; 