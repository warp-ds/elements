import fs from "node:fs";
import http from "node:http";
import net from "node:net";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { stripVTControlCharacters } from "node:util";

const COMMAND_NAME = /^[a-z][a-z0-9-]*$/;
const CALL_LOG_REASON =
	/resolved to|intercepts|not enabled|not visible|not stable|detached|not attached|outside of the viewport/;

const commandsDir = path.resolve(
	path.dirname(fileURLToPath(import.meta.url)),
	"../commands",
);
const sessionDir = process.argv[2];
const config = JSON.parse(
	fs.readFileSync(path.join(sessionDir, "config.json"), "utf8"),
);
const IDLE_MINUTES = 30;
const ACTION_TIMEOUT_MS = 5000;

const log = (...args) => console.log(new Date().toISOString(), ...args);

const { createServer } = await import("vite");
const playwright = await import("playwright");

const freePort = () =>
	new Promise((resolve, reject) => {
		const probe = net.createServer();
		probe.on("error", reject);
		probe.listen(0, "127.0.0.1", () => {
			const { port } = probe.address();
			probe.close(() => resolve(port));
		});
	});

const vitePort = await freePort();
const vite = await createServer({
	configFile: path.join(config.repoRoot, "vitest.config.ts"),
	root: config.repoRoot,
	appType: "mpa",
	clearScreen: false,
	cacheDir: path.join(sessionDir, "vite-cache"),
	server: { host: "127.0.0.1", port: vitePort, strictPort: true },
	optimizeDeps: {
		// Vite can't see runtime imports; an unscanned dependency found mid-mount reloads the page.
		entries: [
			"playground/index.html",
			"packages/*/*.ts",
			"!packages/**/*.test.ts",
			"!packages/**/*.stories.ts",
			"!packages/*/react.ts",
		],
	},
});
await vite.listen();
const viteUrl = `http://127.0.0.1:${vitePort}`;
const playgroundUrl = `${viteUrl}/playground/?brand=${encodeURIComponent(config.brand)}`;
log("vite listening", viteUrl);

const browser = await playwright[config.browser].launch({
	headless: !config.headed,
	handleSIGINT: false,
	handleSIGTERM: false,
	handleSIGHUP: false,
});
const page = await (
	await browser.newContext({ viewport: vite.config.test?.browser?.viewport })
).newPage();
page.setDefaultTimeout(ACTION_TIMEOUT_MS);
log("browser launched", config.browser, browser.version());

const state = {
	consoleLog: [],
	mountedAt: Date.now(),
	lastMount: null,
	lastMountResult: null,
	reloads: 0,
};

page.on("console", (msg) => {
	const { url, lineNumber } = msg.location();
	state.consoleLog.push({
		type: msg.type(),
		text: msg.text(),
		location: url ? `${url.replace(viteUrl, "")}:${lineNumber}` : undefined,
		time: Date.now() - state.mountedAt,
	});
});
page.on("pageerror", (error) => {
	state.consoleLog.push({
		type: "pageerror",
		text: error.message,
		stack: error.stack?.split("\n").slice(0, 6).join("\n"),
		time: Date.now() - state.mountedAt,
	});
});

let queue = Promise.resolve();
const enqueue = (fn) => {
	const run = queue.then(fn, fn);
	queue = run.catch(() => {});
	return run;
};

async function act(action) {
	const before = await page.evaluate(() => window.playground.events().length);
	await action();
	await page.evaluate(() => window.playground.settle());
	return page.evaluate(
		(count) => ({
			focused: window.playground.focused(),
			eventsDuringAction: window.playground
				.events()
				.slice(count)
				.map(({ type, target, insideShadowOf, detail }) => ({
					type,
					target,
					insideShadowOf,
					detail,
				})),
		}),
		before,
	);
}

const ctx = {
	page,
	browser,
	config,
	viteUrl,
	playgroundUrl,
	state,
	act,
	actionTimeout: ACTION_TIMEOUT_MS,
};

const onPlayground = (url) => url.startsWith(`${viteUrl}/playground/`);
page.on("framenavigated", (frame) => {
	if (frame === page.mainFrame() && !onPlayground(frame.url()))
		state.leftPlayground = frame.url();
});

await page.goto(playgroundUrl);
await page.waitForFunction(() => window.playground?.ready);

const failedStyles = (
	await page.evaluate(() => window.playground.styles)
).filter((s) => !s.ok);
if (failedStyles.length) {
	log(
		`Design tokens or fonts for brand "${config.brand}" failed to load: ${failedStyles.map((s) => s.href).join(", ")}. ` +
			"Check the brand name (the brands are listed in .storybook/preview.ts) and network access to assets.finn.no.",
	);
	await browser.close();
	await vite.close();
	process.exit(1);
}

// Lit modules have no HMR boundary, so Vite reloads the whole page on every source edit.
page.on("load", () => {
	if (state.navigating || !onPlayground(page.url())) return;
	state.reloads += 1;
	log("page reloaded", state.reloads);
	if (!state.lastMount) return;
	enqueue(async () => {
		const { mountHtml } = await import("../commands/mount.mjs");
		await mountHtml(ctx, state.lastMount);
	}).catch((error) => log("remount after reload failed", error.message));
});

