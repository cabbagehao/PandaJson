export const converter = {
  title: 'Convert JSON to YAML, XML, CSV - Free Data Format Converter',
  h1Title: 'Transform JSON to Any Format',
  seo_title: 'Convert JSON to YAML, XML, CSV - Free Data Format Converter',
  description: 'Convert JSON to YAML, XML, CSV and back with bidirectional format transformation.',
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
  },
  
  // How to Use Section
  howToUse: {
    title: 'How to Use the JSON Converter',
    steps: [
      {
        title: 'Choose Conversion Type',
        description: 'Select your desired conversion from the dropdown menu: JSON to YAML, JSON to XML, JSON to CSV, or any reverse conversion.'
      },
      {
        title: 'Paste Your Data',
        description: 'Copy and paste your source data into the input editor. The converter accepts JSON, YAML, XML, or CSV depending on your selected conversion type.'
      },
      {
        title: 'Convert Instantly',
        description: 'Click the "Convert" button to transform your data. The conversion happens instantly with real-time error checking and validation.'
      },
      {
        title: 'Copy or Download',
        description: 'Use the copy button to copy the converted data to your clipboard, or download it as a file for later use in your projects.'
      }
    ]
  },
  
  // FAQ Section
  faq: {
    title: 'JSON Converter FAQ',
    items: [
      {
        question: 'What formats can I convert to and from?',
        answer: 'Our converter supports bidirectional conversion between JSON, YAML, XML, and CSV formats. You can convert JSON to any of these formats, or convert YAML, XML, or CSV back to JSON, giving you complete flexibility for data transformation.'
      },
      {
        question: 'How does JSON to CSV conversion work?',
        answer: 'JSON to CSV conversion works best with JSON arrays containing objects with consistent properties. Each object becomes a row, and object properties become columns. For nested objects, the converter flattens the structure to create CSV-compatible format.'
      },
      {
        question: 'Are nested JSON structures preserved during conversion?',
        answer: 'The preservation of nested structures depends on the target format. YAML and XML fully support nested data. For CSV conversion, nested structures are flattened with dot notation (e.g., user.name) to maintain data relationships.'
      },
      {
        question: 'Can I convert XML with attributes and namespaces?',
        answer: 'Yes, our XML converter handles attributes, namespaces, and complex XML structures. When converting XML to JSON, attributes are preserved with special notation, and the reverse conversion maintains proper XML structure.'
      },
      {
        question: 'What happens if my data has conversion errors?',
        answer: 'If conversion errors occur, detailed error messages are displayed showing exactly what went wrong and where. Common issues include invalid JSON syntax, unsupported XML structures, or CSV format problems.'
      },
      {
        question: 'Is the converted data identical to the original?',
        answer: 'We strive for high fidelity conversion while respecting format limitations. Some data type information may be lost (e.g., numbers vs strings in CSV), but structural and content integrity is maintained throughout the conversion process.'
      },
      {
        question: 'Can I convert large datasets?',
        answer: 'Yes, our converter is optimized for performance and can handle large datasets efficiently. The conversion process is streamlined to work with substantial amounts of data without browser performance issues.'
      },
      {
        question: 'Are there any file size limits?',
        answer: 'There are no hard file size limits, but very large files (over 10MB) may experience slower processing depending on your device\'s capabilities. For optimal performance, we recommend processing extremely large files in smaller chunks.'
      }
    ]
  }
}; 