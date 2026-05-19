## Examples

### Placeholder

Placeholder text can be used to describe the expected value or formatting for the textfield.

Placeholder text will only appear when the textfield is empty, and must not be used as a
substitute for labeling the element with a visible label.

<elements-example>
    
```html
<w-textfield label="Email" placeholder="ola.nordmann@finn.no"></w-textfield>
```

</elements-example>

### Prefix label

<elements-example>

```html
<w-textfield label="Price">
  <w-affix slot="prefix" label="kr"></w-affix>
</w-textfield>
```

</elements-example>

### Suffix Label

<elements-example>
  
```html
<w-textfield label="Price">
  <w-affix slot="suffix" label="kr"></w-affix>
</w-textfield>
```

</elements-example>

### Prefix Search Icon

<elements-example>
  
```html
<w-textfield label="Search">
  <w-affix slot="prefix" search></w-affix>
</w-textfield>
```

</elements-example>

### Suffix Search Icon

If you wrap the textfield with affix in a form element, clicking the search button will automatically submit the form

<elements-example>

```html
<form>
  <w-textfield label="Search">
    <w-affix slot="prefix" search></w-affix>
  </w-textfield>
</form>
```

</elements-example>

### Suffix Clear Icon

Clicking the clear button will reset the textfield

<elements-example>

```html
<w-textfield label="Search input">
  <w-affix slot="suffix" clear></w-affix>
</w-textfield>
```

</elements-example>

### Affix with arbitrary icon

<elements-example>
  
```html
<w-textfield label="Award">
  <w-affix slot="prefix" icon="AwardMedal"></w-affix>
</w-textfield>
```

</elements-example>

### Disabled

Keep in mind that using disabled in its current form is an anti-pattern.

There will always be users who don't understand why an element is disabled, or users who can't even see that
it is disabled because of poor lighting conditions or other reasons.

Please consider more informative alternatives before choosing to use disabled on an element.

<elements-example>
    
```html
<div class="flex flex-col space-y-32">
  <w-textfield label="Email" disabled value="ola.nordmann@finn.no"></w-textfield>
  <w-textfield label="Email" disabled></w-textfield>
</div>
```

</elements-example>

### Read only

The readonly boolean attribute makes the w-textfield's text content immutable. Unlike disabled the w-textfield remains focusable and the contents can still be copied. See [MDN docs](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/readOnly) for more information.

<elements-example>

```html
<w-textfield 
  label="Email" 
  type="email" 
  value="ola.nordmann@finn.no" 
  readonly
></w-textfield>
```

</elements-example>
