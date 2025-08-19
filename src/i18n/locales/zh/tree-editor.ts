export const treeEditor = {
  title: '可视化JSON树形编辑器 - 交互式JSON导航器',
  h1Title: '可视化树形编辑JSON',
  seo_title: '可视化JSON树形编辑器 - 交互式JSON导航器',
  description: '通过直观的树形界面编辑JSON，便于导航和无错误编辑。',
  keywords: 'JSON树编辑器,JSON可视化,JSON节点编辑,JSON树结构,JSON树状视图',
  introduction: 'JSON树形编辑器将复杂的JSON数据转换为可以轻松操作的交互式树结构。它是管理深层嵌套数据结构的理想工具，无需在大量花括号和语法中迷失。\n\n我们的直观界面允许您展开和折叠节点、添加新属性和数组、修改值，或通过简单点击删除不需要的项目。双视图布局实时显示可编辑的树和格式化的JSON输出。\n\n这个工具非常适合：\n• 处理复杂JSON响应的API开发人员\n• 探索复杂数据集的数据分析师\n• 更新基于JSON的配置的内容管理员\n• 任何认为原始JSON编辑容易出错的人\n\n更改会立即验证，防止您在工作时出现语法错误。完成后，只需一次点击即可导出完美格式化的JSON。',
  viewOptions: '查看选项',
  copyJsonResult: '复制',
  copySuccessful: '已复制到剪贴板！',
  downloadJsonResult: '下载',
  clearJsonData: '清除',
  jsonParsingError: 'JSON解析错误: ',
  validationError: '验证错误: ',
  enterValidJson: '请输入有效的JSON数据',
  treeLabel: '树视图',
  treeView: '树视图',
  jsonLabel: 'JSON输出',
  placeholderText: '在此粘贴您的JSON数据...',
  loadExample: '加载示例',
  textView: '文本视图',
  jsonText: 'JSON文本',
  jsonTree: 'JSON树结构',
  placeholder: '在此输入或粘贴JSON数据',
  copy: '复制',
  download: '下载',
  clear: '清除',
  copied: '已复制到剪贴板',
  copyFailed: '复制失败',
  parseError: '解析错误',
  unknownError: '解析时发生未知错误',
  updateError: '更新错误',
  emptyInputMessage: '请先在文本编辑器中输入有效的JSON',
  // 树编辑器特有的翻译
  addItem: '添加项',
  addProperty: '添加属性',
  key: '键',
  keyName: '键名',
  value: '值',
  type: '类型',
  expand: '全部展开',
  collapse: '全部折叠',
  ok: '确定',
  cancel: '取消',
  emptyArray: '空数组',
  emptyObject: '空对象',
  deleteItem: '删除',
  editItem: '编辑',
  undoChange: '撤销',
  redoChange: '重做',
  enterValidPropertyName: '请输入有效的属性名',
  add: '添加',
  empty: '空',
  keyNameEmpty: '键名不能为空',
  addFailed: '添加失败',
  invalidValue: '无效的值',
  save: '保存',

  // How to Use Section
  howToUse: {
    title: '如何使用JSON树形编辑器',
    steps: [
      {
        title: '加载JSON数据',
        description: '在左侧文本区域粘贴JSON数据，或点击"加载示例"查看演示。系统会自动解析并在右侧显示树形结构。'
      },
      {
        title: '浏览树形结构',
        description: '在树视图中点击节点前的箭头展开或折叠，快速浏览复杂的嵌套数据结构。每个节点显示键名、值和数据类型。'
      },
      {
        title: '编辑数据节点',
        description: '点击任意节点可以编辑其值，添加新属性或删除现有项目。支持字符串、数字、布尔值、数组和对象等所有JSON数据类型。'
      },
      {
        title: '导出修改结果',
        description: '编辑完成后，左侧会实时显示更新后的JSON代码。可以复制到剪贴板或下载为文件。'
      }
    ]
  },

  // FAQ Section
  faq: {
    title: 'JSON树形编辑器常见问题',
    items: [
      {
        question: '树形编辑器相比文本编辑器有什么优势？',
        answer: '树形编辑器提供可视化的数据结构导航，避免了语法错误，特别适合编辑深层嵌套的JSON。您可以专注于数据内容而不用担心括号匹配或逗号问题。'
      },
      {
        question: '如何添加新的属性或数组元素？',
        answer: '在对象节点上点击"添加属性"按钮，在数组节点上点击"添加项"按钮。系统会提示您输入键名和值，并自动处理语法格式。'
      },
      {
        question: '支持哪些数据类型的编辑？',
        answer: '支持JSON的所有标准数据类型：字符串、数字、布尔值、null、对象和数组。编辑时会自动检测和验证数据类型，确保输出的JSON格式正确。'
      },
      {
        question: '误操作如何撤销？',
        answer: '编辑器提供撤销和重做功能，您可以使用Ctrl+Z撤销最近的操作。同时左侧的文本视图会实时更新，您可以随时复制保存当前状态。'
      },
      {
        question: '如何处理大型JSON文件？',
        answer: '树视图支持折叠功能，您可以折叠不需要编辑的部分，专注于特定区域。这样既能提高性能，又能让大型数据结构更易于管理。'
      },
      {
        question: '编辑后的JSON会自动格式化吗？',
        answer: '是的，所有编辑操作都会自动生成格式化的JSON输出，包含适当的缩进和换行。您不需要担心格式问题，可以直接使用导出的数据。'
      }
    ]
  }
}; 