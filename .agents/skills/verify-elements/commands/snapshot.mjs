import { cdp } from "../lib/chromium.mjs";

export const booleanFlags = ["platform"];

export const help = {
	usage: "snapshot [selector] [--platform]",
	about:
		"Accessibility tree (Playwright aria snapshot) of the mounted content or of the selector: roles, names, expanded and selected state, " +
		"and input values, through shadow DOM. One line per array entry. " +
		"--platform reads the browser's own accessibility tree instead, which is what a screen reader gets (Chromium only). It includes roles and states that components set through ElementInternals, such as tab, tabpanel and selected, which Playwright can't see, and relations such as controls and labelledby.",
	examples: [
		"snapshot",
		"snapshot 'role=listbox'",
		"snapshot --platform",
		"snapshot 'w-tabs' --platform",
	],
};

const STATES = [
	"selected",
	"checked",
	"pressed",
	"expanded",
	"disabled",
	"focused",
	"required",
	"invalid",
	"readonly",
];
const RELATIONS = [
	"controls",
	"labelledby",
	"describedby",
	"activedescendant",
	"owns",
];
const FLATTEN = new Set([
	"generic",
	"none",
	"presentation",
	"InlineTextBox",
	"LineBreak",
]);

export const args = ({ positional, flags }) => ({
	selector: positional[0] ?? "#mount",
	platform: Boolean(flags.platform),
});

async function platformTree(ctx, selector) {
	const session = await cdp(ctx, "snapshot --platform");
	await ctx.page
		.locator(selector)
		.first()
		.evaluate((el) => {
			window.__ctlSnapshotTarget = el;
		});
	const { result } = await session.send("Runtime.evaluate", {
		expression: "window.__ctlSnapshotTarget",
	});
	const { node } = await session.send("DOM.describeNode", {
		objectId: result.objectId,
	});
	await session.send("Runtime.evaluate", {
		expression: "delete window.__ctlSnapshotTarget",
	});
	const { nodes } = await session.send("Accessibility.getFullAXTree");
	const byId = new Map(nodes.map((n) => [n.nodeId, n]));
	const byBackend = new Map(
		nodes.filter((n) => n.backendDOMNodeId).map((n) => [n.backendDOMNodeId, n]),
	);
	const root = byBackend.get(node.backendNodeId);
	if (!root)
		throw new Error(`The browser has no accessibility node for ${selector}.`);

	const describe = (n) => {
		const role = n.role?.value;
		const name = n.name?.value;
		return name ? `${role} "${name}"` : role;
	};
	const lines = [];
	const walk = (n, depth, parentName) => {
		const role = n.role?.value;
		const name = n.name?.value ?? "";
		const skipText =
			role === "StaticText" && (name.trim() === "" || name === parentName);
		const keep = !n.ignored && role && !FLATTEN.has(role) && !skipText;
		if (keep) {
			const props = n.properties ?? [];
			const states = STATES.filter((state) =>
				props.some((p) => p.name === state && p.value?.value === true),
			);
			const relations = RELATIONS.flatMap((relation) => {
				const related =
					props.find((p) => p.name === relation)?.value?.relatedNodes ?? [];
				const targets = related
					.map((r) => byBackend.get(r.backendDOMNodeId))
					.filter(Boolean)
					.map(describe);
				return targets.length ? [`${relation}: ${targets.join(", ")}`] : [];
			});
			const label = role === "StaticText" ? `text: ${name}` : describe(n);
			const suffix =
				states.map((state) => ` [${state}]`).join("") +
				(relations.length ? ` (${relations.join("; ")})` : "");
			lines.push(`${"  ".repeat(depth)}- ${label}${suffix}`);
		}
		for (const id of n.childIds ?? []) {
			const child = byId.get(id);
			if (child)
				walk(
					child,
					keep ? depth + 1 : depth,
					keep ? name || parentName : parentName,
				);
		}
	};
	walk(root, 0, "");
	return lines;
}

export async function run(ctx, { selector, platform }) {
	if (platform)
		return {
			selector,
			platform: true,
			snapshot: await platformTree(ctx, selector),
		};
	const yaml = await ctx.page.locator(selector).ariaSnapshot();
	return { selector, snapshot: yaml.split("\n") };
}
