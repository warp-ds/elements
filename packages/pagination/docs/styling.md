## Styling API

Pagination supports styling through **parts**.

### Parts

Use `::part(part-name)` from outside the component.

- `base` - the root navigation element
- `control` - previous, next, first, and last page controls
- `page` - numbered page link
- `current` - current page link
- `mobile-label` - current page label shown on small screens
- `placeholder` - placeholder used when a control is hidden
- `icon` - icon inside a control

```css
w-pagination::part(current) {
	color: hotpink;
}
```
