export const validator = {
  title: '在线JSON校验 - 检查语法错误修复JSON代码',
  h1Title: '检查JSON语法和错误',
  seo_title: '在线JSON校验 - 检查语法错误修复JSON代码',
  description: '即时检查JSON语法错误，提供精确的错误位置和详细反馈。',
  keywords: 'JSON验证器,JSON校验,JSON格式检查,JSON语法检查,JSON错误定位,在线JSON验证,JSON错误修复,JSON解析错误,语法错误检测,JSON调试工具,JSON结构验证,错误位置查找器,JSON错误信息,修复JSON语法,JSON代码验证器',
  introduction: 'JSON验证器可帮助您快速识别JSON数据中的语法错误和结构问题。无论您是在调试Web API、处理配置文件还是处理数据源，我们的工具都能即时反馈您的JSON有效性。\n\n当检测到错误时，验证器会精确定位问题所在位置，并提供明确、可操作的指导来解决它。每个错误都会用行号和列号信息高亮显示，使故障排除高效而直接。\n\n主要功能包括：\n• 根据JSON标准进行即时语法验证\n• 使用行号和列号精确定位错误位置\n• 详细的错误描述，快速解决问题\n• 支持大型JSON文档\n• 清晰、直观的界面，实时反馈\n• 一键验证，提供全面结果\n\n只需粘贴您的JSON，让我们的验证器检查错误，确保您的数据在应用程序中使用前格式正确。',
  input: '输入JSON',
  validate: '验证JSON',
  validJson: '有效的JSON',
  invalidJson: '无效的JSON',
  errorDetails: '错误详情',
  errorAt: '错误位置：第{line}行，第{column}列',
  expectedToken: '期望的令牌：{token}',
  unexpectedToken: '意外的令牌：{token}',
  missingComma: '缺少逗号或括号不匹配',
  extraComma: '多余的逗号',
  unclosedString: '未关闭的字符串',
  unclosedObject: '未关闭的对象',
  unclosedArray: '未关闭的数组',
  invalidProperty: '无效的属性名',
  duplicateKey: '重复的键',
  extraData: 'JSON结束后有多余数据',
  missingValue: '缺少值',
  missingColon: '缺少冒号',
  repairSuggestion: '修复建议',
  errorType: '错误类型',
  errorMessage: '错误信息',
  position: '位置',
  contextLine: '上下文行',
  placeholder: '在此输入要验证的JSON',
  jsonStructure: 'JSON结构',
  jsonSyntaxError: 'JSON语法错误',
  parseSuccess: '解析成功，包含 {count} 个数据节点。',
  unknownError: '未知错误',

  // How to Use Section
  howToUse: {
    title: '如何使用JSON校验工具',
    steps: [
      {
        title: '输入JSON数据',
        description: '将需要验证的JSON代码粘贴到输入框中。可以是来自API响应、配置文件或任何JSON格式的数据。'
      },
      {
        title: '点击验证按钮',
        description: '点击"验证JSON"按钮，系统将立即检查您的JSON语法和结构是否符合标准规范。'
      },
      {
        title: '查看验证结果',
        description: '工具会显示"有效JSON"或"无效JSON"状态，如果有错误，会精确标出错误位置和具体问题。'
      },
      {
        title: '修复发现的错误',
        description: '根据错误提示和修复建议，修正JSON中的语法问题，确保数据格式正确无误。'
      }
    ]
  },

  // FAQ Section
  faq: {
    title: 'JSON校验常见问题',
    items: [
      {
        question: 'JSON校验工具能检测哪些类型的错误？',
        answer: '我们的校验工具能够检测各种JSON语法错误，包括缺少逗号或冒号、括号不匹配、未关闭的字符串、重复键名、意外的令牌、以及不符合JSON标准的数据格式。'
      },
      {
        question: '为什么有效的JSON在我的应用中还是出错？',
        answer: '虽然JSON语法可能正确，但您的应用可能需要特定的数据结构或字段。建议使用我们的Schema验证器来检查数据是否符合应用的具体要求和约束。'
      },
      {
        question: '如何快速定位大型JSON文件中的错误？',
        answer: '我们的校验工具提供精确的行号和列号定位，直接指向错误所在位置。您可以使用文本编辑器的"跳转到行"功能快速导航到问题区域。'
      },
      {
        question: '常见的"意外令牌"错误如何解决？',
        answer: '"意外令牌"通常由多余的逗号、缺少引号、或使用了JavaScript而非JSON语法引起。检查是否有尾随逗号、确保所有字符串都有双引号、避免使用注释或函数。'
      },
      {
        question: 'JSON中的中文或特殊字符会影响验证吗？',
        answer: 'JSON原生支持Unicode字符，包括中文、表情符号等。只要这些字符被正确转义或编码，就不会影响JSON的有效性。我们的工具完全支持国际化字符。'
      },
      {
        question: '大文件JSON验证会很慢吗？',
        answer: '我们的校验工具经过优化，即使是较大的JSON文件也能快速处理。对于超大文件，建议分段验证或检查是否真的需要如此庞大的JSON结构。'
      }
    ]
  }
}; 