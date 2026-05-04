## Examples

<elements-example>

```html
<w-switch id="demo-switch" name="marketing" value="yes"></w-switch>

<script>
  const el = document.querySelector('#demo-switch');
  el.addEventListener('change', (event) => {
    // event.detail = { checked: boolean, value: string | null }
    console.log('changed', event.detail);
  });
</script>
```

</elements-example>
