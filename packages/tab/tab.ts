// @warp-css;

import { classNames } from "@chbphone55/classnames";
import { css, html, LitElement, PropertyValues } from "lit";
import { property } from "lit/decorators.js";

import { reset } from "../styles.js";

import { styles } from "./styles.js";

const ccTab = {
	base: "focusable cursor-pointer text-center bg-transparent border-0 m-0 grid w-full items-center font-bold gap-8 antialias p-16 pb-8 border-b-4 bg-transparent border-transparent hover:s-text-link hover:s-border-primary",
	inactive: "s-text-subtle",
	active: "s-text-link s-border-selected",
	icon: "mx-auto",
	content: "flex items-center justify-center gap-8",
	contentUnderlined: "content-underlined", // content-underlined is a no-op that prevents a quirk in how Vue handles class bindings
};

/**
 * Individual tab component used within w-tabs container.
 *
 * [Warp component reference](https://warp-ds.github.io/docs/components/tabs/frameworks/elements)
 *
 * @parent w-tabs
 */
export class WarpTab extends LitElement {
	static styles = [
		reset,
		styles,
		css`
			::slotted([slot="icon"]) {
				display: flex;
			}

			:host(:focus-visible) {
				outline: 2px solid var(--w-s-color-border-focus, #1a73e8);
				outline-offset: var(--w-outline-offset, 1px);
			}
		`,
	];

	/** @internal */
	_internals: ElementInternals;

	private _handleClick = (event: Event & { tab?: WarpTab }) => {
		event.tab = this;
	};

	constructor() {
		super();
		this._internals = this.attachInternals();
	}

	/**
	 * The host element (`<w-tab>`), the one with `role=tab`, must be the focusable element for assistive technology.
	 */
	@property({ type: Number })
	tabindex: number = 0;

	/**
	 * The `id` of the `<w-tab-panel>` this tab controls.
	 */
	@property({ reflect: true })
	for: string | undefined;

	/**
	 * @internal
	 */
	@property({ attribute: "aria-controls" })
	private _ariaControlsAttr?: string;

	/**
	 * Internal aria-selected managed by parent w-tabs.
	 *
	 * Non-reflecting to avoid DOM changes during hydration.
	 *
	 * @internal
	 */
	@property({ attribute: false })
	_parentAriaSelected: "true" | "false" | undefined;

	/**
	 * Computed aria-selected: prefers parent-managed, falls back to own property
	 *
	 * @internal
	 */
	get _computedAriaSelected(): "true" | "false" | undefined {
		return this._parentAriaSelected ?? this._ownAriaSelected;
	}

	private get _effectiveAriaControls(): string {
		return this._ariaControlsAttr || this.for || "";
	}

	/**
	 * Indicate that this is the currently active tab.
	 *
	 * @internal Set by w-tabs
	 */
	@property({ attribute: "aria-selected" })
	set ariaSelected(value: "true" | "false") {
		const oldValue = this._ownAriaSelected;
		this._ownAriaSelected = value;
		// Sync to ElementInternals immediately
		this._internals.ariaSelected = this._computedAriaSelected ?? null;
		this.requestUpdate("ariaSelected", oldValue);
	}
	/** @internal */
	get ariaSelected(): "true" | "false" {
		return this._computedAriaSelected ?? "false";
	}
	private _ownAriaSelected: "true" | "false" | undefined;

	/**
	 * @deprecated Use `aria-selected="true"` instead
	 *
	 * @internal Set by w-tabs
	 */
	@property({ type: Boolean, reflect: true })
	active = false;

	/**
	 * Whether to show the `icon` slot over the tab title instead of inline.
	 */
	@property({ type: Boolean, reflect: true })
	over = false;

	private get _classes() {
		return classNames([
			ccTab.base,
			this.active || this.ariaSelected === "true"
				? ccTab.active
				: ccTab.inactive,
		]);
	}

	private get _hasIcon() {
		return this.querySelector('[slot="icon"]') !== null;
	}

	connectedCallback() {
		super.connectedCallback();
		// Use ElementInternals for ARIA to avoid hydration mismatches
		this._internals.role = "tab";
		this.syncAriaControls();
		this.addEventListener("click", this._handleClick);
	}

	disconnectedCallback() {
		super.disconnectedCallback();
		this.removeEventListener("click", this._handleClick);
	}

	updated(changedProperties: PropertyValues<this>) {
		super.updated(changedProperties);
		const changedKeys = changedProperties as Map<PropertyKey, unknown>;

		// Sync aria-selected to ElementInternals (no DOM attribute needed - AT reads from ElementInternals)
		if (changedProperties.has("_parentAriaSelected")) {
			this._internals.ariaSelected = this._computedAriaSelected ?? null;
		}
		if (changedKeys.has("_ariaControlsAttr")) {
			this.syncAriaControls();
		}
		if (changedProperties.has("for")) {
			this.syncAriaControls();
		}
		// Only let deprecated `active` drive aria-selected when explicitly set by consumers.
		if (changedProperties.has("active") && this.hasAttribute("active")) {
			this._internals.ariaSelected = this.active ? "true" : "false";
		}
	}

	private syncAriaControls() {
		const controlsId = this._effectiveAriaControls;
		const tabsHost = this.closest("w-tabs");
		const panel =
			(tabsHost?.querySelector(
				`w-tab-panel#${CSS.escape(controlsId)}`,
			) as Element | null) ??
			this.ownerDocument?.getElementById(controlsId) ??
			null;

		// Prefer element relationships on ElementInternals; fall back to string if needed.
		const internals = this._internals;
		if ("ariaControlsElements" in internals) {
			internals.ariaControlsElements = panel ? [panel] : [];
			return;
		}
		// ariaControlsElements is defined in the types so
		// TS thinks this will never happen :sigh:
		if ("ariaControls" in (internals as Record<string, unknown>)) {
			(internals as Record<string, unknown>).ariaControls = controlsId || null;
		}
	}

	render() {
		const hasIcon = this._hasIcon;

		return html`
			<div class="${this._classes}" style="height: 100%">
				${!hasIcon
					? html`<span class="${ccTab.contentUnderlined}"><slot></slot></span>`
					: this.over
						? html`
								<span class="${ccTab.icon}">
									<slot name="icon"></slot>
								</span>
								<span class="${ccTab.contentUnderlined}"><slot></slot></span>
							`
						: html`
								<div class="${ccTab.content}">
									<slot name="icon"></slot>
									<slot></slot>
								</div>
							`}
			</div>
		`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"w-tab": WarpTab;
	}
}

if (!customElements.get("w-tab")) {
	customElements.define("w-tab", WarpTab);
}
