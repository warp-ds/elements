# Feature: New Expandable Variant

## Problem

`w-expandable` currently uses the boolean `box` and `bleed` attributes to choose visual treatments.

This makes the visual API harder to extend because consumers have to combine flags to get a single intended presentation. The next design requires a divider-style expandable row that does not fit the existing `box` or `bleed` flags.

## Goal

Add a canonical `variant` attribute/property to `w-expandable` with these values:

- `default`
- `box`
- `box-bleed`
- `default-with-divider`

Add the new `default-with-divider` visual treatment.

Deprecate the `box` and `bleed` boolean attributes/properties without removing support for them in this change.

## Scope

This change applies to:

- `w-expandable`
- the React `Expandable` wrapper
- expandable Storybook stories
- expandable documentation
- custom elements metadata generated from the component source
- tests that cover expandable behavior, styling, hydration, and React rendering

## Non-Goals

- Do not remove the existing `box` or `bleed` attributes/properties.
- Do not change expansion, collapse, animation, or chevron icon behavior except where layout requires it for the new variant.
- Do not change `heading-level`, `title`, title slot, `no-chevron`, `button-class`, or `content-class` behavior.
- Do not introduce accordion behavior or coordination between multiple expandable items.
- Do not add a bottom divider to every `default-with-divider` item; only the last item in a consecutive list gets the bottom divider.

## Definitions

- **Variant**: the named visual treatment selected by the `variant` attribute/property.
- **Default variant**: the current unboxed expandable visual treatment.
- **Box variant**: the current `box` visual treatment.
- **Box bleed variant**: the current combined `box` and `bleed` visual treatment.
- **Default with divider variant**: a full-width row treatment with a top divider, no box background, and a bottom divider only on the last item.
- **Deprecated flag**: the existing `box` or `bleed` boolean attribute/property. Deprecated means discouraged for new usage, but still supported.

## User Behavior

Consumers can use the new `variant` attribute instead of boolean flags:

```html
<w-expandable variant="default" title="Details">
	<p>Default content.</p>
</w-expandable>

<w-expandable variant="box" title="Details">
	<p>Box content.</p>
</w-expandable>

<w-expandable variant="box-bleed" title="Details">
	<p>Box bleed content.</p>
</w-expandable>

<w-expandable variant="default-with-divider" title="Details">
	<p>Divider content.</p>
</w-expandable>
```

The React wrapper supports the same variants:

```tsx
<Expandable variant="default-with-divider" title="Details">
	<p>Divider content.</p>
</Expandable>
```

Existing consumers using `box` and `bleed` keep working:

```html
<w-expandable box title="Details">
	<p>Existing box content.</p>
</w-expandable>

<w-expandable box bleed title="Details">
	<p>Existing box bleed content.</p>
</w-expandable>
```

New usage should prefer `variant`.

## Requirements

### Component API

- `w-expandable` must expose a `variant` string attribute/property.
- The accepted `variant` values are `default`, `box`, `box-bleed`, and `default-with-divider`.
- If `variant` is omitted, the effective variant is `default` unless deprecated compatibility flags imply another treatment.
- Explicit variant values must be available as host attributes for styling, for example `:host([variant="default-with-divider"])`.
- The default effective variant must not require rendering `variant="default"` when the consumer omitted the attribute.
- If `variant="default"` is set explicitly, the component uses the same visual treatment as the current default expandable.
- If `variant="box"` is set, the component uses the same visual treatment as the current `box` expandable.
- If `variant="box-bleed"` is set, the component uses the same visual treatment as the current `box bleed` expandable.
- If `variant="default-with-divider"` is set, the component uses the divider treatment defined below.
- Invalid `variant` values must not crash the component. They should fall back to `default` and may emit a development warning.
- The React `Expandable` props must include `variant?: "default" | "box" | "box-bleed" | "default-with-divider"`.
- Generated custom elements metadata must list the `variant` attribute/property and the accepted values.

### Deprecated Compatibility Flags

