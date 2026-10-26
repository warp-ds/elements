---
name: verify-elements
description: Render and drive Warp components (w-* custom elements from packages/) in a real browser to prove their behavior, and capture evidence (component events, accessibility tree, screenshots, console). Use when you change, review or debug a component and need to show it works for a user, reproduce a UI bug, or walk a component's feature map in packages/<name>/AGENTS.md.
---

# verify-elements

Proves component behavior the way a user meets it. A real Chromium page loads the same Warp CDN styles as Storybook, Vite imports the components from source, and real keyboard and mouse input drives them. One CLI, `ctl.mjs`. Every command prints one JSON object. On failure it exits 1 and prints `error` and a `hint` that tells you what to do next.

Run everything from the repo root. Write the command out in full every time, because shell aliases and variables don't survive between tool calls:

```sh
node .agents/skills/verify-elements/ctl.mjs <command> [args] [--session <name>]
node .agents/skills/verify-elements/ctl.mjs --help          # all commands
node .agents/skills/verify-elements/ctl.mjs mount --help    # one command, with examples
```

## Launch

From a fresh checkout:

```sh
pnpm install
pnpm messages:compile                  # compiled locale files are gitignored; components fail to import without them
pnpm exec playwright install chromium
node .agents/skills/verify-elements/ctl.mjs up
```

`up` returns once the playground page has loaded, usually in about a second. The first run of a session takes a few seconds longer while Vite pre-bundles dependencies. It is ready when it prints `"ok": true` with `pid`, `viteUrl`, `playgroundUrl` and `log`. If it fails, it prints the daemon log tail, or a preflight `hint` such as running `pnpm messages:compile`.

Options for `up`:

- `--headed`: show the browser window, with a panel listing the component's events as they fire.
- `--brand <brand>`: any Warp brand, such as `tori-fi-dark`. Defaults to `finn-no`. If the brand's fonts or tokens don't load, `up` fails and the log names the URLs.
- `--browser firefox|webkit`: needs `pnpm exec playwright install <browser>` first.
- `--session <name>`: run a second daemon from the same checkout. Each session has its own ports, browser, Vite cache and log.

Running `up` on a live session prints it again with `alreadyRunning: true`, whatever flags it was started with. Passing a flag that differs from the running session fails until you run `down`.

How it works:

- `up` starts `lib/daemon.mjs` in the background.
- The daemon starts Vite on a free port with the repo's `vitest.config.ts`, so components compile the same way as in the tests, and serves `playground/` from the repo root. It launches the browser, opens the playground and listens on a local port.
- Each command is one file in `commands/`: its help, how it reads its arguments, and what it does. To add a command, add a file; `ctl` and `--help` pick it up. Before changing or extending the CLI, read [README.md](README.md).
- State lives in `.verify-elements/` at the repo root (gitignored), so separate checkouts never collide. The session file and `daemon.log` are in `.verify-elements/sessions/<session>/`.
- The daemon stops itself after 30 minutes without a command.

When you edit a component's source, Vite reloads the page and the daemon re-runs the last `mount`. After an edit you only re-run the interaction. The remount clears the logs, so re-run the whole journey before you read `events`.

## Doctor

Run `node .agents/skills/verify-elements/ctl.mjs doctor` first whenever anything looks off: a selector that should match doesn't, a component renders blank, or a command hangs. It only reads. Each entry in `checks` has `name`, `ok` and `detail`, and failing ones have a `hint`. Top-level `ok` is false, with exit code 1, if any check fails.

| Check | Passing means | When it fails |
|---|---|---|
| `daemon` | the session's process is alive and answering | `down`, then `up` |
| `vite` | the playground HTML is served | `down`, then `up` |
| `page` | the playground script ran; also shows `reloads` | `console` for the reason |
| `styles` | the brand's design tokens loaded from `assets.finn.no` | check network access; without tokens everything renders unstyled |
| `components` | every `w-*` element on the page, including inside shadow roots, is defined | mount again with `--with <name>` |
| `console` | no console errors or uncaught page errors since the last mount | read them with `console` |
| `browser` | the Playwright browser is installed | `pnpm exec playwright install chromium` |
| `locales` | every `locales/*/messages.po` has its compiled `messages.mjs` | `pnpm messages:compile` |

