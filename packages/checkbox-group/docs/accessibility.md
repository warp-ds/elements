## Accessibility

Checkbox group renders the child checkboxes inside an element with `role="group"`. The group label is connected to the group, and help text is connected when provided.

### Provide A Group Label

Use `label` to describe the shared question or topic.

```html
<w-checkbox-group label="Interests" name="interests">
  <w-checkbox value="housing">Housing</w-checkbox>
  <w-checkbox value="jobs">Jobs</w-checkbox>
  <w-checkbox value="travel">Travel</w-checkbox>
</w-checkbox-group>
```

The group label should not duplicate every option label. It should explain what the options are about.

### Use Help Text For Extra Context

Use `help-text` for instructions, constraints, or validation feedback.

```html
<w-checkbox-group label="Interests" help-text="Select all that apply" name="interests">
  <w-checkbox value="housing">Housing</w-checkbox>
  <w-checkbox value="jobs">Jobs</w-checkbox>
  <w-checkbox value="travel">Travel</w-checkbox>
</w-checkbox-group>
```

Keep help text short and actionable.

### Required Groups

Use `required` on the group when at least one option must be selected.

```html
<w-checkbox-group label="Preferences" required help-text="Choose at least one" name="preferences">
  <w-checkbox value="email">Email</w-checkbox>
  <w-checkbox value="sms">SMS</w-checkbox>
</w-checkbox-group>
```

Do not put `required` on each child checkbox for a "choose at least one" requirement. That would mean every option must be selected.

### Validation Feedback

Do not rely on invalid styling alone. Provide clear help text that explains what the user needs to do.

```html
<w-checkbox-group label="Preferences" invalid help-text="Select at least one option" name="preferences">
  <w-checkbox value="email">Email</w-checkbox>
  <w-checkbox value="sms">SMS</w-checkbox>
</w-checkbox-group>
```

When the group is invalid, the invalid state is also shared with child checkboxes for consistent styling and accessibility state.

### Checkbox Labels

Each child checkbox still needs its own clear label.

```html
<w-checkbox-group label="Contact preferences" name="contact">
  <w-checkbox value="email">Email</w-checkbox>
  <w-checkbox value="sms">SMS</w-checkbox>
  <w-checkbox value="push">Push notifications</w-checkbox>
</w-checkbox-group>
```

Avoid option labels that only make sense visually, such as "Yes" or "This one", unless the group label gives enough context.
