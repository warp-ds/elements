## Styling

Step indicator supports styling through **component tokens** (CSS custom properties with a `--w-c-` prefix) and **parts**.

### Parts

Use `::part(...)` from outside the component.

#### `<w-step-indicator>` parts

- `base` - the list container wrapping the steps.

#### `<w-step>` parts

- `base` - the grid wrapping the indicator, connecting lines and content.
- `dot` - the indicator circle.
- `line` - the connecting line below the dot in vertical layout, or after the dot in horizontal layout. Hidden on the last step.
- `line-horizontal` - the connecting line before the dot in horizontal layout. Hidden on the first step.
- `content` - the container wrapping the default slot.
- `completed-icon` - the checkmark icon, rendered when the step is completed.

### Component tokens

#### `<w-step>` tokens

Set these on `w-step` to customize an individual step, or on `w-step-indicator` to let all its steps inherit the values. The indicator has no component tokens of its own.

```css
w-step-indicator {
    --w-c-step-indicator-size: 2.4rem;
    --w-c-step-column-gap-vertical: 1.2rem;
    --w-c-step-content-gap-vertical: 4rem;
}

w-step[active] {
    --w-c-step-dot-border-width: 3px;
}
```

##### Layout and spacing

- `--w-c-step-indicator-size` - dot width and height, and the corresponding grid tracks in both orientations. Defaults to `2rem`.
- `--w-c-step-column-gap-vertical` - space between the indicator column and content in either vertical alignment. Defaults to `0.8rem`.
- `--w-c-step-content-gap-vertical` - space below each vertical step's content, creating separation before the next step. Defaults to `3.2rem`; the last step has no trailing space.
- `--w-c-step-content-padding-inline-horizontal` - left and right insets for horizontal content. Defaults to `1.2rem`.
- `--w-c-step-indicator-line-thickness` - connector width in vertical layout and height in horizontal layout. Defaults to `0.2rem`.
- `--w-c-step-dot-border-radius` - defaults to `9999px`.
- `--w-c-step-dot-border-width` - defaults to `2px`.

The indicator size keeps the dot and its grid tracks synchronized. Its `rem` default follows the document root font size. Vertical right alignment shares the same spacing tokens as vertical left alignment.

Horizontal content padding insets labels without separating the connecting lines. Adding a gap between horizontal steps would also introduce space between their connectors.

##### Indicator color

- `--w-c-step-color`
- `--w-c-step-color-active`
- `--w-c-step-color-completed`

These control the foreground color inside the dot, including the completed checkmark.

##### Border color

- `--w-c-step-color-border`
- `--w-c-step-color-border-active`
- `--w-c-step-color-border-completed`

##### Background

- `--w-c-step-color-background`
- `--w-c-step-color-background-active`
- `--w-c-step-color-background-completed`

The unsuffixed dot color tokens apply to incomplete, inactive steps. Active and completed steps use their respective state tokens, each with its own semantic color fallback.

##### Connecting lines

- `--w-c-step-indicator-line-color` - color for incomplete connectors.
- `--w-c-step-indicator-line-color-completed` - color for completed connectors.

In horizontal layout, the incoming `line-horizontal` uses the completed color when the step is active or completed. The outgoing `line` uses the completed color only when the step is completed. In vertical layout, `line` also uses the completed color only when the step is completed.

##### Transitions

- `--w-c-step-transition-property` - defaults to `color, background-color, border-color, text-decoration-color, fill, stroke`.
- `--w-c-step-transition-duration` - defaults to `0.15s`.
- `--w-c-step-transition-timing-function` - defaults to `cubic-bezier(0.4, 0, 0.2, 1)`.

These apply to the dot and both connecting line parts.

### Styling orientation, alignment and state

Target `horizontal` and `right` on the parent `w-step-indicator`, and `active` and `completed` on individual `w-step` elements.

```css
/* Horizontal content */
w-step-indicator[horizontal] w-step::part(content) {
    font-size: 1.4rem;
}

/* Right-aligned vertical content */
w-step-indicator[right] w-step::part(content) {
    font-style: italic;
}

/* Active and completed dots */
w-step[active]::part(dot) {
    outline: 2px solid currentColor;
    outline-offset: 2px;
}

w-step[completed]::part(dot) {
    border-radius: 4px;
}
```

`right` applies only to vertical layout. Orientation and alignment are passed to each step internally; they are not attributes on `w-step`. Use the parent's attributes to scope overrides rather than targeting the internal `data-*` attributes.

Use component tokens for dimensions, spacing, colors and transitions. Use parts for additional overrides. The grid templates and item placement work together to align dots, connectors and content; overriding the full grid through `::part(base)` requires preserving those relationships.
