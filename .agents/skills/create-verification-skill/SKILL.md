---
name: create-verification-skill
description: "Generate or extend verify-elements, the skill and CLI agents use to drive Warp components in a real browser and capture proof. With no argument it bootstraps verify-elements with the combobox; with a component name it adds that component's feature map."
disable-model-invocation: true
---

# Create a verification skill

Adapted from `create-verification-skill` in [pstack](https://github.com/cursor/plugins/tree/main/pstack) by Lauren Tan (MIT).

Agents working in this repo need a scripted way to render a component in a real browser, drive it the way a user does, and capture evidence. This skill builds that as `.agents/skills/verify-elements/`, or adds one more component to it. Write everything for the next agent, not for a human: it will be read cold, mid-task, by an agent that has never seen this repo.

Argument: a component name, such as `combobox` or `slider`. Defaults to `combobox`.

## Pick a mode

- **Bootstrap:** `.agents/skills/verify-elements/` doesn't exist. Do every step below.
- **Add component:** it exists. Do step 1 for the component, then steps 3 to 5. Extend the CLI only when the component needs an interaction it can't do yet, and keep the extension generic.

## 1. Read the repo, not the user

Start with `AGENTS.md`. Answer these from the code, and only ask the user what you can't find out:

- **Surface:** what does a consumer write (markup, attributes, properties, child elements), and what does an end user do (type, click, press keys, drag)? Sources: the component's JSDoc, `docs/`, stories, tests, and its event and keyboard handlers.
- **Run:** components render in a plain Vite page, not Storybook. See step 2.
- **Observe:** component events, the accessibility tree, console output, screenshots.
- **Isolate:** two checkouts or two agents must be able to run side by side without sharing ports or state.

If the checkout can't install, compile messages or start Vite, fix that or report it precisely before generating anything. A skill written against a broken base teaches wrong steps.

## 2. Build the harness (bootstrap only)

### Playground

Create `playground/index.html`, served by Vite (already a dev dependency) from the repo root. It must:

- Load the same CDN stylesheets as `.storybook/preview-head.html`: resets, components, and the brand's fonts and `tokens/<brand>.css`. A spike confirmed this renders pixel-identical to Storybook. Support `?brand=<brand>` (for example `finn-no` or `tori-fi-dark`), defaulting to `finn-no`. Build the brand URLs from the brand name instead of listing brands, and report whether they loaded.
- Expose a small API on `window` for the daemon: mount HTML into a container, import the module for each `w-<name>` tag in that HTML from `/packages/<name>/<name>.ts`, and record every `CustomEvent` dispatched by a `w-*` element (type, target tag, detail, time).
- Never silently import components that a component renders internally. After mounting, find undefined `w-*` elements inside shadow roots and report them as warnings. A missing import is a real bug: `w-combobox` renders `w-textfield` without importing it. Let the caller load extra modules explicitly instead, for example with `--with textfield`.

Inline `<script>` tags don't run when HTML is inserted with `innerHTML`. Document that rather than working around it.

### CLI: client and daemon

Use Playwright (already a dev dependency). Each `ctl` call is a separate short-lived process, so the page and its recorded state live in a daemon. Lay the code out so an agent changing one command reads one small file:

- `ctl.mjs`: the entry point. It parses arguments, loads `commands/<name>.mjs` and prints the result. It discovers commands from that directory, so adding a command means adding a file.
- `commands/<name>.mjs`: one file per command. Each exports its `help` (usage, description, examples), an optional `args()` that turns the command line into a request, and either `run()`, which the daemon executes next to the page, or `main()`, which runs in the client (`up`, `down`, `doctor`).
- `lib/`: what commands share, such as session paths, talking to the daemon, process bookkeeping and the daemon itself.

Don't hardcode what the repo or a dependency already knows. Start Vite with the repo's `vitest.config.ts`, so components compile the same way as in the tests and the viewport matches. Ask Playwright which browsers exist. Build brand URLs from the brand name and let a failed load say the brand is wrong. Derive the CLI's own invocation path from its location.

- `ctl up` starts the daemon in the background. The daemon starts Vite programmatically on a free port, launches the browser (headless by default, `--headed` to watch it, `--browser chromium|firefox|webkit`), opens the playground and listens on a local HTTP port. It writes a session file with ports and PIDs to a directory in the repo root that you add to `.gitignore`, so two checkouts never collide.
- Every other command sends one request to the daemon and prints one JSON object to stdout. On failure, exit non-zero and print an `error` plus a `hint` that tells the agent what to do next.
- `--help` works on the CLI and on every command, with examples.
- When Vite reloads the page after a source edit, the daemon re-runs the last mount, so the edit-then-check loop stays tight.
- `ctl down` stops only what `up` started, by PID. Never kill by process name: the user may have Storybook or another Vite server running.

Commands for the first version:

| Command | Does |
|---|---|
| `up`, `down` | Start and stop the daemon. |
| `doctor` | Read-only health check: daemon alive, Vite responding, page loaded, components defined, console errors since mount, Playwright browser installed, locale files compiled. Run it first whenever anything looks off. |
| `mount <html>` | Replace the page content with the given HTML, import its components and wait until they're defined and rendered. Clears the event and console logs. |
| `type <selector> <text>` | Send real key events one character at a time, like a user. Don't use Playwright's `fill`, which skips `keydown`; much component logic lives in keydown handlers. |
| `press <key>`, `click <selector>`, `hover <selector>` | User actions. |
| `drag <selector> --by <dx,dy>` or `--to <selector>` | One command, because mouse state doesn't survive between processes. |
| `snapshot [selector]` | The accessibility tree (Playwright aria snapshot): roles, names, expanded and selected state, input values, through shadow DOM. |
| `events` | Component events recorded since mount. |
| `console` | Console messages and page errors since mount. |
| `screenshot [path]` | Screenshot of the page, or of one element with `--selector`. Saves under the evidence directory by default and prints the path. |
| `eval <js>` | Escape hatch for reading state after a user path ran. Never proof on its own. |

Debugging commands come with the harness: `inspect`, `styles` and `a11y` work in every engine, and `metrics`, `throttle` and `trace` are Chromium only and say so when run elsewhere. `check --browser all` runs a map in all three engines. Write `debugging.md` in the skill directory: the step-by-step way to debug a component with these commands, and the engine quirks you hit.

Selectors are Playwright selectors, so role selectors such as `role=option[name="Norway"]` work and pierce shadow DOM. Prefer them over CSS selectors.

Keep the code small: no framework, no config file, no plugin system until a component needs one.

Write no comments in the code. Comments cost every reader context, and models imitate them. The one exception is behavior forced by something we can't change, such as a browser, Vite or Playwright quirk; give it one short line where it happens. A surprise in our own code gets a better name or shape, not a comment. Put anything else worth explaining in a README next to the code: `README.md` in the skill directory for the CLI's layout, command contract and design decisions, and `playground/README.md` for the page API. Link the skill's README from `SKILL.md` so agents read it only when they change the CLI.

### verify-elements/SKILL.md

Give it frontmatter with `name: verify-elements` and a `description` saying it renders and drives Warp components in a real browser to prove behavior, so other agents know when to load it. Write these sections, each grounded in what you built, with no placeholders:

- **Launch:** the exact commands from a fresh checkout (install, `messages:compile`, Playwright browser) to `ctl up`, and how to tell it's ready.
- **Doctor:** when to run it and how to read its output.
- **Drive:** the command surface, with real examples from this repo.
- **Evidence:** the proof bar. Drive the real user path, not internal setters or `eval`. Capture the action and the resulting state, not just the final screen. Check events and the accessibility tree, not only pixels. Exercise every entry point and path in the component's feature map that the change can affect. Green tests alone aren't proof.
- **Cleanup:** `ctl down`. Evidence survives cleanup, in a location you name.
- **Feature map:** where the maps live and how to read them.

Then add one line to the root `AGENTS.md` telling agents to use `verify-elements` to prove UI behavior.

## 3. Seed the feature map

Each component gets a map next to its code:

```
packages/<name>/
  AGENTS.md               the component: how to mount and drive it, and an index of its features
  features/<feature>.md   one user-facing feature per file
```

`.agents/skills/verify-elements/feature-maps.md` holds the format and the conventions shared by all maps: preconditions, selector rules and what counts as proof. In bootstrap mode, write it. In add-component mode, follow it, and fix it if it disagrees with this step.

A map answers, from the user's point of view: what the component does, how to reach each behavior, how to drive it with `ctl`, and what observable end state proves it works. It's an index for the next agent, not a test plan. The proof bar lives in `verify-elements/SKILL.md`; don't repeat it per behavior.

**`AGENTS.md`** is what an agent reads first when it touches the component, so keep it to 30 to 50 lines. Start with a short paragraph: what the component is, its source files, and the `w-*` elements it renders. Then these H2s:

- `Mount`: the smallest mount command, with any `--with` it needs.
- `Core journey`: one command block for the main user path, then the end state that proves it.
- `Features`: one line per file in `features/`, as `[name](features/name.md): what it covers`.
- `Gotchas`: one line per trap that applies to every feature, such as a missing import, where the ARIA attributes sit, or noisy events.

**`features/<feature>.md`** covers one feature a user or consumer would name, such as keyboard navigation, form submission or remote search. Name the file after the feature, in kebab-case. Keep it to 15 to 40 lines: split a file that grows past that, and merge one that would hold a single behavior. Cover every behavior of the component across the files: attributes and modes, keyboard, pointer, events, form behavior, localization and styling hooks. Use exactly these four H2s:

- `Sub-features`: one line per behavior, as `name: what it does`. End the line with the story that shows it, if any, and `no test` when no test covers it. Don't list test names; the next agent can search the test files. Find behaviors in the code (JSDoc, handlers) as well as in the docs. The code is the authority when they disagree, and the disagreement is a gotcha.
- `How to get to it (user POV)`: the markup that turns the feature on, then what an end user does, in a few lines.
- `Driving it with ctl`: one command block that exercises the feature from a fresh mount, then one line per sub-feature with the selector or key to use and the end state to check.
- `Gotchas`: one line per trap. Suspected bugs go here too, one line each, marked as suspected, with the shortest command sequence that reproduces them.

Here's the shape of a feature file, from the feature map in Lauren Tan's [verification-skill-example](https://github.com/poteto/verification-skill-example/tree/main/.cursor/skills/verify-atlas/references/features):

````markdown
# Command palette and chords

Cmd/Ctrl+K palette family (global, actions, files, threads, settings) and go-to-thread number chords.

## Sub-features

- global-palette: Cmd/Ctrl+K command palette
- files-palette: file picker flavor of the palette
- go-to-thread-chords: Cmd/Ctrl+1..9 jump to recent threads

## How to get to it (user POV)

Press Cmd/Ctrl+K from most surfaces. Inside settings, the same chord is preferences search (see `preferences.md`).

## Driving it with control-atlas

```bash
node .cursor/skills/verify-atlas/control-atlas.mjs press "Meta+KeyK"
node .cursor/skills/verify-atlas/control-atlas.mjs type "new thread"
node .cursor/skills/verify-atlas/control-atlas.mjs press "Enter"
```

Assert the palette dialog in the a11y tree before typing. Escape closes without action.

## Gotchas

- Focus context changes what Cmd/Ctrl+K does. Establish surface first.
- Number chords no-op when fewer threads exist than the digit. Seed rows first.
````

Command blocks contain only `ctl` commands and `sleep`. When mount HTML needs single quotes, put it in `features/fixtures/<feature>.html` and mount it with `--file`. Run `ctl check` on every file you write, and fix what it reports before you keep the file. It checks that the commands run; read the results yourself to confirm the end states the file describes. If a behavior can't be driven, report it as a failure and put the reason in `Gotchas`. Never weaken a journey to make it pass. Describe current behavior. Don't change product code in this skill.

## 4. Prove it before handing over

Run the generated skill's own instructions end to end: launch, doctor, drive one journey, capture evidence, clean up. For the combobox, the journey is: mount it with options that include Norway (value `no`), type `nor`, press ArrowDown, press Enter, then show that `events` contains `select` with value `no` and that the snapshot shows the input reading Norway. Take a screenshot. After `ctl down`, confirm that no process you started is still running and that the screenshot still exists.

Fix what fails, and run cleanup after every failed attempt so broken attempts don't strand processes and ports. A skill that was never executed is a draft, not a deliverable.

## 5. Hand over

Report what you built, the proof (commands run, their output, evidence paths) and anything you couldn't verify. List suspected product bugs separately.

Point the user at `maintain-verification-skill` for keeping the maps honest as components change. It expects the format this skill generates, so when you change the format here, update that skill in the same change.
