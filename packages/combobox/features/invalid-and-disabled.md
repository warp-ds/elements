# Invalid and disabled

The two states a consumer sets on the field: an external validation error, and an unavailable field.

## Sub-features

- invalid: `invalid` marks the textbox `[invalid]`, styles the field as an error and makes `help-text` its error message. Story Invalid, no test (axe checks only).
- disabled: `disabled` makes the textbox `[disabled]`. It can't be clicked or tabbed to, and the field is left out of form data. Story Disabled, no test (axe checks only).

## How to get to it (user POV)

`<w-combobox label="Country" invalid help-text="Pick a country from the list">`, or `disabled`. The user sees the error under the field, or a greyed-out field that Tab skips.

## Driving it with ctl

```bash
node .agents/skills/verify-elements/ctl.mjs eval 'delete window.submitted'
node .agents/skills/verify-elements/ctl.mjs mount '<form onsubmit="event.preventDefault(); window.submitted = Object.fromEntries(new FormData(this))"><w-combobox label="Country" invalid help-text="Pick a country from the list" value="Atlantis"><option value="no">Norway</option></w-combobox><w-combobox name="city" label="City" value="osl" disabled><option value="osl">Oslo</option></w-combobox><button>Submit</button></form>' --with textfield
node .agents/skills/verify-elements/ctl.mjs snapshot
node .agents/skills/verify-elements/ctl.mjs screenshot
node .agents/skills/verify-elements/ctl.mjs press Tab --selector 'role=textbox[name="Country"]'
node .agents/skills/verify-elements/ctl.mjs click 'role=button[name="Submit"]'
node .agents/skills/verify-elements/ctl.mjs eval 'window.submitted'
```

- invalid: the `snapshot` has `textbox "Country" [invalid]` reading `Atlantis`, followed by `text: Pick a country from the list`. The screenshot shows a red border and red help text.
- disabled: the `snapshot` has `textbox "City" [disabled]` reading `Oslo`. Tab from Country puts `focused` on the Submit button, and `eval 'window.submitted'` returns `{}`, without `city`.

## Gotchas

- `click` on a disabled textbox times out with "element is not enabled" in its `callLog`. Prove the state with `snapshot`.
- `invalid` changes only styling and ARIA. It doesn't stop the form from submitting.
