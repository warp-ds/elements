import fs from "node:fs";
import path from "node:path";

import {
	describe,
	kill,
	processTree,
	stillRunning,
} from "../lib/processes.mjs";
import {
	evidenceDir,
	isAlive,
	post,
	readJSON,
	readSession,
	sleep,
} from "../lib/session.mjs";

export const help = {
	usage: "down",
	about:
		"Stop the daemon and every process it started (Vite, the browser), by PID, never by name. Safe to run when nothing is running. " +
		"Evidence in .verify-elements/evidence/ is kept.",
	examples: ["down"],
};

export async function main({ paths }) {
	const session = readSession(paths);
	if (!session)
		return { ok: true, running: false, note: "Nothing to stop.", evidenceDir };

	const tree = isAlive(session.pid) ? processTree(session.pid) : [];
	for (const p of readJSON(paths.processes) ?? [])
		if (!tree.some((t) => t.pid === p.pid)) tree.push(p);

	await post(session, "shutdown", {}, { timeout: 5000 }).catch(() => {});
	const waitForExit = async (ms) => {
		const until = Date.now() + ms;
		while (Date.now() < until && stillRunning(tree).length) await sleep(200);
	};
	await waitForExit(10_000);
	for (const signal of ["SIGTERM", "SIGKILL"]) {
		const leftovers = stillRunning(tree);
		if (!leftovers.length) break;
		for (const p of leftovers) kill(p.pid, signal);
		await waitForExit(3000);
	}
	fs.rmSync(paths.file, { force: true });
	fs.rmSync(paths.processes, { force: true });

	const survivors = stillRunning(tree);
	const evidence = fs.existsSync(evidenceDir)
		? fs
				.readdirSync(evidenceDir)
				.map((name) => path.join(evidenceDir, name))
				.filter(
					(file) => fs.statSync(file).mtime >= new Date(session.startedAt),
				)
		: [];
	return {
		ok: survivors.length === 0,
		stopped: tree.map(describe),
		stillRunning: survivors.map(describe),
		evidenceDir,
		evidenceThisSession: evidence,
		...(survivors.length
			? {
					error: "Some processes survived SIGKILL.",
					hint: "Inspect them with ps -p <pid>.",
				}
			: {}),
	};
}
