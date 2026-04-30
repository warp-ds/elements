## Examples

<elements-example>

```html
<w-textarea label="Description"></w-textarea>
```

</elements-example>

### Placeholder

Text hint that appears when the textarea is empty. Placeholder text should not be used as a substitute for a visible label.

<elements-example>

```html
<w-textarea
    label="Description"
    placeholder="Give as much detail as you can"
></w-textarea>
```

</elements-example>

### Height

You can control the height of the input field by setting either `minimum-rows` or `maximum-rows`

<elements-example>
    
```html
<w-textarea label="Description" minimum-rows="3"></w-textarea>
```

</elements-example>

With `maximum-rows` the content will start scrolling when it passes the limit. Note that the field stops being resizable. Setting `minimum-rows` is redundant when you set `maximum-rows`.

<elements-example>

```html
<w-textarea label="Description" maximum-rows="3" value="Line 1
Line 2
Line 3
Line 4
Line 5"></w-textarea>
```

</elements-example>

### Disabled

Consider using more informative alternatives before choosing to use disabled, as some users may not understand why an element is disabled.

<elements-example>

```html
<w-textarea
    label="Description" 
    value="This form field is ignored"
    disabled
></w-textarea>
```

</elements-example>

### Read only 

Makes the textarea content immutable while remaining focusable. The contents can still be copied.

<elements-example>

```html
<w-textarea
    label="Description"
    value="This content is read only"
    readonly
></w-textarea>
```

</elements-example>
