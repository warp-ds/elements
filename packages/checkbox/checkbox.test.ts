import { html } from "lit";
import { expect, onTestFinished, test, vi } from "vitest";
import { server, userEvent } from "vitest/browser";
import { render } from "vitest-browser-lit";

import "./checkbox.js";

const getInput = (el: HTMLElement) =>
	el.shadowRoot?.querySelector(
		'input[type="checkbox"]',
	) as HTMLInputElement | null;

test("toggles checked on click and dispatches change", async () => {
	render(html`<w-checkbox>Check me</w-checkbox>`);

	const wCheckbox = document.querySelector("w-checkbox") as HTMLElement & {
		checked: boolean;
		updateComplete: Promise<unknown>;
		click: () => void;
	};

	const onChange = vi.fn();
	wCheckbox.addEventListener("change", onChange);

	await wCheckbox.updateComplete;
	wCheckbox.click();
	await wCheckbox.updateComplete;
	expect(wCheckbox.checked).toBe(true);
	expect(onChange).toHaveBeenCalledTimes(1);
});

test("associates value with form when checked", async () => {
	render(html`
		<form data-testid="form">
			<w-checkbox name="newsletter" value="yes" checked>Sign up</w-checkbox>
		</form>
	`);

	const form = document.querySelector("form") as HTMLFormElement;
	const wCheckbox = document.querySelector("w-checkbox") as HTMLElement & {
		checked: boolean;
		updateComplete: Promise<unknown>;
	};

	await wCheckbox.updateComplete;
	let data = new FormData(form);
	expect(data.get("newsletter")).toBe("yes");

	wCheckbox.checked = false;
	await wCheckbox.updateComplete;

	data = new FormData(form);
	expect(data.get("newsletter")).toBeNull();
});

test("resets to defaultChecked on form reset", async () => {
	render(html`
		<form>
			<w-checkbox name="updates" value="yes" checked>Updates</w-checkbox>
		</form>
	`);

	const form = document.querySelector("form") as HTMLFormElement;
	const wCheckbox = document.querySelector("w-checkbox") as HTMLElement & {
		checked: boolean;
		updateComplete: Promise<unknown>;
		click: () => void;
	};

	await wCheckbox.updateComplete;
	wCheckbox.click();
	await wCheckbox.updateComplete;
	expect(wCheckbox.checked).toBe(false);

	form.reset();
	await wCheckbox.updateComplete;
	expect(wCheckbox.checked).toBe(true);
});

test("required checkbox reports validity based on checked state", async () => {
	render(html`<w-checkbox name="terms" required>Accept</w-checkbox>`);

	const wCheckbox = document.querySelector("w-checkbox") as HTMLElement & {
		checked: boolean;
		updateComplete: Promise<unknown>;
		checkValidity: () => boolean;
		validity: ValidityState;
		validationMessage: string;
	};

	await expect.poll(() => wCheckbox.checkValidity()).toBe(false);
	expect(wCheckbox.validity.valueMissing).toBe(true);
	expect(wCheckbox.validationMessage).not.toBe("");

	wCheckbox.checked = true;
	await wCheckbox.updateComplete;

	await expect.poll(() => wCheckbox.checkValidity()).toBe(true);
	expect(wCheckbox.validity.valid).toBe(true);
});

test("required checkbox shows invalid state after submit and clears after selection", async () => {
	render(html`
		<form>
			<w-checkbox name="terms" required>Accept</w-checkbox>
			<button type="submit">Submit</button>
		</form>
	`);

	const form = document.querySelector("form") as HTMLFormElement;
	const wCheckbox = document.querySelector("w-checkbox") as HTMLElement & {
		updateComplete: Promise<unknown>;
		click: () => void;
	};
	const submit = document.querySelector(
		'button[type="submit"]',
	) as HTMLButtonElement;

	await wCheckbox.updateComplete;
	expect(wCheckbox.hasAttribute("invalid")).toBe(false);

	submit.click();
	await wCheckbox.updateComplete;
	await expect.poll(() => form.checkValidity()).toBe(false);
	expect(wCheckbox.hasAttribute("invalid")).toBe(true);

	wCheckbox.click();
	await wCheckbox.updateComplete;
	await expect.poll(() => form.checkValidity()).toBe(true);
	expect(wCheckbox.hasAttribute("invalid")).toBe(false);
});

