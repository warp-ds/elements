import { pointerAction } from "../lib/pointer.mjs";
import { needArgs } from "../lib/session.mjs";

export const help = {
	usage: "hover <selector>",
	about: "Move the mouse over the element.",
	examples: [`hover 'role=option[name="Sweden"]'`],
};

export function args(input) {
	needArgs(input, 1, help);
	return { selector: input.positional[0] };
}

export async function run({ page, act, actionTimeout }, { selector }) {
	let extra = {};
	const result = await act(async () => {
		extra = await pointerAction(page.locator(selector), "hover", actionTimeout);
	});
	return { ...result, ...extra };
}