const GENERIC_HINTS = [
	[
		/strict mode violation/,
		() =>
			'The selector matched more than one element. Make it specific, for example role=option[name="Norway"] instead of role=option.',
	],
	[
		/Timeout \d+ms exceeded/,
		(args) =>
			args.selector &&
			`Nothing matching ${args.selector} became visible and enabled within ${ACTION_TIMEOUT_MS}ms. Run snapshot to see the roles and names on the page, and check that the component is open or rendered.`,
	],
	[
		/Execution context was destroyed|frame was detached/i,
		() =>
			"The page reloaded mid-command, usually because Vite picked up a source edit. The daemon re-runs the last mount; run the command again.",
	],
	[/has been closed/, () => "The browser is gone. Run down, then up."],
	[
		/is Chromium only/,
		() =>
			"Start a Chromium session next to this one with up --session perf, mount the same HTML there, and run the command with --session perf.",
	],
	[
		/Unexpected token|selector/i,
		() =>
			'Selectors are Playwright selectors: role=combobox, role=option[name="Norway"], text=Norway, or CSS such as w-combobox.',
	],
];

function hintFor(command, message, args) {
	const own = command.hint?.(message, args);
	if (own) return own;
	for (const [pattern, hint] of GENERIC_HINTS) {
		if (pattern.test(message)) {
			const text = hint(args);
			if (text) return text;
		}
	}
	return "Run doctor, then console to see page errors.";
}

async function loadCommand(name) {
	if (!COMMAND_NAME.test(name)) return null;
	const file = path.join(commandsDir, `${name}.mjs`);
	if (!fs.existsSync(file)) return null;
	const command = await import(file);
	return command.run ? command : null;
}

async function handle({ cmd, args = {} }) {
	if (cmd === "health") return { ok: true, pid: process.pid };
	if (state.leftPlayground && !["mount", "doctor", "console"].includes(cmd))
		return {
			ok: false,
			command: cmd,
			error: `The page left the playground and is now at ${state.leftPlayground}.`,
			hint: "Run mount again to reload the playground. In WebKit, Backspace with focus outside an input navigates back, so pass --selector when you press keys.",
		};
	const command = await loadCommand(cmd);
	if (!command)
		return {
			ok: false,
			error: `Unknown command "${cmd}".`,
			hint: "Run ctl.mjs --help.",
		};
	try {
		const result = await enqueue(() => command.run(ctx, args));
		return { ok: true, command: cmd, ...result };
	} catch (error) {
		const [message, ...rest] = String(error?.message ?? error).split("\n");
		const callLog = [
			...new Set(
				rest
					.map((line) => stripVTControlCharacters(line).trim())
					.filter((line) => line && line !== "Call log:"),
			),
		].filter((line, i) => i === 0 || CALL_LOG_REASON.test(line));
		log(`${cmd} failed:`, error?.stack ?? error);
		return {
			ok: false,
			command: cmd,
			error: message,
			hint: hintFor(command, message, args),
			...(callLog.length
				? { callLog: callLog.slice(0, 8).map((line) => line.slice(0, 200)) }
				: {}),
		};
	}
}

let shuttingDown = false;
async function shutdown(reason) {
	if (shuttingDown) return;
	shuttingDown = true;
	log("shutting down:", reason);
	await browser.close().catch(() => {});
	await vite.close().catch(() => {});
	server.close();
	fs.rmSync(path.join(sessionDir, "session.json"), { force: true });
	process.exit(0);
}

let idleTimer;
const touch = () => {
	clearTimeout(idleTimer);
	idleTimer = setTimeout(
		shutdown,
		IDLE_MINUTES * 60_000,
		`idle for ${IDLE_MINUTES} minutes`,
	);
};

const server = http.createServer((req, res) => {
	let body = "";
	req.on("data", (chunk) => (body += chunk));
	req.on("end", async () => {
		touch();
		const send = (result) => {
			res.writeHead(200, { "content-type": "application/json" });
			res.end(JSON.stringify(result));
		};
		let request;
		try {
			request = JSON.parse(body || "{}");
		} catch {
			return send({
				ok: false,
				error: "Request body is not JSON.",
				hint: "Use ctl.mjs, not raw HTTP.",
			});
		}
		if (request.cmd === "shutdown") {
			send({ ok: true });
			return shutdown("down");
		}
		send(await handle(request));
	});
});

server.listen(0, "127.0.0.1", () => {
	touch();
	fs.writeFileSync(
		path.join(sessionDir, "session.json"),
		JSON.stringify(
			{
				session: config.session,
				pid: process.pid,
				daemonPort: server.address().port,
				viteUrl,
				playgroundUrl,
				browser: config.browser,
				browserVersion: browser.version(),
				headed: config.headed,
				brand: config.brand,
				startedAt: config.startedAt,
			},
			null,
			2,
		),
	);
	log("daemon listening", server.address().port);
});

browser.on("disconnected", () => shutdown("browser disconnected"));
for (const signal of ["SIGTERM", "SIGINT", "SIGHUP"])
	process.on(signal, () => shutdown(signal));