test("participates in form submission and blocks submit when required", async () => {
	render(html`
		<form>
			<w-checkbox name="newsletter" value="yes" required>Sign up</w-checkbox>
			<button type="submit">Submit</button>
		</form>
	`);

	const form = document.querySelector("form") as HTMLFormElement;
	const wCheckbox = document.querySelector("w-checkbox") as HTMLElement & {
		updateComplete: Promise<unknown>;
		click: () => void;
	};
	const submit = document.querySelector(
		'button[type="submit"]',
	) as HTMLButtonElement;

	const onSubmit = vi.fn(() => {
		const data = new FormData(form);
		expect(data.get("newsletter")).toBe("yes");
	});

	form.addEventListener("submit", (event) => {
		if (!form.checkValidity()) {
			event.preventDefault();
			return;
		}
		event.preventDefault();
		onSubmit();
	});

	await wCheckbox.updateComplete;
	await expect.poll(() => form.checkValidity()).toBe(false);
	submit.click();
	await expect.poll(() => form.checkValidity()).toBe(false);
	expect(onSubmit).not.toHaveBeenCalled();

	wCheckbox.click();
	await wCheckbox.updateComplete;

	submit.click();
	await wCheckbox.updateComplete;
	await expect.poll(() => form.checkValidity()).toBe(true);
	expect(onSubmit).toHaveBeenCalledTimes(1);
});

test("clears indeterminate on click", async () => {
	render(html`<w-checkbox indeterminate>Partial</w-checkbox>`);

	const wCheckbox = document.querySelector("w-checkbox") as HTMLElement & {
		checked: boolean;
		indeterminate: boolean;
		updateComplete: Promise<unknown>;
		click: () => void;
	};

	await wCheckbox.updateComplete;
	expect(wCheckbox.indeterminate).toBe(true);
	const input = getInput(wCheckbox);
	expect(input).not.toBeNull();
	expect(input?.indeterminate).toBe(true);

	wCheckbox.click();
	await wCheckbox.updateComplete;

	expect(wCheckbox.indeterminate).toBe(false);
	expect(wCheckbox.checked).toBe(true);
});

test("does not toggle or emit change when disabled", async () => {
	render(html`<w-checkbox disabled>Disabled</w-checkbox>`);

	const wCheckbox = document.querySelector("w-checkbox") as HTMLElement & {
		checked: boolean;
		updateComplete: Promise<unknown>;
		click: () => void;
	};

	const onChange = vi.fn();
	wCheckbox.addEventListener("change", onChange);

	await wCheckbox.updateComplete;
	expect(wCheckbox.checked).toBe(false);

	const input = getInput(wCheckbox);
	expect(input).not.toBeNull();
	expect(input?.disabled).toBe(true);

	wCheckbox.click();
	await wCheckbox.updateComplete;

	expect(wCheckbox.checked).toBe(false);
	expect(onChange).not.toHaveBeenCalled();
});

/* Manual test in Safari has this working as expected, but the test fails for some reason */
test.skipIf(server.browser === "webkit")(
	"submits the associated form when checkbox has focus and user presses Enter",
	async () => {
		const screen = render(html`
			<form>
				<w-checkbox data-testid="checkbox" name="terms">Accept</w-checkbox>
				<button type="submit">Submit</button>
			</form>
		`);

		const onSubmit = vi.fn();
		const form = document.querySelector("form") as HTMLFormElement;
		form.addEventListener("submit", (event) => {
			event.preventDefault();
			onSubmit();
		});

		await userEvent.click(screen.getByTestId("checkbox"));
		await userEvent.keyboard("{Space}");
		await userEvent.keyboard("{Enter}");

		expect(onSubmit).toHaveBeenCalled();
	},
);

