## Styling API

Card supports styling through **component tokens** (CSS custom properties with a `--w-c-` prefix) and **parts**.

### Parts

Use `::part(part-name)` from outside the component.

- `base` - the root element of the card
- `border` - the inset border of the card

```css
w-card::part(base) {
	padding: 48px;
	background: rebeccapurple;
	color: cyan;
}
w-card::part(border) {
	border-color: magenta;
	border-width: 8px;
}
```

### Component tokens

Set these on `<w-card>` to override visuals.

```css
w-card {
    --w-c-card-border-radius: 0px;
}
```

##### Layout and typography

- `--w-c-card-border-radius`
- `--w-c-card-border-width`
- `--w-c-card-border-color`
- `--w-c-card-border-color-active`
- `--w-c-card-border-color-hover`

##### Background

- `--w-c-card-bg`
- `--w-c-card-bg-active`
- `--w-c-card-bg-hover`

##### Shadow

- `--w-c-card-box-shadow`
- `--w-c-card-box-shadow-active`
- `--w-c-card-box-shadow-hover`
