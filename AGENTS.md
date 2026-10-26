# @warp-ds/elements

Lit web components for the Warp design system, published to internal npm registry and Eik. Each component is a custom element named `w-<name>`. The default branch is `next`.

## Setup

```sh
pnpm install
pnpm messages:compile                  # compiled locale files are gitignored; components fail to import without them
pnpm exec playwright install chromium  # rerun when Playwright is upgraded
```

Storybook (`pnpm storybook`, port 63900) also needs `pnpm build` first, because it reads `dist/custom-elements.json`.

## Fast checks

Run tests for individual components, type checks and linters to do fast checks that only takes a few seconds.

To prove UI behavior, use the `verify-elements` skill (`.agents/skills/verify-elements/SKILL.md`), which drives components in a real browser and captures events, the accessibility tree and screenshots.

Before opening a PR, run `pnpm test`, which runs Chromium, Firefox and WebKit (`pnpm exec playwright install` first). CI also runs `pnpm lint`, `pnpm build`, `pnpm lint:package`, `pnpm test:module-resolution` and `pnpm test:output-validation`.

## Fixing a bug

`ctl` is `node .agents/skills/verify-elements/ctl.mjs`, the command-line tool from the `verify-elements` skill.

1. Reproduce the bug with `ctl` before you change code. Start from the closest command block in `packages/<name>/features/`.
2. Add a Vitest test that fails without the fix.
3. Fix it, run your reproduction again and keep the evidence: `events`, `snapshot` and a `screenshot`, as described in the skill's Evidence section.
4. If the behavior changed, update the feature file and run `ctl check` on it.

If you can't explain the behavior yet, your first fix doesn't work, or the engines disagree, follow `.agents/skills/verify-elements/debugging.md`.

Fix only the bug you were asked to fix. If you find another one along the way, leave it and check whether it's already filed with `gh issue list --repo warp-ds/elements --state all --search "<words>"`. Then tell the user about it, with a link to the existing issue or a draft for a new one: steps to reproduce, expected and actual. 

## Layout

A component package in `packages/<name>/` typically contains:

- `<name>.ts`: the custom element.
- `styles.ts`: component CSS as a Lit `css` template.
- `react.ts`: the React wrapper, built with `@lit/react`.
- `<name>.test.ts`, `<name>.a11y.test.ts`, `<name>.hydration.test.ts`: Vitest browser-mode tests.
- `<name>.stories.ts`, `<name>.react.stories.tsx`: Storybook stories.
- `docs/`: `usage.md`, `accessibility.md`, `examples.md`, `styling.md`. `pnpm build:docs` publishes these, so write them for consumers.
- `locales/<lang>/messages.po`: Lingui translations.

## Conventions

- The custom elements manifest is generated from JSDoc, and types, React wrappers and docs are generated from the manifest. Document every public property. Events are typed only when annotated with `@fires`. Mark non-public members `private` or `@internal`.
- A new component must be added to `globs` in `.cem/custom-element-manifest.config.js`, to `include` in `tsconfig.json`, and as a `react/<name>` entry under `typesVersions` in `package.json`. The `./*` wildcard in `exports` already covers it. Copy the combobox's entries.
- User-facing strings go through `i18n._({ id, message, comment })` from Lingui. Run `pnpm messages:extract` after adding or changing strings.
- Commits follow Conventional Commits. semantic-release derives versions from them.
- Branch from `next` and open PRs against `next`. Fill in the PR template, including the "AI involvement" section.

## Agent skills

Skills live in `.agents/skills/<name>/SKILL.md`, where Cursor, Codex and Copilot find them. `.claude/skills` is a symlink to that folder for Claude Code. Add new skills under `.agents/skills/` only.

## Gotchas

- Design tokens are CSS custom properties loaded from the Eik CDN (`https://assets.finn.no/pkg/@warp-ds/css/v2/tokens/<brand>.css`), not bundled with the components. A page without that stylesheet renders unstyled. See `.storybook/preview-head.html` for the full set of links.
- Components are imported one file at a time. If a component renders another `w-*` element, it must import it. `w-combobox` currently renders `w-textfield` without importing it, so tests and stories import `textfield.js` themselves.
- Firefox and WebKit tests need their own Playwright browsers. `--project chromium` avoids that in the inner loop.
