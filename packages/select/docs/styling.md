## Styling API

This section documents the supported styling hooks for `<w-select>`.

Use these hooks to customize appearance without relying on internal structure or selectors.

Before changing the default styles, remember that doing so can result in less consistent experiences for users across the product. Prefer defaults.

- Prefer **component tokens** for size, spacing, and state styling.
- Use **parts** only for small, local tweaks.
- Avoid relying on internal class names or selectors.

### Parts

The select exposes a minimal set of parts that can be targeted for last‑mile layout or typography tweaks.

| Part | Targets | Typical use |
|---|---|---|
| `base` | wrapper around markup | minor layout or spacing tweaks |
| `label` | native label element | minor typography or spacing tweaks |
| `tooltip-target` | button that triggers the info tooltip when used | trigger appearance or spacing tweaks |
| `tooltip` | info tooltip when used | tooltip appearance or typography tweaks |
| `arrow` | tooltip arrow | arrow positioning or sizing tweaks |
| `beak` | tooltip beak | beak appearance tweaks |
| `hover-bridge` | invisible element that keeps the tooltip open while the cursor moves from the trigger to the tooltip | hover area adjustments |
| `input` | native select element | minor typography or spacing tweaks |
| `chevron` | down arrow on the right side of the select | minor arrow appearance or positioning tweaks |
| `help-text` | help text or invalid message below the select | minor typography or spacing tweaks |

Example:

```css
w-select::part(input) {
  letter-spacing: 0.5px;
}
```

Parts are intended as an **escape hatch**.
Prefer component tokens for anything state‑ or size‑related.


### Component tokens

Component tokens (`--w-c-select-*` and `--w-c-input-*`) act as inputs to the select styling.
They can be set directly on the component or inherited from a parent container.

The `--w-c-select-*` tokens control the select input and chevron.
The `--w-c-input-*` tokens for labels, optional indicators, and help text are **shared across textfield, textarea, and select** for consistent form styling.

```css
.form-section {
  --w-c-input-label-font-weight: 600;
  --w-c-input-help-text-color: var(--w-s-color-text);
}
```

Defaults are defined internally; setting a token is always optional.

#### Select input tokens

| Token | Purpose | Default |
|---|---|---|
| `--w-c-select-font-size` | select text font size | `--w-font-size-m` |
| `--w-c-select-line-height` | select text line height | `--w-line-height-m` |
| `--w-c-select-padding-top` | top padding inside the select | `1.2rem` |
| `--w-c-select-padding-right` | right padding inside the select | `3.2rem` |
| `--w-c-select-padding-bottom` | bottom padding inside the select | `1.2rem` |
| `--w-c-select-padding-left` | left padding inside the select | `0.8rem` |
| `--w-c-select-color-border` | border color (normal state) | `--w-s-color-border-strong` |
| `--w-c-select-color-border-hover` | border color when hovered | `--w-s-color-border-strong-hover` |
| `--w-c-select-color-border-active` | border color when active | `--w-s-color-border-active` |
| `--w-c-select-color-text` | select text color (normal state) | `--w-s-color-text` |
| `--w-c-select-color-background` | background color (normal state) | `--w-s-color-background` |
| `--w-c-select-border-radius` | border corner radius | `4px` |
| `--w-c-select-border-width` | border width | `1px` |
| `--w-c-select-outline-focus` | outline when focus is visible | `2px solid var(--w-s-color-border-focus)` |
| `--w-c-select-outline-offset-focus` | outline offset when focus is visible | `-2px` |

##### Select input tokens (disabled)

| Token | Purpose | Default |
|---|---|---|
| `--w-c-select-color-border-disabled` | border color when disabled | `--w-s-color-border-disabled` |
| `--w-c-select-color-text-disabled` | select text color when disabled | `--w-s-color-text-disabled` |
| `--w-c-select-color-background-disabled` | background color when disabled | `--w-s-color-background-disabled-subtle` |

##### Select input tokens (invalid)

| Token | Purpose | Default |
|---|---|---|
| `--w-c-select-color-border-invalid` | border color when invalid | `--w-s-color-border-negative` |
| `--w-c-select-outline-invalid` | outline when invalid | `--w-s-color-border-negative` |
| `--w-c-select-color-text-invalid` | select text color when invalid | `inherit` |
| `--w-c-select-color-background-invalid` | background color when invalid | `inherit` |

#### Chevron tokens

| Token | Purpose | Default |
|---|---|---|
| `--w-c-select-chevron-color` | chevron color | `--w-s-color-icon` |
| `--w-c-select-chevron-width` | chevron width | `3.2rem` |
| `--w-c-select-chevron-height` | chevron height | `100%` |
| `--w-c-select-chevron-position-top` | top offset within the input wrapper | `30%` |
| `--w-c-select-chevron-position-right` | right offset within the input wrapper | `0px` |
| `--w-c-select-chevron-position-bottom` | bottom offset within the input wrapper | `0px` |
| `--w-c-select-chevron-position-left` | left offset within the input wrapper | `auto` |
| `--w-c-select-chevron-opacity-disabled` | chevron opacity when disabled | `0.25` |

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

Select shares its label, optional indicator, and help text tokens with `w-textfield` and `w-textarea`. This ensures consistent form styling across all text input components.
