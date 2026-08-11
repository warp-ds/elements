## Styling API

Badge supports styling through **component tokens** (CSS custom properties with a `--w-c-` prefix) and **parts**.

### Parts

Use `::part(part-name)` from outside the component.

- `base` - the root element of the badge

```css
w-badge::part(base) {
	text-transform: uppercase;
	border: 1px solid currentColor;
}
```

### Component tokens

Set these on `<w-badge>` to override visuals.

```css
w-badge {
	--w-c-badge-bg: rebeccapurple;
	--w-c-badge-color: white;
	--w-c-badge-border-radius: 9999px;
}
```

##### Layout and typography

- `--w-c-badge-border-radius`
- `--w-c-badge-font-size`
- `--w-c-badge-line-height`
- `--w-c-badge-padding-x`
- `--w-c-badge-padding-y`

##### Background and text

- `--w-c-badge-bg`
- `--w-c-badge-color`

##### Positioned badges

- `--w-c-badge-backdrop-filter`
