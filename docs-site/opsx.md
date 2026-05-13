# OPSX AI 工作流

## 概述

OPSX 是 OpenSpec 的 AI 辅助工作流，通过 `/opsx:propose` 命令启动。

## 工作流

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  User:    /opsx:propose "add user authentication"           │
│                                                             │
│  AI:      ✓ Created openspec/changes/add-auth/              │
│           ✓ proposal.md — why we're doing this              │
│           ✓ specs/ — requirements and scenarios             │
│           ✓ design.md — technical approach                 │
│           ✓ tasks.md — implementation checklist           │
│           Ready for implementation!                        │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

## OPSX 命令

### propose

创建新变更：

```
/opsx:propose <description>
```

示例：

```
/opsx:propose add dark mode
/opsx:propose "implement user authentication with JWT"
/opsx:propose refactor the checkout flow
```

AI 自动：
1. 分析描述
2. 创建变更文件夹
3. 生成 proposal.md
4. 生成 specs/
5. 生成 design.md
6. 生成 tasks.md

### apply

应用变更任务：

```
/opsx:apply
/opsx:apply --task 1.1
/opsx:apply --all
```

AI 按顺序执行 tasks.md 中的任务。

### archive

归档变更：

```
/opsx:archive
/opsx:archive --keep
```

AI：
1. 验证所有任务完成
2. 合并增量到 specs/
3. 移动到 archive/
4. 更新 CHANGELOG.md

### status

查看状态：

```
/opsx:status
```

### diff

查看差异：

```
/opsx:diff
```

## 生成的制品

### proposal.md

```markdown
# Proposal: Add Dark Mode

## Why

Users have requested dark mode for late-night usage.

## What

- Theme context provider
- Toggle component
- CSS variables
- localStorage persistence

## Scope

**In:** Dark mode toggle, system preference
**Out:** Custom themes, per-component styling
```

### specs/

```markdown
# Theme Specification

## Overview

The theme system supports light and dark modes.

## Data Model

```typescript
interface Theme {
  mode: 'light' | 'dark' | 'system';
}
```

## Behavior

- User toggle switches mode
- System preference detected on first load
- Preference persisted in localStorage
```

### design.md

```markdown
# Design: Dark Mode

## Architecture

```
ThemeContext
    ↓
ThemeProvider → CSS Variables
    ↓
Components ← useTheme()
```

## Implementation

1. Create ThemeContext
2. Add CSS variables to root
3. Create toggle component
4. Add localStorage sync
```

### tasks.md

```markdown
# Tasks: Dark Mode

## Phase 1: Core

- [ ] 1.1 Create ThemeContext
- [ ] 1.2 Add CSS variables
- [ ] 1.3 Create toggle component

## Phase 2: Persistence

- [ ] 2.1 Add localStorage sync
- [ ] 2.2 Detect system preference
```

## 自定义

### 自定义 AI 提示

在 `.openspec.yaml` 中：

```yaml
opsx:
  prompt_template: |
    Follow these guidelines:
    - Keep specs concise
    - Use TypeScript for data models
    - Include test scenarios
```

### OPSX 配置

```yaml
opsx:
  model: gpt-4
  temperature: 0.7
  max_tokens: 2000
```
