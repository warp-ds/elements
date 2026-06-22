## Usage

Card is a layout component for visually grouping related content as one item.

Use `w-card` for listings, summaries, recommendations, or selectable choices where the grouped content should feel like a single object. The component does not add padding, headings, spacing between children, or semantic structure. Those must be provided by the content inside the card.

### Basic Card

```html
<w-card>
  <div style="padding: 16px;">
    <h3>Apartment in Oslo</h3>
    <p>Bright 3-room apartment with balcony.</p>
  </div>
</w-card>
```

### Visual Treatments

The default card uses an elevated surface. Use `flat` when the card should sit more quietly in the layout.

```html
<w-card>
  <div style="padding: 16px;">
    <h3>Elevated card</h3>
    <p>Use this for cards that need more visual separation.</p>
  </div>
</w-card>

<w-card flat>
  <div style="padding: 16px;">
    <h3>Flat card</h3>
    <p>Use this for dense layouts or cards inside another surface.</p>
  </div>
</w-card>
```

### Selected Cards

Use `selected` when a card represents a selected item or choice.

```html
<w-card selected>
  <div style="padding: 16px;">
    <h3>Standard delivery</h3>
    <p>Delivered in 2-4 business days.</p>
  </div>
</w-card>
```

The `selected` property only controls the card's visual state. Update it from your application state when the selection changes.

### Clickable Cards

Use `clickable` when the whole card should behave as one interactive choice. The card becomes keyboard focusable, and Enter or Space triggers a click on the card.

```html
<w-card clickable>
  <div style="padding: 16px;">
    <h3>Pick up nearby</h3>
    <p>Collect the item from a pickup point.</p>
  </div>
</w-card>
```

Listen for the card's click event and update `selected` yourself.

```html
<w-card clickable selected>
  <div style="padding: 16px;">
    <h3>Home delivery</h3>
    <p>Delivered to your door.</p>
  </div>
</w-card>
```

Do not use `clickable` when the card contains separate links, buttons, form controls, or other interactive elements. In those cases, keep the card non-clickable and make the specific control interactive instead.
