## Examples

Sketching. I _think_ let's use a similar API to cards in this case, which wrap cards in the w-<type>-group component. Our challenge becomes how to style a radio and checkbox to look like a Warp button (kind of sort of, maybe it's good it's a separate one?) instead of a regular component.

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

buttonbuttonbutton

```
<w-button-group name="package-size">
  <w-button>Small</w-button>
  <w-button>Medium</w-button>
  <w-button>Large</w-button>
</w-button-group>
```

buttonbutton  button

```
<w-button-group name="package-size">
  <div data-button-group>
    <w-button>Small</w-button>
    <w-button>Medium</w-button>
  </div>
  <w-button>Large</w-button>
</w-button-group>
```

So the docs flow would be button group -> radio group type button and checkbox group type button (reference card group as a reference point).
