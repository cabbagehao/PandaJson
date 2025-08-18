export const validator = {
  title: 'Validate JSON Online - Check Syntax Errors & Fix JSON Code',
  h1Title: 'Check JSON Syntax & Find Errors',
  seo_title: 'Validate JSON Online - Check Syntax Errors & Fix JSON Code',
  description: 'Instantly detect JSON syntax errors with precise line-by-line feedback. Essential for debugging API responses and ensuring data integrity in your applications.',
  keywords: 'JSON validator,JSON syntax checker,validate JSON,JSON error finder,JSON format validator,JSON verification tool,JSON parsing error,syntax error detection,JSON debugging tool,JSON structure validation,error location finder,JSON error messages,fix JSON syntax,JSON code validator',
  introduction: 'The JSON Validator helps you quickly identify syntax errors and structural issues in your JSON data. Whether you\'re debugging a web API, working with configuration files, or processing data feeds, our tool provides instant feedback on your JSON\'s validity.\n\nWhen errors are detected, the validator pinpoints the exact location of the problem and provides clear, actionable guidance on how to fix it. Each error is highlighted with line and column information, making troubleshooting efficient and straightforward.\n\nKey features include:\n• Instant syntax validation against the JSON standard\n• Precise error location with line and column numbers\n• Detailed error descriptions for quick problem resolution\n• Support for large JSON documents\n• Clean, intuitive interface with real-time feedback\n• One-click validation with comprehensive results\n\nSimply paste your JSON and let our validator check for errors, ensuring your data is properly formatted before you use it in your applications.',
  input: 'Input JSON',
  validate: 'Validate JSON',
  validJson: 'Valid JSON',
  invalidJson: 'Invalid JSON',
  errorDetails: 'Error Details',
  errorAt: 'Error at line {line}, column {column}',
  expectedToken: 'Expected token: {token}',
  unexpectedToken: 'Unexpected token: {token}',
  missingComma: 'Missing comma or mismatched brackets',
  extraComma: 'Extra comma',
  unclosedString: 'Unclosed string',
  unclosedObject: 'Unclosed object',
  unclosedArray: 'Unclosed array',
  invalidProperty: 'Invalid property name',
  duplicateKey: 'Duplicate key',
  extraData: 'Extra data after JSON end',
  missingValue: 'Missing value',
  missingColon: 'Missing colon',
  repairSuggestion: 'Repair Suggestion',
  errorType: 'Error Type',
  errorMessage: 'Error Message',
  position: 'Position',
  contextLine: 'Context Line',
  placeholder: 'Enter JSON to validate here',
  jsonStructure: 'JSON Structure',
  jsonSyntaxError: 'JSON Syntax Error',
  parseSuccess: 'Successfully parsed, containing {count} data nodes.',
  unknownError: 'Unknown error',
  
  // How to Use Section
  howToUse: {
    title: 'How to Use the JSON Validator',
    steps: [
      {
        title: 'Paste Your JSON',
        description: 'Copy and paste your JSON data into the validation editor. The tool accepts JSON from any source - API responses, configuration files, or data exports.'
      },
      {
        title: 'Instant Validation',
        description: 'Our validator automatically checks your JSON syntax as you type or paste. Errors are highlighted immediately with precise location information.'
      },
      {
        title: 'Review Error Details',
        description: 'If errors are found, detailed error messages show exact line numbers, character positions, and specific problems with helpful repair suggestions.'
      },
      {
        title: 'Fix and Revalidate',
        description: 'Make corrections based on the error guidance and see validation results update in real-time. Continue until your JSON passes validation.'
      }
    ]
  },
  
  // FAQ Section
  faq: {
    title: 'JSON Validator FAQ',
    items: [
      {
        question: 'What types of JSON errors can this validator detect?',
        answer: 'Our validator detects all common JSON syntax errors including missing commas, unclosed strings, mismatched brackets, duplicate keys, invalid property names, extra trailing commas, and structural issues. It provides specific error messages for quick identification and resolution.'
      },
      {
        question: 'How accurate is the error location reporting?',
        answer: 'Very accurate! Our validator pinpoints errors to the exact line number and character position, showing you precisely where the problem occurs. This eliminates guesswork and speeds up debugging significantly.'
      },
      {
        question: 'Can I validate large JSON files?',
        answer: 'Yes, our JSON validator efficiently handles large files and complex nested structures. The validation engine is optimized for performance and can process extensive JSON documents without slowdown.'
      },
      {
        question: 'What happens after validation passes?',
        answer: 'When your JSON is valid, you\'ll see a success message with statistics about your data structure, including the number of objects, arrays, and total data nodes. You can then safely use the JSON in your applications.'
      },
      {
        question: 'Is my JSON data safe when using this validator?',
        answer: 'Absolutely! All validation occurs locally in your browser using client-side processing. Your JSON data never leaves your device or gets sent to our servers, ensuring complete privacy and security.'
      },
      {
        question: 'Can the validator fix JSON errors automatically?',
        answer: 'While our validator doesn\'t automatically fix errors, it provides detailed suggestions for each error type. These suggestions guide you on exactly what to change, making manual corrections quick and straightforward.'
      },
      {
        question: 'What JSON standards does the validator follow?',
        answer: 'Our validator strictly follows the JSON specification (RFC 7159/ECMA-404). This ensures compatibility with all standard JSON parsers and applications across different programming languages and platforms.'
      },
      {
        question: 'Can I validate JSON with comments or trailing commas?',
        answer: 'Our validator follows strict JSON standards, which don\'t allow comments or trailing commas. For JSON with these features (JSON5), some errors will be flagged. We recommend removing comments and trailing commas for standard JSON compliance.'
      }
    ]
  }
}; 