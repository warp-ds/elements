# Keyboard selection

Committing, reverting and editing from the keyboard: Enter, Escape, Backspace and Delete. Tab is in focus-and-blur.md.

## Sub-features

- enter: Enter selects the highlighted option: `select` with its value, its label in the input, list closed. With nothing highlighted it only closes, and the typed text stays the value. no test
- escape: on an open list, Escape closes it and brings back the typed text. On a closed list it clears the field and fires `change` with `""`. no test
- backspace-delete: Backspace reopens the list, first putting the highlighted option's label in the field. Delete closes the list. Both also edit the text as usual. no test

## How to get to it (user POV)

Any `<w-combobox>` with options. The user types, arrows to an option and presses Enter, or presses Escape to back out.

## Driving it with ctl

```bash
pnpm ctl mount '<w-combobox label="Country"><option value="no">Norway</option><option value="se">Sweden</option><option value="dk">Denmark</option></w-combobox>' --with textfield
pnpm ctl type 'role=textbox[name="Country"]' swe
pnpm ctl press ArrowDown
pnpm ctl press Escape
pnpm ctl press Escape
pnpm ctl press ArrowDown ArrowDown Backspace
pnpm ctl press Enter
pnpm ctl press ArrowDown ArrowDown Enter
pnpm ctl press ArrowDown Delete
pnpm ctl snapshot
```

- enter: the first Enter has no `select` and keeps `Norwa`. `press ArrowDown ArrowDown Enter` reports `select` `{"value":"no"}`, and the `snapshot` shows the textbox reading `Norway`.
- escape: after ArrowDown previews `Sweden`, the first Escape gives `focused.value` `swe`. The second has `change` `{"value":""}` in `eventsDuringAction` and empties the field.
- backspace-delete: `press ArrowDown ArrowDown Backspace` reports `change` with `Norway`, then `Norwa`, and `focused.value` `Norwa`. After `press ArrowDown Delete`, the `snapshot` has no listbox.

## Gotchas

- Suspected bug: typing while an option is highlighted, or while the field shows a picked label, replaces the text with the option's value. Repro: mount, `type 'role=textbox[name="Country"]' swe`, `press ArrowDown`, then `type 'role=textbox[name="Country"]' x` reads `sex`.
- Enter never submits a surrounding form (see form.md).
