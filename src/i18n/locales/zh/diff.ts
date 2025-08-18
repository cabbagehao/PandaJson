export const diff = {
  title: '在线JSON文件对比 - 可视化JSON差异检测器',
  h1Title: '比较并高亮JSON变化',
  seo_title: '在线JSON文件对比 - 可视化JSON差异检测器',
  description: '使用视觉化并排显示对比JSON文件的变更。适用于代码审查、版本跟踪和快速识别API响应差异。',
  keywords: 'JSON对比,JSON比较,JSON差异,JSON比对,JSON比较器,查找JSON差异,JSON变更跟踪,JSON版本比较,JSON数据对比,JSON文件对比,并排JSON比较,JSON结构比较,JSON对比工具,识别JSON变化,追踪JSON修改,JSON增量对比,可视化JSON差异,JSON冲突解决',
  introduction: '正在进行团队项目或追踪JSON版本变更？我们的JSON对比工具帮助您快速比较两个JSON文件并可视化差异。我们用清晰、彩色编码的视图突出显示添加的键、删除的条目和修改的值，让您一目了然地发现变化。\n使用场景包括：\n审查包含JSON配置的拉取请求\n跟踪数据库中的数据版本历史\n调试API响应之间的不匹配\n无需再滚动浏览大量代码行—我们的工具自动解析嵌套对象和数组，使复杂比较变得简单。粘贴或上传两个JSON文件，让我们的JSON比较功能准确显示变更内容。非常适合开发人员、QA团队和数据管理人员！',
  leftInput: '第一个 JSON',
  rightInput: '第二个 JSON',
  result: '比较结果',
  placeholderLeft: '在此粘贴第一个 JSON 数据',
  placeholderRight: '在此粘贴第二个 JSON 数据',
  compare: '比较',
  clear: '清除',
  loadExample: '加载示例',
  processing: '处理中...',
  error: '比较错误: ',
  unknown: '比较过程中发生未知错误',
  diffGuide: '差异对比说明',
  addedContent: '新增内容',
  removedContent: '删除内容',
  modifiedContent: '修改内容',
  originalJson: '原始 JSON',
  updatedJson: '更新后 JSON',

  // How to Use Section
  howToUse: {
    title: '如何使用JSON对比工具',
    steps: [
      {
        title: '输入对比数据',
        description: '将需要对比的两个JSON数据分别粘贴到左右两个输入框中。可以对比API响应、配置文件或任何JSON格式数据。'
      },
      {
        title: '启动对比分析',
        description: '点击"比较"按钮，系统会自动解析两个JSON并进行深度结构对比，识别所有差异。'
      },
      {
        title: '查看差异结果',
        description: '对比结果将以并排视图显示，新增内容用绿色高亮，删除内容用红色高亮，修改内容用黄色标记。'
      },
      {
        title: '分析变更详情',
        description: '通过颜色编码快速识别变更类型和位置，便于代码审查、版本跟踪或问题定位。'
      }
    ]
  },

  // FAQ Section
  faq: {
    title: 'JSON对比常见问题',
    items: [
      {
        question: 'JSON对比工具如何识别数据变化？',
        answer: '我们的对比工具进行深度结构分析，不仅比较键值对，还会检查嵌套对象、数组顺序、数据类型变化。通过颜色编码清晰显示新增、删除、修改的内容。'
      },
      {
        question: '数组顺序变化会被识别为差异吗？',
        answer: '是的，数组元素的顺序变化会被检测为差异。这在某些场景下很重要，比如API返回数据的顺序可能影响前端渲染逻辑。'
      },
      {
        question: '如何处理大型JSON文件的对比？',
        answer: '我们的工具经过优化，能够处理大型JSON文件对比。对于超大文件，建议先验证JSON格式正确，然后使用折叠功能专注于特定部分的差异。'
      },
      {
        question: '空值和缺失键的差异如何显示？',
        answer: '工具能精确区分null值、undefined和完全缺失的键。缺失键会显示为删除（红色），新增的null值会显示为新增（绿色），帮您准确理解数据变化。'
      },
      {
        question: '嵌套对象的变化能准确定位吗？',
        answer: '是的，我们的深度对比算法能够精确定位多层嵌套结构中的变化，并在结果中以清晰的层次结构展示，让您快速找到具体的修改位置。'
      },
      {
        question: '对比结果可以导出或保存吗？',
        answer: '目前支持复制对比结果，您可以将差异信息复制到其他工具中。我们正在开发导出功能，将支持将对比报告保存为多种格式。'
      }
    ]
  }
}; 