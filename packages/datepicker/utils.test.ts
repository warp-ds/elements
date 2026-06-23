import { describe, expect, test } from "vitest";

import {
	getDateInputDisplayValue,
	getDateInputPlaceholder,
	getDateInputType,
} from "./utils.js";

describe("getDateInputType", () => {
	test("uses text input for Safari to avoid Safari showing a concrete empty-state date", () => {
		expect(
			getDateInputType(
				"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Safari/605.1.15",
			),
		).toBe("text");
	});

	test("uses text input for iOS browsers", () => {
		expect(
			getDateInputType(
				"Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/120.0.0.0 Mobile/15E148 Safari/604.1",
			),
		).toBe("text");
	});

	test("keeps date input for Chrome on desktop", () => {
		expect(
			getDateInputType(
				"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
			),
		).toBe("date");
	});
});

describe("getDateInputPlaceholder", () => {
	test("returns a locale-shaped date format hint", () => {
		expect(getDateInputPlaceholder("en")).toBe("dd/mm/yyyy");
		expect(getDateInputPlaceholder("en-GB")).toBe("dd/mm/yyyy");
		expect(getDateInputPlaceholder("nb")).toBe("dd.mm.yyyy");
	});
});

describe("getDateInputDisplayValue", () => {
	test("formats ISO dates using the locale-shaped date format hint", () => {
		expect(getDateInputDisplayValue("2026-03-25", "en")).toBe("25/03/2026");
		expect(getDateInputDisplayValue("2026-03-25", "nb")).toBe("25.03.2026");
	});

	test("keeps non-ISO values unchanged", () => {
		expect(getDateInputDisplayValue("25/03/2026", "en")).toBe("25/03/2026");
	});
});
