## Styling API

Box supports styling through **component tokens** (CSS custom properties with a `--w-c-` prefix) and **parts**.

### Parts

Use `::part(part-name)` from outside the component.

- `base` - the root element of the box

```css
w-box::part(base) {
	box-shadow: inset 0 0 0 1px currentColor;
	text-transform: uppercase;
}
```

### Component tokens

Set these on `<w-box>` to override visuals.

```css
w-box {
	--w-c-box-bg: rebeccapurple;
	--w-c-box-border-color: cyan;
	--w-c-box-border-radius: 12px;
	--w-c-box-padding: 2rem;
}
```

##### Surface and border

- `--w-c-box-bg`
- `--w-c-box-border-color`
- `--w-c-box-border-radius`
- `--w-c-box-border-width`

##### Layout

- `--w-c-box-padding`
- `--w-c-box-bleed-margin-inline`
