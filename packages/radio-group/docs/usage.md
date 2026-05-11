## Usage

A radio input typically consists of two components:

- `<w-radio-group>` - A grouping wrapper that manages labeling, help text, roving keyboard focus, and validation for child radios.
- `<w-radio>` - A single radio with required and invalid states.

In advanced cases you may use `<w-radio>` without `<w-radio-group>`. If you're unsure what's correct in your case, always wrap `<w-radio>` in a `<w-radio-group>`.

The components automatically handle:

- Form integration and constraint validation
- Required state handling with validation messages
- Accessibility attributes, keyboard interaction, and labeling

<elements-example>

```html
<w-radio-group label="Select an option" name="usage">
    <w-radio value="one">Option 1</w-radio>
    <w-radio value="two">Option 2</w-radio>
    <w-radio value="three">Option 3</w-radio>
</w-radio-group>
```

</elements-example>

### Validation

Set the `invalid` attribute to display a radio group as invalid, for example if nothing was selected and the group was `required`.

`invalid` can be paired with `help-text` to provide feedback to the user about how to correct the error. However, since the `invalid` + `required` use case is so common you can omit `help-text` to use a generic built-in one.

<elements-example>

```html
<w-radio-group label="Select an option" name="usage" required invalid>
    <w-radio value="one">Option 1</w-radio>
    <w-radio value="two">Option 2</w-radio>
    <w-radio value="three">Option 3</w-radio>
</w-radio-group>
```

</elements-example>
