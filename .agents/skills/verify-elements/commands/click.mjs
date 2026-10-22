import { pointerAction } from "../lib/pointer.mjs";
import { needArgs } from "../lib/session.mjs";

export const help = {
	usage: "click <selector>",
	about:
		"Move the mouse to the element and click it, after Playwright's visibility and enabled checks.",
	examples: [`click 'role=option[name="Norway"]'`],
};

export function args(input) {
	needArgs(input, 1, help);
	return { selector: input.positional[0] };
}

export async function run({ page, act, actionTimeout }, { selector }) {
	let extra = {};
	const result = await act(async () => {
		extra = await pointerAction(page.locator(selector), "click", actionTimeout);
	});
	return { ...result, ...extra };
}
