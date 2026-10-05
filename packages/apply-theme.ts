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
 *
 * This lets us do a controlled rollout of dark mode bugfixes ahead of time compared to
 * relying on prefers-color-scheme, which would require a costly coordination effort.
 *
 * This also opens up for the possibility of overriding the theme based on user preference
 * independently of the operating system theme.
 */
export function applyWarpTheme() {
	if (darkModeReadyHosts.includes(window.location.hostname)) {
		let theme = "light";
		if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
			theme = "dark";
		}
		document.documentElement.dataset.wTheme = theme;

		// Set the cookie without host to default to the current hostname without subdomains.
		// Expire after 730 days. SameSite set to Lax so the cookie is sent to us on the first
		// visit when linked to from third parties.
		document.cookie = `wtheme=${theme}; path=/; max-age=63072000; samesite=lax`;
	}
}
