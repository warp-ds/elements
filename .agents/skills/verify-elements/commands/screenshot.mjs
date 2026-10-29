import fs from "node:fs";
import path from "node:path";

import { evidenceDir } from "../lib/session.mjs";

export const help = {
	usage: "screenshot [path] [--selector <selector>]",
	about:
		"Screenshot of the full page, or of one element with --selector. Saves to .verify-elements/evidence/<time>-<session>.png " +
		"unless you give a path, and prints the absolute path. The evidence directory survives down.",
	examples: [
		"screenshot",
		"screenshot /tmp/after-enter.png",
		"screenshot --selector w-combobox",
	],
};

export function args({ positional, flags, paths }) {
	const stamp = new Date().toISOString().replace(/[:.]/g, "-");
	return {
		file: positional[0]
			? path.resolve(positional[0])
			: path.join(evidenceDir, `${stamp}-${paths.name}.png`),
		selector: flags.selector,
	};
}

export async function run({ page }, { file, selector }) {
	fs.mkdirSync(path.dirname(file), { recursive: true });
	if (selector) await page.locator(selector).screenshot({ path: file });
	else await page.screenshot({ path: file, fullPage: true });
	return { path: file, selector: selector ?? null };
}
