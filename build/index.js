import path from "node:path";
import { readFile } from "node:fs/promises";
import * as lightning from "lightningcss";
import { createGenerator } from "@unocss/core";
import { presetWarp } from "@warp-ds/uno";

const uno = await createGenerator({
  presets: [presetWarp({ skipResets: true })],
  safelist: [],
});

/**
 *
 * @param {string} content
 * @param {object} options
 * @param {boolean} [options.minify]
 * @returns lightningcss minified css
 */
const buildCSS = async (content, options = {
  minify: false
}) => {
  const { css } = await uno.generate(content);
  let output = css;

  const { code } = lightning.transform({
    filename: "",
    code: Buffer.from(css),
    minify: options.minify,
    targets: {
      // eslint-disable-next-line no-bitwise
      safari: 13 << 16,
    },
  });
  output = code.toString();

  return output.replace(/\\/g, "\\\\");
};


/**
 * @param {object} options
 * @param {RegExp} [options.filter] 
 * @param {string} [options.placeholder] 
 * @param {boolean} [options.minify] 
 * @returns object
 */
export const plugin = ({ filter = /.*?/, placeholder = '@warp-css', minify = true } = {}) => {
  /** @type {import('esbuild').Plugin}*/
  return {
    name: "warp-esbuild-plugin",
    setup(build) {
      build.onLoad({ filter }, async (args) => {
        const { ext } = path.parse(args.path);
        let contents = await readFile(args.path, "utf8");
        if (contents.includes(placeholder)) {
          const css = await buildCSS(placeholder, { minify });
          contents = contents.replace(placeholder, css);
        } 
        return {
          contents,
          loader: ext.replace(".", ""),
        };
      });
    },
  }
}
