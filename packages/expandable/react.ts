import { createComponent } from "@lit/react";
import { LitElement } from "lit";
import React from "react";

import type { WarpExpandable } from "./expandable.js";
import { property } from "lit/decorators.js";

// decouple from CDN by providing a dummy class
class Component extends LitElement {
	@property({ attribute: "button-class" })
	buttonClass?: WarpExpandable["buttonClass"];

	@property({ attribute: "content-class" })
	contentClass?: WarpExpandable["contentClass"];

	@property({ attribute: "no-chevron" })
	noChevron?: WarpExpandable["noChevron"];

	@property({ attribute: "heading-level" })
	headingLevel?: WarpExpandable["headingLevel"];
}

export const Expandable = createComponent({
	tagName: "w-expandable",
	elementClass: Component as unknown as typeof WarpExpandable,
	react: React,
});
