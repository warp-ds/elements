import { afterEach, beforeEach, describe, expect, test } from "vitest";
import {
	setupHydrationWarningCapture,
	testHydration,
} from "../../tests/react-hydration";

// Import the custom element definition
import "./switch.js";

// Switch uses ElementInternals for role/aria-checked/aria-disabled and
// delegatesFocus for keyboard accessibility. No host attributes needed.

describe("w-switch React SSR hydration", () => {
	beforeEach(() => {
		setupHydrationWarningCapture();
	});

	afterEach(() => {
		window.__HYDRATION_WARNINGS__ = [];
	});

	test("default hydrates with warnings", async () => {
		const warnings = await testHydration("w-switch", {});
		expect(warnings).not.toEqual([]);
	});

	test("with tabindex hydrates without warnings", async () => {
		const warnings = await testHydration("w-switch", {
			tabindex: 0,
		});
		expect(warnings).toEqual([]);
	});

	test("with aria-label hydrates without warnings", async () => {
		const warnings = await testHydration("w-switch", {
			tabindex: 0,
			"aria-label": "Toggle notifications",
		});
		expect(warnings).toEqual([]);
	});

	test("checked state hydrates without warnings", async () => {
		const warnings = await testHydration("w-switch", {
			tabindex: 0,
			checked: true,
			"aria-label": "Toggle notifications",
		});
		expect(warnings).toEqual([]);
	});

	test("disabled state hydrates without warnings", async () => {
		const warnings = await testHydration("w-switch", {
			tabindex: 0,
			disabled: true,
			"aria-label": "Toggle notifications",
		});
		expect(warnings).toEqual([]);
	});

	test("checked and disabled state hydrates without warnings", async () => {
		const warnings = await testHydration("w-switch", {
			tabindex: 0,
			checked: true,
			disabled: true,
			"aria-label": "Toggle notifications",
		});
		expect(warnings).toEqual([]);
	});

	test("with name and value hydrates without warnings", async () => {
		const warnings = await testHydration("w-switch", {
			tabindex: 0,
			name: "notifications",
			value: "enabled",
			"aria-label": "Toggle notifications",
		});
		expect(warnings).toEqual([]);
	});
});
