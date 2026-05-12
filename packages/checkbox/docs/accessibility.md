## Accessibility

Checkbox renders a native checkbox input inside its shadow DOM. The slotted content is used as the checkbox label.

### Use Descriptive Labels

Always provide label text that explains what the checkbox controls.

```html
<w-checkbox name="newsletter" value="yes">Sign up for updates</w-checkbox>
```

Avoid vague labels that only make sense visually.

```html
<!-- Avoid -->
<w-checkbox name="confirm" value="yes">Yes</w-checkbox>
```

### Group Related Options

Use `w-checkbox-group` when a set of checkboxes shares a question or topic. The group label gives assistive technology users the context they need before hearing each option.

```html
<w-checkbox-group label="Interests" help-text="Select all that apply" name="interests">
  <w-checkbox value="housing">Housing</w-checkbox>
  <w-checkbox value="jobs">Jobs</w-checkbox>
  <w-checkbox value="travel">Travel</w-checkbox>
</w-checkbox-group>
```

### Required Checkboxes

Use `required` on a standalone checkbox only when that specific checkbox must be checked.

```html
<w-checkbox name="terms" value="accepted" required>Accept the terms</w-checkbox>
```

Use `required` on `w-checkbox-group` when the user must choose at least one option from a set.

```html
<w-checkbox-group label="Preferences" required help-text="Choose at least one" name="preferences">
  <w-checkbox value="email">Email</w-checkbox>
  <w-checkbox value="sms">SMS</w-checkbox>
</w-checkbox-group>
```

### Indeterminate State

The indeterminate state is exposed as a mixed checkbox state.

```html
<w-checkbox name="all-notifications" indeterminate>All notifications</w-checkbox>
```

Use indeterminate only when the checkbox represents a mixed selection. Do not use it as a loading or unknown state.

### Validation Feedback

Do not rely on the invalid styling alone. Provide clear nearby text that explains what the user needs to do.

```html
<w-checkbox-group label="Preferences" invalid help-text="Select at least one option" name="preferences">
  <w-checkbox value="email">Email</w-checkbox>
  <w-checkbox value="sms">SMS</w-checkbox>
</w-checkbox-group>
```

### Disabled Checkboxes

Avoid disabled checkboxes where possible. Disabled controls can be hard to discover and do not explain why the option is unavailable.

Prefer leaving the checkbox enabled and showing validation or explanatory feedback when the user tries to continue.
