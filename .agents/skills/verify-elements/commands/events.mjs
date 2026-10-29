export const help = {
	usage: "events [--type <type>]",
	about:
		"CustomEvents dispatched by any w-* element since the last mount, in order: type, target, insideShadowOf (the host when the target " +
		"lives in a shadow root, so not public API), detail, and time in ms since the mount.",
	examples: ["events", "events --type select"],
};

export const args = ({ flags }) => ({ type: flags.type });

export async function run({ page }, { type }) {
	const all = await page.evaluate(() => window.playground.events());
	const events = type ? all.filter((e) => e.type === type) : all;
	return { count: events.length, events };
}
