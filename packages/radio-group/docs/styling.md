## Styling API

This section documents the supported styling hooks for `<w-radio>` and `<w-radio-group>`.

Use these hooks to customize appearance without relying on internal structure or selectors.

Before changing the default styles, remember that doing so can result in less consistent experiences for users across the product. Prefer defaults.

- Prefer **component tokens** for size, spacing, and state styling.
- Use **parts** only for small, local tweaks.
- Avoid relying on internal class names or selectors.

### Parts

The radio exposes a small set of parts that can be targeted for last‑mile layout or typography tweaks.

| Part | Targets | Typical use |
|---|---|---|
| `control` | radio control (circle) | minor alignment or sizing tweaks |
| `label` | label content | typography tweaks |

Example:

```css
w-radio::part(label) {
  font-weight: 600;
}

w-radio::part(control) {
  margin-top: 1px;
}
```

Parts are intended as an **escape hatch**.
Prefer component tokens for anything state‑ or size‑related.


### Component tokens

Component tokens (`--w-c-radio-*`) act as inputs to the radio styling.
They can be set directly on the component or inherited from a parent container.

```css
.settings-panel {
  --w-c-radio-gap: 12px;
}
```

Defaults are defined internally; setting a token is always optional.


#### Layout & size

| Token | Purpose | Default |
|---|---|---|
| `--w-c-radio-gap` | space between control and label | `8px` |
| `--w-c-radio-size` | width/height of the control | `2rem` |
| `--w-c-radio-radius` | border radius of the control | `50%` |
| `--w-c-radio-border-width` | border width | `1px` |
| `--w-c-radio-checked-border-width` | border width when checked | `0.6rem` |


#### Colors

| Token | Purpose | Default |
|---|---|---|
| `--w-c-radio-bg` | control background | theme default |
| `--w-c-radio-border-color` | control border color | theme default |
| `--w-c-radio-border-color-checked` | border color when checked | theme default |
| `--w-c-radio-label-color` | label text color | `currentColor` |


#### Invalid state

| Token | Purpose | Default |
|---|---|---|
| `--w-c-radio-border-color-invalid` | border color when invalid | theme default |


#### Disabled state

| Token | Purpose | Default |
|---|---|---|
| `--w-c-radio-bg-disabled` | background when disabled | theme default |
| `--w-c-radio-border-color-disabled` | border when disabled | theme default |
| `--w-c-radio-label-color-disabled` | label color when disabled | theme default |
| `--w-c-radio-cursor-disabled` | cursor when disabled | `not-allowed` |

#### Typography

| Token | Purpose | Default |
|---|---|---|
| `--w-c-radio-label-font-size` | label font size | theme default |
| `--w-c-radio-label-line-height` | label line height | theme default |


#### Focus

| Token | Purpose | Default |
|---|---|---|
| `--w-c-radio-outline-width` | focus outline width | `2px` |
| `--w-c-radio-outline-color` | focus outline color | theme default |
| `--w-c-radio-outline-offset` | focus outline offset | theme default |

#### Interaction

| Token | Purpose | Default |
|---|---|---|
| `--w-c-radio-cursor` | cursor in enabled state | `pointer` |

#### Motion

| Token | Purpose | Default |
|---|---|---|
| `--w-c-radio-transition` | transition for control | `150ms cubic-bezier(0.4, 0, 0.2, 1)` |

Transitions are automatically disabled when `prefers-reduced-motion: reduce` is active.

