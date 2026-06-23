## Styling API

### Breadcrumbs

The breadcrumbs components support styling through **component tokens** (CSS custom properties with a `--w-c-` prefix) and **parts**.

`w-breadcrumbs` does not expose component-specific tokens. Set `w-breadcrumb-item` tokens on `w-breadcrumbs` or another ancestor to style all items in a breadcrumb trail.

```css
w-breadcrumbs {
	--w-c-breadcrumb-item-link-color: var(--w-s-color-text-link);
	--w-c-breadcrumb-item-separator-spacing: 1.2rem;
}
```

### Breadcrumb Item

The `w-breadcrumb-item` component supports styling through **component tokens** and **parts**.

#### Component tokens

Set these on `w-breadcrumb-item` to override one item, or on `w-breadcrumbs` to let the values inherit into all item children.

```css
w-breadcrumb-item {
	--w-c-breadcrumb-item-link-color-hover: var(--w-s-color-text-link-hover);
	--w-c-breadcrumb-item-font-weight: 700;
}
```

##### Layout and typography

| Token                               | Purpose                                 | Default             |
| ----------------------------------- | --------------------------------------- | ------------------- |
| `--w-c-breadcrumb-item-font-size`   | Font size for the label and separator   | inherited font size |
| `--w-c-breadcrumb-item-line-height` | Line height for the label and separator | `1.5`               |
| `--w-c-breadcrumb-item-font-weight` | Font weight for the label and separator | `400`               |
| `--w-c-breadcrumb-item-padding-x`   | Inline padding for linked items         | `0`                 |
| `--w-c-breadcrumb-item-padding-y`   | Block padding for linked items          | `0`                 |

##### Link color

| Token                                     | Purpose                                    | Default                      |
| ----------------------------------------- | ------------------------------------------ | ---------------------------- |
| `--w-c-breadcrumb-item-link-color`        | Color for linked items                     | `var(--w-s-color-text-link)` |
| `--w-c-breadcrumb-item-link-color-hover`  | Color for linked items on hover            | link color                   |
| `--w-c-breadcrumb-item-link-color-active` | Color for linked items in the active state | link color                   |

##### Text color

| Token                              | Purpose                    | Default                 |
| ---------------------------------- | -------------------------- | ----------------------- |
| `--w-c-breadcrumb-item-text-color` | Color for non-linked items | `var(--w-s-color-text)` |

##### Separator

| Token                                     | Purpose                                     | Default                 |
| ----------------------------------------- | ------------------------------------------- | ----------------------- |
| `--w-c-breadcrumb-item-separator-color`   | Color for the separator                     | `var(--w-s-color-icon)` |
| `--w-c-breadcrumb-item-separator-spacing` | Inline margin on each side of the separator | `0.8rem`                |

The separator uses `--w-c-breadcrumb-item-font-size`, `--w-c-breadcrumb-item-line-height`, and `--w-c-breadcrumb-item-font-weight`.

##### Focus

| Token                                  | Purpose                               | Default              |
| -------------------------------------- | ------------------------------------- | -------------------- |
| `--w-c-breadcrumb-item-outline-width`  | Focus outline width for linked items  | native focus outline |
| `--w-c-breadcrumb-item-outline-color`  | Focus outline color for linked items  | native focus outline |
| `--w-c-breadcrumb-item-outline-offset` | Focus outline offset for linked items | native focus outline |

#### Parts

Use `::part(...)` from outside the component.

- `link` - the link element rendered when `href` is set.
- `text` - the text element rendered when `href` is omitted.
- `separator` - the separator rendered after non-current items.

Example:

```css
w-breadcrumb-item::part(link) {
	text-decoration-thickness: 2px;
}

w-breadcrumb-item::part(separator) {
	margin-inline: 1.2rem;
}
```

#### Notes

- `separator` is not rendered when `current-page` is set.
- Use `link` for linked breadcrumb items and `text` for non-linked breadcrumb items.
- Link color, padding, and focus tokens apply only when `href` is set.
- Focus tokens do not make non-linked breadcrumb items keyboard-focusable.
