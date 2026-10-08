## Styling API

Combobox supports styling through **component tokens** (CSS custom properties with a `--w-c-` prefix) and **parts**.

### Parts

The combobox exposes a set of parts that can be targeted for last-mile layout or typography tweaks. Since the combobox uses a w-textfield internally, parts exposed by the textfield can also be styled. If you use the `tooltip` property, the tooltip component's parts can also be styled. All stylable parts are listed in the table below.

Use `::part(part-name)` from outside the component.

| Part | Targets | Typical use |
|---|---|---|
| `base` | wrapper around the component internals |  |
| `textfield-wrapper` | wrapper around the textfield component internals |  |
| `input` | native input element | minor typography or spacing tweaks |
| `mask-wrapper` | wrapper around the input mask | formatting-related layout tweaks |
| `mask` | formatted value shown when the input is not focused | typography for formatter output |
| `help-text` | help text container below the field | small typography tweaks |
| `label` | label element above the field | small label layout tweaks |
| `tooltip-target` | info icon button rendered when `tooltip` is set | small icon button alignment tweaks |
| `tooltip` | tooltip surface exported by `w-tooltip` | tooltip surface tweaks |
| `arrow` | tooltip arrow exported by `w-tooltip` | tooltip arrow tweaks |
| `beak` | tooltip beak exported by `w-tooltip` | tooltip beak tweaks |
| `hover-bridge` | tooltip hover bridge exported by `w-tooltip` | tooltip hover behavior tweaks |
| `options-list` | options list popover | popover background, shadow, spacing, or radius tweaks |
| `option` | individual option in the listbox | option spacing, typography, or state tweaks |

```css
w-combobox::part(base) {
	padding: 48px;
	background: rebeccapurple;
	color: cyan;
}
```

### Combobox tokens

Set these on `<w-combobox>` to override visuals.

```css
w-combobox {
    --w-c-combobox-color-background: hotpink;
}
```

#### Textfield tokens

| Token | Purpose | Default |
|---|---|---|
| `--w-c-textfield-padding-left` | input left padding | `8px` |
| `--w-c-textfield-padding-right` | input right padding | `8px` |
| `--w-c-textfield-line-height` | input line height | `--w-line-height-m` |
| `--w-c-textfield-font-size` | input font size | `--w-font-size-m` |
| `--w-c-textfield-color-border` | border color | `--w-s-color-border-strong` |
| `--w-c-textfield-color` | input text color | `--w-s-color-text` |
| `--w-c-textfield-background` | input background color | `--w-s-color-background` |
| `--w-c-textfield-color-border-active` | border color while active | `--w-s-color-border-selected` |
| `--w-c-textfield-color-border-hover` | border color on hover | `--w-s-color-border-strong-hover` |
| `--w-c-textfield-outline-focus` | focus outline | `2px solid var(--w-s-color-border-focus)` |
| `--w-c-textfield-outline-offset` | focus outline offset | `-2px` |
| `--w-c-textfield-color-border-invalid` | border color when invalid | `--w-s-color-border-negative` |
| `--w-c-textfield-color-invalid` | text color when invalid | `--w-s-color-text-negative` |
| `--w-c-textfield-outline-invalid` | outline when invalid | `2px solid var(--w-s-color-border-negative)` |
| `--w-c-textfield-color-border-invalid-hover` | border color when invalid and hovered | `--w-s-color-border-negative-hover` |
| `--w-c-textfield-color-border-disabled` | border color when disabled | `--w-s-color-border-disabled` |
| `--w-c-textfield-color-disabled` | text color when disabled | `--w-s-color-text-disabled` |
| `--w-c-textfield-color-background-disabled` | background color when disabled | `--w-s-color-background-disabled-subtle` |
| `--w-c-textfield-color-placeholder` | placeholder text color | `--w-s-color-text-placeholder` |

#### Label tokens

| Token | Purpose | Default |
|---|---|---|
| `--w-c-input-label-color` | label text color | `--w-s-color-text` |
| `--w-c-input-label-font-size` | label font size | `--w-font-size-s` |
| `--w-c-input-label-line-height` | label line height | `--w-line-height-s` |
| `--w-c-input-label-font-weight` | label font weight | `700` |
| `--w-c-input-label-padding-bottom` | space below label | `0.4rem` |
| `--w-c-input-label-cursor` | cursor when hovering label | `pointer` |
| `--w-c-input-label-display` | label display mode | `block` |

#### Optional indicator tokens

When the `optional` attribute is set and the field is not `required`, these tokens control the optional indicator after the label.

| Token | Purpose | Default |
|---|---|---|
| `--w-c-input-optional-color` | optional text color | `--w-s-color-text-subtle` |
| `--w-c-input-optional-font-size` | optional text font size | `--w-font-size-s` |
| `--w-c-input-optional-line-height` | optional text line height | `--w-line-height-s` |
| `--w-c-input-optional-font-weight` | optional text font weight | `400` |
| `--w-c-input-optional-padding-left` | space before optional text | `0.4rem` |

#### Help text tokens

| Token | Purpose | Default |
|---|---|---|
| `--w-c-input-help-text-color` | help text color | `--w-s-color-text-subtle` |
| `--w-c-input-help-text-color-invalid` | help text color when invalid | `--w-s-color-text-negative` |
| `--w-c-input-help-text-font-size` | help text font size | `--w-font-size-xs` |
| `--w-c-input-help-text-line-height` | help text line height | `--w-line-height-xs` |
| `--w-c-input-help-text-margin-top` | space above help text | `0.4rem` |
| `--w-c-input-help-text-display` | help text display mode | `block` |

#### Tooltip tokens

| Token | Purpose | Default |
|---|---|---|
| `--w-c-tooltip-z-index` | tooltip stack order | `30` |
| `--w-c-tooltip-bg` | tooltip background color | `--w-s-color-background-inverted-static` |
| `--w-c-tooltip-color` | tooltip text color | `--w-s-color-text-inverted-static` |
| `--w-c-tooltip-box-shadow` | tooltip shadow | `--w-shadow-m` |

#### Options list tokens

| Token | Purpose | Default |
|---|---|---|
| `--w-c-combobox-padding-bottom` | space below the options list | `0.4rem` |
| `--w-c-combobox-shadow` | options list shadow | `--w-shadow-m` |
| `--w-c-combobox-color-background` | options list background color | `--w-s-color-background` |
| `--w-c-combobox-border-radius` | options list border radius | `8px` |
| `--w-c-combobox-option-padding` | option padding | `0.8rem` |
| `--w-c-combobox-option-color-background-hover` | option background color on hover | `--w-s-color-background-hover` |
| `--w-c-combobox-option-color-background-selected` | selected option background color | `--w-s-color-background-selected` |
| `--w-c-combobox-options-box-z-index` | options-list stacking order | `20` |
