import { i18n } from "@lingui/core";
import { html } from "lit";

import { expect, test } from "vitest";
import { userEvent, server } from "vitest/browser";
import { render } from "vitest-browser-lit";

import "./combobox.js";
import { messages as comboboxMessages } from "./locales/en/messages.mjs";
import { messages as comboboxNbMessages } from "./locales/nb/messages.mjs";

// Initialize the combobox catalogs for tests.
i18n.load("en", comboboxMessages);
i18n.load("nb", comboboxNbMessages);
i18n.activate("en");

test("emits public events once for native input interactions", async () => {
	const page = render(html`
		<w-combobox label="Country" open-on-focus>
			<option value="no">Norway</option>
		</w-combobox>
		<button>Next</button>
	`);
	const el = page.getByRole("combobox", { name: "Country" });
	await expect.element(el).toBeVisible();
	const combobox = page.container.querySelector("w-combobox")!;
	const events: [string, unknown][] = [];
	for (const type of ["focus", "change", "select", "blur"]) {
		combobox.addEventListener(type, (event) => {
			if (event instanceof CustomEvent && event.target === combobox) {
				events.push([event.type, event.detail]);
			}
		});
	}

	// Fill emits input without the separate keydown change tracked in #827.
	await el.fill("no");
	await userEvent.keyboard("{Tab}");

	expect(events).toEqual([
		["focus", null],
		["change", { value: "no" }],
		["select", { value: "no" }],
		["blur", { value: "no" }],
	]);
});

test("native focus and blur listeners can ignore deprecated custom copies", async () => {
	const page = render(html`
		<w-combobox label="Country" open-on-focus>
			<option value="no">Norway</option>
		</w-combobox>
		<button>Next</button>
	`);
	const combobox = page.container.querySelector("w-combobox")!;
	const events: [string, string][] = [];
	for (const type of ["focus", "blur"]) {
		combobox.addEventListener(type, (event) => {
			if (event instanceof CustomEvent) return;
			expect(event).toBeInstanceOf(FocusEvent);
			events.push([event.type, combobox.value]);
		});
	}

	await page.getByRole("combobox", { name: "Country" }).fill("n");
	await userEvent.keyboard("{ArrowDown}{Tab}");
	expect(events).toEqual([
		["focus", ""],
		["blur", "no"],
	]);
});

test('renders autocomplete="off" on the native input by default', async () => {
	const page = render(html`<w-combobox label="Country"></w-combobox>`);
	await expect
		.element(page.getByRole("combobox", { name: "Country" }))
		.toBeVisible();
	expect(
		page
			.getByRole("combobox", { name: "Country" })
			.element()
			.getAttribute("autocomplete"),
	).toBe("off");
});

test("renders with autocomplete attribute when provided", async () => {
	const component = html`<w-combobox
		data-testid="combobox"
		autocomplete="on"
	></w-combobox>`;

	const page = render(component);
	const locator = page.getByTestId("combobox");

	await expect.element(locator).toBeVisible();

	const el = (await locator.element()) as HTMLElement;
	expect(el.getAttribute("autocomplete")).toBe("on");
});

test("displays initial value correctly when value prop is set", async () => {
	const options = [
		{ value: "apple", label: "Apple" },
		{ value: "banana", label: "Banana" },
	];

	const component = html`<w-combobox
		data-testid="combobox"
		value="apple"
		.options="${options}"
	></w-combobox>`;

	const page = render(component);
	const locator = page.getByTestId("combobox");

	await expect.element(locator).toBeVisible();

	const el = (await locator.element()) as HTMLElement & { value: string };

	// Get the native input
	const input = el.shadowRoot?.querySelector("input");

	// Verify the displayed text shows the label "Apple", not the value "apple"
	expect(input?.value).toBe("Apple");

	// Verify the combobox value is "apple"
	expect(el.value).toBe("apple");
});

