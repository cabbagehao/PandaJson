import Link from "next/link";
import { FiCode, FiCheck, FiRepeat, FiGitPullRequest, FiEdit, FiFileText, FiMinimize2 } from "react-icons/fi";
import { Locale, defaultLocale } from "../../i18n";
import { getServerTranslation } from "@/i18n/server";

export default async function Home({
  params,
}: {
  params: { lang: string };
}) {
  // 获取当前语言的翻译
  const resolvedParams = await Promise.resolve(params);
  const lang = resolvedParams.lang || defaultLocale;
  const locale = (lang as Locale);
  const { t } = getServerTranslation(locale);
  const { common } = t;
  const home = common.home;

  // 确保home.features和home.featuresDescription存在
  if (!home || !home.features || !home.featuresDescription) {
    console.error('Dictionary, features or featuresDescription not loaded correctly:', { locale, common });
    return <div>Loading...</div>;
  }
  
  const features = [
    {
      name: home.features.formatter,
      description: home.featuresDescription.formatter || "",
      icon: FiCode,
      href: "/formatter",
      color: "bg-blue-500",
    },
    {
      name: home.features.validator,
      description: home.featuresDescription.validator || "",
      icon: FiCheck,
      href: "/validator",
      color: "bg-yellow-500",
    },
    {
      name: home.features.converter,
      description: home.featuresDescription.converter || "",
      icon: FiRepeat,
      href: "/converter",
      color: "bg-purple-500",
    },
    {
      name: home.features.compare,
      description: home.featuresDescription.compare || "",
      icon: FiGitPullRequest,
      href: "/diff",
      color: "bg-red-500",
    },
    {
      name: home.features.minifier,
      description: home.featuresDescription.minifier || "",
      icon: FiMinimize2,
      href: "/minifier",
      color: "bg-green-500",
    },
    {
      name: home.features.editor,
      description: home.featuresDescription.editor || "",
      icon: FiEdit,
      href: "/tree-editor",
      color: "bg-indigo-500",
    },
  ];

  return (
    <div className="py-6 sm:py-10">
      <div className="text-center mb-10 sm:mb-16 px-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
          {home.title}
        </h1>
        <p className="text-base sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          {home.description}
        </p>
      </div>

      <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-0">
        {features.map((feature) => (
          <Link 
            key={feature.name}
            href={`/${locale}${feature.href}`}
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
              {common.ui.usageGuide} →
            </div>
          </Link>
        ))}
      </div>
      
      <div className="mt-12 sm:mt-16 text-center px-4 sm:px-0">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
          {home.whyChooseUs}
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
          <div className="p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
            <h3 className="font-semibold text-base sm:text-lg mb-2">{home.features.comprehensive}</h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">{home.descriptions?.comprehensive || ""}</p>
          </div>
          <div className="p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
            <h3 className="font-semibold text-base sm:text-lg mb-2">{home.features.free}</h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">{home.descriptions?.free || ""}</p>
          </div>
          <div className="p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
            <h3 className="font-semibold text-base sm:text-lg mb-2">{home.features.secure}</h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">{home.descriptions?.secure || ""}</p>
          </div>
        </div>
      </div>
    </div>
  );
} 