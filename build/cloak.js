// produces styles.css in the eik folder for upload with the main
// production build file. This CSS file provides page cloaking styles
// Page cloaking hides the page contents until the components are defined
// and includes a 2 second fallback in case something fails

import { existsSync, mkdirSync, writeFileSync } from 'node:fs';

import manifest from '../dist/custom-elements.json' with { type: 'json' };
import { getTagName } from './utils.js';

const outdir = new URL('../eik', import.meta.url).pathname;

if (!existsSync(outdir)) {
  mkdirSync(outdir, { recursive: true });
}

const selectors = manifest.modules.filter(getTagName).map((item) => `${getTagName(item)}:not(:defined)`);

// Each component hidden until defined.
// This does nothing if warp-clock is used but provides a better experience on any page where warp-clock is not used.
const perComp = selectors.map((s) => `${s}{opacity:0;}`).join('');

// Cloak hides until *any* of them is not defined
// 2s step-end is used to provide a CSS only fallback reveal in case of issues
const cloak = `.warp-cloak:has(${selectors.join(',')}){animation:2s step-end warp-fouce-cloak;} @keyframes warp-fouce-cloak {from {opacity: 0;} to {opacity: 1;}}`;

writeFileSync(new URL(`${outdir}/styles.css`, import.meta.url), perComp + cloak, { encoding: 'utf8' });
