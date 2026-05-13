## Usage

Datepicker lets users type or choose a calendar date.

Use `w-datepicker` when the user needs to provide one specific date, such as a travel date, appointment date, or deadline. The component is form-associated and submits an ISO date value.

### Basic Datepicker

```html
<w-datepicker label="Date" name="date"></w-datepicker>
```

Always provide a visible `label`.

### Value

Use `value` to set the selected date. The value should use `YYYY-MM-DD` format.

```html
<w-datepicker label="Start date" name="start-date" value="2026-06-15"></w-datepicker>
```

The same value is submitted with the form.

```html
<form>
  <w-datepicker label="Departure date" name="departure"></w-datepicker>
  <w-button type="submit">Search</w-button>
</form>
```

### Locale

Datepicker uses the `lang` attribute on the component, or the `lang` attribute on `<html>`, to choose locale-specific calendar labels and formatting.

```html
<w-datepicker label="Dato" name="date" lang="nb"></w-datepicker>
```

The component includes built-in locale support for `en`, `nb`, `sv`, `da`, and `fi`.

### Formatting

Use `header-format`, `weekday-format`, and `day-format` to control calendar display and accessible day labels.

```html
<w-datepicker
  label="Date"
  name="date"
  header-format="MMMM yyyy"
  weekday-format="EEEEEE"
  day-format="PPPP"
></w-datepicker>
```

These formats use `date-fns/format` syntax. Keep `day-format` descriptive because it is used as the accessible name for each day in the calendar.

### Disable Dates

Use `isDayDisabled` to prevent users from selecting certain dates from the calendar.

This property must be set on the element instance in JavaScript.

```html
<w-datepicker id="booking-date" label="Booking date" name="booking-date"></w-datepicker>

<script type="module">
  const datepicker = document.querySelector('#booking-date');

  datepicker.isDayDisabled = (day) => day.getDay() === 0;
</script>
```

Disabled dates cannot be selected from the calendar.

### About change events

With events the datepicker works much like the native `<input type="date">`:

- When the user types in the input field the component fires [`input` events](https://developer.mozilla.org/en-US/docs/Web/API/Element/input_event).
- When the user clicks a date in the calendar the component fires [`change` events](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event).

Note that the component does not fire a `change` event when typing in the input field. This is intentional.

You can listen to the [`blur` event](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event) if you only care about getting a value, no matter if it was typed or chosen via the calendar. Note that the `blur` event might not fire if the user types and submits the form without leaving the input field. If you use the `blur` event to update JavaScript state you should read the value from the datepicker in your `submit` handler as well.
