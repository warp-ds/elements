import { html, LitElement, type TemplateResult } from "lit";
import { property, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { styles } from "./style.js";

type PixelValue = `${number}px`;

// Module-level caches shared across all <w-icon> instances on the page.
// _svgCache: resolved SVGElements (null = failed fetch, kept to avoid retries).
// _fetchMap: in-flight promises, so N simultaneous icons with the same name
//            issue exactly one HTTP request and all await the same promise.
const _svgCache = new Map<string, SVGElement | null>();
const _fetchMap = new Map<string, Promise<SVGElement | null>>();

function buildIconUrl(name: string, locale: string): string {
	return `https://assets.finn.no/pkg/eikons/~1/${locale}/${name}.svg`;
}

function parseSvg(text: string): SVGElement | null {
	const doc = new DOMParser().parseFromString(text, "image/svg+xml");
	if (doc.querySelector("parsererror")) return null;
	return doc.querySelector("svg");
}

function fetchIcon(url: string): Promise<SVGElement | null> {
	if (_svgCache.has(url)) return Promise.resolve(_svgCache.get(url) ?? null);
	const pending = _fetchMap.get(url);
	if (pending !== undefined) return pending;

	const promise = fetch(url)
		.then((res) => {
			if (!res.ok) throw new Error(`HTTP ${res.status}`);
			return res.text();
		})
		.then((text) => {
			const svg = parseSvg(text);
			_svgCache.set(url, svg);
			return svg;
		})
		.catch(() => {
			_svgCache.set(url, null);
			return null;
		})
		.finally(() => {
			_fetchMap.delete(url);
		});

	_fetchMap.set(url, promise);
	return promise;
}

/**
 * [Warp component reference](https://warp-ds.github.io/docs/components/icons/frameworks/elements)
 */
export class WarpIcon extends LitElement {
	static styles = [styles];

	/** Icon filename (without .svg) */
	@property({ type: String, reflect: true })
	name!: string;

	/**
	 * Size: small, medium, large or pixel value (e.g. "32px").
	 *
	 * @default "medium"
	 */
	@property({ type: String, reflect: true })
	size: "small" | "medium" | "large" | PixelValue | undefined;

	/**
	 * Locale used for `<title>` text.
	 *
	 * Reads the `lang` attribute from `<html>`, falls back to 'en'.
	 */
	@property({ type: String, reflect: true, useDefault: true })
	locale: string = document.documentElement.lang || "en";

	@state()
	private svg: SVGElement | null = null;

	@state()
	private _ready = false;

	// Minted fresh on each loadIcon() call. If name/locale changes while a
	// fetch is in flight the stale response sees a mismatched token and is
	// discarded, preventing it from overwriting the current icon.
	private _loadToken: symbol | null = null;

	protected updated(changedProps: Map<string, unknown>): void {
		if (changedProps.has("name") || changedProps.has("locale")) {
			void this.loadIcon();
		}
	}

	private async loadIcon(): Promise<void> {
		if (!this.name) {
			this.svg = null;
			this._ready = false;
			return;
		}

		const url = buildIconUrl(this.name, this.locale);
		const token = Symbol();
		this._loadToken = token;
		this._ready = false;

		const svg = await fetchIcon(url);

		if (this._loadToken !== token) return;

		if (svg) {
			this.svg = svg.cloneNode(true) as SVGElement;
			this._ready = true;
		} else {
			this.svg = null;
		}
	}

	render(): TemplateResult {
		const size = this.size || "medium";
		const name = this.name || "";
		const classes = {
			"w-icon": true,
			"w-icon--ready": this._ready,
			"w-icon--s": size === "small",
			"w-icon--m": size === "medium",
			"w-icon--l": size === "large",
		};
		const customStyle =
			typeof size === "string" && size.endsWith("px")
				? `--w-icon-size: ${size};`
				: "";
		return html`<div
			class="${classMap(classes)}"
			style="${customStyle}"
			part="w-${name.toLowerCase()}"
		>
			${this.svg}
		</div>`;
	}
}

/** @deprecated Exported for backwards compatibility. Use WarpIcon. */
export const WIcon = WarpIcon;

declare global {
	interface HTMLElementTagNameMap {
		"w-icon": WarpIcon;
	}
}

if (!customElements.get("w-icon")) {
	customElements.define("w-icon", WarpIcon);
}
