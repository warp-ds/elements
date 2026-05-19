## Examples

<elements-example>

```html
<w-expandable title="I'm expandable" animated>
  <p>with expanded content</p>
</w-expandable>
```

</elements-example>

### Expandable box

<elements-example>

```html
<w-expandable title="I'm expandable" animated box>
  <p>with expanded content</p>
</w-expandable>
```

</elements-example>


### Expandable box with custom title

This can be used if more control over styling is needed than the `title` prop allows

<elements-example>

```html
<w-expandable animated box>
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
<w-expandable animated box title="I'm expanded by default" expanded>
  <p>content should be visible</p>
</w-expandable>
```

</elements-example>
