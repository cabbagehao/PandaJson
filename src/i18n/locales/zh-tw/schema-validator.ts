export const schemaValidator = {
  title: 'JSON Schema驗證',
  h1Title: 'Validate JSON Schema',
  seo_title: '針對Schema驗證JSON – 確保數據結構完整性',
  description: '針對schema規則驗證JSON，確保數據完整性和API合約合規性。',
  keywords: 'JSON Schema,JSON驗證,Schema驗證,JSON結構驗證,JSON格式驗證,JSON架構,JSON資料驗證,結構一致性檢查,JSON數據完整性,按架構驗證,JSON約束驗證,類型驗證,結構驗證,模式驗證,必填字段驗證,JSON格式檢查器,JSON合約驗證,API架構驗證',
  introduction: '需要確保您的JSON數據符合特定的架構（例如API合約或數據模型）？我們的JSON Schema驗證工具檢查您的JSON是否符合定義的架構，驗證字段類型、必需的鍵和數據約束條件。這對於團隊協作、API文檔和確保跨系統的數據一致性至關重要。\n\n工作原理：上傳您的JSON和架構文件（或直接粘貼架構），我們會針對`type`、`enum`、`minimum`和`pattern`等屬性進行驗證。錯誤消息會準確指出數據與架構不匹配的位置，幫助您快速修復問題。\n\n無論您是開發微服務、驗證用戶輸入還是標準化數據管道，我們的JSON架構驗證工具都能確保您的數據結構可靠且合規。立即免費嘗試！',
  jsonData: 'JSON數據',
  jsonSchema: 'JSON Schema',
  options: '驗證選項',
  validate: '驗證',
  validating: '驗證中...',
  clear: '清空',
  loadExample: '載入示例',
  jsonPlaceholder: '輸入或粘貼要驗證的JSON數據',
  schemaPlaceholder: '輸入或粘貼JSON Schema',
  result: '驗證結果',
  valid: '有效',
  invalid: '無效',
  errorDetails: '錯誤詳情',
  guideTitle: 'JSON Schema指南',
  guideDescription: 'JSON Schema是一種用於描述和驗證JSON數據結構的標準。以下是一些常見的驗證規則：',
  basicTypesTitle: '基本類型驗證',
  commonRulesTitle: '常見驗證規則',
  strictMode: '嚴格模式',
  strictModeDescription: '強制執行JSON Schema規範中未指定的額外驗證約束',
  jsonParseError: 'JSON解析錯誤',
  schemaParseError: 'Schema解析錯誤',
  rules: '常見驗證規則',
  
  // How to Use Section
  howToUse: {
    title: '如何使用JSON Schema驗證器',
    steps: [
      {
        title: '準備您的數據',
        description: '在「JSON數據」欄位中貼上您的JSON數據，在「JSON Schema」欄位中貼上您的schema JSON。兩者都必須是有效的JSON才能進行驗證。'
      },
      {
        title: '配置選項',
        description: '選擇您的驗證偏好設定，包括嚴格模式，以便對未JSON Schema規範中指定的額外約束進行限制。'
      },
      {
        title: '執行驗證',
        description: '點擊「驗證」來檢查您的JSON數據是否符合schema。這個過程是即時的，並提供詳細的反駈。'
      },
      {
        title: '檢視結果',
        description: '如果有效，您將看到確認。如果無效，詳細錯誤將顯示確切的失敗位置和原因。'
      }
    ]
  },
  
  // FAQ Section
  faq: {
    title: '常見問題',
    items: [
      {
        question: '什麼是JSON Schema，為什麼我應該使用它？',
        answer: 'JSON Schema是一個用於描述和驗證JSON數據結構的標準。它定義數據類型、必須屬性、格式和約束的規則，確保您應用程序中數據的一致性和品質。'
      },
      {
        question: '如何為我的數據建立JSON schema？',
        answer: '從定義根類型（object/array）開始，然後指定屬性、它們的類型和約束。使用關鍵字如"required"、"properties"、"type"、"format"來定義驗證規則。'
      },
      {
        question: '支持哪些驗證約束？',
        answer: '我們支持所有標準JSON Schema約束：數據類型、必需值、數字限制、字符串長度、正則表達式模式、枚舉等等。'
      },
      {
        question: '驗證中的「嚴格模式」是什麼意思？',
        answer: '嚴格模式應用額外約束，如禁止schema中未指定的屬性、應用更嚴格的類型驗證和確保完全符合規範。'
      },
      {
        question: '我可以驗證數組和嵌套對象嗎？',
        answer: '可以！驗證器支持複雜的JSON結構，包括嵌套數組、深層對象和遞迴schema。為數據層次結構的每個層級定義規則。'
      },
      {
        question: '如何解釋驗證錯誤消息？',
        answer: '錯誤消息顯示失敗驗證數據的確切路徑、違反的規則以及預期與實際值。使用這些信息來糾正您的數據或schema。'
      },
      {
        question: '我可以使用來自API規範（如OpenAPI）的schema嗎？',
        answer: '可以，OpenAPI/Swagger schema與JSON Schema兼容。從API規範中提取schema部分，直接用於驗證。'
      },
      {
        question: '驗證期間我的數據和schema安全嗎？',
        answer: '絕對安全！所有驗證都在您的瀏覽器中本地完成。您的數據和schema都不會發送到外部服務器，確保完全的隱私和安全。'
      }
    ]
  }
}; 