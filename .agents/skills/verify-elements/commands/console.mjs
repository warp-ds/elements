export const help = {
	usage: "console",
	about: "Console messages and uncaught page errors since the last mount.",
	examples: ["console"],
};

export function run({ state }) {
	const errors = state.consoleLog.filter(
		(m) => m.type === "error" || m.type === "pageerror",
	).length;
	return { errors, messages: state.consoleLog };
}
