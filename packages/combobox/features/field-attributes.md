# Field attributes

The text around the input and the input's own attributes, all passed on to `w-textfield`.

## Sub-features

- label: the visible label above the input and the textbox's accessible name. Story Default.
- placeholder: hint text in the empty input. Story Default, no test.
- help-text: text below the input, set as its description. Story WithTooltip, no test (axe checks only).
- optional: "Optional" after the label, part of the accessible name. Hidden when `required` is set or there is no `label`. Story Optional.
- autocomplete: passed to the input, `off` by default.

## How to get to it (user POV)

`<w-combobox label="Country" placeholder="Search" help-text="Pick where you live" optional autocomplete="country-name">`. The user reads the label, hint and help text, and the browser may offer autofill.

## Driving it with ctl

```bash
node .agents/skills/verify-elements/ctl.mjs mount '<w-combobox label="Country" placeholder="Search" help-text="Pick where you live" optional autocomplete="country-name"><option value="no">Norway</option></w-combobox><w-combobox label="City" optional required><option value="osl">Oslo</option></w-combobox>' --with textfield
node .agents/skills/verify-elements/ctl.mjs snapshot
node .agents/skills/verify-elements/ctl.mjs screenshot
node .agents/skills/verify-elements/ctl.mjs eval '[...document.querySelectorAll("w-combobox")].map((el) => el.shadowRoot.querySelector("w-textfield").shadowRoot.querySelector("input").getAttribute("autocomplete"))'
```

- label: the `snapshot` has `text: Country Optional` and `textbox "Country Optional"`.
- placeholder: the Country textbox has `/placeholder: Search`.
- help-text: `text: Pick where you live` follows the textbox, and the screenshot shows it below the field.
- optional: City reads `textbox "City"`, without "Optional", because it is `required`.
- autocomplete: the `eval` returns `["country-name","off"]`.

## Gotchas

- Read `autocomplete` with `getAttribute`. Firefox's `input.autocomplete` property returns `""` for `country-name` on this input, while Chromium and WebKit return the attribute value.
- Suspected a11y bug: `aria-label` on `w-combobox` isn't passed on, so the textbox has no accessible name. The textfield JSDoc says a label or an `aria-label` is required. Repro: `mount '<w-combobox aria-label="Country"><option value="no">Norway</option></w-combobox>' --with textfield`, then `snapshot` shows `- textbox` with no name.
- `snapshot` prints `/placeholder: ""` on every combobox textbox, even without `placeholder`.
