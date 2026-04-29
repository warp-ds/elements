## Examples

### Basic

<style-isolate>
  <w-badge>New</w-badge>
</style-isolate>

```html
<w-badge>New</w-badge>
```

### Status Variants

<style-isolate>
  <div style="display: flex; flex-wrap: wrap; gap: 8px; align-items: center;">
    <w-badge variant="neutral">Neutral</w-badge>
    <w-badge variant="info">Info</w-badge>
    <w-badge variant="positive">Approved</w-badge>
    <w-badge variant="warning">Pending</w-badge>
    <w-badge variant="negative">Rejected</w-badge>
    <w-badge variant="disabled">Unavailable</w-badge>
  </div>
</style-isolate>

```html
<w-badge variant="neutral">Neutral</w-badge>
<w-badge variant="info">Info</w-badge>
<w-badge variant="positive">Approved</w-badge>
<w-badge variant="warning">Pending</w-badge>
<w-badge variant="negative">Rejected</w-badge>
<w-badge variant="disabled">Unavailable</w-badge>
```

### Price

<style-isolate>
  <w-badge variant="price">1 200 kr</w-badge>
</style-isolate>

```html
<w-badge variant="price">1 200 kr</w-badge>
```

### Sponsored

<style-isolate>
  <w-badge variant="sponsored">Sponsored</w-badge>
</style-isolate>

```html
<w-badge variant="sponsored">Sponsored</w-badge>
```

### Positioned

<style-isolate>
  <div style="position: relative; width: 220px; height: 124px; border-radius: 8px; overflow: hidden; background: #e5e7eb;">
    <w-badge variant="price" position="top-right">1 200 kr</w-badge>
  </div>
</style-isolate>

```html
<div style="position: relative;">
  <img src="listing.jpg" alt="Living room with large windows" />
  <w-badge variant="price" position="top-right">1 200 kr</w-badge>
</div>
```

### Positioned Sponsored Badge

<style-isolate>
  <div style="position: relative; width: 220px; height: 124px; border-radius: 8px; overflow: hidden; background: #e5e7eb;">
    <w-badge variant="sponsored" position="bottom-left">Sponsored</w-badge>
  </div>
</style-isolate>

```html
<div style="position: relative;">
  <img src="listing.jpg" alt="Living room with large windows" />
  <w-badge variant="sponsored" position="bottom-left">Sponsored</w-badge>
</div>
```
