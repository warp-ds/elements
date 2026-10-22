# Options

Where the options come from, what each one shows and submits, and how an initial `value` is displayed.

## Sub-features

- light-dom-options: `<option value>` children become options. The text is the label, a `label` attribute overrides it, and an empty label shows the value instead. Story Default.
- options-property: `options`, an array of `{value, label?, key?}` (JSON in the attribute). When non-empty it replaces the children, and an entry without `label` shows its value. Story DisableStaticFiltering.
- live-sync: adding, removing or editing child `<option>` elements (text, `value`, `label`) updates the list without a remount.
- initial-value: `value` shows the matching option's label (story WithValue). A value that matches no option is shown as is (story Invalid, no test).

## How to get to it (user POV)

Write `<option value="no">Norway</option>` children, or set `options` from JavaScript (in a mount, JSON in the `options` attribute). The user opens the list and reads the labels. Whatever they pick submits its `value`.

## Driving it with ctl

```bash
node .agents/skills/verify-elements/ctl.mjs mount --file packages/combobox/features/fixtures/options.html --with textfield
node .agents/skills/verify-elements/ctl.mjs snapshot
node .agents/skills/verify-elements/ctl.mjs eval 'document.querySelector("w-combobox").insertAdjacentHTML("beforeend", "<option value=\"fi\">Finland</option>")'
node .agents/skills/verify-elements/ctl.mjs press ControlOrMeta+a Backspace --selector 'role=textbox[name="Country"]'
node .agents/skills/verify-elements/ctl.mjs snapshot 'role=listbox'
node .agents/skills/verify-elements/ctl.mjs press ControlOrMeta+a Backspace --selector 'role=textbox[name="City"]'
node .agents/skills/verify-elements/ctl.mjs snapshot 'role=listbox'
```

- light-dom-options: the first `snapshot 'role=listbox'` lists `Norway`, `Sweden` (the `label`, not the text `SE`) and `dk` (empty label).
- options-property: the second lists `Oslo` and `bgo`. The `Trondheim` child is ignored.
- live-sync: the first list ends with `Finland`, added by the `eval` after the mount.
- initial-value: the first `snapshot` shows `textbox "Country"` reading `Sweden` and `textbox "City"` reading `Bergen`.

## Gotchas

- An `<option>` without `value` has the value `""`, not its text as in a native `<select>`. Picking `<option>Norway</option>` fires `select` with `{"value":""}`.
- `options` set to `[]` brings the children back. Only a non-empty array replaces them.
- Reopening a field that already shows a label lists only matching options, so clear it first to see them all, as the block does (see filtering.md).