test("filters options by label, not value", async () => {
	const options = [
		{ value: "us", label: "United States" },
		{ value: "uk", label: "United Kingdom" },
		{ value: "no", label: "Norway" },
	];

	const component = html`<w-combobox
		data-testid="combobox"
		open-on-focus
		.options="${options}"
	></w-combobox>`;

	const page = render(component);
	const locator = page.getByTestId("combobox");

	await expect.element(locator).toBeVisible();

	const el = (await locator.element()) as HTMLElement & { value: string };

	// Get the native input
	const input = el.shadowRoot?.querySelector("input") as HTMLInputElement;

	// Type "United" which should match labels "United States" and "United Kingdom"
	// but NOT match any values (us, uk, no)
	input?.focus();
	input.value = "United";
	input.dispatchEvent(
		new InputEvent("input", { bubbles: true, composed: true }),
	);
	await new Promise((resolve) => setTimeout(resolve, 100));

	// Check that the dropdown shows the matching options
	const listbox = el.shadowRoot?.querySelector('[role="listbox"]');
	const visibleOptions = listbox?.querySelectorAll('[role="option"]');

	// Should show 2 options: "United States" and "United Kingdom"
	expect(visibleOptions?.length).toBe(2);

	const optionTexts = Array.from(visibleOptions || [], (opt) =>
		opt.textContent?.trim(),
	);
	expect(optionTexts).toContain("United States");
	expect(optionTexts).toContain("United Kingdom");
	expect(optionTexts).not.toContain("Norway");
});

test("displays option label in the input but stores option value", async () => {
	const optionsWithDifferentLabelAndValue = [
		{ value: "us", label: "United States" },
		{ value: "uk", label: "United Kingdom" },
		{ value: "no", label: "Norway" },
	];

	const component = html`<w-combobox
		data-testid="combobox"
		open-on-focus
		.options="${optionsWithDifferentLabelAndValue}"
	></w-combobox>`;

	const page = render(component);
	const locator = page.getByTestId("combobox");

	await expect.element(locator).toBeVisible();

	const el = (await locator.element()) as HTMLElement & { value: string };

	// Get the native input
	const input = el.shadowRoot?.querySelector("input");

	// Focus to open the dropdown
	input?.focus();
	await new Promise((resolve) => setTimeout(resolve, 100));

	// Find and click the "Norway" option (which has value "no")
	const listbox = el.shadowRoot?.querySelector('[role="listbox"]');
	const options = listbox?.querySelectorAll('[role="option"]');
	const norwayOption = [...(options || [])].find(
		(opt) => opt.textContent?.trim() === "Norway",
	);

	expect(norwayOption).toBeDefined();

	// Simulate mousedown on the option
	norwayOption?.dispatchEvent(new MouseEvent("mousedown", { bubbles: true }));
	await new Promise((resolve) => setTimeout(resolve, 100));

	// Verify the displayed text is the label "Norway", not the value "no"
	expect(input?.value).toBe("Norway");

	// Verify the combobox value is "no", not "Norway"
	expect(el.value).toBe("no");
});

test("announces suggestion count when opened on focus with empty input", async () => {
	const options = [
		{ value: "apple", label: "Apple" },
		{ value: "banana", label: "Banana" },
		{ value: "orange", label: "Orange" },
	];

	const component = html`<w-combobox
		data-testid="combobox"
		open-on-focus
		.options="${options}"
	></w-combobox>`;

	const page = render(component);
	const locator = page.getByTestId("combobox");

	await expect.element(locator).toBeVisible();

	const el = (await locator.element()) as HTMLElement;
	const input = el.shadowRoot?.querySelector("input");

	input?.focus();
	await new Promise((resolve) => setTimeout(resolve, 100));

	const statusText = el.shadowRoot
		?.querySelector('[role="status"]')
		?.textContent?.trim();
	expect(statusText).toBe("3 suggestions");
});