`info` shows the playground URL, browser, brand, the last mount's result and the reload count.

## Drive

| Command | Does |
|---|---|
| `mount <html> [--with a,b]`, `mount --file <path>` | Replace the page content and import `packages/<name>/<name>.ts` for every `w-<name>` tag in the HTML, then wait until the components are defined and rendered. Clears the event and console logs. |
| `type <selector> <text> [--delay ms]` | Focus the element, then send real key events one character at a time (keydown, input, keyup). Appends at the caret. |
| `press <key> [<key> ...] [--selector s]` | Press keys in order on the focused element, or focus `--selector` first. Uses Playwright key names: `ArrowDown`, `Enter`, `Escape`, `Tab`, `Shift+Tab`, `Home`, `End`, `PageUp`, `PageDown`, `Backspace`, `ControlOrMeta+a`. |
| `click <selector>`, `hover <selector>` | Real mouse actions, after Playwright's visibility and enabled checks. |
| `drag <selector> --by dx,dy` or `--to <selector>` | Press on the element's centre, move in 10 steps, release. |
| `snapshot [selector]` | Accessibility tree of `#mount`, or of the selector: roles, names, `[expanded]`, `[selected]`, `[disabled]`, `[invalid]` and input values, through shadow DOM. One line per array entry. |
| `events [--type t]` | Every CustomEvent any `w-*` element dispatched since the mount: `type`, `target`, `insideShadowOf`, `detail`, `time`. |
| `console` | Console messages and page errors since the mount. |
| `screenshot [path] [--selector s]` | Full-page or element PNG. Prints the absolute path. |
| `check <file> ... [--browser all]` | Run every command block in feature map files in its own session and report the commands that fail. With `--browser all`, run them in Chromium, Firefox and WebKit and list results that differ. |
| `inspect <selector>` | Attributes, Lit properties, internal state and the start of the shadow DOM. |
| `styles <selector> [--props=a,b]` | Computed styles through shadow DOM, including what design tokens resolve to. |
| `a11y [selector]` | axe-core violations, with the same WCAG tags as the a11y tests. |
| `metrics`, `throttle cpu <n>`, `trace start/stop` | Performance counters, CPU throttling and traces. Chromium only. |
| `eval <js>` | Evaluate one expression in the page. Use it to read state, never as proof. |

Examples from this repo:

```sh
node .agents/skills/verify-elements/ctl.mjs mount '<w-combobox label="Country"><option value="no">Norway</option><option value="se">Sweden</option></w-combobox>' --with textfield
node .agents/skills/verify-elements/ctl.mjs type 'role=textbox[name="Country"]' nor
node .agents/skills/verify-elements/ctl.mjs press ArrowDown Enter
node .agents/skills/verify-elements/ctl.mjs click 'role=option[name="Sweden"]'
node .agents/skills/verify-elements/ctl.mjs drag 'role=slider' --by 120,0
node .agents/skills/verify-elements/ctl.mjs snapshot 'role=listbox'
node .agents/skills/verify-elements/ctl.mjs events --type select
```

What to know when driving:

