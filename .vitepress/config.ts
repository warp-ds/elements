import fs from "node:fs";
import path from "node:path";
import { presetDocs } from "@warp-ds/preset-docs";
import { presetWarp } from "@warp-ds/uno";
import { classes as componentClasses } from "@warp-ds/css/component-classes/classes";
import markdownItContainer from 'markdown-it-container';
import uno from "unocss/vite";
import { defineConfig } from "vitepress";
import { docsClasses } from "./safelist.js";
import { supported as supportedClasses } from "./supported.js";

function generateComponentsSidebar() {
  type Entry = {
    text: string;
    items: Array<{ text: string; link: string }>;
  };
  const items: Array<Entry> = [];
  const components = fs.readdirSync(path.join(__dirname, "..", "packages"), {
    withFileTypes: true,
  });
  for (const dir of components) {
    if (dir.isFile()) continue;
    const entry: Entry = {
      text: dir.name,
      items: [],
    };
    try {
      const docs = fs.readdirSync(
        path.join(__dirname, "..", "packages", dir.name, "docs"),
      );
      for (const doc of docs) {
        entry.items.push({
          text: doc,
          link: `/packages/${dir.name}/docs/${doc}`,
        });
      }
    } catch (e) {}
    items.push(entry);
  }
  return items;
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Warp DS Dev Server",
  description: "Dev  server for local preview of documentation",
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark',
    },
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => {
          return tag.includes("-");
        },
      },
    },
  },
  vite: {
    plugins: [
      uno({ presets: [presetWarp({ skipResets: true })] }),
      uno({
        presets: [presetWarp(), presetDocs()],
        mode: "shadow-dom",
        shortcuts: [
          {
            'ex-font': 'pd-text-sm font-bold pd-font-mono pd-text-white',
            'ex-font-dark': 'pd-text-sm font-bold pd-font-mono pd-text-slate-900',
            'ex-box': 'ex-font p-24 rounded pd-shadow-xl flex items-center justify-center',
            'ex-inner-box': 'p-24 rounded pd-shadow-xl mx-auto pd-bg-white pd-text-slate-500 max-w-[300]',
            'ex-pic-no':
              'absolute top-10 left-10 h-32 w-32 text-center pd-bg-white rounded-full pd-text-slate-800 leading-[32]',
          },
        ],
        safelist: [...componentClasses, ...supportedClasses, ...docsClasses],
      }),
    ],
  },
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://assets.finn.no/pkg/@warp-ds/fonts/~1/dba-dk.css",
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://assets.finn.no/pkg/@warp-ds/fonts/~1/finn-no.css",
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://assets.finn.no/pkg/@warp-ds/fonts/~1/tori-fi.css",
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://assets.finn.no/pkg/@warp-ds/fonts/~1/blocket-se.css",
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://assets.finn.no/pkg/@warp-ds/fonts/~1/neutral-com.css",
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://assets.finn.no/pkg/@warp-ds/fonts/~1/vend-com.css",
      },
    ],
  ],
  mpa: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Components", link: "/components" },
    ],

    sidebar: [
      {
        text: "Components",
        items: generateComponentsSidebar(),
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
