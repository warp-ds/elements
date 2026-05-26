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

### Snackbar item lifecycle

A snackbar item animates in from and out of the bottom of the screen unless the user has indicated a preference for reduced motion, in which case it appears and disappears without animation.

If more than one snackbar item is active at a time they will stack, with the new messages animating in above existing ones with the topmost item as the starting point of the animation.

However, only one snackbar item should be visible at a time. Be mindful of what triggers snackbars in your application to avoid creating a wall of snackbar items, for example in bulk editing operations.

#### Duration

Snackbar items automatically close after either:

- 4 seconds (short) 
- 10 seconds (long)

You can also have a snackbar item last indefinitely, forcing users to dismiss it. We strongly encourage you to reconsider whether a snackbar is the right choice for you if you feel you need an indefinite snackbar item though, for the accessibility reasons outlined above.

##### Pausing the countdown

To give people a better chance to read the snackbar message and consider taking action the duration countdown timer pauses when:

- A pointer hovers over the snackbar item.
- Either the action or close buttons have keyboard focus.

#### Closing

Users can close a snackbar item ahead of its configured duration by:

- Pressing the close button (present by default).
- Pressing the action button (if present).
- Pressing <kbd>Escape</kbd> on a keyboard.
