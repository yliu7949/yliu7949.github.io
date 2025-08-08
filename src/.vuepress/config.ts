import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/en/": {
      lang: "en-US",
      title: "yliu7949's Blog",
      description: "yliu7949's blog",
    },
    "/": {
      lang: "zh-CN",
      title: "我的笔记",
      description: "yliu7949 的博客",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
