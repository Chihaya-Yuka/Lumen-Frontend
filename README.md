# Lumen AI 搜索引擎（前端）

**搜索问题，明确答案。**

Lumen 是一个基于 AI 的搜索引擎，旨在提供更加智能、便捷的搜索体验。这个项目的前端部分使用 React 和 Tailwind CSS 开发，结合现代的前端开发工具和技术，提供响应式设计和良好的用户体验。

## 运行前提

在开始之前，请确保你已经安装了以下工具：

- [Node.js](https://nodejs.org/)（建议使用 LTS 版本）
- [npm](https://www.npmjs.com/)（通常和 Node.js 一起安装）

## 安装依赖

1. 克隆仓库：

```bash
git clone https://github.com/Chihaya-Yuka/Lumen-Frontend.git
cd Lumen-Frontend
```

2. 安装依赖：

```bash
npm install
```

## 本地开发

在本地启动项目，你可以运行以下命令：

```bash
npm start
```

这将启动开发服务器，并且可以在浏览器中访问 [http://localhost:3000](http://localhost:3000) 查看应用。开发过程中，文件更改会自动刷新页面。

## 构建项目

当你准备好发布应用时，可以使用以下命令构建生产版本：

```bash
npm run build
```

这将在 `build/` 目录下生成一个优化后的生产版本，包含压缩的 JavaScript 和 CSS 文件。你可以将此文件夹部署到任何静态文件服务器。

## 代码风格

我们使用 [Prettier](https://prettier.io/) 和 [ESLint](https://eslint.org/) 来确保代码的可读性和一致性。你可以在提交之前运行以下命令来检查代码风格：

```bash
npm run lint
npm run format
```

## 依赖库

### 核心技术栈

- **React**: 用于构建用户界面。
- **Tailwind CSS**: 用于快速构建响应式和可定制的 UI 组件。
- **React Router**: 用于处理页面路由（如果需要多个页面）。
- **React DOM**: 用于渲染 UI 到浏览器中。

### 开发工具

- **ESLint**: 用于保持 JavaScript 代码的一致性。
- **Prettier**: 用于自动格式化代码。
- **PostCSS**: 用于处理 Tailwind CSS 的 CSS 文件。

### 包管理

- **npm**: 用于管理项目的依赖。

## 项目特性

- **响应式设计**：该项目使用 Tailwind CSS 来实现响应式布局，确保用户在不同设备上获得良好的体验。
- **快速搜索**：实现了一个输入框，用户可以直接输入问题，查询相关内容。
- **侧边栏**：具有多个导航项，包括“搜索”，“资讯”，“工具”，“社区”等，帮助用户快速访问不同的页面。

## 贡献

如果你想为项目贡献代码，可以按照以下步骤：

1. Fork 这个项目。
2. 创建一个新的分支：
    ```bash
    git checkout -b feature/your-feature-name
    ```
3. 提交你的更改：
    ```bash
    git commit -am 'Add new feature'
    ```
4. 将你的更改推送到你的 fork：
    ```bash
    git push origin feature/your-feature-name
    ```
5. 提交 Pull Request。

我们会审查你的代码并进行合并。

---

### 相关链接

- [Tailwind CSS](https://tailwindcss.com/)
- [React](https://reactjs.org/)
