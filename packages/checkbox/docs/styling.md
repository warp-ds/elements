# Checkbox Styling

The checkbox component provides a comprehensive styling API through CSS custom properties (tokens).

## Styling API

### Label Tokens

Customize the appearance of the label text:

```css
--w-c-checkbox-label-font-size: var(--w-font-size-m);
--w-c-checkbox-label-line-height: var(--w-line-height-m);
```

### Control Tokens

Customize the checkbox control (the box itself):

```css
--w-c-checkbox-control-size: 2rem;
--w-c-checkbox-gap: 8px;
--w-c-checkbox-radius: 4px;
--w-c-checkbox-border-width: 1px;
```

### Color Tokens - Default State

```css
--w-c-checkbox-bg: var(--w-s-color-background);
--w-c-checkbox-border-color: var(--w-s-color-border-strong);
--w-c-checkbox-icon-color: var(--w-s-color-icon-inverted);
```

### Color Tokens - Checked State

```css
--w-c-checkbox-bg-checked: var(--w-s-color-background-primary);
--w-c-checkbox-border-color-checked: var(--w-s-color-border-primary);
--w-c-checkbox-checked-icon: var(--w-icon-toggle-checked);
```

### Color Tokens - Invalid State

```css
--w-c-checkbox-border-color-invalid: var(--w-s-color-border-negative);
--w-c-checkbox-bg-invalid-checked: var(--w-s-color-background-negative);
```

### Color Tokens - Disabled State

```css
--w-c-checkbox-bg-disabled: var(--w-s-color-background-disabled-subtle);
--w-c-checkbox-border-color-disabled: var(--w-s-color-border-disabled);
--w-c-checkbox-bg-disabled-checked: var(--w-s-color-background-disabled);
```

### Focus Tokens

```css
--w-c-checkbox-outline-width: 2px;
--w-c-checkbox-outline-color: var(--w-s-color-border-focus);
--w-c-checkbox-outline-offset: var(--w-outline-offset, 1px);
```

### Animation Tokens

```css
--w-c-checkbox-transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
```

## Parts

For advanced styling needs beyond tokens, you can target internal elements using CSS parts:

- `::part(base)` - The wrapper `<label>` element
- `::part(control)` - The visual checkbox control (the box)
- `::part(input)` - The native `<input type="checkbox">` element
- `::part(label)` - The label content wrapper

```css
w-checkbox::part(control) {
  /* Custom styling for the checkbox box */
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

w-checkbox::part(label) {
  /* Custom styling for label text */
  text-transform: uppercase;
}
```

## Example Usage

### Customizing Size

```css
w-checkbox {
  --w-c-checkbox-control-size: 2.4rem;
  --w-c-checkbox-gap: 12px;
}
```

### Customizing Colors

```css
w-checkbox {
  --w-c-checkbox-bg-checked: var(--w-s-color-background-success);
  --w-c-checkbox-border-color-checked: var(--w-s-color-border-success);
}
```

### Customizing Border Radius

```css
w-checkbox {
  --w-c-checkbox-radius: 8px; /* More rounded */
}

/* Or fully rounded */
w-checkbox {
  --w-c-checkbox-radius: 50%;
}
```

### Customizing Focus Outline

```css
w-checkbox {
  --w-c-checkbox-outline-width: 3px;
  --w-c-checkbox-outline-color: var(--w-s-color-border-info);
  --w-c-checkbox-outline-offset: 2px;
}
```

### Disabling Transitions

```css
w-checkbox {
  --w-c-checkbox-transition: none;
}
```

### Using Parts for Advanced Styling

```css
/* Add a subtle shadow to the checkbox */
w-checkbox::part(control) {
  box-shadow: inset 0 1px 3px rgba(0,0,0,0.1);
}

/* Style the label with custom spacing */
w-checkbox::part(label) {
  padding-left: 4px;
  font-weight: 500;
}
```

## Label Content

Unlike textfield/textarea components, checkbox labels accept rich HTML content via the default slot:

```html
<w-checkbox>
  I agree to the <a href="/terms">terms and conditions</a>
</w-checkbox>

<w-checkbox>
  <strong>Important:</strong> Check this box
</w-checkbox>
```

Style the label content directly or use `::part(label)` to target the wrapper.
