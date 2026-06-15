import { afterEach, beforeEach, describe, expect, test } from "vitest";
import {
	setupHydrationWarningCapture,
	testHydration,
	testHydrationWithChildren,
} from "../../tests/react-hydration";

import "../tab/tab.js";
import "../tab-panel/tab-panel.js";
import "./index.js";

describe("w-tabs React SSR hydration", () => {
	beforeEach(() => setupHydrationWarningCapture());
	afterEach(() => {
		window.__HYDRATION_WARNINGS__ = [];
	});

	// Note: w-tabs requires w-tab and w-tab-panel children to function properly.
	// Testing the parent element alone to verify its own attributes don't cause mismatch.
	// Full parent/child hydration requires React component wrappers or framework integration.

	test("default (no attributes) hydrates without warnings", async () => {
		const warnings = await testHydration("w-tabs", {});
		expect(warnings).toEqual([]);
	});

	test("with active prop hydrates without warnings", async () => {
		const warnings = await testHydration("w-tabs", { active: "panel1" });
		expect(warnings).toEqual([]);
	});

	test("with w-tab and w-tab-panel hydrates without warnings as long as you provide slot, ID and active tab ahead of time", async () => {
		const childrenHtml = /* html */ `<w-tab id="t1" slot="tabs" for="tab1"><span>First</span></w-tab><w-tab id="t2" slot="tabs" for="tab2"><span>Second</span></w-tab><w-tab id="t3" slot="tabs" for="tab3"><span>Third</span></w-tab><w-tab-panel id="tab1" slot="panels"><p>Content the first</p></w-tab-panel><w-tab-panel id="tab2" slot="panels"><p>Content the second</p></w-tab-panel><w-tab-panel id="tab3" slot="panels"><p>Content the third</p></w-tab-panel>`;

		const warnings = await testHydrationWithChildren(
			"w-tabs",
			{
				active: "tab1",
			},
			childrenHtml,
		);
		expect(warnings).toEqual([]);
	});

	test.fails(
		"with w-tab and w-tab-panel hydrates with warnings if you omit the client-side added attributes",
		async () => {
			const childrenHtml = /* html */ `<w-tab for="tab1"><span>First</span></w-tab><w-tab for="tab2"><span>Second</span></w-tab><w-tab for="tab3"><span>Third</span></w-tab><w-tab-panel id="tab1"><p>Content the first</p></w-tab-panel><w-tab-panel id="tab2"><p>Content the second</p></w-tab-panel><w-tab-panel id="tab3"><p>Content the third</p></w-tab-panel>`;

			const warnings = await testHydrationWithChildren(
				"w-tabs",
				{},
				childrenHtml,
			);
			expect(warnings).toEqual([]);
		},
	);
});
