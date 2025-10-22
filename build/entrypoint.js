import { writeFileSync } from 'node:fs';

import manifest from '../dist/custom-elements.json' with { type: 'json' };

const componentExports = manifest.modules.map((item) => `export * from './${item.path.replace('.ts', '')}';`);
writeFileSync(new URL('../entrypoint.js', import.meta.url), componentExports.join('\n'), { encoding: 'utf8' });
