export const booleanFlags = ["internal"];

export const help = {
	usage: "events [--type <type>] [--internal]",
	about:
		"CustomEvents dispatched by w-* elements since the last mount, in order: type, target, detail, and time in ms since the mount. " +
		"Only public events by default, the ones a consumer's listener gets. --internal adds events from elements inside shadow roots, with insideShadowOf naming the host.",
	examples: ["events", "events --type select", "events --internal"],
};

export const args = ({ flags }) => ({
	type: flags.type,
	internal: Boolean(flags.internal),
});

export async function run({ page }, { type, internal }) {
	const all = await page.evaluate(() => window.playground.events());
	const events = all
		.filter((event) => internal || !event.insideShadowOf)
		.filter((event) => !type || event.type === type)
		.map(({ insideShadowOf, ...event }) =>
			internal ? { ...event, insideShadowOf } : event,
		);
	return { count: events.length, events };
}
