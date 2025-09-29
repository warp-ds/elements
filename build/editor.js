import { generateJetBrainsWebTypes } from 'custom-element-jet-brains-integration';
import { generateVsCodeCustomElementData } from 'custom-element-vs-code-integration';

import manifest from '../dist/custom-elements.json' with { type: 'json' };

// See https://github.com/break-stuff/cem-tools/tree/main/packages/vs-code-integration#implementation
// for how to configure VS Code as a consumer of these files.
//
// NB! You need to restart VS Code after a build to see updates to these files!
generateVsCodeCustomElementData(manifest, {
  outdir: new URL('../dist', import.meta.url).pathname,
  typesSrc: 'parsedType', // since we use @wc-toolkit/type-parser the values for enum types are found here, not on `type`
});

// See https://github.com/break-stuff/cem-tools/tree/main/packages/jet-brains-integration#implementation
// for an explanation. We set `web-types` in `package.json` so users shouldn't need to do anything.
generateJetBrainsWebTypes(manifest, {
  outdir: new URL('../dist', import.meta.url).pathname,
  typesSrc: 'parsedType', // since we use @wc-toolkit/type-parser the values for enum types are found here, not on `type`
});