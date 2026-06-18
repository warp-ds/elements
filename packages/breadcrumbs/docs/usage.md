## Usage

Breadcrumbs show where the current page sits in a site hierarchy and let users move back to parent pages.

Use `w-breadcrumbs` near the top of a page or section, before the main page heading or primary content. Add each breadcrumb item as a direct child. The component adds separators automatically.

### Basic Breadcrumbs

Use w-breadcrumb-item components with an href for parent pages and mark the current page with the current-page attribute.

```html
<w-breadcrumbs aria-label="You are here">
  <w-breadcrumb-item href="/real-estate">Real estate</w-breadcrumb-item>
  <w-breadcrumb-item href="/real-estate/homes">Homes for sale</w-breadcrumb-item>
  <w-breadcrumb-item current-page>Oslo</w-breadcrumb-item>
</w-breadcrumbs>
```

### Current Page

The current page should be the last breadcrumb item.

By default the current-page will not be presented as a link, setting href will change it to a link.

```html
<w-breadcrumbs aria-label="You are here">
  <w-breadcrumb-item href="/real-estate">Real estate</w-breadcrumb-item>
  <w-breadcrumb-item href="/real-estate/homes">Homes for sale</w-breadcrumb-item>
  <w-breadcrumb-item href="/real-estate/homes/12345612" current-page>Oslo</w-breadcrumb-item>
</w-breadcrumbs>
```

### Content Guidelines

Keep breadcrumb labels short and ordered from broadest section to most specific page. Do not add slash separators yourself; the component inserts them between items.

Breadcrumbs should not replace the page heading, primary navigation, or step navigation in a process.
