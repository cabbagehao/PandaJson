# PandaJson - 项目开发指南

这是一个专业的JSON工具集合网站，提供格式化、校验、转换、对比、编辑和压缩等功能。

## 项目概览

- **项目名称**: PandaJson
- **技术栈**: Next.js 15, TypeScript, Tailwind CSS
- **多语言**: 支持15种语言 (en, zh, es, fr, de, ja, ru, pt, ar, hi, zh-tw, mk, sw, uz, vi)
- **部署**: Vercel
- **域名**: https://jsonpanda.com

## 开发环境

### 系统要求
- Node.js 18+
- npm 或 yarn

### 安装依赖
```bash
npm install
```

### 开发命令
```bash
# 启动开发服务器
npm run dev

# 启动开发服务器（带类型检查）
npm run dev:check

# 构建项目
npm run build

# 启动生产服务器
npm run start

# 代码检查
npm run lint

# 检查翻译完整性
npm run check-translations

# 生成站点地图
npm run generate-sitemap
```

## 项目结构

```
src/
├── app/                 # Next.js App Router
│   ├── [lang]/         # 多语言路由
│   │   ├── page.tsx    # 首页
│   │   ├── layout.tsx  # 布局
│   │   ├── formatter/  # JSON格式化器
│   │   ├── validator/  # JSON校验器
│   │   ├── converter/  # JSON转换器
│   │   ├── diff/       # JSON对比工具
│   │   ├── tree-editor/ # JSON树形编辑器
│   │   ├── schema-validator/ # Schema验证器
│   │   └── minifier/   # JSON压缩器
│   ├── components/     # 共享组件
│   └── globals.css     # 全局样式
├── i18n/              # 国际化
│   ├── locales/       # 翻译文件
│   ├── client.ts      # 客户端i18n
│   └── server.ts      # 服务端i18n
├── lib/               # 工具库
└── middleware.ts      # 中间件
```

## 核心功能

### 1. JSON格式化器 (/formatter)
- 美化和格式化JSON数据
- 可调整缩进、括号风格
- 语法高亮显示
- 错误检测

### 2. JSON校验器 (/validator)
- 验证JSON语法
- 详细错误定位
- 实时反馈

### 3. JSON转换器 (/converter)
- JSON ↔ YAML
- JSON ↔ XML
- JSON ↔ CSV
- 双向转换

### 4. JSON对比工具 (/diff)
- 可视化差异对比
- 颜色编码显示变更
- 支持大型JSON文件

### 5. JSON树形编辑器 (/tree-editor)
- 可视化编辑界面
- 拖拽操作
- 实时预览

### 6. Schema验证器 (/schema-validator)
- JSON Schema验证
- 详细错误报告
- 规则检查

### 7. JSON压缩器 (/minifier)
- 移除空白字符
- 压缩率统计
- 优化传输效率

## 国际化

### 支持的语言
- **主要语言**: en, zh, es, fr, de, ja, ru, pt
- **其他语言**: ar, hi, zh-tw, mk, sw, uz, vi

### 翻译文件位置
```
src/i18n/locales/[lang]/
├── common.ts           # 通用翻译
├── formatter.ts        # 格式化器
├── validator.ts        # 校验器
├── converter.ts        # 转换器
├── diff.ts            # 对比工具
├── tree-editor.ts     # 树形编辑器
├── schema-validator.ts # Schema验证器
└── minifier.ts        # 压缩器
```

### 添加新翻译
1. 复制 `en` 文件夹
2. 重命名为新语言代码
3. 翻译所有文件内容
4. 在 `src/i18n/index.ts` 中添加语言配置

## SEO配置

### OnPage SEO已优化
- ✅ 统一URL格式（无www，无尾部斜杠）
- ✅ Canonical链接配置
- ✅ 每页唯一title/description/h1
- ✅ www重定向和尾部斜杠处理
- ✅ 404页面处理
- ✅ 移动端优化

### 元数据管理
- 使用 `generateMetadata` 函数
- 多语言SEO优化
- 结构化数据支持

## 部署

### Vercel部署
```bash
# 构建检查
npm run build

# 部署到Vercel
vercel --prod
```

### 环境变量
- `NODE_ENV`: 环境配置 (development/production)

## 开发规范

### 代码风格
- 使用TypeScript严格模式
- 遵循ESLint规则
- 使用Prettier格式化
- 组件采用函数式写法

### 提交规范
```
feat: 新功能
fix: 修复bug
docs: 文档更新
style: 样式调整
refactor: 重构
test: 测试
chore: 构建/工具更新
```

## 性能优化

### 已实现优化
- Next.js App Router
- 静态生成 (SSG)
- 图片优化
- 代码分割
- CDN缓存

### 监控指标
- Core Web Vitals
- 页面加载速度
- 转换率跟踪

## 故障排除

### 常见问题

**构建失败**
```bash
# 清理依赖重新安装
rm -rf node_modules package-lock.json
npm install
```

**类型错误**
```bash
# 检查TypeScript配置
npx tsc --noEmit
```

**翻译缺失**
```bash
# 检查翻译完整性
npm run check-translations
```

## 联系方式

- **GitHub**: [项目仓库链接]
- **问题反馈**: [Issues链接]
- **文档**: [文档链接]

---

*最后更新: 2025-01-18*
*版本: 1.0.0*