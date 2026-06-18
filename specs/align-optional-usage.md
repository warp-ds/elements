# Feature: Align Optional Usage

## Problem

Form components do not present optional field text consistently.

Some components render the optional indicator with parentheses, such as `(optional)`, while others render it as `Optional`. Some form components with labels and required-state support do not expose the same optional indicator pattern in their public API or examples.

This creates inconsistent visual language, inconsistent localized strings, and inconsistent developer expectations across form components.

## Goal

Align optional field usage across supported form components so that:

- the visible optional indicator uses the same format;
- localized optional text is handled consistently;
- optional fields are announced consistently by assistive technologies;
- `required` and `optional` states do not conflict visually;
- documentation and examples show the same usage pattern across components.

## Scope

This change applies to:

- `w-textfield`
- `w-textarea`
- `w-select`
- `w-combobox`
- `w-slider`
- `w-radio-group`
- `w-checkbox-group`

## Non-Goals

- Do not change native form validation behavior.
- Do not change the meaning of the `required` attribute.
- Do not add optional indicators to standalone `w-checkbox`, `w-radio`, or `w-switch` in this change.
- Do not introduce a configurable optional indicator string in this change.
- Do not require parentheses around translated optional text.
- Do not remove existing optional styling tokens or parts.

## Definitions

- **Optional indicator**: localized text displayed after a form control label when the control or group is explicitly marked as optional.
- **Canonical English optional text**: `Optional`.
- **Supported component**: one of the components listed in Scope.

## User Behavior

When a supported component has a visible label and `optional` is set:

- the label includes an optional indicator immediately after the label text;
- the English indicator text is `Optional`;
- the indicator is visually separated from the label text;
- the indicator is included in the accessible label or accessible name;
- the component remains optional for form validation unless `required` is also set.

Example:

```html
<w-textfield label="Email" optional></w-textfield>
```

The rendered label should communicate:

```text
Email Optional
```

When both `required` and `optional` are set:

- `required` wins;
- the optional indicator is not rendered;
- the component keeps required validation behavior;
- an implementation may emit a development warning, but warning behavior is not required for this change.

## Requirements

### Optional Text Format

- The English optional indicator must be `Optional`.
- The English optional indicator must not be rendered as `(optional)`.
- Localized optional strings must be translated as plain localized text without a product requirement to add parentheses.
- Existing translations that already use plain localized text, such as `Valgfritt`, are valid.
- Optional text must be provided through the existing localization system for each supported component.

### Component API

- Each supported component must expose an `optional` boolean attribute/property.
- `w-slider` must add support for the `optional` boolean attribute/property.
- Existing supported components that already expose `optional` must preserve that public API.
- `optional` must reflect to an attribute where the component already follows that pattern for boolean form state.
- `optional` must not make the component required, invalid, or exempt from required validation.

### Rendering

- A supported component with `optional` and a visible label must render the optional indicator after the label text.
- The optional indicator must not appear before the label text.
- The optional indicator must not replace the label text.
- The optional indicator must not render when there is no visible label.
- The optional indicator must not render when `required` is set.
- The optional indicator must update when `optional` or `required` changes after initial render.
- Components with slotted label content must support the optional indicator when a visible label is present.

### Accessibility

- The optional indicator must be part of the accessible label or accessible name for the control or group.
- A screen reader should be able to announce both the label text and the optional indicator.
- The optional indicator must not create a separate focus target.
- Hiding the optional indicator because `required` is set must remove it from both the visual label and the accessible label/name.
- Existing label associations, `aria-describedby` relationships, help text, and validation error behavior must remain unchanged.

### Required Precedence

- If `required` and `optional` are both present, the component must behave as required.
- If `required` and `optional` are both present, the optional indicator must not be rendered.
- If `required` is removed while `optional` remains present, the optional indicator must render again.

### Documentation

- Documentation examples for each supported component must use `Optional`, not `(optional)`, as the English visible text.
- `w-textfield` documentation must include an optional example.
- `w-slider` documentation must include an optional example after the component supports the `optional` API.
- Existing optional examples for `w-textarea`, `w-select`, `w-radio-group`, `w-checkbox-group`, and `w-combobox` must be updated or added so the pattern is visible.
- Documentation must state that `required` takes precedence over `optional`.

## Acceptance Criteria

1. Given any supported component with `label="Email"` and `optional`, when rendered in English, then the visible label includes `Email Optional`.

2. Given any supported component with `optional`, when rendered in English, then the optional indicator text is exactly `Optional` and does not include parentheses.

3. Given any supported component with `optional`, when rendered in a non-English locale, then the optional indicator uses that component's localized optional message without adding product-mandated parentheses.

4. Given any supported component with `required optional`, when rendered, then the optional indicator is not visible.

5. Given any supported component with `required optional`, when submitted empty or invalid according to its existing required behavior, then the component behaves as required.

6. Given any supported component initially rendered with `optional`, when `required` is added dynamically, then the optional indicator is removed.

7. Given any supported component initially rendered with `required optional`, when `required` is removed dynamically, then the optional indicator is shown.

8. Given any supported component with `optional`, when queried by accessible label/name, then the accessible label/name includes both the label text and the optional indicator.

9. Given any supported component with `required optional`, when queried by accessible label/name, then the accessible label/name does not include the optional indicator.

10. Given `w-slider label="Price" optional`, when rendered in English, then the slider legend includes `Price Optional`.

11. Given `w-slider required optional`, when rendered, then the slider does not show the optional indicator and retains existing required behavior for its thumbs.

12. Given `w-textfield`, when reviewing docs/examples, then there is an example showing the `optional` attribute.

13. Given existing optional examples in supported component docs/stories, when updated, then they use `Optional` as the English visible text and do not describe the indicator as `(optional)`.

14. Given existing optional styling APIs, when this change is implemented, then existing optional indicator styling tokens and parts continue to apply to the optional indicator.

15. Given a supported component without a visible label but with `aria-label` and `optional`, when rendered, then no visible optional indicator is rendered.

## Edge Cases

- `optional` with no `label`.
- `optional` with an empty `label`.
- `optional` with slotted label content.
- `optional` and `required` both present at first render.
- `optional` and `required` toggled after first render.
- Locale changes after first render.
- Components with help text and validation error text.
- Disabled or readonly optional fields.
- `w-slider` with a label attribute.
- `w-slider` with a slotted label.
- `w-slider` with single-thumb and range-thumb configurations.

## Test Notes

- Unit tests should cover visible optional text for every supported component.
- Unit tests should assert that English optional text is `Optional`, not `(optional)`.
- Unit tests should cover `required optional` precedence for every supported component.
- Accessibility tests should verify that the optional indicator is included in the accessible label/name when rendered.
- Accessibility tests should verify that the optional indicator is not included when `required` suppresses it.
- Dynamic update tests should cover toggling `optional`, toggling `required`, and locale changes.
- Documentation checks should cover the presence of an optional example for `w-textfield` and `w-slider`.
