## Usage

`w-attention` is used to show contextual messaging anchored to a target element.

### Basic Structure

Use the `target` slot for the trigger/anchor element and the `message` slot for the content.

```html
<w-attention placement="bottom" popover>
  <w-button slot="target" variant="secondary">Open message</w-button>
  <span slot="message">I'm a popover</span>
</w-attention>
```

### Visibility (`show`)

`w-attention` visibility is controlled with the `show` property. Toggle it based on user interaction.

```html
<w-attention id="my-attention" placement="bottom" popover>
  <w-button id="my-trigger" slot="target" variant="secondary">Toggle</w-button>
  <span slot="message">I'm a popover</span>
</w-attention>

<script>
  const trigger = document.getElementById('my-trigger');
  const attention = document.getElementById('my-attention');
  trigger.addEventListener('click', () => {
    attention.show = !attention.show;
  });
</script>
```

### Variants

`w-attention` supports four visual variants:

- `tooltip`
- `popover`
- `callout`
- `highlight`

Use one variant at a time.

```html
<w-attention tooltip placement="right">
  <w-button slot="target" variant="secondary">Hover me</w-button>
  <span slot="message">Short helper text</span>
</w-attention>
```

### Placement and Collision Handling

Use `placement` to define preferred direction. For overlays, `flip`, `cross-axis`, and `fallback-placements` can improve placement in constrained layouts.

```html
<w-attention
  popover
  placement="right"
  flip
  cross-axis
  fallback-placements='["bottom","left","top"]'
>
  <w-button slot="target" variant="secondary">Open</w-button>
  <span slot="message">Smartly positioned message</span>
</w-attention>
```

### Dismissible Messages

Use `can-close` for an internal close button, and listen for the `close` event.

```html
<w-attention id="dismissible-attention" highlight can-close placement="right">
  <w-button id="dismissible-trigger" slot="target" variant="secondary">Show message</w-button>
  <span slot="message">You can dismiss this message.</span>
</w-attention>

<script>
  const trigger = document.getElementById('dismissible-trigger');
  const attention = document.getElementById('dismissible-attention');

  trigger.addEventListener('click', () => {
    attention.show = true;
  });

  attention.addEventListener('close', () => {
    attention.show = false;
  });
</script>
```
