import { cdp } from "../lib/chromium.mjs";
import { CTL, fail, needArgs } from "../lib/session.mjs";

export const help = {
	usage: "throttle cpu <factor> | throttle off",
	about:
		"Slow the CPU down by a factor, such as 4 for a low-end phone (Chromium only). It stays on until you run throttle off or down. " +
		"Use it with metrics or trace to find work that's only slow on weak devices.",
	examples: ["throttle cpu 4", "throttle off"],
};

export function args(input) {
	needArgs(input, 1, help);
	const [kind, factor] = input.positional;
	if (kind === "off") return { rate: 1 };
	if (kind !== "cpu" || !(Number(factor) >= 1))
		fail(
			"throttle needs cpu <factor> with a factor of 1 or more, or off.",
			`Usage: ${CTL} ${help.usage}`,
		);
	return { rate: Number(factor) };
}

export async function run(ctx, { rate }) {
	const session = await cdp(ctx, "throttle");
	await session.send("Emulation.setCPUThrottlingRate", { rate });
	return { cpuThrottle: rate };
}
