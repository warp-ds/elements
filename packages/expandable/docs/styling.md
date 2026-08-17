## Styling API

Expandable supports styling through **component tokens** (CSS custom properties with a `--w-c-` prefix) and **parts**.

### Parts

Use `::part(part-name)` from outside the component.

- `base` - the root wrapper element
- `chevron` - the chevron container

```css
w-expandable::part(base) {
	box-shadow: inset 0 0 0 1px currentColor;
}
```

### Component tokens

Set these on `<w-expandable>` to override visuals.

```css
w-expandable {
	--w-c-expandable-bg: rebeccapurple;
	--w-c-expandable-border-color: cyan;
	--w-c-expandable-border-radius: 12px;
	--w-c-expandable-padding-x: 1rem;
	--w-c-expandable-padding-y: 1rem;
	--w-c-expandable-gap: 1.25rem;
}
```

##### Surface and border

- `--w-c-expandable-bg`
- `--w-c-expandable-bg-hover`
- `--w-c-expandable-bg-active`
- `--w-c-expandable-border-color`
- `--w-c-expandable-border-width`
- `--w-c-expandable-border-radius`
- `--w-c-expandable-color`
- `--w-c-expandable-icon-color`

##### Layout and spacing

- `--w-c-expandable-padding-x`
- `--w-c-expandable-padding-y`
- `--w-c-expandable-gap` - distance between the title area and the content when both are present

##### Typography

- `--w-c-expandable-title-font-size`
- `--w-c-expandable-title-line-height`
- `--w-c-expandable-title-font-weight`

##### Motion

- `--w-c-expandable-transition-duration`
- `--w-c-expandable-transition-timing-function`
- `--w-c-expandable-expansion-duration`
- `--w-c-expandable-expansion-timing-function`
