import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "我的笔记",
  description: "我的笔记",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
