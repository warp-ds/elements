import { createComponent } from "@lit/react";
import { LitElement } from "lit";
import React from "react";

import { WarpSnackbar } from "./snackbar.js";

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

/**
 * A Snackbar shows brief user feedback messages that overlay content, with an optional action such as Undo.
 *
 * Include one `<Snackbar></Snackbar>` in the document `<body>`. Use the `create` function to create messages.
 *
 * [Warp component reference](https://warp-ds.github.io/docs/components/snackbar/frameworks/elements)
 *
 * @example
 *
 * ```html
 * <body>
 * 	<Snackbar></Snackbar>
 * </body>
 * ```
 *
 * @example
 *
 * ```ts
 * // Short message indicating an operation succeeded
 * const snackbar = document.querySelector("w-snackbar");
 * const snackbarItem = snackbar.create("Settings saved", { variant: "success" });
 * ```
 *
 * @example
 *
 * ```ts
 * // An action to undo what was just done
 * const snackbar = document.querySelector("w-snackbar");
 * const snackbarItem = snackbar.create("Settings saved", {
 * 	variant: "success",
 * 	action: {
 * 		label: "Undo",
 * 		onclick: () => {
 * 			// undoSave();
 * 		},
 * 	},
 * });
 * ```
 */
export const Snackbar = createComponent({
	tagName: "w-snackbar",
	elementClass: Component as unknown as typeof WarpSnackbar,
	react: React,
});
