## Styling API

This section documents the supported styling hooks for `<w-alert>`.

Use these hooks to customize appearance without relying on internal structure or selectors.

Before changing the default styles, remember that doing so can result in less consistent experiences for users across the product. Prefer defaults.

- Prefer **component tokens** for size, spacing, and state styling.
- Use **parts** only for small, local tweaks.
- Avoid relying on internal class names or selectors.

### Parts

The alert exposes a small set of parts that can be targeted for last‑mile layout or typography tweaks.

| Part | Targets | Typical use |
|---|---|---|
| `base` | container element | layout adjustments |
| `icon` | icon wrapper | icon positioning tweaks |
| `content` | message content wrapper | typography tweaks |

Example:

```css
w-alert::part(content) {
  line-height: 1.6;
}
```

Parts are intended as an **escape hatch**.
Prefer component tokens for anything state‑ or size‑related.


### Component tokens

Component tokens (`--w-c-alert-*`) act as inputs to the alert styling.
They can be set directly on the component or inherited from a parent container.

Variant-specific tokens allow customization per severity level.

```css
.notification-area {
  --w-c-alert-padding: 2rem;
  --w-c-alert-border-radius: 8px;
}
```

Defaults are defined internally; setting a token is always optional.


#### Layout & size

| Token | Purpose | Default |
|---|---|---|
| `--w-c-alert-padding` | padding around alert content | `1.6rem` |
| `--w-c-alert-gap` | space between icon and content | `0.8rem` |
| `--w-c-alert-border-width` | border width (top, right, bottom) | `1px` |
| `--w-c-alert-border-left-width` | left accent border width | `4px` |
| `--w-c-alert-border-radius` | corner rounding | `4px` |
| `--w-c-alert-icon-size` | icon dimensions | `1.6rem` |


#### Typography

| Token | Purpose | Default |
|---|---|---|
| `--w-c-alert-font-size` | content font size | `--w-font-size-s` |
| `--w-c-alert-line-height` | content line height | `--w-line-height-s` |
| `--w-c-alert-text-color` | content text color | `--w-s-color-text` |


#### Colors - Info variant

| Token | Purpose | Default |
|---|---|---|
| `--w-c-alert-bg-info` | background color | `--w-s-color-background-info-subtle` |
| `--w-c-alert-border-color-info` | border color | `--w-s-color-border-info-subtle` |
| `--w-c-alert-border-left-color-info` | left accent border color | `--w-s-color-border-info` |
| `--w-c-alert-icon-color-info` | icon color | `--w-s-color-icon-info` |


#### Colors - Positive variant

| Token | Purpose | Default |
|---|---|---|
| `--w-c-alert-bg-positive` | background color | `--w-s-color-background-positive-subtle` |
| `--w-c-alert-border-color-positive` | border color | `--w-s-color-border-positive-subtle` |
| `--w-c-alert-border-left-color-positive` | left accent border color | `--w-s-color-border-positive` |
| `--w-c-alert-icon-color-positive` | icon color | `--w-s-color-icon-positive` |


#### Colors - Warning variant

| Token | Purpose | Default |
|---|---|---|
| `--w-c-alert-bg-warning` | background color | `--w-s-color-background-warning-subtle` |
| `--w-c-alert-border-color-warning` | border color | `--w-s-color-border-warning-subtle` |
| `--w-c-alert-border-left-color-warning` | left accent border color | `--w-s-color-border-warning` |
| `--w-c-alert-icon-color-warning` | icon color | `--w-s-color-icon-warning` |


#### Colors - Negative variant

| Token | Purpose | Default |
|---|---|---|
| `--w-c-alert-bg-negative` | background color | `--w-s-color-background-negative-subtle` |
| `--w-c-alert-border-color-negative` | border color | `--w-s-color-border-negative-subtle` |
| `--w-c-alert-border-left-color-negative` | left accent border color | `--w-s-color-border-negative` |
| `--w-c-alert-icon-color-negative` | icon color | `--w-s-color-icon-negative` |


## Examples

### Compact alert

```css
.compact-notifications w-alert {
  --w-c-alert-padding: 1.2rem;
  --w-c-alert-gap: 0.6rem;
  --w-c-alert-font-size: var(--w-font-size-xs);
}
```

### Custom negative variant colors

```css
w-alert[variant="negative"] {
  --w-c-alert-bg-negative: var(--custom-error-bg);
  --w-c-alert-border-left-color-negative: var(--custom-error-accent);
}
```

## Slots

| Slot | Purpose |
|---|---|
| (default) | Alert message content - supports rich HTML |
| `icon` | Custom icon (defaults to variant-specific icon if not provided) |

Example with custom icon:

```html
<w-alert variant="info">
  <w-icon slot="icon" name="CustomIcon"></w-icon>
  Custom alert with your own icon
</w-alert>
```

## Implementation notes

### Variants

Alert provides four semantic variants controlled by the `variant` attribute:
- `info` (default) - informational messages
- `positive` - success confirmations  
- `warning` - warning messages
- `negative` - error messages

Each variant automatically selects the appropriate icon (unless overridden via the `icon` slot) and applies variant-specific color tokens.

### Behavior

- Alerts use `<w-expand-transition>` for smooth show/hide animations
- `show` attribute controls visibility (hidden by default)
- `role` attribute defaults to "alert" for screen reader announcements
- For accessibility, place alerts near the element that triggered them
