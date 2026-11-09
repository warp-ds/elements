# Layout

The tab row: its columns, wrapping labels and what happens with more than nine tabs.

## Sub-features

- columns: the tabs sit in one row of equal-width columns, each as wide as the widest tab. Story ManyTabs, no test
- narrow: in a narrow container the columns shrink and the labels wrap. no test
- many: up to nine tabs share one row. A tenth starts a second row. no test

## How to get to it (user POV)

Any `<w-tabs>`. The user sees the tab row at their window's width, and resizes the window.

## Driving it with ctl

```bash
pnpm ctl mount '<w-tabs><w-tab for="one">One</w-tab><w-tab for="two">Second tab</w-tab><w-tab for="three">Three</w-tab><w-tab-panel id="one">First panel</w-tab-panel><w-tab-panel id="two">Second panel</w-tab-panel><w-tab-panel id="three">Third panel</w-tab-panel></w-tabs>'
pnpm ctl box 'w-tab'
pnpm ctl viewport 200 600
pnpm ctl box 'w-tab'
pnpm ctl screenshot
pnpm ctl viewport reset
pnpm ctl mount '<w-tabs><w-tab for="t1">T1</w-tab><w-tab for="t2">T2</w-tab><w-tab for="t3">T3</w-tab><w-tab for="t4">T4</w-tab><w-tab for="t5">T5</w-tab><w-tab for="t6">T6</w-tab><w-tab for="t7">T7</w-tab><w-tab for="t8">T8</w-tab><w-tab for="t9">T9</w-tab><w-tab for="t10">T10</w-tab><w-tab-panel id="t1">Panel 1</w-tab-panel></w-tabs>'
pnpm ctl box 'w-tab[for="t1"], w-tab[for="t10"]'
```

- columns: the first `box` shows three tabs of the same width, 114.4, at x 10, 124.4 and 238.8.
- narrow: at 200px wide the tabs are 60 wide and 72 high, since the labels wrap.
- many: T10 is at x 10, y 60, below T1.

## Gotchas

- The numbers are from Chromium at the default 1024×768 viewport. Fonts shift them slightly in the other engines, so `check --browser all` leaves `box` results out, and `--against` compares them in whole pixels.
- `viewport` lasts past the next `mount`. End a block that changes it with `viewport reset`.
