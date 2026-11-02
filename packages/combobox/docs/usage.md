## Usage

Use child `<option>` elements for declarative HTML usage.

<elements-example>

```html
<w-combobox label="Country" placeholder="Search">
    <option value="no">Norway</option>
    <option value="se">Sweden</option>
    <option value="dk">Denmark</option>
</w-combobox>
```

</elements-example>

The option text is used as the visible suggestion. The `value` attribute is used as the submitted and selected value.

For framework usage or dynamic data, you may set the `options` property instead.

```js
combobox.options = [
  { value: 'no', label: 'Norway' },
  { value: 'se', label: 'Sweden' },
  { value: 'dk', label: 'Denmark' },
];
```

When `options` contains entries, it is used instead of child `<option>` elements.

Selection on blur is enabled by default. Add `no-select-on-blur` in HTML, or set `noSelectOnBlur = true` in JavaScript, to disable it. In React, use `<Combobox noSelectOnBlur />`.

The `select-on-blur` attribute and `selectOnBlur` property are deprecated. Replace `selectOnBlur = false` with `noSelectOnBlur = true`. The new opt-out takes precedence if both are set.

### Focus and blur events

The custom `focus` and `blur` event copies are deprecated and will be removed in the next major release. They continue to fire for compatibility alongside the browser's native `FocusEvent`s. The custom `focus` copy only fires with `open-on-focus`; native focus events fire regardless.

Ignore `CustomEvent` copies and read the component's `value` instead of `event.detail.value`:

```js
combobox.addEventListener('blur', (event) => {
  if (event instanceof CustomEvent) return;
  validate(combobox.value);
});
```

Use the same guard for `focus`, including React's `onFocus` and `onBlur` handlers. In React, read the component's value through a ref:

```jsx
<Combobox
  ref={comboboxRef}
  onBlur={(event) => {
    if (event instanceof CustomEvent) return;
    validate(comboboxRef.current.value);
  }}
/>
```

Native `focus` and `blur` cross shadow boundaries but do not bubble. For listeners on an ancestor, use `focusin` and `focusout` instead.
