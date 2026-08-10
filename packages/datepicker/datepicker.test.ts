import { html } from "lit";
import { expect, test, vi } from "vitest";
import { server, userEvent } from "vitest/browser";
import { render } from "vitest-browser-lit";

import "../button/button.js";
import "./datepicker.js";
import type { WarpDatepicker } from "./datepicker.js";

test("can pick a date using a pointer", async () => {
	const component = html`
		<form data-testid="flight">
			<w-datepicker label="From date" name="from"></w-datepicker>
		</form>
	`;

	const page = render(component);

	await expect.element(page.getByLabelText("From date")).not.toHaveValue();

	await expect.element(page.getByTestId("calendar").query()).not.toBeVisible();
	await page.getByRole("button").click({ force: true });

	await expect.element(page.getByTestId("calendar")).toBeVisible();

	await page.getByRole("gridcell").nth(15).click();

	await expect
		.element(page.getByTestId("calendar").query(), {
			message: "expected calendar to close after clicking a date",
		})
		.not.toBeVisible();

	await expect.element(page.getByLabelText("From date")).toHaveValue();

	const formData = new FormData(
		page.getByTestId("flight").element() as HTMLFormElement,
	);
	expect(formData.get("from")).toBeTruthy();
});

test.skipIf(server.browser === "firefox")(
	"can pick a date using a keyboard",
	async () => {
		const component = html`
			<form data-testid="flight">
				<w-datepicker label="From date" name="from"></w-datepicker>
			</form>
		`;

		const page = render(component);

		await expect.element(page.getByLabelText("From date")).not.toHaveValue();

		await expect
			.element(page.getByTestId("calendar").query())
			.not.toBeVisible();

		const toggle = page.getByRole("button").element() as HTMLButtonElement;
		toggle.focus();

		await userEvent.keyboard("[Enter]");
		await expect.element(page.getByTestId("calendar")).toBeVisible();

		(
			page.getByRole("gridcell").nth(15).element() as HTMLTableCellElement
		).focus();
		await userEvent.keyboard("[Enter]");

		await expect
			.element(page.getByTestId("calendar").query(), {
				message: "expected calendar to close after clicking a date",
			})
			.not.toBeVisible();

		await expect.element(page.getByLabelText("From date")).toHaveValue();

		const formData = new FormData(
			page.getByTestId("flight").element() as HTMLFormElement,
		);
		expect(formData.get("from")).toBeTruthy();
	},
);

test("can pick a date by typing in the input field", async () => {
	const component = html`
		<form data-testid="flight">
			<w-datepicker label="From date" name="from" lang="nb"></w-datepicker>
		</form>
	`;

	const page = render(component);

	await expect.element(page.getByLabelText("From date")).not.toHaveValue();

	const toggle = page.getByLabelText("From date").element() as HTMLInputElement;
	toggle.focus();

	await page.getByLabelText("From date").fill("2025-01-01");
	await expect.element(page.getByLabelText("From date")).toHaveValue();

	const formData = new FormData(
		page.getByTestId("flight").element() as HTMLFormElement,
	);
	expect(formData.get("from")).toBeTruthy();
});

test("can reset datepicker by resetting surrounding form", async () => {
	const label = "Test label";

	render(html`
		<form>
			<w-datepicker label=${label} name="test" value="2025-01-01">
			</w-datepicker>
		</form>
	`);

	const form = document.querySelector("form") as HTMLFormElement;
	const wDatepicker = document.querySelector("w-datepicker") as HTMLElement & {
		value: string;
	};

	// sanity
	expect(form).not.toBeNull();
	expect(wDatepicker).not.toBeNull();

	// Initial value is "2025-01-01"
	expect(wDatepicker.value).toBe("2025-01-01");

	// Change the value to "definitely not 2025-01-01"
	wDatepicker.value = "definitely not 2025-01-01";
	expect(wDatepicker.value).toBe("definitely not 2025-01-01");

	// Reset the form
	form.reset();

	// Value should be reset back to "2025-01-01"
	expect(wDatepicker.value).toBe("2025-01-01");
});

test("submits the associated form when datepicker input field has focus and user presses Enter", async () => {
	const screen = render(html`
		<form>
			<w-datepicker label="Date" data-testid="datepicker" value="2025-01-01">
			</w-datepicker>
			<button type="submit">Submit</button>
		</form>
	`);

	const onSubmit = vi.fn();
	const form = document.querySelector("form") as HTMLFormElement;
	form.addEventListener("submit", (event) => {
		event.preventDefault();
		onSubmit();
	});

	await userEvent.click(screen.getByTestId("datepicker"));
	await userEvent.keyboard("[Enter]");

	await vi.waitFor(() => expect(onSubmit).toHaveBeenCalled());
});

test("renders help text if provided", async () => {
	const component = html`
		<w-datepicker
			label="Date"
			data-testid="datepicker"
			value="2025-01-01"
			help-text="Helpful help text"
		>
		</w-datepicker>
	`;

	const page = render(component);
	await expect.element(page.getByText("Helpful help text")).toBeVisible();
});

test("marks input field as aria-invalid if the invalid prop is true", async () => {
	const component = html`
		<w-datepicker
			label="Test label"
			invalid
			help-text="No, bad input!"
		></w-datepicker>
	`;

	const page = render(component);
	await expect
		.element(page.getByLabelText("Test label"))
		.toHaveAccessibleErrorMessage("No, bad input!");
	await expect
		.element(page.getByLabelText("Test label"))
		.toHaveAttribute("aria-invalid", "true");
});

