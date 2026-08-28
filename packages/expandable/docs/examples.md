## Examples

<elements-example>

```html
<w-expandable variant="default" title="I'm expandable" animated>
  <p>with expanded content</p>
</w-expandable>
```

</elements-example>

### Raised variant

<elements-example>

```html
<w-expandable variant="box" title="I'm expandable" animated>
  <p>with expanded content</p>
</w-expandable>
```

</elements-example>

### Raised edge-to-edge variant

<elements-example>

```html
<w-expandable variant="box-bleed" title="I'm expandable" animated>
  <p>with expanded content</p>
</w-expandable>
```

</elements-example>

### Expandable with divider

<elements-example>

```html
<w-expandable variant="default-with-divider" title="I'm expandable" animated>
  <p>with expanded content</p>
</w-expandable>
```

</elements-example>

### Custom title

This can be used if more control over styling is needed than the `title` prop allows

<elements-example>

```html
<w-expandable variant="box" animated>
  <div slot="title" class="flex flex-row items-center">
    <w-icon-bag-16></w-icon-bag-16>
    <p class="ml-8 mb-0">This is a title with an icon</p>
  </div>
  <p>with expanded content</p>
</w-expandable>
```

</elements-example>


### With expanded prop

<elements-example>

```html
<w-expandable variant="box" animated title="I'm expanded by default" expanded>
  <p>content should be visible</p>
</w-expandable>
```

</elements-example>
