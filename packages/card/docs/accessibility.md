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

### Selection State

The `selected` card property is deprecated. Use a form control inside the card and add `data-card-action` to make its activation area cover the card. The card derives its selected styling from the control's `checked` state.

```html
<w-card>
	<div style="padding: 16px;">
		<w-radio
			id="delivery-home"
			name="delivery"
			value="home"
			data-card-action
		></w-radio>
		<label for="delivery-home">Home delivery</label>
		<p>Delivered to your door.</p>
	</div>
</w-card>
```

The selected state should also be clear from the surrounding context, such as a group label, heading, or visible text.

### Card Actions

Use `data-card-action` on the card's primary link or form control when its activation area should cover the whole card. Keep the link, radio, or checkbox as the only focusable element.

The visible card content should describe what will be selected or activated. Do not add `data-card-action` to a card that contains multiple independent actions.

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

To make the whole card a link, use a native anchor with `data-card-action` in a non-clickable card.

```html
<w-card>
	<div style="padding: 16px;">
		<h3>
			<a href="/listings/123" data-card-action> Apartment in Oslo </a>
		</h3>
		<p>Bright 3-room apartment with balcony.</p>
	</div>
</w-card>
```

If you need the whole card to be a link and you have additional interactive elements on the card, use `data-card-secondary-action` as well.

```html
<w-card>
	<div style="padding: 16px;">
		<h3>
			<a href="/listings/123" data-card-action> Apartment in Oslo </a>
		</h3>
		<w-button variant="primary" data-card-secondary-action
			>Contact seller</w-button
		>
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
