const darkModeReadyHosts = [
	// localhost
	"local.blocket.se",
	"local.dba.dk",
	"local.finn.no",
	"local.tori.fi",
	// dev
	// "dev.blocket.se",
	// "dev.dba.dk",
	// "dev.finn.no",
	// "dev.tori.fi",
	// prod
	// "www.blocket.se",
	// "www.dba.dk",
	// "www.finn.no",
	// "www.tori.fi",
];

/**
 * In a list of approved hosts, read the user's prefered color scheme and:
 *
 *   1. Set `[data-w-theme="light"]` or `[data-w-theme="dark"]` on the `<html>` element.
 *   2. Create or update a cookie `wtheme` with the value `light` or `dark`.
 *   3. Listen for changes in the color scheme preference and update the data attribute and cookie if needed.
 *
 * This lets us do a controlled rollout of dark mode bugfixes ahead of time compared to
 * relying on prefers-color-scheme, which would require a costly coordination effort.
 *
 * This also opens up for the possibility of overriding the theme based on user preference
 * independently of the operating system theme.
 *
 * @see `useWarpTheme` hook from `@warp-ds/elements/react/hooks`
 * @see `WarpThemeController` from `@warp-ds/elements`
 */
export function applyWarpTheme() {
	// Get the initial color scheme preference and apply it.
	const theme = getWarpTheme();
	if (theme) {
		writeWarpTheme(theme);

		// Set up a listener so we update the data attribute value if the user changes preference.
		const query = window.matchMedia("(prefers-color-scheme: dark)");
		if (typeof query.addEventListener !== "undefined") {
			query.addEventListener("change", onColorSchemePreferenceChange);
		} else {
			query.addListener(onColorSchemePreferenceChange);
		}
	}
}

function writeWarpTheme(theme: "light" | "dark") {
	document.documentElement.dataset.wTheme = theme;
	// Set the cookie without host to default to the current hostname without subdomains.
	// Expire after 730 days. SameSite set to Lax so the cookie is sent to us on the first
	// visit when linked to from third parties.
	document.cookie = `wtheme=${theme}; path=/; max-age=63072000; samesite=lax`;
}

function onColorSchemePreferenceChange() {
	const theme = getWarpTheme();
	if (theme) {
		writeWarpTheme(theme);
	}
}

/**
 * In a list of approved hosts, read the user's prefered color scheme and returns it.
 * @returns undefined if the hostname is not in the approved list, otherwise `"light"` or `"dark"`. Use `undefined` as a signal
 * that Warp's dark mode is not available on the host and default to light theme.
 */
export function getWarpTheme(): "light" | "dark" | undefined {
	if (darkModeReadyHosts.includes(window.location.hostname)) {
		let theme: "light" | "dark" = "light";
		if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
			theme = "dark";
		}
		return theme;
	}
	return undefined;
}
