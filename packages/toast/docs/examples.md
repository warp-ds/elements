## Examples

### Success / positive

This is the default.

<style-isolate id="toast-usage">
    <w-button id="toast-btn" onclick="toast('Toasts are somewhat of an anti-pattern')">Show a success toast</w-button>
</style-isolate>

### Warning

If the user should be warned about something, a toast is probably not the right way to do so. Consider an [Alert](/docs/components/alert/overview) instead.

A toast is easy to miss, especially on larger screens. Toasts that automatically close are also an accessibility problem if the information is not available elsewhere, or is insignificant (which shouldn't be the case for warnings).

<style-isolate id="toast-usage">
    <w-button id="toast-btn" onclick="toast('Toasts are somewhat of an anti-pattern', { type: 'warning' })">Show a warning toast</w-button>
</style-isolate>

### Error / negative

If the user should be told about an error, a toast is probably not the right way to do so. Consider an [Alert](/docs/components/alert/overview) instead.

A toast is easy to miss, especially on larger screens. Toasts that automatically close are also an accessibility problem if the information is not available elsewhere, or is insignificant (which shouldn't be the case for errors).

<style-isolate id="toast-usage">
    <w-button id="toast-btn" onclick="toast('Toasts are somewhat of an anti-pattern', { type: 'error' })">Show an error toast</w-button>
</style-isolate>
