## Usage

Breadcrumbs show where the current page sits in a site hierarchy and let users move back to parent pages.

Use `w-breadcrumbs` near the top of a page or section, before the main page heading or primary content. Add each breadcrumb item as a direct child. The component adds separators automatically.

### Basic Breadcrumbs

Use links for parent pages and mark the current page with `aria-current="page"`.

```html
<w-breadcrumbs aria-label="You are here">
  <a href="/real-estate">Real estate</a>
  <a href="/real-estate/homes">Homes for sale</a>
  <span aria-current="page">Oslo</span>
</w-breadcrumbs>
```

### Current Page

The current page should be the last breadcrumb item.

Use a `span` when the current page should not be clickable:

```html
<w-breadcrumbs aria-label="You are here">
  <a href="/real-estate">Real estate</a>
  <a href="/real-estate/homes">Homes for sale</a>
  <span aria-current="page">Oslo</span>
</w-breadcrumbs>
```

### Content Guidelines

Keep breadcrumb labels short and ordered from broadest section to most specific page. Do not add slash separators yourself; the component inserts them between items.

Breadcrumbs should not replace the page heading, primary navigation, or step navigation in a process.
