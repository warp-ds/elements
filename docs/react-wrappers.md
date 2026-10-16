# React wrapper stubs

Our React wrappers use `@lit/react` to connect React props to custom elements. The actual component implementation is loaded separately through Eik. The wrappers use small, unregistered `LitElement` stubs so importing a React wrapper does not bundle the component implementation.

We support React server rendering of the host elements and their light DOM children. We do not support Lit SSR: the custom element's shadow DOM renders in the browser.

## When a stub needs @property() decoration

Declare a property on the stub when either condition applies:

- Its HTML attribute name differs from its JavaScript property name, such as `fullWidth` → `full-width`.
- Its value needs JavaScript property assignment, such as a function, object, array, or element reference.

Simple properties with matching attribute names, such as string-valued `name` or `size`, can pass through as attributes (which works just fine).

For example:

```ts
import { createComponent } from "@lit/react";
import { LitElement } from "lit";
import { property } from "lit/decorators.js";
import React from "react";
import type { WarpButton } from "../packages/button/button.js";

class Component extends LitElement {
	@property({ attribute: "full-width" })
	fullWidth: WarpButton["fullWidth"] = false;

	@property({ attribute: false })
	commandForElement: WarpButton["commandForElement"];
}

export const Button = createComponent({
	tagName: "w-button",
	elementClass: Component as unknown as typeof WarpButton,
	react: React,
});
```

This abbreviated example illustrates both criteria.

## Why runtime declarations?

For ordinary props, `@lit/react` checks whether the prop name exists on the supplied class's prototype:

```ts
propName in elementClass.prototype;
```

It checks the stub, not the Eik implementation currently registered in the browser.
A Lit `@property` decorator creates a prototype accessor, which makes that check succeed.

The stub is never registered or instantiated and all it needs to define is the connection between attribute and property name so `@property({ attribute: "name-here" })` is all that is needed. Do not add `reflect: true` etc.

Server side, props defined in the stub are not added to the render (and thats what we want). After React commits, `@lit/react` assigns them in a layout effect:

```ts
element.fullWidth = true;
element.commandForElement = targetElement;
```

Without the declaration, React would write the property directly to the HTML (not what we want)

```tsx
<Button fullWidth>
```

Lit would then have no idea what the property is and ignore it (its looking for `full-width`, not `fullWidth`)
