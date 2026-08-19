import { chromium } from "playwright";
import { createServer } from "vite";
import { mkdir, writeFile } from "node:fs/promises";
import { dirname } from "node:path";

const args = new Set(process.argv.slice(2));
const runs = Number(process.env.ICON_BENCHMARK_RUNS ?? 10);
const delay = Number(process.env.ICON_BENCHMARK_DELAY ?? 50);
const output = process.env.ICON_BENCHMARK_OUTPUT ?? "benchmarks/icon/results.json";

const scenarios = [
	{ name: "single", count: 1, unique: true },
	{ name: "repeated-100", count: 100, unique: false },
	{ name: "unique-100", count: 100, unique: true },
	{ name: "repeated-1000", count: 1000, unique: false },
];

const svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" /></svg>';

async function measure(page, scenario) {
	const result = await page.evaluate(async ({ count, unique }) => {
		const layoutShifts = [];
		const observer = new PerformanceObserver((list) => {
			for (const entry of list.getEntries()) {
				if (!entry.hadRecentInput) layoutShifts.push(entry.value);
			}
		});
		observer.observe({ type: "layout-shift", buffered: true });

		const icons = document.querySelector("#icons");
		icons.replaceChildren();
		const elements = [];
		for (let i = 0; i < count; i++) {
			const element = document.createElement("w-icon");
			element.name = unique ? `BenchmarkIcon${i}` : "BenchmarkIcon";
			element.setAttribute("data-benchmark-icon", "true");
			icons.append(element);
			elements.push(element);
		}

		const started = performance.now();
		let firstReady;
		await new Promise((resolve, reject) => {
			const timeout = setTimeout(() => reject(new Error("icon readiness timeout")), 30000);
			const poll = () => {
				// The parent revision has no ready class, so SVG presence is the
				// cross-revision readiness signal. The branch still exposes the
				// class, which is covered separately by the component tests.
				const ready = elements.filter((element) =>
					element.shadowRoot?.querySelector("svg"),
				);
				if (ready.length && firstReady === undefined) firstReady = performance.now() - started;
				if (ready.length === elements.length) {
					clearTimeout(timeout);
					resolve();
				} else requestAnimationFrame(poll);
			};
			poll();
		});
		observer.disconnect();
		return {
			firstReadyMs: firstReady,
			allReadyMs: performance.now() - started,
			layoutShift: layoutShifts.reduce((sum, value) => sum + value, 0),
			iconCount: elements.length,
		};
	}, scenario);

	return result;
}

async function runScenario(browser, serverUrl, scenario) {
	const context = await browser.newContext();
	await context.route("https://assets.finn.no/**", async (route) => {
		await new Promise((resolve) => setTimeout(resolve, delay));
		await route.fulfill({
			status: 200,
			contentType: "image/svg+xml",
			body: svg,
		});
	});
	const page = await context.newPage();
	let requests = 0;
	let bytes = 0;
	page.on("request", (request) => {
		if (request.url().startsWith("https://assets.finn.no/")) requests++;
	});
	page.on("response", async (response) => {
		if (response.url().startsWith("https://assets.finn.no/")) bytes += (await response.body()).byteLength;
	});
	await page.goto(`${serverUrl}/benchmarks/icon/index.html`);
	const measurement = await measure(page, scenario);
	await page.waitForTimeout(10);
	await context.close();
	return { ...scenario, ...measurement, requests, responseBytes: bytes };
}

const server = await createServer({ root: process.cwd(), logLevel: "error" });
await server.listen();
const address = server.httpServer.address();
const serverUrl = `http://localhost:${address.port}`;
const browser = await chromium.launch({ headless: true });
const results = [];

try {
	for (const scenario of scenarios) {
		const measurements = [];
		for (let run = 0; run < runs; run++) {
			measurements.push(await runScenario(browser, serverUrl, scenario));
		}
		results.push({ scenario: scenario.name, runs: measurements });
		console.log(`${scenario.name}: ${summarize(measurements)}`);
	}
} finally {
	await browser.close();
	await server.close();
}

await mkdir(dirname(output), { recursive: true });
await writeFile(output, `${JSON.stringify({ generatedAt: new Date().toISOString(), delay, runs, results }, null, 2)}\n`);
console.log(`Wrote ${output}`);

function summarize(measurements) {
	const median = (key) => {
		const values = measurements.map((measurement) => measurement[key]).sort((a, b) => a - b);
		return values[Math.floor(values.length / 2)].toFixed(2);
	};
	return `first=${median("firstReadyMs")}ms all=${median("allReadyMs")}ms requests=${measurements[0].requests} CLS=${median("layoutShift")}`;
}
