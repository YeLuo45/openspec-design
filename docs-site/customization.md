# 定制化

## 配置

OpenSpec 通过 `openspec.config.yaml` 高度可定制。

## 配置文件

### 完整配置示例

```yaml
version: 1

# 规范路径
specs:
  path: ./openspec/specs
  index: ./openspec/specs/index.md

# 变更路径
changes:
  path: ./openspec/changes
  template: ./templates/change

# 归档
archive:
  path: ./openspec/changes/archive
  prefix: "{year}-{month}-{day}-{name}"
  keep_branches: true

# 验证
validation:
  strict: false
  include:
    - "**/*.md"
    - "**/*.yaml"
  exclude:
    - "**/node_modules/**"
    - "**/.git/**"

# OPSX AI 设置
opsx:
  model: gpt-4
  temperature: 0.7
  max_tokens: 2000

# 工作区
workspace:
  enabled: false
  links:
    api: {}
    web: {}
```

## 自定义模板

### 变更模板

创建 `./templates/change/proposal.md`:

```markdown
# Proposal: {{name}}

## Context

## Motivation

## Proposal

## Alternatives Considered
```

### 规范模板

创建 `./templates/spec/api.md`:

```markdown
# {{title}}

> {{description}}

## Overview

## API Endpoints

## Data Model

## Error Handling
```

## 钩子

### Pre-Apply 钩子

```yaml
hooks:
  pre_apply:
    - command: "npm run test"
      cwd: "{{change.path}}"
    - command: "npm run lint"
```

### Post-Archive 钩子

```yaml
hooks:
  post_archive:
    - command: "git add ."
    - command: "git commit -m 'archive: {{change.name}}'"
```

## 集成

### ESLint

```yaml
validation:
  include:
    - "openspec/**/*.md"
  eslint:
    config: .eslintrc.openspec.js
```

### Prettier

```yaml
formatting:
  prettier:
    config: .prettierrc
    patterns:
      - "openspec/**/*.md"
```

### Git

```yaml
git:
  auto_init: true
  commit_template: |
    {{change.type}}: {{change.name}}

    {{change.summary}}
```

## 多语言支持

OpenSpec 支持多语言文档：

```yaml
i18n:
  default: en
  locales:
    - code: en
      name: English
    - code: zh
      name: 简体中文
    - code: ja
      name: 日本語
```

规范结构：

```
openspec/
└── specs/
    ├── index.md
    ├── index.zh.md
    └── index.ja.md
```

## IDE 集成

### VS Code

安装 OpenSpec 扩展：

```bash
code --install-extension fission.openspec
```

功能：
- 语法高亮
- 智能补全
- 诊断
- 快速修复

### JetBrains

```bash
# Install plugin from marketplace
# Search "OpenSpec"
```
