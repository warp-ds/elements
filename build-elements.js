// @ts-nocheck

import fs from 'fs';
import path from 'path';
import postcss from 'postcss';
import tailwind from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import atImport from 'postcss-import';
import presetEnv from 'postcss-preset-env';
import importSvg from 'postcss-import-svg';
import { breakpoints as customMedia } from '@fabric-ds/css/colors.js';
import tailwindConfig from '@fabric-ds/css/tailwind-config';
import { createRequire } from 'module';
import { classes } from '@fabric-ds/css/component-classes/list.js';

const require = createRequire(import.meta.url); // have to do these hacks it seems because import.meta.resolve is cranky
const iconsLocation = path.resolve(path.dirname(require.resolve('@fabric-ds/icons/package.json')), 'dist');

const from = './elements.css';
const to = './dist/elements.min.js';
const css = fs.readFileSync(from, 'utf-8');
const plugins = [
    atImport,
    tailwind({
        ...tailwindConfig,
        purge: {
            enabled: true,
            content: ['./packages/**/*.js'],
            safelist: classes,
        },
    }),
    presetEnv({
        stage: 0,
        browsers: 'extends @finn-no/browserslist-config',
        importFrom: { customMedia },
        features: {
            'focus-visible-pseudo-class': false,
        },
    }),
    importSvg({
        paths: [iconsLocation],
    }),
    autoprefixer,
    cssnano({ preset: 'default' }),
];
const result = await postcss(plugins).process(css, { from, to });
const replaced = result.css.replaceAll('\\:', '\\\\:').replaceAll('--tw-', '--f-');
const constructedStylesheet = `import {css} from 'lit';
export const styles = css\`
${replaced}
\`;
`;
fs.mkdirSync('./dist', { recursive: true });
fs.writeFileSync(to, constructedStylesheet, { encoding: 'utf-8' });
