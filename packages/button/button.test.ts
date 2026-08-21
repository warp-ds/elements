import { html } from "lit";

import { expect, test, vi } from "vitest";
import { render } from "vitest-browser-lit";

import "./button.js";
import "../icon/icon.js";
import { wButtonStyles } from "./styles.js";

test("renders the slotted label", async () => {
	const component = html`<w-button>This is a button</w-button>`;

	const page = render(component);
	await expect.element(page.getByText("This is a button")).toBeVisible();
	await expect.element(page.getByRole("button")).toBeVisible();
});

test("by default button type is button", async () => {
	const component = html`<w-button>This is a button</w-button>`;
	const page = render(component);
	await expect
		.element(page.getByRole("button"))
		.toHaveAttribute("type", "button");
});

test("works in a form as type submit and passes the submitter", async () => {
	const page = render(html`
		<form>
			<w-button name="intent" type="submit" value="save" variant="secondary">
				Save
			</w-button>
		</form>
	`);

	const form = document.querySelector("form") as HTMLFormElement;
	const wButton = document.querySelector("w-button") as HTMLElement;
	const onSubmit = vi.fn();
	let submitter: HTMLElement | null = null;
	let submitContext: SubmitEvent["warpSubmitContext"];
	let submittedIntents: FormDataEntryValue[] = [];

	form.addEventListener("submit", (event) => {
		event.preventDefault();

		submitter = (event as SubmitEvent).submitter as HTMLElement | null;
		submitContext = (event as SubmitEvent).warpSubmitContext;
		submittedIntents = new FormData(form).getAll("intent");
		onSubmit();
	});

	await page.getByRole("button", { name: "Save" }).click();

	expect(onSubmit).toHaveBeenCalledTimes(1);
	expect(submitter).toBeNull();
	expect(submitContext?.initiator).toBe(wButton);
	expect(submitContext?.nativeSubmitter).toBeNull();
	expect(submitContext?.defaultSubmitter).toBeNull();
	expect(submittedIntents).toEqual(["save"]);
});

test("Works in a form as type reset", async () => {
	const label = "Test label";

	render(html`
		<form>
			<w-button
				label=${label}
				name="test"
				type="reset"
				value="test"
				variant="secondary"
			>
				Reset the form
			</w-button>
		</form>
	`);

	const form = document.querySelector("form") as HTMLFormElement;
	const wButton = document.querySelector("w-button") as HTMLElement & {
		value: string;
	};

	// sanity
	expect(form).not.toBeNull();
	expect(wButton).not.toBeNull();

	// Initial value is "test"
	expect(wButton.value).toBe("test");

	// Change the value to "definitely not test"
	wButton.value = "definitely not test";
	expect(wButton.value).toBe("definitely not test");

	// Reset the form
	form.reset();

	// Value should be reset back to "test"
	expect(wButton.value).toBe("test");
});

test("calling focus on w-button focuses the button inside the shadow root", async () => {
	const component = html`<w-button>This is a button</w-button>`;
	const page = render(component);
	await expect.element(page.getByRole("button")).toBeVisible();

	page.container.querySelector("w-button")!.focus();

	await vi.waitFor(
		() => page.container.querySelector(":focus")!.tagName === "BUTTON",
	);
});

test("primary variant includes an accessible description of its semantics", async () => {
	const component = html`
		<w-button variant="primary">This is a button</w-button>
	`;
	const page = render(component);
	await expect
		.element(page.getByRole("button"))
		.toHaveAccessibleDescription("Highlighted");
});

test("link primary variant includes an accessible description of its semantics", async () => {
	const component = html`
		<w-button href="#" variant="primary">This is a link</w-button>
	`;
	const page = render(component);
	await expect
		.element(page.getByRole("link"))
		.toHaveAccessibleDescription("Highlighted");
});

test("primary variant custom accessible description overrides built-in", async () => {
	const component = html`
		<w-button variant="primary" aria-description="Radical!">
			This is a button
		</w-button>
	`;
	const page = render(component);
	await expect
		.element(page.getByRole("button"))
		.toHaveAccessibleDescription("Radical!");
});

test("negative variant includes an accessible description of its semantics", async () => {
	const component = html`
		<w-button variant="negative">This is a button</w-button>
	`;
	const page = render(component);
	await expect
		.element(page.getByRole("button"))
		.toHaveAccessibleDescription("Attention");
});

test("negative variant custom accessible description overrides built-in", async () => {
	const component = html`
		<w-button variant="negative" aria-description="Danger danger!">
			This is a button
		</w-button>
	`;
	const page = render(component);
	await expect
		.element(page.getByRole("button"))
		.toHaveAccessibleDescription("Danger danger!");
});

test("negativeQuiet variant includes an accessible description of its semantics", async () => {
	const component = html`
		<w-button variant="negativeQuiet">This is a button</w-button>
	`;
	const page = render(component);
	await expect
		.element(page.getByRole("button"))
		.toHaveAccessibleDescription("Attention");
});

test("negativeQuiet variant custom accessible description overrides built-in", async () => {
	const component = html`
		<w-button variant="negativeQuiet" aria-description="Objection!">
			This is a button
		</w-button>
	`;
	const page = render(component);
	await expect
		.element(page.getByRole("button"))
		.toHaveAccessibleDescription("Objection!");
});

test("other variants don't have a semantic description", async () => {
	const component = html`
		<w-button variant="secondary">This is a button</w-button>
	`;
	const page = render(component);
	await expect
		.element(page.getByRole("button"))
		.not.toHaveAccessibleDescription();
});

test("pill variant keeps pill-specific hover tokens", () => {
	expect(wButtonStyles.cssText).toContain(
		"--w-c-button-bg-hover: var(--w-color-button-pill-background-hover);",
	);
	expect(wButtonStyles.cssText).toContain(
		"--w-c-button-bg-active: var(--w-color-button-pill-background-active);",
	);
	expect(wButtonStyles.cssText).toContain(
		"--w-c-button-color-hover: var(--w-s-color-icon-hover);",
	);
	expect(wButtonStyles.cssText).toContain(
		"--w-c-button-color-active: var(--w-s-color-icon-active);",
	);
});

test("icon-only pill keeps the default 44px size", async () => {
	const page = render(html`
		<w-button variant="pill" icon-only aria-label="Pill icon">
			<w-icon name="Heart" size="small"></w-icon>
		</w-button>
	`);
	const button = page.getByRole("button");
	await expect.element(button).toBeVisible();

	const host = page.container.querySelector("w-button") as HTMLElement & {
		shadowRoot: ShadowRoot;
	};
	const buttonEl = host.shadowRoot.querySelector("button") as HTMLButtonElement;
	expect(buttonEl.getBoundingClientRect().height).toBe(44);
	expect(buttonEl.getBoundingClientRect().width).toBe(44);
});
