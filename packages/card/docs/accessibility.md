## Accessibility

Card is a visual container. It does not create a heading, landmark, list item, link, button, or other semantic structure for the slotted content.

### Provide Semantic Content

Use semantic HTML inside the card so assistive technologies can understand the content.

```html
<w-card>
  <article style="padding: 16px;" aria-labelledby="listing-heading">
    <h3 id="listing-heading">Apartment in Oslo</h3>
    <p>Bright 3-room apartment with balcony.</p>
  </article>
</w-card>
```

Do not rely on the card surface, border, or selected styling to communicate meaning.

### Selected State

Use `selected` only when the card represents a selected item or choice.

```html
<w-card selected>
  <div style="padding: 16px;">
    <h3>Standard delivery</h3>
    <p>Delivered in 2-4 business days.</p>
  </div>
</w-card>
```

The selected state should also be clear from the surrounding context, such as a group label, heading, or visible text.

### Clickable Cards

Use `clickable` only when the whole card has one action or represents one selectable choice.

```html
<w-card clickable>
  <div style="padding: 16px;">
    <h3>Home delivery</h3>
    <p>Delivered to your door.</p>
  </div>
</w-card>
```

The visible card content should describe what will be selected or activated. Do not put separate links, buttons, form controls, or other interactive elements inside a clickable card.

### Prefer Specific Interactive Elements

If only part of the card is interactive, use the appropriate element for that action.

Use a link for navigation:

```html
<w-card>
  <div style="padding: 16px;">
    <h3><a href="/listings/123">Apartment in Oslo</a></h3>
    <p>Bright 3-room apartment with balcony.</p>
  </div>
</w-card>
```

Use a button for an action on the current page:

```html
<w-card>
  <div style="padding: 16px;">
    <h3>Apartment in Oslo</h3>
    <p>Bright 3-room apartment with balcony.</p>
    <w-button variant="primary">Contact seller</w-button>
  </div>
</w-card>
```
