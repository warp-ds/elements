## Styling API

This component supports styling through **component tokens** (CSS custom properties with a --w-c- prefix) and **parts**.

### Parts

Use `::part(...)` from outside the component.

- `tooltip` - the tooltip container with background color, padding etc.
- `arrow` - a square container used for positioning the visual part of the arrow
- `beak` - the visual part of the arrow pointing at the target
- `hover-bridge` - an invisible element there to ensure the tooltip doesn't close when moving the cursor from the target to the tooltip

Example:

```css
w-tooltip::part(tooltip) {
  text-transform: uppercase;
}
```

### Component tokens

Set these on `w-tooltip` to override visuals.

```css
w-tooltip {
    --w-c-tooltip-bg: lime;
    --w-c-tooltip-color: black;
}
```

#### Layout & typography

- `--w-c-tooltip-z-index`

#### Background

- `--w-c-tooltip-bg`

#### Text color

- `--w-c-tooltip-color`

##### Shadow

- `--w-c-tooltip-box-shadow`
