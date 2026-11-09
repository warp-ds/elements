import { needArgs } from "../lib/session.mjs";

export const help = {
	usage: "box <selector>",
	about:
		"Position and size of every element the selector matches, through shadow DOM: x, y, width and height in CSS pixels from the top left of the viewport. " +
		"Use it for layout behavior, such as an indicator lining up with the active tab, or items sharing a row evenly.",
	examples: ["box 'w-tab'", "box '[part=\"selection\"]'"],
};

export function args(input) {
	needArgs(input, 1, help);
	return { selector: input.positional[0] };
}

export async function run({ page }, { selector }) {
	const boxes = await page.locator(selector).evaluateAll((elements) =>
		elements.map((el) => {
			const rect = el.getBoundingClientRect();
			const round = (n) => Math.round(n * 10) / 10;
			const text = el.textContent?.trim().replace(/\s+/g, " ").slice(0, 30);
			return {
				element:
					el.localName +
					(el.id ? `#${el.id}` : "") +
					(text ? ` "${text}"` : ""),
				x: round(rect.x),
				y: round(rect.y),
				width: round(rect.width),
				height: round(rect.height),
			};
		}),
	);
	if (!boxes.length) throw new Error(`No element matches ${selector}.`);
	return { selector, count: boxes.length, boxes };
}
