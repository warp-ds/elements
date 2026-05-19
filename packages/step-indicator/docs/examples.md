## Examples

<elements-example>

```html
<w-step-indicator>
  <w-step completed>
    <h4>Step one</h4>
    <p>This step is completed</p>
  </w-step>
  <w-step active>
    <h4>Step two</h4>
    <p>This is the current step</p>
  </w-step>
  <w-step>
    <h4>Step three</h4>
    <p>This step is upcoming</p>
  </w-step>
</w-step-indicator>

<script type="module">
  // Update step states programmatically
  const steps = document.querySelectorAll('w-step');

  // Mark a step as completed
  steps[0].completed = true;

  // Mark a step as active
  steps[1].active = true;
</script>
```

</elements-example>

### Horizontal steps

<elements-example>


```html
<w-step-indicator horizontal>
  <w-step completed>
    <h4>Step 1</h4>
    <p>Completed</p>
  </w-step>
  <w-step active>
    <h4>Step 2</h4>
    <p>In progress</p>
  </w-step>
  <w-step>
    <h4>Step 3</h4>
    <p>Upcoming</p>
  </w-step>
</w-step-indicator>
```

</elements-example>

### Right-aligned vertical steps

`right` can not be used with `horizontal` (`horizontal` wins).

<elements-example>

```html
<w-step-indicator right>
  <w-step completed>
    <h4>Step 1</h4>
    <p>Completed</p>
  </w-step>
  <w-step active>
    <h4>Step 2</h4>
    <p>In progress</p>
  </w-step>
  <w-step>
    <h4>Step 3</h4>
    <p>Upcoming</p>
  </w-step>
</w-step-indicator>
```

</elements-example>
