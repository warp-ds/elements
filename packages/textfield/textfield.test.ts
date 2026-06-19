import { i18n } from "@lingui/core";
import { userEvent } from "vitest/browser";
import { html } from "lit";
import { expect, test, vi } from "vitest";
import { render } from "vitest-browser-lit";

import "../affix/affix.js";
import "./textfield.js";
import { messages } from "./locales/en/messages.mjs";

// Initialize i18n with English locale for tests
i18n.load("en", messages);
i18n.activate("en");

test("renders the textfield", async () => {
	const component = html`<w-textfield label="Test label"></w-textfield>`;

	const page = render(component);
	await expect.element(page.getByText("Test label")).toBeVisible();
});

test("works as expected in forms", async () => {
	const label = "Test label";
	const component = html`
		<form data-testid="form">
			<w-textfield
				label="${label}"
				name="message"
				value="Hola el Mundo"
			></w-textfield>
		</form>
	`;

	const page = render(component);

	await expect.element(page.getByLabelText(label)).toHaveValue("Hola el Mundo");

	let formData = new FormData(
		page.getByTestId("form").element() as HTMLFormElement,
	);
	expect(formData.get("message")).toBe("Hola el Mundo");

	const inputHandler = vi.fn();
	const changeHandler = vi.fn();
	page.getByLabelText(label).element().addEventListener("input", inputHandler);
	page
		.getByLabelText(label)
		.element()
		.addEventListener("change", changeHandler);

	await page.getByLabelText(label).fill("Hello, World");

	expect(inputHandler).toHaveBeenCalled();
	expect(changeHandler).not.toHaveBeenCalled();

	await userEvent.tab(); // trigger a blur to fire the change event
	expect(changeHandler).toHaveBeenCalled();

	await expect.element(page.getByLabelText(label)).toHaveValue("Hello, World");

	formData = new FormData(
		page.getByTestId("form").element() as HTMLFormElement,
	);
	expect(formData.get("message")).toBe("Hello, World");
});

test("renders help text if provided", async () => {
	const component = html`<w-textfield
		label="Test label"
		help-text="Helpful help text"
	></w-textfield>`;

	const page = render(component);
	await expect.element(page.getByText("Helpful help text")).toBeVisible();
});

test("marks input field as aria-invalid if the invalid prop is true", async () => {
	const component = html`<w-textfield
		label="Test label"
		invalid
		help-text="No, bad input!"
	></w-textfield>`;

	const page = render(component);
	await expect
		.element(page.getByLabelText("Test label"))
		.toHaveAccessibleErrorMessage("No, bad input!");
});

test("marks input field as readonly if the read-only prop is true", async () => {
	const component = html`<w-textfield
		label="Test label"
		read-only
	></w-textfield>`;

	const page = render(component);
	await expect
		.element(page.getByLabelText("Test label"))
		.toHaveAttribute("readonly", "");
});

test("renders affix component in the prefix slot", async () => {
	const component = html`
		<w-textfield label="Test label">
			<w-affix slot="prefix" label="kr"></w-affix>
		</w-textfield>
	`;

	const page = render(component);
	await expect.element(page.getByText("kr")).toBeVisible();
});

test("renders affix component in the suffix slot", async () => {
	const component = html`
		<w-textfield label="Test label">
			<w-affix slot="suffix" label="kr"></w-affix>
		</w-textfield>
	`;

	const page = render(component);
	await expect.element(page.getByText("kr")).toBeVisible();
});

test("renders with no autocomplete attribute when none provided", async () => {
	const component = html`<w-textfield data-testid="textfield"></w-textfield>`;

	const page = render(component);
	const locator = page.getByTestId("textfield");

	await expect.element(locator).toBeVisible();

	const el = (await locator.element()) as HTMLElement;
	expect(el.hasAttribute("autocomplete")).toBe(false);

	expect(
		el.shadowRoot!.querySelector("input")!.hasAttribute("autocomplete"),
	).toBe(false);
});

