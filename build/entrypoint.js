import { writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { dirname, join, isAbsolute } from 'node:path';
import { fileURLToPath } from 'node:url';

import manifest from '../dist/custom-elements.json' with { type: 'json' };
import { getTagName } from './utils.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');

// Check if we're building the runtime multilingual bundle
const isRuntimeBuild = process.env.WARP_RUNTIME === 'true';

export function generateEntrypointFile(outputDir) {
  // Default to .tmp if no output directory specified
  // Handle both absolute and relative paths
  let targetDir;
  if (!outputDir) {
    targetDir = join(rootDir, '.tmp');
  } else if (isAbsolute(outputDir)) {
    targetDir = outputDir;
  } else {
    targetDir = join(rootDir, outputDir);
  }

  const exportStatements = manifest.modules
    // here we only want files called index.ts
    .filter((item) => item.path.match('index.ts') || item.path.match('slider.ts') || item.path.match('slider-thumb.ts'))
    .map((item) => `export * from './${item.path.replace('.ts', '.js')}';`)
    .join('\n');

  // For runtime builds, also export localization functions
  const localizationExport = isRuntimeBuild
    ? `\nexport { getLocale, setLocale, allLocales, sourceLocale, targetLocales } from './packages/localization.js';`
    : '';

  const whenDefinedStatements = manifest.modules
    .filter(getTagName)
    .map(getTagName)
    .map((tagName) => `customElements.whenDefined('${tagName}')`);

  // We want to be able to measure the performance of how teams are loading the library so we add this performance mark
  const whenAllDefinedCode = `
Promise.all([${whenDefinedStatements.join(',')}]).then(() => {
    performance.mark('vend/pc-design-system/warp-elements-loaded');
});`;

  const entrypointFile = `${exportStatements}${localizationExport}${whenAllDefinedCode}`;

  // Ensure target directory exists
  if (!existsSync(targetDir)) {
    mkdirSync(targetDir, { recursive: true });
  }

  writeFileSync(join(targetDir, 'entrypoint.js'), entrypointFile, { encoding: 'utf8' });
}
