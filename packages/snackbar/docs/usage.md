## Usage

Add `<w-snackbar>` anywhere in `<body>` (note to self: should we add this to `html-template`?). This sets up an ARIA live region that's ready for snackbar messages. We set this up ahead of time since some browsers and screen reader combinations have known issues when it comes to adding a live region and content at the same time.

```html
<body>
    <w-snackbar></w-snackbar>
</body>
```

### `@warp-ds/elements` JS API

You can import the `create` function from `@warp-ds/elements/snackbar`. It creates a snackbar item and adds it to the snackbar.

```ts
import { create, type WarpSnackbarItem } from "@warp-ds/elements/snackbar";

const item: WarpSnackbarItem = create('Snackbar message');
```

### `<w-snackbar>` JS API

The `create` function in `@warp-ds/elements/snackbar` is a convenience wrapper around the `create` function on `<w-snackbar>` itself. In other words you can create snackbar items without importing anything.

```js
let snackbar = document.querySelector("w-snackbar");

if (!snackbar) {
    // You should include <w-snackbar></w-snackbar> in your page <body>,
    // so this defensive if test is not really necessary.
    snackbar = document.createElement("w-snackbar");
    document.body.appendChild(snackbar);
}

const item = snackbar.create('Snackbar message');
```

### Create `<w-snackbar-item>` manually

If you have advanced cases not covered by the `create` API you can create a `<w-snackbar-item>` element manually and call [prepend](https://developer.mozilla.org/en-US/docs/Web/API/Element/prepend) on `<w-snackbar>`.

```ts
const snackbar = document.querySelector("w-snackbar");
const item = document.createElement("w-snackbar-item");
item.variant = "info";
item.innerHTML = /* html */ `
    <w-icon slot="icon" name="Rocket"></w-icon>
    Warp speed engaged!
`;
snackbar.prepend(item);
```
