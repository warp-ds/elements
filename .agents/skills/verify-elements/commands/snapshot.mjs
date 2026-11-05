export const help = {
	usage: "snapshot [selector]",
	about:
		"Accessibility tree (Playwright aria snapshot) of the mounted content or of the selector: roles, names, expanded and selected state, " +
		"and input values, through shadow DOM. One line per array entry.",
	examples: ["snapshot", "snapshot 'role=listbox'"],
};

export const args = ({ positional }) => ({
	selector: positional[0] ?? "#mount",
});

export async function run({ page }, { selector }) {
	const yaml = await page.locator(selector).ariaSnapshot();
	return { selector, snapshot: yaml.split("\n") };
}