- `box` and `bleed` remain supported for this change.
- `box` and `bleed` must be marked deprecated in source documentation so generated metadata and editor hints communicate the replacement.
- New documentation and examples must use `variant`, not `box` or `bleed`, except in a migration/deprecation note.
- If `variant` is omitted and `box` is present, the effective variant is the current box treatment.
- If `variant` is omitted and both `box` and `bleed` are present, the effective variant is the current box bleed treatment.
- If `variant` is omitted and `bleed` is present without `box`, existing bleed behavior must remain unchanged for compatibility.
- If `variant` and deprecated flags are both present, `variant` is the source of truth for styling. The implementation may emit a development warning, but warning behavior is not required.
- Deprecated flags must not be removed from the React wrapper in this change.

### Default With Divider Layout

For `variant="default-with-divider"`:

- The component host remains `display: block`.
- The root visual area spans the full available width.
- The toggle button spans the full available width when a title is rendered.
- The title text is aligned to the left.
- The chevron is aligned to the right edge of the row, inside the 16px right padding.
- The title row uses `display: flex`, `align-items: center`, and `gap: 8px`.
- The title row has `padding: 16px 16px 16px 0`.
- The title row has a top border: `1px solid var(--Semantic-Color-Border-Default, #DEDEE3)`.
- The variant does not render left, right, or bottom borders on every item.
- The last `w-expandable` of its sibling type using this variant gets a bottom border through host `:last-of-type` behavior: `1px solid var(--Semantic-Color-Border-Default, #DEDEE3)`.
- The expanded content starts 8px below the title row.
- When expanded, the space between the bottom of the content and the top of the next element is 16px.
- The variant has no box background by default.
- The variant has no border radius by default.
- Hover and active styling must not introduce a box-style background unless design tokens explicitly override it.

Figma reference CSS for the title row:

```css
display: flex;
padding: 16px 16px 16px 0;
align-items: center;
gap: 8px;
align-self: stretch;
border-top: 1px solid var(--Semantic-Color-Border-Default, #DEDEE3);
```

### Styling API

- Existing expandable CSS custom properties must continue to work for existing variants.
- Existing `part="base"` and `part="chevron"` styling hooks must remain available.
- The new variant may add internal resolved variables for divider-specific values.
- If public tokens are added, they must use the `--w-c-expandable-*` prefix.
- Divider border color must use `var(--Semantic-Color-Border-Default, #DEDEE3)` by default.
- Consumers must still be able to style the root wrapper through `w-expandable::part(base)`.
- `no-chevron` must still remove the chevron without breaking title alignment or row width.

### Rendering and State

- The new variant supports both the `title` attribute and the `title` slot.
- The new variant supports `expanded` at initial render.
- The new variant supports toggling `expanded` by clicking the title row.
- The new variant supports `animated`.
- The new variant supports `heading-level`.
- The new variant supports `no-chevron`.
- The new variant preserves `aria-expanded` behavior on the toggle button.
- Collapsed content remains hidden the same way it is hidden for existing variants.
- Expanded content remains visible the same way it is visible for existing variants.
- If no title is provided, the component should not render an internal toggle button, matching current behavior.

### Documentation and Stories

- Add a Storybook story for `variant="default-with-divider"`.
- Update existing expandable stories to use `variant="default"` and `variant="box"` instead of `box`.
- Add or update a story showing `variant="box-bleed"`.
- Keep a small compatibility example or note for deprecated `box` and `bleed`.
- Update expandable docs to describe the four variant values.
- Update React stories to demonstrate the new `variant` prop.
- Documentation must state that `box` and `bleed` are deprecated and new usage should use `variant`.

## Acceptance Criteria

1. Given `<w-expandable title="Details">`, when rendered without `variant`, `box`, or `bleed`, then it looks and behaves like the current default expandable.

2. Given `<w-expandable variant="default" title="Details">`, when rendered, then it looks and behaves like the current default expandable.

3. Given `<w-expandable variant="box" title="Details">`, when rendered, then it looks and behaves like the current `box` expandable.

4. Given `<w-expandable variant="box-bleed" title="Details">`, when rendered, then it looks and behaves like the current `box bleed` expandable.

5. Given `<w-expandable variant="default-with-divider" title="Details">`, when rendered, then the title row has 16px top, right, and bottom padding, 0 left padding, and a top border using `var(--Semantic-Color-Border-Default, #DEDEE3)`.

6. Given `<w-expandable variant="default-with-divider" title="Details">`, when rendered, then the component does not have left, right, or per-item bottom borders.

