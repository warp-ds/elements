## Examples

By default the tooltip is placed above the target element if there is room. If there's no room above it flips side and is placed below the target.

<elements-example>
  
```html
<w-button id="basic-button" aria-labelledby="basic-tooltip">Hover over me</w-button>
<w-tooltip id="basic-tooltip" for="basic-button">I am a tooltip</w-tooltip>
```

</elements-example>

### Adjust placement

You can specify a different initial placement. If there's no room the tooltip flips to the opposite side of the target.

Available positions:

- `top` (this is the default)
- `bottom`
- `left`
- `right`

<elements-example>
  
```html
<w-button id="placed-button" aria-labelledby="placed-tooltip">Hover over me</w-button>
<w-tooltip id="placed-tooltip" for="placed-button" placement="right">I am a tooltip</w-tooltip>
```

</elements-example>
