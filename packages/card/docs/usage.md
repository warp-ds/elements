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

### Selection Cards

The `selected` card property is deprecated. For selectable cards, place a `w-radio` or `w-checkbox` inside the card and add `data-card-action` to the control. The card automatically uses its selected styling when the control is checked.

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

Use `w-checkbox` in the same way when more than one card can be selected:

```html
<w-card>
	<div style="padding: 16px;">
		<w-checkbox
			id="gift-wrap"
			name="options"
			value="gift-wrap"
			data-card-action
		></w-checkbox>
		<label for="gift-wrap">Add gift wrapping</label>
	</div>
</w-card>
```

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

### Grouped Selection Cards

Use `w-radio-group` or `w-checkbox-group` to provide the semantic and behavioral group. Add `data-card-group` around the cards that should appear as one connected list. Cards outside that wrapper can remain visually separate while still belonging to the same group.

```html
<w-radio-group label="Package size" name="package-size">
	<div data-card-group>
		<w-card>
			<div style="padding: 16px;">
				<w-radio id="package-small" value="small" data-card-action></w-radio>
				<label for="package-small">Small</label>
			</div>
		</w-card>

		<w-card>
			<div style="padding: 16px;">
				<w-radio id="package-medium" value="medium" data-card-action></w-radio>
				<label for="package-medium">Medium</label>
			</div>
		</w-card>
	</div>

	<w-card>
		<div style="padding: 16px;">
			<w-radio id="package-large" value="large" data-card-action></w-radio>
			<label for="package-large">Large</label>
		</div>
	</w-card>
</w-radio-group>
```

The separate `Large` card remains part of the radio group: selecting it deselects either card in the connected list. Use the same structure with `w-checkbox-group` when multiple cards can be selected.
