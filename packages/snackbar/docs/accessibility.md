## Accessibility

From an accessibility perspective the snackbar component is problematic.

- Since the snackbar items disappear on their own users might not even see them, especially when zoomed in.
- The snackbar items are in practice impossible to reach with keyboard since they appear in the DOM away from the element that triggered them.
- Important elements on the page might get hidden behind the snackbar item.

A snackbar must never be the backbone of your user experience, it should only ever include information and actions that are available elsewhere.

- Keep messages and actions short since the snackbar item is available only for a short time.
- Ensure any information and action in the snackbar, such as Undo, is possible to do elsewhere.

`<w-snackbar>` creates an ARIA live region so messages you add to the snackbar get announced to assistive technologies.

### Keyboard behavior

`<w-snackbar>` is problematic from a keyboard user perspective. We do not override the default <kbd>Tab</kbd> behavior, with the result that the focusable buttons in a snackbar item probably come first or last in the focus order, depending on what end of `<body>` you put `<w-snackbar>`. We're investigating ways to provide keyboard shortcuts for moving focus to the snackbar item, but have yet to conclude on a design.

`<w-snackbar>` sets up a keyboard event listener on `document`. Pressing <kbd>Escape</kbd> while a snackbar item is open will close it. If more than one item is open the oldest one will close.
