## Accessibility

Badge renders slotted text as regular content. It does not add an ARIA role and it is not announced as a live region.

### Use Meaningful Text

Do not rely on color alone to communicate meaning. The badge text should describe the status or metadata by itself.

```html
<w-badge variant="positive">Approved</w-badge>
<w-badge variant="negative">Rejected</w-badge>
```

Avoid labels that only make sense visually:

```html
<!-- Avoid -->
<w-badge variant="positive">Green</w-badge>
```

### Keep Badges Non-Interactive

Do not place interactive elements inside `w-badge`. If the user can click, dismiss, filter, or select the item, use an interactive component instead.

The `disabled` variant is visual only. It does not disable related controls or remove anything from the tab order.

```html
<!-- Avoid -->
<w-badge>
  <button type="button">New</button>
</w-badge>
```

### Dynamic Changes

If a badge value changes after the page has loaded and users need to be notified, announce that change outside the badge with an appropriate live region or use [Alert](/docs/components/alert/overview) for important feedback.

### Duplicate or Decorative Badges

If the same information is already available in nearby accessible text and the badge is only a visual duplicate, hide the duplicate badge from assistive technologies.

```html
<p>Sponsored listing</p>
<w-badge aria-hidden="true" variant="sponsored">Sponsored</w-badge>
```
