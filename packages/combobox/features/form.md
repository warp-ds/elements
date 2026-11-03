# Form

How `w-combobox` takes part in a surrounding `<form>`. Disabled fields are in invalid-and-disabled.md.

## Sub-features

- form-value: with `name`, the form submits `value`: the picked option's value, not its label, or typed text that matches no option. Story FormSubmission, no test.
- empty-value: a field that never had a value is left out of the form data. Once the value has changed, an empty field submits `""`. no test
- reset: a form reset restores the initial `value` and shows its label again. Story FormSubmission, no test.
- required: the form submits without a value anyway. `required` only hides "Optional" (see field-attributes.md). no test

## How to get to it (user POV)

`<form><w-combobox name="country" label="Country" value="se">…</w-combobox><button>Submit</button></form>`. The user picks or types a value and submits, or resets the form.

## Driving it with ctl

```bash
pnpm ctl eval 'delete window.submitted'
pnpm ctl mount '<form onsubmit="event.preventDefault(); (window.submitted ??= []).push(Object.fromEntries(new FormData(this)))"><w-combobox name="country" label="Country" value="se"><option value="no">Norway</option><option value="se">Sweden</option></w-combobox><w-combobox name="city" label="City" required><option value="osl">Oslo</option></w-combobox><button type="reset">Reset</button><button>Submit</button></form>' --with textfield
pnpm ctl click 'role=button[name="Submit"]'
pnpm ctl press ControlOrMeta+a Backspace n o r ArrowDown Enter --selector 'role=textbox[name="Country"]'
pnpm ctl type 'role=textbox[name="City"]' Bergen
pnpm ctl click 'role=button[name="Submit"]'
pnpm ctl click 'role=button[name="Reset"]'
pnpm ctl snapshot
pnpm ctl click 'role=button[name="Submit"]'
pnpm ctl eval 'window.submitted'
```

- form-value: the second submission is `{"country":"no","city":"Bergen"}`: Norway's value, and free text for City.
- empty-value: the first submission is `{"country":"se"}` without `city`. The third, after the reset, is `{"country":"se","city":""}`.
- reset: the `snapshot` after Reset shows `textbox "Country"` reading `Sweden` and `textbox "City"` empty.
- required: the first submission went through although the required City was empty.

## Gotchas

- Enter never submits the form, unlike in a native input. The inner input lives in shadow DOM, so it has no form.
- Suspected bug: `required` isn't enforced; there's no validity at all. Repro: the block's first submission, or `eval 'document.querySelector("form").checkValidity()'` returning `true` right after the mount.
