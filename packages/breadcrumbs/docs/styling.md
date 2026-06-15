## Styling API

### Breadcrumbs

The styling API for the Breadcrumbs component is under construction.

### Breadcrumb Item

The w-breadcrumb-item component supports styling through **parts**.

#### Parts

Use `::part(...)` from outside the component.

- `link` - the link element rendered when `href` is set.
- `text` - the text element rendered when `href` is omitted.
- `separator` - the separator rendered after non-current items.

Example:

```css
w-breadcrumb-item::part(link) {
  text-decoration-thickness: 2px;
}

w-breadcrumb-item::part(separator) {
  margin-inline: 1.2rem;
}
```

#### Notes

- `separator` is not rendered when `current-page` is set.
- Use `link` for linked breadcrumb items and `text` for non-linked breadcrumb items.
