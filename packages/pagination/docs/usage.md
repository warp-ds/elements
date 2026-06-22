## Usage


The pagination component automatically shows/hides navigation buttons based on the current page:

- **First page button** (double chevron): Shown when current page is greater than 2
- **Previous page button** (single chevron): Shown when current page is greater than 1
- **Next page button** (single chevron): Shown when current page is less than total pages

On mobile devices, the page numbers are hidden and replaced with a "Page X" label for a cleaner interface.


<elements-example>

```html
<w-pagination base-url="#/search?page=" pages="5" current-page="1"></w-pagination>
```

</elements-example>
