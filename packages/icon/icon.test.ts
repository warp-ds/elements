import { html } from "lit";

import { afterEach, describe, expect, test, vi } from "vitest";
import { render } from "vitest-browser-lit";

import type { WarpIcon } from "./icon.js";
import "./icon.js";

// ─── helpers ────────────────────────────────────────────────────────────────

function getInner(el: HTMLElement) {
	return el.shadowRoot?.querySelector<HTMLElement>(".w-icon") ?? null;
}

function getVisibility(el: HTMLElement): string | null {
	const inner = getInner(el);
	return inner ? getComputedStyle(inner).visibility : null;
}

function makeSvgResponse(): Response {
	return new Response(
		'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"></svg>',
		{ status: 200, headers: { "Content-Type": "image/svg+xml" } },
	);
}

// Each mock-based test uses a name that is unique within the current process
// lifetime, preventing a warm module-level cache from bypassing a fetch spy.
let _uid = 0;
const uid = () => `TestIcon${_uid++}`;

// ─── existing behaviour ──────────────────────────────────────────────────────

test("renders the icon", async () => {
	const component = html`<w-icon name="Plus" data-testid="icon"></w-icon>`;

	const page = render(component);
	await expect.element(page.getByTestId("icon")).toBeVisible();
});

test("defaults to medium size when no size attribute is set", async () => {
	const component = html`<w-icon name="Plus" data-testid="icon"></w-icon>`;

	const page = render(component);
	const el = page.getByTestId("icon").element() as HTMLElement;

	// The size attribute should not be reflected (to avoid hydration mismatch)
	expect(el.hasAttribute("size")).toBe(false);

	// But the medium size class should still be applied
	await expect
		.poll(() => {
			const inner = el.shadowRoot?.querySelector(".w-icon");
			return inner?.classList.contains("w-icon--m");
		})
		.toBe(true);
});

test("defaults to en locale when no locale attribute is set", async () => {
	const component = html`<w-icon name="Plus" data-testid="icon"></w-icon>`;

	const page = render(component);
	const el = page.getByTestId("icon").element() as HTMLElement;

	// The locale attribute should not be reflected (to avoid hydration mismatch)
	expect(el.hasAttribute("locale")).toBe(false);
});

test("uses specified size when size attribute is set", async () => {
	const component = html`<w-icon
		name="Plus"
		size="small"
		data-testid="icon"
	></w-icon>`;

	const page = render(component);
	const el = page.getByTestId("icon").element() as HTMLElement;

	// The size attribute should be reflected
	expect(el.getAttribute("size")).toBe("small");

	// And the small size class should be applied
	await expect
		.poll(() => {
			const inner = el.shadowRoot?.querySelector(".w-icon");
			return inner?.classList.contains("w-icon--s");
		})
		.toBe(true);
});

test("uses specified locale when locale attribute is set", async () => {
	const component = html`<w-icon
		name="Plus"
		locale="nb"
		data-testid="icon"
	></w-icon>`;

	const page = render(component);
	const el = page.getByTestId("icon").element() as HTMLElement;

	// The locale attribute should be reflected
	expect(el.getAttribute("locale")).toBe("nb");
});

test("uses html lang attribute when no locale attribute is set", async () => {
	const originalLang = document.documentElement.lang;

	try {
		document.documentElement.lang = "fi";

		const component = html`<w-icon name="Plus" data-testid="icon"></w-icon>`;
		const page = render(component);
		const el = page.getByTestId("icon").element() as HTMLElement;

		// The component should use the html lang value as its locale
		expect((el as WarpIcon).locale).toBe("fi");
	} finally {
		document.documentElement.lang = originalLang;
	}
});

// ─── FOUC prevention ─────────────────────────────────────────────────────────

