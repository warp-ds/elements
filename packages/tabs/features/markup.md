# Markup

How tabs and panels are written and paired.

## Sub-features

- pairing: each `w-tab` names its panel with `for`, matching the `w-tab-panel`'s `id`.
- order: tabs and panels can be written in any order, grouped or interleaved. `w-tabs` sorts them into the tab row and the panel area itself.
- hidden-panels: panels written with `hidden`, as older markup and the Default story do, still show when selected. Story Default.
- hydration: server-rendered markup hydrates without warnings when it already carries `slot`, `id`, `tabindex` and the selected tab.

## How to get to it (user POV)

The consumer writes the markup, perhaps on a server. The user sees the tabs in the order they were written and the panel under them.

## Driving it with ctl

```bash
pnpm ctl mount '<w-tabs><w-tab-panel id="two" hidden>Second panel</w-tab-panel><w-tab for="one">One</w-tab><w-tab-panel id="one" hidden>First panel</w-tab-panel><w-tab for="two">Two</w-tab></w-tabs>'
pnpm ctl snapshot --platform
pnpm ctl box 'w-tab'
pnpm ctl click 'w-tab[for="two"]'
pnpm ctl snapshot --platform
```

- pairing, order: the first `snapshot` shows the tabs in the order One, Two, with One `[selected]` and "First panel" showing, and `box` shows both tabs in one row.
- hidden-panels: after the click, "Second panel" shows.

## Gotchas

- hydration can't be driven with `ctl`, which inserts HTML in the browser. The hydration tests cover it.
- `active` and `aria-selected` on a `w-tab` are deprecated. `w-tabs` sets the selection itself.
- Tabs added, removed or upgraded after the HTML is in: see [live-changes](live-changes.md).
