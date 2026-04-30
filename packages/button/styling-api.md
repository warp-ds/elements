# w-button styling API

This component supports styling through **component tokens** (CSS custom properties with a --w-c- prefix) and **parts**.

---

## Parts

Use `::part(...)` from outside the component.

- `base` — the clickable element (`<button>` or `<w-link>`)

Example:

```css
w-button::part(base) {
  text-transform: uppercase;
}
```

---

## Component tokens

Set these on `w-button` to override visuals.

```css
w-button {
  --w-c-button-bg: var(--w-s-color-background-primary);
  --w-c-button-color: var(--w-s-color-text-inverted);
}
```

### Layout & typography

- `--w-c-button-radius`
- `--w-c-button-font-size`
- `--w-c-button-line-height`
- `--w-c-button-font-weight`
- `--w-c-button-padding-x`
- `--w-c-button-padding-y`

### Background

- `--w-c-button-bg`
- `--w-c-button-bg-hover`
- `--w-c-button-bg-active`

### Text color

- `--w-c-button-color`
- `--w-c-button-color-hover`
- `--w-c-button-color-active`

### Border

- `--w-c-button-border-width`
- `--w-c-button-border-color`
- `--w-c-button-border-color-hover`
- `--w-c-button-border-color-active`

### Focus

- `--w-c-button-outline-width`
- `--w-c-button-outline-color`
- `--w-c-button-outline-offset`

### Motion

- `--w-c-button-transition`

---

## Notes

- Variant defaults are set internally using fallbacks, so overriding tokens works across variants.
- The `quiet` boolean is supported for backwards compatibility. Prefer `variant="quiet"` going forward.
- When `loading` is set, the button is treated as disabled (no pointer interaction).
