import { appendFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

import esbuild from "esbuild";

const globalCss = fileURLToPath(new URL("../packages/global.css", import.meta.url));
const outputCss = fileURLToPath(new URL("../eik/styles.css", import.meta.url));

const { outputFiles } = await esbuild.build({
	entryPoints: [globalCss],
	bundle: true,
	minify: true,
	write: false,
	loader: {
		".css": "css",
	},
});

await appendFile(outputCss, `\n${outputFiles[0].text}`, { encoding: "utf8" });
