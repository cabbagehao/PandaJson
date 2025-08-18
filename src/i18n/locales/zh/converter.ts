export const converter = {
  title: 'JSON转换为YAML、XML、CSV - 免费数据格式转换器',
  seo_title: 'JSON转换为YAML、XML、CSV - 免费数据格式转换器',
  description: '无缝转换JSON到YAML、XML、CSV格式。适用于数据迁移、配置管理和跨平台数据交换工作流。',
  keywords: 'JSON转换,JSON到XML,JSON到YAML,XML到JSON,YAML到JSON,CSV到JSON,JSON到CSV,JSON转换工具,YAML转JSON,XML转JSON,CSV转JSON,转换数据格式,JSON数据转换,格式转换工具,双向转换,数据交换格式,在线转换JSON,数据格式转换器,文件格式转换,JSON导入导出,JSON迁移工具',
  introduction: 'JSON转换器是您在JSON和其他流行格式之间无缝转换数据的一站式解决方案。无论您是需要将JSON转换为YAML用于配置文件，将JSON转换为XML用于传统系统，还是将JSON导出为CSV用于数据分析，我们的工具都能精确轻松地处理这些转换。\n\n我们的转换器在转换过程中保持数据完整性，保留层次关系、数据类型和结构元素。直观的界面允许您粘贴或上传源数据，选择目标格式，并立即查看转换后的输出。\n\n主要功能包括：\n• 在JSON与YAML、XML、CSV和TSV之间的双向转换\n• 在支持的范围内保留嵌套结构和数据类型\n• 每种格式转换的可自定义选项\n• 转换输出的实时预览\n• 复制到剪贴板或下载功能\n• 支持大型数据集\n\n只需粘贴您的数据，选择目标格式，然后让我们的转换器处理剩下的工作—为您的开发工作流程节省宝贵的时间和精力。',
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