## Examples

### Single slider

<elements-example>

```html
<form id="audio">
  <w-slider label="Volume" min="0" max="100">
    <w-slider-thumb name="volume"></w-slider-thumb>
  </w-slider>
</form>
```

</elements-example>

### Range slider

<elements-example>

```html
<w-slider label="Range" min="0" max="100">
  <w-slider-thumb
    slot="from"
    aria-label="From value"
    name="from"
  ></w-slider-thumb>
  <w-slider-thumb
    slot="to"
    aria-label="To value"
    name="to"
  ></w-slider-thumb>
</w-slider>
```

</elements-example>

### Open ended range slider

An open ended range slider covers a case where you want to offer a selection in a common range of values, but allow values outside of that range.

In the example below the case is production year. The edges of the open ended range slider are taken to mean "anything before 1950" and "anything after 2025". This is indicated by an empty string value (`""`).

Users can also choose to enter values into the input field that are outside the range of the slider, for example `1932` or `2027`.

<elements-example>
  
```html
<form id="openended">
  <w-slider label="Production year" min="1950" max="2025" open-ended>
    <w-slider-thumb slot="from" name="from-year"></w-slider-thumb>
    <w-slider-thumb slot="to" name="to-year"></w-slider-thumb>
  </w-slider>
</form>
<script>
  const openEndedSlider = document.querySelector("w-slider");

  openEndedSlider.labelFormatter = function (slot) {
    if (slot === "from") {
      return "Before 1950";
    }
    return "2025+";
  };
  openEndedSlider.valueFormatter = function (value, slot) {
    if (slot === "from" && value === "") {
      return "Min";
    }
    if (slot === "to" && value === "") {
      return "Max";
    }
    return value;
  };

  document.forms["openended"].addEventListener("input", function () {
    const formData = new FormData(this);
    const from = formData.get("from-year");
    const to = formData.get("to-year");
  });
</script>
```

</elements-example>

### Suffix in the input field

You can set a `suffix` on `<w-slider>` and have it apply to any input field in the component.

<elements-example>

```html
<w-slider
  label="Apartment size"
  min="0"
  max="250"
  suffix="${suffix}"
  data-testid="sqm"
>
  <w-slider-thumb
    slot="from"
    aria-label="From size"
    name="from"
  ></w-slider-thumb>
  <w-slider-thumb
    slot="to"
    aria-label="To size"
    name="to"
  ></w-slider-thumb>
</w-slider>
```

</elements-example>

### Number formatter

