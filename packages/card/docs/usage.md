## Usage

Card is a layout component used for grouping interactive content areas on a page.

Use `w-card` for listings, summaries, recommendations, or selectable choices where the grouped content should feel like a single object.

The component does not add padding, headings, spacing between children, or semantic structure. Those must be provided by the content inside the card.

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

### Cards as Links

For navigation, use a native link inside the card and add `data-card-action` to expand its click area to the whole card.

```html
<w-card>
	<div style="padding: 16px;">
		<h3>
			<a href="/listings/123" data-card-action>Apartment in Oslo</a>
		</h3>
		<p>Bright 3-room apartment with balcony.</p>
	</div>
</w-card>
```

When the card has a second independent navigation target, add `data-card-secondary-action` to that link. The secondary action remains independently clickable and should be layered above the primary card action.

```html
<w-card>
	<div style="padding: 16px;">
		<h3>
			<a href="/listings/123" data-card-action>Apartment in Oslo</a>
		</h3>
		<p>Bright 3-room apartment with balcony.</p>
		<a href="/listings/123/contact" data-card-secondary-action>
			Contact seller
		</a>
	</div>
</w-card>
```

Do not use a card action when the card contains buttons, form controls, or other interactive elements that should be part of the same content area. Use the specific control directly instead.
