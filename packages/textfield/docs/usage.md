## Usage

<elements-example>
    
```html
<w-textfield label="Email" type="email"></w-textfield>
```

</elements-example>

### Validation

Set the `invalid` attribute to display a textfield as invalid.

`invalid` should be paired with `help-text` to provide feedback to the user about how to correct the error.

<elements-example>

```html
<w-textfield 
    label="Email"
    invalid
    help-text="An email should have an @ sign and a domain name, for example ola.nordmann@finn.no"
></w-textfield>
```

</elements-example>
