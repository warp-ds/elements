## Usage

Box is a layout component for visually separating a section of content from the surrounding page.

Use `w-box` for grouped content that needs padding, a background, or a border. The component does not add heading structure, spacing between children, or interactive behavior. Those you must provide yourself.

### Basic Box

```html
<w-box aria-labelledby="delivery-heading">
  <h2 id="deliver-heading">Delivery</h2>
  <p>Choose how you want the item delivered.</p>
</w-box>
```

### Visual Treatments

Use one visual treatment at a time:

- `neutral`: a quiet sunken surface for grouped content
- `info`: a subtle information background
- `bordered`: a bordered surface with the default background

```html
<w-box neutral role="none">
  <p>Neutral content area</p>
</w-box>

<w-box info role="none">
  <p>Informational content area</p>
</w-box>

<w-box bordered role="none">
  <p>Bordered content area</p>
</w-box>
```

### Bleed

Use `bleed` when a box sits inside a page gutter but should extend to the container edge on narrow screens. `bleed` is commonly combined with a visual treatment such as `neutral` or `info`.

```html
<w-box neutral bleed aria-labelledby="summary-heading">
  <h2 id="summary-heading">Summary</h2>
  <p>This box extends into the horizontal gutter on narrow screens.</p>
</w-box>
```

