# 变更管理

## Changes 目录

`changes/` 目录包含提议的修改——每个变更是一个独立文件夹。

```
openspec/
├── specs/
└── changes/
    ├── add-dark-mode/
    │   ├── proposal.md
    │   ├── specs/
    │   │   └── theme.md
    │   ├── design.md
    │   └── tasks.md
    └── add-api-cache/
        └── ...
```

## 变更结构

每个变更文件夹包含：

| 文件 | 描述 | 状态 |
|------|------|------|
| `proposal.md` | 为什么做这个变更 | 必需 |
| `specs/` | 新规范或修改的规范 | 可选 |
| `design.md` | 技术设计和方法 | 必需 |
| `tasks.md` | 实现检查清单 | 必需 |
| `artifacts/` | 附加制品 | 可选 |

## 变更生命周期

```
┌──────────┐
│ propose  │  创建变更文件夹
└────┬─────┘
     ↓
┌──────────┐
│  draft   │  完善规范和设计
└────┬─────┘
     ↓
┌──────────┐
│ review   │  评审和反馈
└────┬─────┘
     ↓
┌──────────┐
│  apply   │  执行实现
└────┬─────┘
     ↓
┌──────────┐
│ archive  │  归档到历史
└──────────┘
```

## 创建变更

### 手动创建

```bash
mkdir -p openspec/changes/my-feature
```

### OPSX AI 创建

```bash
/opsx:propose "add user profile page"
```

AI 自动创建：
- `proposal.md`
- `specs/`
- `design.md`
- `tasks.md`

## 提案格式

```markdown
# Proposal: Add Dark Mode

## Why

Users have requested a dark mode option for the UI.
This improves late-night usage and reduces eye strain.

## What

- Add theme context provider
- Create ThemeToggle component
- Add CSS variables for colors
- Persist preference in localStorage

## Scope

**In scope:**
- Dark mode toggle
- System preference detection

**Out of scope:**
- Per-component theming
- Theme customization
```

## 任务格式

```markdown
# Tasks: Add Dark Mode

## Implementation

- [ ] 1.1 Add theme context provider
- [ ] 1.2 Create toggle component
- [ ] 2.1 Add CSS variables
- [ ] 2.2 Wire up localStorage
- [ ] 3.1 Add system preference detection

## Verification

- [ ] Toggle works correctly
- [ ] Preference persists across sessions
- [ ] System preference detected on first load
```

## 并行变更

多个变更可以并行开发：

```
changes/
├── feature-a/
│   └── tasks.md
├── feature-b/
│   └── tasks.md
└── bugfix-c/
    └── tasks.md
```

每个变更独立，不会冲突。

## 合并规范

当归档变更时，增量合并到 specs：

```
changes/add-dark-mode/
├── specs/        ← 变更的规范
│   └── theme.md
└── tasks.md

↓ openspec apply + archive

specs/
└── theme.md      ← 合并后的规范
```

## 变更评审

### 评审检查清单

- [ ] proposal.md 清晰描述动机
- [ ] specs/ 正确定义行为
- [ ] design.md 包含技术方法
- [ ] tasks.md 有清晰的检查清单
- [ ] 没有与现有规范冲突

### 评审流程

```bash
openspec diff --change add-dark-mode
# Review the proposed changes

openspec review --change add-dark-mode
# Add review comments
```
