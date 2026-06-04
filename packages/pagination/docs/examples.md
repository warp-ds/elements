## Examples

### Single-page app behavior

By default the pagination component uses link which trigger a full page navigation.

If you want to override this in your app and handle things like scroll and focus management on your own you can add an event listener to the pagination component and prevent the default navigation.

```html
<w-pagination base-url="/search?page=" pages="10" current-page="5"></w-pagination>

<script type="module">
  const pagination = document.querySelector('w-pagination');

  pagination.addEventListener('page-click', (event) => {
    event.preventDefault();
    // event.detail = { clickedPage: string }
    console.log('Do something with the clicked page after preventing default navigation:', event.detail.clickedPage);
  });
</script>
```
