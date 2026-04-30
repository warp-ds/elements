## Usage

Badge is a compact, non-interactive label for short metadata such as status, category, count, price, or sponsorship information.

Use a badge when the label supports nearby content and does not require user interaction.

### Basic Badge

```html
<w-badge>New</w-badge>
```

### Variants

Choose a variant that matches the meaning of the badge text:

- `neutral`: default metadata or low-emphasis labels
- `info`: informational labels
- `positive`: successful, active, or approved states
- `warning`: cautionary states
- `negative`: error, blocked, or rejected states
- `disabled`: unavailable or inactive states
- `price`: price labels, especially when placed over media
- `sponsored`: sponsored or commercial labels

```html
<w-badge variant="neutral">Neutral</w-badge>
<w-badge variant="info">Info</w-badge>
<w-badge variant="positive">Approved</w-badge>
<w-badge variant="warning">Pending</w-badge>
<w-badge variant="negative">Rejected</w-badge>
<w-badge variant="disabled">Unavailable</w-badge>
<w-badge variant="price">1 200 kr</w-badge>
<w-badge variant="sponsored">Sponsored</w-badge>
```

If `variant` is omitted, the badge uses the neutral visual treatment.

### Positioned Badges

Use `position` when a badge should sit in a corner of a parent element, such as a media thumbnail or listing image. The parent element should establish the positioning context with `position: relative`.

Supported positions are `top-left`, `top-right`, `bottom-right`, and `bottom-left`.

```html
<div style="position: relative;">
  <img src="listing.jpg" alt="Living room with large windows" />
  <w-badge variant="price" position="top-right">1 200 kr</w-badge>
</div>
```

### Content Guidelines

Keep badge text short and descriptive. Avoid using badges for full messages, instructions, or actions. Use [Alert](/docs/components/alert/overview) for important feedback messages and an interactive component, such as a button or link, when the user can act on the item.
