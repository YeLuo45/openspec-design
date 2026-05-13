# CLI 参考

## 安装

```bash
npm install -g @fission-ai/openspec
```

或使用 npx：

```bash
npx @fission-ai/openspec <command>
```

## 全局选项

| 选项 | 描述 |
|------|------|
| `--help`, `-h` | 显示帮助 |
| `--version`, `-v` | 显示版本 |
| `--cwd <path>` | 工作目录 |
| `--config <file>` | 配置文件 |

## 命令

### init

初始化 OpenSpec：

```bash
openspec init
openspec init --path ./docs
```

### validate

验证规范：

```bash
openspec validate
openspec validate --specs ./openspec/specs
openspec validate --strict
```

### diff

查看变更差异：

```bash
openspec diff
openspec diff --change add-dark-mode
openspec diff --from HEAD~1 --to HEAD
```

### apply

应用变更：

```bash
openspec apply
openspec apply --change add-dark-mode
openspec apply --dry-run
```

### archive

归档变更：

```bash
openspec archive
openspec archive --change add-dark-mode
openspec archive --to openspec/changes/archive/2025-01-15
```

### status

查看状态：

```bash
openspec status
openspec status --change add-dark-mode
```

### list

列出变更：

```bash
openspec list
openspec list --status draft
openspec list --archived
```

### share

分享变更：

```bash
openspec share --change add-dark-mode
openspec share --change add-dark-mode --format markdown
```

## 配置文件

`openspec.config.yaml`:

```yaml
version: 1
specs:
  path: ./openspec/specs
changes:
  path: ./openspec/changes
archive:
  path: ./openspec/changes/archive
  prefix: "{date}-{name}"
validation:
  strict: false
  include:
    - "**/*.md"
  exclude:
    - "**/node_modules/**"
```

## 退出码

| 退出码 | 描述 |
|--------|------|
| 0 | 成功 |
| 1 | 错误 |
| 2 | 验证失败 |
| 3 | 变更不存在 |
