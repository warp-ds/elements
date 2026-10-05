import { useEffect, useState } from "react";
import { getWarpTheme } from "../apply-theme.js";

/**
 * Use if you need to conditionally render content based on Warp's light or dark themes, for example images.
 *
 * ```ts
 * const colorScheme = useWarpTheme();
 * const logoUrl = colorScheme === "dark"
 * 		? "https://assets.vend.com/pkg/@warp-ds/brand-logos/~1/dba-inverted.svg"
 * 		: "https://assets.vend.com/pkg/@warp-ds/brand-logos/~1/dba.svg";
 * ```
 */
export const useWarpTheme = (): "light" | "dark" => {
	const [hasMounted, setHasMounted] = useState(false);
	const [colorScheme, setColorScheme] = useState<"light" | "dark">("light");

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
			const warpTheme = document.documentElement.dataset.wTheme as
				"light" | "dark";
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
