## Examples

### Basic

<style-isolate>
  <w-alert show>
    <p>We have updated your preferences.</p>
  </w-alert>
</style-isolate>

```html
<w-alert show>
  <p>We have updated your preferences.</p>
</w-alert>
```

### Info

<style-isolate>
  <w-alert variant="info" show>
    <p>This is an informational alert.</p>
  </w-alert>
</style-isolate>

```html
<w-alert variant="info" show>
  <p>This is an informational alert.</p>
</w-alert>
```

### Warning

<style-isolate>
  <w-alert variant="warning" show>
    <p>Please double-check this value before continuing.</p>
  </w-alert>
</style-isolate>

```html
<w-alert variant="warning" show>
  <p>Please double-check this value before continuing.</p>
</w-alert>
```

### Negative

<style-isolate>
  <w-alert variant="negative" show>
    <p>Something went wrong. Try again.</p>
  </w-alert>
</style-isolate>

```html
<w-alert variant="negative" show>
  <p>Something went wrong. Try again.</p>
</w-alert>
```

### Positive

<style-isolate>
  <w-alert variant="positive" show>
    <p>Your changes were saved successfully.</p>
  </w-alert>
</style-isolate>

```html
<w-alert variant="positive" show>
  <p>Your changes were saved successfully.</p>
</w-alert>
```

### Programmatic Visibility

```html
<w-alert id="profile-alert" variant="positive">
  <p>Profile saved</p>
</w-alert>

<script type="module">
  const alert = document.querySelector('#profile-alert');
  alert.show = true;
</script>
```
