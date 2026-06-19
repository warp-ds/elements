## Styling API

This section documents the supported styling hooks for `<w-alert>`.

Before changing the default styles, remember that doing so can result in less consistent experiences for users across the product. Prefer defaults.

### Current implementation

The alert component currently uses UnoCSS utility classes without component tokens. Customization is limited to ensure consistent feedback patterns across the design system.

### Variants

Alert provides four semantic variants that control both color treatment and iconography:

| Variant | Purpose | Icon |
|---|---|---|
| `info` (default) | Informational messages | Info icon |
| `positive` | Success confirmations | Success icon |
| `warning` | Warning messages | Warning icon |
| `negative` | Error messages | Error icon |

Each variant applies semantic color tokens for background, border, text, and icons to ensure consistent visual hierarchy.

### Available customization

The component responds to semantic color tokens based on variant:

**Info variant:**
- Background: `--w-s-color-background-info-subtle`
- Border: `--w-s-color-border-info-subtle`
- Left border: `--w-s-color-border-info`
- Icon: `--w-s-color-icon-info`

**Positive variant:**
- Background: `--w-s-color-background-positive-subtle`
- Border: `--w-s-color-border-positive-subtle`
- Left border: `--w-s-color-border-positive`
- Icon: `--w-s-color-icon-positive`

**Warning variant:**
- Background: `--w-s-color-background-warning-subtle`
- Border: `--w-s-color-border-warning-subtle`
- Left border: `--w-s-color-border-warning`
- Icon: `--w-s-color-icon-warning`

**Negative variant:**
- Background: `--w-s-color-background-negative-subtle`
- Border: `--w-s-color-border-negative-subtle`
- Left border: `--w-s-color-border-negative`
- Icon: `--w-s-color-icon-negative`

### Component structure

**Layout:**
- Display: flex
- Padding: 16px (`p-16`)
- Border: 1px standard, 4px left accent
- Border radius: 4px
- Icon size: 16px × 16px with 8px right margin
- Text size: small (`text-s`)

**Behavior:**
- Uses `<w-expand-transition>` for show/hide animation
- `show` attribute controls visibility
- `role` attribute defaults to "alert" for screen reader announcements

### Parts

The alert does not expose any parts for customization.

### Slot

| Slot | Purpose |
|---|---|
| (default) | Alert message content - supports rich HTML |

### Guidelines

- Use the appropriate variant to match message severity
- Keep messages concise and actionable
- Place alerts near the element that triggered them for accessibility
- The default `role="alert"` causes immediate screen reader announcement - override only when less assertive behavior is needed
- Alerts are hidden by default - set `show` attribute to display

### Implementation notes

This component uses UnoCSS utility classes for styling rather than component tokens. The variant-based color system ensures consistent feedback messaging across the design system. The component wraps content in `<w-expand-transition>` for smooth show/hide animations.
