import { html } from "lit";

import { expect, test } from "vitest";
import { server, userEvent } from "vitest/browser";
import { render } from "vitest-browser-lit";

import "../button/button.js";
import "./tooltip.js";

test("tooltip is not shown by default", async () => {
	// We wrap the contents in a span here so the test Locator can find an element
	// that is not the w-tooltip itself for visibility testsing.
	const component = html`
		<w-button id="test-button" aria-labelledby="test-tooltip">Button</w-button>
		<w-tooltip id="test-tooltip" for="test-button">
			<span>Tooltip contents</span>
		</w-tooltip>
	`;

	const page = render(component);

	expect(page.getByText("Tooltip contents")).not.toBeVisible();
});

test("tooltip with open property is shown by default", async () => {
	// We wrap the contents in a span here so the test Locator can find an element
	// that is not the w-tooltip itself for visibility testsing.
	const component = html`
		<w-button id="test-button" aria-labelledby="test-tooltip">Button</w-button>
		<w-tooltip id="test-tooltip" for="test-button" open>
			<span>Tooltip contents</span>
		</w-tooltip>
	`;

	const page = render(component);
	await expect.element(page.getByText("Tooltip contents")).toBeVisible();
});

test("tooltip has an accessible description of its appearance and arrow direction", async () => {
	const component = html`
		<w-button id="test-button" aria-labelledby="test-tooltip">Button</w-button>
		<w-tooltip id="test-tooltip" for="test-button" open>
			Tooltip contents
		</w-tooltip>
	`;

	const page = render(component);

	await expect
		.element(page.getByRole("tooltip"))
		.toHaveAccessibleDescription(
			"A black speech bubble providing complementary information pointing down",
		);
});

test("tooltip's accessible description does not include arrow direction if the tooltip has the no-arrow property", async () => {
	const component = html`
		<w-button id="test-button" aria-labelledby="test-tooltip">Button</w-button>
		<w-tooltip id="test-tooltip" for="test-button" open no-arrow>
			Tooltip contents
		</w-tooltip>
	`;

	const page = render(component);

	await expect
		.element(page.getByRole("tooltip"))
		.toHaveAccessibleDescription(
			"A black speech bubble providing complementary information",
		);
});

test("tooltip opens when its target gets hovered", async () => {
	// We wrap the contents in a span here so the test Locator can find an element
	// that is not the w-tooltip itself for visibility testsing.
	const component = html`
		<w-button id="test-button" aria-labelledby="test-tooltip">Button</w-button>
		<w-tooltip id="test-tooltip" for="test-button">
			<span>Tooltip contents</span>
		</w-tooltip>
	`;

	const page = render(component);
	await expect.element(page.getByText("Tooltip contents")).not.toBeVisible();

	await userEvent.hover(page.getByRole("button"));

	await expect.element(page.getByText("Tooltip contents")).toBeVisible();
});

test("tooltip closes when its target gets unhovered, except when the tooltip itself gets hovered", async () => {
	// We wrap the contents in a span here so the test Locator can find an element
	// that is not the w-tooltip itself for visibility testsing.
	const component = html`
		<w-button id="test-button" aria-labelledby="test-tooltip">Button</w-button>
		<w-tooltip id="test-tooltip" for="test-button">
			<span data-testid="contents">Tooltip contents</span>
		</w-tooltip>
	`;

	const page = render(component);
	await expect.element(page.getByText("Tooltip contents")).not.toBeVisible();

	await userEvent.hover(page.getByRole("button"));
	await expect.element(page.getByText("Tooltip contents")).toBeVisible();

	await userEvent.hover(page.getByTestId("contents"));
	await expect.element(page.getByText("Tooltip contents")).toBeVisible();

	await userEvent.unhover(page.getByTestId("contents"));
	await expect.element(page.getByText("Tooltip contents")).not.toBeVisible();
});

test("tooltip opens when its target gets focus", async () => {
	// We wrap the contents in a span here so the test Locator can find an element
	// that is not the w-tooltip itself for visibility testsing.
	const component = html`
		<w-button id="test-button" aria-labelledby="test-tooltip">Button</w-button>
		<w-tooltip id="test-tooltip" for="test-button">
			<span>Tooltip contents</span>
		</w-tooltip>
	`;

	const page = render(component);
	await expect.element(page.getByText("Tooltip contents")).not.toBeVisible();

	await userEvent.keyboard("[Tab]"); // focus!

	await expect.element(page.getByText("Tooltip contents")).toBeVisible();
});

// tested OK manually in Firefox 152
test.skipIf(server.browser === "firefox")("tooltip hides on blur", async () => {
	// We wrap the contents in a span here so the test Locator can find an element
	// that is not the w-tooltip itself for visibility testsing.
	const component = html`
		<w-button id="test-button" aria-labelledby="test-tooltip">Button</w-button>
		<w-tooltip id="test-tooltip" for="test-button">
			<span>Tooltip contents</span>
		</w-tooltip>
	`;

	const page = render(component);
	await expect.element(page.getByText("Tooltip contents")).not.toBeVisible();

	await userEvent.keyboard("[Tab]"); // focus!
	await userEvent.keyboard("[Tab]"); // blur!

	await expect.element(page.getByText("Tooltip contents")).not.toBeVisible();
});

test("tooltip can be dismissed with the Escape key", async () => {
	// We wrap the contents in a span here so the test Locator can find an element
	// that is not the w-tooltip itself for visibility testsing.
	const component = html`
		<w-button id="test-button" aria-labelledby="test-tooltip">Button</w-button>
		<w-tooltip id="test-tooltip" for="test-button" open>
			<span>Tooltip contents</span>
		</w-tooltip>
	`;

	const page = render(component);
	await expect.element(page.getByText("Tooltip contents")).toBeVisible();

	await userEvent.keyboard("[Escape]");

	await expect.element(page.getByText("Tooltip contents")).not.toBeVisible();
});
