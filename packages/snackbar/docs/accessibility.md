## Accessibility

From an accessibility perspective the snackbar component is problematic.

- Since the snackbar items disappear on their own users might not even see them, especially when zoomed in.
- The snackbar items are in practice impossible to reach with keyboard since they appear in the DOM away from the element that triggered them.
- Important elements on the page might get hidden behind the snackbar item.

A snackbar must never be the backbone of your user experience, it should only ever include information and actions that are available elsewhere.

- Keep messages and actions short since the snackbar item is available only for a short time.
- Ensure any information and action in the snackbar, such as Undo, is possible to do elsewhere.

`<w-snackbar>` creates an ARIA live region so messages you add to the snackbar get announced to assistive technologies.
