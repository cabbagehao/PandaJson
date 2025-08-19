export const schemaValidator = {
  title: 'Validate JSON Against Schema - Check Data Structure Integrity',
  h1Title: 'Validate JSON Against Schema Rules',
  seo_title: 'Validate JSON Against Schema - Check Data Structure Integrity',
  description: 'Validate JSON against schema rules for data integrity and API contract compliance.',
  keywords: 'JSON Schema,JSON validation,Schema validation,JSON structure validation,JSON format validation,JSON schema validator,schema conformance checker,JSON data integrity,validate against schema,JSON constraint validation,type validation,structural validation,pattern validation,JSON rules validation,required fields validator,JSON format checker,JSON contract validator,API schema validation',
  introduction: 'Need to ensure your JSON data matches a specific schema (e.g., API contracts or data models)? Our **JSON Schema Validator** checks if your JSON conforms to a defined schema, verifying field types, required keys, and data constraints. This is critical for team collaborations, API documentation, and ensuring data consistency across systems.\n\nHow it works: Upload your JSON and schema file (or paste the schema directly), and we\'ll validate against properties like `type`, `enum`, `minimum`, and `pattern`. Error messages point to exactly where the data fails to match the schema, helping you fix issues quickly.\n\nWhether you\'re developing microservices, validating user inputs, or standardizing data pipelines, our **validate json schema** tool ensures your data structures are reliable and compliant. Try it for free today!',
  jsonData: 'JSON Data',
  jsonSchema: 'JSON Schema',
  options: 'Validation Options',
  validate: 'Validate',
  validating: 'Validating...',
  clear: 'Clear',
  loadExample: 'Load Example',
  jsonPlaceholder: 'Enter or paste JSON data to validate',
  schemaPlaceholder: 'Enter or paste JSON Schema',
  result: 'Validation Result',
  valid: 'Valid',
  invalid: 'Invalid',
  errorDetails: 'Error Details',
  guideTitle: 'JSON Schema Guide',
  guideDescription: 'JSON Schema is a standard for describing and validating JSON data structures. Here are some common validation rules:',
  basicTypesTitle: 'Basic Type Validation',
  commonRulesTitle: 'Common Validation Rules',
  strictMode: 'Strict Mode',
  strictModeDescription: 'Enforce additional validation constraints not specified in the JSON Schema spec',
  jsonParseError: 'JSON Parse Error',
  schemaParseError: 'Schema Parse Error',
  rules: 'Common validation rules',
  
  // How to Use Section
  howToUse: {
    title: 'How to Use the JSON Schema Validator',
    steps: [
      {
        title: 'Prepare Your JSON Data',
        description: 'Paste your JSON data that you want to validate into the JSON Data section. This is the data that will be checked against your schema rules.'
      },
      {
        title: 'Define Your Schema',
        description: 'Enter your JSON Schema in the JSON Schema section. The schema defines the structure, data types, and validation rules your JSON must follow.'
      },
      {
        title: 'Run Validation',
        description: 'Click the "Validate" button to check your JSON data against the schema. The validator will process both documents and identify any compliance issues.'
      },
      {
        title: 'Review Results',
        description: 'Examine the validation results which show either success confirmation or detailed error messages with specific locations where the data fails schema requirements.'
      }
    ]
  },
  
  // FAQ Section
  faq: {
    title: 'JSON Schema Validator FAQ',
    items: [
      {
        question: 'What is JSON Schema and why should I use it?',
        answer: 'JSON Schema is a vocabulary that allows you to annotate and validate JSON documents. It defines contracts for JSON data, ensures API consistency, validates user input, and provides clear documentation of data structure requirements.'
      },
      {
        question: 'Which JSON Schema versions are supported?',
        answer: 'Our validator supports JSON Schema Draft-07, Draft-06, Draft-04, and the latest specifications. The validator automatically detects the schema version based on the $schema property in your schema document.'
      },
      {
        question: 'Can I validate nested objects and arrays with schemas?',
        answer: 'Yes! JSON Schema fully supports nested validation with properties for objects, items for arrays, and complex validation rules including conditionals, dependencies, and recursive schema references.'
      },
      {
        question: 'How detailed are the validation error messages?',
        answer: 'Our validator provides comprehensive error messages including the exact path to the invalid data, the specific validation rule that failed, expected vs actual values, and suggestions for fixing the issues.'
      },
      {
        question: 'Can I use custom validation keywords in my schema?',
        answer: 'The validator supports all standard JSON Schema keywords including type, properties, required, pattern, minimum, maximum, enum, and many others. Custom keywords from extensions may have limited support.'
      },
      {
        question: 'Is this validator suitable for API contract testing?',
        answer: 'Absolutely! JSON Schema validation is perfect for API contract testing, ensuring request/response data matches expected formats, and maintaining consistency across different API versions and environments.'
      }
    ]
  }
}; 