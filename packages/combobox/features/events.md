# Events

The CustomEvents `w-combobox` dispatches for consumers: `select`, `change`, `blur` and `focus`.

## Sub-features

- select: `{value}` when an option is picked by Enter, by click or by select-on-blur.
- change: `{value}` on every keystroke, on Backspace and when Escape clears the field. Never on a pick. no test
- focus-blur: `blur` with `{value}` when focus leaves the field. `focus` without detail, only with `open-on-focus`. no test
- bubbling: all four bubble and are composed, so ancestors and inline `on*` attributes receive them. no test

## How to get to it (user POV)

Listen on the element or an ancestor: `addEventListener("select", …)`, or `onselect` in markup. The user types, picks an option and leaves the field.

## Driving it with ctl

```bash
node .agents/skills/verify-elements/ctl.mjs eval 'delete window.picked'
node .agents/skills/verify-elements/ctl.mjs mount '<div onselect="(window.picked ??= []).push(event.detail.value)"><w-combobox label="Country" open-on-focus><option value="no">Norway</option><option value="se">Sweden</option></w-combobox></div><button>Next</button>' --with textfield
node .agents/skills/verify-elements/ctl.mjs type 'role=textbox[name="Country"]' n
node .agents/skills/verify-elements/ctl.mjs press ArrowDown Enter
node .agents/skills/verify-elements/ctl.mjs press Tab
node .agents/skills/verify-elements/ctl.mjs events
node .agents/skills/verify-elements/ctl.mjs eval 'window.picked'
```

- change: `type` reports `focus` twice, then `change` with `""`, `"n"` and `"n"`.
- select: `press ArrowDown Enter` reports one `select` `{"value":"no"}`, and no `change`.
- focus-blur: `press Tab` reports `select` and `blur` with `{"value":"no"}`, twice each.
- bubbling: `eval 'window.picked'` returns `["no","no","no"]`, caught by the wrapping `<div>`.

## Gotchas

- Suspected bug, duplicates: each keystroke fires `change` three times (the previous text on keydown, then the new text twice), and `focus`, `blur` and select-on-blur fire twice. The combobox listens on `w-textfield`, which delivers both the native event and its deprecated CustomEvent copy. Repro: core mount, `type 'role=textbox[name="Country"]' n`, then `events --type change` has 3 events.
- The native `focus` and `blur` from the inner input also reach `w-combobox`, so an `onblur` handler runs three times per blur. `events` records only CustomEvents.
- Entries with `insideShadowOf: "w-combobox"` (`focus`, `input`, `change` and `blur` from `w-textfield`) are internal, not public API.
- The events have no `@fires` JSDoc, so the custom elements manifest and generated types miss them. Only `react.ts` declares them (`onSelect`, `onChange`, `onBlur`, `onFocus`).
