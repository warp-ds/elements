## Examples

### Basic

<elements-example>

```html
<w-datepicker label="Date" name="date"></w-datepicker>
```

</elements-example>

### With Value

<elements-example>

```html
<w-datepicker label="Start date" name="start-date" value="2026-06-15"></w-datepicker>
```

</elements-example>

### Locale

<elements-example>

```html
<w-datepicker label="Dato" name="date" lang="nb"></w-datepicker>
```

</elements-example>

### Custom Formats

<elements-example>

```html
<w-datepicker
  label="Date"
  name="date"
  header-format="MMMM yyyy"
  weekday-format="EEEEEE"
  day-format="PPPP"
></w-datepicker>
```

</elements-example>

### Form Associated

<elements-example>

```html
<form>
  <w-datepicker label="Departure date" name="departure"></w-datepicker>
  <w-button type="submit">Search</w-button>
</form>
```

</elements-example>

### Disabled Calendar Dates

<elements-example>

```html
<w-datepicker id="booking-date" label="Booking date" name="booking-date"></w-datepicker>

<script type="module">
  const datepicker = document.querySelector('#booking-date');

  datepicker.isDayDisabled = (day) => day.getDay() === 0;
</script>
```

</elements-example>
