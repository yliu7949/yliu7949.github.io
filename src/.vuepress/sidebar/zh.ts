import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      text: "计算机",
      icon: "laptop-code",
      prefix: "计算机/",
      link: "计算机/",
      children: "structure",
    },
  ],
});
