## Examples

<elements-example>

```html
<w-select label="Berries">
    <option value="raspberries">Raspberries</option>
    <option value="strawberries">Strawberries</option>
    <option value="cloudberries">Cloudberries</option>
</w-select>
```

</elements-example>

### Placeholder

A select doesn't have a `placeholder` as such, but an `<option>` with an empty value gives a similar result.

<elements-example>

```html
<w-select label="Berries">
    <option value="">Select an option</option>
    <option value="raspberries">Raspberries</option>
    <option value="strawberries">Strawberries</option>
    <option value="cloudberries">Cloudberries</option>
</w-select>
```

</elements-example>

### Optional

Add the `optional` prop to indicate that the select is not required. To make the select optional you must add an `<option>` with an empty value.

<elements-example>

```html
<w-select label="Berries" optional>
    <option value="">Select an option</option>
    <option value="raspberries">Raspberries</option>
    <option value="strawberries">Strawberries</option>
    <option value="cloudberries">Cloudberries</option>
</w-select>
```

</elements-example>

### Help text

Use `help-text` to give additional context when the label and options are not enough.

<elements-example>

```html
<w-select label="Berries" help-text="We assume this is your jam">
    <option value="raspberries">Raspberries</option>
    <option value="strawberries">Strawberries</option>
    <option value="cloudberries">Cloudberries</option>
</w-select>
```

</elements-example>

### No visual label

You must set either an `aria-label` or an [`aria-labelledby`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby).

<elements-example>

```html
<w-select aria-label="Berries">
    <option value="raspberries">Raspberries</option>
    <option value="strawberries" selected>Strawberries</option>
    <option value="cloudberries">Cloudberries</option>
</w-select>
```

</elements-example>


### Disabled

Keep in mind that using disabled is an anti-pattern.

There will always be users who don't understand why an element is disabled, or users who can't even see that
it is disabled because of poor lighting conditions or other reasons.

Please consider more informative alternatives before choosing to use disabled on an element.

<elements-example>
    
```html
<w-select label="Berries" disabled>
    <option value="raspberries">Raspberries</option>
    <option value="strawberries">Strawberries</option>
    <option value="cloudberries">Cloudberries</option>
</w-select>
```

</elements-example>

### Read only

The `readonly` boolean attribute makes the selection immutable. Unlike disabled the select remains focusable. See [MDN docs](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/readOnly) for more information.

<elements-example>

```html
<w-select label="Berries" readonly>
    <option value="raspberries">Raspberries</option>
    <option value="strawberries">Strawberries</option>
    <option value="cloudberries">Cloudberries</option>
</w-select>
```

</elements-example>
