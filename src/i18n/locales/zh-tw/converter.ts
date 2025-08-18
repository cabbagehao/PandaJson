export const converter = {
  title: 'JSON轉換',
  h1Title: 'Convert JSON Format',
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
  },
  
  // How to Use Section
  howToUse: {
    title: '如何使用JSON轉換器',
    steps: [
      {
        title: '選擇轉換類型',
        description: '在轉換選項中選擇您所需的輸入和輸出格式。我們支持JSON、YAML、XML和CSV之間的雙向轉換。'
      },
      {
        title: '貼上您的數據',
        description: '在輸入欄位中插入您的數據。轉換器接受任何大小的數據，並自動檢測格式問題。'
      },
      {
        title: '立即轉換',
        description: '點擊"轉換"按鈕來轉換您的數據。轉換立即進行，並保持數據結構完整性。'
      },
      {
        title: '複製或下載',
        description: '使用操作按鈕將結果複製到剪貼板或下載為文件，以便在您的應用程序中使用。'
      }
    ]
  },
  
  // FAQ Section
  faq: {
    title: '常見問題',
    items: [
      {
        question: '支持哪些轉換格式？',
        answer: '我們支持JSON與YAML、XML、CSV之間的雙向轉換。您可以將任何這些格式轉換為其他格式，在可能的情況下保持結構和數據完整性。'
      },
      {
        question: '轉換過程中如何保持數據結構？',
        answer: '我們的轉換器在目標格式支持的情況下保持階層結構、數據類型和關係。對於有限的格式如CSV，複雜數據會被智能地展平。'
      },
      {
        question: '我可以轉換大型文件嗎？',
        answer: '是的，我們的轉換器經過優化，可以高效處理大型文件和複雜數據結構。它快速處理大型數據集而不會出現性能問題。'
      },
      {
        question: '轉換為CSV時嵌套數據會發生什麼？',
        answer: '轉換為CSV時，嵌套對象使用點符號標記法展平（例如：user.address.city）。複雜數組被序列化為字符串以保持數據完整性。'
      },
      {
        question: '轉換期間我的數據安全嗎？',
        answer: '絕對安全！所有轉換都在您的瀏覽器中本地進行。您的數據永遠不會離開您的設備或發送到外部服務器，確保完全隱私。'
      },
      {
        question: '轉換器會驗證輸入數據嗎？',
        answer: '是的，轉換器包含所有支持格式的驗證。如果輸入數據包含語法錯誤，您將收到具體的錯誤消息以協助糾正。'
      },
      {
        question: '我可以自定義轉換輸出嗎？',
        answer: '轉換器自動應用每種格式的最佳實踐。這包括YAML的適當縮進、有效的XML結構和標準CSV格式。'
      },
      {
        question: '如何下載轉換後的數據？',
        answer: '使用"下載"按鈕將轉換後的數據保存為具有適當擴展名的文件（.json、.yaml、.xml、.csv）。文件將隨時準備好在您的應用程序中使用。'
      }
    ]
  }
}; 