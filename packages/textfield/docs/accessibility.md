## Accessibility

If a visible label isn't specified, an `aria-label` must be provided to the text field for accessibility. If the field is labeled by a separate element, an `aria-labelledby` property must be provided using the `id` of the labeling element instead.

- Always provide a visible label (do not rely on `placeholder` alone).
- Do not rely on color alone for interaction feedback (e.g. error states).
- Interaction patterns should follow platform-native expectations (e.g. tap zones, keyboard navigation, etc) and must not block accessibility tools.

### When used with an affix

When `search` or `clear` set on the [affix](#with-affix) component it renders a button and a default `aria-label`. If the `aria-label` incorrect for your context, you may provide your own describing the action.

```html
<w-affix search aria-label="Ad Search"></w-affix>
<w-affix clear aria-label="Clear text input"></w-affix>
```
