export const converter = {
  title: 'JSON 转换工具',
  description: '将 JSON 数据转换为其他格式（YAML、XML、CSV），或将其他格式转换为 JSON。',
  keywords: 'JSON转换,JSON到XML,JSON到YAML,XML到JSON,YAML到JSON,CSV到JSON,JSON到CSV',
  options: '转换选项',
  conversionType: {
    label: '转换类型',
    placeholder: '选择转换类型',
    options: {
      json2yaml: 'JSON 到 YAML',
      yaml2json: 'YAML 到 JSON',
      json2xml: 'JSON 到 XML',
      xml2json: 'XML 到 JSON',
      json2csv: 'JSON 到 CSV',
      csv2json: 'CSV 到 JSON'
    }
  },
  input: {
    label: '输入',
    placeholder: '粘贴需要转换的数据'
  },
  output: {
    label: '输出',
    placeholder: '转换结果将显示在这里'
  },
  actions: {
    convert: '转换',
    processing: '处理中...',
    copy: '复制',
    download: '下载',
    clear: '清除'
  },
  errors: {
    emptyInput: '请输入要转换的数据',
    conversionFailed: '转换失败',
    unsupportedConversion: '不支持的转换类型',
    invalidJson: '无效的 JSON',
    invalidYaml: '无效的 YAML',
    invalidXml: '无效的 XML',
    invalidCsv: '无效的 CSV',
    jsonNotArray: 'JSON 必须是对象数组才能转换为 CSV'
  }
}; 