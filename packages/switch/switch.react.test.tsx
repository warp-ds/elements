import React, { act } from "react";
import { hydrateRoot, type Root } from "react-dom/client";
import { renderToString } from "react-dom/server";
import { expect, test, vi } from "vitest";

import { Switch } from "./react.js";
import "./switch.js";
import type { WarpSwitch } from "./switch.js";

test("hydrates the Switch wrapper without an explicit tabIndex and without warnings or errors", async () => {
	const ref = React.createRef<WarpSwitch>();
	const element = <Switch ref={ref} aria-label="Toggle notifications" />;
	const html = renderToString(element);
	expect(html).toBe('<w-switch aria-label="Toggle notifications"></w-switch>');

	const container = document.createElement("div");
	document.body.appendChild(container);
	const testEnvironment = globalThis as typeof globalThis & {
		IS_REACT_ACT_ENVIRONMENT?: boolean;
	};
	const previousActEnvironment = testEnvironment.IS_REACT_ACT_ENVIRONMENT;
	testEnvironment.IS_REACT_ACT_ENVIRONMENT = true;
	const consoleError = vi.spyOn(console, "error");
	const consoleWarn = vi.spyOn(console, "warn");
	const onRecoverableError = vi.fn();
	let root: Root | undefined;

	try {
		container.innerHTML = html;
		const switchElement = container.querySelector("w-switch")!;
		// Let Lit reflect its default before React checks the server-rendered host.
		await switchElement.updateComplete;
		expect(switchElement.getAttribute("tabindex")).toBe("0");

		await act(async () => {
			root = hydrateRoot(container, element, { onRecoverableError });
		});
		await switchElement.updateComplete;

		expect(ref.current).toBe(switchElement);
		expect(switchElement.tabIndex).toBe(0);
		expect(switchElement.getAttribute("tabindex")).toBe("0");
		switchElement.focus();
		expect(document.activeElement).toBe(switchElement);
		expect(onRecoverableError).not.toHaveBeenCalled();
		expect(consoleError).not.toHaveBeenCalled();
		expect(consoleWarn).not.toHaveBeenCalled();
	} finally {
		try {
			await act(async () => root?.unmount());
		} finally {
			testEnvironment.IS_REACT_ACT_ENVIRONMENT = previousActEnvironment;
			consoleError.mockRestore();
			consoleWarn.mockRestore();
			container.remove();
		}
	}
});
