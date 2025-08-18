export const treeEditor = {
  title: 'JSON樹形編輯器',
  h1Title: 'Edit JSON Tree',
  seo_title: '視覺化JSON編輯器 – 使用互動式樹狀視圖編輯複雜JSON數據',
  description: '透過直觀的樹狀介面編輯複雜的嵌套JSON。在沒有語法錯誤的情況下瀏覽和修改深層數據結構。完美適用於配置。',
  keywords: 'JSON樹編輯器,JSON可視化,JSON節點編輯,JSON樹結構,JSON樹狀視圖,互動式JSON編輯器,嵌套JSON編輯器,JSON結構查看器,視覺化數據編輯器,JSON層次查看器,複雜JSON編輯器,JSON可視化工具,JSON導航器,JSON數據操作,JSON層次結構編輯,JSON節點操作,拖放JSON編輯,JSON數據瀏覽器,交互式JSON數據操作,可視化JSON工具',
  introduction: '視覺化JSON樹形編輯器將複雜的JSON數據轉換為互動式樹狀結構，讓您能夠輕鬆操作。適合處理深層嵌套的數據結構，不會在大括號和語法中迷失。\n\n我們的直觀界面允許您展開和折疊節點、添加新的屬性和數組、修改值或通過簡單點擊刪除不需要的項目。雙視圖佈局同時顯示可編輯的樹狀結構和即時格式化的JSON輸出。\n\n此工具非常適合：\n• 處理複雜JSON響應的API開發人員\n• 探索複雜數據集的數據分析師\n• 更新基於JSON的配置的內容管理人員\n• 任何發現原始JSON編輯容易出錯的人\n\n更改會立即驗證，防止您在工作時出現語法錯誤。完成後，只需一次點擊即可導出完美格式化的JSON。',
  viewOptions: '查看選項',
  copyJsonResult: '複製',
  copySuccessful: '已複製到剪貼板！',
  downloadJsonResult: '下載',
  clearJsonData: '清除',
  jsonParsingError: 'JSON解析錯誤: ',
  validationError: '驗證錯誤: ',
  enterValidJson: '請輸入有效的JSON數據',
  treeLabel: '樹狀視圖',
  treeView: '樹視圖',
  jsonLabel: 'JSON輸出',
  placeholderText: '在此粘貼您的JSON數據...',
  loadExample: '載入範例',
  textView: '文本視圖',
  jsonText: 'JSON文本',
  jsonTree: 'JSON樹結構',
  placeholder: '在此輸入或粘貼JSON數據',
  copy: '複製',
  download: '下載',
  clear: '清除',
  copied: '已複製到剪貼板',
  copyFailed: '複製失敗',
  parseError: '解析錯誤',
  unknownError: '解析時發生未知錯誤',
  updateError: '更新錯誤',
  emptyInputMessage: '請先在文本編輯器中輸入有效的JSON',
  // 樹編輯器特有的翻譯
  addItem: '添加項目',
  addProperty: '添加屬性',
  key: '鍵',
  keyName: '鍵名',
  value: '值',
  type: '類型',
  expand: '全部展開',
  collapse: '全部折疊',
  ok: '確定',
  cancel: '取消',
  emptyArray: '空數組',
  emptyObject: '空對象',
  deleteItem: '刪除',
  editItem: '編輯',
  undoChange: '撤銷',
  redoChange: '重做',
  enterValidPropertyName: '請輸入有效的屬性名',
  add: '添加',
  empty: '空',
  keyNameEmpty: '鍵名不能為空',
  addFailed: '添加失敗',
  invalidValue: '無效的值',
  save: '保存',
  
  // How to Use Section
  howToUse: {
    title: '如何使用JSON樹形編輯器',
    steps: [
      {
        title: '貼上您的JSON',
        description: '在文本區域中輸入JSON數據。編輯器接受任何複雜度的JSON，並自動將其轉換為可導航的樹狀結構。'
      },
      {
        title: '導航樹狀結構',
        description: '使用樹狀視圖展開/折疊節點，導航嵌套結構，並快速找到您要編輯的數據。'
      },
      {
        title: '互動編輯',
        description: '點擊任何值來編輯，使用「新增」按鈕新增屬性，或使用「刪除」按鈕移除不需要的項目。'
      },
      {
        title: '導出結果',
        description: '您的編輯會即時反映在JSON輸出中。使用「複製」或「下載」來保存編輯後的JSON。'
      }
    ]
  },
  
  // FAQ Section
  faq: {
    title: '常見問題',
    items: [
      {
        question: '如何在JSON中新增屬性？',
        answer: '點擊任何對象旁邊的「新增屬性」按鈕。輸入鍵名和值，選擇數據類型並確認。新屬性將立即顯示在樹狀結構中。'
      },
      {
        question: '我可以編輯複雜數組嗎？',
        answer: '可以！數組完全受支持。使用「新增項目」新增項目，點擊現有值來編輯，或使用「刪除」按鈕移除項目。支持嵌套數組和數組內的對象。'
      },
      {
        question: '如何撤銷意外的更改？',
        answer: '使用「撤銷」和「重做」按鈕在編輯歷史中導航。您也可以重新載入原始JSON來重新開始。'
      },
      {
        question: '我可以在值中使用哪些數據類型？',
        answer: '編輯器支持所有標準JSON類型：string、number、boolean、null、object和array。在新增或編輯值時選擇適當的類型以確保正確格式。'
      },
      {
        question: '編輯器能處理非常大的JSON嗎？',
        answer: '可以，但對於極大的JSON文件，樹狀視圖的性能可能會受到影響。對於非常大的文件，請考慮先使用JSON格式化器或驗證器。'
      },
      {
        question: '如何保存編輯後的JSON？',
        answer: '使用「複製」按鈕將JSON複製到剪貼板，或「下載」以.json文件形式保存。JSON輸出會自動格式化並有效。'
      },
      {
        question: '我可以編輯無效的JSON嗎？',
        answer: '編輯器需要有效的JSON作為輸入。如果您的JSON有語法錯誤，請先使用JSON驗證器識別並修正問題，然後使用樹形編輯器。'
      },
      {
        question: '如何在深層嵌套的JSON結構中導航？',
        answer: '使用「全部展開」和「全部折疊」按鈕來控制視圖，或點擊個別節點來按需展開/折疊特定部分。'
      }
    ]
  }
}; 