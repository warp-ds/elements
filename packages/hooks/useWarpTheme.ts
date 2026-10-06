import { useEffect, useState } from "react";
import { getWarpTheme } from "../apply-theme.js";

type WarpTheme = "light" | "dark";

/**
 * Use if you need to conditionally render content based on Warp's light or dark themes, for example images.
 *
 * ```ts
 * // For server-side rendered React, read the theme value from the wtheme cookie on the request.
 * const defaultTheme = request.headers.cookie?.includes("wtheme=dark") ? "dark" : "light";
 *
 * // In client components, pass in the default theme to the hook but read the theme value from the hook.
 * // The value can change in the client at runtime if the user switches theme.
 * const theme = useWarpTheme(defaultTheme);
 * const logoUrl = theme === "dark"
 * 		? "https://assets.vend.com/pkg/@warp-ds/brand-logos/~1/dba-inverted.svg"
 * 		: "https://assets.vend.com/pkg/@warp-ds/brand-logos/~1/dba.svg";
 * ```
 */
export const useWarpTheme = (defaultTheme: string = "light"): WarpTheme => {
	const [hasMounted, setHasMounted] = useState(false);
	const [colorScheme, setColorScheme] = useState<WarpTheme>(
		typeof window !== "undefined"
			? getWarpTheme() || "light"
			: (defaultTheme as WarpTheme),
	);

	useEffect(() => {
		setHasMounted(true);
		// set the initial value
		if (typeof window !== "undefined") {
			const warpTheme = getWarpTheme() || "light";
			if (warpTheme !== colorScheme) {
				setColorScheme(warpTheme);
			}
		}
	}, []);

	useEffect(() => {
		// add a mutation observer to look for changes to data-w-theme at runtime,
		// then clean it up on dismount
		const observer = new MutationObserver(() => {
			const warpTheme = document.documentElement.dataset.wTheme as WarpTheme;
			setColorScheme(warpTheme);
		});
		observer.observe(document.documentElement, {
			attributeFilter: ["data-w-theme"],
		});
		return () => {
			observer.disconnect();
		};
	}, [hasMounted]);

	return colorScheme;
};
