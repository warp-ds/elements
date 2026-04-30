## Examples

### Popover (Click To Toggle)

<elements-example>

```html
<w-attention id="example-popover" placement="bottom" popover flip>
  <w-button id="example-popover-trigger" slot="target" variant="secondary">Click to toggle a popover</w-button>
  <span slot="message">I'm a popover</span>
</w-attention>
<script>
  (() => {
    const trigger = document.getElementById('example-popover-trigger');
    const attention = document.getElementById('example-popover');
    trigger.addEventListener('click', () => {
      attention.show = !attention.show;
    });
  })();
</script>
```

</elements-example>

### Tooltip (Hover and Focus)

<elements-example>

```html
<w-attention id="example-tooltip" placement="right" tooltip flip>
  <w-button id="example-tooltip-trigger" slot="target" variant="secondary">Hover or focus me</w-button>
  <span slot="message">I'm a tooltip</span>
</w-attention>
<script>
  (() => {
    const trigger = document.getElementById('example-tooltip-trigger');
    const attention = document.getElementById('example-tooltip');
    trigger.addEventListener('mouseenter', () => {
      attention.show = true;
    });
    trigger.addEventListener('mouseleave', () => {
      attention.show = false;
    });
    trigger.addEventListener('focus', () => {
      attention.show = true;
    });
    trigger.addEventListener('blur', () => {
      attention.show = false;
    });
  })();
</script>
```

</elements-example>

### Inline Callout

<elements-example>
  
```html
<w-attention callout show placement="right">
  <w-button slot="target" variant="secondary">Inline target</w-button>
  <span slot="message">I'm an inline callout</span>
</w-attention>
```

</elements-example>

### Dismissible Highlight

<elements-example>

```html
<w-attention id="example-highlight" highlight can-close placement="right" flip>
  <w-button id="example-highlight-trigger" slot="target" variant="secondary">Click me</w-button>
  <span slot="message">I'm highlighted and dismissible</span>
</w-attention>
<script>
  (() => {
    const trigger = document.getElementById('example-highlight-trigger');
    const attention = document.getElementById('example-highlight');
    trigger.addEventListener('click', () => {
      attention.show = true;
    });
    attention.addEventListener('close', () => {
      attention.show = false;
    });
  })();
</script>
```

</elements-example>
