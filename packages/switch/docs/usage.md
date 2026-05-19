## Usage

`<w-switch>` is a form-associated toggle component.

- It reflects its `name`, `value`, `checked`, and `disabled` properties to attributes.
- It dispatches a bubbling `change` `CustomEvent` when toggled (when not disabled).
- When used in a form, the control submits `value` only when `checked` is `true` (otherwise it submits nothing).
