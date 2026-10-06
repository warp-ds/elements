import { useEffect, useState, createContext } from "react";
import { getWarpTheme } from "../apply-theme.js";

/**
 * Use in components if you need to conditionally render content based on Warp's light or dark themes, for example images.
 * Needs some setup to avoid a "flash of light theme" in the browser:
 *
 * ```ts
 *	import { useColorScheme, WarpThemeContext } from "@warp-ds/elements/react";
 *
 *	// Server-side: read the theme value from the wtheme cookie on the request,
 *	// then pass it as props to the root of your app.
 *	const defaultTheme = request.headers.cookie?.includes("wtheme=dark")
 *			? "dark"
 *			: "light";
 *
 *	function App(props) {
 *		// Client/server: pass the value of the wtheme cookie to the
 *		// useWarpTheme hook so it gets used as the default,
 *		// then pass the result of useWarpTheme to the ThemeContext.
 *		// This way the app rerenders with the right theme if it changes
 *		// when the page is visible in the browser.
 *		const theme = useWarpTheme(props.defaultTheme);
 *		return (
 *			<WarpThemeContext value={theme}>
 *				<Page />
 *			</WarpThemeContext>
 *		);
 *	}
 * ```
 */
export const WarpThemeContext = createContext("light");

type WarpTheme = "light" | "dark";

/**
 * Use this hook when you set up the {@link WarpThemeContext}'s value in your app's root.
 *
 * Use React's [useContext](https://react.dev/reference/react/useContext) to read the warp theme in your components.
 *
 * ```ts
 * import { useContext } from "react";
 * import { WarpThemeContext } from "@warp-ds/elements/react";
 *
 * export function DBALogo() {
 * 	const theme = useContext(WarpThemeContext);
 *		return (
 *			<img
 *				alt="DBA"
 *				width="82"
 *				height="32"
 *				src={
 *					theme === "dark"
 *						? "https://assets.vend.com/pkg/@warp-ds/brand-logos/~1/dba-inverted.svg"
 *						: "https://assets.vend.com/pkg/@warp-ds/brand-logos/~1/dba.svg"
 *				}
 *			/>
 *		);
 * }
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
