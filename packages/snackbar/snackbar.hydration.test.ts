import { afterEach, beforeEach, describe, expect, test } from "vitest";
import {
	setupHydrationWarningCapture,
	testHydration,
} from "../../tests/react-hydration";

import "./snackbar.js";

describe("w-snackbar React SSR hydration", () => {
	beforeEach(() => setupHydrationWarningCapture());
	afterEach(() => {
		window.__HYDRATION_WARNINGS__ = [];
	});

	test("default (no attributes) hydrates without warnings", async () => {
		const warnings = await testHydration("w-slider", {});
		expect(warnings).toEqual([]);
	});
});
