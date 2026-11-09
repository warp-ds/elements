# Tabs

Tabs split content into panels and show one panel at a time. A consumer writes three elements: `w-tabs` around everything, one `w-tab` per tab, and one `w-tab-panel` per panel, paired through the tab's `for` and the panel's `id`. `w-tabs` (`packages/tabs/tabs.ts`) owns the selection, the keyboard, the tab row and the selection indicator. `w-tab` (`packages/tab/tab.ts`) is the tab itself, with an optional icon. `w-tab-panel` (`packages/tab-panel/tab-panel.ts`) shows its content when its tab is selected. Each package has a `styles.ts` and a `react.ts`. There are no user-facing strings.

## Mount

```bash
pnpm ctl mount '<w-tabs><w-tab for="one">One</w-tab><w-tab for="two">Two</w-tab><w-tab-panel id="one">First panel</w-tab-panel><w-tab-panel id="two">Second panel</w-tab-panel></w-tabs>'
```

## Core journey

```bash
pnpm ctl mount '<button>Before</button><w-tabs><w-tab for="one">One</w-tab><w-tab for="two">Two</w-tab><w-tab for="three">Three</w-tab><w-tab-panel id="one">First panel</w-tab-panel><w-tab-panel id="two">Second panel</w-tab-panel><w-tab-panel id="three">Third panel</w-tab-panel></w-tabs>'
pnpm ctl press Tab --selector 'role=button[name="Before"]'
pnpm ctl press ArrowRight
pnpm ctl click 'w-tab[for="three"]'
pnpm ctl events --type change
pnpm ctl snapshot --platform
sleep 0.3
pnpm ctl screenshot
```

Tab from the button focuses the first tab (`focused` ends in `-0`). ArrowRight moves focus to the second tab (`-1`) and fires `change` with `{"panelId":"two"}`. The click fires `change` with `{"panelId":"three"}`, so `events --type change` holds those two. The `snapshot` shows `tab "Three" [selected] [focused] (controls: tabpanel)` and one `tabpanel` holding "Third panel". The screenshot shows Three in the selected color with the indicator under it.

## Features

- [selection](features/selection.md): the default tab, the `active` attribute, clicking, the `change` event and which panel shows.
- [keyboard-navigation](features/keyboard-navigation.md): arrows, Home, End and modifier keys.
- [focus](features/focus.md): Tab into the tab row and on into the panel, and the focus ring.
- [layout](features/layout.md): equal-width columns, wrapping labels and more than nine tabs.
- [selection-indicator](features/selection-indicator.md): the sliding line, resizing and rows.
- [icons](features/icons.md): the `icon` slot, inline or above the label with `over`.
- [screen-reader](features/screen-reader.md): roles, `[selected]`, which panel each tab controls, hidden panels and panel names.
- [markup](features/markup.md): pairing tabs with panels, element order, `hidden` panels and hydration.
- [live-changes](features/live-changes.md): tabs added or removed after load, and upgrade order.
- [styling](features/styling.md): component tokens, parts and hover.

## Gotchas

- Tabs and panels get their roles through `ElementInternals`, which Playwright can't see: `role=tab` matches nothing, and plain `snapshot` shows the `tablist` and the text but no tabs or panels. Select tabs with `w-tab[for="two"]` and read roles and states with `snapshot --platform`, which is Chromium only. `check --browser all` skips it in Firefox and WebKit.
- Tab ids are generated, so `focused` reads like `w-tab#w-tab-Fy9Ob_wgPsaP-SE7j2EZM-0`. The number at the end is the tab's position, counting from 0.
- `change` on `w-tabs`, with `{panelId}`, is the only event. It fires for clicks, keys and when code sets `active`, but not on load.
- The indicator slides for 0.15 s after a selection. Put `sleep 0.3` before `box` or `screenshot`.
- `mount` defines the three elements before the HTML goes in. A page whose HTML arrives before its scripts can upgrade them in another order, which breaks tabs: see upgrade-order in [live-changes](features/live-changes.md) and drive it with `mount --late`.
