import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const SESSION_NAME = /^[\w.-]+$/;

export const skillDir = path.resolve(
	path.dirname(fileURLToPath(import.meta.url)),
	"..",
);
export const repoRoot = path.resolve(skillDir, "../../..");
export const evidenceDir = path.join(repoRoot, ".verify-elements", "evidence");
export const CTL = `node ${path.relative(repoRoot, path.join(skillDir, "ctl.mjs"))}`;

export function print(result) {
	console.log(JSON.stringify(result, null, 2));
	process.exit(result.ok ? 0 : 1);
}

export function fail(error, hint, extra = {}) {
	print({ ok: false, error, hint, ...extra });
}

export function needArgs({ positional }, count, help) {
	if (positional.length < count)
		fail("Missing arguments.", `Usage: ${CTL} ${help.usage}`);
}

export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const isAlive = (pid) => {
	try {
		process.kill(pid, 0);
		return true;
	} catch (error) {
		return error.code === "EPERM";
	}
};

export function sessionPaths(name) {
	if (!SESSION_NAME.test(name))
		fail(
			`Invalid session name "${name}".`,
			"Use letters, digits, dots, dashes and underscores.",
		);
	const dir = path.join(repoRoot, ".verify-elements", "sessions", name);
	return {
		name,
		dir,
		file: path.join(dir, "session.json"),
		config: path.join(dir, "config.json"),
		processes: path.join(dir, "processes.json"),
		log: path.join(dir, "daemon.log"),
	};
}

export function readJSON(file) {
	try {
		return JSON.parse(fs.readFileSync(file, "utf8"));
	} catch {
		return null;
	}
}

export const readSession = (paths) => readJSON(paths.file);

export function logTail(file, lines = 15) {
	try {
		return fs.readFileSync(file, "utf8").trimEnd().split("\n").slice(-lines);
	} catch {
		return [];
	}
}

export async function post(
	session,
	cmd,
	args = {},
	{ timeout = 120_000 } = {},
) {
	const response = await fetch(`http://127.0.0.1:${session.daemonPort}/cmd`, {
		method: "POST",
		body: JSON.stringify({ cmd, args }),
		signal: AbortSignal.timeout(timeout),
	});
	return response.json();
}

export async function request(paths, cmd, args) {
	const session = readSession(paths);
	if (!session)
		fail(
			`verify-elements is not running (session "${paths.name}").`,
			`Run ${CTL} up first.`,
		);
	try {
		return await post(session, cmd, args);
	} catch (error) {
		fail(
			`The daemon is not reachable on port ${session.daemonPort}: ${error.message}`,
			`Run ${CTL} down, then ${CTL} up.`,
			{ log: paths.log, logTail: logTail(paths.log) },
		);
	}
}
