## Usage

Checkbox lets users select one or more options. Use it for independent yes/no choices, multi-select lists, and terms or consent confirmations.

Use `w-checkbox-group` when several checkboxes share one label, help text, optional indicator, or required validation.

### Basic Checkbox

```html
<w-checkbox name="newsletter" value="yes">Sign up for updates</w-checkbox>
```

The slotted text becomes the checkbox label.

### Checked State

Use `checked` when the checkbox should be selected by default.

```html
<w-checkbox name="alerts" value="email" checked>Email alerts</w-checkbox>
```

Listen for the `change` event when you need to react to user changes.

```html
<w-checkbox id="newsletter" name="newsletter" value="yes">Sign up for updates</w-checkbox>

<script>
  const checkbox = document.querySelector('#newsletter');

  checkbox.addEventListener('change', () => {
    console.log(checkbox.checked);
  });
</script>
```

### Form Submission

`w-checkbox` is form-associated. When checked, it submits its `name` and `value` with the form. When unchecked or disabled, it submits nothing.

```html
<form>
  <w-checkbox name="newsletter" value="yes">Sign up for updates</w-checkbox>
  <w-button type="submit">Submit</w-button>
</form>
```

If no `value` is set, the submitted value defaults to `on`.

### Required

Use `required` when one standalone checkbox must be checked before form submission, such as accepting terms.

```html
<form>
  <w-checkbox name="terms" value="accepted" required>Accept the terms</w-checkbox>
  <w-button type="submit">Continue</w-button>
</form>
```

For a set of options where at least one option is required, put `required` on `w-checkbox-group` instead.

### Checkbox Group

Use `w-checkbox-group` to group related options under a shared label and help text.

```html
<w-checkbox-group label="Interests" help-text="Select all that apply" name="interests">
  <w-checkbox value="housing">Housing</w-checkbox>
  <w-checkbox value="jobs">Jobs</w-checkbox>
  <w-checkbox value="travel">Travel</w-checkbox>
</w-checkbox-group>
```

The group name is applied to child checkboxes that do not have their own `name`.

### Indeterminate

Use `indeterminate` when a parent checkbox represents a mixed set of child selections.

```html
<w-checkbox name="all-notifications" indeterminate>All notifications</w-checkbox>
```

Indeterminate is a visual state. When the user clicks the checkbox, the indeterminate state is cleared and the checkbox becomes checked.

### Invalid

Set `invalid` when validation is managed outside the component.

```html
<w-checkbox name="terms" value="accepted" invalid>Accept the terms</w-checkbox>
```

When possible, place clear error text near the checkbox or group so users know how to correct the error.
