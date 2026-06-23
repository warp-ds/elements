## Examples

### Basic

<elements-example>

```html
  <w-breadcrumbs>
    <w-breadcrumb-item href="/real-estate">Real estate</w-breadcrumb-item>
    <w-breadcrumb-item href="/real-estate/homes">Homes for sale</w-breadcrumb-item>
    <w-breadcrumb-item current-page>Oslo</w-breadcrumb-item>
  </w-breadcrumbs>
```

</elements-example>

### Custom Accessible Label

<elements-example>

```html
  <w-breadcrumbs aria-label="Product category path">
    <w-breadcrumb-item href="#/marketplace">Marketplace</w-breadcrumb-item>
    <w-breadcrumb-item href="#/marketplace/furniture">Furniture</w-breadcrumb-item>
    <w-breadcrumb-item current-page>Sofas</w-breadcrumb-item>
  </w-breadcrumbs>
```

</elements-example>

### Short Path

<elements-example>

```html
  <w-breadcrumbs>
    <w-breadcrumb-item href="#/help">Help</w-breadcrumb-item>
    <w-breadcrumb-item current-page>Contact us</w-breadcrumb-item>
  </w-breadcrumbs>
```

</elements-example>
