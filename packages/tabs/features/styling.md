# Styling

The component tokens and parts a consumer can style, and the hover look.

## Sub-features

- tabs-tokens: on `w-tabs` or an ancestor, `--w-c-tabs-border-width` and `--w-c-tabs-border-color` style the line under the tab row, `--w-c-tabs-selection-width` and `--w-c-tabs-selection-color` the indicator. Story StylingAPI, no test
- tab-tokens: on `w-tab` or an ancestor, `--w-c-tab-inactive-color`, `--w-c-tab-hover-color`, `--w-c-tab-hover-color-border`, `--w-c-tab-active-color` and `--w-c-tab-active-color-border` color the labels and their bottom borders. Story StylingAPI, no test
- parts: `w-tabs::part(base)`, `part(tablist)` and `part(selection)`, `w-tab::part(base)`, `part(icon-inline)` and `part(icon-block)`, and `w-tab-panel::part(base)`. Story StylingAPI, no test
- hover: pointing at an unselected tab gives its label and bottom border the hover colors. no test

## How to get to it (user POV)

The consumer sets the tokens or `::part()` rules in their own CSS. The user sees the colors and spacing.

## Driving it with ctl

```bash
pnpm ctl mount '<style>w-tabs { --w-c-tabs-selection-color: limegreen; } w-tab { --w-c-tab-active-color: magenta; --w-c-tab-hover-color: teal; } w-tabs::part(tablist) { column-gap: 16px; }</style><w-tabs><w-tab for="one">One</w-tab><w-tab for="two">Two</w-tab><w-tab-panel id="one">First panel</w-tab-panel><w-tab-panel id="two">Second panel</w-tab-panel></w-tabs>'
pnpm ctl styles 'w-tabs [part="selection"]' --props=border-bottom-color
pnpm ctl styles 'w-tab[for="one"] [part="base"]' --props=color
pnpm ctl styles 'w-tab[for="two"] [part="base"]' --props=color
pnpm ctl hover 'w-tab[for="two"]'
pnpm ctl styles 'w-tab[for="two"] [part="base"]' --props=color
pnpm ctl styles 'w-tabs [part="tablist"]' --props=column-gap
pnpm ctl screenshot
```

- tabs-tokens: the indicator's `border-bottom-color` is `rgb(50, 205, 50)`.
- tab-tokens: the selected tab's label is `rgb(255, 0, 255)`, and the other tab's is the default inactive color, `rgb(92, 92, 102)` in finn-no.
- hover: after `hover`, the second tab's label is `rgb(0, 128, 128)`.
- parts: the tablist's `column-gap` is `16px`.

## Gotchas

- A tab looks selected because it has `tabindex="0"`, not because it is selected. When the two disagree, as in upgrade-order in [markup](markup.md), the selected tab looks unselected.
- The `w-tabs [part="base"]` selector also matches each tab's `base`. Select through a tab, as above, or use `tablist` and `selection`.
- Custom colors can fail contrast: `a11y` flags the magenta above at 3.1:1.
