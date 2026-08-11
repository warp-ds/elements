## Examples

<elements-example>

```html
<w-step-indicator>
  <w-step completed>
    <p class="text-body font-bold">Step one</p>
    <p class="text-caption">This step is completed</p>
  </w-step>
  <w-step active>
    <p class="text-body font-bold">Step two</p>
    <p class="text-caption">This is the current step</p>
  </w-step>
  <w-step>
    <p class="text-body font-bold">Step three</p>
    <p class="text-caption">This step is upcoming</p>
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
    <p class="text-body font-bold">Step 1</p>
    <p class="text-caption">Completed</p>
  </w-step>
  <w-step active>
    <p class="text-body font-bold">Step 2</p>
    <p class="text-caption">In progress</p>
  </w-step>
  <w-step>
    <p class="text-body font-bold">Step 3</p>
    <p class="text-caption">Upcoming</p>
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
    <p class="text-body font-bold">Step 1</p>
    <p class="text-caption">Completed</p>
  </w-step>
  <w-step active>
    <p class="text-body font-bold">Step 2</p>
    <p class="text-caption">In progress</p>
  </w-step>
  <w-step>
    <p class="text-body font-bold">Step 3</p>
    <p class="text-caption">Upcoming</p>
  </w-step>
</w-step-indicator>
```

</elements-example>
