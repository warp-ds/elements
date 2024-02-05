import esbuild from "esbuild";
import pkg from "glob";
const { glob } = pkg;

const components = glob.sync("packages/**/index.js");
const toastApiPath = "packages/toast/api.js";
const indexPath = "index.js";

const esbuildDefaults = {
  bundle: true,
  format: "esm",
  sourcemap: true,
  target: "es2017",
  minify: false,
  external: ["lit", "@warp-ds/elements-core"],
};

function buildComponents(outDir, extraBuildOptions = {}) {
  components.forEach(async (item) => {
    const regex = /\/(\w+)\//;
    const match = item.match(regex);

    if (item.includes("utils")) return;
    console.log(`elements: building ${match[1]}.js`);

    try {
      await esbuild.build({
        entryPoints: [item],
        outfile: `${outDir}/packages/${match[1]}/index.js`,
        ...esbuildDefaults,
        ...extraBuildOptions,
      });
    } catch (err) {
      console.error(err);
    }
  });
}

async function buildToastApi(outDir, extraBuildOptions = {}) {
  console.log("elements: building api.js");
  try {
    await esbuild.build({
      entryPoints: [toastApiPath],
      outfile: `${outDir}/api.js`,
      ...esbuildDefaults,
      ...extraBuildOptions,
    });
  } catch (err) {
    console.error(err);
  }
}

async function buildIndex(outDir, extraBuildOptions = {}) {
  console.log("elements: building index.js");
  try {
    await esbuild.build({
      entryPoints: [indexPath],
      outfile: `${outDir}/index.js`,
      ...esbuildDefaults,
      ...extraBuildOptions,
    });
  } catch (err) {
    console.error(err);
  }
}

console.log("Building elements");

buildComponents("dist");
buildToastApi("dist");
buildIndex("dist");
