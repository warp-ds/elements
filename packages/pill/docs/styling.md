## Styling API

Pill supports styling through **component tokens** (CSS custom properties with a `--w-c-` prefix) and **parts**.

### Parts

Use `::part(part-name)` from outside the component.

- `base` - the root navigation element
- `label` - the button containing the text that labels the pill
- `close-button` - close button (only shown when attribute "can-close" is present)
- `close-icon` - close button icon (only shown when attribute "can-close" is present)


```css
w-pill::part(current) {
	color: hotpink;
}
```

### Component tokens

Set these on `<w-pill>` to override visuals.

```css
w-pill {
	--w-c-pill-color-text: rebeccapurple;
}
```

#### Tokens

##### layout

- `--w-c-pill-padding` - padding setting for the pill

##### border

- `--w-c-pill-border-width` - border width of the pill
- `--w-c-pill-border-style` - border style of the pill
- `--w-c-pill-color-border` - color of the border
- `--w-c-pill-border-radius` - border radius of the pill
- `--w-c-pill-focus-outline` - focus outline setting for the pill
- `--w-c-pill-focus-outline-offset` - focus outline offset setting for the pill

##### text

- `--w-c-pill-font-size` - font size of the pill
- `--w-c-pill-font-weight` - font weight of the pill
- `--w-c-pill-suggestion-font-weight` - font weight of the suggestion variant
- `--w-c-pill-line-height` - line height of the pill
- `--w-c-pill-color-text` - text color of the pill
- `--w-c-pill-color-text-hover` - text color of the pill when hovering
- `--w-c-pill-color-text-active` - text color of the pill when active
- `--w-c-pill-suggestion-color-text` - text color of the suggestion variant


##### background

- `--w-c-pill-color-background` - background color of the pill
- `--w-c-pill-color-background-hover` - background color of the pill when hovering
- `--w-c-pill-color-background-active` - background color of the pill when active
- `--w-c-pill-suggestion-color-background` - background color of the suggestion variant
- `--w-c-pill-suggestion-color-background-hover` - background color of the suggestion when hovering
- `--w-c-pill-suggestion-color-background-active` - background color of the suggestion when active

##### Motion

- `--w-c-pill-transition-duration` - transition-duration for the button label
- `--w-c-pill-transition-property` - transition-property for the button label
- `--w-c-pill-transition-timing-function` - transition-timing-function for the button label
