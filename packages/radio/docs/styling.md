# Radio Styling

The radio component provides a comprehensive styling API through CSS custom properties (tokens).

## Styling API

### Label Tokens

Customize the appearance of the label text:

```css
--w-c-radio-label-font-size: var(--w-font-size-m);
--w-c-radio-label-line-height: var(--w-line-height-m);
--w-c-radio-label-color: currentColor;
--w-c-radio-label-color-disabled: var(--w-s-color-text-disabled);
```

### Control Tokens

Customize the radio control (the circle itself):

```css
--w-c-radio-size: 2rem;
--w-c-radio-gap: 8px;
--w-c-radio-radius: 50%;
--w-c-radio-border-width: 1px;
--w-c-radio-checked-border-width: 0.6rem;
```

### Color Tokens - Default State

```css
--w-c-radio-bg: var(--w-s-color-background);
--w-c-radio-border-color: var(--w-s-color-border-strong);
```

### Color Tokens - Checked State

```css
--w-c-radio-border-color-checked: var(--w-s-color-border-selected);
```

### Color Tokens - Invalid State

```css
--w-c-radio-border-color-invalid: var(--w-s-color-border-negative);
```

### Color Tokens - Disabled State

```css
--w-c-radio-border-color-disabled: var(--w-s-color-border-disabled);
--w-c-radio-bg-disabled: var(--w-s-color-background-disabled-subtle);
```

### Focus Tokens

```css
--w-c-radio-outline-width: 2px;
--w-c-radio-outline-color: var(--w-s-color-border-focus);
--w-c-radio-outline-offset: var(--w-outline-offset, 1px);
```

### Cursor Tokens

```css
--w-c-radio-cursor: pointer;
--w-c-radio-cursor-disabled: not-allowed;
```

### Animation Tokens

```css
--w-c-radio-transition: border-color 150ms cubic-bezier(0.4, 0, 0.2, 1),
                        border-width 150ms cubic-bezier(0.4, 0, 0.2, 1),
                        background-color 150ms cubic-bezier(0.4, 0, 0.2, 1);
```

## Parts

For advanced styling needs beyond tokens, you can target internal elements using CSS parts:

- `::part(base)` - The wrapper element (contains control and label)
- `::part(control)` - The visual radio control (the circle)
- `::part(label)` - The label content wrapper

```css
w-radio::part(control) {
  /* Custom styling for the radio circle */
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

w-radio::part(label) {
  /* Custom styling for label text */
  text-transform: uppercase;
}
```

## Example Usage

### Customizing Size

```css
w-radio {
  --w-c-radio-size: 2.4rem;
  --w-c-radio-gap: 12px;
}
```

### Customizing Colors

```css
w-radio {
  --w-c-radio-border-color-checked: var(--w-s-color-border-success);
}
```

### Customizing Border Radius

```css
/* Square radio buttons */
w-radio {
  --w-c-radio-radius: 4px;
}

/* Keep it circular (default) */
w-radio {
  --w-c-radio-radius: 50%;
}
```

### Customizing Checked Appearance

```css
/* Thicker border when checked */
w-radio {
  --w-c-radio-checked-border-width: 0.8rem;
}

/* Or thinner */
w-radio {
  --w-c-radio-checked-border-width: 0.4rem;
}
```

### Customizing Focus Outline

```css
w-radio {
  --w-c-radio-outline-width: 3px;
  --w-c-radio-outline-color: var(--w-s-color-border-info);
  --w-c-radio-outline-offset: 2px;
}
```

### Disabling Transitions

```css
w-radio {
  --w-c-radio-transition: none;
}
```

### Using Parts for Advanced Styling

```css
/* Add a subtle shadow to the radio circle */
w-radio::part(control) {
  box-shadow: inset 0 1px 3px rgba(0,0,0,0.1);
}

/* Style the label with custom spacing */
w-radio::part(label) {
  padding-left: 4px;
  font-weight: 500;
}
```

## Label Content

Like checkbox, radio labels accept rich HTML content via the default slot:

```html
<w-radio name="terms" value="accept">
  I agree to the <a href="/terms">terms and conditions</a>
</w-radio>

<w-radio name="important" value="yes">
  <strong>Important:</strong> Check this option
</w-radio>
```

Style the label content directly or use `::part(label)` to target the wrapper.

## Accessibility Note

Radio uses a custom implementation with `role="radio"` via ElementInternals rather than a native `<input type="radio">`. This provides full control over styling and behavior while maintaining proper ARIA semantics and form integration.

## High Contrast Mode Support

Radio includes automatic color adjustments for users with high contrast / forced colors mode enabled, ensuring the component remains usable and visible in all accessibility contexts.
