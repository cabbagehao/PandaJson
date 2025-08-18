export const validator = {
  title: 'JSON校驗',
  h1Title: 'Validate JSON Syntax',
  seo_title: 'JSON驗證器 – 快速檢查JSON語法和查找錯誤',
  description: '立即偵測JSON語法錯誤，提供精確的逐行回饋。用於調試API回應和確保應用程式中的數據完整性的必要工具。',
  keywords: 'JSON驗證器,JSON驗證,JSON格式檢查,JSON語法檢查,JSON錯誤定位器,在線JSON驗證器,JSON錯誤修復,JSON語法驗證,檢查JSON,JSON格式驗證,JSON錯誤查找器,JSON驗證工具,JSON調試工具,JSON結構驗證,錯誤位置查找器,JSON錯誤訊息,修復JSON語法,JSON代碼驗證器',
  introduction: 'JSON驗證器可幫助您快速識別JSON數據中的語法錯誤和結構問題。無論您是在調試Web API、處理配置文件還是處理數據源，我們的工具都能即時反饋您的JSON有效性。\n\n當檢測到錯誤時，驗證器會精確定位問題所在位置，並提供清晰、可操作的修復指導。每個錯誤都會以行號和列號信息高亮顯示，使故障排除更高效直觀。\n\n主要功能包括：\n• 基於JSON標準的即時語法驗證\n• 帶有行號和列號的精確錯誤位置\n• 詳細的錯誤描述，幫助快速解決問題\n• 支持大型JSON文檔\n• 乾淨、直觀的界面，提供實時反饋\n• 一鍵驗證，提供全面結果\n\n只需粘貼您的JSON，讓我們的驗證器檢查錯誤，確保您的數據在應用程序中使用前格式正確。',
  input: '輸入JSON',
  validate: '驗證JSON',
  validJson: '有效的JSON',
  invalidJson: '無效的JSON',
  errorDetails: '錯誤詳情',
  errorAt: '錯誤位於第{line}行，第{column}列',
  expectedToken: '預期的標記：{token}',
  unexpectedToken: '意外的標記：{token}',
  missingComma: '缺少逗號或括號不匹配',
  extraComma: '多餘的逗號',
  unclosedString: '未閉合的字符串',
  unclosedObject: '未閉合的對象',
  unclosedArray: '未閉合的數組',
  invalidProperty: '無效的屬性名稱',
  duplicateKey: '重複的鍵',
  extraData: 'JSON結束後有多餘數據',
  missingValue: '缺少值',
  missingColon: '缺少冒號',
  repairSuggestion: '修復建議',
  errorType: '錯誤類型',
  errorMessage: '錯誤信息',
  position: '位置',
  contextLine: '上下文行',
  placeholder: '在此處輸入JSON進行驗證',
  jsonStructure: 'JSON結構',
  jsonSyntaxError: 'JSON語法錯誤',
  parseSuccess: '解析成功，包含{count}個數據節點。',
  unknownError: '未知錯誤',
  
  // How to Use Section
  howToUse: {
    title: '如何使用JSON驗證器',
    steps: [
      {
        title: '貼上您的JSON',
        description: '在輸入欄位中插入或貼上您的JSON數據。驗證器接受任何大小和複雜度的JSON進行分析。'
      },
      {
        title: '自動驗證',
        description: '驗證會在您輸入時自動進行，或點擊"驗證JSON"按鈕進行手動語法檢查。'
      },
      {
        title: '查看結果',
        description: '如果有效，您將看到確認信息和樹狀結構。如果無效，詳細錯誤將顯示位置和問題類型。'
      },
      {
        title: '修復錯誤',
        description: '使用詳細的錯誤消息和修復建議來糾正語法問題，確保JSON有效。'
      }
    ]
  },
  
  // FAQ Section
  faq: {
    title: '常見問題',
    items: [
      {
        question: '什麼是JSON驗證，為什麼重要？',
        answer: 'JSON驗證檢查您的數據是否遵循正確的JSON語法。這對於防止應用程序錯誤、確保適當的數據交換以及在生產部署之前識別問題至關重要。'
      },
      {
        question: '此驗證器可以檢測哪些類型的JSON錯誤？',
        answer: '我們的驗證器檢測常見錯誤，如未關閉的括號/大括號、缺少或多餘的逗號、未關閉的字符串、重複鍵、缺少冒號和無效字符。提供精確的位置和每個錯誤的描述。'
      },
      {
        question: '驗證器能處理大型JSON文件嗎？',
        answer: '是的，我們的驗證器經過優化，可以高效處理大型JSON文件和複雜結構。它快速處理嵌套對象、廣泛數組和複雜數據集。'
      },
      {
        question: '驗證期間我的數據安全嗎？',
        answer: '完全安全！所有驗證都在您的瀏覽器中使用客戶端JavaScript本地完成。您的JSON數據永遠不會離開您的設備或發送到外部服務器。'
      },
      {
        question: '我可以驗證來自API或外部服務的JSON嗎？',
        answer: '是的！將任何來自API、網絡服務或配置文件的JSON響應直接粘貼到驗證器中。它非常適合調試API響應和驗證接收到的數據完整性。'
      },
      {
        question: '驗證器支持註釋或JSON5嗎？',
        answer: '此驗證器針對標準JSON（RFC 7159）進行了優化。為了更好的兼容性和準確結果，我們建議刪除註釋並使用標準JSON語法。'
      },
      {
        question: '如何解釋錯誤消息？',
        answer: '每個錯誤顯示確切的行和列、錯誤類型和詳細描述。使用行號快速定位問題，並遵循提供的修復建議進行糾正。'
      },
      {
        question: '如果JSON看起來正確但仍顯示錯誤該怎麼辦？',
        answer: '檢查不可見字符、文件編碼和特殊引號。有時從文檔或網頁複製可能會引入不可見但會導致解析錯誤的無效字符。'
      }
    ]
  }
}; 