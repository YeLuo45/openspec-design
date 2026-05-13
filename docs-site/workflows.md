# 工作流

## 标准工作流

OpenSpec 支持多种工作流模式。

## 迭代工作流

最适合个人项目和小型团队：

```
1. 提出变更
   /opsx:propose "add feature X"

2. 完善规范
   编辑 specs/ 和 design.md

3. 实现任务
   /opsx:apply

4. 归档变更
   /opsx:archive
```

## 评审工作流

适合需要团队评审的场景：

```
1. 创建变更 (draft)
   /opsx:propose "refactor auth"

2. 分享评审
   openspec share --change refactor-auth

3. 收集反馈
   编辑 proposal.md

4. 应用变更
   /opsx:apply

5. 归档
   /opsx:archive
```

## 多仓库工作流

使用协调工作区跨仓库规划：

```
workspace/
├── changes/
│   ├── api-change/
│   └── web-change/
└── .openspec-workspace/
    ├── workspace.yaml
    └── local.yaml
```

### 链接配置

```yaml
# workspace.yaml
version: 1
name: platform
links:
  api: {}
  web: {}
```

```yaml
# local.yaml (on machine A)
paths:
  api: /Users/dev/repos/api
  web: /Users/dev/repos/web
```

```yaml
# local.yaml (on machine B)
paths:
  api: /home/dev/projects/api
  web: /home/dev/projects/web
```

## 增量合并

当应用变更时，增量自动合并到规范：

### 增量类型

```markdown
## Delta: Add new endpoint

### Added

New file `specs/api/users.md`:

```markdown
# Users API

## GET /users

Returns user list.
```
```

### Modified

File `specs/api/index.md`:

```diff
+ ## Users API
+ See [Users API](./users.md)
```

### Removed

Deleted file `specs/legacy.md`.
```

## 变更状态

| 状态 | 描述 |
|------|------|
| `draft` | 起草中 |
| `review` | 评审中 |
| `ready` | 准备好实现 |
| `applied` | 已应用 |
| `archived` | 已归档 |

## 命令参考

| 命令 | 描述 |
|------|------|
| `/opsx:propose` | 创建新变更 |
| `/opsx:apply` | 应用变更 |
| `/opsx:archive` | 归档变更 |
| `openspec diff` | 查看变更差异 |
| `openspec validate` | 验证规范 |