- **Missing imports.** `mount` imports only the tags written in the HTML. If a component renders another `w-*` element that nothing imported, `mount` returns a warning naming the tag and the `--with` flag to add. `w-combobox` needs `--with textfield`, and `w-slider-thumb` needs `--with attention`. Each one is a missing import in the product, so report it.
- **Stand-ins for consumer code.** Inline `<script>` tags in mounted HTML don't run, because the HTML is inserted with `innerHTML`. Inline `on*` attributes do run: `onchange`, `onselect`, a form's `onsubmit`. `<style>` elements apply. Array properties take JSON in the attribute.
- **Quoting.** Wrap the HTML in single quotes and use double quotes inside. Write `&quot;` for a quote inside an inline handler. Use `--file` for anything long.
- **Selectors.** These are Playwright selectors, and they pierce shadow DOM. Prefer role selectors read off `snapshot`. `[name="..."]` must match the whole accessible name exactly. Use `[name="..."i]` for case-insensitive, or `[name=/^Country/]` for a prefix.
- **Action output.** Each action waits for pending Lit updates and two animation frames, so the next `snapshot` sees the settled state. It reports `focused` (the deepest focused element through shadow roots, with its value) and `eventsDuringAction`.
- **Timeouts.** Actions time out after 5 s. A failure includes Playwright's `callLog`, which says why, for example `element is not enabled`.
- **Focus.** `type` and `press --selector` move focus programmatically, like tabbing in. Use `click` when the pointer path matters.

## Debugging

Follow [debugging.md](debugging.md) when you can't explain a behavior yet, when your first fix doesn't work, or when engines disagree. It goes from reproducing the problem to proving the fix, and lists engine quirks that look like component bugs. When the cause is already known, the steps in "Fixing a bug" in the root `AGENTS.md` are enough.

## Evidence

The proof bar:

1. **Drive the real user path.** Use `type`, `press`, `click`, `hover` and `drag`. Don't set properties, call methods, dispatch synthetic events or use `eval` in place of the user. `eval` may set up something a consumer would configure in JavaScript, such as `el.selectOnBlur = false`, before the user path. Report that as a precondition.
2. **Capture the action and the resulting state, not just the final screen.** Keep the action's JSON (`eventsDuringAction`, `focused`), then `events`, `snapshot` and a `screenshot` afterwards.
3. **Check events and the accessibility tree, not only pixels.** The event must carry the right `detail`. The tree must show the right value, name and state. Screenshots back up anything visual, such as highlighting, tooltips and styling.
4. **Exercise every path your change can affect.** Look up each entry point and path in the component's feature map: keyboard and pointer, attribute and property, light-DOM children and the `options` property, each mode. Driving one happy path is not enough.
5. **Check `console`.** It should show `"errors": 0`, or every error should be explained.
6. **Green tests alone aren't proof.** Many behaviors have `no test` in the feature maps, and the tests that exist often dispatch synthetic events.

Screenshots default to `.verify-elements/evidence/<time>-<session>.png`. To keep JSON as evidence, redirect it to the same place, for example `node .agents/skills/verify-elements/ctl.mjs events > .verify-elements/evidence/combobox-events.json`. The directory is gitignored and survives `down`. In your report, list the commands you ran, the key lines of their output and the evidence paths. List suspected product bugs separately.

## Cleanup

```sh
node .agents/skills/verify-elements/ctl.mjs down
```

`down` asks the daemon to close the browser and Vite. It then confirms, by PID, that every process in the daemon's tree has exited: the daemon (which runs Vite), the browser and its helpers. Anything left gets SIGTERM, then SIGKILL, but only if its PID still runs the same command line. It never kills by process name, so your Storybook or other Vite servers are safe.

`down` is safe to run when nothing is running. Run it after every failed attempt. Its output lists `stopped`, `stillRunning` (must be empty) and `evidenceThisSession`. Evidence in `.verify-elements/evidence/` stays.

## Feature maps

Each mapped component has `packages/<name>/AGENTS.md`: how to mount and drive it, component-wide gotchas, and an index of its features. Each feature has its own file in `packages/<name>/features/`. [feature-maps.md](feature-maps.md) holds the format and the shared conventions: preconditions, selector rules and what counts as proof.

Before verifying a change:

1. Read the component's `AGENTS.md`.
2. Open every feature file the change can touch.
3. Drive each sub-feature in them and capture its proof.

If you find a new behavior or trap, add it to the feature file it belongs to, then run `node .agents/skills/verify-elements/ctl.mjs check` on that file. To map a component that has none, use the `create-verification-skill` skill with the component name, or follow [feature-maps.md](feature-maps.md).
