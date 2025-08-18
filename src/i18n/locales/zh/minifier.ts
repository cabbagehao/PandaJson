export const minifier = {
  title: '在线JSON压缩 - 压缩减小JSON文件大小',
  h1Title: '压缩优化您的JSON',
  seo_title: '在线JSON压缩 - 压缩减小JSON文件大小',
  description: '通过移除空白和格式化压缩JSON，将文件大小减小高达50%。为API和移动应用高效优化数据传输速度。',
  keywords: 'JSON压缩,JSON最小化,JSON体积优化,JSON去空格,JSON压缩器,减小JSON大小,紧凑JSON,JSON压缩工具,优化JSON传输,JSON带宽减少,JSON传输效率,在线压缩JSON,JSON文件大小减少器,JSON优化器,轻量级JSON,JSON载荷减少',
  input: '输入 JSON',
  output: '压缩结果',
  placeholder: '在此粘贴需要压缩的JSON数据',
  minify: '压缩 JSON',
  copy: '复制',
  download: '下载',
  clear: '清除全部',
  error: '无效的JSON数据，请检查语法',
  copied: '已复制到剪贴板',
  copyFailed: '复制失败',
  compressionResult: '压缩结果',
  originalSize: '原始大小',
  compressedSize: '压缩后大小',
  compressionRatio: '压缩率',

  // How to Use Section
  howToUse: {
    title: '如何使用JSON压缩工具',
    steps: [
      {
        title: '输入JSON数据',
        description: '将需要压缩的JSON数据粘贴到输入框中。可以是格式化的、有缩进的JSON，或任何有空白字符的JSON数据。'
      },
      {
        title: '点击压缩按钮',
        description: '点击"压缩JSON"按钮，系统会立即移除所有不必要的空白字符、换行符和缩进，生成最紧凑的JSON格式。'
      },
      {
        title: '查看压缩统计',
        description: '压缩完成后会显示原始大小、压缩后大小和压缩率，让您了解节省的存储空间和传输带宽。'
      },
      {
        title: '复制或下载',
        description: '压缩后的JSON可以复制到剪贴板直接使用，或下载为文件保存。适用于API传输、配置部署等场景。'
      }
    ]
  },

  // FAQ Section
  faq: {
    title: 'JSON压缩常见问题',
    items: [
      {
        question: 'JSON压缩会改变数据内容吗？',
        answer: '不会！JSON压缩只是移除不必要的空白字符、换行符和缩进，数据内容、结构和功能完全不变。压缩后的JSON与原始数据在语义上完全等效。'
      },
      {
        question: '什么情况下需要压缩JSON？',
        answer: 'JSON压缩主要用于减少网络传输大小、节省存储空间、提高API响应速度。特别适合移动应用、带宽受限环境、大量数据传输等场景。'
      },
      {
        question: '压缩能节省多少空间？',
        answer: '压缩效果取决于原始JSON的格式化程度。通常可以减少20-50%的文件大小，格式化层次越深、缩进越多，压缩效果越明显。'
      },
      {
        question: '压缩后的JSON还能正常解析吗？',
        answer: '是的，压缩后的JSON完全符合JSON标准，可以被任何JSON解析器正确处理。只是失去了可读性，建议在调试时使用格式化工具重新美化。'
      },
      {
        question: '如何在压缩和可读性之间平衡？',
        answer: '在开发和调试阶段使用格式化的JSON便于阅读，在生产环境或数据传输时使用压缩的JSON节省资源。可以根据具体使用场景选择合适的格式。'
      },
      {
        question: '大型JSON文件压缩会很慢吗？',
        answer: '我们的压缩算法高度优化，即使是大型JSON文件也能快速处理。压缩过程主要是字符串操作，性能非常高效，通常在毫秒级完成。'
      }
    ]
  }
}; 