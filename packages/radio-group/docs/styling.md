# Radio and Radio Group Styling

This document covers the styling API for both `<w-radio>` (individual radio buttons) and `<w-radio-group>` (the container that manages them).

## Quick Start

```html
<w-radio-group label="Choose a size" name="size">
  <w-radio value="small">Small</w-radio>
  <w-radio value="medium">Medium</w-radio>
  <w-radio value="large">Large</w-radio>
</w-radio-group>
```

Customize via component tokens:

```css
/* Style all radio groups in a section */
.settings {
  --w-c-radio-group-gap: 12px;
  --w-c-radio-size: 2.4rem;
}
```

---

## Styling Philosophy

Before customizing, remember that changing defaults can create inconsistent experiences. Prefer the defaults.

- **Component tokens** for size, spacing, color, and state styling
- **Parts** only for small, one-off tweaks
- Avoid relying on internal class names

---

## Radio Group (`<w-radio-group>`)

### Parts

| Part | Targets | Use Case |
|------|---------|----------|
| `form-control` | The `<fieldset>` wrapper | Outer container tweaks |
| `form-control-label` | The group label element | Label typography overrides |
| `form-control-input` | Container for radio buttons | Adjust layout/flow of radios |
| `help-text` | Help text / error message | Style hint text |

**Example:**
```css
w-radio-group::part(form-control-label) {
  text-transform: uppercase;
}

w-radio-group::part(form-control-input) {
  flex-direction: row; /* horizontal radios */
}
```

### Component Tokens

#### Label

| Token | Purpose | Default |
|-------|---------|---------|
| `--w-c-radio-group-label-font-size` | Label font size | `var(--w-font-size-s)` |
| `--w-c-radio-group-label-line-height` | Label line height | `var(--w-line-height-s)` |
| `--w-c-radio-group-label-font-weight` | Label font weight | `700` |
| `--w-c-radio-group-label-color` | Label text color | `var(--w-s-color-text)` |
| `--w-c-radio-group-label-color-disabled` | Label color when disabled | `var(--w-s-color-text-disabled)` |
| `--w-c-radio-group-label-padding-bottom` | Space below label | `16px` |

#### Optional Indicator

| Token | Purpose | Default |
|-------|---------|---------|
| `--w-c-radio-group-optional-font-weight` | "Optional" text weight | `400` |
| `--w-c-radio-group-optional-color` | "Optional" text color | `var(--w-s-color-text-subtle)` |
| `--w-c-radio-group-optional-margin-inline-start` | Space before "Optional" | `0.5rem` |

#### Radio Spacing

| Token | Purpose | Default |
|-------|---------|---------|
| `--w-c-radio-group-gap` | Gap between radio buttons | `16px` |

#### Help Text

| Token | Purpose | Default |
|-------|---------|---------|
| `--w-c-radio-group-help-text-margin-block-start` | Space above help text | `16px` |
| `--w-c-radio-group-help-text-font-size` | Help text font size | `var(--w-font-size-xs)` |
| `--w-c-radio-group-help-text-line-height` | Help text line height | `var(--w-line-height-xs)` |
| `--w-c-radio-group-help-text-color` | Help text color | `var(--w-s-color-text-subtle)` |
| `--w-c-radio-group-help-text-color-disabled` | Help text color when disabled | `var(--w-s-color-text-disabled)` |
| `--w-c-radio-group-help-text-color-error` | Help text color when invalid | `var(--w-s-color-text-negative)` |

**Example:**
```css
w-radio-group {
  --w-c-radio-group-gap: 12px;
  --w-c-radio-group-label-font-weight: 600;
  --w-c-radio-group-help-text-color: var(--w-s-color-text);
}
```

---

## Individual Radio (`<w-radio>`)

### Parts

| Part | Targets | Use Case |
|------|---------|----------|
| `base` | Wrapper containing control and label | Container-level adjustments |
| `control` | Radio control (circle) | Alignment or sizing tweaks |
| `label` | Label content | Typography overrides |

**Example:**
```css
w-radio::part(label) {
  font-weight: 600;
}

w-radio::part(control) {
  margin-top: 1px;
}
```

### Component Tokens

#### Layout & Size

| Token | Purpose | Default |
|-------|---------|---------|
| `--w-c-radio-gap` | Space between control and label | `8px` |
| `--w-c-radio-size` | Width/height of control | `2rem` |
| `--w-c-radio-radius` | Border radius | `50%` |
| `--w-c-radio-border-width` | Border width | `1px` |
| `--w-c-radio-checked-border-width` | Border width when checked | `0.6rem` |

#### Colors

| Token | Purpose | Default |
|-------|---------|---------|
| `--w-c-radio-bg` | Control background | `var(--w-s-color-background)` |
| `--w-c-radio-border-color` | Control border color | `var(--w-s-color-border-strong)` |
| `--w-c-radio-border-color-checked` | Border when checked | `var(--w-s-color-border-selected)` |
| `--w-c-radio-border-color-invalid` | Border when invalid | `var(--w-s-color-border-negative)` |
| `--w-c-radio-label-color` | Label text color | `currentColor` |

#### Disabled State

| Token | Purpose | Default |
|-------|---------|---------|
| `--w-c-radio-bg-disabled` | Background when disabled | `var(--w-s-color-background-disabled-subtle)` |
| `--w-c-radio-border-color-disabled` | Border when disabled | `var(--w-s-color-border-disabled)` |
| `--w-c-radio-label-color-disabled` | Label color when disabled | `var(--w-s-color-text-disabled)` |
| `--w-c-radio-cursor-disabled` | Cursor when disabled | `not-allowed` |

#### Typography

| Token | Purpose | Default |
|-------|---------|---------|
| `--w-c-radio-label-font-size` | Label font size | `var(--w-font-size-m)` |
| `--w-c-radio-label-line-height` | Label line height | `var(--w-line-height-m)` |

#### Focus

| Token | Purpose | Default |
|-------|---------|---------|
| `--w-c-radio-outline-width` | Focus outline width | `2px` |
| `--w-c-radio-outline-color` | Focus outline color | `var(--w-s-color-border-focus)` |
| `--w-c-radio-outline-offset` | Focus outline offset | `var(--w-outline-offset, 1px)` |

#### Interaction

| Token | Purpose | Default |
|-------|---------|---------|
| `--w-c-radio-cursor` | Cursor in enabled state | `pointer` |

#### Motion

| Token | Purpose | Default |
|-------|---------|---------|
| `--w-c-radio-transition` | Transition for control | `border-color 150ms, border-width 150ms, background-color 150ms` |

**Note:** Transitions automatically disable when `prefers-reduced-motion: reduce` is active.

---

## Complete Examples

### Horizontal Radio Group

```css
w-radio-group::part(form-control-input) {
  flex-direction: row;
  flex-wrap: wrap;
}
```

### Larger Radio Buttons

```css
w-radio {
  --w-c-radio-size: 2.4rem;
  --w-c-radio-checked-border-width: 0.8rem;
}
```

### Custom Colors

```css
w-radio {
  --w-c-radio-border-color-checked: var(--w-s-color-border-success);
}
```

### Tighter Spacing

```css
w-radio-group {
  --w-c-radio-group-gap: 8px;
  --w-c-radio-group-label-padding-bottom: 8px;
}
```

---

## Architecture Note

**Radio-group uses `<fieldset>`** which is the semantic HTML element for grouping form controls. Note that `<w-checkbox-group>` currently uses `<div>` instead - this inconsistency may be addressed in a future major version to align both components on the more accessible `<fieldset>` approach.

