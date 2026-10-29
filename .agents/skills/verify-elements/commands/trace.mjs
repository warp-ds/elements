import fs from "node:fs";
import path from "node:path";

import { requireChromium } from "../lib/chromium.mjs";
import { CTL, evidenceDir, fail } from "../lib/session.mjs";

export const help = {
	usage: "trace start | trace stop [path]",
	about:
		"Record a performance trace between start and stop (Chromium only). stop saves the trace to .verify-elements/evidence/ unless you give a path, " +
		"and prints a summary: how many tasks ran, how many took over 50 ms, and the five longest. Open the file in Chrome DevTools' Performance panel for the full picture.",
	examples: ["trace start", "trace stop", "trace stop /tmp/typing.json"],
};

export function args({ positional, paths }) {
	const [action, file] = positional;
	if (action === "start") return { action };
	if (action !== "stop")
		fail("trace needs start or stop.", `Usage: ${CTL} ${help.usage}`);
	const stamp = new Date().toISOString().replace(/[:.]/g, "-");
	return {
		action,
		file: file
			? path.resolve(file)
			: path.join(evidenceDir, `${stamp}-${paths.name}-trace.json`),
	};
}

export async function run(ctx, { action, file }) {
	requireChromium(ctx, "trace");
	if (action === "start") {
		await ctx.browser.startTracing(ctx.page);
		ctx.state.tracing = true;
		return { tracing: true };
	}
	if (!ctx.state.tracing)
		throw new Error("No trace is running. Run trace start first.");
	const buffer = await ctx.browser.stopTracing();
	ctx.state.tracing = false;
	fs.mkdirSync(path.dirname(file), { recursive: true });
	fs.writeFileSync(file, buffer);
	const tasks = (JSON.parse(buffer.toString()).traceEvents ?? [])
		.filter((event) => event.name === "RunTask" && event.dur)
		.map((event) => Math.round(event.dur / 100) / 10)
		.sort((a, b) => b - a);
	return {
		path: file,
		sizeKb: Math.round(buffer.length / 1024),
		tasks: tasks.length,
		tasksOver50ms: tasks.filter((ms) => ms > 50).length,
		longestTasksMs: tasks.slice(0, 5),
	};
}
