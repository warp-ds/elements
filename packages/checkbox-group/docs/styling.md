## Styling API

This section documents the supported styling hooks for `<w-checkbox>` and `<w-checkbox-group>`.

Use these hooks to customize appearance without relying on internal structure or selectors.

Before changing the default styles, remember that doing so can result in less consistent experiences for users across the product. Prefer defaults.

- Prefer **component tokens** for size, spacing, and state styling.
- Use **parts** only for small, local tweaks.
- Avoid relying on internal class names or selectors.

## w-checkbox

### Parts

The checkbox exposes a small set of parts that can be targeted for last‑mile layout or typography tweaks.

| Part | Targets | Typical use |
|---|---|---|
| `base` | wrapper element | layout adjustments (spacing, alignment) |
| `control` | checkbox control (box) | minor alignment or sizing tweaks |
| `input` | native `<input type="checkbox">` | focus / outline adjustments |
| `label` | label content | typography tweaks |

Example:

```css
w-checkbox::part(label) {
  font-weight: 600;
}

w-checkbox::part(control) {
  margin-top: 1px;
}
```

Parts are intended as an **escape hatch**.
Prefer component tokens for anything state‑ or size‑related.

### Component tokens

Component tokens (`--w-c-checkbox-*`) act as inputs to the checkbox styling.
They can be set directly on the component or inherited from a parent container.

```css
.settings-panel {
  --w-c-checkbox-gap: 12px;
}
```

Defaults are defined internally; setting a token is always optional.


#### Layout & size

| Token | Purpose | Default |
|---|---|---|
| `--w-c-checkbox-gap` | space between control and label | `8px` |
| `--w-c-checkbox-control-size` | width/height of the control | `2rem` |
| `--w-c-checkbox-radius` | border radius of the control | `4px` |
| `--w-c-checkbox-border-width` | border width | `1px` |


#### Colors

| Token | Purpose | Default |
|---|---|---|
| `--w-c-checkbox-bg` | control background | theme default |
| `--w-c-checkbox-border-color` | control border color | theme default |
| `--w-c-checkbox-bg-checked` | background when checked | theme default |
| `--w-c-checkbox-border-color-checked` | border when checked | theme default |
| `--w-c-checkbox-icon-color` | icon color | theme default |


#### Invalid state

| Token | Purpose | Default |
|---|---|---|
| `--w-c-checkbox-border-color-invalid` | border color when invalid | theme default |
| `--w-c-checkbox-bg-invalid-checked` | background when invalid and checked | theme default |


#### Disabled state

| Token | Purpose | Default |
|---|---|---|
| `--w-c-checkbox-bg-disabled` | background when disabled | theme default |
| `--w-c-checkbox-border-color-disabled` | border when disabled | theme default |
| `--w-c-checkbox-bg-disabled-checked` | background when disabled and checked | theme default |

#### Focus

| Token | Purpose | Default |
|---|---|---|
| `--w-c-checkbox-outline-width` | focus outline width | `2px` |
| `--w-c-checkbox-outline-color` | focus outline color | theme default |
| `--w-c-checkbox-outline-offset` | focus outline offset | theme default |

#### Motion

| Token | Purpose | Default |
|---|---|---|
| `--w-c-checkbox-transition` | transition for control | `150ms cubic-bezier(0.4, 0, 0.2, 1)` |

Transitions are automatically disabled when `prefers-reduced-motion: reduce` is active.


## w-checkbox-group

The checkbox-group component uses direct CSS styling rather than component tokens. Customization is limited to ensure consistent form control patterns across the design system.

### Styling

The checkbox-group provides minimal styling hooks:

| Element | Current styling | Note |
|---|---|---|
| Label | `font-size: var(--w-font-size-s)`<br>`line-height: var(--w-line-height-s)`<br>`font-weight: 700`<br>`color: var(--w-s-color-text)` | Uses semantic tokens |
| Optional indicator | `font-weight: 400`<br>`color: var(--w-s-color-text-subtle)` | Matches form control pattern |
| Help text | `font-size: var(--w-font-size-xs)`<br>`line-height: var(--w-line-height-xs)`<br>`color: var(--w-s-color-text-subtle)` | Error state: `--w-s-color-text-negative` |
| Checkbox spacing | `gap: 16px` | Spacing between checkboxes |
| Wrapper spacing | `gap: 16px` | Spacing between label and group |


## Implementation notes

### Architecture note

This component uses a `<div>` wrapper instead of the more semantic `<fieldset>` element. Note that `w-radio-group` uses `<fieldset>`, which provides better accessibility and follows HTML best practices. This inconsistency exists for historical reasons and may be addressed in a future major version to align both on the more semantic approach.

**Why this matters:** `<fieldset>` with `<legend>` provides automatic grouping semantics and better screen reader support. The current `<div>` + `role="group"` implementation works but requires manual ARIA wiring.

**TODO:** Consider aligning w-checkbox-group to use `<fieldset>` in a future major version after assessing backwards compatibility implications (CSS selectors, etc.).
