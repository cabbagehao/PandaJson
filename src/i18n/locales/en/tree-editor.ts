export const treeEditor = {
  title: 'Edit JSON with Visual Tree Editor - Interactive JSON Navigator',
  h1Title: 'Edit JSON with Visual Tree Interface',
  seo_title: 'Edit JSON with Visual Tree Editor - Interactive JSON Navigator',
  description: 'Edit JSON through intuitive tree interface for easy navigation and error-free editing.',
  keywords: 'JSON tree editor,JSON visual editor,JSON editor,JSON tree view,JSON parser,modify JSON,edit JSON,interactive JSON editor,nested JSON editor,JSON structure viewer,JSON node editor,visual data editor,JSON hierarchy viewer,complex JSON editor,JSON tree structure,JSON visualization tool,JSON navigator',
  introduction: 'The visual JSON Tree Editor transforms complex JSON data into an interactive tree structure you can manipulate with ease. Ideal for managing deeply nested data structures without getting lost in curly braces and syntax.\n\nOur intuitive interface lets you expand and collapse nodes, add new properties and arrays, modify values, or delete unwanted items with simple clicks. The dual-view layout shows both your editable tree and formatted JSON output in real-time.\n\nThis tool is perfect for:\n• API developers working with complex JSON responses\n• Data analysts exploring intricate datasets\n• Content managers updating JSON-based configurations\n• Anyone who finds raw JSON editing error-prone\n\nChanges are validated instantly, preventing syntax errors while you work. When finished, export your perfectly formatted JSON with a single click.',
  viewOptions: 'View Options',
  copyJsonResult: 'Copy',
  copySuccessful: 'Copied to clipboard!',
  downloadJsonResult: 'Download',
  clearJsonData: 'Clear',
  jsonParsingError: 'JSON Parsing Error: ',
  validationError: 'Validation Error: ',
  enterValidJson: 'Please enter valid JSON data',
  treeLabel: 'Tree View',
  treeView: 'Tree View',
  jsonLabel: 'JSON Output',
  placeholderText: 'Paste your JSON data here...',
  loadExample: 'Load Example',
  addItem: 'Add Item',
  addProperty: 'Add Property',
  key: 'Key',
  value: 'Value',
  type: 'Type',
  expand: 'Expand All',
  collapse: 'Collapse All',
  ok: 'OK',
  cancel: 'Cancel',
  emptyArray: 'Empty Array',
  emptyObject: 'Empty Object',
  deleteItem: 'Delete',
  editItem: 'Edit',
  undoChange: 'Undo',
  redoChange: 'Redo',
  enterValidPropertyName: 'Please enter a valid property name',
  textView: 'Text View',
  jsonText: 'JSON Text',
  jsonTree: 'JSON Tree Structure',
  placeholder: 'Enter or paste JSON data here',
  copy: 'Copy',
  download: 'Download',
  copied: 'Copied to clipboard',
  copyFailed: 'Copy failed',
  parseError: 'Parse error',
  unknownError: 'Unknown error during parsing',
  updateError: 'Update error',
  emptyInputMessage: 'Please enter valid JSON in the text editor first',
  add: 'Add',
  empty: 'Empty',
  keyNameEmpty: 'Key name cannot be empty',
  addFailed: 'Add failed',
  invalidValue: 'Invalid value',
  save: 'Save',
  
  // How to Use Section
  howToUse: {
    title: 'How to Use the JSON Tree Editor',
    steps: [
      {
        title: 'Paste or Type JSON',
        description: 'Enter your JSON data in the text editor or paste existing JSON. The tool will automatically parse and display it as an interactive tree structure.'
      },
      {
        title: 'Navigate the Tree',
        description: 'Click on nodes to expand or collapse them. Use the tree view to visually navigate through your JSON structure without getting lost in nested data.'
      },
      {
        title: 'Edit Visually',
        description: 'Click on values to edit them directly, add new properties with the + button, or delete items using the delete button. All changes are applied in real-time.'
      },
      {
        title: 'Export Changes',
        description: 'Once finished editing, copy the updated JSON to your clipboard or download it as a file. The output maintains proper JSON formatting.'
      }
    ]
  },
  
  // FAQ Section
  faq: {
    title: 'JSON Tree Editor FAQ',
    items: [
      {
        question: 'What are the advantages of tree editing over text editing?',
        answer: 'Tree editing provides a visual representation of JSON structure, making it easier to understand nested relationships, prevent syntax errors, and navigate complex data. You can focus on content rather than worrying about brackets and commas.'
      },
      {
        question: 'Can I add new properties and arrays in the tree view?',
        answer: 'Yes! You can easily add new properties, objects, and arrays using the interface buttons. The tree editor provides intuitive controls for expanding your JSON structure without manual typing.'
      },
      {
        question: 'How does the tree editor handle different data types?',
        answer: 'The editor supports all JSON data types including strings, numbers, booleans, arrays, objects, and null values. Each type is visually distinguished and can be edited with appropriate input controls.'
      },
      {
        question: 'Can I undo changes made in the tree editor?',
        answer: 'The tree editor maintains a history of changes, and you can switch between tree view and text view to see your JSON in different formats. However, for complex undo operations, we recommend keeping backups of your original data.'
      },
      {
        question: 'Is the tree editor suitable for large JSON files?',
        answer: 'Yes, the tree editor efficiently handles large JSON structures with virtual scrolling and lazy loading for nested elements. Complex objects are rendered only when expanded, maintaining good performance.'
      },
      {
        question: 'What happens if I switch between tree and text views?',
        answer: 'You can seamlessly switch between visual tree editing and raw text editing. Changes made in either view are synchronized, allowing you to use the best editing method for different tasks.'
      }
    ]
  }
}; 