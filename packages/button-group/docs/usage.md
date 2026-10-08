## Usage

A button group is a type of form input displayed as multiple buttons in a group, typically used as a filter control.

Semantically speaking a button group is either a checkbox group (for selecting multiple values) or a radio group (for selecting a single value).

A button group's purpose should be evident from its surroundings and contents. The group itself should have no visual label. For accessibility reasons you must name the button group regardless and set it as the group `label` attribute.

### Multiple selection button group

```html
<w-checkbox-group label="Filter by color" name="color-filters" type="button">
	<w-checkbox value="red">Red</w-checkbox>
	<w-checkbox value="green">Green</w-checkbox>
	<w-checkbox value="blue">Blue</w-checkbox>
</w-checkbox-group>
```

### Single selection button group

```html
<w-radio-group label="Package size" name="package-size" type="button">
	<w-radio value="small">Small</w-radio>
	<w-radio value="medium">Medium</w-radio>
	<w-radio value="large">Large</w-radio>
</w-radio-group>
```