test("defaults to text type when no type attribute is set", async () => {
	const component = html`<w-textfield
		data-testid="textfield"
		label="Test"
	></w-textfield>`;

	const page = render(component);
	const el = page.getByTestId("textfield").element() as HTMLElement;

	// The type attribute should not be reflected on the host (to avoid hydration mismatch)
	expect(el.hasAttribute("type")).toBe(false);

	// But the inner input should have type="text" as the default
	await expect
		.poll(() => {
			const input = el.shadowRoot?.querySelector("input");
			return input?.getAttribute("type");
		})
		.toBe("text");
});

test("uses specified type when type attribute is set", async () => {
	const component = html`<w-textfield
		data-testid="textfield"
		label="Email"
		type="email"
	></w-textfield>`;

	const page = render(component);
	const el = page.getByTestId("textfield").element() as HTMLElement;

	// The inner input should have the specified type
	await expect
		.poll(() => {
			const input = el.shadowRoot?.querySelector("input");
			return input?.getAttribute("type");
		})
		.toBe("email");
});

test("submits the associated form when input has focus and user presses Enter", async () => {
	const screen = render(html`
		<form>
			<w-textfield
				data-testid="textfield"
				name="test"
				value="Submit this!"
			></w-textfield>
			<button type="submit">Submit</button>
		</form>
	`);

	const onSubmit = vi.fn();
	const form = document.querySelector("form") as HTMLFormElement;
	form.addEventListener("submit", (event) => {
		event.preventDefault();
		onSubmit();
	});

	await userEvent.click(screen.getByTestId("textfield"));
	await userEvent.keyboard("{Enter}");

	expect(onSubmit).toHaveBeenCalled();
});

test("renders optional indicator as 'Optional' without parentheses", async () => {
	const page = render(
		html`<w-textfield label="Email" optional></w-textfield>`,
	);

	await expect.element(page.getByText("Optional")).toBeVisible();
	expect(page.getByText("(optional)").query()).toBeNull();
});

test("does not render optional indicator when both required and optional are set", async () => {
	const page = render(
		html`<w-textfield label="Email" required optional></w-textfield>`,
	);

	await expect.element(page.getByText("Email")).toBeVisible();
	expect(page.getByText("Optional").query()).toBeNull();
});

test("includes optional indicator in the accessible name", async () => {
	const page = render(
		html`<w-textfield label="Email" optional></w-textfield>`,
	);

	await expect
		.element(page.getByRole("textbox", { name: /Email.*Optional/ }))
		.toBeVisible();
});

test("removes optional indicator when required is added dynamically", async () => {
	const page = render(
		html`<w-textfield label="Email" optional data-testid="field"></w-textfield>`,
	);

	await expect.element(page.getByText("Optional")).toBeVisible();

	const el = page.getByTestId("field").element() as HTMLElement & {
		required: boolean;
		updateComplete: Promise<unknown>;
	};
	el.required = true;
	await el.updateComplete;

	expect(page.getByText("Optional").query()).toBeNull();
});

test("shows optional indicator when required is removed dynamically", async () => {
	const page = render(
		html`<w-textfield
			label="Email"
			required
			optional
			data-testid="field"
		></w-textfield>`,
	);

	expect(page.getByText("Optional").query()).toBeNull();

	const el = page.getByTestId("field").element() as HTMLElement & {
		required: boolean;
		updateComplete: Promise<unknown>;
	};
	el.required = false;
	await el.updateComplete;

	await expect.element(page.getByText("Optional")).toBeVisible();
});

test("does not render optional indicator when there is no label", async () => {
	const page = render(
		html`<w-textfield aria-label="Email" optional></w-textfield>`,
	);

	await expect.element(page.getByLabelText("Email")).toBeVisible();
	expect(page.getByText("Optional").query()).toBeNull();
});