If you need to format numbers, use the [`valueFormatter`](#valueformatter) and [`labelFormatter`](#labelFormatter) properties.

<elements-example>

```html
<w-slider
  label="Price"
  min="0"
  max="250000"
  suffix="${suffix}"
  data-testid="currency"
>
  <w-slider-thumb
    slot="from"
    aria-label="From price"
    name="from"
  ></w-slider-thumb>
  <w-slider-thumb
    slot="to"
    aria-label="To price"
    name="to"
  ></w-slider-thumb>
</w-slider>
<script type="module">
  const numberFormatter = window.getNumberFormatter(
    "${locale}",
  ).format;
  const currencySlider = document.querySelector(
    'w-slider[data-testid="currency"]',
  );
  currencySlider.valueFormatter = numberFormatter;
  currencySlider.labelFormatter = (slot) => {
    if (slot === "from") return "0";
    return numberFormatter("250000");
  };
</script>
```

</elements-example>

### Steps

Sets the [`step` HTML attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/step) on the inputs.

<elements-example>

```html
<w-slider label="Single" step="${step}" min="0" max="100">
  <w-slider-thumb name="value"></w-slider-thumb>
</w-slider>
```

</elements-example>

### Marks

Show tick markers along the slider. Only works with a single slider.

<elements-example>

```html
<w-slider
  label="Single"
  min="0"
  max="100"
  step="5"
  markers="5"
>
  <w-slider-thumb name="value"></w-slider-thumb>
</w-slider>
```

</elements-example>

### With help text

<elements-example>

```html
<w-slider
  label="Model year"
  min="1950"
  max="2025"
  help-text="Model year of the car"
>
  <w-slider-thumb slot="from" name="from"></w-slider-thumb>
  <w-slider-thumb slot="to" name="to"></w-slider-thumb>
</w-slider>
```

</elements-example>

### With validation error

<elements-example>

```html
<w-slider
  label="Model year"
  min="1950"
  max="2025"
  error="Something is wrong and this should help you solve the problem"
  invalid
>
  <w-slider-thumb slot="from" name="from"></w-slider-thumb>
  <w-slider-thumb slot="to" name="to"></w-slider-thumb>
</w-slider>
```

</elements-example>

### Visually hidden labels

<elements-example>

```html
<w-slider
  min="1950"
  max="2025"
  help-text="Model year of the car"
>
  <legend class="sr-only" slot="label">Model year</legend>
  <w-slider-thumb slot="from" name="from"></w-slider-thumb>
  <w-slider-thumb slot="to" name="to"></w-slider-thumb>
</w-slider>
```

</elements-example>


### Hidden min and max value labels

Give the component a label formatter and always return the empty string.

<elements-example>

```html

<w-slider
  min="1950"
  max="2025"
  help-text="Model year of the car"
  data-testid="hidden-minmax-label"
>
  <legend class="sr-only" slot="label">Model year</legend>
  <w-slider-thumb slot="from" name="from"></w-slider-thumb>
  <w-slider-thumb slot="to" name="to"></w-slider-thumb>
</w-slider>
<script>
  const hiddenMinMaxSlider = document.querySelector(
    'w-slider[data-testid="hidden-minmax-label"]',
  );
  hiddenMinMaxSlider.labelFormatter = () => "";
</script>
```

</elements-example>

### Visually hiden text field

The text field doubles as a visualization of the exact value, which is difficult to see on a slider. If you visually hide the text field with the `hidden-textfield` attribute always make sure to show the value some place, unless the exact value is irrellevant.

<elements-example>

```html
<output class="text-xs">
  <span class="font-bold">Distance:</span>
  <span id="distance-value"></span>
</output>
<form name="map">
  <w-slider min="0" max="20" hidden-textfield data-testid="map-radius">
    <legend class="sr-only" slot="label">Location filter radius</legend>
    <w-slider-thumb name="distance"></w-slider-thumb>
  </w-slider>
</form>
<script>
  const radiusSteps = [
    200, 300, 400, 500, 700, 1000, 1500, 2000, 3000, 5000, 7000, 10000,
    20000, 30000, 50000, 75000, 100000, 200000, 300000, 400000, 500000,
  ];
  const mapRadiusSlider = document.querySelector(
    'w-slider[data-testid="map-radius"]',
  );
  const formatter = window.getNumberFormatter("${locale}");
  function formatDistance(value) {
    const index = Number.parseInt(value);
    const numValue = radiusSteps[index];

    let formattedValue = "";

    if (numValue < 1000) {
      // Use non-breaking space here
      formattedValue = formatter.format(numValue) + " m";
    } else {
      formattedValue = formatter.format(numValue / 1000) + " km";
    }
    return formattedValue;
  };
  mapRadiusSlider.labelFormatter = (slot) => {
    if (slot === "from") {
      return formatDistance("0");
    }
    return formatDistance(String(radiusSteps.length - 1));
  };
  mapRadiusSlider.valueFormatter = (value) => {
    const formattedValue = formatDistance(value);
    document.getElementById("distance-value").innerText = formattedValue;
    return formattedValue;
  };

  document.forms["map"].addEventListener("input", function () {
    const formData = new FormData(this);
    const distance = formData.get("distance");
  });
</script>
```

</elements-example>
