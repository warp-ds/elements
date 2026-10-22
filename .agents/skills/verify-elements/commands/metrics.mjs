import { cdp } from "../lib/chromium.mjs";

const KEEP = [
	"LayoutCount",
	"RecalcStyleCount",
	"LayoutDuration",
	"RecalcStyleDuration",
	"ScriptDuration",
	"TaskDuration",
	"JSHeapUsedSize",
	"Nodes",
];

export const help = {
	usage: "metrics",
	about:
		"Browser performance counters, and how much each changed since the previous metrics call (Chromium only). " +
		"It covers layouts, style recalculations, script and task time in ms, JS heap bytes and DOM nodes. Call it before and after an action to see what the action cost.",
	examples: ["metrics"],
};

const toMs = (name, value) =>
	name.endsWith("Duration") ? Math.round(value * 10000) / 10 : value;

export async function run(ctx) {
	const session = await cdp(ctx, "metrics");
	await session.send("Performance.enable");
	const { metrics } = await session.send("Performance.getMetrics");
	const current = Object.fromEntries(
		metrics
			.filter((m) => KEEP.includes(m.name))
			.map((m) => [m.name, toMs(m.name, m.value)]),
	);
	const previous = ctx.state.lastMetrics;
	ctx.state.lastMetrics = current;
	const sinceLastCall = previous
		? Object.fromEntries(
				Object.entries(current).map(([name, value]) => [
					name,
					Math.round((value - previous[name]) * 10) / 10,
				]),
			)
		: null;
	return { current, sinceLastCall };
}
