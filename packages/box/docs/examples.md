## Examples

### Basic

<elements-example>
  
```html
<w-box aria-labelledby="delivery-heading">
  <h2 id="delivery-heading">Delivery</h2>
  <p>Choose how you want the item delivered.</p>
</w-box>
```

</elements-example>

### Neutral

<elements-example>

```html
<w-box neutral aria-labelledby="order-summary-heading">
  <h2 id="order-summary-heading">Order summary</h2>
  <p>Review the item price, delivery, and total before continuing.</p>
</w-box>
```

</elements-example>

### Info

<elements-example>

```html
<w-box info aria-labelledby="good-to-know-heading">
  <h2 id="good-to-know-heading">Good to know</h2>
  <p>You can change the delivery method before payment.</p>
</w-box>
```

</elements-example>

### Bordered

<elements-example>

```html
<w-box bordered aria-labelledby="contact-seller-heading">
  <h2 id="contact-seller-heading">Contact seller</h2>
  <p>Send a message to ask about pickup times.</p>
</w-box>
```

</elements-example>

### Bleed

<elements-example>

```html
<div style="padding: 0 16px;">
  <w-box neutral bleed aria-labelledby="summary-heading">
    <h2 id="summary-heading">Summary</h2>
    <p>This box extends into the horizontal gutter on narrow screens.</p>
  </w-box>
</div>
```

</elements-example>


### Visual Grouping Without Accessibility Landmarking

<elements-example>

```html
<w-box role="none">
  <p>This box is only a visual container.</p>
</w-box>
```

</elements-example>
