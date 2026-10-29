# Tooltip

An info button after the label that shows supplementary text in a `w-tooltip`.

## Sub-features

- info-button: `tooltip`, together with a `label`, adds an info button after the label. Story WithTooltip, no test.
- show-on-hover: hovering the button shows the tooltip after a 150 ms delay. no test
- show-on-focus: focusing the button, with Shift+Tab from the input, shows it at once. no test

## How to get to it (user POV)

`<w-combobox label="Country" tooltip="Where you live">`. The user hovers or tabs to the info icon and reads the text.

## Driving it with ctl

```bash
node .agents/skills/verify-elements/ctl.mjs mount '<w-combobox label="Country" tooltip="Where you live"><option value="no">Norway</option></w-combobox>' --with textfield
node .agents/skills/verify-elements/ctl.mjs snapshot
node .agents/skills/verify-elements/ctl.mjs press Shift+Tab --selector 'role=textbox[name=/^Country/]'
node .agents/skills/verify-elements/ctl.mjs snapshot
node .agents/skills/verify-elements/ctl.mjs screenshot
node .agents/skills/verify-elements/ctl.mjs press Tab
node .agents/skills/verify-elements/ctl.mjs hover 'role=textbox[name=/^Country/]'
node .agents/skills/verify-elements/ctl.mjs hover 'role=button'
sleep 0.2
node .agents/skills/verify-elements/ctl.mjs snapshot
```

- info-button: the first `snapshot` has `button "Circle with letter i inside"` and no `tooltip`.
- show-on-focus: Shift+Tab puts `focused` on `button#tooltip-target`. The next `snapshot` has `tooltip "Where you live"`, and the screenshot shows the dark bubble under the icon.
- show-on-hover: after Tab hides it, hovering the button and waiting brings `tooltip "Where you live"` back in the last `snapshot`.

## Gotchas

- A `ctl` call takes about 50 ms, less than the 150 ms show delay, so wait before reading the hover result. `hover` on an element already under the pointer fires no `mouseover`, so the block hovers the textbox first.
- Suspected a11y bug: the textbox's accessible name includes the icon's name, and while the tooltip shows, its text too (`Country Circle with letter i inside Where you live`), because both sit inside the `<label>`. Repro: the block's second `snapshot`. Match with `[name=/^Country/]`.
- Without a `label`, `tooltip` renders nothing.
