export const converter = {
  title: 'JSON轉換',
  description: '輕鬆轉換XML、YAML、CSV與JSON格式，支持雙向轉換和自定義選項',
  keywords: 'JSON轉換器,JSON轉XML,JSON轉YAML,XML轉JSON,YAML轉JSON,CSV轉JSON,JSON轉CSV',
  options: {
    title: '轉換選項',
    conversionType: '轉換類型',
    jsonTo: 'JSON轉為',
    toJson: '轉為JSON',
    jsonToYaml: 'JSON轉YAML',
    jsonToXml: 'JSON轉XML',
    jsonToCsv: 'JSON轉CSV',
    yamlToJson: 'YAML轉JSON',
    xmlToJson: 'XML轉JSON',
    csvToJson: 'CSV轉JSON'
  },
  input: {
    defaultLabel: '輸入',
    jsonLabel: 'JSON輸入',
    yamlLabel: 'YAML輸入',
    xmlLabel: 'XML輸入',
    csvLabel: 'CSV輸入',
    defaultPlaceholder: '在此處粘貼數據',
    jsonPlaceholder: '在此處粘貼JSON數據',
    yamlPlaceholder: '在此處粘貼YAML數據',
    xmlPlaceholder: '在此處粘貼XML數據',
    csvPlaceholder: '在此處粘貼CSV數據'
  },
  output: {
    defaultLabel: '輸出',
    jsonLabel: 'JSON輸出',
    yamlLabel: 'YAML輸出',
    xmlLabel: 'XML輸出',
    csvLabel: 'CSV輸出',
    placeholder: '轉換結果將顯示在此處'
  },
  actions: {
    convert: '轉換',
    processing: '處理中...',
    copy: '複製',
    download: '下載',
    clear: '清空'
  },
  errors: {
    emptyInput: '請輸入要轉換的數據',
    conversionFailed: '轉換錯誤',
    unsupportedConversion: '不支持的轉換類型',
    invalidJson: '無效的JSON',
    invalidYaml: '無效的YAML',
    invalidXml: '無效的XML',
    invalidCsv: '無效的CSV',
    jsonNotArray: 'JSON必須是對象數組才能轉換為CSV',
    unknownError: '轉換過程中發生未知錯誤'
  },
  alerts: {
    copySuccess: '已複製到剪貼板',
    copyFailed: '複製失敗'
  }
}; 