## Examples

### Prefix Label

<elements-example>
  
```html
<w-textfield label="Price">
  <w-affix slot="suffix" label="kr"></w-affix>
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

### Icons

<elements-example>
  
```html
<w-textfield label="Award">
  <w-affix slot="prefix" icon="AwardMedal"></w-affix>
</w-textfield>
```

</elements-example>
