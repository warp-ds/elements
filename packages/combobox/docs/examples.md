## Examples

<elements-example>

```html
<w-combobox label="Fruit" placeholder="Type to search">
    <option value="apple">Apple</option>
    <option value="banana">Banana</option>
    <option value="orange">Orange</option>
</w-combobox>
```

</elements-example>

### Different label and value

Use the `label` attribute when the visible suggestion should differ from the selected value.

<elements-example>

```html
<w-combobox label="Country" placeholder="Search">
    <option value="us" label="United States">US</option>
    <option value="uk" label="United Kingdom">UK</option>
    <option value="no">Norway</option>
</w-combobox>
```

</elements-example>

### Dynamic options

Use the `options` property when options come from application state or a remote search.

```js
const combobox = document.querySelector('w-combobox');

combobox.options = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'orange', label: 'Orange' },
];
```

Child option content is plain text. Rich option content is not supported.
