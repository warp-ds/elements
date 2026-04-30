## Usage

Box is a layout component for visually separating a section of content from the surrounding page.

Use `w-box` for grouped content that needs padding, a background, or a border. The component does not add heading structure, spacing between children, or interactive behavior.

### Basic Box

```html
<w-box role="">
  <h2>Delivery</h2>
  <p>Choose how you want the item delivered.</p>
</w-box>
```

### Visual Treatments

Use one visual treatment at a time:

- `neutral`: a quiet sunken surface for grouped content
- `info`: a subtle information background
- `bordered`: a bordered surface with the default background

```html
<w-box neutral role="">
  <p>Neutral content area</p>
</w-box>

<w-box info role="">
  <p>Informational content area</p>
</w-box>

<w-box bordered role="">
  <p>Bordered content area</p>
</w-box>
```

### Bleed

Use `bleed` when a box sits inside a page gutter but should extend to the container edge on narrow screens. `bleed` is commonly combined with a visual treatment such as `neutral` or `info`.

```html
<w-box neutral bleed role="">
  <h2>Summary</h2>
  <p>This box extends into the horizontal gutter on narrow screens.</p>
</w-box>
```

### Role

The box content wrapper uses `role="region"` by default. For most visual grouping, set `role=""` to remove the default role.

If the box represents a named section of the page, prefer a native landmark around the box and opt out of the box role.

```html
<section aria-labelledby="delivery-heading">
  <w-box role="">
    <h2 id="delivery-heading">Delivery</h2>
    <p>Choose how you want the item delivered.</p>
  </w-box>
</section>
```
