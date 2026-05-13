import { defineConfig } from "vitepress";

export default defineConfig({
  title: "OpenSpec Design",
  description: "OpenSpec 架构设计文档站 - Fluid Spec Framework",
  lang: "zh-CN",
  base: "/openspec-design/",

  head: [
    ["link", { rel: "icon", type: "image/svg+xml", href: "/logo.svg" }],
  ],

  themeConfig: {
    logo: "/logo.svg",

    nav: [
      { text: "首页", link: "/" },
      { text: "核心概念", link: "/concepts" },
      { text: "规范管理", link: "/specs" },
      { text: "变更管理", link: "/changes" },
      { text: "工作流", link: "/workflows" },
      { text: "CLI 参考", link: "/cli" },
    ],

    sidebar: [
      {
        text: "文档",
        items: [
          { text: "首页", link: "/" },
          { text: "核心概念", link: "/concepts" },
          { text: "规范管理", link: "/specs" },
          { text: "变更管理", link: "/changes" },
          { text: "工作流", link: "/workflows" },
          { text: "CLI 参考", link: "/cli" },
          { text: "OPSX AI 工作流", link: "/opsx" },
          { text: "定制化", link: "/customization" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/YeLuo45/openspec-design" },
    ],

    footer: {
      message: "基于 OpenSpec 开源项目构建",
      copyright: "Copyright © 2025-present OpenSpec Contributors",
    },
  },
});
