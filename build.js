import { writeFileSync, existsSync, mkdirSync } from 'node:fs';
import * as eik from '@eik/esbuild-plugin';
import { generateJetBrainsWebTypes } from 'custom-element-jet-brains-integration';
import { generateVsCodeCustomElementData } from 'custom-element-vs-code-integration';
import esbuild from 'esbuild';
// import { glob } from 'glob';

import { plugin as stylePlugin } from './build/index.js';
import manifest from './dist/custom-elements.json' with { type: 'json' };

// See https://github.com/break-stuff/cem-tools/tree/main/packages/vs-code-integration#implementation
// for how to configure VS Code as a consumer of these files.
//
// NB! You need to restart VS Code after a build to see updates to these files!
generateVsCodeCustomElementData(manifest, {
  outdir: './dist',
  typesSrc: 'parsedType', // since we use @wc-toolkit/type-parser the values for enum types are found here, not on `type`
});

// See https://github.com/break-stuff/cem-tools/tree/main/packages/jet-brains-integration#implementation
// for an explanation. We set `web-types` in `package.json` so users shouldn't need to do anything.
generateJetBrainsWebTypes(manifest, {
  outdir: './dist',
  typesSrc: 'parsedType', // since we use @wc-toolkit/type-parser the values for enum types are found here, not on `type`
});

// const components = glob.sync('packages/**/{react,index}.{js,ts}');
const toastApiPath = 'packages/toast/api.js';
const indexPath = 'entrypoint.js';
const version = process.argv[2];

const esbuildDefaults = {
  bundle: true,
  format: 'esm',
  sourcemap: true,
  target: 'es2018',
  minify: true,
  external: ['@warp-ds/elements-core'],
};

/**
 * Get the custom element tag name from a manifest entry
 * @param {object} entry - A CEM declaration or module entry
 * @returns {string|null} The tag name if available, else null
 */
function getTagName(entry) {
  // Some entries (like from declarations) put tagName directly
  if (entry.tagName) {
    return entry.tagName;
  }

  // Others nest it under 'customElement' metadata
  if (entry.customElement && entry.customElement.tagName) {
    return entry.customElement.tagName;
  }

  // Some tools stick it into 'declarations'
  if (Array.isArray(entry.declarations)) {
    for (const decl of entry.declarations) {
      if (decl.tagName) {
        return decl.tagName;
      }
    }
  }

  return null;
}

// const componentsMap = new Map();
// components.forEach(async (item) => {
//   const regex = /\/(.+)\/(react|index).(ts|js)/;
//   const match = item.match(regex);
//   if (item.includes('utils')) return;
//   if (!match) {
//     console.log('no match for', item);
//   }
//   componentsMap.set(match[1], { path: item, componentName: match[1], componentTag: `w-${match[1]}`, filename: match[2], extension: match[3]});
// });

// console.log(componentsMap)

function buildComponents(outDir, extraBuildOptions = {}) {
  if (!existsSync(outDir)) {
    mkdirSync(outDir, { recursive: true });
  }

  manifest.modules.map(async (item) => {
    try {
      console.log(`elements: building ${item.path}`);
      await esbuild.build({
        entryPoints: [path],
        outfile: `${outDir}${item.path.replace('.ts', '.js')}`,
        ...esbuildDefaults,
        ...extraBuildOptions,
      });
    } catch (err) {
      // console.error(err);
    }
  });

  const selectors = manifest.modules.map((item) => `${getTagName(item)}:not(:defined)`);

  // Each component hidden until defined.
  // This does nothing if warp-clock is used but provides a better experience on any page where warp-clock is not used.
  const perComp = selectors.map(s => `${s}{opacity:0;}`).join("");

  // Cloak hides until *any* of them is not defined
  // 2s step-end is used to provide a CSS only fallback reveal in case of issues
  const cloak = `.warp-cloak:has(${selectors.join(",")}){animation:2s step-end warp-fouce-cloak;} @keyframes warp-fouce-cloak {from {opacity: 0;} to {opacity: 1;}}`;

  writeFileSync(new URL(`${outDir}/styles.css`, import.meta.url), perComp + cloak, { encoding: 'utf8' });
}

async function buildToastApi(outDir, extraBuildOptions = {}) {
  console.log('elements: building api.js');
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

function createEntrypoint() {
  const componentExports = manifest.modules.map((item) => `export * from './${item.path}';`);
  console.log('writing index.js entrypoint file with contents:', componentExports.join('\n'));
  writeFileSync(new URL(`./entrypoint.js`, import.meta.url), componentExports.join('\n'), { encoding: 'utf8' });
}

async function buildIndex(outDir, extraBuildOptions = {}) {
  console.log('elements: building index.js');
  createEntrypoint();
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

console.log('Building elements for: ', version);

if (version === 'eik') {
  await eik.load();
  buildComponents('eik', { plugins: [eik.plugin()] });
  buildToastApi('eik', { plugins: [eik.plugin()] });
  buildIndex('eik', { plugins: [eik.plugin()] });
} else if (version === 'styles') {
  console.log('Building styles: remember to commit changes');
  buildIndex('dist', { plugins: [stylePlugin()] });
} else {
  buildComponents('dist');
  buildToastApi('dist');
  buildIndex('dist');
}

