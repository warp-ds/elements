# Icons

An icon in a tab, next to its label or above it.

## Sub-features

- inline: an element with `slot="icon"` inside a `w-tab` shows before the label, centered with it. Story WithIcons, no test
- over: `over` on the `w-tab` puts the icon above the label. Story WithIconsOver, no test

## How to get to it (user POV)

`<w-tab for="info"><w-icon name="Info" slot="icon"></w-icon>Info</w-tab>`, with `over` on the `w-tab` to stack them. The user sees the icon in the tab and selects it like any other.

## Driving it with ctl

```bash
pnpm ctl mount '<w-tabs><w-tab for="info"><w-icon name="Info" slot="icon"></w-icon>Info</w-tab><w-tab for="search" over><w-icon name="Search" slot="icon"></w-icon>Search</w-tab><w-tab-panel id="info">Info panel</w-tab-panel><w-tab-panel id="search">Search panel</w-tab-panel></w-tabs>'
pnpm ctl box 'w-tab w-icon'
pnpm ctl snapshot --platform
pnpm ctl screenshot
```

- inline: the first icon is at y 41, level with the "Info" label.
- over: the second icon is at y 26, above the "Search" label, centered in its tab.
- The `snapshot` shows `tab "Circle with letter i inside Info" [selected]` and `tab "Magnifying glass Search"`, each with an `image` inside.

## Gotchas

- The icon's title is part of the tab's accessible name, so a screen reader reads "Circle with letter i inside Info". Suspected bug, since the label already names the tab. Repro: the block above.
- `w-icon` is a separate component. `mount` imports it because the tag is in the HTML. A page has to import it too.
- `over` applies to one tab. The block above mixes both layouts in one row.
