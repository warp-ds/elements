import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

import { CTL_FORMS, fromCaller, repoRoot, skillDir } from "./session.mjs";

const BLOCK = /```(?:bash|sh)\n([\s\S]*?)```/g;
const SHELL_SYNTAX = /[|;&<>`$]/;
const WHITESPACE = /\s/;
export const SECONDS = /^\d+(\.\d+)?$/;

export function tokenize(line) {
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

export function blocksOf(file) {
	const text = fs.readFileSync(fromCaller(file), "utf8");
	return Array.from(text.matchAll(BLOCK), (match) => {
		const firstLine = text.slice(0, match.index).split("\n").length + 1;
		return match[1]
			.split("\n")
			.map((source, i) => ({ source: source.trim(), line: firstLine + i }))
			.filter(({ source }) => source);
	});
}

const forms = CTL_FORMS.map(tokenize);

export function ctlArgs(tokens, { bare = false } = {}) {
	if (!tokens) return null;
	const prefix = forms.find((form) =>
		form.every((token, i) => tokens[i] === token),
	);
	if (prefix) return tokens.slice(prefix.length);
	if (!bare) return null;
	return tokens[0] === "ctl" ? tokens.slice(1) : tokens;
}

export function runCtl(args, session) {
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
