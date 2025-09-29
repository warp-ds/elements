import { writeFileSync, existsSync, mkdirSync } from 'node:fs';
import manifest from '../dist/custom-elements.json' with { type: 'json' };

const outdir = new URL('../eik', import.meta.url).pathname;

if (!existsSync(outdir)) {
    mkdirSync(outdir, { recursive: true });
}

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

const selectors = manifest.modules.filter(getTagName).map((item) => `${getTagName(item)}:not(:defined)`);

// Each component hidden until defined.
// This does nothing if warp-clock is used but provides a better experience on any page where warp-clock is not used.
const perComp = selectors.map((s) => `${s}{opacity:0;}`).join('');

// Cloak hides until *any* of them is not defined
// 2s step-end is used to provide a CSS only fallback reveal in case of issues
const cloak = `.warp-cloak:has(${selectors.join(',')}){animation:2s step-end warp-fouce-cloak;} @keyframes warp-fouce-cloak {from {opacity: 0;} to {opacity: 1;}}`;

writeFileSync(new URL(`${outdir}/styles.css`, import.meta.url), perComp + cloak, { encoding: 'utf8' });