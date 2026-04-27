## Usage

`w-affix` is typically used inside form controls to render prefix/suffix text or icon actions.

### Text Label

Use `label` to render static text, such as currency or unit indicators.

```html
<w-affix label="kr"></w-affix>
```

### Search Icon

Use `search` to render a clickable search icon button.

```html
<w-affix search aria-label="Search"></w-affix>
```

### Clear Icon

Use `clear` to render a clickable clear/reset icon button.

```html
<w-affix clear aria-label="Clear input"></w-affix>
```

### In Textfield Slots

`w-affix` is usually slotted into the w-textfield form element. Use the textfield's `prefix` or `suffix` slots to add the affix to the component.

```html
<w-textfield label="Search">
  <w-affix slot="prefix" search aria-label="Search"></w-affix>
</w-textfield>

<w-textfield label="Price">
  <w-affix slot="suffix" label="kr"></w-affix>
</w-textfield>
```
