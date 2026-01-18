# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

GPTW - AI 综合服务平台营销网站，基于 Next.js 14 App Router 构建，提供 ChatGPT 代充、AI 镜像服务和 API 网关等产品的展示和介绍。

## 技术栈

- **框架**: Next.js 14.2.0 (App Router)
- **语言**: TypeScript (strict mode 关闭)
- **样式**: Tailwind CSS + CSS Variables
- **UI 组件**: shadcn/ui + Radix UI
- **动画**: Framer Motion
- **3D**: Spline (@splinetool/react-spline)
- **主题**: next-themes (默认深色模式)
- **图标**: Lucide React

## 开发命令

```bash
# 开发服务器 (http://localhost:3000)
npm run dev

# 生产构建
npm run build

# 生产模式启动
npm start

# ESLint 检查
npm run lint
```

## 项目架构

### 路由结构 (App Router)

```
app/
├── layout.tsx          # 根布局，包含 ThemeProvider
├── page.tsx            # 首页，组合所有 Section 组件
├── not-found.tsx       # 404 页面
├── globals.css         # 全局样式和 CSS Variables
├── products/           # 产品页面
│   ├── page.tsx
│   ├── api-gateway/
│   ├── mirror/
│   ├── mirror-system/
│   └── recharge/
├── services/           # 服务页面
│   ├── fine-tuning/
│   ├── knowledge-base/
│   └── workflow/
└── tutorials/          # 教程页面
    ├── page.tsx
    ├── quick-start/
    ├── api-integration/
    ├── product-usage/
    ├── advanced-config/
    ├── security-best-practices/
    └── troubleshooting/
```

### 组件组织

**核心原则**:
- 所有 UI 组件统一放在 `components/ui/` 目录
- 通过 `components/ui/index.ts` 集中导出
- 导入时使用 `@/components/ui` 别名

**组件分类**:

1. **基础组件** (shadcn/ui):
   - button, card, input, label, switch, badge
   - accordion, sheet, navigation-menu, carousel

2. **布局组件**:
   - navbar.tsx - 顶部导航栏
   - site-footer.tsx - 底部页脚
   - simplified-navbar.tsx - 简化版导航

3. **Section 组件** (首页模块化组装):
   - hero-section.tsx - 英雄区
   - products-section.tsx - 产品展示
   - features-bento-section.tsx - 功能网格
   - research-showcase.tsx - 研究展示
   - safety-section.tsx - 安全性
   - global-impact-section.tsx - 全球影响
   - pricing-section.tsx - 价格方案
   - cta-section.tsx - CTA 行动召唤

4. **特效组件**:
   - spotlight.tsx (aceternity & ibelick 两个版本)
   - bento-grid.tsx - Bento 网格布局
   - display-cards.tsx - 卡片堆叠效果
   - timeline.tsx - 时间线
   - word-rotate.tsx - 文字旋转动画
   - logos3.tsx - Logo 展示轮播
   - map.tsx - 世界地图 (dotted-map)
   - splite.tsx - Spline 3D 场景

### 样式系统

**CSS Variables 主题系统** (app/globals.css):
- 使用 HSL 颜色变量 (如 `--primary`, `--background`)
- 支持明暗主题切换
- Tailwind 通过 `hsl(var(--variable))` 引用

**工具函数**:
- `lib/utils.ts` 提供 `cn()` 函数用于条件样式合并 (clsx + tailwind-merge)

### TypeScript 配置

- **严格模式已关闭** (`strict: false`)
- 路径别名: `@/*` 映射到项目根目录
- 允许 JavaScript 文件 (`allowJs: true`)

### 图片配置

Next.js Image 组件已配置远程图片域名 (next.config.mjs):
- www.shadcnblocks.com
- deifkwefumgah.cloudfront.net
- images.unsplash.com

## 开发规范

### 组件开发

1. **新增 UI 组件**:
   - 创建于 `components/ui/`
   - 在 `components/ui/index.ts` 添加导出
   - 使用 `cn()` 工具函数处理条件样式

2. **新增页面**:
   - 在 `app/` 下创建对应路由文件夹
   - 页面文件命名为 `page.tsx`
   - 复用现有 Section 组件构建页面结构

3. **主题适配**:
   - 使用 CSS Variables 定义颜色
   - 通过 `dark:` 前缀添加深色模式样式
   - 默认主题为深色 (layout.tsx 中 `defaultTheme="dark"`)

### 动画开发

- **Framer Motion**: 用于复杂交互动画
- **Tailwind 动画**: 简单过渡效果使用 Tailwind 内置动画
- **自定义 keyframes**: 在 tailwind.config.ts 的 `theme.extend.keyframes` 定义

### Hooks

- `hooks/use-media-query.ts` - 响应式媒体查询
- 建议新 hooks 统一放在 `hooks/` 目录

## 重要注意事项

1. **TypeScript 严格模式关闭**: 类型检查较宽松，但仍建议编写类型
2. **无 Git 仓库**: 当前目录未初始化 Git
3. **主题系统**: 默认深色主题，不自动跟随系统 (`enableSystem={false}`)
4. **导入路径**: 始终使用 `@/` 别名而非相对路径
5. **组件复用**: 优先从 `@/components/ui` 导入现有组件，避免重复造轮子
