export function requireChromium(ctx, command) {
	if (ctx.config.browser !== "chromium")
		throw new Error(
			`${command} is Chromium only, and this session runs ${ctx.config.browser}.`,
		);
}

export async function cdp(ctx, command) {
	requireChromium(ctx, command);
	ctx.state.cdp ??= await ctx.page.context().newCDPSession(ctx.page);
	return ctx.state.cdp;
}
