import fs from "node:fs";
import path from "node:path";

import {
	CTL,
	isAlive,
	readSession,
	repoRoot,
	request,
} from "../lib/session.mjs";

export const help = {
	usage: "doctor",
	about:
		"Read-only health check: daemon, Vite, page, design tokens, components defined, console errors since the last mount, " +
		"Playwright browser installed, locale files compiled. Run it first whenever anything looks off.",
	examples: ["doctor"],
};

export async function staticChecks(browserName = "chromium") {
	let playwright;
	try {
		playwright = await import("playwright");
	} catch {
		return [
			{
				name: "dependencies",
				ok: false,
				detail: "playwright is not installed",
				hint: "Run pnpm install.",
			},
		];
	}
	const browsers = Object.keys(playwright).filter(
		(key) =>
			!key.startsWith("_") &&
			typeof playwright[key]?.executablePath === "function",
	);
	const checks = [];
	if (!browsers.includes(browserName)) {
		checks.push({
			name: "browser",
			ok: false,
			detail: `"${browserName}" is not a Playwright browser`,
			hint: `Use one of: ${browsers.join(", ")}.`,
		});
	} else {
		const executable = playwright[browserName].executablePath();
		const installed = fs.existsSync(executable);
		checks.push({
			name: "browser",
			ok: installed,
			detail: installed
				? `${browserName}: ${executable}`
				: `${browserName} is not installed (expected ${executable})`,
			hint: installed
				? undefined
				: `Run pnpm exec playwright install ${browserName}.`,
		});
	}

	const missing = [];
	let total = 0;
	for (const pkg of fs.readdirSync(path.join(repoRoot, "packages"))) {
		const localesDir = path.join(repoRoot, "packages", pkg, "locales");
		if (!fs.existsSync(localesDir)) continue;
		for (const lang of fs.readdirSync(localesDir)) {
			if (!fs.existsSync(path.join(localesDir, lang, "messages.po"))) continue;
			total += 1;
			if (!fs.existsSync(path.join(localesDir, lang, "messages.mjs")))
				missing.push(`${pkg}/${lang}`);
		}
	}
	checks.push({
		name: "locales",
		ok: missing.length === 0,
		detail: missing.length
			? `${missing.length} of ${total} locale files not compiled, e.g. ${missing.slice(0, 3).join(", ")}`
			: `${total} locale files compiled`,
		hint: missing.length ? "Run pnpm messages:compile." : undefined,
	});
	return checks;
}

export async function main({ paths }) {
	const session = readSession(paths);
	const checks = [];
	let info = { session: paths.name };
	if (!session) {
		checks.push({
			name: "daemon",
			ok: false,
			detail: "no session file",
			hint: `Run ${CTL} up.`,
		});
	} else if (!isAlive(session.pid)) {
		checks.push({
			name: "daemon",
			ok: false,
			detail: `pid ${session.pid} is not running (stale session)`,
			hint: `Run ${CTL} down, then ${CTL} up.`,
		});
	} else {
		const result = await request(paths, "doctor");
		checks.push(
			{
				name: "daemon",
				ok: true,
				detail: `pid ${session.pid}, port ${session.daemonPort}`,
			},
			...(result.checks ?? []),
		);
		info = { ...result.info, log: paths.log };
	}
	checks.push(...(await staticChecks(session?.browser)));
	const failing = checks.filter((c) => !c.ok).map((c) => c.name);
	return {
		ok: failing.length === 0,
		...(failing.length
			? {
					error: `Failing checks: ${failing.join(", ")}`,
					hint: "Follow the hint on each failing check.",
				}
			: {}),
		checks,
		info,
	};
}

export async function run({
	page,
	browser,
	config,
	viteUrl,
	playgroundUrl,
	state,
}) {
	const checks = [];
	try {
		const response = await fetch(`${viteUrl}/playground/index.html`);
		checks.push({
			name: "vite",
			ok: response.ok,
			detail: `GET ${viteUrl}/playground/index.html -> ${response.status}`,
		});
	} catch (error) {
		checks.push({
			name: "vite",
			ok: false,
			detail: error.message,
			hint: "Vite died inside the daemon. Run down, then up.",
		});
	}

	const pageState = await page
		.evaluate(() => ({
			ready: Boolean(window.playground?.ready),
			styles: window.playground?.styles ?? [],
			inventory: window.playground?.inventory() ?? [],
		}))
		.catch((error) => ({ error: error.message }));

	if (pageState.error) {
		checks.push({
			name: "page",
			ok: false,
			detail: pageState.error,
			hint: "Run down, then up.",
		});
	} else {
		checks.push({
			name: "page",
			ok: pageState.ready,
			detail: `${page.url()} playground=${pageState.ready ? "ready" : "missing"} reloads=${state.reloads}`,
			hint: pageState.ready
				? undefined
				: state.leftPlayground
					? `The page left the playground for ${state.leftPlayground}. Run mount to reload it.`
					: "The playground script didn't run. Run console to see why.",
		});
		const failedStyles = pageState.styles.filter((s) => !s.ok);
		checks.push({
			name: "styles",
			ok: failedStyles.length === 0,
			detail: failedStyles.length
				? `failed to load: ${failedStyles.map((s) => s.href).join(", ")}`
				: `fonts and tokens for ${config.brand} loaded`,
			hint: failedStyles.length
				? "They come from https://assets.finn.no. Check network access and the brand name; components render unstyled without them."
				: undefined,
		});
		const undefinedEls = pageState.inventory.filter((item) => !item.defined);
		checks.push({
			name: "components",
			ok: undefinedEls.length === 0,
			detail: state.lastMount
				? `${pageState.inventory.length} w-* elements on the page, ${undefinedEls.length} undefined` +
					(undefinedEls.length
						? `: ${undefinedEls.map((i) => `<${i.tag}>${i.insideShadowOf ? ` inside <${i.insideShadowOf}>` : ""}`).join(", ")}`
						: "")
				: "nothing mounted yet",
			hint: undefinedEls.length
				? "Mount again with --with <name> for each undefined element."
				: undefined,
		});
	}

	const consoleErrors = state.consoleLog.filter(
		(m) => m.type === "error" || m.type === "pageerror",
	);
	checks.push({
		name: "console",
		ok: consoleErrors.length === 0,
		detail:
			`${consoleErrors.length} errors since the last mount` +
			(consoleErrors.length ? `; first: ${consoleErrors[0].text}` : ""),
		hint: consoleErrors.length
			? "Run console for the full messages."
			: undefined,
	});

	return {
		checks,
		info: {
			session: config.session,
			playgroundUrl,
			browser: `${config.browser} ${browser.version()}${config.headed ? " (headed)" : " (headless)"}`,
			brand: config.brand,
			lastMount: state.lastMountResult,
			reloads: state.reloads,
		},
	};
}
