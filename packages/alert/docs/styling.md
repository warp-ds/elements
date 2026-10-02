## Styling API

Alert supports styling through **component tokens** (CSS custom properties with a `--w-c-` prefix) and **parts**.

### Parts

Use `::part(part-name)` from outside the component.

- `base` - the root element of the alert
- `icon` - the icon
- `content` - the alert message text

```css
w-alert::part(base) {
	color: hotpink;
}
```

### Component tokens

Set these on `<w-alert>` to override visuals.

```css
w-alert {
	--w-c-alert-color-background: rebeccapurple;
}
```

##### Surface and border

- `--w-c-alert-color-background`
- `--w-c-alert-color-border`
- `--w-c-alert-color-border-left`
- `--w-c-alert-border-radius`
- `--w-c-alert-border-width`
- `--w-c-alert-border-left-width`

##### Layout

- `--w-c-alert-padding`

##### Icon

- `--w-c-alert-icon-size`
- `--w-c-alert-color-icon`

##### Typography

- `--w-c-alert-color-text`
- `--w-c-alert-font-size`
- `--w-c-alert-line-height`
