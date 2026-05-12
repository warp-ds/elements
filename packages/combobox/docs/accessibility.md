## Accessibility

Combobox renders an input with `role="combobox"` and a popup list with `role="listbox"`. Each suggestion is rendered with `role="option"`, and the active suggestion is connected to the input with `aria-activedescendant`.

### Provide A Label

Always provide a visible label.

```html
<w-combobox label="Country" placeholder="Search">
  <option value="no">Norway</option>
  <option value="se">Sweden</option>
  <option value="dk">Denmark</option>
</w-combobox>
```

Do not rely on placeholder text as the only label. Placeholder text disappears as soon as the user types and is not a reliable accessible name.

### Help Text And Errors

Use `help-text` for extra guidance or validation feedback.

```html
<w-combobox label="Country" help-text="Start typing to filter countries">
  <option value="no">Norway</option>
  <option value="se">Sweden</option>
  <option value="dk">Denmark</option>
</w-combobox>
```

When the combobox is invalid, pair `invalid` with help text that explains how to correct the error.

```html
<w-combobox label="Country" invalid help-text="Select a country from the list">
  <option value="no">Norway</option>
  <option value="se">Sweden</option>
  <option value="dk">Denmark</option>
</w-combobox>
```

Do not rely on invalid styling alone.

### Keyboard Interaction

The input follows common combobox keyboard behavior:

- Arrow Down and Arrow Up open the list and move between suggestions.
- Home and End move to the first and last suggestion.
- Page Up and Page Down move through suggestions in larger steps.
- Enter selects the active suggestion.
- Escape closes the list. When the list is already closed, Escape clears the value.
- Tab closes the list and moves focus onward.

### Suggestions

The component announces the number of available suggestions through a screen-reader-only status message while the list is open.

Keep option labels short and unique enough to distinguish. If the submitted `value` differs from what users should read, provide a clear option label.

```html
<w-combobox label="Country" placeholder="Search">
  <option value="us" label="United States">US</option>
  <option value="uk" label="United Kingdom">UK</option>
  <option value="no">Norway</option>
</w-combobox>
```

### Disabled Comboboxes

Avoid disabled comboboxes where possible. Disabled controls can be hard to discover and do not explain why the field is unavailable.

Prefer leaving the combobox enabled and showing validation or explanatory feedback when the user tries to continue.
