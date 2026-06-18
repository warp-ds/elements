# Affix Styling

The affix component provides a comprehensive styling API through CSS custom properties (tokens).

## Styling API

### Wrapper Tokens

Customize the appearance of the affix wrapper container:

```css
--w-c-affix-wrapper-bg: transparent;
--w-c-affix-wrapper-border-radius: 0.4rem;
--w-c-affix-wrapper-padding-left: 1.2rem;
--w-c-affix-wrapper-padding-right: 1.2rem;
--w-c-affix-wrapper-width-with-label: max-content;
--w-c-affix-wrapper-width-with-icon: 4rem;
```

### Label Tokens

Customize the appearance of text labels (when `label` property is used):

```css
--w-c-affix-label-color: var(--w-s-color-text);
--w-c-affix-label-font-size: var(--w-font-size-xs);
--w-c-affix-label-line-height: var(--w-line-height-xs);
--w-c-affix-label-font-weight: 700;
--w-c-affix-label-cursor: default;
```

## Parts

For advanced styling needs beyond tokens, you can target internal elements using CSS parts:

- `::part(wrapper)` - The container element (either `<div>` or `<button>` depending on variant)
- `::part(label)` - The text label element (when using `label` property)

```css
w-affix::part(wrapper) {
  /* Custom styling for the wrapper */
  background-color: var(--w-s-color-background-subtle);
}

w-affix::part(label) {
  /* Custom styling for text labels */
  text-transform: uppercase;
}
```

## Example Usage

### Customizing Label Color

```css
w-affix {
  --w-c-affix-label-color: var(--w-s-color-text-primary);
}
```

### Customizing Wrapper Background

```css
w-affix {
  --w-c-affix-wrapper-bg: var(--w-s-color-background-subtle);
  --w-c-affix-wrapper-padding-left: 1.6rem;
  --w-c-affix-wrapper-padding-right: 1.6rem;
}
```

### Adjusting Icon/Label Widths

```css
w-affix {
  --w-c-affix-wrapper-width-with-icon: 5rem;
  --w-c-affix-wrapper-width-with-label: auto;
}
```

### Styling by Slot Position

Target prefix and suffix affixes differently:

```css
/* Style only prefix affixes */
w-affix[slot='prefix'] {
  --w-c-affix-wrapper-padding-left: 2rem;
}

/* Style only suffix affixes */
w-affix[slot='suffix'] {
  --w-c-affix-wrapper-padding-right: 2rem;
}
```

### Using Parts for Advanced Customization

```css
/* Add a border to the wrapper */
w-affix::part(wrapper) {
  border-left: 1px solid var(--w-s-color-border);
}

/* Make labels italic */
w-affix::part(label) {
  font-style: italic;
}
```