test("renders light-DOM option children in the generated popup", async () => {
	const component = html`
		<w-combobox data-testid="combobox" open-on-focus>
			<option value="no">Norway</option>
			<option value="se">Sweden</option>
			<option value="dk">Denmark</option>
		</w-combobox>
	`;

	const page = render(component);
	const locator = page.getByTestId("combobox");
	await expect.element(locator).toBeVisible();
	const el = (await locator.element()) as HTMLElement;
	const input = el.shadowRoot?.querySelector("input");

	input?.focus();
	await new Promise((resolve) => setTimeout(resolve, 100));

	const visibleOptions = el.shadowRoot?.querySelectorAll(
		'[role="listbox"] [role="option"]',
	);
	const optionTexts = Array.from(visibleOptions || [], (opt) =>
		opt.textContent?.trim(),
	);

	expect(optionTexts).toEqual(["Norway", "Sweden", "Denmark"]);
});

test("filters light-DOM options by label attribute and stores option value on select", async () => {
	const component = html`
		<w-combobox data-testid="combobox" open-on-focus>
			<option value="us" label="United States">US</option>
			<option value="uk" label="United Kingdom">UK</option>
			<option value="no">Norway</option>
		</w-combobox>
	`;

	const page = render(component);
	const locator = page.getByTestId("combobox");
	await expect.element(locator).toBeVisible();
	const el = (await locator.element()) as HTMLElement & { value: string };
	const input = el.shadowRoot?.querySelector("input") as HTMLInputElement;
	const selectEvents: CustomEvent[] = [];

	el.addEventListener("select", (event) =>
		selectEvents.push(event as CustomEvent),
	);

	input.focus();
	input.value = "United";
	input.dispatchEvent(
		new InputEvent("input", { bubbles: true, composed: true }),
	);
	await new Promise((resolve) => setTimeout(resolve, 100));

	const visibleOptions = el.shadowRoot?.querySelectorAll(
		'[role="listbox"] [role="option"]',
	);
	const optionTexts = Array.from(visibleOptions || [], (opt) =>
		opt.textContent?.trim(),
	);

	expect(optionTexts).toEqual(["United States", "United Kingdom"]);

	visibleOptions?.[1]?.dispatchEvent(
		new MouseEvent("mousedown", { bubbles: true }),
	);
	await new Promise((resolve) => setTimeout(resolve, 100));

	expect(input.value).toBe("United Kingdom");
	expect(el.value).toBe("uk");
	expect(selectEvents.at(-1)?.detail).toEqual({ value: "uk" });
});

test("uses light-DOM options to display an initial value label", async () => {
	const component = html`
		<w-combobox data-testid="combobox" value="no">
			<option value="se">Sweden</option>
			<option value="no">Norway</option>
		</w-combobox>
	`;

	const page = render(component);
	const locator = page.getByTestId("combobox");
	await expect.element(locator).toBeVisible();
	const el = (await locator.element()) as HTMLElement & { value: string };
	const input = el.shadowRoot?.querySelector("input") as HTMLInputElement;

	expect(input.value).toBe("Norway");
	expect(el.value).toBe("no");
});

test("syncs dynamic light-DOM option child changes", async () => {
	const component = html`
		<w-combobox data-testid="combobox" open-on-focus>
			<option value="no">Norway</option>
			<option value="se">Sweden</option>
		</w-combobox>
	`;

	const page = render(component);
	const locator = page.getByTestId("combobox");
	await expect.element(locator).toBeVisible();
	const el = (await locator.element()) as HTMLElement;
	const input = el.shadowRoot?.querySelector("input") as HTMLInputElement;

	const denmark = document.createElement("option");
	denmark.value = "dk";
	denmark.textContent = "Denmark";
	el.appendChild(denmark);

	const sweden = el.querySelector('option[value="se"]');
	sweden?.remove();

	const norway = el.querySelector('option[value="no"]');
	norway?.setAttribute("value", "nor");
	if (norway) {
		norway.textContent = "Norge";
	}

	await new Promise((resolve) => setTimeout(resolve, 100));

	input.focus();
	await new Promise((resolve) => setTimeout(resolve, 100));

	const visibleOptions = el.shadowRoot?.querySelectorAll(
		'[role="listbox"] [role="option"]',
	);
	const optionTexts = Array.from(visibleOptions || [], (opt) =>
		opt.textContent?.trim(),
	);

	expect(optionTexts).toEqual(["Norge", "Denmark"]);
});

