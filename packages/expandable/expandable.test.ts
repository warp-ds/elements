import { html } from "lit";

import { expect, test } from "vitest";
import { render } from "vitest-browser-lit";

import "./expandable.js";

test("renders the given title prop and hides the slotted content", async () => {
	const component = html`
		<w-expandable title="I'm expandable">
			<p>with expanded content</p>
		</w-expandable>
	`;

	const page = render(component);
	await expect.element(page.getByText("I'm expandable")).toBeVisible();
	await expect
		.element(page.getByText("with expanded content"))
		.not.toBeVisible();
});

test("exposes the base CSS part", async () => {
	const component = html`
		<w-expandable title="I'm expandable">
			<p>with expanded content</p>
		</w-expandable>
	`;

	const page = render(component);
	await expect.element(page.getByText("I'm expandable")).toBeVisible();

	const shadowRoot = document.querySelector("w-expandable")?.shadowRoot;
	expect(shadowRoot?.querySelector('[part="base"]')).toBeTruthy();
});

test("supports styling through component tokens", async () => {
	const component = html`
		<w-expandable
			data-testid="expandable"
			title="Styled expandable"
			style="--w-c-expandable-bg: rgb(1, 2, 3); --w-c-expandable-border-color: rgb(4, 5, 6); --w-c-expandable-border-radius: 13px; --w-c-expandable-border-width: 3px; --w-c-expandable-padding-x: 21px; --w-c-expandable-padding-y: 22px;"
		>
			<p>Expandable content</p>
		</w-expandable>
	`;

	const page = render(component);
	const el = page.getByTestId("expandable").element() as HTMLElement;

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
				paddingLeft: style.paddingLeft,
				paddingTop: style.paddingTop,
			};
		})
		.toEqual({
			backgroundColor: "rgb(1, 2, 3)",
			borderColor: "rgb(4, 5, 6)",
			borderRadius: "13px",
			borderWidth: "3px",
			paddingLeft: "21px",
			paddingTop: "22px",
		});
});

test("supports styling through the base part", async () => {
	const component = html`
		<style>
			w-expandable::part(base) {
				background-color: rgb(7, 8, 9);
				border-radius: 17px;
			}
		</style>
		<w-expandable data-testid="expandable" title="Part styled expandable">
			<p>Expandable content</p>
		</w-expandable>
	`;

	const page = render(component);
	const el = page.getByTestId("expandable").element() as HTMLElement;

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

test("does not render a chevron when no-chevron is set", async () => {
	const component = html`
		<w-expandable data-testid="expandable" title="No chevron" no-chevron>
			<p>Expandable content</p>
		</w-expandable>
	`;

	const page = render(component);
	const el = page.getByTestId("expandable").element() as HTMLElement;

	await expect
		.poll(() => el.shadowRoot?.querySelector('[part="chevron"]') ?? null)
		.toBe(null);
});

test("clicking the expandable shows the slotted content", async () => {
	const component = html`
		<w-expandable title="I'm expandable">
			<p>with expanded content</p>
		</w-expandable>
	`;

	const page = render(component);
	await page.getByRole("button").click();
	await expect.element(page.getByText("with expanded content")).toBeVisible();
});
