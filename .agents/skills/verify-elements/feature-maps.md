# Feature maps

A feature map tells you, from a user's point of view, what a component does, how to reach each behavior, how to drive it with `ctl`, and what end state proves it works. This file holds the format and the conventions shared by all maps. To list the mapped components, run `ls packages/*/AGENTS.md`.

`ctl` below means `node .agents/skills/verify-elements/ctl.mjs`, run from the repo root.

## Layout

```
packages/<name>/
  AGENTS.md               the component: how to mount and drive it, and an index of its features
  features/<feature>.md   one user-facing feature per file
```

Maps are an index for the next agent, not a test plan. The proof bar lives in [SKILL.md](SKILL.md); don't repeat it per behavior. The `docs/` folder next to a map is published documentation for consumers. Maps aren't published.

### `AGENTS.md`

Keep it to 30 to 50 lines. Start with a short paragraph: what the component is, its source files, and the `w-*` elements it renders. Then these H2s:

- `Mount`: the smallest mount command, with any `--with` it needs.
- `Core journey`: one command block for the main user path, then the end state that proves it.
- `Features`: one line per file in `features/`, as `[name](features/name.md): what it covers`.
- `Gotchas`: one line per trap that applies to every feature, such as a missing import, where the ARIA attributes sit, or noisy events.

### `features/<feature>.md`

One feature a user or consumer would name, such as keyboard navigation, form submission or remote search. Name the file after the feature, in kebab-case. Keep it to 15 to 40 lines: split a file that grows past that, and merge one that would hold a single behavior. Cover every behavior of the component across the files: attributes and modes, keyboard, pointer, events, form behavior, localization and styling hooks. Use exactly these four H2s:

- `Sub-features`: one line per behavior, as `name: what it does`. End the line with the story that shows it, if any, and `no test` when no test covers it. Don't list test names; search the test files for them. Find behaviors in the code (JSDoc, handlers) as well as in the docs.
- `How to get to it (user POV)`: the markup that turns the feature on, then what an end user does, in a few lines.
- `Driving it with ctl`: one command block that exercises the feature from a fresh mount, then one line per sub-feature with the selector or key to use and the end state to check.
- `Gotchas`: one line per trap, including places where docs and code disagree (the code is the authority). Suspected bugs go here too, one line each, marked as suspected, with the shortest command sequence that reproduces them.

Run every command block from a fresh mount before you keep it. Command blocks contain only `ctl` commands and `sleep <seconds>`: no heredocs, pipes, redirects or variables. When mount HTML needs single quotes, such as a JSON attribute or an inline handler, put it in `features/fixtures/<feature>.html` and mount it with `--file`. After writing or editing a map, run `ctl check` on it; it runs every block and reports what fails.

Describe current behavior, even when it looks wrong. A behavior that can't be driven is a failure: put the reason in `Gotchas`, and never weaken a journey to make it pass.

## Preconditions

- `ctl up` is running and `ctl doctor` prints `"ok": true`.
- Start every journey with a fresh `ctl mount`. Mounting clears the event and console logs, so what you read afterwards belongs to that journey.
- The mount names every component it needs. `mount` imports `packages/<name>/<name>.ts` for each `w-<name>` tag in the HTML and nothing else. If a component renders another `w-*` element without importing it, `mount` returns a warning. Pass `--with <name>` to load it, and note the missing import as a bug.
- The page language is `en`. For another locale, run `ctl eval 'document.documentElement.lang = "nb"'` before the mount.
- Inline `<script>` tags in mounted HTML do not run. Inline `on*` attributes do. Use them to stand in for consumer code. A component's CustomEvent named like a global handler (`change`, `select`, `input`, `focus`, `blur`) triggers the matching `on<name>` attribute on the element that dispatched it. A form's `onsubmit` can capture the submitted data: `onsubmit="event.preventDefault(); window.submitted = Object.fromEntries(new FormData(this))"`. Page globals such as `window.submitted` survive `mount`, so clear them before the journey with `ctl eval 'delete window.submitted'`, or a stale value from an earlier journey can pass for a submission.
- Array and object properties declared with `type: Array` or `type: Object` accept JSON in the attribute, for example `options='[{"value":"no","label":"Norway"}]'`. Set any other property with `ctl eval` after the mount and before the user path, and report it as a precondition.

## Selector rules

- Use role selectors read off `ctl snapshot`: `role=<role>[name="<accessible name>"]`. They pierce shadow DOM.
- `[name="..."]` matches the whole accessible name exactly and is case-sensitive. A label with `optional` is named `Country Optional`, so `[name="Country"]` does not match it. Use the full name, `[name="country optional"i]` for case-insensitive, or a regex: `[name=/^Country/]`.
- CSS selectors also pierce open shadow roots. Use tag names such as `w-combobox` when no role fits. Don't use ids or classes from inside a shadow root: they are internal, and some are generic (`combobox-listbox`).
- Hidden elements don't match: options in a closed list time out after 5 s. Open the component first.

## What counts as proof

The bar is in the Evidence section of [SKILL.md](SKILL.md). For each sub-feature, keep:

1. The JSON from the user action (`type`, `press`, `click`, `hover`, `drag`). Its `eventsDuringAction` and `focused` show what the action caused.
2. `ctl events` (or `--type <name>`) showing the component's own event with the expected `detail`. Events whose `insideShadowOf` is set come from internal elements, such as the `w-textfield` inside `w-combobox`. They aren't the component's public API.
3. `ctl snapshot` showing the end state in the accessibility tree: input value, `[expanded]`, `[selected]`, `[disabled]`, `[invalid]`, names.
4. A full-page `ctl screenshot` for anything visual.
5. `ctl console` with `"errors": 0`. The "Lit is in dev mode" warning is expected.

`ctl eval` may read state after the user path ran, such as form data or a property. It never replaces one of the above.

## Event recorder notes

- `events` records every `CustomEvent` dispatched by any `w-*` element, including non-bubbling ones and ones inside shadow roots. Native events such as `keydown`, `input` and `click` are not recorded.
- Elements in `detail` are shown as `"<tag#id>"`.
- `time` is in milliseconds since the mount.
