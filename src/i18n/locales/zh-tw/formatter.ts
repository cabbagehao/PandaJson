export const formatter = {
  title: 'JSON格式化',
  h1Title: 'Format JSON Data',
  seo_title: 'JSON格式化與美化工具 – 美化、縮進與結構化JSON代碼',
  description: '使用適當縮排、語法醒目和自定義選項格式化和美化JSON。',
  keywords: 'JSON格式化,JSON美化,JSON整理,JSON編輯器,JSON格式轉換,JSON縮進,JSON結構化,免費JSON格式化工具,JSON語法高亮,在線美化JSON,JSON結構可視化,JSON自動縮進,JSON文件格式化,JSON漂亮打印,JSON可讀性工具,美化JSON代碼,JSON格式化器,JSON縮進工具,JSON程式碼美化,JSON程式碼格式',
  introduction: 'JSON格式化工具將未格式化、壓縮或結構混亂的JSON數據轉換為乾淨、可讀且正確縮進的代碼。無論您是在調試API響應、準備文檔還是分析數據結構，我們的格式化工具都能讓JSON數據處理變得更加簡單。\n\n只需將未格式化的JSON粘貼到編輯器中，我們的工具就會立即按照JSON語法標準應用適當的縮進、間距和換行。結果是美觀格式化的JSON，更易於閱讀、理解和修改。\n\n主要功能包括：\n• 一鍵格式化，可調整縮進設置\n• 行號便於引用和調試\n• 語法高亮提高可讀性\n• 自定義格式化JSON外觀的選項\n• 壓縮JSON以最小化文件大小的功能\n• 支持大型JSON文檔\n• 對無效JSON的錯誤檢測\n\n無論您是開發人員、數據分析師還是技術文檔撰寫者，我們的JSON格式化工具通過以清晰、有組織的結構呈現JSON數據，突顯元素之間的關係，幫助您更高效地處理JSON數據。',
  options: '格式化選項',
  indentSize: '縮進大小',
  spaces2: '2個空格',
  spaces4: '4個空格',
  spaces8: '8個空格',
  braceStyle: '大括號樣式',
  collapse: '折疊',
  expand: '展開',
  preserveInline: '保留行內',
  lineWidth: '行寬',
  noLimit: '無限制',
  chars80: '80個字符',
  chars100: '100個字符',
  chars120: '120個字符',
  format: '格式化',
  input: '輸入JSON',
  output: '格式化結果',
  placeholder: '在此處粘貼您的JSON數據進行格式化',
  error: '格式化錯誤: ',
  unknown: '格式化過程中發生未知錯誤',
  
  // How to Use Section
  howToUse: {
    title: '如何使用JSON格式化工具',
    steps: [
      {
        title: '貼上您的JSON',
        description: '複製並貼上您未格式化、壓縮或混亂的JSON數據到輸入編輯器中。我們的工具接受任何大小和複雜度的JSON。'
      },
      {
        title: '選擇格式化選項',
        description: '選擇您偏好的縮進大小（2、4或8個空格）、大括號樣式和行寬，以自定義輸出格式。'
      },
      {
        title: '立即格式化',
        description: '點擊"格式化"按鈕或使用自動格式化，將您的JSON轉換為清潔、可讀且結構正確的代碼。'
      },
      {
        title: '複製或下載',
        description: '使用複製按鈕快速將格式化的JSON複製到剪貼板，或下載為文件以供後續使用。'
      }
    ]
  },
  
  // FAQ Section
  faq: {
    title: '常見問題',
    items: [
      {
        question: '什麼是JSON格式化，為什麼需要它？',
        answer: 'JSON格式化（也稱為美化）將壓縮或縮小的JSON轉換為具有適當縮進、換行和間距的可讀格式。這使得調試、理解數據結構、審查API響應和維護代碼質量變得更容易。'
      },
      {
        question: '我可以格式化大型JSON文件嗎？',
        answer: '是的，我們的JSON格式化工具可以高效處理大型JSON文件。該工具針對性能進行了優化，可以處理複雜的嵌套對象、數組和廣泛的數據結構，而不會出現性能問題。'
      },
      {
        question: '有哪些縮進選項可用？',
        answer: '您可以選擇2、4或8個空格作為縮進。此外，您可以選擇不同的大括號樣式（折疊、展開或保留行內）並設置自定義行寬限制以獲得最佳可讀性。'
      },
      {
        question: '使用此工具時我的JSON數據安全嗎？',
        answer: '絕對安全！所有JSON格式化都在您的瀏覽器中使用客戶端JavaScript本地執行。您的數據永遠不會離開您的設備或上傳到我們的服務器，確保完全的隱私和安全。'
      },
      {
        question: '格式化工具可以檢測JSON錯誤嗎？',
        answer: '是的，我們的格式化工具包含內建的JSON驗證。如果您的輸入包含語法錯誤，工具將突出顯示具體位置並提供詳細的錯誤消息，幫助您快速修復問題。'
      },
      {
        question: '我可以將格式化的JSON導出為什麼文件格式？',
        answer: '您可以立即將格式化的JSON複製到剪貼板，或下載為.json文件。格式化的輸出保持適當的JSON語法，可以直接在您的應用程序、API或配置文件中使用。'
      },
      {
        question: '格式化工具支持JSON5或其他JSON變體嗎？',
        answer: '我們的格式化工具針對標準JSON（RFC 7159）進行了優化。雖然它可能處理一些JSON5功能，但我們建議使用標準JSON格式以獲得最佳結果和最大兼容性。'
      },
      {
        question: '我可以自定義格式化樣式嗎？',
        answer: '是的！您可以自定義縮進大小、大括號樣式、行寬和換行保留。這些選項允許您根據團隊的編碼標準或個人偏好格式化JSON。'
      }
    ]
  }
}; 