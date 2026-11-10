import { needArgs } from "../lib/session.mjs";

export const help = {
	usage: "type <selector> <text> [--delay <ms>]",
	about:
		"Focus the element and send real key events one character at a time (keydown, input, keyup), like a user typing. Appends at the caret. " +
		"Focus moves programmatically, like tabbing in; click first if the pointer path matters. Prints the focused element and the component events the typing caused.",
	examples: [`type 'role=textbox[name="Country"]' nor`],
};

export function args(input) {
	needArgs(input, 2, help);
	const [selector, text] = input.positional;
	return { selector, text, delay: Number(input.flags.delay ?? 10) };
}

export const run = ({ page, act }, { selector, text, delay }) =>
	act(() => page.locator(selector).pressSequentially(text, { delay }));
