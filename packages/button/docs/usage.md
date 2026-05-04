## Usage

Button is used for actions. Use it when the user can submit, save, confirm, cancel, open, close, or trigger something on the current page.

Use a link instead when the user is navigating to another page. If the control must look like a button but navigate like a link, set `href` on `w-button`.

### Basic Button

```html
<w-button>Save</w-button>
```

The default `variant` is `secondary` and the default `type` is `button`.

### Variants

Choose the variant based on the action's priority and context:

- `primary`: the main action in a view or flow
- `secondary`: secondary or tertiary actions; this is the default
- `negative`: destructive or high-risk actions
- `negativeQuiet`: low-emphasis destructive actions
- `utility`: compact utility actions
- `utilityQuiet`: low-emphasis utility actions
- `quiet`: low-emphasis actions, often near other buttons
- `link`: action styled like an inline link
- `pill`: circular icon-style controls
- `overlay`, `overlayQuiet`, `overlayInverted`, `overlayInvertedQuiet`: controls placed on top of media or elevated surfaces

```html
<w-button variant="primary">Publish</w-button>
<w-button variant="secondary">Cancel</w-button>
<w-button variant="negative">Delete</w-button>
<w-button variant="utility">Filter</w-button>
```

### Sizes And Width

Use `small` for compact layouts. Use `full-width` when the button should fill its parent, such as in narrow mobile layouts.

```html
<w-button variant="primary" small>Save</w-button>
<w-button variant="primary" full-width>Continue</w-button>
```

### Icon-Only Buttons

Use `variant="pill"` for circular icon-only controls. Include accessible text in the slotted content so the internal button has a name.

```html
<w-button variant="pill" icon-only>
  <w-icon name="Close"></w-icon>
  <span class="sr-only">Close</span>
</w-button>
```

### Loading

Use `loading` after the user triggers an action and the action is in progress.

```html
<w-button variant="primary" loading>Saving</w-button>
```

Keep the button text descriptive while loading. Do not rely on the loading animation alone to explain what is happening.

### Form Buttons

Use `type="submit"` to submit the containing form and `type="reset"` to reset it. Use `name` and `value` when the button value should be included in form handling.

```html
<form>
  <w-button type="submit" name="intent" value="save">Save</w-button>
  <w-button type="reset">Reset</w-button>
</form>
```

### Link Styled As Button

Set `href` when the control navigates to another URL. This renders a link with button styling.

```html
<w-button href="/messages/new" variant="primary">New message</w-button>
```

For links that open a new browsing context, set `target`. When `target="_blank"` is used and `rel` is omitted, the component applies `rel="noopener"`.

```html
<w-button href="https://example.com" target="_blank">Visit example</w-button>
```

### Disabled Actions

Avoid disabled buttons where possible. Disabled controls often make it harder for users to understand what is missing or how to continue.

Prefer an enabled button with clear validation or explanatory feedback near the related field.
