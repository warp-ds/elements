## Styling API

Pagination supports styling through **component tokens** (CSS custom properties with a `--w-c-` prefix) and **parts**.

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

### Component tokens

Set these on `<w-pagination>` to override visuals.

```css
w-pagination {
	--w-c-pagination-current-page-color-background: rebeccapurple;
}
```

#### Tokens

##### layout

- `--w-c-pagination-gap` - left/right gap between items in the pagination list
- `--w-c-pagination-base-padding` - padding setting for around all pagination items
- `--w-c-pagination-padding` - padding setting for each pagination item
- `--w-c-pagination-placeholder-padding` - padding setting for each placeholder item
- `--w-c-pagination-control-padding` - padding setting for each control item (left/right arrows)
- `--w-c-pagination-current-page-padding` - padding setting for the currently selected page pagination item
- `--w-c-pagination-mobile-label-padding` - padding setting for the page label when on a mobile screen

##### border

- `--w-c-pagination-border-width` - border width for each item in the pagination
- `--w-c-pagination-border-radius` - border radius for each item in the pagination
- `--w-c-pagination-focus-outline` - focus outline setting for each item in the pagination
- `--w-c-pagination-focus-outline-offset` - focus outline offset setting for each item in the pagination

##### text

- `--w-c-pagination-font-size` - general font size setting
- `--w-c-pagination-mobile-label-font-size` - font size for the mobile only label
- `--w-c-pagination-font-weight` - general font weight setting
- `--w-c-pagination-mobile-label-font-weight` - font weight setting for the mobile only label
- `--w-c-pagination-line-height` - general line height setting
- `--w-c-pagination-mobile-label-line-height` - line height setting for the mobile only label
- `--w-c-pagination-color-text` - text color for individual pagination items
- `--w-c-pagination-color-text-hover` - text color when hovering for individual pagination items
- `--w-c-pagination-color-text-active` - text color when active for individual pagination items
- `--w-c-pagination-color-text-selected` - text color when selected for individual pagination items
- `--w-c-pagination-current-page-text-color` - text color of the current page pagination item
- `--w-c-pagination-current-page-text-color-hover` - text color when hovering over the current page pagination item
- `--w-c-pagination-current-page-text-color-active` - text color of the current page pagination item when active
- `--w-c-pagination-current-page-text-color-selected` - text color of the current page pagination item when selected
- `--w-c-pagination-controls-text-color` - text color of the controls items (left/right arrows)
- `--w-c-pagination-controls-text-color-hover` - text color of the controls items (left/right arrows) when hovering
- `--w-c-pagination-controls-text-color-active` - text color of the controls items (left/right arrows) when active
- `--w-c-pagination-controls-text-color-selected` - text color of the controls items (left/right arrows) when selected

##### background

- `--w-c-pagination-color-background` - background color for individual pagination items
- `--w-c-pagination-color-background-hover` - background color for individual pagination items when hovering
- `--w-c-pagination-color-background-active` - background color for individual pagination items when active
- `--w-c-pagination-color-background-selected` - background color for individual pagination items when selected
- `--w-c-pagination-current-page-color-background` - background color for the current page pagination item
- `--w-c-pagination-current-page-color-background-hover` - background color for the current page pagination item when hovering
- `--w-c-pagination-current-page-color-background-active` - background color for the current page pagination item when active
- `--w-c-pagination-current-page-color-background-selected` - background color for the current page pagination item when selected
- `--w-c-pagination-controls-color-background` - background color for the control items (left/right arrows)
- `--w-c-pagination-controls-color-background-hover` - background color for the control items (left/right arrows) when hovering
- `--w-c-pagination-controls-color-background-active` - background color for the control items (left/right arrows) when active
- `--w-c-pagination-controls-color-background-selected` - background color for the control items (left/right arrows) when selected

##### Motion

- `--w-c-pagination-transition-duration` - transition-duration setting for transitioning the current page
- `--w-c-pagination-transition-property` - transition-property setting for transitioning the current page
- `--w-c-pagination-transition-timing-function` - transition-timing-function setting for transitioning the current page
