import { spawn } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

import { kill, processTree } from "../lib/processes.mjs";
import {
	CTL,
	evidenceDir,
	fail,
	isAlive,
	logTail,
	post,
	readSession,
	repoRoot,
	skillDir,
	sleep,
} from "../lib/session.mjs";
import { staticChecks } from "./doctor.mjs";
import { main as down } from "./down.mjs";

export const booleanFlags = ["headed"];

export const help = {
	usage: "up [--headed] [--browser <name>] [--brand <brand>]",
	about:
		"Start the daemon in the background: Vite on a free port, a browser and the playground page. Prints the session once the page is ready. " +
		"--headed shows the browser window. --browser is chromium (default), firefox or webkit. --brand is a Warp brand such as tori-fi-dark (default finn-no). " +
		"If the session is already running, prints it again with alreadyRunning: true. It fails only if a flag you pass differs from the running session.",
	examples: [
		"up",
		"up --headed --brand tori-fi-dark",
		"up --session second-agent",
	],
};

export async function main({ flags, paths }) {
	const wanted = {
		browser: flags.browser ?? "chromium",
		brand: flags.brand ?? "finn-no",
		headed: Boolean(flags.headed),
	};

	const existing = readSession(paths);
	if (existing) {
		const healthy = await post(existing, "health", {}, { timeout: 2000 }).then(
			(reply) => reply.ok,
			() => false,
		);
		if (healthy) {
			const differs = Object.keys(wanted).filter(
				(key) => key in flags && existing[key] !== wanted[key],
			);
			if (differs.length)
				fail(
					`Session "${paths.name}" is already running with different ${differs.join(", ")}.`,
					`Run ${CTL} down first, or use another --session.`,
					{ running: existing },
				);
			return {
				ok: true,
				alreadyRunning: true,
				...existing,
				log: paths.log,
				evidenceDir,
			};
		}
		await down({ paths });
	}

	const failed = (await staticChecks(wanted.browser)).filter((c) => !c.ok);
	if (failed.length)
		fail("Preflight failed.", failed.map((c) => c.hint).join(" "), {
			checks: failed,
		});

	fs.mkdirSync(paths.dir, { recursive: true });
	fs.writeFileSync(
		paths.config,
		JSON.stringify(
			{
				session: paths.name,
				repoRoot,
				...wanted,
				startedAt: new Date().toISOString(),
			},
			null,
			2,
		),
	);
	const logFd = fs.openSync(paths.log, "w");
	const child = spawn(
		process.execPath,
		[path.join(skillDir, "lib", "daemon.mjs"), paths.dir],
		{ cwd: repoRoot, detached: true, stdio: ["ignore", logFd, logFd] },
	);
	child.unref();

	const deadline = Date.now() + 90_000;
	while (Date.now() < deadline) {
		const session = readSession(paths);
		if (session) {
			fs.writeFileSync(
				paths.processes,
				JSON.stringify(processTree(session.pid), null, 2),
			);
			return { ok: true, ...session, log: paths.log, evidenceDir };
		}
		if (child.exitCode !== null || !isAlive(child.pid))
			fail(
				"The daemon exited during startup.",
				`Read logTail, fix the cause, then run ${CTL} up again.`,
				{ log: paths.log, logTail: logTail(paths.log) },
			);
		await sleep(200);
	}
	kill(child.pid, "SIGTERM");
	fail(
		"The daemon did not become ready within 90s.",
		`Read logTail, then run ${CTL} down and ${CTL} up.`,
		{ log: paths.log, logTail: logTail(paths.log) },
	);
}
