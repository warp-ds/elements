// @ts-nocheck

import fs from "fs";
import path from "path";
import postcss from "postcss";
import autoprefixer from "autoprefixer";
import atImport from "postcss-import";
import importSvg from "postcss-import-svg";
import { createRequire } from "module";

const require = createRequire(import.meta.url); // have to do these hacks it seems because import.meta.resolve is cranky
const iconsLocation = path.resolve(
  path.dirname(require.resolve("@warp-ds/icons/package.json")),
  "dist",
);

const from = "./elements.css";
const css = fs.readFileSync(from, "utf8");

const to = "./dist/elements.min.js";
const plugins = [
  atImport,
  importSvg({
    paths: [iconsLocation],
  }),
  autoprefixer,
];
const result = await postcss(plugins).process(css, { from, to });

const constructedStylesheet = `import {css} from 'lit';
export const styles = css\`
${result}
\`;
`;
fs.mkdirSync("./dist", { recursive: true });
fs.writeFileSync(to, constructedStylesheet, { encoding: "utf-8" });
