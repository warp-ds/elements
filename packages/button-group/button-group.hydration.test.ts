import { afterEach, beforeEach, describe, expect, test } from "vitest";
import {
	setupHydrationWarningCapture,
	testHydration,
} from "../../tests/react-hydration.js";

import "./button-group.js";

describe("w-button-group React SSR hydration", () => {
	beforeEach(() => setupHydrationWarningCapture());
	afterEach(() => {
		window.__HYDRATION_WARNINGS__ = [];
	});

	test("default (no attributes) hydrates without warnings", async () => {
		const warnings = await testHydration("w-button-group", {});
		expect(warnings).toEqual([]);
	});
});
