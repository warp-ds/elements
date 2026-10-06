import { ReactiveController, ReactiveControllerHost } from "lit";
import { getWarpTheme } from "../apply-theme.js";

/**
 * Use if you need to conditionally render content based on Warp's light or dark themes, for example images.
 * Lit will rerender your component whenever the value changes.
 *
 * ```ts
 *	import { html, LitElement } from "lit";
 *	import { WarpThemeController } from "@warp-ds/elements";
 *
 *	export class DbaLogo extends LitElement {
 *		theme = new WarpThemeController(this);
 *
 *		render() {
 *			return html`
 *				<img
 *					alt="DBA"
 *					width="82"
 *					height="32"
 *					src="${this.theme.value === "dark"
 *						? "https://assets.vend.com/pkg/@warp-ds/brand-logos/~1/dba-inverted.svg"
 *						: "https://assets.vend.com/pkg/@warp-ds/brand-logos/~1/dba.svg"}"
 *				/>
 *			`;
 *		}
 *	}
 *
 *	if (!customElements.get("dba-logo")) {
 *		customElements.define("dba-logo", DbaLogo);
 *	}
 * ```
 */
export class WarpThemeController implements ReactiveController {
	host: ReactiveControllerHost;

	value: "light" | "dark" = getWarpTheme() || "light";
	private _observer?: MutationObserver;

	constructor(host: ReactiveControllerHost) {
		(this.host = host).addController(this);
	}

	hostConnected() {
		// Start a MutationObserver when the host is connected
		this._observer = new MutationObserver(() => {
			this.value = document.documentElement.dataset.wTheme as "light" | "dark";
			// Update the host with new value
			this.host.requestUpdate();
		});
		this._observer.observe(document.documentElement, {
			attributeFilter: ["data-w-theme"],
		});
	}

	hostDisconnected() {
		this._observer?.disconnect();
		this._observer = undefined;
	}
}
