## Usage

<elements-example>

```html
<w-select label="Berries">
    <option value="raspberries">Raspberries</option>
    <option value="strawberries">Strawberries</option>
    <option value="cloudberries">Cloudberries</option>
</w-select>
```

</elements-example>

### Validation

Set the `invalid` attribute to display a textfield as invalid.

`invalid` should be paired with `help-text` to provide feedback to the user about how to correct the error.

<elements-example>

```html
<w-select label="Berries" invalid help-text="Select a red berry">
    <option value="raspberries">Raspberries</option>
    <option value="strawberries">Strawberries</option>
    <option value="cloudberries" selected>Cloudberries</option>
</w-select>
```

</elements-example>
