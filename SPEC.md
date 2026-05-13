# OpenSpec Design Specification

## 1. Project Overview

**Project Name**: openspec-design
**Type**: Architecture Design Documentation Site
**Core Functionality**: VitePress-based documentation site for OpenSpec architecture analysis
**Target Users**: Developers, contributors, and teams using OpenSpec for spec management

## 2. Technical Stack

| Layer | Technology |
|-------|------------|
| Documentation | VitePress |
| Theme | Custom Light/Dark Adaptive Theme |
| Deployment | GitHub Pages (workflow mode) |
| Source | Fission-AI/OpenSpec (Node.js/TypeScript) |

## 3. Module Design

### 3.1 Documentation Modules

| Module | Description |
|--------|-------------|
| index.md | Home page with feature overview |
| concepts.md | Core philosophy, principles, and big picture |
| specs.md | Specs directory structure and specification types |
| changes.md | Change management lifecycle and workflows |
| workflows.md | Iteration, review, and multi-repo workflows |
| cli.md | CLI command reference |
| opsx.md | OPSX AI-assisted workflow (/opsx:propose, apply, archive) |
| customization.md | Configuration, templates, hooks, and integrations |
| getting-started.md | Quick start guide |

### 3.2 Visual Design

- **Light Mode**: Clean white (#ffffff) with blue (#228be6) and teal (#20c997) accents
- **Dark Mode**: Deep blue (#1a1a2e) with teal (#38d9a9) accents
- **Typography**: System fonts with monospace for code
- **Layout**: VitePress default layout with adaptive color scheme

## 4. Deployment

- **URL**: https://yeluo45.github.io/openspec-design/
- **Build**: `pnpm run build` in docs-site/
- **Output**: docs-site/.vitepress/dist/
- **Workflow**: GitHub Actions workflow mode

## 5. Git Repository

- **Remote**: git@github.com:YeLuo45/openspec-design.git
- **Branch**: main (source)
