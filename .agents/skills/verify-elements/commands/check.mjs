import fs from "node:fs";
import path from "node:path";

import { blocksOf, ctlArgs, runCtl, SECONDS, tokenize } from "../lib/lines.mjs";
import { CTL, fail, fromCaller, repoRoot, sleep } from "../lib/session.mjs";

const SAVED_NAME = /^[\w.-]+$/;
const savedDir = path.join(repoRoot, ".verify-elements", "check");

export const booleanFlags = ["keep"];

export const help = {
	usage:
		"check <file> [<file> ...] [--browser <name>|all] [--save <name>] [--against <name>] [--keep]",
	about:
		"Run every command block in feature map files, top to bottom, and report the commands that fail. " +
		"A command fails when it errors, when a mount warns about a missing import or logs console errors, or when a block ends with console errors. " +
		"Runs in its own session (check unless --session is given) and stops it afterwards unless --keep. Only ctl commands and sleep run; anything else in a block is reported. " +
		"With --browser all it runs the files in Chromium, Firefox and WebKit, and also lists every command whose result differs between them, ignoring events from inside shadow roots and timing. " +
		"--save <name> stores every command's result; --against <name> runs the files again and lists only the commands whose result changed since that save, so run it before and after a fix. Both work with one browser.",
	examples: [
		"check packages/combobox/features/form.md",
		"check packages/combobox/AGENTS.md packages/combobox/features/*.md",
		"check packages/combobox/features/keyboard-navigation.md --browser all",
		"check .verify-elements/repro.md --save before",
		"check .verify-elements/repro.md --against before",
	],
};

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
	const up = runCtl(
		["up", ...(browser ? ["--browser", browser] : [])],
		session,
	);
	if (!up.ok) return { up };

	const failures = [];
	const results = [];
	let blocks = 0;
	let commands = 0;
	for (const file of files) {
		const relative = path.relative(repoRoot, fromCaller(file));
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
				const args = ctlArgs(tokens);
				if (!args) {
					report({
						error: "Not a plain ctl or sleep command.",
						hint: `Map blocks may only contain lines starting with ${CTL}, or sleep <seconds>, without pipes, redirects or variables.`,
					});
					continue;
				}
				commands += 1;
				const reply = runCtl(args, session);
				results.push({
					key: JSON.stringify([relative, ...args]),
					file: relative,
					line,
					command: source,
					reply: comparable(reply),
				});
				const problem = problemWith(reply);
				if (problem) report(problem);
			}
			const consoleState = runCtl(["console"], session);
			if (consoleState.errors)
				failures.push({
					file: relative,
					block: index + 1,
					error: `The block ended with ${consoleState.errors} console errors.`,
					hint: `Run ${CTL} console --session ${session} after the block to read them.`,
				});
		}
	}
	if (!keep) runCtl(["down"], session);
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

function changesSince(saved, results) {
	const pending = new Map();
	for (const result of saved)
		pending.set(result.key, [...(pending.get(result.key) ?? []), result]);
	const changed = [];
	const added = [];
	let unchanged = 0;
	for (const result of results) {
		const { file, line, command } = result;
		const before = pending.get(result.key)?.shift();
		if (!before) added.push({ file, line, command });
		else if (before.reply === result.reply) unchanged += 1;
		else {
			const was = JSON.parse(before.reply);
			const now = JSON.parse(result.reply);
			const keys = Object.keys({ ...was, ...now }).filter(
				(key) => JSON.stringify(was[key]) !== JSON.stringify(now[key]),
			);
			const pick = (reply) =>
				Object.fromEntries(keys.map((key) => [key, reply[key] ?? null]));
			changed.push({
				file,
				line,
				command,
				before: pick(was),
				after: pick(now),
			});
		}
	}
	const missing = [...pending.values()]
		.flat()
		.map(({ file, line, command }) => ({ file, line, command }));
	return {
		unchanged,
		changed,
		...(added.length ? { added } : {}),
		...(missing.length ? { missing } : {}),
	};
}

function savedFile(name) {
	if (!SAVED_NAME.test(name))
		fail(
			`Invalid name "${name}".`,
			"Use letters, digits, dots, dashes and underscores.",
		);
	return path.join(savedDir, `${name}.json`);
}

export async function main({ positional, flags }) {
	if (!positional.length)
		fail("check needs at least one file.", `Usage: ${CTL} ${help.usage}`);
	const session = flags.session ?? "check";

	if (flags.browser !== "all") {
		const browser = flags.browser ? String(flags.browser) : undefined;
		const saveTo = flags.save ? savedFile(String(flags.save)) : null;
		const againstFile = flags.against ? savedFile(String(flags.against)) : null;
		if (againstFile && !fs.existsSync(againstFile))
			fail(
				`Nothing saved as "${flags.against}".`,
				`Run ${CTL} check <files> --save ${flags.against} first.`,
			);
		const run = await runFiles(positional, session, browser, flags.keep);
		if (run.up) return { ...run.up, session };
		const { failures, blocks, commands, results } = run;
		if (saveTo) {
			fs.mkdirSync(savedDir, { recursive: true });
			fs.writeFileSync(
				saveTo,
				JSON.stringify({ browser, files: positional, results }, null, 2),
			);
		}
		return {
			ok: failures.length === 0,
			session,
			files: positional.length,
			blocks,
			commands,
			failures,
			...(saveTo ? { saved: path.relative(repoRoot, saveTo) } : {}),
			...(againstFile
				? {
						against: flags.against,
						...changesSince(
							JSON.parse(fs.readFileSync(againstFile, "utf8")).results,
							results,
						),
					}
				: {}),
		};
	}

	if (flags.save || flags.against)
		fail(
			"--save and --against work with one browser.",
			"Drop --browser all, or pass --browser <name>.",
		);

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
