import fs from "node:fs";

import { CTL, fail, fromCaller } from "../lib/session.mjs";

export const help = {
	usage:
		"mount <html> [--with <name,name>] [--late] | mount --file <path> [--with <name,name>] [--late]",
	about:
		"Replace the page content with the HTML, import /packages/<name>/<name>.ts for each w-<name> tag in it, and wait until they are defined and rendered. " +
		"The components are defined before the HTML goes in. With --late the HTML goes in first and the components are defined one at a time in document order, " +
		"each rendering before the next, on a freshly loaded page, as when server-rendered HTML upgrades while its scripts load. Use it to check that a container works when its children upgrade after it. " +
		"Clears the event and console logs and moves the mouse to the top-left corner, so nothing starts hovered. Components that a component renders internally are not imported for you: they come back as warnings, because a missing import is a product bug. " +
		"Load them explicitly with --with. Inline <script> tags don't run; inline on* attributes do.",
	examples: [
		`mount '<w-combobox label="Country"><option value="no">Norway</option></w-combobox>'`,
		"mount --file packages/combobox/features/fixtures/options.html",
		`mount '<w-tabs><w-tab for="one">One</w-tab><w-tab-panel id="one">First</w-tab-panel></w-tabs>' --late`,
	],
};

export const booleanFlags = ["late"];

export function args({ positional, flags }) {
	const html = flags.file
		? fs.readFileSync(fromCaller(flags.file), "utf8")
		: positional[0];
	if (html === undefined)
		fail("mount needs HTML or --file <path>.", `Usage: ${CTL} ${help.usage}`);
	const extra = flags.with
		? String(flags.with)
				.split(",")
				.map((name) => name.trim())
				.filter(Boolean)
		: [];
	return { html, with: extra, late: Boolean(flags.late) };
}

export async function mountHtml({ page, state, playgroundUrl }, spec) {
	// Custom elements can't be undefined, so --late needs a fresh page to define them again.
	if (state.leftPlayground || spec.late) {
		state.navigating = true;
		await page.goto(playgroundUrl).finally(() => (state.navigating = false));
		state.leftPlayground = null;
	}
	await page.waitForFunction(() => window.playground?.ready);
	// The pointer stays where the last journey left it, which would leave a :hover on the new content.
	await page.mouse.move(0, 0);
	state.consoleLog = [];
	state.mountedAt = Date.now();
	const result = await page.evaluate(
		({ html, extra, late }) =>
			window.playground.mount(html, { with: extra, late }),
		{ html: spec.html, extra: spec.with, late: spec.late },
	);
	state.lastMountResult = {
		...result,
		at: new Date(state.mountedAt).toISOString(),
	};
	const consoleErrors = state.consoleLog.filter(
		(m) => m.type === "error" || m.type === "pageerror",
	);
	return { ...result, consoleErrors };
}

export async function run(ctx, spec) {
	ctx.state.lastMount = spec;
	const result = await mountHtml(ctx, spec);
	if (!result.errors.length && !result.undefinedTags.length) return result;
	return {
		ok: false,
		...result,
		error: "Some components didn't load.",
		hint: "Every w-<name> tag needs /packages/<name>/<name>.ts. Check the tag spelling and the errors list, then run console.",
	};
}
