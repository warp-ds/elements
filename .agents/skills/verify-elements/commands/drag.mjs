import { CTL, fail, needArgs } from "../lib/session.mjs";

export const help = {
	usage: "drag <selector> --by <dx,dy> | drag <selector> --to <selector>",
	about:
		"Press the mouse on the element's centre, move in 10 steps, release. One command, because mouse state doesn't survive between calls.",
	examples: ["drag 'role=slider' --by 120,0", "drag '#a' --to '#b'"],
};

export function args(input) {
	needArgs(input, 1, help);
	const { by, to } = input.flags;
	if (!by && !to)
		fail(
			"drag needs --by <dx,dy> or --to <selector>.",
			`Usage: ${CTL} ${help.usage}`,
		);
	return { selector: input.positional[0], by, to };
}

async function centerOf(page, selector) {
	const locator = page.locator(selector);
	await locator.scrollIntoViewIfNeeded();
	const box = await locator.boundingBox();
	if (!box)
		throw new Error(
			`${selector} has no bounding box (not rendered, or display: none)`,
		);
	return { x: box.x + box.width / 2, y: box.y + box.height / 2 };
}

export const run = ({ page, act }, { selector, by, to }) =>
	act(async () => {
		const from = await centerOf(page, selector);
		let target;
		if (to) {
			target = await centerOf(page, to);
		} else {
			const [dx, dy] = String(by).split(",").map(Number);
			if (Number.isNaN(dx) || Number.isNaN(dy))
				throw new Error(`--by must be dx,dy in pixels, got "${by}"`);
			target = { x: from.x + dx, y: from.y + dy };
		}
		await page.mouse.move(from.x, from.y);
		await page.mouse.down();
		await page.mouse.move(target.x, target.y, { steps: 10 });
		await page.mouse.up();
	});