describe("FOUC prevention", () => {
	afterEach(() => {
		vi.restoreAllMocks();
	});

	test("icon is hidden before SVG loads and visible after", async () => {
		let resolveFetch!: (r: Response) => void;
		vi.spyOn(globalThis, "fetch").mockReturnValueOnce(
			new Promise<Response>((r) => {
				resolveFetch = r;
			}),
		);

		const page = render(
			html`<w-icon name="${uid()}" data-testid="icon"></w-icon>`,
		);
		const el = page.getByTestId("icon").element() as HTMLElement;

		// Wait for shadow DOM to be present
		await expect.poll(() => getInner(el) !== null).toBe(true);

		// Before the fetch resolves the container must be invisible
		expect(getVisibility(el)).toBe("hidden");

		// Resolve the fetch and confirm the icon becomes visible
		resolveFetch(makeSvgResponse());

		await expect.poll(() => getVisibility(el)).toBe("visible");
	});

	test("layout space is reserved before SVG loads", async () => {
		// A promise that never resolves keeps the icon in the loading state
		vi.spyOn(globalThis, "fetch").mockReturnValueOnce(
			new Promise<Response>(() => {}),
		);

		const page = render(
			html`<w-icon name="${uid()}" size="medium" data-testid="icon"></w-icon>`,
		);
		const el = page.getByTestId("icon").element() as HTMLElement;

		await expect.poll(() => getInner(el) !== null).toBe(true);

		// The host must occupy space even while the icon is hidden
		const rect = el.getBoundingClientRect();
		expect(rect.width).toBeGreaterThan(0);
		expect(rect.height).toBeGreaterThan(0);
	});

	test("multiple instances of the same icon share a single fetch request", async () => {
		const fetchSpy = vi
			.spyOn(globalThis, "fetch")
			.mockImplementation(() => Promise.resolve(makeSvgResponse()));

		const name = uid();
		const page = render(html`
			<w-icon name="${name}" data-testid="icon-a"></w-icon>
			<w-icon name="${name}" data-testid="icon-b"></w-icon>
		`);

		const elA = page.getByTestId("icon-a").element() as HTMLElement;
		const elB = page.getByTestId("icon-b").element() as HTMLElement;

		await expect
			.poll(() => getInner(elA)?.classList.contains("w-icon--ready"))
			.toBe(true);
		await expect
			.poll(() => getInner(elB)?.classList.contains("w-icon--ready"))
			.toBe(true);

		// Both instances resolved but only one HTTP request was issued
		expect(fetchSpy.mock.calls.length).toBeLessThanOrEqual(1);
	});

	test("changing name while a fetch is in flight uses the latest name", async () => {
		let resolveFirst!: (r: Response) => void;
		const nameA = uid();
		const nameB = uid();

		vi.spyOn(globalThis, "fetch")
			.mockReturnValueOnce(
				// Icon A: deliberately slow — will be resolved after name changes
				new Promise<Response>((r) => {
					resolveFirst = r;
				}),
			)
			.mockImplementation(() => Promise.resolve(makeSvgResponse()));

		const container = document.createElement("div");
		document.body.appendChild(container);
		container.innerHTML = `<w-icon name="${nameA}"></w-icon>`;

		const el = container.querySelector("w-icon") as HTMLElement & WarpIcon;

		// Wait for Lit's first render so loadIcon() for A has started and is
		// awaiting the slow fetch before we switch to B
		await el.updateComplete;

		// Switch to B — loadIcon() for B runs with a new token, invalidating A's
		el.setAttribute("name", nameB);

		// Let the stale fetch for A complete — it must be silently discarded
		resolveFirst(makeSvgResponse());

		// The icon should end up in the ready state under the B name
		await expect
			.poll(() => getInner(el)?.classList.contains("w-icon--ready"))
			.toBe(true);

		expect(el.getAttribute("name")).toBe(nameB);

		document.body.removeChild(container);
	});

	test("failed fetch leaves icon hidden", async () => {
		vi.spyOn(globalThis, "fetch").mockRejectedValue(
			new Error("Network failure"),
		);

		const page = render(
			html`<w-icon name="${uid()}" data-testid="icon"></w-icon>`,
		);
		const el = page.getByTestId("icon").element() as HTMLElement;

		// Give the rejected promise time to settle
		await new Promise<void>((r) => setTimeout(r, 50));

		// The icon must remain hidden — never apply the ready class on failure
		expect(getInner(el)?.classList.contains("w-icon--ready")).toBe(false);
	});
});
