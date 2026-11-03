#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

import {
	CTL,
	fail,
	print,
	request,
	sessionPaths,
	skillDir,
} from "./lib/session.mjs";

const FINAL_DOT = /\.?$/;
const USAGE_FLAG = /--([a-z][\w-]*)/g;
const WHITESPACE = /\s/;

const commandsDir = path.join(skillDir, "commands");
const commandNames = fs
	.readdirSync(commandsDir)
	.filter((file) => file.endsWith(".mjs"))
	.map((file) => file.slice(0, -4))
	.sort();
const load = (name) =>
	import(pathToFileURL(path.join(commandsDir, `${name}.mjs`)).href);

function parseArgs(argv, booleanFlags = []) {
	const booleans = new Set(["help", ...booleanFlags]);
	const positional = [];
	const flags = {};
	for (let i = 0; i < argv.length; i++) {
		const arg = argv[i];
		if (arg === "-h") flags.help = true;
		else if (arg.startsWith("--")) {
			const [key, ...value] = arg.slice(2).split("=");
			if (value.length) flags[key] = value.join("=");
			else if (booleans.has(key)) flags[key] = true;
			else if (i + 1 < argv.length && !argv[i + 1].startsWith("--"))
				flags[key] = argv[++i];
			else flags[key] = true;
		} else positional.push(arg);
	}
	return { positional, flags };
}

const commandHelp = ({ usage, about, examples }) =>
	`Usage: ${CTL} ${usage}\n\n${about}\n\nExamples:\n${examples.map((e) => `  ${CTL} ${e}`).join("\n")}`;

async function globalHelp() {
	const lines = [];
	for (const name of commandNames) {
		const { usage, about } = (await load(name)).help;
		lines.push(
			`  ${usage}\n      ${about.split(". ")[0].replace(FINAL_DOT, ".")}`,
		);
	}
	return `verify-elements: drive Warp components in a real browser and capture proof.

Usage: ${CTL} <command> [args] [--session <name>]

Commands:
${lines.join("\n")}

Global options:
  --session <name>  Run several daemons side by side from one checkout (default: "default",
                    or $VERIFY_ELEMENTS_SESSION). Each session has its own ports, browser and logs.
  --help            Help for one command: ${CTL} mount --help

Selectors are Playwright selectors and pierce shadow DOM. Prefer role selectors read off snapshot:
  role=textbox[name="Country"]   role=option[name="Norway"]   role=listbox

Typical loop:
  ${CTL} up
  ${CTL} mount '<w-combobox label="Country"><option value="no">Norway</option></w-combobox>' --with textfield
  ${CTL} type 'role=textbox[name="Country"]' nor
  ${CTL} press ArrowDown Enter
  ${CTL} events --type select
  ${CTL} snapshot
  ${CTL} screenshot
  ${CTL} down`;
}

async function main() {
	const [name, ...rest] = process.argv.slice(2);
	if (!name || ["--help", "-h", "help"].includes(name)) {
		console.log(await globalHelp());
		return;
	}
	if (!commandNames.includes(name))
		fail(
			`Unknown command "${name}".`,
			`Run ${CTL} --help for the command list.`,
		);
	const command = await load(name);
	const { positional, flags } = parseArgs(rest, command.booleanFlags);
	if (flags.help) {
		console.log(commandHelp(command.help));
		return;
	}
	const accepted = [
		...new Set([
			...Array.from(
				command.help.usage.matchAll(USAGE_FLAG),
				(match) => match[1],
			),
			"session",
			"help",
		]),
	];
	const unknown = Object.keys(flags).filter((key) => !accepted.includes(key));
	if (unknown.length) {
		const split = unknown.some((key) => WHITESPACE.test(key))
			? " A flag and its value arrived as one argument, which happens when they're stored together in an unquoted shell variable: zsh doesn't split it into words. Write them out, or use run."
			: "";
		fail(
			`Unknown flag ${unknown.map((key) => `--${key}`).join(", ")} for ${name}.`,
			`${name} takes ${accepted.map((key) => `--${key}`).join(", ")}.${split}`,
		);
	}
	const paths = sessionPaths(
		flags.session ?? process.env.VERIFY_ELEMENTS_SESSION ?? "default",
	);
	const input = { positional, flags, paths };
	if (command.main) print(await command.main(input));
	else print(await request(paths, name, command.args?.(input) ?? {}));
}

main().catch((error) =>
	fail(
		String(error?.message ?? error),
		`Unexpected client error. Run ${CTL} doctor.`,
	),
);
