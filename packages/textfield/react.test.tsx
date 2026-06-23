import React from "react";
import { userEvent } from "vitest/browser";
import { render } from "vitest-browser-react";
import { expect, test, vi } from "vitest";
import { TextField } from "./react.js";
import "./textfield.js";

test("onChange and onInput have the expected types", async () => {
	const onChange = vi.fn();
	const onInput = vi.fn();

	const page = await render(
		<TextField
			name="test"
			label="React TextField"
			onChange={(e) => {
				onChange(e.target.value);
			}}
			onInput={(e) => {
				onInput(e.target.value);
			}}
		/>,
	);

	await page.getByLabelText("React TextField").fill("Hello, World");

	expect(onInput).toHaveBeenCalled();
	expect(onChange).not.toHaveBeenCalled();

	await userEvent.tab(); // trigger a blur to fire the change event
	expect(onChange).toHaveBeenCalledWith("Hello, World");
});
