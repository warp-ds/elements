# Remote search

`disable-static-filtering`: the consumer filters, for example with a server request, and sets `options`.

## Sub-features

- unfiltered: with `disable-static-filtering`, every entry in `options` is listed as given, whatever the text. Story DisableStaticFiltering, no test.
- consumer-filtering: the consumer filters on `change` and sets `options`, and the list follows. Story DisableStaticFiltering, no test.
- auto-open: with exactly one option that isn't the current value, the list opens by itself, even without focus. no test

## How to get to it (user POV)

`<w-combobox disable-static-filtering>`, plus consumer code that sets `options` from `change`. The user types, waits for results and picks one.

## Driving it with ctl

```bash
node .agents/skills/verify-elements/ctl.mjs mount --file packages/combobox/features/fixtures/remote-search.html --with textfield
node .agents/skills/verify-elements/ctl.mjs snapshot
node .agents/skills/verify-elements/ctl.mjs type 'role=textbox[name="Country"]' swe
node .agents/skills/verify-elements/ctl.mjs snapshot
node .agents/skills/verify-elements/ctl.mjs press ArrowDown Enter
node .agents/skills/verify-elements/ctl.mjs type 'role=textbox[name="City"]' xyz
node .agents/skills/verify-elements/ctl.mjs snapshot
```

- auto-open: right after the mount, City is `combobox [expanded]` with `option "Oslo"`, with nothing focused.
- consumer-filtering: after `swe`, Country lists only `Sweden`, and `press ArrowDown Enter` reports `select` `{"value":"se"}`.
- unfiltered: after `xyz`, City still lists `Oslo`.

## Gotchas

- Suspected bug: the status counts options whose label contains the text, not the options shown. After `xyz`, City reads `status: No suggestions` with Oslo listed.
- `change` fires three times per keystroke, the first with the previous text, so a consumer's request runs three times (see events.md).
- The story's `<script>` doesn't run in a mount. The inline `onchange` stands in for the consumer's listener.
