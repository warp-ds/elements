## Accessibility

Breadcrumbs are exposed as navigation so assistive technology users can identify the path to the current page.

### Label The Navigation

The component has a localized default accessible label. Use `aria-label` when the default label is not specific enough, especially if the page has more than one breadcrumb trail or other navigation landmarks nearby.

```html
<w-breadcrumbs aria-label="Product category path">
  <a href="/marketplace">Marketplace</a>
  <a href="/marketplace/furniture">Furniture</a>
  <span aria-current="page">Sofas</span>
</w-breadcrumbs>
```

### Mark The Current Page

The last breadcrumb item should represent the current page and include `aria-current="page"`.

Use a non-link element for the current page when it should not be clickable:

```html
<w-breadcrumbs aria-label="You are here">
  <a href="/real-estate">Real estate</a>
  <a href="/real-estate/homes">Homes for sale</a>
  <span aria-current="page">Oslo</span>
</w-breadcrumbs>
```

If the current page remains a link, keep `aria-current="page"` on that link:

```html
<w-breadcrumbs aria-label="You are here">
  <a href="/real-estate">Real estate</a>
  <a href="/real-estate/homes">Homes for sale</a>
  <a href="/real-estate/homes/oslo" aria-current="page">Oslo</a>
</w-breadcrumbs>
```

### Keep The Trail Predictable

Order breadcrumb items from the broadest parent to the current page. Use concise link text that names the destination.

Do not include separator characters in the markup. The component adds visual separators between items.

Breadcrumbs should support orientation within the site hierarchy. They should not be used as the only way to navigate the site or as a replacement for a page heading.
