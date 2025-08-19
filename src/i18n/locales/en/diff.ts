export const diff = {
  title: 'Compare JSON Files Online - Visual JSON Diff & Change Detector',
  h1Title: 'Compare & Highlight JSON Changes',
  seo_title: 'Compare JSON Files Online - Visual JSON Diff & Change Detector',
  description: 'Compare JSON files visually with side-by-side highlighting for code reviews.',
  keywords: 'JSON diff,JSON compare,JSON difference,JSON comparison,JSON comparator,find JSON differences,JSON change tracker,JSON version comparison,JSON data diff,JSON file compare,side by side JSON comparison,JSON structure comparison,JSON diff tool,identify JSON changes,track JSON modifications,JSON delta,visual JSON diff,JSON conflict resolution',
  introduction: 'Working on a team project or tracking JSON version changes? Our JSON Diff tool helps you quickly compare two JSON files and visualize differences. We highlight added keys, deleted entries, and modified values in a clear, color-coded view, so you can spot changes at a glance.\nUse cases include:\nReviewing pull requests with JSON configs\nTracking data version history in databases\nDebugging mismatches between API responses\nNo more scrolling through lines of code—our tool automatically parses nested objects and arrays, making complex comparisons simple. Paste or upload two JSON files, and let our json compare feature show you exactly what\'s changed. Ideal for developers, QA teams, and data managers!',
  leftInput: 'First JSON',
  rightInput: 'Second JSON',
  result: 'Comparison Result',
  placeholderLeft: 'Paste your first JSON data here',
  placeholderRight: 'Paste your second JSON data here',
  compare: 'Compare',
  clear: 'Clear',
  loadExample: 'Load Example',
  processing: 'Processing...',
  error: 'Comparison error: ',
  unknown: 'Unknown error during comparison',
  diffGuide: 'Diff Guide',
  addedContent: 'Added Content',
  removedContent: 'Removed Content',
  modifiedContent: 'Modified Content',
  originalJson: 'Original JSON',
  updatedJson: 'Updated JSON',
  
  // How to Use Section
  howToUse: {
    title: 'How to Use the JSON Diff Tool',
    steps: [
      {
        title: 'Paste First JSON',
        description: 'Copy and paste your original JSON data into the left input panel. This will be used as the baseline for comparison.'
      },
      {
        title: 'Paste Second JSON',
        description: 'Copy and paste your updated or modified JSON data into the right input panel for comparison against the original.'
      },
      {
        title: 'Compare Automatically',
        description: 'The tool automatically detects differences and highlights changes with color coding - green for additions, red for deletions, and yellow for modifications.'
      },
      {
        title: 'Review Changes',
        description: 'Examine the highlighted differences in the comparison view. Navigate through changes to understand what has been added, removed, or modified.'
      }
    ]
  },
  
  // FAQ Section
  faq: {
    title: 'JSON Diff Tool FAQ',
    items: [
      {
        question: 'What types of changes can the JSON diff tool detect?',
        answer: 'Our JSON diff tool detects all types of changes including added properties, deleted properties, modified values, array changes, nested object differences, and structural modifications. Changes are color-coded for easy identification.'
      },
      {
        question: 'Can I compare large JSON files?',
        answer: 'Yes, our diff tool efficiently handles large JSON files and complex nested structures. The comparison algorithm is optimized for performance and can process substantial JSON documents quickly.'
      },
      {
        question: 'How are nested object differences displayed?',
        answer: 'Nested differences are clearly highlighted with proper indentation and hierarchy preservation. Each level of nesting is properly visualized, making it easy to track changes in deeply nested JSON structures.'
      },
      {
        question: 'Can I use this tool for API response comparison?',
        answer: 'Absolutely! This tool is perfect for comparing API responses across different versions, environments, or time periods. It helps developers quickly identify changes in API behavior or data structure.'
      },
      {
        question: 'What happens if one JSON is invalid?',
        answer: 'If either JSON contains syntax errors, the tool will display error messages indicating the specific issues. Both JSONs must be valid for accurate comparison results.'
      },
      {
        question: 'Does the tool show the exact location of changes?',
        answer: 'Yes, changes are displayed with precise location information including the object path and property names, making it easy to locate and understand exactly what has changed.'
      }
    ]
  }
}; 