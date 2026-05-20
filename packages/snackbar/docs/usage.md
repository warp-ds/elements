## Usage

Add `<w-snackbar>` as a direct child of `<body>`.

If you use a shared HTML template this may already have been done for you. You can check to see by running a query in your browser console:

```js
 // this should find an element,
 // if not you should add <w-snackbar></w-snackbar> to <body>
document.querySelector("w-snackbar");
```

`<w-snackbar>` sets up an ARIA live region that's ready for snackbar messages. We set this up ahead of time since some browsers and screen reader combinations have known issues when it comes to adding a live region and content at the same time.

```html
<body>
    <w-snackbar></w-snackbar>
</body>
```

### `<w-snackbar>` JS API

The `<w-snackbar>` element includes a [create function](#create) which you can use to create snackbar items.

```js
const snackbar = document.querySelector("w-snackbar");
const snackbarItem = snackbar.create("Snackbar message");
```
