# 快速开始

## 安装

### npm

```bash
npm install -g @fission-ai/openspec
```

### npx (无需安装)

```bash
npx @fission-ai/openspec init
```

### yarn

```bash
yarn global add @fission-ai/openspec
```

## 初始化

在项目根目录运行：

```bash
openspec init
```

这会创建：

```
openspec/
├── specs/
│   └── index.md
└── changes/
    └── .gitkeep
```

## 创建第一个变更

### 使用 OPSX

```bash
/opsx:propose "add hello world feature"
```

AI 会自动创建完整的变更结构。

### 手动创建

```bash
mkdir -p openspec/changes/my-feature
```

创建 `proposal.md`:

```markdown
# Proposal: Add Hello World

## Why

Add a simple hello world to demonstrate OpenSpec.

## What

- Create hello.js
- Add console.log("Hello, World!")

## Scope

**In:** hello.js
**Out:** Tests, documentation
```

## 应用变更

```bash
openspec apply --change my-feature
```

## 验证规范

```bash
openspec validate
```

## 查看差异

```bash
openspec diff
```

## 下一步

- 阅读 [核心概念](./concepts.md)
- 探索 [规范管理](./specs.md)
- 学习 [变更管理](./changes.md)
- 配置 [定制化](./customization.md)
