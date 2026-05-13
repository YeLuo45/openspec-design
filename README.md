# OpenSpec Design

OpenSpec 架构设计文档站

## 项目结构

```
openspec-design/
├── docs-site/              # VitePress 文档站
│   ├── .vitepress/         # VitePress 配置
│   │   ├── config.mjs     # nav + sidebar + base
│   │   ├── theme/          # 主题
│   │   └── public/         # 静态资源
│   └── *.md                # 文档
└── .github/workflows/      # GitHub Actions
```

## 文档

- [核心概念](concepts.md) - 设计理念和核心对象
- [规范管理](specs.md) - specs/ 目录结构
- [变更管理](changes.md) - changes/ 生命周期
- [工作流](workflows.md) - 迭代/评审/多仓库工作流
- [CLI 参考](cli.md) - 命令行接口
- [OPSX AI 工作流](opsx.md) - AI 辅助开发
- [定制化](customization.md) - 配置和集成

## 本地开发

```bash
cd docs-site
npm install
npm run dev
```

## 部署

文档站通过 GitHub Actions 自动部署到 GitHub Pages：
https://yeluo45.github.io/openspec-design/

## 基于

[Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) - Fluid Spec Framework
