## Accessibility

If a visible label isn't specified, an `aria-label` must be provided to the text field for accessibility. If the field is labeled by a separate element, an `aria-labelledby` property must be provided using the `id` of the labeling element instead.

- Always provide a visible label (do not rely on `placeholder` alone).
- Do not rely on color alone for interaction feedback (e.g. error states).
