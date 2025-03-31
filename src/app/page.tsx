import Link from "next/link";
import { FiCode, FiCheck, FiRepeat, FiGitPullRequest, FiEdit, FiFileText } from "react-icons/fi";

const features = [
  {
    name: "JSON 格式化",
    description: "格式化混乱的JSON数据，美化JSON结构，使其更易于阅读和调试，支持自定义缩进和样式设置",
    icon: FiCode,
    href: "/formatter",
    color: "bg-blue-500",
  },
  {
    name: "JSON 校验",
    description: "严格验证JSON数据语法正确性，检测格式错误，确保符合JSON标准规范",
    icon: FiCheck,
    href: "/validator",
    color: "bg-yellow-500",
  },
  {
    name: "JSON 转换",
    description: "强大的JSON数据格式转换工具，支持JSON与CSV、XML、YAML等多种格式互转，提高数据交互效率",
    icon: FiRepeat,
    href: "/converter",
    color: "bg-purple-500",
  },
  {
    name: "JSON 对比",
    description: "智能比较两段JSON数据的差异，精确标识JSON文件中新增、删除或修改的部分，适用于API响应对比",
    icon: FiGitPullRequest,
    href: "/diff",
    color: "bg-red-500",
  },
  {
    name: "JSON 树编辑器",
    description: "直观的JSON树状结构可视化工具，轻松编辑复杂JSON数据，支持JSON文本与树状视图实时同步切换",
    icon: FiEdit,
    href: "/tree-editor",
    color: "bg-green-500",
  },
  {
    name: "JSON Schema 验证",
    description: "专业的JSON Schema验证工具，基于JSON Schema标准验证JSON数据结构，支持复杂验证规则和详细错误提示",
    icon: FiFileText,
    href: "/schema-validator",
    color: "bg-indigo-500",
  },
];

export default function Home() {
  return (
    <div className="py-6 sm:py-10">
      <div className="text-center mb-10 sm:mb-16 px-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
          专业JSON数据处理工具集
        </h1>
        <p className="text-base sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          免费高效的JSON数据处理平台，支持JSON格式化、JSON校验、JSON转换、JSON对比、JSON树状编辑和JSON Schema验证，满足开发者和数据分析师的各种JSON处理需求
        </p>
        <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
          我们的工具支持处理各种复杂JSON数据结构，帮助您高效调试API数据、验证前后端数据交互、转换数据格式，是Web开发、数据分析和API调试的得力助手
        </p>
      </div>

      <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-0">
        {features.map((feature) => (
          <Link 
            key={feature.name}
            href={feature.href}
            className="flex flex-col p-4 sm:p-6 md:p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <div className={`${feature.color} w-10 sm:w-12 h-10 sm:h-12 rounded-full flex items-center justify-center text-white mb-3 sm:mb-4`}>
              <feature.icon className="w-5 sm:w-6 h-5 sm:h-6" />
            </div>
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {feature.name}
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 flex-grow">
              {feature.description}
            </p>
            <div className="mt-3 sm:mt-4 text-blue-600 dark:text-blue-400 font-medium">
              立即使用 →
            </div>
          </Link>
        ))}
      </div>
      
      <div className="mt-12 sm:mt-16 text-center px-4 sm:px-0">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
          为什么选择我们的JSON工具？
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
          <div className="p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
            <h3 className="font-semibold text-base sm:text-lg mb-2">全面的JSON功能</h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">涵盖JSON处理的各个方面，从基础格式化到高级Schema验证</p>
          </div>
          <div className="p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
            <h3 className="font-semibold text-base sm:text-lg mb-2">完全免费在线使用</h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">所有工具均可免费使用，无需下载安装任何软件</p>
          </div>
          <div className="p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
            <h3 className="font-semibold text-base sm:text-lg mb-2">注重数据安全</h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">所有数据处理均在浏览器本地进行，不会上传至服务器</p>
          </div>
        </div>
      </div>
    </div>
  );
}
