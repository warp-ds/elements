import React, { act } from "react";
import { hydrateRoot, type Root } from "react-dom/client";
import { renderToString } from "react-dom/server";
import { beforeAll, describe, expect, test, vi } from "vitest";
import { render } from "vitest-browser-react";

import type { WarpButton } from "./button.js";
import { Button } from "./react.js";

beforeAll(async () => {
	// Ensure a source import hasn't already registered another implementation.
	expect(customElements.get("w-button")).toBeUndefined();

	const bundleUrl = new URL("../../eik/index.js", import.meta.url).href;
	await import(/* @vite-ignore */ bundleUrl);

	await customElements.whenDefined("w-button");
});

describe("Button React Wrapper", () => {
	test("hydrates a default button with role and tabindex without warnings or errors", async () => {
		const ref = React.createRef<WarpButton>();
		const element = <Button ref={ref}>Save</Button>;
		const html = renderToString(element);
		expect(html).toBe("<w-button>Save</w-button>");

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
			const button = container.querySelector("w-button")!;
			// Do the Eik upgrading and adding attributes before React hydrates.
			// That way role and tabindex have been changed by Lit at runtime and we
			// can later see if this causes a hydration warning
			// which it shouldnt because the wrapper should suppress the warnings
			await button.updateComplete;
			expect(button.getAttribute("role")).toBe("button");
			expect(button.getAttribute("tabindex")).toBe("0");

			await act(async () => {
				root = hydrateRoot(container, element, { onRecoverableError });
			});
			await button.updateComplete;

			// Check that hydration reused the server-rendered host, and did not replace it.
			expect(ref.current).toBe(button);

			// check that role and tabindex are still correctly set
			expect(button.getAttribute("role")).toBe("button");
			expect(button.getAttribute("tabindex")).toBe("0");

			// finally ensure no warnings/errors occurred
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

	test("does not render fullWidth as an attribute on the server side", () => {
		const html = renderToString(<Button fullWidth={true}>Save</Button>);

		expect(html).toMatch("<w-button>");
	});

	test("does not render iconOnly as an attribute on the server side", () => {
		const html = renderToString(<Button iconOnly={true}>Save</Button>);

		expect(html).toContain("<w-button>");
	});

	test("assigns fullWidth to the registered element on the client side", async () => {
		const ref = React.createRef<WarpButton>();
		await render(
			<Button ref={ref} fullWidth={true}>
				Save
			</Button>,
		);
		const button = ref.current!;
		await button.updateComplete;

		expect(button.fullWidth).toBe(true);
		expect(button.hasAttribute("full-width")).toBe(true);
	});

	test("assigns iconOnly to the registered element on the client side", async () => {
		const ref = React.createRef<WarpButton>();
		await render(
			<Button ref={ref} iconOnly={true}>
				Save
			</Button>,
		);
		const button = ref.current!;
		await button.updateComplete;

		expect(button.iconOnly).toBe(true);
		expect(button.hasAttribute("icon-only")).toBe(true);
	});
});
