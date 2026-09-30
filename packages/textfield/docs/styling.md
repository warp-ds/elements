## Styling API

This section documents the supported styling hooks for `<w-textfield>`.

Use these hooks to customize appearance without relying on internal structure or selectors.

Before changing the default styles, remember that doing so can result in less consistent experiences for users across the product. Prefer defaults.

- Prefer **component tokens** for size, spacing, and state styling.
- Use **parts** only for small, local tweaks.
- Avoid relying on internal class names or selectors.

### Parts

The textfield exposes a minimal set of parts that can be targeted for last-mile layout or typography tweaks. If you use the `tooltip` property, the tooltip component's exported parts can also be styled from the textfield.

| Part | Targets | Typical use |
|---|---|---|
| `base` | wrapper around the component internals |  |
| `input` | native input element | minor typography or spacing tweaks |
| `mask-wrapper` | wrapper around the input mask | formatting-related layout tweaks |
| `mask` | formatted value shown when the input is not focused | typography for formatter output |
| `help-text` | help text container below the field | small typography tweaks |
| `label` | label element above the field | small label layout tweaks |
| `tooltip-target` | info icon button rendered when `tooltip` is set | small icon button alignment tweaks |
| `tooltip` | tooltip surface exported by `w-tooltip` | tooltip surface tweaks |
| `arrow` | tooltip arrow exported by `w-tooltip` | tooltip arrow tweaks |
| `beak` | tooltip beak exported by `w-tooltip` | tooltip beak tweaks |
| `hover-bridge` | tooltip hover bridge exported by `w-tooltip` | tooltip hover behavior tweaks |

Example:

```css
w-textfield::part(input) {
  letter-spacing: 0.5px;
}

w-textfield::part(label) {
  padding-bottom: 0.6rem;
}
```

Parts are intended as an **escape hatch**. Prefer component tokens where possible.

### Component tokens

Textfield has its own `--w-c-textfield-*` tokens for the input element. It also shares `--w-c-input-*` tokens with other form components for labels, optional indicators, and help text.

```css
.form-section {
  --w-c-input-label-font-weight: 600;
  --w-c-input-help-text-color: var(--w-s-color-text);
}

w-textfield.search {
  --w-c-textfield-padding-left: 12px;
  --w-c-textfield-color-placeholder: var(--w-s-color-text-subtle);
}
```

#### Textfield tokens

| Token | Purpose | Default |
|---|---|---|
| `--w-c-textfield-padding-left` | input left padding | `8px` |
| `--w-c-textfield-padding-right` | input right padding | `8px` |
| `--w-c-textfield-line-height` | input line height | `--w-line-height-m` |
| `--w-c-textfield-font-size` | input font size | `--w-font-size-m` |
| `--w-c-textfield-color-border` | border color | `--w-s-color-border-strong` |
| `--w-c-textfield-color` | input text color | `--w-s-color-text` |
| `--w-c-textfield-background` | input background color | `--w-s-color-background` |
| `--w-c-textfield-color-border-active` | border color while active | `--w-s-color-border-selected` |
| `--w-c-textfield-color-border-hover` | border color on hover | `--w-s-color-border-strong-hover` |
| `--w-c-textfield-outline-focus` | focus outline | `2px solid var(--w-s-color-border-focus)` |
| `--w-c-textfield-outline-offset` | focus outline offset | `-2px` |
| `--w-c-textfield-color-border-invalid` | border color when invalid | `--w-s-color-border-negative` |
| `--w-c-textfield-color-invalid` | text color when invalid | `--w-s-color-text-negative` |
| `--w-c-textfield-outline-invalid` | outline when invalid | `2px solid var(--w-s-color-border-negative)` |
| `--w-c-textfield-color-border-invalid-hover` | border color when invalid and hovered | `--w-s-color-border-negative-hover` |
| `--w-c-textfield-color-border-disabled` | border color when disabled | `--w-s-color-border-disabled` |
| `--w-c-textfield-color-disabled` | text color when disabled | `--w-s-color-text-disabled` |
| `--w-c-textfield-color-background-disabled` | background color when disabled | `--w-s-color-background-disabled-subtle` |
| `--w-c-textfield-color-placeholder` | placeholder text color | `--w-s-color-text-placeholder` |

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

When the `optional` attribute is set and the field is not `required`, these tokens control the optional indicator after the label.

| Token | Purpose | Default |
|---|---|---|
| `--w-c-input-optional-color` | optional text color | `--w-s-color-text-subtle` |
| `--w-c-input-optional-font-size` | optional text font size | `--w-font-size-s` |
| `--w-c-input-optional-line-height` | optional text line height | `--w-line-height-s` |
| `--w-c-input-optional-font-weight` | optional text font weight | `400` |
| `--w-c-input-optional-padding-left` | space before optional text | `0.4rem` |

#### Help text tokens

| Token | Purpose | Default |
|---|---|---|
| `--w-c-input-help-text-color` | help text color | `--w-s-color-text-subtle` |
| `--w-c-input-help-text-color-invalid` | help text color when invalid | `--w-s-color-text-negative` |
| `--w-c-input-help-text-font-size` | help text font size | `--w-font-size-xs` |
| `--w-c-input-help-text-line-height` | help text line height | `--w-line-height-xs` |
| `--w-c-input-help-text-margin-top` | space above help text | `0.4rem` |
| `--w-c-input-help-text-display` | help text display mode | `block` |

### Prefix and suffix slots

Prefix and suffix content is slotted, so it remains in light DOM and should usually be styled directly where it is used.

```css
w-textfield w-affix {
  color: var(--w-s-color-text-subtle);
}
```

When prefix or suffix content is present, the textfield adjusts input padding internally to make room for it.

## Implementation notes

### Shared token system

Textfield shares its label, optional indicator, and help text tokens with other form components. This keeps common form styling consistent across inputs.

### Formatter mask

When `formatter` is set, the component can render a formatted mask over the input while the input is not focused. Use the `mask` and `mask-wrapper` parts only for small display tweaks to this formatted value.

### Affix accessibility

Due to shadow DOM boundaries, affix content from the `prefix` and `suffix` slots cannot be connected to the input with ARIA references from inside the component. For non-interactive affixes like currency symbols or unit labels, consider including that information in the main `label` or `placeholder` text as well.
