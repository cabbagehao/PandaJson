export const schemaValidator = {
  title: 'JSON Schema验证 - 检查数据结构完整性',
  h1Title: '根据Schema验证JSON',
  seo_title: 'JSON Schema验证 - 检查数据结构完整性',
  description: '根据Schema规则验证JSON，确保API契约的数据完整性和合规性。',
  keywords: 'JSON Schema,JSON验证,Schema验证,JSON结构验证,JSON格式验证,JSON schema验证器,schema一致性检查,JSON数据完整性,根据schema验证,JSON约束验证,类型验证,结构验证,模式验证,JSON规则验证,必填字段验证器,JSON格式检查器,JSON合约验证器,API schema验证',
  introduction: '需要确保您的JSON数据匹配特定的schema（例如API契约或数据模型）？我们的**JSON Schema验证器**检查您的JSON是否符合定义的schema，验证字段类型、必填键和数据约束。这对团队协作、API文档和确保跨系统的数据一致性至关重要。\n\n工作原理：上传您的JSON和schema文件（或直接粘贴schema），我们将针对`type`、`enum`、`minimum`和`pattern`等属性进行验证。错误消息会精确指出数据不符合schema的位置，帮助您快速修复问题。\n\n无论您是开发微服务、验证用户输入还是标准化数据管道，我们的**validate json schema**工具都能确保您的数据结构可靠且合规。立即免费试用！',
  jsonData: 'JSON 数据',
  jsonSchema: 'JSON Schema',
  options: '验证选项',
  validate: '验证',
  validating: '验证中...',
  clear: '清除',
  loadExample: '加载示例',
  jsonPlaceholder: '在此输入或粘贴要验证的 JSON 数据',
  schemaPlaceholder: '在此输入或粘贴 JSON Schema',
  result: '验证结果',
  valid: '通过',
  invalid: '不通过',
  errorDetails: '错误详情',
  guideTitle: 'JSON Schema 使用指南',
  guideDescription: 'JSON Schema 是一种用于描述和验证 JSON 数据结构的标准。以下是一些常用的验证规则：',
  basicTypesTitle: '基本类型验证',
  commonRulesTitle: '常用验证规则',
  strictMode: '严格模式',
  strictModeDescription: '强制执行 JSON Schema 规范中未指定的额外验证约束',
  jsonParseError: 'JSON 解析错误',
  schemaParseError: 'Schema 解析错误',
  rules: '常用验证规则',

  // How to Use Section
  howToUse: {
    title: '如何使用JSON Schema验证器',
    steps: [
      {
        title: '准备JSON数据',
        description: '在左侧输入框中粘贴要验证的JSON数据。这可以是API响应、用户输入、配置文件或任何需要结构验证的JSON数据。'
      },
      {
        title: '定义验证Schema',
        description: '在右侧输入框中粘贴JSON Schema规范。Schema定义了数据的结构、类型、约束和验证规则。可以加载示例快速开始。'
      },
      {
        title: '执行Schema验证',
        description: '点击"验证"按钮，系统会根据Schema规范检查JSON数据是否符合定义的结构、类型和约束条件。'
      },
      {
        title: '查看验证结果',
        description: '验证结果会显示"通过"或"不通过"，对于不符合的情况，会详细列出所有错误位置和具体原因。'
      }
    ]
  },

  // FAQ Section
  faq: {
    title: 'JSON Schema验证常见问题',
    items: [
      {
        question: '什么是JSON Schema？为什么需要它？',
        answer: 'JSON Schema是一个用于描述和验证JSON数据结构的标准。它定义了数据类型、必填字段、值范围等约束。在API开发、数据交换、配置验证等场景中确保数据完整性和一致性。'
      },
      {
        question: '常用的Schema验证规则有哪些？',
        answer: '常见规则包括：type（数据类型）、required（必填字段）、minimum/maximum（数值范围）、minLength/maxLength（字符串长度）、pattern（正则表达式）、enum（枚举值）、properties（对象属性定义）等。'
      },
      {
        question: 'Schema验证失败时如何定位问题？',
        answer: '我们的验证器提供详细的错误报告，包含错误路径、期望值和实际值。错误信息会准确指出数据中不符合Schema的具体位置，帮助您快速定位和修复问题。'
      },
      {
        question: '如何处理嵌套对象的Schema验证？',
        answer: 'JSON Schema支持嵌套结构验证。在properties中定义子对象的Schema，可以进行多层次的深度验证。每层的验证规则都可以独立定义和约束。'
      },
      {
        question: '数组数据的Schema验证如何设置？',
        answer: '使用"type": "array"定义数组，通过items属性指定数组元素的Schema，minItems/maxItems控制长度，uniqueItems确保元素唯一性。支持复杂数组结构的验证。'
      },
      {
        question: '严格模式和普通模式有什么区别？',
        answer: '严格模式会执行更加严格的验证，包括额外的约束检查和格式验证。普通模式更宽松，主要检查核心Schema规范。建议生产环境使用严格模式确保数据质量。'
      }
    ]
  }
}; 