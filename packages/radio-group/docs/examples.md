## Examples

<elements-example>

```html
<w-radio-group label="Select an option" name="examples">
    <w-radio value="one">Option 1</w-radio>
    <w-radio value="two">Option 2</w-radio>
    <w-radio value="three">Option 3</w-radio>
</w-radio-group>
```

</elements-example>

### Optional

Add the `optional` prop to `<w-radio-group>` to indicate that the user doesn't have to pick an option.

<elements-example>

```html
<w-radio-group label="Select an option" name="optional" optional>
    <w-radio value="one">Option 1</w-radio>
    <w-radio value="two">Option 2</w-radio>
    <w-radio value="three">Option 3</w-radio>
</w-radio-group>
```

</elements-example>


### Help text

Use `help-text` to give additional context when the label and options are not enough.

<elements-example>

```html
<w-radio-group label="Select an option" name="help" help-text="Pick whichever you like">
    <w-radio value="one">Option 1</w-radio>
    <w-radio value="two">Option 2</w-radio>
    <w-radio value="three">Option 3</w-radio>
</w-radio-group>
```

</elements-example>

### Disabled

Keep in mind that using disabled is an anti-pattern.

There will always be users who don't understand why an element is disabled, or users who can't even see that
it is disabled because of poor lighting conditions or other reasons.

Please consider more informative alternatives before choosing to use disabled on an element.


<elements-example>

```html
<w-radio-group label="Select an option" name="disabled" disabled>
    <w-radio value="one">Option 1</w-radio>
    <w-radio value="two">Option 2</w-radio>
    <w-radio value="three">Option 3</w-radio>
</w-radio-group>
```

</elements-example>
