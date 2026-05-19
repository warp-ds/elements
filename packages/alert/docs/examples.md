## Examples

### Basic

<elements-example>
  
```html
<w-alert show>
  <p>We have updated your preferences.</p>
</w-alert>
```

</elements-example>

### Info

<elements-example>
  
```html
<w-alert variant="info" show>
  <p>This is an informational alert.</p>
</w-alert>
```

</elements-example>

### Warning

<elements-example>
  
```html
<w-alert variant="warning" show>
  <p>Please double-check this value before continuing.</p>
</w-alert>
```

</elements-example>

### Negative

<elements-example>
  
```html
<w-alert variant="negative" show>
  <p>Something went wrong. Try again.</p>
</w-alert>
```

</elements-example>

### Positive

<elements-example>
  
```html
<w-alert variant="positive" show>
  <p>Your changes were saved successfully.</p>
</w-alert>
```

</elements-example>

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