test("non-empty options property takes precedence over light-DOM option children", async () => {
	const options = [{ value: "apple", label: "Apple" }];
	const component = html`
		<w-combobox data-testid="combobox" open-on-focus .options="${options}">
			<option value="banana">Banana</option>
		</w-combobox>
	`;

	const page = render(component);
	const locator = page.getByTestId("combobox");
	await expect.element(locator).toBeVisible();
	const el = (await locator.element()) as HTMLElement;
	const input = el.shadowRoot?.querySelector("input") as HTMLInputElement;

	input.focus();
	await new Promise((resolve) => setTimeout(resolve, 100));

	const visibleOptions = el.shadowRoot?.querySelectorAll(
		'[role="listbox"] [role="option"]',
	);
	const optionTexts = Array.from(visibleOptions || [], (opt) =>
		opt.textContent?.trim(),
	);

	expect(optionTexts).toEqual(["Apple"]);
});

test("renders optional indicator as 'Optional' without parentheses", async () => {
	const page = render(html`
		<w-combobox label="Country" optional>
			<option value="no">Norway</option>
			<option value="se">Sweden</option>
		</w-combobox>
	`);

	await expect.element(page.getByText("Optional")).toBeVisible();
	expect(page.getByText("(optional)").query()).toBeNull();
});

test("does not render optional indicator when both required and optional are set", async () => {
	const page = render(html`
		<w-combobox label="Country" required optional>
			<option value="no">Norway</option>
			<option value="se">Sweden</option>
		</w-combobox>
	`);

	await expect.element(page.getByText("Country")).toBeVisible();
	expect(page.getByText("Optional").query()).toBeNull();
});

test("includes optional indicator in the accessible name", async () => {
	const page = render(html`
		<w-combobox label="Country" optional>
			<option value="no">Norway</option>
			<option value="se">Sweden</option>
		</w-combobox>
	`);

	// The focused combobox includes the optional indicator in its accessible name.
	await expect
		.element(
			page.getByRole("combobox", { name: "Country Optional", exact: true }),
		)
		.toBeVisible();
});

test("removes optional indicator when required is added dynamically", async () => {
	const page = render(html`
		<w-combobox label="Country" optional data-testid="field">
			<option value="no">Norway</option>
			<option value="se">Sweden</option>
		</w-combobox>
	`);

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
	const page = render(html`
		<w-combobox label="Country" required optional data-testid="field">
			<option value="no">Norway</option>
			<option value="se">Sweden</option>
		</w-combobox>
	`);

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
	const page = render(html`
		<w-combobox aria-label="Country" optional>
			<option value="no">Norway</option>
			<option value="se">Sweden</option>
		</w-combobox>
	`);

	await expect
		.element(page.getByRole("combobox", { name: "Country" }))
		.toBeVisible();
	expect(page.getByText("Optional").query()).toBeNull();
});

test("excludes optional indicator from accessible name when required suppresses it", async () => {
	const page = render(html`
		<w-combobox label="Country" required optional>
			<option value="no">Norway</option>
			<option value="se">Sweden</option>
		</w-combobox>
	`);

	const input = page.getByRole("combobox", { name: "Country" });
	await expect.element(input).toBeVisible();

	// Verify "Optional" is not part of the accessible name
	expect(page.getByRole("combobox", { name: /Optional/ }).query()).toBeNull();
});

test("renders localized optional text based on document lang", async () => {
	const originalLang = document.documentElement.lang;
	document.documentElement.lang = "nb";

	const page = render(html`
		<w-combobox label="Country" optional data-testid="field">
			<option value="no">Norway</option>
			<option value="se">Sweden</option>
		</w-combobox>
	`);

	const el = page.getByTestId("field").element() as HTMLElement & {
		updateComplete: Promise<unknown>;
	};
	await el.updateComplete;
	await expect.element(page.getByText("Valgfri")).toBeVisible();

	document.documentElement.lang = originalLang;
});

