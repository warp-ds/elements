import { html, LitElement, nothing, PropertyValues } from "lit";
import {
	computePosition,
	autoUpdate,
	flip,
	shift,
	offset,
	arrow,
} from "@floating-ui/dom";

import { reset } from "../styles.js";
import { styles } from "./styles.js";
import { property, query, state } from "lit/decorators.js";

export type TooltipPlacement = "top" | "bottom" | "left" | "right";

/**
 * A tooltip is a message box that is displayed when a user hovers over or gives focus to a UI element.
 *
 * Tooltips should be used sparingly and contain succinct, supplementary information.
 *
 * @example
 * ```html
 * <w-button id="my-button" aria-labelledby="my-tooltip">Hover over me</w-button>
 * <w-tooltip id="my-tooltip" for="my-button">I am a tooltip</w-tooltip>
 * ```
 */
export class WarpTooltip extends LitElement {
	static styles = [reset, styles];

	/**
	 * ID of the element that triggers the tooltip on hover or focus.
	 */
	@property({ useDefault: true })
	for: string = "";

	/**
	 * Hide the arrow pointing toward the tooltip target.
	 */
	@property({ type: Boolean, attribute: "no-arrow" })
	noArrow = false;

	/**
	 * Indicates whether the tooltip is visible or not.
	 */
	@property({ type: Boolean })
	open = false;

	/**
	 * Sets the placement of the tooltip relative to its target.
	 *
	 * The tooltip will try to position itself at the given placement. If there is no room it will flip to the opposite side automatically.
	 *
	 * @default "top"
	 */
	@property({ useDefault: true })
	placement: TooltipPlacement = "top";

	/**
	 * Milliseconds to wait before showing the tooltip on hover.
	 *
	 * Keep at a non-zero value to avoid flickering the tooltip on and off when cursors move quickly past the target element.
	 *
	 * Focusing the target element shows the tooltip immediately.
	 */
	@property({
		attribute: "show-delay",
		type: Number,
		useDefault: true,
		reflect: true,
	})
	showDelay = 150;

	/**
	 * Milliseconds to wait before hiding the tooltip on mouseout.
	 */
	@property({
		attribute: "hide-delay",
		type: Number,
		useDefault: true,
		reflect: true,
	})
	hideDelay = 0;

	@state()
	private target: Element | null = null;

	@query('[part="tooltip"]')
	private tooltip!: HTMLDivElement;

	@query('[part="hover-bridge"]')
	private hoverBridge!: HTMLDivElement;

	@query('[part="arrow"]')
	private arrow!: HTMLDivElement;

	@query('[part="beak"]')
	private beak!: HTMLDivElement;

	#cleanup: ReturnType<typeof autoUpdate> | null = null;
	#hoverTimeout: number | undefined;

	connectedCallback(): void {
		super.connectedCallback();
		if (this.for) {
			this.#handleForChange();
		}
		this.addEventListener("mouseout", this.handleMouseOut);
	}

	disconnectedCallback(): void {
		super.disconnectedCallback();
		this.#stopPositioning?.();
		document.removeEventListener("keydown", this.handleKeydown);
	}

	protected updated(_changedProperties: PropertyValues) {
		if (_changedProperties.has("for")) {
			this.#handleForChange();
		}
		if (_changedProperties.has("open")) {
			this.#handleOpenChange();
		}
	}

	firstUpdated() {
		this.tooltip.hidden = !this.open;
	}

	private handleBlur = () => {
		this.hide();
	};

	private handleFocus = () => {
		this.show();
	};

