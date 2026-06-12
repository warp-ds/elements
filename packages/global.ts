/* This module is part of entrypoint.js, imported after the components. Use it for global side-effects such as keyboard listeners. */

import { addListener } from "./interaction-type-detection.js";

if (typeof window !== "undefined") {
	addListener();
}
