import { html } from "lit";
import { expect, test } from "vitest";
import { render } from "vitest-browser-lit";

import "./switch.js";

test("can reset switch by resetting surrounding form", async () => {
	const label = "Test label";

	render(html`
		<form>
			<w-switch label=${label} name="test" value="some value" checked>
			</w-switch>
		</form>
	`);

	const form = document.querySelector("form")!;
	const wSwitch = document.querySelector("w-switch")!;

	// sanity
	expect(form).not.toBeNull();
	expect(wSwitch).not.toBeNull();

	// Initial value is "some value"
	expect(wSwitch.value).toBe("some value");

	// value should be associated with the form
	const data = new FormData(form);
	expect([...data.entries()].length).toBe(1);

	// uncheck
	wSwitch.checked = false;
	await wSwitch.updateComplete;

	// value should no longer be associated with the form
	const data2 = new FormData(form);
	expect([...data2.entries()].length).toBe(0);

	// Reset the form
	form.reset();
	await wSwitch.updateComplete;

	// value should be associated with the form again after reset
	const data3 = new FormData(form);
	expect([...data3.entries()].length).toBe(1);
});

test("mouse click toggles switch once", async () => {
	render(html`<w-switch aria-label="Enable notifications"></w-switch>`);

	const wSwitch = document.querySelector("w-switch")!;

	await wSwitch.updateComplete;
	expect(wSwitch.checked).toBe(false);

	wSwitch.click();
	await wSwitch.updateComplete;

	expect(wSwitch.checked).toBe(true);
});

test("native label click toggles switch", async () => {
	render(html`
		<label for="native-label-switch">Enable notifications</label>
		<w-switch
			id="native-label-switch"
			name="notifications"
			value="enabled"
		></w-switch>
	`);

	const label = document.querySelector("label")!;
	const wSwitch = document.querySelector("w-switch")!;

	await wSwitch.updateComplete;
	expect(wSwitch.checked).toBe(false);

	label.click();
	await wSwitch.updateComplete;
	expect(wSwitch.checked).toBe(true);

	label.click();
	await wSwitch.updateComplete;
	expect(wSwitch.checked).toBe(false);
});

test("has Constraint Validation API support", async () => {
	render(html`
		<label for="native-label-switch">Enable notifications</label>
		<w-switch
			id="native-label-switch"
			name="notifications"
			value="enabled"
		></w-switch>
	`);

	const component = document.querySelector("w-switch")!;
	await component.updateComplete;

	// Start off as valid (empty string in validationMessage)
	expect(component.validationMessage).toBe("");
	expect(component.validity.valid).toBe(true);
	expect(component.checkValidity()).toBe(true);

	// Can set a custom validation message
	component.setCustomValidity("This switch must be on for some reason");
	expect(component.validationMessage).toBe(
		"This switch must be on for some reason",
	);
	expect(component.checkValidity()).toBe(false);
	expect(component.validity.valid).toBe(false);
	expect(component.validity.customError).toBe(true);

	// Can call reportValidity to show the validation message in the browser
	// AFAIK there's no good way to assert that the browser shows something in Playwright,
	// but I verified this with manual testing.
	expect(component.reportValidity()).toBe(false);
});
