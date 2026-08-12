import { html } from "lit";

import { expect, test } from "vitest";
import { render } from "vitest-browser-lit";
import "./box.js";

test("renders the slotted label", async () => {
	const component = html`<w-box>This is not a button</w-box>`;

	const page = render(component);
	await expect.element(page.getByText("This is not a button")).toBeVisible();
});

test("supports styling through component tokens", async () => {
	const component = html`
		<w-box
			data-testid="box"
			style="--w-c-box-bg: rgb(1, 2, 3); --w-c-box-border-color: rgb(4, 5, 6); --w-c-box-border-radius: 13px; --w-c-box-border-width: 3px; --w-c-box-padding: 21px;"
		>
			Styled box
		</w-box>
	`;

	const page = render(component);
	const el = page.getByTestId("box").element() as HTMLElement;

	await expect
		.poll(() => {
			const base = el.shadowRoot?.querySelector('[part="base"]') as
				| HTMLElement
				| null;
			if (!base) return null;

			const style = getComputedStyle(base);
			return {
				backgroundColor: style.backgroundColor,
				borderColor: style.borderColor,
				borderRadius: style.borderRadius,
				borderWidth: style.borderTopWidth,
				padding: style.paddingTop,
			};
		})
		.toEqual({
			backgroundColor: "rgb(1, 2, 3)",
			borderColor: "rgb(4, 5, 6)",
			borderRadius: "13px",
			borderWidth: "3px",
			padding: "21px",
		});
});

test("supports styling through the base part", async () => {
	const component = html`
		<style>
			w-box::part(base) {
				background-color: rgb(7, 8, 9);
				border-radius: 17px;
			}
		</style>
		<w-box data-testid="box">Part styled box</w-box>
	`;

	const page = render(component);
	const el = page.getByTestId("box").element() as HTMLElement;

	await expect
		.poll(() => {
			const base = el.shadowRoot?.querySelector('[part="base"]') as
				| HTMLElement
				| null;
			if (!base) return null;

			const style = getComputedStyle(base);
			return {
				backgroundColor: style.backgroundColor,
				borderRadius: style.borderRadius,
			};
		})
		.toEqual({
			backgroundColor: "rgb(7, 8, 9)",
			borderRadius: "17px",
		});
});
