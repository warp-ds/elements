## Accessibility

### ARIA attribute

We use `aria-labelledby` instead of `aria-describedby` to create the relationship between the tooltip and its target.

The ARIA Authoring Practices Guide (APG) recommends `aria-describedby`, but at time of writing that must be set directly on the focusable element. Since `w-button`'s focusable `button` element is inside a shadow root we can't set up that relationship. Cross-root references by ID is impossible and the related ARIA properties on the `Element` are read only.

We might revisit this design later should cross-root ARIA references become supported.
