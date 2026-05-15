## Usage

Add `<w-snackbar>` anywhere in `<body>` (note to self: should we add this to `html-template`?). This sets up an ARIA live region that's ready for snackbar messages. We set this up ahead of time since some browsers and screen reader combinations have known issues when it comes to adding a live region and content at the same time.

```html
<body>
    <w-snackbar></w-snackbar>
</body>
```

### `<w-snackbar>` JS API

The `<w-snackbar>` element includes a [create function](#create) which you can use to create snackbar items.

```js
const snackbar = document.querySelector("w-snackbar");
const item = snackbar.create('Snackbar message');
```
