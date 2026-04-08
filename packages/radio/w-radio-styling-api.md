# Styling API

This page lists the **supported styling hooks** for:

- `<w-radio>`
- `<w-radio-group>`

Only use **component tokens** and **parts** shown below. Anything else should be considered internal and may change.

---

## `<w-radio>`

### Parts

| Part | What it targets |
| --- | --- |
| `control` | the radio circle |
| `label` | the label slot |

**Example**

```css
w-radio::part(label) { font-weight: 600; }
w-radio::part(control) { margin-block-start: 1px; }
```

### Component tokens

Set these on the `<w-radio>` element (or any ancestor) to theme the component:

```css
w-radio {
  --w-c-radio-gap: 8px;

  --w-c-radio-size: 2rem;
  --w-c-radio-radius: 50%;
  --w-c-radio-border-width: 1px;
  --w-c-radio-checked-border-width: 0.6rem;

  --w-c-radio-bg: var(--w-s-color-background);
  --w-c-radio-bg-disabled: var(--w-s-color-background-disabled-subtle);

  --w-c-radio-border-color: var(--w-s-color-border-strong);
  --w-c-radio-border-color-checked: var(--w-s-color-border-selected);
  --w-c-radio-border-color-disabled: var(--w-s-color-border-disabled);
  --w-c-radio-border-color-invalid: var(--w-s-color-border-negative);

  --w-c-radio-outline-width: 2px;
  --w-c-radio-outline-color: var(--w-s-color-border-focus);
  --w-c-radio-outline-offset: var(--w-outline-offset, 1px);

  --w-c-radio-label-font-size: var(--w-font-size-m);
  --w-c-radio-label-line-height: var(--w-line-height-m);
  --w-c-radio-label-color: currentColor;
  --w-c-radio-label-color-disabled: var(--w-s-color-text-disabled);

  --w-c-radio-cursor: pointer;
  --w-c-radio-cursor-disabled: not-allowed;

  --w-c-radio-transition:
    border-color 150ms cubic-bezier(0.4, 0, 0.2, 1),
    border-width 150ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

## `<w-radio-group>`

### Parts

| Part | What it targets |
| --- | --- |
| `form-control` | the `<fieldset>` wrapper |
| `form-control-label` | the label element (if rendered) |
| `form-control-input` | the slot wrapper for the radios |
| `help-text` | the help / error text container |

**Example**

```css
w-radio-group::part(form-control-input) { gap: 8px; }
w-radio-group::part(help-text) { margin-block-start: 8px; }
```

### Component tokens

Set these on the `<w-radio-group>` element (or any ancestor):

```css
w-radio-group {
  --w-c-radio-group-label-font-size: var(--w-font-size-s);
  --w-c-radio-group-label-line-height: var(--w-line-height-s);
  --w-c-radio-group-label-font-weight: 700;
  --w-c-radio-group-label-color: var(--w-s-color-text);
  --w-c-radio-group-label-color-disabled: var(--w-s-color-text-disabled);
  --w-c-radio-group-label-padding-bottom: 16px;

  --w-c-radio-group-optional-font-weight: 400;
  --w-c-radio-group-optional-color: var(--w-s-color-text-subtle);
  --w-c-radio-group-optional-margin-inline-start: 0.5rem;

  --w-c-radio-group-gap: 16px;

  --w-c-radio-group-help-text-margin-block-start: 16px;
  --w-c-radio-group-help-text-font-size: var(--w-font-size-xs);
  --w-c-radio-group-help-text-line-height: var(--w-line-height-xs);
  --w-c-radio-group-help-text-color: var(--w-s-color-text-subtle);
  --w-c-radio-group-help-text-color-disabled: var(--w-s-color-text-disabled);
  --w-c-radio-group-help-text-color-error: var(--w-s-color-text-negative);
}
```
