## Accessibility

Breadcrumbs are exposed as navigation so assistive technology users can identify the path to the current page.

### Label The Navigation

The component has a localized default accessible label. Use `aria-label` when the default label is not specific enough, especially if the page has more than one breadcrumb trail or other navigation landmarks nearby.

```html
<w-breadcrumbs aria-label="Product category path">
  <w-breadcrumb-item href="/marketplace">Marketplace</w-breadcrumb-item>
  <w-breadcrumb-item href="/marketplace/furniture">Furniture</w-breadcrumb-item>
  <w-breadcrumb-item href="/marketplace/furniture/1234566" current-page>Sofas</w-breadcrumb-item>
</w-breadcrumbs>
```

### Mark The Current Page

The last breadcrumb item should represent the current page and include the current-page attribute which in turn ensures correct accessibility semantics are used.

Omit an href attribute for the current page when it should not be clickable:

```html
<w-breadcrumbs aria-label="You are here">
  <w-breadcrumb-item href="/real-estate">Real estate</w-breadcrumb-item>
  <w-breadcrumb-item href="/real-estate/homes">Homes for sale</w-breadcrumb-item>
  <w-breadcrumb-item current-page>Oslo</w-breadcrumb-item>
</w-breadcrumbs>
```

### Keep The Trail Predictable

Order breadcrumb items from the broadest parent to the current page. Use concise link text that names the destination.

Do not include separator characters in the markup. The component adds visual separators between items.

Breadcrumbs should support orientation within the site hierarchy. They should not be used as the only way to navigate the site or as a replacement for a page heading.
