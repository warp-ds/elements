# Select Styling

The select component provides a comprehensive styling API through CSS custom properties (tokens).

## Styling API

### Label Tokens

Customize the appearance of the label:

```css
--w-c-input-label-color: var(--w-s-color-text);
--w-c-input-label-font-size: var(--w-font-size-s);
--w-c-input-label-line-height: var(--w-line-height-s);
--w-c-input-label-font-weight: 700;
--w-c-input-label-padding-bottom: 0.4rem;
--w-c-input-label-cursor: pointer;
--w-c-input-label-display: block;
```

### Optional Indicator Tokens

Customize the "(optional)" text appearance:

```css
--w-c-input-optional-padding-left: 0.8rem;
--w-c-input-optional-font-weight: 400;
--w-c-input-optional-font-size: var(--w-font-size-s);
--w-c-input-optional-line-height: var(--w-line-height-s);
--w-c-input-optional-color: var(--w-s-color-text-subtle);
```

### Help Text Tokens

Customize the help text appearance:

```css
--w-c-input-help-text-color: var(--w-s-color-text-subtle);
--w-c-input-help-text-font-size: var(--w-font-size-xs);
--w-c-input-help-text-line-height: var(--w-line-height-xs);
--w-c-input-help-text-margin-top: 0.4rem;
--w-c-input-help-text-display: block;
--w-c-input-help-text-color-invalid: var(--w-s-color-text-negative);
```

## Parts

For advanced styling needs beyond tokens, you can target internal elements using CSS parts:

- `::part(input)` - The native `<select>` element

```css
w-select::part(input) {
  /* Custom styling for the select element */
  text-transform: uppercase;
}
```

## Example Usage

### Customizing Label Color

```css
w-select {
  --w-c-input-label-color: var(--w-s-color-text-primary);
}
```

### Customizing Help Text

```css
w-select {
  --w-c-input-help-text-font-size: var(--w-font-size-s);
  --w-c-input-help-text-margin-top: 0.8rem;
}
```

### Global Input Styling

Since these tokens are shared across all input components (textfield, textarea, select), you can apply them globally:

```css
:root {
  --w-c-input-label-font-weight: 600;
  --w-c-input-help-text-color: var(--w-s-color-text);
}
```

This will affect all input components consistently.
