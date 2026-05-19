## Accessibility

Buttons must have a clear accessible name and should describe the action they perform.

### Use Descriptive Text

Prefer visible text that names the action.

```html
<w-button>Save changes</w-button>
```

Avoid vague labels when the action is not obvious from context.

```html
<!-- Avoid -->
<w-button>OK</w-button>
```

### Icon-Only Buttons

If a button does not have visible text, include text for assistive technologies in the slotted content.

```html
<w-button variant="pill">
  <w-icon name="Close"></w-icon>
  <span class="sr-only">Close</span>
</w-button>
```

The accessible text should describe the action, not the icon shape.

### Disabled Buttons

Avoid disabled buttons. A disabled control can prevent keyboard users from reaching it and often does not explain what must happen before the action becomes available.

Prefer keeping the button available and showing validation or explanatory feedback when the user tries to continue.

### Button Or Link

Use a w-button for actions on the current page. Use a w-link for navigation.

For backwards compatibility, if `href` is set, `w-button` renders a link with button styling. The accessible behavior is link behavior, even though the component looks like a button. This is deprecated behaviour and you should instead use the w-link component if you need to render a link that looks like a button.
