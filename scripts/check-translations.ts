import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// 获取当前文件的目录
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 语言文件目录路径
const localesDir = path.join(__dirname, '../src/i18n/locales');

// 英语是基准语言
const baseLanguage = 'en';

// 获取所有语言目录
const languageDirs = fs.readdirSync(localesDir)
  .filter(file => fs.statSync(path.join(localesDir, file)).isDirectory());

console.log(`\n🔍 检查翻译键一致性 - 基准语言: ${baseLanguage}\n`);

// 用于保存问题列表
const issues: {
  lang: string;
  file: string;
  missingKeys: string[];
  extraKeys: string[];
}[] = [];

// 获取指定语言目录中的所有 TS 文件
function getLanguageFiles(langDir: string): string[] {
  return fs.readdirSync(path.join(localesDir, langDir))
    .filter(file => file.endsWith('.ts') && file !== 'index.ts');
}

// 从 TS 文件中提取键 - 使用简单的行匹配方法
function extractKeysFromFile(filePath: string): string[] {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const lines = fileContent.split('\n');
    const keys: string[] = [];
    
    for (const line of lines) {
      // 查找键定义模式: "key: 值" 或 'key: 值'
      const match = line.match(/^\s*([a-zA-Z0-9_]+)\s*:/);
      if (match && match[1]) {
        keys.push(match[1]);
      }
    }
    
    return keys;
  } catch (error) {
    console.error(`读取文件 ${filePath} 出错:`, error);
    return [];
  }
}

// 比较两个文件的键
function compareKeys(baseKeys: string[], targetKeys: string[], targetLang: string, fileName: string) {
  const missingKeys = baseKeys.filter(key => !targetKeys.includes(key));
  const extraKeys = targetKeys.filter(key => !baseKeys.includes(key));
  
  let hasIssues = false;
  
  if (missingKeys.length > 0 || extraKeys.length > 0) {
    issues.push({
      lang: targetLang,
      file: fileName,
      missingKeys,
      extraKeys
    });
    hasIssues = true;
  }
  
  if (missingKeys.length > 0) {
    console.log(`❌ ${targetLang}/${fileName} 缺少以下键:`);
    missingKeys.forEach(key => console.log(`  - ${key}`));
    hasIssues = true;
  }
  
  if (extraKeys.length > 0) {
    console.log(`⚠️ ${targetLang}/${fileName} 有多余的键:`);
    extraKeys.forEach(key => console.log(`  - ${key}`));
    hasIssues = true;
  }
  
  if (!hasIssues) {
    console.log(`✅ ${targetLang}/${fileName} 翻译键完全匹配`);
  }
  
  return hasIssues;
}

// 生成修复指南文件
function generateFixGuide() {
  if (issues.length === 0) return;
  
  const fixGuideFilePath = path.join(__dirname, 'translation-fix-guide.md');
  
  let content = `# 翻译问题修复指南\n\n`;
  content += `共发现 ${issues.length} 个问题需要修复。\n\n`;
  
  // 按语言分组
  const langGroups: { [lang: string]: typeof issues } = {};
  
  issues.forEach(issue => {
    if (!langGroups[issue.lang]) {
      langGroups[issue.lang] = [];
    }
    langGroups[issue.lang].push(issue);
  });
  
  // 为每种语言生成修复指南
  Object.keys(langGroups).forEach(lang => {
    content += `## ${lang}\n\n`;
    
    langGroups[lang].forEach(issue => {
      content += `### ${issue.file}\n\n`;
      
      if (issue.missingKeys.length > 0) {
        content += `#### 缺少的键\n\n`;
        issue.missingKeys.forEach(key => {
          content += `- \`${key}\`\n`;
        });
        content += '\n';
      }
      
      if (issue.extraKeys.length > 0) {
        content += `#### 多余的键\n\n`;
        issue.extraKeys.forEach(key => {
          content += `- \`${key}\`\n`;
        });
        content += '\n';
      }
      
      // 添加修复建议
      content += `#### 修复建议\n\n`;
      
      if (issue.missingKeys.length > 0) {
        content += `1. 在 \`${lang}/${issue.file}\` 文件中添加以下缺少的键 (从英文版本复制并翻译):\n\n`;
        issue.missingKeys.forEach(key => {
          content += `   - \`${key}\`\n`;
        });
        content += '\n';
      }
      
      if (issue.extraKeys.length > 0) {
        content += `2. 在 \`${lang}/${issue.file}\` 文件中删除以下多余的键:\n\n`;
        issue.extraKeys.forEach(key => {
          content += `   - \`${key}\`\n`;
        });
        content += '\n';
      }
    });
  });
  
  fs.writeFileSync(fixGuideFilePath, content);
  console.log(`\n📝 修复指南已生成: ${fixGuideFilePath}`);
}

// 主函数
function checkTranslations() {
  // 获取基准语言的文件
  const baseFiles = getLanguageFiles(baseLanguage);
  
  let totalIssues = 0;
  
  // 遍历所有语言
  for (const lang of languageDirs) {
    // 跳过基准语言
    if (lang === baseLanguage) continue;
    
    console.log(`\n📑 检查语言: ${lang}`);
    const langFiles = getLanguageFiles(lang);
    
    // 检查是否缺少文件
    const missingFiles = baseFiles.filter(file => !langFiles.includes(file));
    if (missingFiles.length > 0) {
      console.log(`❌ ${lang} 缺少以下文件:`);
      missingFiles.forEach(file => console.log(`  - ${file}`));
      totalIssues += missingFiles.length;
      
      // 添加到问题列表
      missingFiles.forEach(file => {
        issues.push({
          lang,
          file,
          missingKeys: ['整个文件缺失'],
          extraKeys: []
        });
      });
    }
    
    // 检查是否有多余文件
    const extraFiles = langFiles.filter(file => !baseFiles.includes(file));
    if (extraFiles.length > 0) {
      console.log(`⚠️ ${lang} 有多余的文件:`);
      extraFiles.forEach(file => console.log(`  - ${file}`));
      totalIssues += extraFiles.length;
      
      // 添加到问题列表
      extraFiles.forEach(file => {
        issues.push({
          lang,
          file,
          missingKeys: [],
          extraKeys: ['整个文件多余']
        });
      });
    }
    
    // 遍历所有文件进行比较
    for (const file of baseFiles) {
      if (!langFiles.includes(file)) continue; // 跳过目标语言中不存在的文件
      
      const baseFilePath = path.join(localesDir, baseLanguage, file);
      const targetFilePath = path.join(localesDir, lang, file);
      
      const baseKeys = extractKeysFromFile(baseFilePath);
      const targetKeys = extractKeysFromFile(targetFilePath);
      
      const hasIssues = compareKeys(baseKeys, targetKeys, lang, file);
      if (hasIssues) totalIssues++;
    }
  }
  
  // 生成修复指南
  generateFixGuide();
  
  // 打印总结
  console.log(`\n🔄 检查完成 ${totalIssues > 0 ? '❌' : '✅'}`);
  if (totalIssues > 0) {
    console.log(`  发现 ${totalIssues} 个问题需要修复`);
  } else {
    console.log('  所有翻译键完全匹配！');
  }
}

// 运行检查
checkTranslations(); 