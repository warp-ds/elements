# Live changes

Tabs added or removed after load, and tabs that upgrade after their HTML is on the page.

## Sub-features

- added-later: a tab and panel appended after load join the tab row and the columns. The arrow keys reach the new tab. Tab doesn't, until the selection changes. no test
- removed: removing the selected tab leaves no tab selected, while its panel keeps showing. Suspected bug, see Gotchas. no test
- upgrade-order: when `w-tabs` upgrades before its `w-tab` children, no tab is marked selected and Tab skips the tab row. The first panel still shows. Suspected bug, see Gotchas. no test

## How to get to it (user POV)

The consumer adds or removes tabs from script, or serves the HTML before the scripts that define the elements. The user expects the same tabs to work either way.

## Driving it with ctl

```bash
pnpm ctl mount '<w-tabs><w-tab for="one">One</w-tab><w-tab for="two">Two</w-tab><w-tab-panel id="one">First panel</w-tab-panel><w-tab-panel id="two">Second panel</w-tab-panel></w-tabs>'
pnpm ctl eval 'document.querySelector("w-tabs").append(Object.assign(document.createElement("w-tab"), { htmlFor: "three", textContent: "Three" }), Object.assign(document.createElement("w-tab-panel"), { id: "three", textContent: "Third panel" }))'
pnpm ctl box 'w-tab'
pnpm ctl press End --selector 'w-tab[for="one"]'
pnpm ctl snapshot --platform
pnpm ctl eval 'document.querySelector("w-tab[for=three]").remove()'
pnpm ctl snapshot --platform
pnpm ctl mount '<button>Before</button><w-tabs><w-tab for="one">One</w-tab><w-tab for="two">Two</w-tab><w-tab-panel id="one">First panel</w-tab-panel><w-tab-panel id="two">Second panel</w-tab-panel></w-tabs><input aria-label="After">' --late
pnpm ctl press Tab --selector 'role=button[name="Before"]'
pnpm ctl snapshot --platform
```

- added-later: `box` lists three tabs in one row, and End selects Three and shows "Third panel".
- removed: after the `remove`, the `snapshot` shows tabs One and Two, neither `[selected]`, and "Third panel" still showing.
- upgrade-order: Tab from the button skips the tabs and focuses the `input` after them, and the `snapshot` shows no `[selected]` while "First panel" shows.

## Gotchas

- Suspected bug: when `w-tabs` upgrades before `w-tab`, which `mount --late` does on purpose, no tab gets `tabindex` 0, so the tab row is out of the Tab order and no tab looks or reads as selected. Real pages get there when the components' scripts load separately. Repro: the `--late` mount above.
- Suspected bug: removing the selected tab leaves `active` pointing at it, so no tab is selected, the tabs drop out of the Tab order and the removed tab's panel keeps showing. Repro: the `remove` above.
