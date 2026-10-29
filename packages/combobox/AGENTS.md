# Combobox

`w-combobox` is a text input that filters a list of options as the user types, and selects one by keyboard, by pointer or by leaving the field. Source: `combobox.ts` (the element), `styles.ts`, `react.ts` (the React wrapper) and `locales/`. It renders `w-textfield` for the label, input and help text, and, through it, `w-icon` and `w-tooltip` when `tooltip` is set.

## Mount

```bash
node .agents/skills/verify-elements/ctl.mjs mount '<w-combobox label="Country"><option value="no">Norway</option><option value="se">Sweden</option><option value="dk">Denmark</option></w-combobox>' --with textfield
```

## Core journey

```bash
node .agents/skills/verify-elements/ctl.mjs mount '<w-combobox label="Country"><option value="no">Norway</option><option value="se">Sweden</option><option value="dk">Denmark</option></w-combobox>' --with textfield
node .agents/skills/verify-elements/ctl.mjs type 'role=textbox[name="Country"]' nor
node .agents/skills/verify-elements/ctl.mjs press ArrowDown
node .agents/skills/verify-elements/ctl.mjs press Enter
node .agents/skills/verify-elements/ctl.mjs events --type select
node .agents/skills/verify-elements/ctl.mjs snapshot
node .agents/skills/verify-elements/ctl.mjs screenshot
```

After `type`, `focused.value` is `nor`. After ArrowDown it previews `Norway`. After Enter, `eventsDuringAction` and `events --type select` hold exactly one `select` from `w-combobox` with `{"value":"no"}`. The `snapshot` shows `textbox "Country"` reading `Norway`, `combobox` without `[expanded]` and no listbox, and the screenshot shows the closed field reading Norway.

## Features

- [options](features/options.md): `<option>` children, the `options` property, labels versus values, live updates and the initial `value`.
- [filtering](features/filtering.md): what the typed text matches, the empty result, reopening after a pick, `match-text-segments`.
- [keyboard-navigation](features/keyboard-navigation.md): keys that open the list, arrows, Home, End, PageUp and PageDown.
- [keyboard-selection](features/keyboard-selection.md): Enter, Escape, Backspace and Delete.
- [pointer](features/pointer.md): clicking the field, an option or elsewhere, and hover.
- [focus-and-blur](features/focus-and-blur.md): `open-on-focus`, select-on-blur and turning it off.
- [events](features/events.md): `select`, `change`, `blur` and `focus`, their details and duplicates.
- [form](features/form.md): submitted value, empty fields, reset and `required`.
- [field-attributes](features/field-attributes.md): `label`, `placeholder`, `help-text`, `optional` and `autocomplete`.
- [invalid-and-disabled](features/invalid-and-disabled.md): the `invalid` and `disabled` states.
- [tooltip](features/tooltip.md): the info button and tooltip after the label.
- [remote-search](features/remote-search.md): `disable-static-filtering` with options set by the consumer.
- [screen-reader](features/screen-reader.md): roles, the highlighted option, `[expanded]` and the status message.
- [localization](features/localization.md): status and "Optional" text in da, en, fi, nb and sv.
- [styling](features/styling.md): component tokens, parts and brands.

## Gotchas

- Always mount with `--with textfield`. `w-combobox` renders `w-textfield` without importing it (a product bug), so without it `mount` warns and the field renders nothing.
- Drive the focused `role=textbox[name="Country"]`. `role=combobox`, `[expanded]` and `aria-activedescendant` sit on the unnamed `w-textfield` wrapper around it.
- Events are noisy: three `change` per keystroke, and leaving the field or clicking an option fires `select` and `blur` two or three times. Use `events --type`, and skip entries with `insideShadowOf: "w-combobox"`, which come from the internal `w-textfield`.
- The open list covers whatever is below it, so `click` on an element under it times out. Put pointer targets above the combobox, or close the list first.
- Typing into a field that shows a label replaces the label with the option's value first: after picking Norway, typing `x` gives `nox`. Clear the field with `press ControlOrMeta+a Backspace` before typing new text.
- `optional` and `tooltip` add to the accessible name (`Country Optional`). Match those with `[name=/^Country/]`.
