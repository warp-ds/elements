## Accessibility

Datepicker renders a labeled date input with a button that opens a calendar dialog. The calendar uses a grid of dates and moves focus into the calendar when it opens.

### Provide A Label

Always provide a visible label.

```html
<w-datepicker label="Departure date" name="departure"></w-datepicker>
```

The label should describe the date being requested. Avoid generic labels such as "Date" when there are several date fields on the same page.

### Calendar Dialog

The calendar popup is rendered as a dialog with `aria-modal="true"`. The month heading is announced with `aria-live="polite"` when users move between months.

Each date in the calendar grid has an accessible name formatted using `day-format`.

```html
<w-datepicker label="Date" name="date" day-format="PPPP"></w-datepicker>
```

Use a descriptive `day-format` so screen reader users hear the full date, not only the day number.
See [the Date FNS docs](https://date-fns.org/v4.1.0/docs/format) for formatting options.
