## Examples

### Basic

<elements-example>

```html
<w-card>
	<div style="padding: 16px;">
		<h3>Apartment in Oslo</h3>
		<p>Bright 3-room apartment with balcony.</p>
	</div>
</w-card>
```

</elements-example>

### Flat

<elements-example>

```html
<w-card flat>
	<div style="padding: 16px;">
		<h3>Order summary</h3>
		<p>Review the item price, delivery, and total before continuing.</p>
	</div>
</w-card>
```

</elements-example>

### Radio Selection

<elements-example>

```html
<w-card>
	<div style="padding: 16px;">
		<w-radio
			id="standard-delivery"
			name="delivery"
			value="standard"
			data-card-action
		></w-radio>
		<label for="standard-delivery">Standard delivery</label>
		<p>Delivered in 2-4 business days.</p>
	</div>
</w-card>
```

</elements-example>

### Flat Radio Selection

<elements-example>

```html
<w-card flat>
	<div style="padding: 16px;">
		<w-radio
			id="pickup-point"
			name="delivery"
			value="pickup"
			data-card-action
		></w-radio>
		<label for="pickup-point">Pickup point</label>
		<p>Collect the item from a nearby pickup point.</p>
	</div>
</w-card>
```

</elements-example>

### Checkbox Selection

<elements-example>

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

</elements-example>
