## Examples

<style-isolate>
  <w-textarea label="Description"></w-textarea>
</style-isolate>

```html
<w-textarea label="Description"></w-textarea>
```

### Placeholder

Text hint that appears when the textarea is empty. Placeholder text should not be used as a substitute for a visible label.

<style-isolate>
    <w-textarea label="Description" placeholder="Give as much detail as you can"></w-textarea>
</style-isolate>

```html
<w-textarea
    label="Description"
    placeholder="Give as much detail as you can"
></w-textarea>
```

### Height

You can control the height of the input field by setting either `minimum-rows` or `maximum-rows`

<style-isolate>
    <w-textarea label="Description" minimum-rows="3"></w-textarea>
</style-isolate>

```html
<w-textarea label="Description" minimum-rows="3"></w-textarea>
```

With `maximum-rows` the content will start scrolling when it passes the limit. Note that the field stops being resizable. Setting `minimum-rows` is redundant when you set `maximum-rows`.

<style-isolate>
    <w-textarea label="Description" maximum-rows="3" value="Line 1
Line 2
Line 3
Line 4
Line 5"></w-textarea>
</style-isolate>

```html
<w-textarea label="Description" maximum-rows="3" value="Line 1
Line 2
Line 3
Line 4
Line 5"></w-textarea>
```

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

TODO, lag en ny komponent som wrapper eksempelet, querier for `<code>` i children og leser `innerText`, lager HTML av det ved å sette innerHTML. For å DRYe opp alle eksemplene.

<style-isolate>
    <w-textarea label="Description" readonly value="This content is read-only"></w-textarea>
</style-isolate>

Makes the textarea content immutable while remaining focusable. The contents can still be copied.

```html
<w-textarea
    label="Description"
    value="This content is read only"
    readonly
></w-textarea>
```
