import { needArgs } from "../lib/session.mjs";

const COMMON = [
	"display",
	"visibility",
	"position",
	"width",
	"height",
	"padding-top",
	"padding-left",
	"color",
	"background-color",
	"border-top-color",
	"border-top-width",
	"border-top-left-radius",
	"font-family",
	"font-size",
	"font-weight",
	"line-height",
	"opacity",
	"z-index",
	"box-shadow",
];

export const help = {
	usage: "styles <selector> [--props=<name,name,...>]",
	about:
		"Computed styles of an element, through shadow DOM. Works in every browser. Without --props it shows common layout, colour and typography properties. " +
		"Custom properties work too, so you can see what a design token resolves to: --props=--w-s-color-background. Write --props with = when the first name starts with --.",
	examples: [
		`styles 'role=textbox[name="Country"]'`,
		"styles '[part=options-list]' --props=box-shadow,--w-c-combobox-shadow",
		"styles w-combobox --props=--w-s-color-text,--w-font-family",
	],
};

export function args(input) {
	needArgs(input, 1, help);
	const props = input.flags.props
		? String(input.flags.props)
				.split(",")
				.map((name) => name.trim())
				.filter(Boolean)
		: COMMON;
	return { selector: input.positional[0], props };
}

export async function run({ page }, { selector, props }) {
	const styles = await page.locator(selector).evaluate((el, names) => {
		const computed = getComputedStyle(el);
		return Object.fromEntries(
			names.map((name) => [name, computed.getPropertyValue(name).trim()]),
		);
	}, props);
	const unset = props.filter((name) => name.startsWith("--") && !styles[name]);
	return {
		selector,
		styles,
		...(unset.length ? { unsetCustomProperties: unset } : {}),
	};
}
