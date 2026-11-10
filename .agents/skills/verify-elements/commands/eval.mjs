import { needArgs } from "../lib/session.mjs";

export const help = {
	usage: "eval <js>",
	about:
		"Evaluate one JavaScript expression in the page and print the JSON result. An escape hatch for reading state after a user path ran; never proof on its own.",
	examples: [`eval 'document.querySelector("w-combobox").value'`],
};

export function args(input) {
	needArgs(input, 1, help);
	return { js: input.positional[0] };
}

export async function run({ page }, { js }) {
	const value = await page.evaluate(js);
	return {
		value: value ?? null,
		note: "eval reads state; it is never proof on its own.",
	};
}

export const hint = () =>
	'eval takes one JavaScript expression, e.g. document.querySelector("w-combobox").value. Wrap statements as (() => { ...; return x; })().';
