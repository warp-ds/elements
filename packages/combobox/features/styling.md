# Styling

Component tokens, CSS parts and brand themes. The full token and part tables are in `docs/styling.md`.

## Sub-features

- list-tokens: `--w-c-combobox-*` on `w-combobox` set the list's background, shadow, radius and bottom padding, the option padding, the hover and highlight backgrounds, and the z-index. Story CustomStyling, no test.
- field-tokens: the textfield, label, optional, help text and tooltip tokens (`--w-c-textfield-*`, `--w-c-input-*`, `--w-c-tooltip-*`) style the field. Story CustomStyling, no test.
- parts: `base`, `options-list` and `option`, plus parts re-exported from `w-textfield`: `textfield-wrapper`, `input`, `label`, `help-text`, `mask-wrapper`, `mask`, `tooltip-target`, `tooltip`, `arrow`, `beak`, `hover-bridge`. Story CustomStyling, no test.
- brand: colours, fonts and default token values come from the brand stylesheet, so every brand and its dark variant look different. no test

## How to get to it (user POV)

A consumer stylesheet such as `w-combobox { --w-c-combobox-color-background: lightyellow } w-combobox::part(option) { font-style: italic }`. The user sees the restyled field and list.

## Driving it with ctl

```bash
node .agents/skills/verify-elements/ctl.mjs mount '<style>w-combobox { --w-c-combobox-color-background: lightyellow; --w-c-combobox-option-color-background-selected: pink; --w-c-textfield-background: honeydew; } w-combobox::part(option) { font-style: italic; } w-combobox::part(label) { color: rebeccapurple; }</style><w-combobox label="Country"><option value="no">Norway</option><option value="se">Sweden</option><option value="dk">Denmark</option></w-combobox>' --with textfield
node .agents/skills/verify-elements/ctl.mjs press ArrowDown ArrowDown --selector 'role=textbox[name="Country"]'
node .agents/skills/verify-elements/ctl.mjs screenshot
node .agents/skills/verify-elements/ctl.mjs eval 'getComputedStyle(document.querySelector("w-combobox").shadowRoot.querySelector("[part=options-list]")).backgroundColor'
```

- list-tokens: the screenshot shows a light yellow list with Norway highlighted in pink, and the `eval` returns `rgb(255, 255, 224)`.
- field-tokens: the input background is pale green.
- parts: the label is purple and the options italic.
- brand: start a second session with `up --session dark --brand tori-fi-dark`, then run the block with `--session dark` on every command. The screenshot shows the dark theme, with white text on the block's light overrides. Finish with `down --session dark`.

## Gotchas

- `snapshot` shows no styling. Prove it with a full-page `screenshot`, and read computed values with `eval` when a colour matters.
- `::part(base)` is the combobox's own wrapper. The textfield's `base` is re-exported as `textfield-wrapper`.
- The highlight token is `--w-c-combobox-option-color-background-selected`: "selected" is the keyboard highlight, not the picked value.
