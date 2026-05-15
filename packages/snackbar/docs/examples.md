## Examples

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
