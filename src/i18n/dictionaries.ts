import { Locale } from '@/i18n';

// 简体中文字典
const zh = {
  siteTitle: '熊猫Json',
  seo: {
    description: '专业免费的熊猫Json工具集合，提供JSON格式化、压缩、校验、转换、差异对比、树形编辑器和Schema验证。',
    keywords: '熊猫Json,JSON格式化,JSON校验,JSON转换,JSON对比,JSON编辑器,JSON Schema,JSON压缩,JSON美化,JSON解析,JSON在线工具'
  },
  home: {
    title: '熊猫Json格式化工具集',
    description: '一站式JSON数据处理工具，帮助开发者更高效地处理JSON数据',
    features: {
      formatter: '格式化工具',
      validator: '验证工具',
      converter: '转换工具',
      minifier: '压缩工具',
      editor: '在线编辑器',
      compare: '比较工具',
      path: '路径查询',
      schema: '模式生成'
    },
    featuresDescription: {
      formatter: '美化并格式化JSON数据，提高可读性',
      validator: '验证JSON的有效性和结构',
      converter: '在JSON、XML、YAML等格式之间转换',
      minifier: '压缩JSON数据以减小文件大小',
      editor: '在线编辑和处理JSON数据',
      compare: '比较两个JSON数据的差异',
      path: '使用JSONPath查询和提取数据',
      schema: '从JSON数据生成JSON Schema'
    }
  },
  nav: {
    home: '首页',
    formatter: 'JSON格式化',
    validator: 'JSON校验',
    converter: 'JSON转换',
    diff: 'JSON对比',
    treeEditor: 'JSON树形编辑器',
    schemaValidator: 'JSON Schema验证'
  },
  footer: {
    copyright: '版权所有',
    powered: '技术支持',
    terms: '条款',
    privacy: '隐私'
  },
  language: {
    zh: '中文',
    en: 'English'
  },
  formatter: {
    title: 'JSON 格式化工具',
    description: '将JSON数据格式化成易读的形式，支持自定义缩进、风格和行宽',
    keywords: 'JSON格式化,JSON美化,JSON压缩,JSON验证,在线JSON工具',
    options: '格式化选项',
    indentSize: '缩进大小',
    braceStyle: '括号样式',
    sameLine: '同行',
    newLine: '新行',
    lineWidth: '行宽限制',
    input: '输入JSON',
    output: '输出结果',
    inputPlaceholder: '请在此粘贴需要格式化的JSON数据...',
    format: '格式化',
    copy: '复制',
    download: '下载',
    clear: '清空',
    error: '无效的JSON数据，请检查语法'
  }
};

// 英文字典
const en = {
  siteTitle: 'PandaJson',
  seo: {
    description: 'Professional free PandaJson tools collection, providing JSON formatting, compression, validation, conversion, diff comparison, tree editor and Schema validation.',
    keywords: 'PandaJson,JSON formatter,JSON validator,JSON converter,JSON diff,JSON editor,JSON Schema,JSON minifier,JSON beautifier,JSON parser,JSON online tools'
  },
  home: {
    title: 'PandaJson Formatting Toolkit',
    description: 'One-stop JSON data processing tools to help developers handle JSON data more efficiently',
    features: {
      formatter: 'Formatter',
      validator: 'Validator',
      converter: 'Converter',
      minifier: 'Minifier',
      editor: 'Online Editor',
      compare: 'Comparison Tool',
      path: 'Path Query',
      schema: 'Schema Generator'
    },
    featuresDescription: {
      formatter: 'Beautify and format JSON data for better readability',
      validator: 'Validate JSON validity and structure',
      converter: 'Convert between JSON, XML, YAML and other formats',
      minifier: 'Minify JSON data to reduce file size',
      editor: 'Edit and process JSON data online',
      compare: 'Compare differences between two JSON datasets',
      path: 'Query and extract data using JSONPath',
      schema: 'Generate JSON Schema from JSON data'
    }
  },
  nav: {
    home: 'Home',
    formatter: 'JSON Formatter',
    validator: 'JSON Validator',
    converter: 'JSON Converter',
    diff: 'JSON Diff',
    treeEditor: 'JSON Tree Editor',
    schemaValidator: 'JSON Schema Validator'
  },
  footer: {
    copyright: 'Copyright',
    powered: 'Powered by',
    terms: 'Terms',
    privacy: 'Privacy'
  },
  language: {
    zh: 'Chinese',
    en: 'English'
  },
  formatter: {
    title: 'JSON Formatter',
    description: 'Format JSON data into readable form, supports custom indentation, style and line width',
    keywords: 'JSON formatter,JSON beautifier,JSON minifier,JSON validator,online JSON tools',
    options: 'Formatting Options',
    indentSize: 'Indent Size',
    braceStyle: 'Brace Style',
    sameLine: 'Same Line',
    newLine: 'New Line',
    lineWidth: 'Line Width',
    input: 'Input JSON',
    output: 'Output Result',
    inputPlaceholder: 'Paste your JSON data here to format...',
    format: 'Format',
    copy: 'Copy',
    download: 'Download',
    clear: 'Clear',
    error: 'Invalid JSON data, please check syntax'
  }
};

const dictionaries = {
  'zh': zh,
  'en': en
};

export type Dictionary = typeof zh;

export const getDictionary = async (locale: Locale) => {
  // 当请求的语言不存在时，如果是中文以外的语言，返回英文字典，否则返回中文字典
  if (locale === 'zh') return dictionaries.zh;
  if (locale === 'en') return dictionaries.en;
  
  // 对于其他语言，默认返回英文字典
  return dictionaries.en;
};

export const getSupportedLocales = (): Locale[] => {
  return Object.keys(dictionaries) as Locale[];
}; 