	private handleMouseOver = () => {
		clearTimeout(this.#hoverTimeout);
		this.#hoverTimeout = window.setTimeout(() => {
			this.show();
		}, this.showDelay);
	};

	private handleKeydown = (e: KeyboardEvent) => {
		if (e.key === "Escape") {
			e.preventDefault();
			this.hide();
		}
	};

	private handleMouseOut = (e: MouseEvent) => {
		const relatedTarget = e.relatedTarget as Node | null;

		// The tooltip must stay open when hovered. To make that happen we need:
		//   1. A "hover bridge" element that takes up the empty space between the target and the tooltip.
		//   2. A check here to see if the mouseout event was triggered because the pointer now hovers
		//      over either the tooltip or was moved back to the target.
		if (relatedTarget) {
			const movedIntoTooltip = this.contains(relatedTarget);
			const movedBackIntoTarget = this.target?.contains(relatedTarget);
			if (movedIntoTooltip || movedBackIntoTarget) {
				return;
			}
		}

		clearTimeout(this.#hoverTimeout);
		this.#hoverTimeout = window.setTimeout(() => {
			this.hide();
		}, this.hideDelay);
	};

	#handleForChange() {
		const rootNode = this.getRootNode?.() as Document | ShadowRoot | null;
		if (!rootNode) {
			return;
		}

		const newTarget = this.for ? rootNode.getElementById(this.for) : null;
		const oldTarget = this.target;
		if (newTarget === this.target) {
			return;
		}

		if (newTarget) {
			newTarget.addEventListener("blur", this.handleBlur);
			newTarget.addEventListener("focus", this.handleFocus);
			newTarget.addEventListener("mouseover", this.handleMouseOver);
			newTarget.addEventListener("mouseout", this.handleMouseOut);
		}
		if (oldTarget) {
			oldTarget.removeEventListener("blur", this.handleBlur);
			oldTarget.removeEventListener("focus", this.handleFocus);
			oldTarget.removeEventListener("mouseover", this.handleMouseOver);
			// @ts-expect-error Not sure why removeEventListener insists handleMouseOut should take Event
			oldTarget.removeEventListener("mouseout", this.handleMouseOut);
		}
		this.target = newTarget;
	}

	async hide() {
		if (!this.open) return;
		this.open = false;
	}

	async show() {
		if (this.open) return;
		this.open = true;
	}

	#handleOpenChange() {
		if (!this.tooltip) return;

		if (this.open) {
			this.tooltip.hidden = false;
			this.hoverBridge.hidden = false;
			document.addEventListener("keydown", this.handleKeydown);
			this.updateComplete.then(() => {
				this.#startPositioning();
			});
		} else {
			this.hoverBridge.hidden = true;
			this.tooltip.hidden = true;
			this.#stopPositioning();
			document.removeEventListener("keydown", this.handleKeydown);
		}
	}

	#startPositioning() {
		if (!this.tooltip || !this.target) return;

		this.#updatePosition();
		this.#cleanup = autoUpdate(this.target, this.tooltip, () => {
			this.#updatePosition();
		});
	}

	#stopPositioning() {
		this.#cleanup?.();
		this.#cleanup = null;
	}

	async #updatePosition() {
		if (!this.tooltip || !this.target) return;

		const middleware = [offset({ mainAxis: 8 }), flip(), shift({ padding: 8 })];

		const hasArrow = !this.noArrow && this.arrow;
		if (hasArrow) {
			middleware.push(arrow({ element: this.arrow }));
		}

		const { x, y, placement, middlewareData } = await computePosition(
			this.target,
			this.tooltip,
			{
				placement: this.placement,
				middleware,
			},
		);
		Object.assign(this.tooltip.style, {
			left: `${x.toFixed(1)}px`,
			top: `${y.toFixed(1)}px`,
		});

		if (hasArrow) {
			// If you need to change this clip path, get the arrow SVG and
			// run it through an SVG to CSS path converter.
			let beakClipPath = "";
			let beakWidth = 0;
			let beakHeight = 0;
			const beakBaseWidth = 23;
			const beakPointSize = 8.5;
			let beakOffset = `${beakPointSize / 2}px`;
			if (placement === "top") {
				beakClipPath =
					"polygon(43% 82.3%, 24.6% 29.3%, 23.9% 27.4%, 23.3% 25.6%, 22.6% 23.9%, 21.9% 22.2%, 21.1% 20.6%, 20.4% 19%, 19.7% 17.5%, 18.9% 16.1%, 18.1% 14.7%, 17.4% 13.4%, 16.6% 12.1%, 15.8% 10.9%, 15% 9.7%, 14.1% 8.6%, 13.3% 7.6%, 12.5% 6.6%, 11.6% 5.7%, 10.8% 4.9%, 9.9% 4.1%, 9% 3.4%, 8.1% 2.8%, 7.3% 2.2%, 6.4% 1.7%, 5.5% 1.2%, 4.6% 0.9%, 3.7% 0.6%, 2.8% 0.3%, 1.8% 0.1%, 0.9% 0%, 0% 0%, 98.4% 0%, 97.5% 0%, 96.5% 0.1%, 95.6% 0.3%, 94.7% 0.6%, 93.8% 0.9%, 92.9% 1.2%, 92% 1.7%, 91.1% 2.2%, 90.2% 2.8%, 89.4% 3.4%, 88.5% 4.1%, 87.6% 4.9%, 86.8% 5.7%, 85.9% 6.6%, 85.1% 7.6%, 84.2% 8.6%, 83.4% 9.7%, 82.6% 10.9%, 81.8% 12.1%, 81% 13.4%, 80.2% 14.7%, 79.5% 16.1%, 78.7% 17.5%, 78% 19%, 77.2% 20.6%, 76.5% 22.2%, 75.8% 23.9%, 75.1% 25.6%, 74.4% 27.4%, 73.8% 29.3%, 55.3% 82.3%, 55% 83.3%, 54.6% 84.1%, 54.3% 85%, 53.9% 85.7%, 53.5% 86.4%, 53.1% 87%, 52.7% 87.6%, 52.3% 88.1%, 51.8% 88.5%, 51.4% 88.8%, 51% 89.1%, 50.5% 89.4%, 50.1% 89.5%, 49.6% 89.6%, 49.2% 89.6%, 48.7% 89.6%, 48.3% 89.5%, 47.9% 89.4%, 47.4% 89.1%, 47% 88.8%, 46.6% 88.5%, 46.1% 88.1%, 45.7% 87.6%, 45.3% 87%, 44.9% 86.4%, 44.5% 85.7%, 44.1% 85%, 43.7% 84.1%, 43.4% 83.3%)";
				beakWidth = beakBaseWidth;
				beakHeight = beakPointSize;
				beakOffset = `3.5px`; // haven't been able to track down the source of this difference, but needed to get the full curve
			} else if (placement === "bottom") {
				beakClipPath =
					"polygon(55.3% 7.3%, 73.8% 60.4%, 74.4% 62.2%, 75.1% 64%, 75.8% 65.7%, 76.5% 67.4%, 77.2% 69%, 78% 70.6%, 78.7% 72.1%, 79.5% 73.6%, 80.2% 75%, 81% 76.3%, 81.8% 77.6%, 82.6% 78.8%, 83.4% 79.9%, 84.2% 81%, 85.1% 82%, 85.9% 83%, 86.8% 83.9%, 87.6% 84.7%, 88.5% 85.5%, 89.4% 86.2%, 90.2% 86.9%, 91.1% 87.4%, 92% 88%, 92.9% 88.4%, 93.8% 88.8%, 94.7% 89.1%, 95.6% 89.3%, 96.5% 89.5%, 97.5% 89.6%, 98.4% 89.6%, 0% 89.6%, 0.9% 89.6%, 1.8% 89.5%, 2.8% 89.3%, 3.7% 89.1%, 4.6% 88.8%, 5.5% 88.4%, 6.4% 88%, 7.3% 87.4%, 8.1% 86.9%, 9% 86.2%, 9.9% 85.5%, 10.8% 84.7%, 11.6% 83.9%, 12.5% 83%, 13.3% 82%, 14.1% 81%, 15% 79.9%, 15.8% 78.8%, 16.6% 77.6%, 17.4% 76.3%, 18.1% 75%, 18.9% 73.6%, 19.7% 72.1%, 20.4% 70.6%, 21.1% 69%, 21.9% 67.4%, 22.6% 65.7%, 23.3% 64%, 23.9% 62.2%, 24.6% 60.4%, 43% 7.3%, 43.4% 6.4%, 43.7% 5.5%, 44.1% 4.7%, 44.5% 3.9%, 44.9% 3.3%, 45.3% 2.6%, 45.7% 2.1%, 46.1% 1.6%, 46.6% 1.2%, 47% 0.8%, 47.4% 0.5%, 47.9% 0.3%, 48.3% 0.1%, 48.7% 0%, 49.2% 0%, 49.6% 0%, 50.1% 0.1%, 50.5% 0.3%, 51% 0.5%, 51.4% 0.8%, 51.8% 1.2%, 52.3% 1.6%, 52.7% 2.1%, 53.1% 2.6%, 53.5% 3.3%, 53.9% 3.9%, 54.3% 4.7%, 54.6% 5.5%, 55% 6.4%)";
				beakWidth = beakBaseWidth;
				beakHeight = beakPointSize;
			} else if (placement === "right") {
				beakClipPath = `polygon(7.3% 43%, 60.4% 24.6%, 62.2% 23.9%, 64% 23.3%, 65.7% 22.6%, 67.4% 21.9%, 69% 21.1%, 70.6% 20.4%, 72.1% 19.7%, 73.6% 18.9%, 75% 18.1%, 76.3% 17.4%, 77.6% 16.6%, 78.8% 15.8%, 79.9% 15%, 81% 14.1%, 82% 13.3%, 83% 12.5%, 83.9% 11.6%, 84.7% 10.8%, 85.5% 9.9%, 86.2% 9%, 86.9% 8.1%, 87.4% 7.3%, 88% 6.4%, 88.4% 5.5%, 88.8% 4.6%, 89.1% 3.7%, 89.3% 2.8%, 89.5% 1.8%, 89.6% 0.9%, 89.6% 0%, 89.6% 98.4%, 89.6% 97.5%, 89.5% 96.5%, 89.3% 95.6%, 89.1% 94.7%, 88.8% 93.8%, 88.4% 92.9%, 88% 92%, 87.4% 91.1%, 86.9% 90.2%, 86.2% 89.4%, 85.5% 88.5%, 84.7% 87.6%, 83.9% 86.8%, 83% 85.9%, 82% 85.1%, 81% 84.2%, 79.9% 83.4%, 78.8% 82.6%, 77.6% 81.8%, 76.3% 81%, 75% 80.2%, 73.6% 79.5%, 72.1% 78.7%, 70.6% 78%, 69% 77.2%, 67.4% 76.5%, 65.7% 75.8%, 64% 75.1%, 62.2% 74.4%, 60.4% 73.8%, 7.3% 55.3%, 6.4% 55%, 5.5% 54.6%, 4.7% 54.3%, 3.9% 53.9%, 3.3% 53.5%, 2.6% 53.1%, 2.1% 52.7%, 1.6% 52.3%, 1.2% 51.8%, 0.8% 51.4%, 0.5% 51%, 0.3% 50.5%, 0.1% 50.1%, 0% 49.6%, 0% 49.2%, 0% 48.7%, 0.1% 48.3%, 0.3% 47.9%, 0.5% 47.4%, 0.8% 47%, 1.2% 46.6%, 1.6% 46.1%, 2.1% 45.7%, 2.6% 45.3%, 3.3% 44.9%, 3.9% 44.5%, 4.7% 44.1%, 5.5% 43.7%, 6.4% 43.4%)`;
				beakWidth = beakPointSize;
				beakHeight = beakBaseWidth;
			} else if (placement === "left") {
				beakClipPath =
					"polygon(82.3% 55.3%, 29.3% 73.8%, 27.4% 74.4%, 25.6% 75.1%, 23.9% 75.8%, 22.2% 76.5%, 20.6% 77.2%, 19% 78%, 17.5% 78.7%, 16.1% 79.5%, 14.7% 80.2%, 13.4% 81%, 12.1% 81.8%, 10.9% 82.6%, 9.7% 83.4%, 8.6% 84.2%, 7.6% 85.1%, 6.6% 85.9%, 5.7% 86.8%, 4.9% 87.6%, 4.1% 88.5%, 3.4% 89.4%, 2.8% 90.2%, 2.2% 91.1%, 1.7% 92%, 1.2% 92.9%, 0.9% 93.8%, 0.6% 94.7%, 0.3% 95.6%, 0.1% 96.5%, 0% 97.5%, 0% 98.4%, 0% 0%, 0% 0.9%, 0.1% 1.8%, 0.3% 2.8%, 0.6% 3.7%, 0.9% 4.6%, 1.2% 5.5%, 1.7% 6.4%, 2.2% 7.3%, 2.8% 8.1%, 3.4% 9%, 4.1% 9.9%, 4.9% 10.8%, 5.7% 11.6%, 6.6% 12.5%, 7.6% 13.3%, 8.6% 14.1%, 9.7% 15%, 10.9% 15.8%, 12.1% 16.6%, 13.4% 17.4%, 14.7% 18.1%, 16.1% 18.9%, 17.5% 19.7%, 19% 20.4%, 20.6% 21.1%, 22.2% 21.9%, 23.9% 22.6%, 25.6% 23.3%, 27.4% 23.9%, 29.3% 24.6%, 82.3% 43%, 83.3% 43.4%, 84.1% 43.7%, 85% 44.1%, 85.7% 44.5%, 86.4% 44.9%, 87% 45.3%, 87.6% 45.7%, 88.1% 46.1%, 88.5% 46.6%, 88.8% 47%, 89.1% 47.4%, 89.4% 47.9%, 89.5% 48.3%, 89.6% 48.7%, 89.6% 49.2%, 89.6% 49.6%, 89.5% 50.1%, 89.4% 50.5%, 89.1% 51%, 88.8% 51.4%, 88.5% 51.8%, 88.1% 52.3%, 87.6% 52.7%, 87% 53.1%, 86.4% 53.5%, 85.7% 53.9%, 85% 54.3%, 84.1% 54.6%, 83.3% 55%)";
				beakWidth = beakPointSize;
				beakHeight = beakBaseWidth;
			}

			const arrowSize = beakBaseWidth;
			const arrowOffset = `-${arrowSize / 2}px`;
			const staticSide = {
				top: "bottom",
				right: "left",
				bottom: "top",
				left: "right",
			}[placement.split("-")[0]];
			const { x: arrowX, y: arrowY } = middlewareData.arrow ?? {};
			Object.assign(this.arrow.style, {
				left: arrowX != null ? `${arrowX}px` : "",
				top: arrowY != null ? `${arrowY}px` : "",
				right: "",
				bottom: "",
				[staticSide as string]: arrowOffset,
			});

			Object.assign(this.beak.style, {
				height: `${beakHeight}px`,
				width: `${beakWidth}px`,
				clipPath: beakClipPath,
				[staticSide as string]: beakOffset,
			});
		}

		requestAnimationFrame(() => this.#updateHoverBridge());
	}

	#updateHoverBridge() {
		if (!this.target) return;

		// Calculates coordinates for a CSS clip-path polygon
		// from the corners of the target box to the corners of the tooltip.
		// Firefox devtools has a nice visualizer if you want to see the polygon.
		const targetRect = this.target.getBoundingClientRect();
		const tooltipRect = this.tooltip.getBoundingClientRect();
		const isVertical =
			this.placement.includes("top") || this.placement.includes("bottom");

		let topLeftX: number;
		let topLeftY: number;
		let topRightX: number;
		let topRightY: number;
		let bottomLeftX: number;
		let bottomLeftY: number;
		let bottomRightX: number;
		let bottomRightY: number;

		if (isVertical) {
			if (targetRect.top < tooltipRect.top) {
				// Target is above the tooltip.
				// Bridge goes from target's bottom to the tooltip' top.
				topLeftX = targetRect.left;
				topLeftY = targetRect.bottom;
				topRightX = targetRect.right;
				topRightY = targetRect.bottom;

				bottomLeftX = tooltipRect.left;
				bottomLeftY = tooltipRect.top;
				bottomRightX = tooltipRect.right;
				bottomRightY = tooltipRect.top;
			} else {
				// Target is below the tooltip.
				// Bridge goes from target's top to the tooltip' bottom.
				topLeftX = tooltipRect.left;
				topLeftY = tooltipRect.bottom;
				topRightX = tooltipRect.right;
				topRightY = tooltipRect.bottom;

				bottomLeftX = targetRect.left;
				bottomLeftY = targetRect.top;
				bottomRightX = targetRect.right;
				bottomRightY = targetRect.top;
			}
		} else {
			if (targetRect.left < tooltipRect.left) {
				// Target is to the left of tooltip.
				// Bridge goes from target's right side to the tooltip' left.
				topLeftX = targetRect.right;
				topLeftY = targetRect.top;
				topRightX = tooltipRect.left;
				topRightY = tooltipRect.top;

				bottomLeftX = targetRect.right;
				bottomLeftY = targetRect.bottom;
				bottomRightX = tooltipRect.left;
				bottomRightY = tooltipRect.bottom;
			} else {
				// Target is to the right of tooltip.
				// Bridge goes from target's left side to the tooltip' right.
				topLeftX = tooltipRect.right;
				topLeftY = tooltipRect.top;
				topRightX = targetRect.left;
				topRightY = targetRect.top;

				bottomLeftX = tooltipRect.right;
				bottomLeftY = tooltipRect.bottom;
				bottomRightX = targetRect.left;
				bottomRightY = targetRect.bottom;
			}
		}

		this.style.setProperty("--_hover-bridge-top-left-x", `${topLeftX}px`);
		this.style.setProperty("--_hover-bridge-top-left-y", `${topLeftY}px`);
		this.style.setProperty("--_hover-bridge-top-right-x", `${topRightX}px`);
		this.style.setProperty("--_hover-bridge-top-right-y", `${topRightY}px`);
		this.style.setProperty("--_hover-bridge-bottom-left-x", `${bottomLeftX}px`);
		this.style.setProperty("--_hover-bridge-bottom-left-y", `${bottomLeftY}px`);
		this.style.setProperty(
			"--_hover-bridge-bottom-right-x",
			`${bottomRightX}px`,
		);
		this.style.setProperty(
			"--_hover-bridge-bottom-right-y",
			`${bottomRightY}px`,
		);
	}

	render() {
		return html`
			<div part="hover-bridge" hidden></div>
			<div part="tooltip" role="tooltip" hidden>
				${this.noArrow
					? nothing
					: html`
							<div part="arrow">
								<div part="beak"></div>
							</div>
						`}
				<slot></slot>
			</div>
		`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"w-tooltip": WarpTooltip;
	}
}

if (!customElements.get("w-tooltip")) {
	customElements.define("w-tooltip", WarpTooltip);
}
