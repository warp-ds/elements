import fs from "node:fs";
import path from "node:path";

import { CTL, fail } from "../lib/session.mjs";

export const help = {
	usage:
		"mount <html> [--with <name,name>] | mount --file <path> [--with <name,name>]",
	about:
		"Replace the page content with the HTML, import /packages/<name>/<name>.ts for each w-<name> tag in it, and wait until they are defined and rendered. " +
		"Clears the event and console logs. Components that a component renders internally are not imported for you: they come back as warnings, because a missing import is a product bug. " +
		"Load them explicitly with --with. Inline <script> tags don't run; inline on* attributes do.",
	examples: [
		`mount '<w-combobox label="Country"><option value="no">Norway</option></w-combobox>' --with textfield`,
		"mount --file /tmp/form.html --with textfield",
	],
};

export function args({ positional, flags }) {
	const html = flags.file
		? fs.readFileSync(path.resolve(String(flags.file)), "utf8")
		: positional[0];
	if (html === undefined)
		fail("mount needs HTML or --file <path>.", `Usage: ${CTL} ${help.usage}`);
	const extra = flags.with
		? String(flags.with)
				.split(",")
				.map((name) => name.trim())
				.filter(Boolean)
		: [];
	return { html, with: extra };
}

export async function mountHtml({ page, state, playgroundUrl }, spec) {
	if (state.leftPlayground) {
		state.navigating = true;
		await page.goto(playgroundUrl).finally(() => (state.navigating = false));
		state.leftPlayground = null;
	}
	await page.waitForFunction(() => window.playground?.ready);
	state.consoleLog = [];
	state.mountedAt = Date.now();
	const result = await page.evaluate(
		({ html, extra }) => window.playground.mount(html, { with: extra }),
		{ html: spec.html, extra: spec.with },
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