test("focused combobox exposes its name and active suggestion", async () => {
	const page = render(html`
		<w-combobox aria-label="Country">
			<option value="no">Norway</option>
		</w-combobox>
	`);
	const field = page.getByRole("combobox", { name: "Country" });
	await expect.element(field).toBeVisible();
	const input = field.element() as HTMLInputElement;
	expect(
		input.getRootNode() ===
			page.container.querySelector("w-combobox")!.shadowRoot,
	).toBe(true);
	input.focus();
	await userEvent.keyboard("{ArrowDown}{ArrowDown}");
	expect(input.getAttribute("aria-expanded")).toBe("true");
	const root = input.getRootNode() as ShadowRoot;
	expect(root.getElementById(input.getAttribute("aria-controls")!)).toBe(
		page.getByRole("listbox").element(),
	);
	expect(
		root.getElementById(input.getAttribute("aria-activedescendant")!),
	).toBe(page.getByRole("option", { name: "Norway" }).element());
	const combo = page.container.querySelector("w-combobox")!;
	combo.options = [{ value: "se", label: "Sweden" }];
	await combo.updateComplete;
	expect(input.hasAttribute("aria-activedescendant")).toBe(false);
	await userEvent.keyboard("{Escape}");
	expect(input.getAttribute("aria-expanded")).toBe("false");
	expect(input.hasAttribute("aria-activedescendant")).toBe(false);
});

test("native combobox keeps field attributes and descriptions", async () => {
	const page = render(
		html`<w-combobox
			aria-label="Country"
			placeholder="Choose"
			help-text="Where you live"
			invalid
			required
			name="country"
			autocomplete="country-name"
		></w-combobox>`,
	);
	const field = page.getByRole("combobox", { name: "Country" });
	await expect.element(field).toBeVisible();
	const input = field.element() as HTMLInputElement;
	const root = input.getRootNode() as ShadowRoot;
	expect(input.required).toBe(true);
	expect(input.name).toBe("country");
	expect(input.placeholder).toBe("Choose");
	expect(input.getAttribute("autocomplete")).toBe("country-name");
	expect(input.getAttribute("aria-invalid")).toBe("true");
	expect(
		root
			.getElementById(input.getAttribute("aria-describedby")!)
			?.textContent?.trim(),
	).toBe("Where you live");
	expect(input.getAttribute("aria-errormessage")).toBe(
		input.getAttribute("aria-describedby"),
	);
	const combo = page.container.querySelector("w-combobox")!;
	combo.disabled = true;
	await combo.updateComplete;
	expect(input.disabled).toBe(true);
});

test("form submission uses option values and reset restores the initial label", async () => {
	const page = render(
		html`<form>
			<w-combobox label="Country" name="country" value="no" open-on-focus
				><option value="no">Norway</option>
				<option value="se">Sweden</option></w-combobox
			><button type="reset">Reset</button>
		</form>`,
	);
	const field = page.getByRole("combobox", { name: "Country" });
	await expect.element(field).toBeVisible();
	expect((field.element() as HTMLInputElement).value).toBe("Norway");
	await field.fill("Swe");
	await userEvent.keyboard("{ArrowDown}{Enter}");
	expect((field.element() as HTMLInputElement).value).toBe("Sweden");
	const form = page.container.querySelector("form")!;
	expect(new FormData(form).getAll("country")).toEqual(["se"]);
	await page.getByRole("button", { name: "Reset" }).click();
	expect((field.element() as HTMLInputElement).value).toBe("Norway");
	expect(new FormData(form).getAll("country")).toEqual(["no"]);
});

test("tooltip stays keyboard accessible without changing the combobox name", async () => {
	const page = render(
		html`<w-combobox label="Country" tooltip="Where you live"></w-combobox>`,
	);
	const field = page.getByRole("combobox", { name: "Country", exact: true });
	await expect.element(field).toBeVisible();
	(field.element() as HTMLInputElement).focus();
	await userEvent.keyboard(
		server.browser === "webkit"
			? "{Alt>}{Shift>}{Tab}{/Shift}{/Alt}"
			: "{Shift>}{Tab}{/Shift}",
	);
	await expect.element(page.getByRole("tooltip")).toBeVisible();
	await expect
		.element(page.getByRole("button", { name: "More information" }))
		.toBeVisible();
	expect(field.query()).not.toBeNull();
});
