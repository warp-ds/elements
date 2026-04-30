## Accessibility

From an accessibility perspective, toasts should never contain interactive elements, as these should always appear in the same location as the action that triggered them.

Auto-clearing toasts based on a timeout violate WCAG 2 success criteria 2.2.1, unless the information they contain is either redundant (i.e. also available elsewhere in a persistent manner) or insignificant to all people.

You are also advised to avoid putting information in a toast that cannot be re-accessed in any other way due to the impermanent nature of the current toast implementation.

Because of these points we consider the use of toasts to be somewhat of an anti-pattern, and recommend exploring alternative approaches wherever possible. That said, you may still use toasts, as long as you avoid interactive elements like links or close buttons.
