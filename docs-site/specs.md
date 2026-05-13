# 规范管理

## Specs 目录

`specs/` 目录是 OpenSpec 的真相来源——它描述系统当前如何运作。

```
openspec/
├── specs/
│   ├── index.md
│   ├── api/
│   │   ├── endpoints.md
│   │   └── schemas.md
│   └── ui/
│       ├── components.md
│       └── pages.md
└── changes/
```

## 规范类型

### 索引规范

`specs/index.md` 是规范的入口点：

```markdown
# System Specification

## Modules

- [API](./api/) - Backend API specification
- [UI](./ui/) - User interface specification

## Overview

This document describes...
```

### 领域规范

按领域组织的规范：

```
specs/
├── domain/
│   ├── user.md
│   ├── order.md
│   └── payment.md
└── system/
    ├── auth.md
    └── logging.md
```

### API 规范

API 规范描述接口：

```markdown
# API Specification

## Endpoints

### GET /users

Returns a list of users.

**Request**
- Query: `page`, `limit`, `search`

**Response**
```json
{
  "users": [...],
  "total": 100,
  "page": 1
}
```

**Scenarios**
- No users exist → returns empty array
- Invalid page → returns 400
```

### 场景规范

每个 API 端点都应附带场景：

```markdown
## Scenarios

### Scenario: User not found

**Given** the user ID "123" does not exist
**When** GET /users/123 is called
**Then** returns 404 with error body
```

## 规范编写

### 结构

每个规范文档应包含：

```markdown
# Module Name

> One sentence description

## Overview
Detailed description of the module

## API Reference
Endpoint specifications

## Data Model
Data structures

## Scenarios
Behavioral scenarios

## Constraints
Known limitations
```

### 增量格式

规范使用增量来描述变更：

```markdown
## Delta: Add user authentication

### Added

#### `specs/auth.md` (new)

```markdown
# Authentication

## Login Endpoint

POST /auth/login
```

### Modified

#### `specs/api.md`

```diff
+ ## Auth Headers
+ All authenticated requests require `Authorization: Bearer <token>`
```

### Removed

#### `specs/legacy.md`

Removed the legacy auth endpoints.
```

## 规范验证

OpenSpec CLI 可以验证规范：

```bash
openspec validate
openspec validate --specs ./specs
```

## 规范更新

当应用变更时，规范通过增量自动更新：

```bash
openspec apply --change add-dark-mode
# Deltas are merged into specs/
```
