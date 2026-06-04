## Examples

### Basic

<elements-example>

```html
<w-checkbox name="newsletter" value="yes">Sign up for updates</w-checkbox>
```

</elements-example>

### Checked

<elements-example>

```html
<w-checkbox name="alerts" value="email" checked>Email alerts</w-checkbox>
```

</elements-example>

### Required

<elements-example>

```html
<form>
  <w-checkbox name="terms" value="accepted" required>Accept the terms</w-checkbox>
  <w-button type="submit">Continue</w-button>
</form>
```

</elements-example>

### Invalid

<elements-example>

```html
<w-checkbox name="terms" value="accepted" invalid>Accept the terms</w-checkbox>
```

</elements-example>

### Disabled

<elements-example>

```html
<w-checkbox name="newsletter" value="yes" disabled>Sign up for updates</w-checkbox>
```

</elements-example>

### Indeterminate

<elements-example>

```html
<w-checkbox name="all-notifications" indeterminate>All notifications</w-checkbox>
```

</elements-example>

### Checkbox Group

<elements-example>

```html
<w-checkbox-group label="Interests" help-text="Select all that apply" name="interests">
  <w-checkbox value="housing">Housing</w-checkbox>
  <w-checkbox value="jobs">Jobs</w-checkbox>
  <w-checkbox value="travel">Travel</w-checkbox>
</w-checkbox-group>
```

</elements-example>

### Required Checkbox Group

<elements-example>

```html
<w-checkbox-group label="Preferences" required help-text="Choose at least one" name="preferences">
  <w-checkbox value="email">Email</w-checkbox>
  <w-checkbox value="sms">SMS</w-checkbox>
  <w-checkbox value="push">Push notifications</w-checkbox>
</w-checkbox-group>
```

</elements-example>

### Form Associated

<elements-example>

```html
<form>
  <w-checkbox name="newsletter" value="yes">Sign up for updates</w-checkbox>
  <w-button type="submit">Submit</w-button>
</form>
```

</elements-example>
