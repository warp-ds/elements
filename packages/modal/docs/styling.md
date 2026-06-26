## Styling API

Modal supports styling through **component tokens** (CSS custom properties with a `--w-c-` prefix) and **parts**.

### Parts

Use `::part(part-name)` from outside the component.

#### `<w-modal>` parts

- `dialog` - the root element inside the component (`<dialog>` element).
- `wrapper` - container for all elements, direct child of `<dialog>`.
- `content` - the container for the `content` slot items (children).

#### `<w-modal-header>` parts

- `header` - the root element inside the component.
- `top` - the container for the image (`top` slot).
- `back` - the back button, if visible.
- `title` - the title element.
- `close` - the close button, if visible.

#### `<w-modal-footer>` parts

- `footer` - the container for slotted items (children)

### Component tokens

#### `<w-modal>` tokens

Set these on `<w-modal>` to override visuals.

```css
w-modal {
    --w-c-modal-backdrop-color: transparent;
}
```

##### Layout and typography

- `--w-c-modal-height`
- `--w-c-modal-max-height`
- `--w-c-modal-min-height`
- `--w-c-modal-padding-bottom`
- `--w-c-modal-translate-distance`
- `--w-c-modal-width`

##### Background

- `--w-c-modal-backdrop-color`
- `--w-c-modal-bg`

##### Text color

- `--w-c-modal-color`

##### Shadow

- `--w-c-modal-box-shadow`

#### `<w-modal-header>` tokens

Set these on `<w-modal-header>` to override visuals.

##### Layout and typography

- `--w-c-modal-header-font-size`
- `--w-c-modal-header-line-height`
- `--w-c-modal-header-margin-bottom`

#### `<w-modal-footer>` tokens

Set these on `<w-modal-footer>` to override visuals.

##### Layout and typography

- `--w-c-modal-footer-gap` - adjusts the flex gap between actions in the footer
