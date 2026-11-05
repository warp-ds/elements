import fs from "node:fs";

import { blocksOf, ctlArgs, runCtl, SECONDS, tokenize } from "../lib/lines.mjs";
import { CTL, fail, fromCaller, sleep } from "../lib/session.mjs";

export const booleanFlags = ["keep-going"];

export const help = {
	usage: "run [--file <path>] [--keep-going]",
	about:
		"Run several commands in this session, one per line, and print every result in order. Reads stdin, or --file: a list of lines, or a .md file whose sh blocks it runs. " +
		`Lines may start with ${CTL} or leave it out; blank lines and # comments are skipped, and sleep <seconds> waits. ` +
		"Stops at the first failure unless --keep-going. Like check, it never uses a shell: quotes work, but pipes, redirects and variables don't.",
	examples: [
		`run <<'EOF'
mount '<w-combobox label="Country"><option value="no">Norway</option></w-combobox>'
type 'role=textbox[name="Country"]' n
press ArrowDown Enter
events
EOF`,
		"run --file .verify-elements/repro.md",
	],
};

function readStdin() {
	if (process.stdin.isTTY) return "";
	try {
		return fs.readFileSync(0, "utf8");
	} catch {
		return "";
	}
}

function linesOf(file) {
	if (!file)
		return readStdin()
			.split("\n")
			.map((source, i) => ({ source: source.trim(), line: i + 1 }));
	if (String(file).endsWith(".md")) return blocksOf(file).flat();
	return fs
		.readFileSync(fromCaller(file), "utf8")
		.split("\n")
		.map((source, i) => ({ source: source.trim(), line: i + 1 }));
}

export async function main({ flags, paths }) {
	const lines = linesOf(flags.file).filter(
		({ source }) => source && !source.startsWith("#"),
	);
	if (!lines.length)
		fail(
			"run got no commands.",
			`Pass them on stdin, for example ${CTL} run <<'EOF' with one command per line and EOF last, or use --file <path>.`,
		);
	const results = [];
	let stoppedAt = null;
	for (const [index, { source, line }] of lines.entries()) {
		const tokens = tokenize(source);
		if (tokens?.[0] === "sleep" && SECONDS.test(tokens[1] ?? "")) {
			await sleep(Number(tokens[1]) * 1000);
			continue;
		}
		const args = ctlArgs(tokens, { bare: true });
		let reply;
		if (!args?.length)
			reply = {
				ok: false,
				error: "Not a plain ctl command.",
				hint: "run takes one ctl command per line, without pipes, redirects, ; or variables.",
			};
		else if (args[0] === "run")
			reply = { ok: false, error: "run can't run itself." };
		else reply = runCtl(args, paths.name);
		const result = { line, run: source.slice(0, 200), ...reply };
		delete result.command;
		results.push(result);
		if (!reply.ok && !flags["keep-going"]) {
			stoppedAt = index;
			break;
		}
	}
	const skipped =
		stoppedAt === null
			? []
			: lines.slice(stoppedAt + 1).map(({ source }) => source.slice(0, 120));
	return {
		ok: results.every((result) => result.ok),
		session: paths.name,
		ran: results.length,
		...(skipped.length ? { skipped } : {}),
		results,
	};
}
