import { writeFileSync } from 'node:fs';

import manifest from '../dist/custom-elements.json' with { type: 'json' };
import { getTagName } from './utils.js';

export function generateEntrypointFile() {
    const exportStatements = manifest.modules
        // here we only want files called index.ts
        .filter((item) => item.path.match('index.ts'))
        .map((item) => `export * from './${item.path.replace('.ts', '.js')}';`)
        .join('\n')

    const whenDefinedStatements = manifest.modules
        .filter(getTagName)
        .map(getTagName)
        .map((tagName) => `customElements.whenDefined('${tagName}')`);

    // We want to be able to measure the performance of how teams are loading the library so we add this performance mark
    const whenAllDefinedCode = `
Promise.all([${whenDefinedStatements.join(',')}]).then(() => {
    performance.mark('warp-ds-elements-loaded');
});`

    const entrypointFile = `${exportStatements}${whenAllDefinedCode}`
    writeFileSync(new URL('../.tmp/entrypoint.js', import.meta.url), entrypointFile, { encoding: 'utf8' });
}
