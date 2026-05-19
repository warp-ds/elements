## Accessibility

Box wraps its slotted content in a section tag by default which is equivalant to role="region" for the purposes of screen readers.

### Do Not Rely On Visual Treatment Alone

The `info`, `neutral`, `bordered`, and `bleed` properties are visual only. They do not change the meaning of the content for assistive technologies.

Always use headings, text, and semantic HTML inside the box to communicate structure and purpose.

### Landmark Behaviour For Meaningful Sections

By default, w-box behaves as a landmark for screen readers. This means it represents a section of the page that users may want to navigate to directly.

We strongly suggest you provide a heading and an accessible landmark name to ensure that screen readers properly treat it as a landmark.

```html
  <w-box aria-labelledby="delivery-heading">
    <h2 id="delivery-heading">Delivery</h2>
    <p>Choose how you want the item delivered.</p>
  </w-box>
```

If you must use box for a purely visual grouping, set role none:

```html
<w-box role="none">
  <p>This box is only a visual container.</p>
</w-box>
```