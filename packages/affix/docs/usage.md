## Usage

`w-affix` is typically used inside form controls to render prefix/suffix text or icon actions.

### In Textfield Slots

`w-affix` is usually slotted into the w-textfield form element. Use the w-textfield's `prefix` or `suffix` slots to add the affix to the component.

```html
<w-textfield label="Price">
  <w-affix slot="suffix" label="kr"></w-affix>
</w-textfield>
```

### Text Label

Use `label` to render static text, such as currency or unit indicators.

```html
<w-affix label="kr"></w-affix>
```

### Icons

`w-affix` can also render any icon supported by `w-icon` using the attribute `icon`.

```html
<w-textfield label="Award">
  <w-affix slot="prefix" icon="AwardMedal"></w-affix>
</w-textfield>
```

### Search Icon

Use `search` to render a clickable search icon button. If you wrap the w-affix and surrounding w-textfield in a form, clicking the w-affix will submit the form.

```html
<w-affix search aria-label="Search"></w-affix>
```

### Clear Icon

Use `clear` to render a clickable clear/reset icon button.
When the clear attribute is used inside a w-textfield, clicking the clear button will automatically reset the w-textfield.

```html
<w-affix clear aria-label="Clear input"></w-affix>
```
