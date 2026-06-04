## Usage

Use child `<option>` elements for declarative HTML usage.

<elements-example>

```html
<w-combobox label="Country" placeholder="Search">
    <option value="no">Norway</option>
    <option value="se">Sweden</option>
    <option value="dk">Denmark</option>
</w-combobox>
```

</elements-example>

The option text is used as the visible suggestion. The `value` attribute is used as the submitted and selected value.

For framework usage or dynamic data, you may set the `options` property instead.

```js
combobox.options = [
  { value: 'no', label: 'Norway' },
  { value: 'se', label: 'Sweden' },
  { value: 'dk', label: 'Denmark' },
];
```

When `options` contains entries, it is used instead of child `<option>` elements.
