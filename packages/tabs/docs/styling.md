## Styling API

Tabs support styling through **component tokens** (CSS custom properties with a `--w-c` prefix) and **parts**.

### Parts

Use `::part(part-name)` from outside the component.

#### `<w-tabs>` parts

- `base` - the root element inside the component.
- `tablist` - the container for all the tabs (not the tab panels).
- `selection` - the indicator for the active tab.

#### `<w-tab>` parts

- `base` - the root element inside the component.
- `icon-inline` - the icon when shown inline with the tab name.
- `icon-block` - the icon when shown above the tab name.

#### `<w-tab-panel>` parts

- `base` - the root element inside the component.

### Component tokens

#### `<w-tabs>` tokens

Set these on `<w-tabs>` to override visuals.

```css
w-tabs {
	--w-c-tabs-selection-color: limegreen;
}
```

- `--w-c-tabs-border-width`
- `--w-c-tabs-border-color`
- `--w-c-tabs-selection-width`
- `--w-c-tabs-selection-color`

#### `<w-tab>` tokens

Set these on `<w-tab>` to override visuals.

```css
w-tab {
	--w-c-tab-active-color: magenta;
}
```

- `--w-c-tab-inactive-color`
- `--w-c-tab-hover-color`
- `--w-c-tab-hover-color-border`
- `--w-c-tab-active-color`
- `--w-c-tab-active-color-border`

#### `<w-tab-panel>` tokens

`<w-tab-panel>` has no tokens.