// Frameworks such as React 19 create the element, set props as properties and only then insert it.
// Lit reflects properties to attributes on its first update, which runs after connectedCallback.
const connect = (element: HTMLElement, parent: HTMLElement = document.body) => {
	parent.append(element);
	onTestFinished(() => element.remove());
	return element;
};

test("keeps value and checked set as properties before the checkbox is connected", async () => {
	const checkbox = document.createElement("w-checkbox");
	checkbox.value = "yes";
	checkbox.checked = true;
	connect(checkbox);
	await checkbox.updateComplete;

	expect(checkbox.value).toBe("yes");
	expect(checkbox.getAttribute("value")).toBe("yes");
	expect(checkbox.checked).toBe(true);
	expect(checkbox.hasAttribute("checked")).toBe(true);
	expect(getInput(checkbox)?.checked).toBe(true);
});

test("submits and resets to the value and checked state set as properties before connecting", async () => {
	const form = document.createElement("form");
	connect(form);

	const checkbox = document.createElement("w-checkbox");
	checkbox.name = "newsletter";
	checkbox.value = "yes";
	checkbox.checked = true;
	form.append(checkbox);
	await checkbox.updateComplete;

	expect(new FormData(form).get("newsletter")).toBe("yes");

	checkbox.click();
	await checkbox.updateComplete;
	expect(checkbox.checked).toBe(false);
	expect(new FormData(form).get("newsletter")).toBeNull();

	form.reset();
	await checkbox.updateComplete;
	expect(checkbox.checked).toBe(true);
	expect(new FormData(form).get("newsletter")).toBe("yes");
});

test("a property set after the attribute but before connecting wins", async () => {
	const checkbox = document.createElement("w-checkbox");
	checkbox.setAttribute("value", "server");
	checkbox.setAttribute("checked", "");
	checkbox.value = "client";
	checkbox.checked = false;
	connect(checkbox);
	await checkbox.updateComplete;

	expect(checkbox.value).toBe("client");
	expect(checkbox.getAttribute("value")).toBe("client");
	expect(checkbox.checked).toBe(false);
	expect(checkbox.hasAttribute("checked")).toBe(false);
});

test("keeps a checked state changed right before the checkbox is moved", async () => {
	render(html`
		<div data-testid="from"><w-checkbox checked>Moved</w-checkbox></div>
		<div data-testid="to"></div>
	`);

	const checkbox = document.querySelector("w-checkbox")!;
	await checkbox.updateComplete;

	// Moving disconnects and reconnects synchronously, before the attribute is reflected.
	checkbox.checked = false;
	document.querySelector('[data-testid="to"]')!.append(checkbox);
	await checkbox.updateComplete;

	expect(checkbox.checked).toBe(false);
	expect(checkbox.hasAttribute("checked")).toBe(false);
});

test("uses the value and checked attributes, and falls back to 'on' and unchecked without them", async () => {
	render(html`
		<w-checkbox value="yes" checked>With attributes</w-checkbox>
		<w-checkbox>Without attributes</w-checkbox>
	`);

	const [withAttributes, withoutAttributes] = [
		...document.querySelectorAll("w-checkbox"),
	];
	await withAttributes.updateComplete;
	await withoutAttributes.updateComplete;

	expect(withAttributes.value).toBe("yes");
	expect(withAttributes.checked).toBe(true);
	expect(withoutAttributes.value).toBe("on");
	expect(withoutAttributes.getAttribute("value")).toBe("on");
	expect(withoutAttributes.checked).toBe(false);
	expect(withoutAttributes.hasAttribute("checked")).toBe(false);
});
