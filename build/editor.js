// Build editor integrations
// Depends on custom element manifest file first being generated with:
// custom-elements-manifest analyze --config .cem/custom-element-manifest.config.js

import { generateJetBrainsWebTypes } from 'custom-element-jet-brains-integration';

import manifest from '../dist/custom-elements.json' with { type: 'json' };

// See https://github.com/break-stuff/cem-tools/tree/main/packages/jet-brains-integration#implementation
// for an explanation. We set `web-types` in `package.json` so users shouldn't need to do anything.
generateJetBrainsWebTypes(manifest, {
  outdir: new URL('../dist', import.meta.url).pathname,
  typesSrc: 'parsedType', // since we use @wc-toolkit/type-parser the values for enum types are found here, not on `type`
});
