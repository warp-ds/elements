import fs from "node:fs";
import { createRequire } from "node:module";
import path from "node:path";

import { repoRoot } from "../lib/session.mjs";

const AXE = createRequire(import.meta.url).resolve("axe-core/axe.min.js");
const TEST_TAGS = /values:\s*\[([^\]]*)\]/;
const QUOTED = /"([^"]+)"/g;

function testTags() {
	const setup = fs.readFileSync(path.join(repoRoot, "setup-tests.ts"), "utf8");
	const list = setup.match(TEST_TAGS)?.[1];
	if (!list)
		throw new Error(
			"Couldn't read the axe tags from setup-tests.ts. Pass them with --tags.",
		);
	return Array.from(list.matchAll(QUOTED), (m) => m[1]);
}

export const help = {
	usage: "a11y [selector] [--tags <tag,tag,...>]",
	about:
		"Run axe-core on the mounted content, or on one element, and list the violations with their impact and the elements involved. Works in every browser. " +
		"Uses the same WCAG tags as the a11y tests in setup-tests.ts unless you pass --tags. " +
		"axe checks elements one at a time, so it misses ARIA that is split across shadow roots, such as a role on a host and focus on an inner input; read snapshot too.",
	examples: ["a11y", "a11y w-combobox", "a11y --tags best-practice"],
};

export const args = ({ positional, flags }) => ({
	selector: positional[0] ?? "#mount",
	tags: flags.tags ? String(flags.tags).split(",") : testTags(),
});

export async function run({ page }, { selector, tags }) {
	if (!(await page.evaluate(() => Boolean(window.axe))))
		await page.addScriptTag({ path: AXE });
	const result = await page.locator(selector).evaluate(async (el, values) => {
		const { violations, passes, incomplete } = await window.axe.run(el, {
			runOnly: { type: "tag", values },
		});
		return {
			passes: passes.length,
			incomplete: incomplete.map((r) => r.id),
			violations: violations.map((v) => ({
				id: v.id,
				impact: v.impact,
				help: v.help,
				helpUrl: v.helpUrl,
				nodes: v.nodes.map((n) => ({
					target: n.target,
					summary: n.failureSummary,
				})),
			})),
		};
	}, tags);
	return { selector, tags, count: result.violations.length, ...result };
}
