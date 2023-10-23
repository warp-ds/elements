import { build } from "vite";
//import esbuild from "esbuild";
import { classes } from '@warp-ds/css/component-classes/classes';
import { presetWarp } from '@warp-ds/uno';
import uno from 'unocss/vite';
import pkg from "glob";
const { glob } = pkg;

const imports = glob.sync("packages/**/index.js");

imports.forEach(async (item) => {
  const regex = /\/(\w+)\//;
  const match = item.match(regex);

  if (item.includes("utils")) return;

  // could use esbuild instead of vite but since we are using unocss plugin, vite is a better choice
  /*try {
    await esbuild.build({
      entryPoints: [item],
      bundle: true,
      outfile: `dist/${match[1]}.js`,
      format: "esm",
      sourcemap: true,
      target: "es2017",
      minify: true,
      external: ["lit"],
    });
  } catch (err) {
    console.error(err);
  }*/

  await build({
    configFile: false,
    plugins: [
      uno({
        presets: [presetWarp()],
        mode: 'shadow-dom',
        safelist: classes,
      })
    ],
    build: {
      emptyOutDir: false,
      lib: {
        formats: ["es"],
        entry: item,
        fileName: `packages/${match[1]}/index`,
      },
      rollupOptions: {
        external: ["lit", "lit/directives/class-map.js", "lit/directives/if-defined.js"],
        output: {
          globals: { lit: "lit" },
        },
      },
    },
  }); 
});
