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


