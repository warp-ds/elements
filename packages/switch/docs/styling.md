## Styling API

Switch supports styling through **component tokens** (CSS custom properties with a `--w-c-` prefix) and **parts**.

### Parts

Use `::part(part-name)` from outside the component.

- `base` - takes up space in the layout and acts as a relative container for absolute positioning the track and handle. 
- `track` - the visual border and background of the switch.
- `handle` - the circle inside the switch.

```css
w-switch::part(handle) {
	background-color: limegreen;
}
```

### Component tokens

Set these on `<w-switch>` to override visuals.

```css
w-switch {
	--w-c-switch-color-handle: limegreen;
}
```

#### Tokens

##### layout

- `--w-c-switch-height` - height of the switch track.
- `--w-c-switch-width` - width of the switch track.
- `--w-c-switch-height-handle` - height of the switch handle.
- `--w-c-switch-width-handle` - width of the switch handle.
- `--w-c-switch-gap-handle` - gap between the handle and the border of the track.

##### background

- `--w-c-switch-color-background` - background color of the switch track.
- `--w-c-switch-color-background-hover` - background color of the switch track when hovered.
- `--w-c-switch-color-background-active` - background color of the switch track when `checked`.
- `--w-c-switch-color-background-active-hover` - background color of the switch track when `checked` and hovered.
- `--w-c-switch-color-background-disabled` - background color of the switch track when `disabled`.
- `--w-c-switch-color-background-active-disabled` - background color of the switch track when `checked` and `disabled`.
- `--w-c-switch-color-handle` - color of the switch handle.
- `--w-c-switch-color-handle-hover` - color of the switch handle when hovered.
- `--w-c-switch-color-handle-active` - color of the switch handle when `checked`.
- `--w-c-switch-color-handle-active-hover` - color of the switch handle when `checked` and hovered.
- `--w-c-switch-color-handle-disabled` - color of the switch handle when `disabled`.
- `--w-c-switch-color-handle-active-disabled` - color of the switch handle when `checked` and `disabled`.

##### border

- `--w-c-switch-border-radius` - control how rounded the switch track looks.
- `--w-c-switch-border-radius-handle` - control how rounded the switch handle looks.
- `--w-c-switch-border-width` - the size of the switch track's border.
- `--w-c-switch-color-border` - color of the border when not `checked` and not hovered.
- `--w-c-switch-color-border-hover` - color of the border when not `checked`, but hovered.
- `--w-c-switch-color-border-active` - color of the border when `checked` and not hovered.
- `--w-c-switch-color-border-active-hover` - color of the border when `checked` and hovered.
- `--w-c-switch-color-border-disabled` - color of the border when `disabled`.
- `--w-c-switch-color-border-active-disabled` - color of the border when `checked` and `disabled`.

##### transform

- `--w-c-switch-transition` - properties that animate and their timing.
