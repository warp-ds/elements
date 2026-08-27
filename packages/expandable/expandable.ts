import { html, LitElement, PropertyValues } from "lit";
import { property } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import "../icon/icon.js";
import "../utils/expand-transition";
import { detectLocale } from "../i18n.js";
import "../utils/unstyled-heading";

import { reset } from "../styles.js";

import { styles } from "./styles.js";

export type ExpandableVariant =
	"default" | "box" | "box-bleed" | "default-with-divider";

/**
 * Expandable is a layout component used for creating expandable content areas on a page.
 *
 * [Warp component reference](https://warp-ds.github.io/docs/components/expandable/frameworks/elements)
 *
 * @slot title - Alternative to the `title` attribute should you need to provide some additional markup.
 *
 * @csspart base - the root wrapper element inside the component.
 * @csspart chevron - the chevron container.
 */
class WarpExpandable extends LitElement {
	/**
	 * Controls component's expanded state
	 */
	@property({ type: Boolean, reflect: true })
	expanded = false;

	/**
	 * Component title. Used to display the title value which is always present regardless of whether the component is open or closed.
	 */
	@property({ type: String })
	title!: string;

	/**
	 * Visual style of the expandable.
	 * Accepted values are `"default"`, `"box"`, `"box-bleed"`, and `"default-with-divider"`.
	 * If omitted, deprecated `box` and `bleed` flags are still used for compatibility.
	 */
	@property({ type: String, reflect: true, useDefault: true })
	variant: ExpandableVariant = "default";

	/**
	 * Will make the expandable a Box.
	 *
	 * @deprecated Use `variant="box"` instead.
	 */
	@property({ type: Boolean, reflect: true })
	box = false;

	/**
	 * Will make the expandable full-width on the sm breakpoint size.
	 *
	 * @deprecated Use `variant="box-bleed"` instead.
	 */
	@property({ type: Boolean, reflect: true })
	bleed = false;

	/**
	 * @deprecated Probably does not work the way you expect. The class must exist inside the shadow DOM of the component.
	 */
	@property({ attribute: "button-class", type: String })
	buttonClass: string | undefined;

	/**
	 * @deprecated Probably does not work the way you expect. The class must exist inside the shadow DOM of the component.
	 */
	@property({ attribute: "content-class", type: String })
	contentClass: string | undefined;

	/**
	 * Controls chevron visibility
	 */
	@property({ attribute: "no-chevron", type: Boolean })
	noChevron = false;

	/**
	 * Will animate the expansion/collapse
	 */
	@property({ type: Boolean })
	animated = false;

	/**
	 * Wrap the toggle button in a heading element with the specified level. If headingLevel is not specified, the button will not be wrapped by a heading element.
	 */
	@property({ attribute: "heading-level", type: Number })
	headingLevel: number | undefined;

	@property({ type: Boolean, state: true })
	private _hasTitle = true;

	@property({ type: Boolean, state: true })
	private _showChevronUp = false;

	// Slotted elements remain in lightDOM which allows for control of their style outside of shadowDOM.
	// ::slotted([Simple Selector]) confirms to Specificity rules, but (being simple) does not add weight to lightDOM skin selectors,
	// so never gets higher Specificity. Thus in order to overwrite style linked within shadowDOM, we need to use !important.
	// https://stackoverflow.com/a/61631668
	static styles = [reset, styles];

	updated(changedProperties: PropertyValues<this>) {
		// We need a slight delay for the animation since it has a transition-duration of 150ms:
		if (changedProperties.has("expanded")) {
			setTimeout(() => {
				this._showChevronUp = this.expanded;
			}, 200);
		}
	}

	firstUpdated() {
		const hasTitleProp = Boolean(this.title);
		const hasTitleSlot =
			(
				this.renderRoot.querySelector("slot[name='title']") as HTMLSlotElement
			)?.assignedNodes().length > 0;

		this._hasTitle = hasTitleProp || hasTitleSlot;
	}

	get #chevronIcon() {
		const locale = detectLocale();
		return this._showChevronUp
			? html`<w-icon
					class="chevron-icon"
					data-direction="up"
					name="ChevronUp"
					size="small"
					locale="${locale}"
				></w-icon>`
			: html`<w-icon
					class="chevron-icon"
					data-direction="down"
					name="ChevronDown"
					size="small"
					locale="${locale}"
				></w-icon>`;
	}

	/** @internal */
	get _expandableSlot() {
		const contentClass = this.contentClass
			? `content ${this.contentClass}`
			: "content";
		return html`<div
			class=${contentClass}
			data-has-title=${ifDefined(this._hasTitle ? "" : undefined)}
		>
			<slot></slot>
		</div>`;
	}

	render() {
		const buttonClass = this.buttonClass
			? `button ${this.buttonClass}`
			: "button";
		return html` <div part="base">
			${
				this._hasTitle
					? html`<w-unstyled-heading level=${ifDefined(this.headingLevel)}>
							<button
								class=${buttonClass}
								type="button"
								aria-expanded="${this.expanded}"
								@click=${() => (this.expanded = !this.expanded)}
							>
								<div class="title">
									${
										this.title
											? html`<span class="title-text">${this.title}</span>`
											: html`<slot class="title-text" name="title"></slot>`
									}
									${
										this.noChevron
											? ""
											: html`<div part="chevron">${this.#chevronIcon}</div>`
									}
								</div>
							</button>
						</w-unstyled-heading>`
					: ""
			}
			${
				this.animated
					? html`<w-expand-transition class="expansion" ?show=${this.expanded}>
							${this._expandableSlot}
						</w-expand-transition>`
					: html`<div
							class="expansion"
							aria-hidden=${ifDefined(!this.expanded ? true : undefined)}
						>
							${this._expandableSlot}
						</div>`
			}
		</div>`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"w-expandable": WarpExpandable;
	}
}

if (!customElements.get("w-expandable")) {
	customElements.define("w-expandable", WarpExpandable);
}

export { WarpExpandable };
