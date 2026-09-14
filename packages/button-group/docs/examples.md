## Examples

TODO: how to label these groups in an accessible way
TODO: how to label these groups in an accessible way with visually hidden labels

RADIORADIORADIO

```
<w-radio-group name="package-size" type="button">
  <w-radio value="small"></w-radio>
  <w-radio value="medium"></w-radio>
  <w-radio value="large"></w-radio>
</w-button-group>
```

RADIORADIO  RADIO

```
<w-radio-group name="package-size" type="button">
  <div data-button-group>
    <w-radio value="small"></w-radio>
    <w-radio value="medium"></w-radio>
  </div>
  <w-radio value="large"></w-radio>
</w-radio-group>
```

checkboxcheckboxcheckbox

```
<w-checkbox-group name="package-size" type="button">
  <w-checkbox value="small"></w-checkbox>
  <w-checkbox value="medium"></w-checkbox>
  <w-checkbox value="large"></w-checkbox>
</w-checkbox-group>
```

checkboxcheckbox  checkbox

```
<w-checkbox-group name="package-size" type="button">
  <div data-button-group>
    <w-checkbox value="small"></w-checkbox>
    <w-checkbox value="medium"></w-checkbox>
  </div>
  <w-checkbox value="large"></w-checkbox>
</w-checkbox-group>
```

So the docs flow would be button group -> radio group type button and checkbox group type button (reference card group as a reference point).
