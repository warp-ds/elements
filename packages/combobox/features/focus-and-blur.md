# Focus and blur

What entering and leaving the field does: `open-on-focus`, and select-on-blur with Tab or a click elsewhere.

## Sub-features

- open-on-focus: with `open-on-focus`, focusing the field opens the list and fires `focus`. The list holds the options that match the current text. Story OpenOnFocus.
- select-on-blur: on by default. Leaving the field (Tab or a click elsewhere) closes the list and selects the highlighted option, or else the listed option whose value equals the text. no test
- select-on-blur-off: with the `selectOnBlur` property set to `false`, leaving keeps the typed text as the value and fires no `select`. no test

## How to get to it (user POV)

Add `open-on-focus` to show options on entry. Select-on-blur needs no markup. The user tabs or clicks into the field, types or arrows to an option, and tabs away.

## Driving it with ctl

```bash
node .agents/skills/verify-elements/ctl.mjs mount '<w-combobox label="Country" open-on-focus value="se"><option value="no">Norway</option><option value="se">Sweden</option><option value="dk">Denmark</option></w-combobox><button>Next</button>' --with textfield
node .agents/skills/verify-elements/ctl.mjs click 'role=textbox[name="Country"]'
node .agents/skills/verify-elements/ctl.mjs snapshot
node .agents/skills/verify-elements/ctl.mjs press ControlOrMeta+a Backspace d e n ArrowDown ArrowDown Tab
node .agents/skills/verify-elements/ctl.mjs press ControlOrMeta+a Backspace n o Tab --selector 'role=textbox[name="Country"]'
node .agents/skills/verify-elements/ctl.mjs eval 'document.querySelector("w-combobox").selectOnBlur = false'
node .agents/skills/verify-elements/ctl.mjs press ControlOrMeta+a Backspace s w e ArrowDown Tab --selector 'role=textbox[name="Country"]'
node .agents/skills/verify-elements/ctl.mjs snapshot
```

- open-on-focus: the click reports `focus` from `w-combobox` (no detail). The `snapshot` shows `combobox [expanded]`, `status: 1 suggestion` and only `option "Sweden"`.
- select-on-blur: `den` lists Sweden and Denmark, the second ArrowDown highlights Denmark, and Tab reports `select` `{"value":"dk"}` with `focused` on the button. Typing `no` and Tab reports `select` `{"value":"no"}`.
- select-on-blur-off: after the `eval`, Tab reports `blur` but no `select`, and the last `snapshot` shows the textbox reading `swe`.

## Gotchas

- Matching by text compares the text with option values, and only among the options still listed for it: `no` selects Norway because "Norway" contains "no", but `se` selects nothing. The field keeps showing `no`, not the label.
- The attribute can't turn select-on-blur off: `select-on-blur="false"` is still `true`. Set the property, and report it as a precondition.
- Tabbing through a field whose value matches an option fires `select` twice, although nothing changed.
- With a value set, `open-on-focus` lists only the options matching it, not the full list as the JSDoc suggests.
