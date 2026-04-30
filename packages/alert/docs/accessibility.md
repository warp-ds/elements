## Accessibility

For accessibility reasons, an alert should appear close to the element that triggered it.

Use the ARIA live region `role` attribute to provide meaning to the alert
element (defaults to "alert").

If you want to remove the role from the alert and
assign it to its particular child (e.g. title), you can do so by setting `role`
property of the `Alert` component to an empty string and assigning a respective
`role` attribute on the child element.

<elements-example>
  
```html
<w-alert variant="info" show role="">
  <h3 role="alert" class="t5">This is an alert styled as an information box</h3>
  <p>In this example only the title has the role of alert. All alerts can have a description.</p>
</w-alert>
```

</elements-example>

Read more about live region `role`
attribute on [MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions#roles_with_implicit_live_region_attributes).