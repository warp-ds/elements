# Keyboard navigation

Switching tabs with the arrow keys, Home and End while a tab has focus.

## Sub-features

- arrows: ArrowRight and ArrowLeft select the next or previous tab, show its panel, fire `change` and move focus with the selection.
- ends: the arrows stop at the first and last tab. They don't wrap. no test
- home-end: Home and End select the first and last tab. no test
- modifiers: with Alt, Control or Shift held, these keys do nothing. Meta doesn't count: Meta+ArrowLeft still switches tabs. no test

## How to get to it (user POV)

Any `<w-tabs>`. The user tabs to the tab row (see [focus](focus.md)) and moves along it with the arrow keys, Home and End.

## Driving it with ctl

```bash
pnpm ctl mount '<w-tabs><w-tab for="one">One</w-tab><w-tab for="two">Two</w-tab><w-tab for="three">Three</w-tab><w-tab-panel id="one">First panel</w-tab-panel><w-tab-panel id="two">Second panel</w-tab-panel><w-tab-panel id="three">Third panel</w-tab-panel></w-tabs>'
pnpm ctl press ArrowRight --selector 'w-tab[for="one"]'
pnpm ctl press End
pnpm ctl press ArrowRight
pnpm ctl press Shift+ArrowLeft
pnpm ctl press Meta+ArrowLeft
pnpm ctl press Home
pnpm ctl press ArrowLeft
pnpm ctl snapshot --platform
```

- arrows: ArrowRight moves `focused` to `-1` with `change` `{"panelId":"two"}`.
- home-end: End gives `-2` and `three`, Home gives `-0` and `one`.
- ends: ArrowRight on the last tab and ArrowLeft on the first report no events, and `focused` stays.
- modifiers: Shift+ArrowLeft reports nothing. Meta+ArrowLeft reports `change` `{"panelId":"two"}`.
- The `snapshot` shows `tab "One" [selected] [focused]` and "First panel".

## Gotchas

- Selection follows focus: every tab the arrows pass fires `change`. A consumer that loads panel content on `change` loads each one.
- The keys do nothing when no tab is selected (see [selection](selection.md)).
- Suspected bug: Meta+ArrowLeft and Meta+ArrowRight switch tabs although the other modifiers turn the keys off. On macOS these are line start, line end and browser back. Repro: the block above, line `press Meta+ArrowLeft`.
