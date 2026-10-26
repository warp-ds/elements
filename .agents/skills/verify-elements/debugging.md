# Debugging a component

Follow these steps in order. Each one narrows the problem before you change code, and the last one leaves proof behind. `ctl` means `node .agents/skills/verify-elements/ctl.mjs`, run from the repo root.

## 1. Reproduce

Run `ctl doctor`, then reproduce the problem from a fresh `ctl mount`. Start from the command block in the component's feature file (`packages/<name>/features/`) closest to the problem. Write the reproduction down as a short list of `ctl` commands; you'll reuse it to prove the fix.

## 2. Observe before changing anything

| Question | Command |
|---|---|
| What did my action cause? | the action's own output: `focused` and `eventsDuringAction` |
| Which events fired, in what order, with what detail? | `events`, `events --type <name>` |
| What would a screen reader see? | `snapshot` |
| Why is the component in this state? | `inspect <selector>`: attributes, Lit properties, internal `_state`, shadow DOM |
| Why does it look wrong? | `styles <selector>`, or `styles <selector> --props=--w-s-color-background` for a design token |
| Any errors? | `console` |
| What does it look like? | `screenshot`, or `up --headed` to watch |

## 3. Form one hypothesis, then instrument

Name the line you suspect. Add a `console.log` there; Vite reloads the page and the daemon mounts your HTML again, so re-run your reproduction and read `ctl console`. Remove the logs when you're done.

## 4. Check the other engines

The tests run in Chromium, Firefox and WebKit, so a fix has to hold in all three.

- One file in all engines: `ctl check packages/<name>/features/<feature>.md --browser all`. It lists commands that fail and every command whose result differs between engines.
- One engine by hand: `ctl up --session wk --browser webkit`, then pass `--session wk` to every command.
- Firefox and WebKit need `pnpm exec playwright install firefox webkit` once.
- Playwright's WebKit is close to Safari but isn't Safari. If WebKit can't reproduce a Safari report, say so.

Engine quirks that look like component bugs but aren't:

- In WebKit, Backspace with focus outside an input navigates back. `ctl` reports when the page leaves the playground; run `mount` to recover, and pass `--selector` when you press keys.
- Playwright's WebKit hit test can report a component as covering its own shadow content. `click` and `hover` check where the browser's hit test lands and, if it's the target, send a real mouse event there; their output has a `note` when that happened.
- Firefox's `input.autocomplete` property can be `""` while the attribute is set. Read attributes with `getAttribute` in `eval`.
- WebKit doesn't focus a button when it's clicked, as in Safari on macOS, so `focused` is `null` after clicking one.
- WebKit doesn't fire a native `change` on blur when a script set the input's value. It only shows in `w-textfield`'s internal events (`insideShadowOf` set), which `check --browser all` doesn't compare.

## 5. Accessibility

Run `ctl a11y`, which uses axe-core with the same WCAG tags as the a11y tests. axe checks elements one at a time, so it misses ARIA that's split across shadow roots, such as a role on a host while focus is on an inner input. Always read `snapshot` as well.

## 6. Performance (Chromium only)

- `metrics` before and after an action shows what it cost: layouts, style recalculations, script time, heap.
- `throttle cpu 4` simulates a low-end phone; `throttle off` ends it.
- `trace start`, the action, then `trace stop` saves a trace and summarizes the long tasks. Open the file in Chrome DevTools' Performance panel for detail.

The playground runs Lit in dev mode, which is slower than production. Only compare numbers from the same setup, before and after a change, and repeat a measurement before you trust it.

## 7. Fix and prove

Follow "Fixing a bug" in the root [AGENTS.md](../../../AGENTS.md#fixing-a-bug), with your reproduction from step 1 as the proof. If a gotcha changed, update the feature file too.
