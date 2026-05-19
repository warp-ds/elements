## API Documentation

### toast

```js
import { toast } from '@warp-ds/elements/toast';

const theToast = toast('Toasts are somewhat of an anti-pattern');
```

Returns [ToastOptions](#toastoptions), which includes the ID you need for [updateToast](#updatetoast) and [removeToast](#removetoast).

If you can't pass the result from `toast` to where you call `updateToast` or `removeToast` you can set a known ID manually.

```js
toast('Toasts are somewhat of an anti-pattern', {
    id: 'something-unique-but-stable',
});
```

| Parameter | Type |  Summary |
| --- | --- | --- |
| message | `string` | The text content |
| options | [ToastOptions](#toastoptions) (optional) | |


### updateToast

```js
import { toast, updateToast } from '@warp-ds/elements/toast';

const theToast = toast('The toast function returns an ID');

updateToast(theToast.id, 'Use it to update the text');
```

Returns [ToastOptions](#toastoptions).

| Parameter | Type |  Summary |
| --- | --- | --- |
| id |  `string` | The ID of the toast you want to update |
| message | `string` | The new text content |
| options | [ToastOptions](#toastoptions) (optional) | |

### removeToast

Toasts disappear after a set time, but if you need to remove one before that happens you can do so.

```js
import { toast, removeToast } from '@warp-ds/elements/toast';

const theToast = toast('The toast function returns an ID');

removeToast(theToast.id);
```

### Types

#### ToastOptions

| Name | Type | Default | Summary |
| --- | --- | --- | --- |
| id | `string` | Random | Random generated unique ID for the toast element |
| type | [`ToastVariants`](#toastvariants) | `'success'` | Visual style of the toast |
| text | `string` | `-` | The given toast message |
| duration | `number` | `5000` | Duration of toast in milliseconds |
| canclose | `boolean` | `false` | See [Dismissable toast](#dismissable-toast) |

#### ToastVariants

`'success' | 'warning' | 'error'`
