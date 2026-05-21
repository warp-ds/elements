## Examples

### Default

Snackbar uses the `neutral` variant with a short duration by default.

<elements-example>

```html
<w-button data-testid="neutral-noaction">Neutral variant</w-button>

<script>
document.querySelector('w-button[data-testid="neutral-noaction"]').onclick = () => {
    const snackbar = document.querySelector("w-snackbar");
    snackbar.create("Snackbar message");
};
</script>
```

</elements-example>

#### With action

You can include an action in the snackbar by providing a label and an onclick handler. By default the action button and close button are inline with the text.

Clicking an action button automatically closes the snackbar item. If you want to prevent this call `event.preventDefault()`.

You can use an action with any `variant`.

<elements-example>

```html
<w-button data-testid="neutral-action">Neutral variant with action</w-button>

<script>
document.querySelector('w-button[data-testid="neutral-action"]').onclick = () => {
    const snackbar = document.querySelector("w-snackbar");
    snackbar.create("Snackbar message", {
        action: {
            label: "Undo",
            onclick(e) {
                console.log(e);
            }
        }
    });
};
</script>
```

</elements-example>

#### With long action label

By default a long label will result in the action and close buttons on a separate row. A label gets treated as long if it contains whitespace.

Clicking an action button automatically closes the snackbar item. If you want to prevent this call `event.preventDefault()`.

You can use an action with any `variant`.

<elements-example>

```html
<w-button data-testid="neutral-longlabel">Neutral variant, long label</w-button>

<script>
document.querySelector('w-button[data-testid="neutral-longlabel"]').onclick = () => {
    const snackbar = document.querySelector("w-snackbar");
    snackbar.create("Snackbar message", {
        action: {
            label: "Undo this thing",
            onclick(e) {
                console.log(e);
            }
        }
    });
};
</script>
```

</elements-example>

### Positive

<elements-example>

```html
<w-button data-testid="positive-noaction">Positive variant</w-button>

<script>
document.querySelector('w-button[data-testid="positive-noaction"]').onclick = () => {
    const snackbar = document.querySelector("w-snackbar");
    snackbar.create("Snackbar message", {
        variant: "positive",
    });
};
</script>
```

</elements-example>

### Warning

<elements-example>

```html
<w-button data-testid="warning-noaction">Warning variant</w-button>

<script>
document.querySelector('w-button[data-testid="warning-noaction"]').onclick = () => {
    const snackbar = document.querySelector("w-snackbar");
    snackbar.create("Snackbar message", {
        variant: "warning",
    });
};
</script>
```

</elements-example>

### Negative

<elements-example>

```html
<w-button data-testid="negative-noaction">Negative variant</w-button>

<script>
document.querySelector('w-button[data-testid="negative-noaction"]').onclick = () => {
    const snackbar = document.querySelector("w-snackbar");
    snackbar.create("Snackbar message", {
        variant: "negative",
    });
};
</script>
```

</elements-example>

### Info

<elements-example>

```html
<w-button data-testid="info-noaction">Info variant</w-button>

<script>
document.querySelector('w-button[data-testid="info-noaction"]').onclick = () => {
    const snackbar = document.querySelector("w-snackbar");
    snackbar.create("Snackbar message", {
        variant: "info",
    });
};
</script>
```

</elements-example>

### Create `<w-snackbar-item>` manually

If you have advanced cases not covered by the `create` API you can create a `<w-snackbar-item>` element manually and call [prepend](https://developer.mozilla.org/en-US/docs/Web/API/Element/prepend) on `<w-snackbar>`. The snackbar item handles its entire lifecycle on its own.

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
