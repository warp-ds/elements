import { CTL, fail } from "../lib/session.mjs";

export const help = {
	usage: "viewport <width> <height> | viewport reset",
	about:
		"Resize the page, for responsive layouts and components that react to their own size. reset goes back to the size from vitest.config.ts. " +
		"The size lasts until reset or down. Components that debounce resize handling may need a short sleep before you read the result.",
	examples: ["viewport 480 800", "viewport reset"],
};

export function args({ positional }) {
	if (positional[0] === "reset") return { reset: true };
	const [width, height] = positional.map(Number);
	if (!width || !height)
		fail(
			"viewport needs a width and a height in pixels, or reset.",
			`Usage: ${CTL} ${help.usage}`,
		);
	return { width, height };
}

export async function run({ page, defaultViewport }, { reset, width, height }) {
	await page.setViewportSize(reset ? defaultViewport : { width, height });
	await page.evaluate(() => window.playground.settle());
	return { viewport: page.viewportSize() };
}
