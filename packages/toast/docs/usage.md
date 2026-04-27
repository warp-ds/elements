## Usage

You should not use the toast components directly. Instead use the JavaScript API exported from Warp Elements to create, update and remove toasts

<style-isolate id="toast-usage">
    <w-button id="toast-btn" onclick="toast('Toasts are somewhat of an anti-pattern')">Show toast</w-button>
</style-isolate>


```js
import { toast } from '@warp-ds/elements/toast';

const showBtn = document.getElementById("toast-btn");
showBtn.onclick = () => {
    toast("Toasts are somewhat of an anti-pattern");
};
```

### Dismissable toast

The toast automatically closes by default, so you don't need to have a close button.

From an accessibility perspective, toasts should never contain interactive elements such as close buttons, as interactive elements should always appear in the same location as the action that triggered them.

It might be tempting to use this option and a high duration if you have a warning or error toast to "solve" the WCAG 2 success criteria 2.2.1, but please consider showing warnings and errors as a persistent [Alert](/docs/components/alert/overview) instead.

If the toast absolutely must be dismissible by the user, set the `canclose` property to `true`.

```js
toast('message goes here', { type: 'success', canclose: true });
```
