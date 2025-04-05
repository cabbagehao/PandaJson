export const converter = {
  title: 'JSON 转换工具',
  description: '将 JSON 数据转换为其他格式（YAML、XML、CSV），或将其他格式转换为 JSON。',
  keywords: 'JSON转换,JSON到XML,JSON到YAML,XML到JSON,YAML到JSON,CSV到JSON,JSON到CSV',
  options: {
    title: '转换选项',
    conversionType: '转换类型',
    jsonTo: 'JSON 转换为',
    toJson: '转换为 JSON',
    jsonToYaml: 'JSON 到 YAML',
    jsonToXml: 'JSON 到 XML',
    jsonToCsv: 'JSON 到 CSV',
    yamlToJson: 'YAML 到 JSON',
    xmlToJson: 'XML 到 JSON',
    csvToJson: 'CSV 到 JSON'
  },
  input: {
    defaultLabel: '输入',
    jsonLabel: 'JSON 输入',
    yamlLabel: 'YAML 输入',
    xmlLabel: 'XML 输入',
    csvLabel: 'CSV 输入',
    defaultPlaceholder: '在此粘贴数据',
    jsonPlaceholder: '在此粘贴 JSON 数据',
    yamlPlaceholder: '在此粘贴 YAML 数据',
    xmlPlaceholder: '在此粘贴 XML 数据',
    csvPlaceholder: '在此粘贴 CSV 数据'
  },
  output: {
    defaultLabel: '输出',
    jsonLabel: 'JSON 输出',
    yamlLabel: 'YAML 输出',
    xmlLabel: 'XML 输出',
    csvLabel: 'CSV 输出',
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
    conversionFailed: '转换错误',
    unsupportedConversion: '不支持的转换类型',
    invalidJson: '无效的 JSON',
    invalidYaml: '无效的 YAML',
    invalidXml: '无效的 XML',
    invalidCsv: '无效的 CSV',
    jsonNotArray: 'JSON 必须是对象数组才能转换为 CSV',
    unknownError: '转换过程中发生未知错误'
  },
  alerts: {
    copySuccess: '已复制到剪贴板',
    copyFailed: '复制失败'
  }
}; 