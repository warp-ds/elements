import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

import { CTL, fail, repoRoot, skillDir, sleep } from "../lib/session.mjs";

const BLOCK = /```(?:bash|sh)\n([\s\S]*?)```/g;
const SHELL_SYNTAX = /[|;&<>`$]/;
const SECONDS = /^\d+(\.\d+)?$/;
const WHITESPACE = /\s/;

export const booleanFlags = ["keep"];

export const help = {
	usage: "check <file> [<file> ...] [--browser <name>|all] [--keep]",
	about:
		"Run every command block in feature map files, top to bottom, and report the commands that fail. " +
		"A command fails when it errors, when a mount warns about a missing import or logs console errors, or when a block ends with console errors. " +
		"Runs in its own session (check unless --session is given) and stops it afterwards unless --keep. Only ctl commands and sleep run; anything else in a block is reported. " +
		"With --browser all it runs the files in Chromium, Firefox and WebKit, and also lists every command whose result differs between them, ignoring events from inside shadow roots and timing.",
	examples: [
		"check packages/combobox/features/form.md",
		"check packages/combobox/AGENTS.md packages/combobox/features/*.md",
		"check packages/combobox/features/keyboard-navigation.md --browser all",
	],
};

function tokenize(line) {
	const tokens = [];
	let current = null;
	let quote = null;
	for (let i = 0; i < line.length; i++) {
		const char = line[i];
		if (quote === "'") {
			if (char === "'") quote = null;
			else current += char;
		} else if (quote === '"') {
			if (char === '"') quote = null;
			else if (char === "\\" && i + 1 < line.length) current += line[++i];
			else current += char;
		} else if (char === "'" || char === '"') {
			quote = char;
			current ??= "";
		} else if (WHITESPACE.test(char)) {
			if (current !== null) tokens.push(current);
			current = null;
		} else if (SHELL_SYNTAX.test(char)) {
			return null;
		} else {
			current = (current ?? "") + char;
		}
	}
	if (quote) return null;
	if (current !== null) tokens.push(current);
	return tokens;
}

function blocksOf(file) {
	const text = fs.readFileSync(file, "utf8");
	return Array.from(text.matchAll(BLOCK), (match) => {
		const firstLine = text.slice(0, match.index).split("\n").length + 1;
		return match[1]
			.split("\n")
			.map((source, i) => ({ source: source.trim(), line: firstLine + i }))
			.filter(({ source }) => source);
	});
}

function ctl(args, session) {
	const withSession = args.includes("--session")
		? args
		: [...args, "--session", session];
	const result = spawnSync(
		process.execPath,
		[path.join(skillDir, "ctl.mjs"), ...withSession],
		{ cwd: repoRoot, encoding: "utf8" },
	);
	try {
		return JSON.parse(result.stdout);
	} catch {
		return {
			ok: false,
			error: `No JSON output: ${(result.stderr || result.stdout).trim().slice(0, 200)}`,
		};
	}
}

function problemWith(reply) {
	if (!reply.ok) return { error: reply.error, hint: reply.hint };
	if (reply.warnings?.length) return { error: reply.warnings.join(" ") };
	if (reply.consoleErrors?.length)
		return {
			error: `Console errors during mount: ${reply.consoleErrors.map((m) => m.text).join(" | ")}`,
		};
	return null;
}

const publicOnly = (events) => events?.filter((event) => !event.insideShadowOf);

const comparable = (reply) =>
	JSON.stringify({
		ok: reply.ok,
		error: reply.error,
		focused: reply.focused,
		eventsDuringAction: publicOnly(reply.eventsDuringAction),
		snapshot: reply.snapshot,
		value: reply.value,
		events: publicOnly(reply.events)?.map(({ type, target, detail }) => ({
			type,
			target,
			detail,
		})),
		warnings: reply.warnings,
	});

async function runFiles(files, session, browser, keep) {
	const prefix = tokenize(CTL);
	const up = ctl(["up", ...(browser ? ["--browser", browser] : [])], session);
	if (!up.ok) return { up };

	const failures = [];
	const results = [];
	let blocks = 0;
	let commands = 0;
	for (const file of files) {
		const relative = path.relative(repoRoot, path.resolve(file));
		for (const [index, block] of blocksOf(file).entries()) {
			blocks += 1;
			for (const { source, line } of block) {
				const report = (problem) =>
					failures.push({
						file: relative,
						block: index + 1,
						line,
						command: source.slice(0, 160),
						...problem,
					});
				const tokens = tokenize(source);
				if (tokens?.[0] === "sleep" && SECONDS.test(tokens[1] ?? "")) {
					await sleep(Number(tokens[1]) * 1000);
					continue;
				}
				if (!tokens || prefix.some((token, i) => tokens[i] !== token)) {
					report({
						error: "Not a plain ctl or sleep command.",
						hint: `Map blocks may only contain lines starting with ${CTL}, or sleep <seconds>, without pipes, redirects or variables.`,
					});
					continue;
				}
				commands += 1;
				const reply = ctl(tokens.slice(prefix.length), session);
				results.push({
					file: relative,
					line,
					command: source,
					reply: comparable(reply),
				});
				const problem = problemWith(reply);
				if (problem) report(problem);
			}
			const consoleState = ctl(["console"], session);
			if (consoleState.errors)
				failures.push({
					file: relative,
					block: index + 1,
					error: `The block ended with ${consoleState.errors} console errors.`,
					hint: `Run ${CTL} console --session ${session} after the block to read them.`,
				});
		}
	}
	if (!keep) ctl(["down"], session);
	return { failures, results, blocks, commands };
}

const BROWSERS = ["chromium", "firefox", "webkit"];

function differencesBetween(runs) {
	const [first] = Object.values(runs);
	const differences = [];
	for (const [i, result] of first.results.entries()) {
		const replies = Object.fromEntries(
			Object.entries(runs).map(([browser, run]) => [
				browser,
				run.results[i]?.reply,
			]),
		);
		if (new Set(Object.values(replies)).size === 1) continue;
		differences.push({
			file: result.file,
			line: result.line,
			command: result.command.slice(0, 160),
			...Object.fromEntries(
				Object.entries(replies).map(([browser, reply]) => [
					browser,
					reply?.slice(0, 300),
				]),
			),
		});
	}
	return differences;
}

export async function main({ positional, flags }) {
	if (!positional.length)
		fail("check needs at least one file.", `Usage: ${CTL} ${help.usage}`);
	const session = flags.session ?? "check";

	if (flags.browser !== "all") {
		const browser = flags.browser ? String(flags.browser) : undefined;
		const run = await runFiles(positional, session, browser, flags.keep);
		if (run.up) return { ...run.up, session };
		const { failures, blocks, commands } = run;
		return {
			ok: failures.length === 0,
			session,
			files: positional.length,
			blocks,
			commands,
			failures,
		};
	}

	const runs = {};
	for (const browser of BROWSERS) {
		const run = await runFiles(
			positional,
			`${session}-${browser}`,
			browser,
			flags.keep,
		);
		if (run.up) return { ...run.up, browser, session: `${session}-${browser}` };
		runs[browser] = run;
	}
	const differences = differencesBetween(runs);
	const failures = Object.entries(runs).flatMap(([browser, run]) =>
		run.failures.map((failure) => ({ browser, ...failure })),
	);
	return {
		ok: failures.length === 0 && differences.length === 0,
		browsers: BROWSERS,
		files: positional.length,
		commands: runs.chromium.commands,
		failures,
		differences,
	};
}
