<div align="center">

# 🔍 CodeLens-AI-Pro

**Lightweight Browser-Based AI Code Review & Quality Analysis Dashboard**
**轻量级浏览器端 AI 代码审查与质量分析仪表盘**
**輕量級瀏覽器端 AI 程式碼審查與品質分析儀表板**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Zero Dependencies](https://img.shields.io/badge/Dependencies-Zero-green.svg)]()
[![Languages](https://img.shields.io/badge/Languages-17+-orange.svg)]()

**🌐 [简体中文](#-项目介绍) | [繁體中文](#--簡介) | [English](#--introduction)**

---

<p>
  <img src="https://img.shields.io/badge/Security_Vuln_Detection-✅-red" alt="Security" />
  <img src="https://img.shields.io/badge/Code_Smell_Detection-✅-yellow" alt="Smells" />
  <img src="https://img.shields.io/badge/Complexity_Analysis-✅-blue" alt="Complexity" />
  <img src="https://img.shields.io/badge/Best_Practices_Check-✅-green" alt="Best Practices" />
  <img src="https://img.shields.io/badge/Visual_Dashboard-✅-purple" alt="Dashboard" />
</p>

**Open `index.html` in any modern browser — no build tools, no server, no dependencies required.**

</div>

---

## 🎉 项目介绍

CodeLens-AI-Pro 是一款**零依赖、纯前端**的 AI 代码审查与质量分析仪表盘。灵感来源于 GitHub Trending 上日益增长的代码安全工具（如 Gitleaks、Claudia 等），旨在为开发者提供一个**开箱即用、可视化**的代码质量分析工具。

### 💡 解决的痛点

- **传统 CLI 工具门槛高**：大多数代码分析工具需要安装配置，学习成本高
- **可视化不足**：终端输出难以直观理解代码质量问题
- **依赖繁重**：现有工具往往需要 Node.js、Python 等运行环境
- **隐私顾虑**：在线代码分析工具需要上传代码到第三方服务器

### ✨ 自研差异化亮点

- **零依赖**：纯 HTML/CSS/JS，无需任何构建工具或运行环境
- **隐私优先**：所有分析在浏览器本地完成，代码不会离开你的设备
- **可视化仪表盘**：Canvas 绘制的环形图、雷达图、饼图，直观展示分析结果
- **17 种语言支持**：自动检测 JS、TS、Python、Go、Rust、Java、C++ 等主流语言
- **三语界面**：简体中文 / 繁体中文 / English 一键切换
- **深色/浅色主题**：护眼模式，偏好自动保存

---

## ✨ 核心特性

### 🔒 安全漏洞检测
- 硬编码密码 / API 密钥 / Token 检测
- **SQL 注入**风险识别
- **XSS** 跨站脚本攻击风险
- **命令注入**漏洞检测
- 不安全的反序列化、弱加密算法
- 敏感信息泄露（邮箱、IP、内部路径）
- `eval()` 危险调用检测
- 路径遍历、不安全随机数、开放重定向

### 🧹 代码异味识别
- 过长函数（>50 行）
- 过深嵌套（>4 层）
- **魔法数字**检测
- 过大文件（>500 行）
- 死代码 / 未使用变量
- 参数过多（>5 个）
- 行过长（>120 字符）

### 📊 复杂度分析
- **圈复杂度**（Cyclomatic Complexity）计算
- **认知复杂度**（Cognitive Complexity）评估
- 函数级复杂度热力标注

### 🏆 最佳实践检查
- 命名规范（驼峰 / 下划线 / 帕斯卡）
- 注释覆盖率统计
- 错误处理完整性
- TODO / FIXME 标记提醒
- `console.log` 调试残留检测
- `var` 使用建议（推荐 `const/let`）
- TypeScript `any` 类型警告
- 严格模式检查

### 📈 可视化仪表盘
- **总体评分环形图**（0-100 分，颜色随分数动态变化）
- **四维度雷达图**（安全 / 质量 / 复杂度 / 最佳实践）
- **问题分类饼图**（按严重级别分布）
- **最佳实践进度条 + 详情列表**

---

## 🚀 快速开始

### 环境要求

> 🎯 **零环境要求！** 只需要一个现代浏览器（Chrome 80+ / Firefox 78+ / Safari 14+ / Edge 80+）

### 安装与运行

**方式一：直接打开（推荐）**
```bash
# 下载项目
git clone https://github.com/gitstq/CodeLens-AI-Pro.git
cd CodeLens-AI-Pro

# 直接用浏览器打开
open index.html        # macOS
xdg-open index.html    # Linux
start index.html       # Windows
```

**方式二：本地服务器**
```bash
# 使用任意静态文件服务器
python3 -m http.server 8080
# 然后访问 http://localhost:8080
```

**方式三：在线使用**
> 直接打开 `index.html` 文件即可，无需网络连接（首次加载后完全离线可用）

### 使用方法

1. 📝 **输入代码**：在代码编辑区粘贴代码，或拖拽文件到上传区域
2. 🔍 **自动检测**：系统自动识别编程语言
3. ⚡ **开始分析**：点击「分析」按钮或按 `Ctrl+Enter` 快捷键
4. 📊 **查看结果**：仪表盘展示评分、图表和问题列表
5. 🔎 **筛选问题**：按严重级别（严重 / 警告 / 提示）筛选，支持关键词搜索
6. 📥 **导出报告**：点击「导出报告」生成 JSON 格式分析报告

---

## 📖 详细使用指南

### 支持的编程语言

| 语言 | 标识符 | 语言 | 标识符 |
|------|--------|------|--------|
| JavaScript | `.js` | TypeScript | `.ts` |
| Python | `.py` | Go | `.go` |
| Rust | `.rs` | Java | `.java` |
| C++ | `.cpp` | C | `.c` |
| CSS | `.css` | HTML | `.html` |
| JSON | `.json` | YAML | `.yaml` |
| SQL | `.sql` | Shell | `.sh` |
| PHP | `.php` | Ruby | `.rb` |
| Swift | `.swift` | Kotlin | `.kt` |

### 分析维度说明

| 维度 | 权重 | 说明 |
|------|------|------|
| 🔒 安全性 | 30% | 检测硬编码密钥、注入攻击、不安全操作等 |
| 🧹 代码质量 | 25% | 识别代码异味、过长函数、过深嵌套等 |
| 📊 复杂度 | 25% | 计算圈复杂度和认知复杂度 |
| 🏆 最佳实践 | 20% | 检查命名规范、注释、错误处理等 |

### 快捷键

| 快捷键 | 功能 |
|--------|------|
| `Ctrl + Enter` | 开始分析 |
| `Ctrl + Shift + E` | 导出报告 |

---

## 💡 设计思路与迭代规划

### 设计理念

CodeLens-AI-Pro 遵循 **"零门槛、零依赖、零隐私风险"** 的三零原则：

1. **零门槛**：无需安装任何工具，打开浏览器即可使用
2. **零依赖**：不依赖任何第三方库，纯原生实现
3. **零隐私风险**：所有计算在浏览器本地完成，代码不会上传到任何服务器

### 技术选型原因

- **纯 HTML/CSS/JS**：最大化兼容性，无需构建步骤
- **Canvas API**：零依赖图表绘制，性能优异
- **CSS Custom Properties**：实现主题系统，无需预处理器
- **ES6+ Modules**：代码结构清晰，易于维护和扩展

### 后续迭代计划

- [ ] 🔌 **VS Code 插件版本**：集成到编辑器工作流
- [ ] 🌐 **Web Worker 多线程分析**：提升大文件分析性能
- [ ] 📊 **历史对比分析**：对比多次分析结果的趋势变化
- [ ] 🎨 **自定义规则配置**：允许用户自定义分析规则
- [ ] 📋 **PDF/HTML 报告导出**：更丰富的报告格式
- [ ] 🌍 **更多语言支持**：增加 Scala、Dart、Lua 等

---

## 📦 打包与部署指南

### 部署到 GitHub Pages

```bash
# 1. 克隆仓库
git clone https://github.com/gitstq/CodeLens-AI-Pro.git
cd CodeLens-AI-Pro

# 2. 推送到 gh-pages 分支
git checkout -b gh-pages
git push origin gh-pages

# 3. 在仓库 Settings → Pages 中选择 gh-pages 分支
# 访问 https://gitstq.github.io/CodeLens-AI-Pro/
```

### 部署到任意静态托管

项目是纯静态文件，可部署到任何支持静态文件托管的服务：
- **Vercel** / **Netlify** / **Cloudflare Pages**：直接连接 GitHub 仓库
- **Nginx** / **Apache**：将文件复制到 Web 根目录
- **本地文件系统**：直接双击 `index.html` 打开

### 兼容环境

| 环境 | 最低版本 |
|------|----------|
| Chrome | 80+ |
| Firefox | 78+ |
| Safari | 14+ |
| Edge | 80+ |
| Node.js（本地服务器） | 14+ |

---

## 🤝 贡献指南

欢迎贡献代码！请遵循以下规范：

### 提交规范（Angular Convention）

```
feat: 新增功能
fix: 修复问题
docs: 文档更新
style: 代码格式调整
refactor: 代码重构
perf: 性能优化
test: 测试相关
chore: 构建/工具链相关
```

### Issue 反馈

1. 在 [Issues](https://github.com/gitstq/CodeLens-AI-Pro/issues) 页面创建新 Issue
2. 标题清晰描述问题
3. 附上复现步骤和截图（如有）
4. 标注问题类型（Bug / Feature Request / Improvement）

### PR 提交

1. Fork 本仓库
2. 创建特性分支：`git checkout -b feat/your-feature`
3. 提交更改：`git commit -m "feat: add your feature"`
4. 推送分支：`git push origin feat/your-feature`
5. 创建 Pull Request

---

## 📄 开源协议

本项目基于 [MIT License](LICENSE) 开源。

```
MIT License

Copyright (c) 2025 CodeLens-AI-Pro Contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
```

---

<div align="center">

**Made with ❤️ by [gitstq](https://github.com/gitstq)**

**⭐ 如果这个项目对你有帮助，请给一个 Star！**

</div>

---

## -- 簡介

CodeLens-AI-Pro 是一款**零依賴、純前端**的 AI 程式碼審查與品質分析儀表板。靈感來自 GitHub Trending 上日益增長的程式碼安全工具，旨在為開發者提供一個**開箱即用、視覺化**的程式碼品質分析工具。

### 💡 解決的痛點

- **傳統 CLI 工具門檻高**：大多數程式碼分析工具需要安裝配置，學習成本高
- **視覺化不足**：終端輸出難以直觀理解程式碼品質問題
- **依賴繁重**：現有工具往往需要 Node.js、Python 等運行環境
- **隱私顧慮**：線上程式碼分析工具需要上傳程式碼到第三方伺服器

### ✨ 自研差異化亮點

- **零依賴**：純 HTML/CSS/JS，無需任何建置工具或運行環境
- **隱私優先**：所有分析在瀏覽器本地完成，程式碼不會離開你的裝置
- **視覺化儀表板**：Canvas 繪製的環形圖、雷達圖、餅圖，直觀展示分析結果
- **17 種語言支援**：自動偵測 JS、TS、Python、Go、Rust、Java、C++ 等主流語言
- **三語介面**：簡體中文 / 繁體中文 / English 一鍵切換
- **深色/淺色主題**：護眼模式，偏好自動儲存

---

## ✨ 核心特性

### 🔒 安全漏洞偵測
- 硬編碼密碼 / API 金鑰 / Token 偵測
- **SQL 注入**風險識別
- **XSS** 跨站腳本攻擊風險
- **命令注入**漏洞偵測
- 不安全的反序列化、弱加密演算法
- 敏感資訊洩露（信箱、IP、內部路徑）
- `eval()` 危險呼叫偵測
- 路徑遍歷、不安全隨機數、開放重新導向

### 🧹 程式碼異味識別
- 過長函式（>50 行）
- 過深巢狀（>4 層）
- **魔法數字**偵測
- 過大檔案（>500 行）
- 死程式碼 / 未使用變數
- 參數過多（>5 個）
- 行過長（>120 字元）

### 📊 複雜度分析
- **圈複雜度**（Cyclomatic Complexity）計算
- **認知複雜度**（Cognitive Complexity）評估
- 函式級複雜度熱力標註

### 🏆 最佳實踐檢查
- 命名規範（駝峰 / 底線 / 帕斯卡）
- 註解覆蓋率統計
- 錯誤處理完整性
- TODO / FIXME 標記提醒
- `console.log` 除錯殘留偵測
- `var` 使用建議（推薦 `const/let`）
- TypeScript `any` 類型警告
- 嚴格模式檢查

### 📈 視覺化儀表板
- **總體評分環形圖**（0-100 分，顏色隨分數動態變化）
- **四維度雷達圖**（安全 / 品質 / 複雜度 / 最佳實踐）
- **問題分類餅圖**（按嚴重級別分佈）
- **最佳實踐進度條 + 詳細列表**

---

## 🚀 快速開始

### 環境要求

> 🎯 **零環境要求！** 只需要一個現代瀏覽器（Chrome 80+ / Firefox 78+ / Safari 14+ / Edge 80+）

### 安裝與運行

**方式一：直接打開（推薦）**
```bash
# 下載專案
git clone https://github.com/gitstq/CodeLens-AI-Pro.git
cd CodeLens-AI-Pro

# 直接用瀏覽器打開
open index.html        # macOS
xdg-open index.html    # Linux
start index.html       # Windows
```

**方式二：本地伺服器**
```bash
python3 -m http.server 8080
# 然後訪問 http://localhost:8080
```

### 使用方法

1. 📝 **輸入程式碼**：在程式碼編輯區貼上程式碼，或拖拽檔案到上傳區域
2. 🔍 **自動偵測**：系統自動識別程式語言
3. ⚡ **開始分析**：點擊「分析」按鈕或按 `Ctrl+Enter` 快捷鍵
4. 📊 **查看結果**：儀表板展示評分、圖表和問題列表
5. 🔎 **篩選問題**：按嚴重級別（嚴重 / 警告 / 提示）篩選，支援關鍵字搜尋
6. 📥 **匯出報告**：點擊「匯出報告」產生 JSON 格式分析報告

---

## 📖 詳細使用指南

### 支援的程式語言

| 語言 | 副檔名 | 語言 | 副檔名 |
|------|--------|------|--------|
| JavaScript | `.js` | TypeScript | `.ts` |
| Python | `.py` | Go | `.go` |
| Rust | `.rs` | Java | `.java` |
| C++ | `.cpp` | C | `.c` |
| CSS | `.css` | HTML | `.html` |
| JSON | `.json` | YAML | `.yaml` |
| SQL | `.sql` | Shell | `.sh` |
| PHP | `.php` | Ruby | `.rb` |
| Swift | `.swift` | Kotlin | `.kt` |

### 分析維度說明

| 維度 | 權重 | 說明 |
|------|------|------|
| 🔒 安全性 | 30% | 偵測硬編碼金鑰、注入攻擊、不安全操作等 |
| 🧹 程式碼品質 | 25% | 識別程式碼異味、過長函式、過深巢狀等 |
| 📊 複雜度 | 25% | 計算圈複雜度和認知複雜度 |
| 🏆 最佳實踐 | 20% | 檢查命名規範、註解、錯誤處理等 |

---

## 💡 設計思路與迭代規劃

### 設計理念

CodeLens-AI-Pro 遵循 **「零門檻、零依賴、零隱私風險」** 的三零原則：

1. **零門檻**：無需安裝任何工具，打開瀏覽器即可使用
2. **零依賴**：不依賴任何第三方函式庫，純原生實現
3. **零隱私風險**：所有計算在瀏覽器本地完成，程式碼不會上傳到任何伺服器

### 後續迭代計畫

- [ ] 🔌 **VS Code 插件版本**：整合到編輯器工作流
- [ ] 🌐 **Web Worker 多執行緒分析**：提升大檔案分析效能
- [ ] 📊 **歷史對比分析**：對比多次分析結果的趨勢變化
- [ ] 🎨 **自訂規則配置**：允許使用者自訂分析規則
- [ ] 📋 **PDF/HTML 報告匯出**：更豐富的報告格式
- [ ] 🌍 **更多語言支援**：增加 Scala、Dart、Lua 等

---

## 📦 打包與部署指南

### 部署到 GitHub Pages

```bash
git clone https://github.com/gitstq/CodeLens-AI-Pro.git
cd CodeLens-AI-Pro
git checkout -b gh-pages
git push origin gh-pages
# 在倉庫 Settings → Pages 中選擇 gh-pages 分支
```

### 相容環境

| 環境 | 最低版本 |
|------|----------|
| Chrome | 80+ |
| Firefox | 78+ |
| Safari | 14+ |
| Edge | 80+ |

---

## 🤝 貢獻指南

歡迎貢獻程式碼！請遵循 Angular 提交規範：

```
feat: 新增功能
fix: 修復問題
docs: 文件更新
style: 程式碼格式調整
refactor: 程式碼重構
```

---

## 📄 開源協議

本專案基於 [MIT License](LICENSE) 開源。

---

<div align="center">

**Made with ❤️ by [gitstq](https://github.com/gitstq)**

**⭐ 如果這個專案對你有幫助，請給一個 Star！**

</div>

---

## -- Introduction

CodeLens-AI-Pro is a **zero-dependency, pure frontend** AI code review and quality analysis dashboard. Inspired by the growing trend of code security tools on GitHub Trending (such as Gitleaks, Claudia, etc.), it aims to provide developers with an **out-of-the-box, visual** code quality analysis tool.

### 💡 Pain Points Solved

- **High barrier to entry for CLI tools**: Most code analysis tools require installation and configuration with steep learning curves
- **Insufficient visualization**: Terminal output makes it hard to intuitively understand code quality issues
- **Heavy dependencies**: Existing tools often require Node.js, Python, or other runtime environments
- **Privacy concerns**: Online code analysis tools require uploading code to third-party servers

### ✨ Differentiated Highlights

- **Zero Dependencies**: Pure HTML/CSS/JS, no build tools or runtime environments needed
- **Privacy First**: All analysis runs locally in the browser — your code never leaves your device
- **Visual Dashboard**: Canvas-rendered ring charts, radar charts, and pie charts for intuitive result display
- **17 Language Support**: Auto-detect JS, TS, Python, Go, Rust, Java, C++, and more
- **Trilingual Interface**: Simplified Chinese / Traditional Chinese / English with one-click switching
- **Dark/Light Themes**: Eye-friendly mode with persistent preference saving

---

## ✨ Core Features

### 🔒 Security Vulnerability Detection
- Hardcoded password / API key / Token detection
- **SQL Injection** risk identification
- **XSS** cross-site scripting attack risk
- **Command Injection** vulnerability detection
- Insecure deserialization, weak cryptographic algorithms
- Sensitive information leakage (emails, IPs, internal paths)
- `eval()` dangerous call detection
- Path traversal, insecure random numbers, open redirects

### 🧹 Code Smell Detection
- Overlong functions (>50 lines)
- Excessive nesting (>4 levels)
- **Magic number** detection
- Oversized files (>500 lines)
- Dead code / unused variables
- Too many parameters (>5)
- Overlong lines (>120 characters)

### 📊 Complexity Analysis
- **Cyclomatic Complexity** calculation
- **Cognitive Complexity** assessment
- Function-level complexity heat map annotation

### 🏆 Best Practices Check
- Naming conventions (camelCase / snake_case / PascalCase)
- Comment coverage statistics
- Error handling completeness
- TODO / FIXME marker alerts
- `console.log` debug residue detection
- `var` usage suggestions (recommend `const/let`)
- TypeScript `any` type warnings
- Strict mode checks

### 📈 Visual Dashboard
- **Overall Score Ring Chart** (0-100, color changes dynamically with score)
- **Four-Dimension Radar Chart** (Security / Quality / Complexity / Best Practices)
- **Issue Classification Pie Chart** (distribution by severity level)
- **Best Practices Progress Bars + Detail Lists**

---

## 🚀 Quick Start

### Requirements

> 🎯 **Zero requirements!** Just a modern browser (Chrome 80+ / Firefox 78+ / Safari 14+ / Edge 80+)

### Installation & Running

**Option 1: Direct Open (Recommended)**
```bash
# Clone the repository
git clone https://github.com/gitstq/CodeLens-AI-Pro.git
cd CodeLens-AI-Pro

# Open directly in your browser
open index.html        # macOS
xdg-open index.html    # Linux
start index.html       # Windows
```

**Option 2: Local Server**
```bash
# Use any static file server
python3 -m http.server 8080
# Then visit http://localhost:8080
```

### How to Use

1. 📝 **Input Code**: Paste code in the editor area, or drag & drop a file
2. 🔍 **Auto-Detection**: The system automatically identifies the programming language
3. ⚡ **Start Analysis**: Click the "Analyze" button or press `Ctrl+Enter`
4. 📊 **View Results**: The dashboard displays scores, charts, and issue lists
5. 🔎 **Filter Issues**: Filter by severity (Critical / Warning / Info), with keyword search
6. 📥 **Export Report**: Click "Export Report" to generate a JSON analysis report

---

## 📖 Detailed Usage Guide

### Supported Languages

| Language | Extension | Language | Extension |
|----------|-----------|----------|-----------|
| JavaScript | `.js` | TypeScript | `.ts` |
| Python | `.py` | Go | `.go` |
| Rust | `.rs` | Java | `.java` |
| C++ | `.cpp` | C | `.c` |
| CSS | `.css` | HTML | `.html` |
| JSON | `.json` | YAML | `.yaml` |
| SQL | `.sql` | Shell | `.sh` |
| PHP | `.php` | Ruby | `.rb` |
| Swift | `.swift` | Kotlin | `.kt` |

### Analysis Dimensions

| Dimension | Weight | Description |
|-----------|--------|-------------|
| 🔒 Security | 30% | Detect hardcoded keys, injection attacks, unsafe operations |
| 🧹 Quality | 25% | Identify code smells, overlong functions, excessive nesting |
| 📊 Complexity | 25% | Calculate cyclomatic and cognitive complexity |
| 🏆 Best Practices | 20% | Check naming conventions, comments, error handling |

### Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl + Enter` | Start Analysis |
| `Ctrl + Shift + E` | Export Report |

---

## 💡 Design Philosophy & Roadmap

### Design Principles

CodeLens-AI-Pro follows the **"Zero Barrier, Zero Dependencies, Zero Privacy Risk"** principle:

1. **Zero Barrier**: No tools to install — just open a browser
2. **Zero Dependencies**: No third-party libraries — pure native implementation
3. **Zero Privacy Risk**: All computation runs locally — code never leaves your device

### Roadmap

- [ ] 🔌 **VS Code Extension**: Integrate into editor workflows
- [ ] 🌐 **Web Worker Multi-threaded Analysis**: Better performance for large files
- [ ] 📊 **Historical Comparison**: Trend analysis across multiple scans
- [ ] 🎨 **Custom Rule Configuration**: User-defined analysis rules
- [ ] 📋 **PDF/HTML Report Export**: Richer report formats
- [ ] 🌍 **More Language Support**: Scala, Dart, Lua, and more

---

## 📦 Packaging & Deployment

### Deploy to GitHub Pages

```bash
git clone https://github.com/gitstq/CodeLens-AI-Pro.git
cd CodeLens-AI-Pro
git checkout -b gh-pages
git push origin gh-pages
# Go to Settings → Pages and select gh-pages branch
```

### Compatible Environments

| Environment | Minimum Version |
|-------------|-----------------|
| Chrome | 80+ |
| Firefox | 78+ |
| Safari | 14+ |
| Edge | 80+ |

---

## 🤝 Contributing

Contributions are welcome! Please follow the Angular commit convention:

```
feat: new feature
fix: bug fix
docs: documentation update
style: code formatting
refactor: code refactoring
```

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

<div align="center">

**Made with ❤️ by [gitstq](https://github.com/gitstq)**

**⭐ If you find this project helpful, please give it a Star!**

</div>
