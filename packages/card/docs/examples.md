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

### Radio card group

Cards can be visually separated using a `div` with data attribute `data-card-group`.

<elements-example>

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
		<w-card>
			<div style="padding: 16px;">
				<w-radio id="package-large" value="large" data-card-action></w-radio>
				<label for="package-large">Large</label>
			</div>
		</w-card>
	</div>
</w-radio-group>
```

</elements-example>

### Radio card group with separation

In this example, one of the radio cards is visually separated while still remaining part of the group.
This is achieved by wrapping some of the cards in a `div` with the data attribute `data-card-group`.

<elements-example>

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

</elements-example>

### Checkbox card group

Cards can be visually separated using a `div` with data attribute `data-card-group`.

<elements-example>

```html
<w-checkbox-group label="Optional services" name="services">
	<div data-card-group>
		<w-card>
			<div style="padding: 16px; display: flex; gap: 8px;">
				<w-checkbox
					id="grouped-checkbox-gift-wrap"
					value="gift-wrap"
					data-card-action
				></w-checkbox>
				<label for="grouped-checkbox-gift-wrap">Gift wrapping</label>
			</div>
		</w-card>
		<w-card>
			<div style="padding: 16px; display: flex; gap: 8px;">
				<w-checkbox
					id="grouped-checkbox-insurance"
					value="insurance"
					data-card-action
				></w-checkbox>
				<label for="grouped-checkbox-insurance">Extra insurance</label>
			</div>
		</w-card>
		<w-card>
			<div style="padding: 16px; display: flex; gap: 8px;">
				<w-checkbox
					id="separate-checkbox-priority"
					value="priority"
					data-card-action
				></w-checkbox>
				<label for="separate-checkbox-priority">Priority handling</label>
			</div>
		</w-card>
	</div>
</w-checkbox-group>
```

</elements-example>

### Checkbox card group with separation

In this example, one of the checkbox cards is visually separated while still remaining part of the group.
This is achieved by wrapping some of the cards in a `div` with the data attribute `data-card-group`.

<elements-example>

```html
<w-checkbox-group label="Optional services" name="services">
	<div data-card-group>
		<w-card>
			<div style="padding: 16px; display: flex; gap: 8px;">
				<w-checkbox
					id="grouped-checkbox-gift-wrap"
					value="gift-wrap"
					data-card-action
				></w-checkbox>
				<label for="grouped-checkbox-gift-wrap">Gift wrapping</label>
			</div>
		</w-card>
		<w-card>
			<div style="padding: 16px; display: flex; gap: 8px;">
				<w-checkbox
					id="grouped-checkbox-insurance"
					value="insurance"
					data-card-action
				></w-checkbox>
				<label for="grouped-checkbox-insurance">Extra insurance</label>
			</div>
		</w-card>
	</div>
	<w-card>
		<div style="padding: 16px; display: flex; gap: 8px;">
			<w-checkbox
				id="separate-checkbox-priority"
				value="priority"
				data-card-action
			></w-checkbox>
			<label for="separate-checkbox-priority">Priority handling</label>
		</div>
	</w-card>
</w-checkbox-group>
```

</elements-example>
