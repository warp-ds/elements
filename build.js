import * as eik from '@eik/esbuild-plugin';
import { generateJetBrainsWebTypes } from 'custom-element-jet-brains-integration';
import { generateVsCodeCustomElementData } from 'custom-element-vs-code-integration';
import esbuild from 'esbuild';
import { glob } from 'glob';

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

const components = glob.sync('packages/**/{react,index}.{js,ts}');
const toastApiPath = 'packages/toast/api.js';
const indexPath = 'index.js';
const version = process.argv[2];

const esbuildDefaults = {
  bundle: true,
  format: 'esm',
  sourcemap: true,
  target: 'es2018',
  minify: true,
  external: ['lit', '@warp-ds/elements-core'],
};

function buildComponents(outDir, extraBuildOptions = {}) {
  components.forEach(async (item) => {
    const regex = /\/(.+)\/(react|index).(ts|js)/;
    const match = item.match(regex);

    if (item.includes('utils')) return;
    if (!match) {
      console.log('no match for', item);
    }

    try {
      console.log(`elements: building ${match[1]}/${match[2]}.${match[3]}`);
      await esbuild.build({
        entryPoints: [item],
        outfile: `${outDir}/packages/${match[1]}/${match[2]}.js`,
        ...esbuildDefaults,
        ...extraBuildOptions,
      });
    } catch (err) {
      console.error(err);
    }
  });
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

async function buildIndex(outDir, extraBuildOptions = {}) {
  console.log('elements: building index.js');
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
