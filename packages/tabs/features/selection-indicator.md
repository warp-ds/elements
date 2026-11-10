# Selection indicator

The line that slides under the selected tab.

## Sub-features

- indicator: a 4px line at the bottom of the tab row, as wide as the selected tab, slides to the newly selected tab in 0.15 s. no test
- resize: when the tabs change size, the line catches up 100 ms later. no test
- rows: with ten or more tabs the line stays at the bottom of the last row. Suspected bug, see Gotchas. no test

## How to get to it (user POV)

Any `<w-tabs>`. The user selects another tab and watches the line move, or resizes the window.

## Driving it with ctl

```bash
pnpm ctl mount '<w-tabs><w-tab for="one">One</w-tab><w-tab for="two">Second tab</w-tab><w-tab for="three">Three</w-tab><w-tab-panel id="one">First panel</w-tab-panel><w-tab-panel id="two">Second panel</w-tab-panel><w-tab-panel id="three">Third panel</w-tab-panel></w-tabs>'
pnpm ctl box 'w-tabs [part="selection"]'
pnpm ctl click 'w-tab[for="two"]'
sleep 0.3
pnpm ctl box 'w-tabs [part="selection"]'
pnpm ctl viewport 200 600
sleep 0.3
pnpm ctl box 'w-tabs [part="selection"]'
pnpm ctl viewport reset
pnpm ctl mount '<w-tabs><w-tab for="t1">T1</w-tab><w-tab for="t2">T2</w-tab><w-tab for="t3">T3</w-tab><w-tab for="t4">T4</w-tab><w-tab for="t5">T5</w-tab><w-tab for="t6">T6</w-tab><w-tab for="t7">T7</w-tab><w-tab for="t8">T8</w-tab><w-tab for="t9">T9</w-tab><w-tab for="t10">T10</w-tab><w-tab-panel id="t1">Panel 1</w-tab-panel></w-tabs>'
pnpm ctl box 'w-tabs [part="selection"]'
pnpm ctl screenshot
```

- indicator: in Chromium the line is at x 10, y 56, 114.4 wide and 4 high, under the first tab in [layout](layout.md). After the click it's at x 124.4.
- resize: at 200px wide it follows the second tab to x 70, width 60.
- rows: the line is at y 106, under T10 on the second row, while T1 is selected.

## Gotchas

- Read positions after `sleep 0.3`: right after a click the line is still moving, and after a resize it waits 100 ms before it moves.
- The selected tab also draws its own 4px bottom border, so a screenshot shows a line under it even when the indicator is somewhere else.
- Suspected bug: with ten or more tabs the line sits under the tab in the selected tab's column on the last row. Repro: the ten-tab mount above, then `box` and `screenshot`.
