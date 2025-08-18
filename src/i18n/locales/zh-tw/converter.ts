export const converter = {
  title: 'JSON轉換',
  seo_title: 'JSON轉換器 – 在JSON與YAML、XML、CSV等格式之間相互轉換',
  description: '將JSON無縫轉換為YAML、XML、CSV格式及其反向轉換。完美適用於數據遷移、配置管理和跨平台數據交換工作流程。',
  keywords: 'JSON轉換器,JSON轉XML,JSON轉YAML,XML轉JSON,YAML轉JSON,CSV轉JSON,JSON轉CSV,數據格式轉換,JSON轉換工具,JSON導出,數據格式轉換器,JSON數據轉換,格式轉換工具,雙向轉換,數據交換格式,在線JSON轉換,數據格式轉換器,文件格式轉換,JSON導入導出,JSON遷移工具',
  introduction: 'JSON轉換器是一個全面的工具，簡化了常見數據格式之間的轉換過程：JSON、XML、YAML和CSV。專為開發人員、數據分析師和技術編輯節省時間而設計，其直觀的用戶界面使數據轉換成為一個無縫的過程。\n\n通過雙向轉換選項，您可以輕鬆地將任何這些格式轉換為另一種格式。只需選擇所需的轉換類型，粘貼源數據，然後點擊"轉換"。結果將立即顯示，隨時可以複製或下載。\n\n主要功能：\n• 在JSON與XML、YAML、CSV之間互相轉換\n• 快速處理大型數據文件\n• 精確轉換，保持數據的層次結構\n• 整潔、可讀的輸出格式\n• 高級轉換選項，精確控制輸出\n\n該轉換器對於使用多種API的開發人員、需要更改數據格式的內容管理人員以及處理各種數據源的數據分析師來說是理想的選擇。它能處理最複雜的轉換情況，同時保持數據的完整性。',
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