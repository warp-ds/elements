import React from "react";
import { renderToString } from "react-dom/server";
import { beforeAll, describe, expect, test } from "vitest";
import { render } from "vitest-browser-react";

import type { WarpDatepicker } from "./datepicker.js";
import { DatePicker } from "./react.js";

beforeAll(async () => {
	// Ensure a source import hasn't already registered another implementation.
	expect(customElements.get("w-datepicker")).toBeUndefined();

	const bundleUrl = new URL("../../eik/index.js", import.meta.url).href;
	await import(/* @vite-ignore */ bundleUrl);

	await customElements.whenDefined("w-datepicker");
});

describe("DatePicker React Wrapper", () => {
	test("does not render headerFormat as an attribute on the server side", () => {
		const html = renderToString(<DatePicker headerFormat="MMM yyyy" />);

		expect(html).toContain("<w-datepicker>");
	});

	test("does not render weekdayFormat as an attribute on the server side", () => {
		const html = renderToString(<DatePicker weekdayFormat="EEE" />);

		expect(html).toContain("<w-datepicker>");
	});

	test("does not render dayFormat as an attribute on the server side", () => {
		const html = renderToString(<DatePicker dayFormat="dd" />);

		expect(html).toContain("<w-datepicker>");
	});

	test("does not render helpText as an attribute on the server side", () => {
		const html = renderToString(<DatePicker helpText="Choose a date" />);

		expect(html).toContain("<w-datepicker>");
	});

	test("does not render isDayDisabled as an attribute on the server side", () => {
		const isDayDisabled = (day: Date) => day.getDay() === 0;
		const html = renderToString(<DatePicker isDayDisabled={isDayDisabled} />);

		expect(html).toContain("<w-datepicker>");
	});

	test("assigns headerFormat to the registered element on the client side", async () => {
		const ref = React.createRef<WarpDatepicker>();
		await render(<DatePicker ref={ref} headerFormat="MMM yyyy" />);
		const datepicker = ref.current!;
		await datepicker.updateComplete;

		expect(datepicker.headerFormat).toBe("MMM yyyy");
	});

	test("assigns weekdayFormat to the registered element on the client side", async () => {
		const ref = React.createRef<WarpDatepicker>();
		await render(<DatePicker ref={ref} weekdayFormat="EEE" />);
		const datepicker = ref.current!;
		await datepicker.updateComplete;

		expect(datepicker.weekdayFormat).toBe("EEE");
	});

	test("assigns dayFormat to the registered element on the client side", async () => {
		const ref = React.createRef<WarpDatepicker>();
		await render(<DatePicker ref={ref} dayFormat="dd" />);
		const datepicker = ref.current!;
		await datepicker.updateComplete;

		expect(datepicker.dayFormat).toBe("dd");
	});

	test("assigns helpText to the registered element on the client side", async () => {
		const ref = React.createRef<WarpDatepicker>();
		await render(<DatePicker ref={ref} helpText="Choose a date" />);
		const datepicker = ref.current!;
		await datepicker.updateComplete;

		expect(datepicker.helpText).toBe("Choose a date");
		expect(datepicker.getAttribute("help-text")).toBe("Choose a date");
	});

	test("assigns isDayDisabled to the registered element on the client side", async () => {
		const ref = React.createRef<WarpDatepicker>();
		const isDayDisabled = (day: Date) => day.getDay() === 0;
		await render(<DatePicker ref={ref} isDayDisabled={isDayDisabled} />);
		const datepicker = ref.current!;
		await datepicker.updateComplete;

		expect(datepicker.isDayDisabled).toBe(isDayDisabled);
		expect(datepicker.hasAttribute("isdaydisabled")).toBe(false);
	});
});
