## Styling API

This section documents the supported styling hooks for `<w-textfield>`.

Use these hooks to customize appearance without relying on internal structure or selectors.

Before changing the default styles, remember that doing so can result in less consistent experiences for users across the product. Prefer defaults.

- Prefer **component tokens** for size, spacing, and state styling.
- Use **parts** only for small, local tweaks.
- Avoid relying on internal class names or selectors.

### Parts

The textfield exposes a minimal set of parts that can be targeted for last‑mile layout or typography tweaks.

| Part | Targets | Typical use |
|---|---|---|
| `input` | native input element | minor typography or spacing tweaks |

Example:

```css
w-textfield::part(input) {
  letter-spacing: 0.5px;
}
```

Parts are intended as an **escape hatch**.
Prefer component tokens for anything state‑ or size‑related.


### Component tokens

Component tokens (`--w-c-input-*`) act as inputs to the textfield styling.
They can be set directly on the component or inherited from a parent container.

These tokens are **shared across textfield, textarea, and select** for consistent form styling.

```css
.form-section {
  --w-c-input-label-font-weight: 600;
  --w-c-input-help-text-color: var(--w-s-color-text);
}
```

Defaults are defined internally; setting a token is always optional.


#### Label tokens

| Token | Purpose | Default |
|---|---|---|
| `--w-c-input-label-color` | label text color | `--w-s-color-text` |
| `--w-c-input-label-font-size` | label font size | `--w-font-size-s` |
| `--w-c-input-label-line-height` | label line height | `--w-line-height-s` |
| `--w-c-input-label-font-weight` | label font weight | `700` |
| `--w-c-input-label-padding-bottom` | space below label | `0.4rem` |
| `--w-c-input-label-cursor` | cursor when hovering label | `pointer` |
| `--w-c-input-label-display` | label display mode | `block` |


#### Optional indicator tokens

When `optional` attribute is set, these tokens control the "(optional)" text styling:

| Token | Purpose | Default |
|---|---|---|
| `--w-c-input-optional-color` | optional text color | `--w-s-color-text-subtle` |
| `--w-c-input-optional-font-size` | optional text font size | `--w-font-size-s` |
| `--w-c-input-optional-line-height` | optional text line height | `--w-line-height-s` |
| `--w-c-input-optional-font-weight` | optional text font weight | `400` |
| `--w-c-input-optional-padding-left` | space before optional text | `0.8rem` |


#### Help text tokens

| Token | Purpose | Default |
|---|---|---|
| `--w-c-input-help-text-color` | help text color (normal state) | `--w-s-color-text-subtle` |
| `--w-c-input-help-text-color-invalid` | help text color when invalid | `--w-s-color-text-negative` |
| `--w-c-input-help-text-font-size` | help text font size | `--w-font-size-xs` |
| `--w-c-input-help-text-line-height` | help text line height | `--w-line-height-xs` |
| `--w-c-input-help-text-margin-top` | space above help text | `0.4rem` |
| `--w-c-input-help-text-display` | help text display mode | `block` |


## Implementation notes

### Shared token system

Textfield shares its label, optional indicator, and help text tokens with `w-textarea` and `w-select`. This ensures consistent form styling across all text input components.

### Affix accessibility

Due to shadow DOM boundaries, affix content (prefix/suffix slots) cannot be connected to the input via ARIA references. For non-interactive affixes like currency symbols or unit labels, consider including that information in the main `label` or `placeholder` text instead for better screen reader support.
