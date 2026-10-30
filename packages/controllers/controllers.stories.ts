import type { Meta, StoryObj } from "@storybook/web-components";
import { html, LitElement } from "lit";

import "../pagination/pagination.js";

import { WarpThemeController } from "./theme-controller.js";

const meta: Meta = {
	title: "Utilities/Controllers",
};

export default meta;

// WarpThemeController
class DbaLogo extends LitElement {
	theme = new WarpThemeController(this);
	render() {
		return html`
			<img
				alt="DBA"
				width="82"
				height="32"
				src="${
					this.theme.value === "dark"
						? "https://assets.vend.com/pkg/@warp-ds/brand-logos/~1/dba-inverted.svg"
						: "https://assets.vend.com/pkg/@warp-ds/brand-logos/~1/dba.svg"
				}"
			/>
		`;
	}
}

if (!customElements.get("dba-logo")) {
	customElements.define("dba-logo", DbaLogo);
}

export const WarpTheme: StoryObj = {
	render() {
		return html` <p>
				This storybook example looks awful, but is here to test that the
				reactive controller does its thing (change the URL of the img tag for
				the DBA logo).
			</p>
			<div style="margin-bottom: 16px">
				<button
					@click=${() => {
						document.documentElement.dataset.wTheme = "light";
					}}
				>
					Set data-w-theme to light
				</button>
				<button
					@click=${() => {
						document.documentElement.dataset.wTheme = "dark";
					}}
				>
					Set data-w-theme to dark
				</button>
			</div>
			<dba-logo></dba-logo>`;
	},
};

// I18nController: document lang -> Lingui -> existing component labels.
export const ReactiveLocalization: StoryObj = {
	render() {
		return html`
			<p>Switch language to refresh the labels without remounting pagination. Use mobile view to see localised text "page 1"/"side 1" etc.</p>
			<button
				@click=${() => {
					document.documentElement.lang = "en";
				}}
			>
				English
			</button>
			<button
				@click=${() => {
					document.documentElement.lang = "nb";
				}}
			>
				Norwegian
			</button>
			<w-pagination
				current-page="5"
				pages="10"
				base-url="?page="
				@click=${(event: Event) => event.preventDefault()}
			></w-pagination>
		`;
	},
};
