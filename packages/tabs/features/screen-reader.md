# Screen reader

What assistive technology gets: roles, the selected tab, which panel each tab controls, and panel names.

## Sub-features

- roles: the tabs sit in a `tablist`. Each `w-tab` is a `tab` and each `w-tab-panel` a `tabpanel`.
- selected: the selected tab is `[selected]`. The others aren't.
- controls: each tab controls the panel its `for` names, or the element named by its own `aria-controls`.
- hidden-panels: panels of unselected tabs are left out of the tree. no test
- panel-name: no panel has an accessible name. Suspected bug, see Gotchas. no test

## How to get to it (user POV)

Any `<w-tabs>`, optionally with `aria-controls` on a `w-tab` that controls something other than its panel. A screen reader user hears "tab, selected, 1 of 2", moves with the arrow keys and reads the panel.

## Driving it with ctl

```bash
pnpm ctl mount '<w-tabs><w-tab for="one">One</w-tab><w-tab for="two" aria-controls="details">Two</w-tab><w-tab-panel id="one">First panel</w-tab-panel><w-tab-panel id="two">Second panel</w-tab-panel></w-tabs><section id="details" aria-label="Details">More details</section>'
pnpm ctl snapshot --platform
pnpm ctl click 'w-tab[for="two"]'
pnpm ctl snapshot --platform
pnpm ctl snapshot
pnpm ctl a11y
```

- roles, selected, controls: the first `snapshot` shows `tablist`, then `tab "One" [selected] (controls: tabpanel)` and `tab "Two" (controls: region "Details")`.
- hidden-panels: it shows one `tabpanel`, holding "First panel". After the click it holds "Second panel", and the tab "One" has lost `[selected]`.
- panel-name: both snapshots show `- tabpanel` without a name.
- The plain `snapshot` shows `tablist: One Two` and the panel text, without tabs or panels.
- `a11y` reports no violations.

## Gotchas

- Roles and states come from `ElementInternals`. Plain `snapshot`, `role=` selectors and axe only see the `tablist`, so `a11y` passing says nothing about the tabs. Use `snapshot --platform`, which is Chromium only.
- `(controls: tabpanel)` shows only while the panel is in the tree. A tab whose panel is hidden shows no relation.
- Suspected bug: panels have no accessible name, though they are meant to be named by their tab. Repro: the core mount, then `snapshot --platform` shows `- tabpanel` with no name.
