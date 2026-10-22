# Keyboard navigation

Opening the list from the keyboard and moving the highlight through it.

## Sub-features

- open-keys: typing a character or Backspace opens the list, as does any other unmodified key except Enter, Tab, Delete, Escape, ArrowLeft and ArrowRight. ArrowDown, ArrowUp, Home, End, PageUp and PageDown on a closed list only open it. no test
- arrows: ArrowDown and ArrowUp move the highlight one option and preview its label in the input. Past either end the highlight clears and the typed text comes back; ArrowUp from there goes to the last option. no test
- jump-keys: Home and End go to the first and last option. PageUp and PageDown move 10 options, stopping at the first and last. no test

## How to get to it (user POV)

Any `<w-combobox>` with options. The user focuses the field, presses ArrowDown to open the list, then moves through it with the arrow, Home, End and Page keys.

## Driving it with ctl

```bash
node .agents/skills/verify-elements/ctl.mjs mount '<w-combobox label="Country"><option value="no">Norway</option><option value="se">Sweden</option><option value="dk">Denmark</option><option value="fi">Finland</option><option value="is">Iceland</option><option value="ee">Estonia</option><option value="lv">Latvia</option><option value="lt">Lithuania</option><option value="de">Germany</option><option value="pl">Poland</option><option value="fr">France</option><option value="es">Spain</option></w-combobox>' --with textfield
node .agents/skills/verify-elements/ctl.mjs press ArrowDown --selector 'role=textbox[name="Country"]'
node .agents/skills/verify-elements/ctl.mjs press ArrowDown
node .agents/skills/verify-elements/ctl.mjs press ArrowUp
node .agents/skills/verify-elements/ctl.mjs press ArrowUp
node .agents/skills/verify-elements/ctl.mjs press Home
node .agents/skills/verify-elements/ctl.mjs press PageDown
node .agents/skills/verify-elements/ctl.mjs press PageDown
node .agents/skills/verify-elements/ctl.mjs press PageUp
node .agents/skills/verify-elements/ctl.mjs press End
node .agents/skills/verify-elements/ctl.mjs snapshot 'role=listbox'
```

- open-keys: the first press leaves `focused.value` empty, and the second already highlights `Norway`, so the first only opened the list.
- arrows: `focused.value` reads `Norway`, then empty, then `Spain`. The last `snapshot` shows `option "Spain" [selected]`.
- jump-keys: Home gives `Norway`, PageDown `France` and then `Spain`, PageUp `Sweden`, End `Spain`.

## Gotchas

- docs/accessibility.md says arrows open the list and move. In the code, the first navigation key on a closed list only opens it, so press ArrowDown twice to highlight the first option.
- Suspected bug: a first character typed with Shift doesn't open the list, because keydown ignores modified keys. `ctl type` sends capitals without Shift and hides this. Repro: mount, `press Shift+KeyN --selector 'role=textbox[name="Country"]'`, then `snapshot` shows no `[expanded]`.
- While the list is open, Home and End move the highlight, not the caret.
