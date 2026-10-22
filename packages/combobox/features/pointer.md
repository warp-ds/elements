# Pointer

Clicking the field, an option or somewhere else, and hovering options.

## Sub-features

- click-field: clicking the input focuses it. The list opens only with `open-on-focus` (see focus-and-blur.md). no test
- click-option: pressing the mouse on an option selects it: `select` with its value, and its label in the input. Story Default.
- hover: the option under the pointer gets the hover background. no test
- click-outside: clicking elsewhere closes the list, and select-on-blur applies. no test

## How to get to it (user POV)

Any `<w-combobox>` with options. The user clicks into the field, presses a key or ArrowDown to open the list, and clicks an option.

## Driving it with ctl

```bash
node .agents/skills/verify-elements/ctl.mjs mount '<button>Back</button><w-combobox label="Country"><option value="no">Norway</option><option value="se">Sweden</option><option value="dk">Denmark</option></w-combobox>' --with textfield
node .agents/skills/verify-elements/ctl.mjs click 'role=textbox[name="Country"]'
node .agents/skills/verify-elements/ctl.mjs snapshot
node .agents/skills/verify-elements/ctl.mjs press ArrowDown
node .agents/skills/verify-elements/ctl.mjs hover 'role=option[name="Sweden"]'
node .agents/skills/verify-elements/ctl.mjs screenshot
node .agents/skills/verify-elements/ctl.mjs click 'role=option[name="Denmark"]'
node .agents/skills/verify-elements/ctl.mjs press ArrowDown --selector 'role=textbox[name="Country"]'
node .agents/skills/verify-elements/ctl.mjs click 'role=button[name="Back"]'
node .agents/skills/verify-elements/ctl.mjs snapshot
```

- click-field: `focused` is `input#textfield`, and the first `snapshot` has no listbox.
- hover: the screenshot shows a grey background on Sweden only. `snapshot` doesn't show hover.
- click-option: `eventsDuringAction` has `select` `{"value":"dk"}`, and the last `snapshot` shows the textbox reading `Denmark`.
- click-outside: clicking Back puts `focused` on the button, and the last `snapshot` has no listbox.

## Gotchas

- Suspected bug: clicking an option drops focus to the page body (the click reports `"focused": null`) and fires `select` three times. The list hides on mousedown, so focus can't land on the option. Repro: the block's `click 'role=option[name="Denmark"]'`.
- Clicking Back with Denmark picked fires `select` `{"value":"dk"}` twice again, because select-on-blur matches the value.
