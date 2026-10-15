import { createComponent } from "@lit/react";
import { property } from "lit/decorators.js";
import { LitElement } from "lit";
import React from "react";

import type { WarpAffix } from "./affix.js";

// We do this in order to prevent users from bundling in the CE implementation when
// they should be getting it from Eik.
class Component extends LitElement {
	// attribute/properties with different attribute names from the property name must be
	// redeclared on the stub to ensure @lit/react handles them correctly
	@property({ attribute: "aria-label" })
	ariaLabel: WarpAffix["ariaLabel"] = null;
}

type AffixProps = React.ComponentProps<typeof BaseAffix> & {
	ariaLabel?: WarpAffix["ariaLabel"];
};

const BaseAffix = createComponent({
	tagName: "w-affix",
	elementClass: Component as unknown as typeof WarpAffix,
	react: React,
});

// Type dance to support ariaLabel which, since it clashes with the native aria-label attr,
// does not work out of the box. I don't pretend to undertand this unreadable garbage, only what it fixes
// in any case, AI pinky promises it adds support for ariaLabel camelcase syntax to the type definition.
// To reiterate, we shouldn't need this in most cases, only where we clash with native attributes like aria-label
export const Affix = BaseAffix as React.ForwardRefExoticComponent<
	React.PropsWithoutRef<AffixProps> & React.RefAttributes<WarpAffix>
>;
