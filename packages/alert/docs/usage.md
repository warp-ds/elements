## Usage

Alert is an inline component used for displaying different types of messages.

Use alerts for contextual feedback that appears close to the related UI element or action.

### Basic Alert

```html
<w-alert show>
  We have updated your preferences.
</w-alert>
```

### Variants

Choose a variant that matches message severity:

- `info`: neutral information
- `positive`: confirmation/success
- `warning`: caution
- `negative`: errors or critical issues

```html
<w-alert variant="info" show>Informational message</w-alert>
<w-alert variant="positive" show>Your changes were saved</w-alert>
<w-alert variant="warning" show>Double-check this value before continuing</w-alert>
<w-alert variant="negative" show>Something went wrong</w-alert>
```

### Visibility

Alerts are hidden by default. Set `show` to display them.

```html
<w-alert id="profile-alert" variant="positive">Profile saved</w-alert>

<script type="module">
  const alert = document.querySelector('#profile-alert');
  alert.show = true;
</script>
```
