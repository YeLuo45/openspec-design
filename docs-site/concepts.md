# 核心概念

## 设计理念

OpenSpec 构建于四大原则之上：

```
fluid not rigid         — 无阶段门控，按需工作
iterative not waterfall — 边做边学，迭代完善
easy not complex        — 轻量设置，开箱即用
brownfield-first        — 增量变更，轻松修改现有系统
```

### 为什么这些原则重要

**Fluid not rigid.** 传统规格系统锁定你的阶段：先计划，再实现，然后结束。OpenSpec 更灵活——你可以按对工作有意义的方式创建制品。

**Iterative not waterfall.** 需求会变。理解会深化。当初看起来好的方法在看到代码库后可能不成立。OpenSpec 接受这一现实。

**Easy not complex.** 一些规格框架需要大量设置、僵化格式或重量级流程。OpenSpec 不碍事——几秒钟初始化，立即开始工作，只在需要时定制。

**Brownfield-first.** 大多数软件工作不是从头构建——而是修改现有系统。OpenSpec 的增量式方法让你轻松指定对现有行为的变更，而不仅仅是描述新系统。

## 大局观

OpenSpec 将工作组织为两个主要区域：

```
┌────────────────────────────────────────────────────────────────────┐
│                        openspec/                                   │
│                                                                    │
│   ┌─────────────────────┐      ┌───────────────────────────────┐   │
│   │       specs/        │      │         changes/              │   │
│   │                     │      │                               │   │
│   │  Source of truth    │◄─────│  Proposed modifications      │   │
│   │  How your system    │ merge│  Each change = one folder     │   │
│   │  currently works    │      │  Contains artifacts + deltas │   │
│   │                     │      │                               │   │
│   └─────────────────────┘      └───────────────────────────────┘   │
│                                                                    │
└────────────────────────────────────────────────────────────────────┘
```

**Specs** 是真相来源——描述系统当前如何运作。

**Changes** 是提议的修改——它们存在于独立文件夹中，直到你准备好合并它们。

这种分离很关键。你可以在不冲突的情况下并行处理多个变更。你可以在变更影响主要规范之前审查它。当你归档一个变更时，它的增量会干净地合并到真相来源中。

## 协调工作区

工作区支持正在积极开发中。

Repo-local OpenSpec 项目是正确默认值，当一个仓库拥有规划、实现和归档流程时。

```
workspace-folder/
├── changes/                       # 工作区级规划
└── .openspec-workspace/
    ├── workspace.yaml             # 共享工作区身份和链接名称
    └── local.yaml                 # 本机器的本地路径
```

```
repo-root/
└── openspec/
    ├── specs/
    └── changes/
```

## 核心对象

### Spec（规范）

规范是描述系统当前行为的文档。它们作为真相来源。

### Change（变更）

变更是提议的修改。每个变更是一个文件夹，包含：
- `proposal.md` — 为什么做这个变更
- `specs/` — 需求和场景
- `design.md` — 技术方法
- `tasks.md` — 实现检查清单

### Delta（增量）

增量描述了对现有规范的修改。它们是变更和 specs 之间的桥梁。

### Artifact（制品）

制品是 OpenSpec 创建的文件。标准制品包括：
- proposal.md
- specs/*.md
- design.md
- tasks.md
- CHANGELOG.md

## 变更生命周期

```
propose → draft → review → apply → archive
   ↓
  创建变更   完善   评审   实现   归档
```

### OPSX 工作流

```
/opsx:propose "add-dark-mode"
  → 创建 openspec/changes/add-dark-mode/
  → ✓ proposal.md
  → ✓ specs/
  → ✓ design.md
  → ✓ tasks.md

/opsx:apply
  → 实现 tasks

/opsx:archive
  → 归档到 openspec/changes/archive/
  → 规范更新
```