7. Given multiple sibling `<w-expandable variant="default-with-divider">` elements, when rendered, then each item has a top border and only the last `w-expandable` of its sibling type has the bottom border.

8. Given `<w-expandable variant="default-with-divider" title="Details">`, when rendered with a chevron, then the button spans the full width, the title is on the left, and the chevron is aligned to the right side inside the 16px right padding.

9. Given `<w-expandable variant="default-with-divider" title="Details" expanded>`, when rendered, then the expanded content is visible and starts 8px below the title row.

10. Given `<w-expandable variant="default-with-divider" title="Details" expanded>` followed by another element, when rendered, then there is 16px between the bottom of the expanded content and the top of the next element.

11. Given `<w-expandable variant="default-with-divider" title="Details">`, when the title row is clicked, then `expanded` toggles and `aria-expanded` updates to match.

12. Given `<w-expandable variant="default-with-divider" title="Details" no-chevron>`, when rendered, then no chevron part is rendered and the title row still spans the full width.

13. Given `<w-expandable variant="default-with-divider" heading-level="2" title="Details">`, when rendered, then the toggle button is wrapped in the existing unstyled heading behavior.

14. Given `<w-expandable variant="default-with-divider" animated title="Details">`, when opened or closed, then the existing animation behavior still works.

15. Given `<w-expandable box title="Details">`, when rendered with no `variant`, then the deprecated flag still produces the existing box visual treatment.

16. Given `<w-expandable box bleed title="Details">`, when rendered with no `variant`, then the deprecated flags still produce the existing box bleed visual treatment.

17. Given `<w-expandable variant="default-with-divider" box bleed title="Details">`, when rendered, then the `default-with-divider` variant styling wins over deprecated flag styling.

18. Given `<Expandable variant="default-with-divider" title="Details" />` in React, when rendered, then the `variant` attribute is passed to `w-expandable`.

19. Given React SSR hydration for `variant="default-with-divider"`, when hydrated, then no hydration warnings are produced.

20. Given generated custom elements metadata, when inspected, then `variant` is documented with the four accepted values and `box` and `bleed` are marked deprecated.

21. Given expandable docs and stories, when reviewed, then new examples use `variant` and deprecated `box`/`bleed` usage is only shown as compatibility guidance.

## Edge Cases

- Invalid `variant` value.
- `variant` changed dynamically after initial render.
- `variant` combined with deprecated `box` and `bleed` flags.
- `bleed` set without `box` and without `variant`.
- `default-with-divider` with a title attribute.
- `default-with-divider` with a slotted title.
- `default-with-divider` with no title.
- `default-with-divider` with `no-chevron`.
- `default-with-divider` with `heading-level`.
- `default-with-divider` with `animated`.
- `default-with-divider` initially expanded.
- A single `default-with-divider` item, which is also the last item and therefore gets both top and bottom borders.
- Multiple consecutive `default-with-divider` items.
- A `default-with-divider` item followed by a different element type.
- A `default-with-divider` item followed by a `w-expandable` using a different variant.
- Long title text that wraps while the chevron stays aligned to the right.
- Slotted content whose first child has margins.
- Consumers styling `::part(base)` and `::part(chevron)`.

## Test Notes

- Unit tests should cover effective variant resolution for omitted `variant`, each explicit variant, and deprecated `box`/`bleed` combinations.
- Unit tests should cover invalid `variant` fallback behavior.
- Unit tests should assert divider variant computed styles for padding, top border, bottom border on the last item, width, and chevron alignment.
- Unit tests should cover `expanded`, click toggling, `animated`, `heading-level`, and `no-chevron` with `default-with-divider`.
- Tests should cover both title attribute and title slot for the new variant.
- React tests should verify the `variant` prop renders as the `variant` attribute.
- React hydration tests should include each explicit variant, including `default-with-divider`.
- Storybook coverage should include `default`, `box`, `box-bleed`, and `default-with-divider`.

## Out of Scope

- Removing `box` and `bleed`.
- Creating an accordion/group component.
- Changing global expandable spacing outside the new variant and variant mapping.
- Changing icon assets or chevron animation timing.
- Adding new public CSS parts beyond existing `base` and `chevron`.
