# Alert (w-alert)

## Description

Alert is an inline component used for displaying different types of messages.

For accessibility reasons, alert should appear close to the element that triggered it.

[See Storybook for usage examples](https://warp-ds.github.io/elements/?path=/docs/feedback-alert--docs)

# Usage

Alert is an inline component used for displaying different types of messages.

# Accessibility

For accessibility reasons, an alert should appear close to the element that triggered it.

Use the ARIA live region `role` attribute to provide meaning to the alert
element (defaults to "alert").

If you want to remove the role from the alert and
assign it to its particular child (e.g. title), you can do so by setting `role`
property of the `Alert` component to an empty string and assigning a respective
`role` attribute on the child element.

<style-isolate>
  <w-alert variant="info" show role="">
    <h3 role="alert" class="t5">
      This is an alert styled as an information box
    </h3>
    <p>In this example only the title has the role of alert. All alerts can have a description.</p>
  </w-alert>
</style-isolate>

```html
<w-alert variant="info" show role="">
  <h3 role="alert" class="t5">This is an alert styled as an information box</h3>
  <p>In this example only the title has the role of alert. All alerts can have a description.</p>
</w-alert>
```

Read more about live region `role`
attribute on [MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions#roles_with_implicit_live_region_attributes).

# Examples

## Info

<style-isolate>
  <w-alert variant="info" show>
    <p>This is an alert styled as an information box</p>
  </w-alert>
</style-isolate>

```html
<w-alert variant="info" show>
  <p>This is an alert styled as an information box</p>
</w-alert>
```

## Warning

<style-isolate>
<w-alert variant="warning" show>
  <p>This is an alert styled as an warning box</p>
</w-alert>
</style-isolate>

```html
<w-alert variant="warning" show>
  <p>This is an alert styled as an warning box</p>
</w-alert>
```

## Negative

<style-isolate>
<w-alert variant="negative" show>
  <p>This is an alert styled as a red box signifying something negative can or has happened</p>
</w-alert>
</style-isolate>

```html
<w-alert variant="negative" show>
  <p>This is an alert styled as a red box signifying something negative can or has happened</p>
</w-alert>
```

## Positive

<style-isolate>
  <w-alert variant="positive" show>
    <p>This is an alert styled as a green box signifying success or something else positive</p>
  </w-alert>
</style-isolate>

```html
<w-alert variant="positive" show>
  <p>This is an alert styled as a green box signifying success or something else positive</p>
</w-alert>
```

## API Documentation

### Properties

| Name | Type | Default | Description |
|-|-|-|-|
| variant | `AlertVariants` | `'info'` | The variant of the alert, which determines its color and icon. |
| show | `boolean` | `false` | Whether the alert is shown or hidden. By default, alerts are hidden and should be shown by setting this attribute to true. |
| role | `string` | `'alert'` | The ARIA role of the alert. By default, this is set to "alert" for accessibility reasons, but it can be overridden if necessary. |


### Property Details

#### variant

The variant of the alert, which determines its color and icon.

- Type: `AlertVariants`
- Default: `'info'`

#### show

Whether the alert is shown or hidden. By default, alerts are hidden and should be shown by setting this attribute to true.

- Type: `boolean`
- Default: `false`

#### role

The ARIA role of the alert. By default, this is set to "alert" for accessibility reasons, but it can be overridden if necessary.

- Type: `string`
- Default: `'alert'`



### TypesAlertVariants - 'negative' | 'positive' | 'warning' | 'info'


