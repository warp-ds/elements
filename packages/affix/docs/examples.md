## Examples

### Prefix Label

<style-isolate>
  <w-textfield label="Price">
    <w-affix slot="prefix" label="kr"></w-affix>
  </w-textfield>
</style-isolate>

```html
<w-textfield label="Price">
  <w-affix slot="suffix" label="kr"></w-affix>
</w-textfield>
```

### Suffix Label

<style-isolate>
  <w-textfield label="Price">
    <w-affix slot="suffix" label="kr"></w-affix>
  </w-textfield>
</style-isolate>

```html
<w-textfield label="Price">
  <w-affix slot="suffix" label="kr"></w-affix>
</w-textfield>
```

### Prefix Search Icon

<style-isolate>
  <w-textfield label="Search">
    <w-affix slot="prefix" search></w-affix>
  </w-textfield>
</style-isolate>

```html
<w-textfield label="Search">
  <w-affix slot="prefix" search></w-affix>
</w-textfield>
```

### Suffix Search Icon

If you wrap the textfield with affix in a form element, clicking the search button will automatically submit the form

<style-isolate>
  <form>
    <w-textfield label="Search">
      <w-affix slot="suffix" search></w-affix>
    </w-textfield>
  </form>
</style-isolate>

```html
<form>
  <w-textfield label="Search">
    <w-affix slot="prefix" search></w-affix>
  </w-textfield>
</form>
```

### Suffix Clear Icon

Clicking the clear button will reset the textfield

<style-isolate>
  <w-textfield label="Search input">
    <w-affix slot="suffix" clear></w-affix>
  </w-textfield>
</style-isolate>

```html
<w-textfield label="Search input">
  <w-affix slot="suffix" clear></w-affix>
</w-textfield>
```
