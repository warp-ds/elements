## Accessibility

Box wraps its slotted content in an internal container with `role="region"` by default.

### Use Region Only For Meaningful Sections

`region` is a landmark role. Use it only when the box represents a section of the page that users may want to navigate to directly.

For purely visual grouping, remove the default role:

```html
<w-box role="">
  <p>This box is only a visual container.</p>
</w-box>
```

### Prefer Native Landmarks For Named Sections

If the section needs a heading and an accessible landmark name, use a native landmark element around the box and opt out of the box role.

```html
<section aria-labelledby="delivery-heading">
  <w-box role="">
    <h2 id="delivery-heading">Delivery</h2>
    <p>Choose how you want the item delivered.</p>
  </w-box>
</section>
```

### Do Not Rely On Visual Treatment Alone

The `info`, `neutral`, `bordered`, and `bleed` properties are visual only. They do not change the meaning of the content for assistive technologies.

Use headings, text, and semantic HTML inside the box to communicate structure and purpose.
