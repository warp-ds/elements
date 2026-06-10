# Breadcrumbs Hydration Mismatch

## Problem

`w-breadcrumbs` currently processes consumer-provided light DOM children by adding styling classes to them and rendering those same elements inside its shadow DOM.

This causes hydration mismatches in SSR frameworks such as React because the framework expects the server-rendered light DOM to remain in place during client hydration. When the custom element upgrades, the current behavior can mutate framework-owned child elements and move them from their original light DOM position.

## Goals

- Add a new `w-breadcrumb-item` child element API that can be used inside `w-breadcrumbs`.
- Allow breadcrumbs built with `w-breadcrumb-item` to hydrate in React SSR without hydration warnings caused by moved or mutated light DOM.
- Preserve the existing direct-child API for backwards compatibility.
- Preserve the existing visual appearance and accessible navigation behavior of `w-breadcrumbs`.
- Provide a clear migration path from direct child anchors/spans to `w-breadcrumb-item`.

## Non-Goals

- Do not remove support for the existing direct-child API in this change.
- Do not introduce runtime deprecation warnings for the existing API in this change.
- Do not change the default breadcrumb separator character, spacing, or default accessible label.
- Do not add analytics, logging, or telemetry.

## Definitions

- **Legacy API**: using direct child elements inside `w-breadcrumbs`, such as `<a>` and `<span aria-current="page">`.
- **Item API**: using direct `w-breadcrumb-item` children inside `w-breadcrumbs`.
- **Current page item**: the breadcrumb item that represents the current page. It is marked with the `current-page` attribute in the Item API.

## Proposed Public API

```html
<w-breadcrumbs aria-label="You are here">
  <w-breadcrumb-item href="/home">Home</w-breadcrumb-item>
  <w-breadcrumb-item href="/category">Category</w-breadcrumb-item>
  <w-breadcrumb-item current-page>Current page</w-breadcrumb-item>
</w-breadcrumbs>
```

`w-breadcrumb-item` supports these attributes:

- `href`: optional URL for linked breadcrumb items.
- `current-page`: optional boolean attribute indicating that the item represents the current page.

When `href` is present, the item behaves as a link.

When `href` is absent, the item behaves as non-link text.

When `current-page` is present:

- the item exposes current-page semantics equivalent to `aria-current="page"`;
- no separator is rendered after that item;
- the item may still be linked if `href` is also present.

Authors should mark only one item as `current-page`, and that item should be the final breadcrumb item.

## Requirements

### `w-breadcrumbs`

- `w-breadcrumbs` must accept `w-breadcrumb-item` as a direct child.
- `w-breadcrumbs` must continue to accept the Legacy API.
- `w-breadcrumbs` must preserve its existing navigation landmark behavior and accessible label behavior.
- `w-breadcrumbs` must not require consumers to add separator characters to their markup.
- `w-breadcrumbs` must support an empty breadcrumb list without throwing an error.

### `w-breadcrumb-item`

- `w-breadcrumb-item` must render its slotted content as the visible breadcrumb label.
- `w-breadcrumb-item` must preserve consumer-provided slotted content in the item light DOM.
- `w-breadcrumb-item` must not add classes or attributes to consumer-provided slotted elements.
- `w-breadcrumb-item` must render a separator after itself unless `current-page` is present.
- `w-breadcrumb-item` must not render a separator before itself.
- `w-breadcrumb-item` must not render a separator after itself when `current-page` is present.
- `w-breadcrumb-item` must not create a focusable element when `href` is absent.
- `w-breadcrumb-item` must create a navigable link when `href` is present.
- `w-breadcrumb-item` must preserve the accessible name of the visible breadcrumb label.
- `w-breadcrumb-item` must not throw when attributes change after initial render.

### Backwards Compatibility

- Existing Legacy API markup must continue to render as breadcrumbs.
- Existing Legacy API markup must continue to support linked parent items and a current page item marked with `aria-current="page"`.
- Existing Legacy API markup must continue to receive automatic separators.
- The hydration-safety requirement applies to the Item API. The Legacy API remains supported, but is not required to become hydration-safe as part of this change.
- Documentation should present the Item API as the recommended API for React SSR hydration use cases.

### Invalid Or Unusual Authoring

- If `w-breadcrumbs` contains both Legacy API children and `w-breadcrumb-item` children, the component must not throw but should issue a console warning.
- If more than one `w-breadcrumb-item` has `current-page`, the component must not throw but should issue a console warning.
- If `current-page` is used on an item that is not the final item, the component must not throw but should issue a console warning.
- If a `w-breadcrumb-item` has empty slotted content, the component must not throw.

Invalid authoring does not need additional automatic correction in this change.

## Accessibility Requirements

- `w-breadcrumbs` must remain exposed as a navigation landmark.
- `w-breadcrumbs` must keep the existing localized default accessible label.
- A custom `aria-label` on `w-breadcrumbs` must continue to override the default label.
- A `w-breadcrumb-item` with `current-page` must expose current-page semantics equivalent to `aria-current="page"`.
- Separators must not be keyboard-focusable.
- Linked breadcrumb items must be keyboard-focusable using native link behavior.
- Non-linked breadcrumb items must not be keyboard-focusable by default.

## Acceptance Criteria

1. Given a `w-breadcrumbs` with three `w-breadcrumb-item` children, when the custom elements upgrade, then the breadcrumb trail displays the three labels in source order.

2. Given three `w-breadcrumb-item` children where only the final item has `current-page`, when rendered, then separators are displayed after the first and second items only.

3. Given a `w-breadcrumb-item` with `href="/home"`, when rendered, then the item exposes a navigable link with the visible label as its accessible name.

4. Given a `w-breadcrumb-item` without `href`, when rendered, then the item does not expose a keyboard-focusable link.

5. Given a `w-breadcrumb-item current-page`, when rendered, then the item exposes current-page semantics equivalent to `aria-current="page"`.

6. Given a React SSR page containing `w-breadcrumbs` with `w-breadcrumb-item` children, when the page hydrates on the client, then hydration completes without warnings caused by breadcrumb child movement or breadcrumb child attribute/class mutation.

7. Given `w-breadcrumb-item` children containing slotted text or elements, when the custom elements upgrade, then the slotted nodes remain in the item light DOM.

8. Given `w-breadcrumb-item` children containing slotted elements, when the custom elements upgrade, then the component does not add styling classes or accessibility attributes to those slotted elements.

9. Given existing Legacy API markup with direct `<a>` children, when rendered, then the breadcrumb trail still displays linked items with automatic separators.

10. Given existing Legacy API markup with a direct current page child using `aria-current="page"`, when rendered, then the current page behavior remains supported.

11. Given a `w-breadcrumbs` with no children, when rendered, then the component does not throw and still exposes the breadcrumb navigation landmark.

12. Given `href` or `current-page` changes on an existing `w-breadcrumb-item`, when the component updates, then link, current-page, and separator behavior reflect the latest attributes.

## Test Notes

- Hydration tests should assert that React hydration warnings are absent for the Item API.
- DOM stability tests should assert that slotted item content is not moved out of `w-breadcrumb-item`.
- DOM mutation tests should assert that consumer-provided slotted elements are not given component styling classes.
- Accessibility tests should cover navigation landmark behavior, custom `aria-label`, linked item focusability, non-linked item non-focusability, and current-page semantics.
- Compatibility tests should cover the existing Legacy API examples documented for `w-breadcrumbs`.
