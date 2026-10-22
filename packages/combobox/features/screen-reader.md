# Screen reader

What assistive technology gets: roles, the highlighted option, the expanded state and the suggestion count.

## Sub-features

- roles: a `combobox` wrapper around `textbox "<label>"`, and a `listbox` of `option`s. No test beyond axe checks.
- active-option: the highlighted option is `[selected]`, and the wrapper's `aria-activedescendant` points at it while the list is open. no test
- expanded: the wrapper is `[expanded]` while the list shows at least one option. no test
- status: a screen-reader-only `status` reads "N suggestions" or "No suggestions" while the list is open, and nothing while it's closed.

## How to get to it (user POV)

Any `<w-combobox label="Country">` with options. A screen reader user tabs in, types and arrows through the list, hearing the count and the options.

## Driving it with ctl

```bash
node .agents/skills/verify-elements/ctl.mjs mount '<w-combobox label="Country"><option value="no">Norway</option><option value="se">Sweden</option><option value="dk">Denmark</option></w-combobox>' --with textfield
node .agents/skills/verify-elements/ctl.mjs snapshot
node .agents/skills/verify-elements/ctl.mjs press ArrowDown ArrowDown --selector 'role=textbox[name="Country"]'
node .agents/skills/verify-elements/ctl.mjs snapshot
node .agents/skills/verify-elements/ctl.mjs eval '(() => { const field = document.querySelector("w-combobox").shadowRoot.querySelector("w-textfield"); return [field.getAttribute("role"), field.getAttribute("aria-activedescendant"), field.shadowRoot.querySelector("input").getAttribute("aria-activedescendant")]; })()'
node .agents/skills/verify-elements/ctl.mjs press Escape x y z
node .agents/skills/verify-elements/ctl.mjs snapshot
```

- roles: every `snapshot` has `combobox` containing `textbox "Country"`, and the open one a `listbox` of three `option`s.
- active-option: the second `snapshot` has `option "Norway" [selected]`. The `eval` returns `["combobox","combobox-option-N",null]`: the ID sits on the wrapper, not on the focused input.
- expanded: `combobox [expanded]` in the second `snapshot`. Not in the first, nor in the last, where nothing matches `xyz`.
- status: empty `status` in the first `snapshot`, `status: 3 suggestions` in the second, `status: No suggestions` in the last.

## Gotchas

- docs/accessibility.md says the input has `role="combobox"` and `aria-activedescendant`. The code puts them, with `aria-expanded` and `aria-controls`, on the `w-textfield` host, and the focused input has none. Suspected a11y bug: screen readers may not announce the highlighted option. Repro: the block's `eval`.
- Option IDs (`combobox-option-N`) change every time the list is filtered again. Don't hardcode them.
