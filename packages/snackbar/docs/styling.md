## Styling

Snackbar supports styling through **component tokens** (CSS custom properties with a --w-c- prefix) and **parts**.

### Parts

Use `::part(...)` from outside the component.

#### `<w-snackbar>` parts

- `container` - the live region that positions messages on the screen.

#### `<w-snackbar-item>` parts

- `item` - the container wrapping the message, icon and actions.
- `icon` - the icon for the variant.
- `message` - the default slot, body of the snackbar item.
- `action` - close and action button.

### Component tokens

#### `<w-snackbar>` tokens

Set these on `w-snackbar` to override visuals.

```css
w-snackbar {
    --w-c-snackbar-position-bottom: 32px;
}
```

##### Layout and typography

- `--w-c-snackbar-container-gap`
- `--w-c-snackbar-position-bottom`
- `--w-c-snackbar-position-left`
- `--w-c-snackbar-position-right`
- `--w-c-snackbar-position-top`
- `--w-c-snackbar-z-index`

#### `<w-snackbar-item>` tokens

Set these on `w-snackbar-item` to override visuals.

```css
w-snackbar-item {
    --w-c-snackbar-item-box-shadow: var(--w-shadow-s);
}
```

##### Layout and typography

- `--w-c-snackbar-item-radius`
- `--w-c-snackbar-item-max-width`
- `--w-c-snackbar-item-min-width`
- `--w-c-snackbar-item-padding`

##### Background

- `--w-c-snackbar-item-bg`
- `--w-c-snackbar-item-action-bg-active`
- `--w-c-snackbar-item-action-bg-hover`

##### Text color

- `--w-c-snackbar-item-color`
- `--w-c-snackbar-item-action-color-active`
- `--w-c-snackbar-item-action-color-hover`

##### Shadow

- `--w-c-snackbar-item-box-shadow`
