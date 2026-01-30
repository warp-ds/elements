import { writeFileSync } from 'node:fs';

import manifest from '../dist/custom-elements.json' with { type: 'json' };
import { getTagName } from './utils.js';

export function generateEntrypointFile() {
  const exportStatements = manifest.modules
    // All component files are now named after the component (e.g., button.ts, slider.ts)
    .map((item) => `export * from './${item.path.replace('.ts', '.js')}';`)
    .join('\n');

  // Backwards compatibility: re-export toast API functions (toast, removeToast, updateToast)
  // These were previously exported via packages/toast/index.ts in the CEM manifest
  const backwardsCompatExports = `
export { toast, removeToast, updateToast } from './packages/toast/api.js';`;

  const whenDefinedStatements = manifest.modules
    .filter(getTagName)
    .map(getTagName)
    .map((tagName) => `customElements.whenDefined('${tagName}')`);

  // We want to be able to measure the performance of how teams are loading the library so we add this performance mark
  const whenAllDefinedCode = `
Promise.all([${whenDefinedStatements.join(',')}]).then(() => {
    performance.mark('vend/pc-design-system/warp-elements-loaded');
});`;

  const entrypointFile = `${exportStatements}${backwardsCompatExports}${whenAllDefinedCode}`;
  writeFileSync(new URL('../.tmp/entrypoint.js', import.meta.url), entrypointFile, { encoding: 'utf8' });
}
