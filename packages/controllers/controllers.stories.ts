import type { Meta, StoryObj } from "@storybook/web-components";
import { html, LitElement } from "lit";

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
