## Accessibility

`w-attention` provides built-in accessibility helpers for tooltip/popover/callout messaging:

- It sets `role="tooltip"` for tooltip mode.
- It sets `role="img"` for non-tooltip variants.
- It provides a default localized `aria-label` describing the attention type and arrow direction.

### Authoring Guidance

- Provide meaningful text in the `message` slot.
- Ensure the `target` slot content is keyboard-accessible (for example `w-button` or a native button).
- For hover-triggered tooltips, also support focus/blur so keyboard users receive the same information.

### Reading Order and Placement

For left/top placements, placing the attention message before the target in DOM order can improve screen reader flow.

### Precise ARIA Targeting

If only part of the message should be announced as details, set an explicit id on the relevant message content and reference it from the target with `aria-details`.

```html
<w-attention id="accessible-attention" placement="right" popover>
  <div slot="message">
    <p id="aria-content" role="tooltip">Important contextual text</p>
    <p>Secondary text</p>
  </div>
  <w-button aria-details="aria-content" slot="target" variant="secondary">
    Open
  </w-button>
</w-attention>
```

### Dismissible Attention

When `can-close` is used, ensure your app listens to the `close` event and updates `show` accordingly so the UI and assistive technology state stay in sync.

```html
<w-attention id="dismissible" can-close highlight>
  <w-button slot="target" variant="secondary">Show message</w-button>
  <span slot="message">Dismissible message</span>
</w-attention>

<script>
  const attention = document.getElementById('dismissible');
  attention.addEventListener('close', () => {
    attention.show = false;
  });
</script>
```
