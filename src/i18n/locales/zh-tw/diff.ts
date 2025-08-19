export const diff = {
  title: 'JSON對比',
  h1Title: 'Compare JSON Files',
  seo_title: '在線對比JSON數據集 – 突出顯示添加、刪除和變更的內容',
  description: '視覺化比較JSON檔案，具有程式碼審查的併排高亮顯示。',
  keywords: 'JSON對比,JSON比較,JSON差異,JSON比對,JSON比較器,查找JSON差異,JSON變更追蹤器,JSON版本比較,JSON數據對比,JSON文件比較,JSON並排比較,JSON結構比較,JSON差異工具,識別JSON變更,跟蹤JSON修改,JSON差異可視化,JSON衝突解決',
  introduction: '您是否在團隊項目中工作或跟蹤JSON版本變更？我們的JSON對比工具幫助您快速比較兩個JSON文件並可視化差異。我們突出顯示添加的鍵、刪除的條目和修改的值，以清晰、顏色編碼的視圖呈現，讓您一眼就能發現變更。\n使用場景包括：\n審查包含JSON配置的拉取請求\n跟蹤數據庫中的數據版本歷史\n調試API響應之間的不匹配\n無需再滾動瀏覽代碼行—我們的工具自動解析嵌套對象和數組，使複雜比較變得簡單。粘貼或上傳兩個JSON文件，讓我們的JSON比較功能準確顯示變更內容。非常適合開發人員、QA團隊和數據管理人員！',
  leftInput: '第一個 JSON',
  rightInput: '第二個 JSON',
  result: '比較結果',
  placeholderLeft: '在此粘貼第一個 JSON 數據',
  placeholderRight: '在此粘貼第二個 JSON 數據',
  compare: '比較',
  clear: '清除',
  loadExample: '載入範例',
  processing: '處理中...',
  error: '比較錯誤: ',
  unknown: '比較過程中發生未知錯誤',
  diffGuide: '差異對比說明',
  addedContent: '新增內容',
  removedContent: '刪除內容',
  modifiedContent: '修改內容',
  originalJson: '原始 JSON',
  updatedJson: '更新後 JSON',
  
  // How to Use Section
  howToUse: {
    title: '如何使用JSON對比工具',
    steps: [
      {
        title: '貼上兩個JSON',
        description: '在「第一個JSON」和「第二個JSON」欄位中輸入您的兩個JSON文件。它們可以是任何大小和複雜度的數據。'
      },
      {
        title: '執行比較',
        description: '點擊「比較」按鈕來分析兩個JSON之間的差異。即使對於大型文件，處理也是即時的。'
      },
      {
        title: '檢視差異',
        description: '查看按顏色突出顯示的差異：綠色表示新增、紅色表示刪除、黃色表示修改。'
      },
      {
        title: '分析結果',
        description: '使用差異對比說明來理解每個變更，並快速識別版本之間的變化內容。'
      }
    ]
  },
  
  // FAQ Section
  faq: {
    title: '常見問題',
    items: [
      {
        question: '對比工具如何檢測JSON中的差異？',
        answer: '我們的工具對兩個JSON進行結構性分析，比較鍵、值和數據類型。它檢測所有嵌套層級的新增、刪除和修改，同時保持層次上下文。'
      },
      {
        question: '我可以比較非常大的JSON文件嗎？',
        answer: '是的，我們的對比工具經過優化，可以高效處理大型JSON文件。它可以快速處理兆字節的數據，同時保持差異檢測的準確性。'
      },
      {
        question: '如何解釋差異中的顏色？',
        answer: '綠色表示在第二個JSON中新增的內容，紅色顯示已刪除的內容，黃色突出顯示修改的值。這種視覺編碼有助於快速識別變更。'
      },
      {
        question: '對比工具能處理數組和嵌套對象嗎？',
        answer: '絕對可以！我們的工具能夠導航複雜的JSON結構，包括嵌套數組、深層對象和混合數據類型，在所有層級保持準確性。'
      },
      {
        question: '比較期間我的數據安全嗎？',
        answer: '是的，所有比較都在您的瀏覽器中本地完成。您的JSON數據永遠不會發送到外部服務器，確保完全的隱私和安全。'
      },
      {
        question: '我可以導出或保存比較結果嗎？',
        answer: '目前您可以在界面中查看和分析差異。對於文檔記錄，我們建議對突出顯示的結果進行截圖或複製特定部分。'
      },
      {
        question: '如果其中一個JSON無效會怎樣？',
        answer: '如果任何JSON包含語法錯誤，工具將顯示具體的錯誤訊息，指示問題及其位置以便於修正。'
      },
      {
        question: '我可以比較結構完全不同的JSON嗎？',
        answer: '是的，我們的工具可以比較結構完全不同的JSON。它將以清晰有序的方式顯示所有結構和內容差異。'
      }
    ]
  }
}; 