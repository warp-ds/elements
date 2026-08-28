import { afterEach, beforeEach, describe, expect, test } from "vitest";
import {
	setupHydrationWarningCapture,
	testHydration,
} from "../../tests/react-hydration";

import "./expandable.js";

describe("w-expandable React SSR hydration", () => {
	beforeEach(() => setupHydrationWarningCapture());
	afterEach(() => {
		window.__HYDRATION_WARNINGS__ = [];
	});

	test("default (no attributes) hydrates without warnings", async () => {
		const warnings = await testHydration("w-expandable", {});
		expect(warnings).toEqual([]);
	});

	test("with title hydrates without warnings", async () => {
		const warnings = await testHydration("w-expandable", {
			title: "Show more",
		});
		expect(warnings).toEqual([]);
	});

	test("expanded state hydrates without warnings", async () => {
		const warnings = await testHydration("w-expandable", {
			title: "Show more",
			expanded: true,
		});
		expect(warnings).toEqual([]);
	});

	test("with box variant hydrates without warnings", async () => {
		const warnings = await testHydration("w-expandable", {
			title: "Show more",
			box: true,
		});
		expect(warnings).toEqual([]);
	});

	test("with bleed hydrates without warnings", async () => {
		const warnings = await testHydration("w-expandable", {
			title: "Show more",
			bleed: true,
		});
		expect(warnings).toEqual([]);
	});

	test("with animated hydrates without warnings", async () => {
		const warnings = await testHydration("w-expandable", {
			title: "Show more",
			animated: true,
		});
		expect(warnings).toEqual([]);
	});

	test.each(["default", "box", "box-bleed", "default-with-divider"])(
		"%s variant hydrates without warnings and upgrades the variant property",
		async (variant) => {
			const warnings = await testHydration("w-expandable", {
				title: "Show more",
				variant,
			});

			const el = document.createElement("w-expandable") as HTMLElement & {
				variant?: string;
			};
			el.setAttribute("variant", variant);
			document.body.appendChild(el);
			await customElements.whenDefined("w-expandable");
			await new Promise((resolve) => setTimeout(resolve, 0));

			try {
				expect(warnings).toEqual([]);
				expect(el.variant).toBe(variant);
			} finally {
				el.remove();
			}
		},
	);
});
