## Styling API

This section documents the supported styling hooks for `<w-switch>`.

Use these hooks to customize appearance without relying on internal structure or selectors.

Before changing the default styles, remember that doing so can result in less consistent experiences for users across the product. Prefer defaults.

- Prefer **component tokens** for size, spacing, and state styling.
- Use **parts** only for small, local tweaks.
- Avoid relying on internal class names or selectors.

### Parts

The switch exposes a small set of parts that can be targeted for last‑mile layout or positioning tweaks.

| Part | Targets | Typical use |
|---|---|---|
| `base` | button element | minor alignment tweaks |
| `track` | background rail element | advanced track styling |
| `handle` | sliding handle element | advanced handle styling |

Example:

```css
w-switch::part(handle) {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
```

Parts are intended as an **escape hatch**.
Prefer component tokens for anything state‑ or size‑related.


### Component tokens

Component tokens (`--w-c-switch-*`) act as inputs to the switch styling.
They can be set directly on the component or inherited from a parent container.

```css
.settings-panel {
  --w-c-switch-height: 2rem;
  --w-c-switch-width: 4rem;
}
```

Defaults are defined internally; setting a token is always optional.


#### Dimensions

| Token | Purpose | Default |
|---|---|---|
| `--w-c-switch-height` | switch total height | `2.4rem` |
| `--w-c-switch-width` | switch total width | `4.4rem` |
| `--w-c-switch-handle-size` | handle width/height | `1.6rem` |
| `--w-c-switch-handle-offset` | handle position from edge | `0.4rem` |
| `--w-c-switch-handle-translate` | handle movement distance when checked | `2rem` |


#### Track colors - active (checked)

| Token | Purpose | Default |
|---|---|---|
| `--w-c-switch-track-bg-active` | track background when checked | `--w-s-color-background-primary` |
| `--w-c-switch-track-bg-active-hover` | track background when checked + hover | `--w-s-color-background-primary-hover` |


#### Track colors - inactive (unchecked)

| Token | Purpose | Default |
|---|---|---|
| `--w-c-switch-track-bg-inactive` | track background when unchecked | `--w-s-color-background` |
| `--w-c-switch-track-bg-inactive-hover` | track background when unchecked + hover | `--w-s-color-background-hover` |
| `--w-c-switch-track-border-inactive` | track border when unchecked | `--w-s-color-border-strong` |
| `--w-c-switch-track-border-inactive-hover` | track border when unchecked + hover | `--w-s-color-border-strong-hover` |


#### Track colors - disabled

| Token | Purpose | Default |
|---|---|---|
| `--w-c-switch-track-bg-disabled-on` | track background when disabled + checked | `--w-s-color-background-disabled` |
| `--w-c-switch-track-bg-disabled-off` | track background when disabled + unchecked | `--w-s-color-background-disabled-subtle` |
| `--w-c-switch-track-border-disabled` | track border when disabled | `--w-s-color-border-disabled` |


#### Handle colors - active (checked + enabled)

| Token | Purpose | Default |
|---|---|---|
| `--w-c-switch-handle-bg-active` | handle background when checked | `--w-s-color-background` |


#### Handle colors - inactive (unchecked + enabled)

| Token | Purpose | Default |
|---|---|---|
| `--w-c-switch-handle-bg-inactive` | handle background when unchecked | `--w-s-color-border-strong` |
| `--w-c-switch-handle-bg-inactive-hover` | handle background when unchecked + hover | `--w-s-color-border-strong-hover` |


#### Handle colors - disabled

| Token | Purpose | Default |
|---|---|---|
| `--w-c-switch-handle-bg-disabled-on` | handle background when disabled + checked | `--w-s-color-background-disabled-subtle` |
| `--w-c-switch-handle-bg-disabled-off` | handle background when disabled + unchecked | `--w-s-color-background-disabled` |


#### Focus

| Token | Purpose | Default |
|---|---|---|
| `--w-c-switch-outline-width` | focus outline width | `2px` |
| `--w-c-switch-outline-color` | focus outline color | `--w-s-color-border-focus` |
| `--w-c-switch-outline-offset` | focus outline offset | `1px` |


#### Interaction

| Token | Purpose | Default |
|---|---|---|
| `--w-c-switch-cursor` | cursor in enabled state | `pointer` |
| `--w-c-switch-cursor-disabled` | cursor when disabled | `not-allowed` |


#### Motion

| Token | Purpose | Default |
|---|---|---|
| `--w-c-switch-transition` | transition duration and easing | `150ms cubic-bezier(0.4, 0, 0.2, 1)` |

Transitions are automatically disabled when `prefers-reduced-motion: reduce` is active.


## Examples

### Compact switch

```css
.compact-controls w-switch {
  --w-c-switch-height: 2rem;
  --w-c-switch-width: 3.6rem;
  --w-c-switch-handle-size: 1.4rem;
  --w-c-switch-handle-offset: 0.3rem;
  --w-c-switch-handle-translate: 1.6rem;
}
```

### Custom colors

```css
.danger-zone w-switch {
  --w-c-switch-track-bg-active: var(--w-s-color-background-negative);
  --w-c-switch-track-bg-active-hover: var(--w-s-color-background-negative-hover);
}
```
