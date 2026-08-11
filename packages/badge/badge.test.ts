import { html } from "lit";

import { expect, test } from "vitest";
import { render } from "vitest-browser-lit";
import "./badge.js";

test("renders the slotted label", async () => {
	const component = html`<w-badge>This is also not a button</w-badge>`;

	const page = render(component);
	await expect
		.element(page.getByText("This is also not a button"))
		.toBeVisible();
});

test("defaults to neutral variant when no variant attribute is set", async () => {
	const component = html`
		<w-badge data-testid="default-badge">Default badge</w-badge>
		<w-badge data-testid="neutral-badge" variant="neutral"
			>Neutral badge</w-badge
		>
	`;

	const page = render(component);
	const defaultBadge = page.getByTestId("default-badge").element() as HTMLElement;
	const neutralBadge = page.getByTestId("neutral-badge").element() as HTMLElement;

	// The variant attribute should not be reflected (to avoid hydration mismatch)
	expect(defaultBadge.hasAttribute("variant")).toBe(false);

	// But the neutral styles should still be applied
	await expect
		.poll(() => {
			const defaultBase = defaultBadge.shadowRoot?.querySelector(
				'[part="base"]',
			) as HTMLElement | null;
			const neutralBase = neutralBadge.shadowRoot?.querySelector(
				'[part="base"]',
			) as HTMLElement | null;

			if (!defaultBase || !neutralBase) return null;

			const defaultStyle = getComputedStyle(defaultBase);
			const neutralStyle = getComputedStyle(neutralBase);

			return {
				backgroundColor: defaultStyle.backgroundColor,
				color: defaultStyle.color,
				matchesNeutral:
					defaultStyle.backgroundColor === neutralStyle.backgroundColor &&
					defaultStyle.color === neutralStyle.color,
			};
		})
		.toEqual({
			backgroundColor: expect.any(String),
			color: expect.any(String),
			matchesNeutral: true,
		});
});

test("supports styling through component tokens", async () => {
	const component = html`
		<w-badge
			data-testid="badge"
			style="--w-c-badge-bg: rgb(1, 2, 3); --w-c-badge-color: rgb(4, 5, 6); --w-c-badge-border-radius: 13px;"
		>
			Styled badge
		</w-badge>
	`;

	const page = render(component);
	const el = page.getByTestId("badge").element() as HTMLElement;

	await expect
		.poll(() => {
			const base = el.shadowRoot?.querySelector('[part="base"]') as
				| HTMLElement
				| null;
			if (!base) return null;

			const style = getComputedStyle(base);
			return {
				backgroundColor: style.backgroundColor,
				color: style.color,
				borderRadius: style.borderRadius,
			};
		})
		.toEqual({
			backgroundColor: "rgb(1, 2, 3)",
			color: "rgb(4, 5, 6)",
			borderRadius: "13px",
		});
});

test("supports styling through the base part", async () => {
	const component = html`
		<style>
			w-badge::part(base) {
				background-color: rgb(7, 8, 9);
				border-radius: 17px;
			}
		</style>
		<w-badge data-testid="badge">Part styled badge</w-badge>
	`;

	const page = render(component);
	const el = page.getByTestId("badge").element() as HTMLElement;

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
