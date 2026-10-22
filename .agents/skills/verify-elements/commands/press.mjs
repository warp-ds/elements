import { needArgs } from "../lib/session.mjs";

const UNKNOWN_KEY = /Unknown key/;

export const help = {
	usage: "press <key> [<key> ...] [--selector <selector>]",
	about:
		"Press keys in order on the focused element, or focus --selector first. Uses Playwright key names: " +
		"ArrowDown, Enter, Escape, Tab, Shift+Tab, Home, End, PageUp, PageDown, Backspace, ControlOrMeta+a.",
	examples: [
		"press ArrowDown",
		"press ArrowDown ArrowDown Enter",
		`press Escape --selector 'role=textbox[name="Country"]'`,
	],
};

export function args(input) {
	needArgs(input, 1, help);
	return { keys: input.positional, selector: input.flags.selector };
}

export const run = ({ page, act }, { keys, selector }) =>
	act(async () => {
		if (selector) await page.locator(selector).focus();
		for (const key of keys) await page.keyboard.press(key);
	});

export const hint = (message) =>
	UNKNOWN_KEY.test(message)
		? `Use Playwright key names, as listed in: ${help.about.split(": ")[1]}`
		: undefined;