test("aria-invalid attribute is absent when input is valid", async () => {
	const component = html`
		<w-datepicker label="Test label" help-text="Good input!"></w-datepicker>
	`;

	const page = render(component);
	const input = page.getByLabelText("Test label");

	await expect.element(input).toBeVisible();

	// aria-invalid should NOT be present when valid
	await expect.element(input).not.toHaveAttribute("aria-invalid");
});

test("marks input field as readonly if the readonly prop is true", async () => {
	const component = html`<w-datepicker
		label="Test label"
		readonly
	></w-datepicker>`;

	const page = render(component);
	await expect
		.element(page.getByLabelText("Test label"))
		.toHaveAttribute("readonly", "");
});

test("can reset datepicker by resetting surrounding form", async () => {
	render(html`
		<form>
			<w-datepicker label="Test label" value="2026-07-09"></w-datepicker>
		</form>
	`);

	const form = document.querySelector("form");
	const input = document.querySelector("w-datepicker") as WarpDatepicker;

	await expect.poll(() => input.value).toBe("2026-07-09");

	input.value = "2025-01-13";
	await expect.poll(() => input.value).toBe("2025-01-13");

	// Reset the form to its initial value
	form!.reset();
	await expect.poll(() => input.value).toBe("2026-07-09");
});

test("when required checkValidity returns false if empty", async () => {
	render(html`<w-datepicker label="Test label" required></w-datepicker>`);

	const input = document.querySelector("w-datepicker") as WarpDatepicker;

	// Wait for component to be ready
	await expect.poll(() => input.checkValidity()).toBe(false);
	expect(input.validity.valueMissing).toBe(true);
	expect(input.validationMessage).not.toBe("");
});

test("when required checkValidity returns true if the field has a value", async () => {
	render(html`
		<w-datepicker label="Test label" required value="2026-07-09">
		</w-datepicker>
	`);

	const input = document.querySelector("w-datepicker") as WarpDatepicker;

	// Wait for component to be ready
	await expect.poll(() => input.checkValidity()).toBe(true);
	expect(input.validity.valid).toBe(true);
});

test("form submission is blocked when required datepicker is empty", async () => {
	const submitHandler = vi.fn((e: Event) => e.preventDefault());

	render(html`
		<form data-testid="form">
			<w-datepicker label="Test label" required name="test"></w-datepicker>
			<button type="submit">Submit</button>
		</form>
	`);

	const form = document.querySelector("form") as HTMLFormElement;
	form.addEventListener("submit", submitHandler);

	const input = document.querySelector("w-datepicker") as WarpDatepicker;

	// Wait for component to be ready
	await expect.poll(() => input.checkValidity()).toBe(false);

	// Try to submit - should be blocked by validation
	const submitButton = document.querySelector("button") as HTMLButtonElement;
	submitButton.click();

	// Component should show invalid state with error message
	await expect.poll(() => input.invalid).toBe(true);
	await expect.poll(() => input.helpText).not.toBe("");

	// Form should not have been submitted
	expect(submitHandler).not.toHaveBeenCalled();
});

test("form submission succeeds when required textarea has a value", async () => {
	const submitHandler = vi.fn((e: Event) => e.preventDefault());

	render(html`
		<form data-testid="form">
			<w-datepicker
				label="Test label"
				required
				name="test"
				value="2026-07-09"
			></w-datepicker>
			<button type="submit">Submit</button>
		</form>
	`);

	const form = document.querySelector("form") as HTMLFormElement;
	form.addEventListener("submit", submitHandler);

	const input = document.querySelector("w-datepicker") as WarpDatepicker;

	// Wait for component to be ready
	await expect.poll(() => input.checkValidity()).toBe(true);

	// Submit should succeed
	const submitButton = document.querySelector("button") as HTMLButtonElement;
	submitButton.click();

	// Form should have been submitted
	await expect.poll(() => submitHandler.mock.calls.length).toBeGreaterThan(0);
});

test.skipIf(server.browser === "firefox")(
	"shows validation error on blur when required field is empty",
	async () => {
		const page = render(
			html`<w-datepicker
				label="Test label"
				required
				name="test"
			></w-datepicker>`,
		);

		const input = document.querySelector("w-datepicker") as WarpDatepicker;

		// Initially should not show error (no interaction yet)
		await expect.poll(() => input.invalid).toBeFalsy();

		// Focus and blur the input
		await page.getByLabelText("Test label").click();
		await userEvent.tab(); // blur from yyyy
		await userEvent.tab(); // blur from mm
		await userEvent.tab(); // blur from dd

		// Should now show validation error
		await expect.poll(() => input.invalid).toBe(true);
		await expect.poll(() => input.helpText).not.toBe("");
	},
);

test.skipIf(server.browser === "firefox")(
	"restores original help text when validation passes",
	async () => {
		const page = render(html`
			<w-datepicker
				label="Test label"
				required
				name="test"
				help-text="Enter your date"
			></w-datepicker>
		`);

		const input = document.querySelector("w-datepicker") as WarpDatepicker;

		// Initially should show original help text
		await expect.poll(() => input.helpText).toBe("Enter your date");

		// Focus and blur to trigger validation
		const textarea = page.getByLabelText("Test label");
		await textarea.click();
		await userEvent.tab(); // blur from yyyy
		await userEvent.tab(); // blur from mm
		await userEvent.tab(); // blur from dd

		// Should show validation error
		await expect.poll(() => input.invalid).toBe(true);
		await expect.poll(() => input.helpText).not.toBe("Enter your date");

		// Fill in a value
		input.value = "2026-07-09";
		await input.updateComplete;

		// Wait for value + validity to update, then restore original help text
		await expect.poll(() => input.value).toBe("2026-07-09");
		await expect.poll(() => input.checkValidity()).toBe(true);
		await expect.poll(() => input.invalid).toBe(false);
		await expect.poll(() => input.helpText).toBe("Enter your date");
	},
);
