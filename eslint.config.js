import config from "@warp-ds/eslint-config/typescript";

export default [
	...config,
	{
		rules: {
			"@typescript-eslint/no-explicit-any": "warn",
		},
	},
	{
		ignores: ["dist", "eik", "storybook-static", ".vitest-attachments", "entrypoint.js"],
	},
];
