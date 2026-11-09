# Focus

Tabbing into the tab row, on into the panel and back.

## Sub-features

- tab-in: only the selected tab is in the Tab order (`tabindex` 0, the others -1), so Tab lands on it, and the arrows move the 0 along with the selection.
- tab-out: Tab from the selected tab goes to the next focusable element, inside its panel if it has one. Panels aren't focusable themselves. Shift+Tab comes back to the selected tab. no test
- focus-ring: a tab focused from the keyboard shows a 2px solid outline in the focus color. Firefox shows its own ring instead (see Gotchas).

## How to get to it (user POV)

Any `<w-tabs>` between other focusable elements. The user tabs in, tabs on into the panel's content and shift-tabs back.

## Driving it with ctl

```bash
pnpm ctl mount '<button>Before</button><w-tabs><w-tab for="one">One</w-tab><w-tab for="two">Two</w-tab><w-tab-panel id="one">First panel <input aria-label="Note"></w-tab-panel><w-tab-panel id="two">Second panel</w-tab-panel></w-tabs><input aria-label="After">'
pnpm ctl press Tab --selector 'role=button[name="Before"]'
pnpm ctl styles 'w-tab[for="one"]' --props=outline-style,outline-width
pnpm ctl press Tab
pnpm ctl press Shift+Tab
pnpm ctl press ArrowRight
pnpm ctl eval '[...document.querySelectorAll("w-tab")].map((tab) => tab.tabIndex)'
pnpm ctl press Tab
```

- tab-in: Tab from the button gives `focused` ending in `-0`. After ArrowRight the `eval` returns `[-1,0]`.
- focus-ring: `styles` reads `solid` and `2px` in Chromium and WebKit, `auto` and `3px` in Firefox.
- tab-out: Tab from the first tab focuses the `input` in its panel, and Shift+Tab returns to `-0`. From the second tab, whose panel has nothing focusable, Tab reaches the `input` after the tabs.

## Gotchas

- Tab skips a panel with nothing focusable in it, so a keyboard user goes from the tab straight past the panel's text.
- Suspected bug, Firefox only: the Warp reset stylesheet's Firefox focus rule (`:-moz-focusring`) beats the tab's own outline, so Firefox draws its default ring. It likely affects every component that styles its own focus ring. Repro: this block with `check --browser all`, which lists the `styles` line as a difference.
- If no tab has `tabindex` 0, Tab skips the whole tab row: see [selection](selection.md) and [live-changes](live-changes.md) for how that happens.
