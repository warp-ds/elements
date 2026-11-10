import { needArgs } from "../lib/session.mjs";

export const help = {
	usage: "inspect <selector>",
	about:
		"Show an element's attributes, its Lit properties, its internal state and the start of its shadow DOM. Works in every browser. " +
		"Use it to understand why a component is in the state it's in, after the user path ran; it's never proof on its own.",
	examples: ["inspect w-combobox", `inspect 'role=textbox[name="Country"]'`],
};

export function args(input) {
	needArgs(input, 1, help);
	return { selector: input.positional[0] };
}

export function run({ page }, { selector }) {
	return page.locator(selector).evaluate(
		(el, patterns) => {
			const serialize = window.playground.serialize;
			const attributes = Object.fromEntries(
				Array.from(el.attributes, (a) => [a.name, a.value]),
			);
			const properties = {};
			const state = {};
			for (const [name, options] of el.constructor.elementProperties ?? []) {
				if (typeof name !== "string") continue;
				const target =
					options.state || name.startsWith("_") ? state : properties;
				target[name] = serialize(el[name]);
			}
			const shadow = el.shadowRoot?.innerHTML
				.replace(new RegExp(patterns.comments, "g"), "")
				.replace(new RegExp(patterns.spaces, "g"), " ")
				.trim();
			return {
				tag: el.localName,
				attributes,
				properties,
				state,
				shadowHtml: shadow ? shadow.slice(0, 1500) : null,
				shadowHtmlLength: shadow?.length ?? 0,
			};
		},
		{ comments: "<!--[^>]*-->", spaces: "\\s+" },
	);
}
