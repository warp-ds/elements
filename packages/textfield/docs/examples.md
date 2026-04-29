## Examples

### Placeholder

Placeholder text can be used to describe the expected value or formatting for the textfield.

Placeholder text will only appear when the textfield is empty, and must not be used as a
substitute for labeling the element with a visible label.

<style-isolate>
    <w-textfield label="Email" placeholder="ola.nordmann@finn.no"></w-textfield>
</style-isolate>

```html
<w-textfield label="Email" placeholder="ola.nordmann@finn.no"></w-textfield>
```

### Prefix label

<style-isolate>
  <w-textfield label="Price">
    <w-affix slot="prefix" label="kr"></w-affix>
  </w-textfield>
</style-isolate>

```html
<w-textfield label="Price">
  <w-affix slot="prefix" label="kr"></w-affix>
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

### Affix with arbitrary icon

<style-isolate>
  <w-textfield label="Award">
    <w-affix slot="prefix" icon="AwardMedal"></w-affix>
  </w-textfield>
</style-isolate>

```html
<w-textfield label="Award">
  <w-affix slot="prefix" icon="AwardMedal"></w-affix>
</w-textfield>
```

### Disabled

Keep in mind that using disabled in its current form is an anti-pattern.

There will always be users who don't understand why an element is disabled, or users who can't even see that
it is disabled because of poor lighting conditions or other reasons.

Please consider more informative alternatives before choosing to use disabled on an element.

<style-isolate>
    <div class="flex flex-col space-y-32">
        <w-textfield label="Email" disabled value="ola.nordmann@finn.no"></w-textfield>
        <w-textfield label="Email" disabled></w-textfield>
    </div>
</style-isolate>

```html
<div class="flex flex-col space-y-32">
  <w-textfield label="Email" disabled value="ola.nordmann@finn.no"></w-textfield>
  <w-textfield label="Email" disabled></w-textfield>
</div>
```

### Read only

The readonly boolean attribute makes the w-textfield's text content immutable. Unlike disabled the w-textfield remains focusable and the contents can still be copied. See [MDN docs](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/readOnly) for more information.

<style-isolate>
  <w-textfield label="Email" type="email" value="ola.nordmann@finn.no" readonly></w-textfield>
</style-isolate>

```html
<w-textfield 
  label="Email" 
  type="email" 
  value="ola.nordmann@finn.no" 
  readonly
></w-textfield>
```
