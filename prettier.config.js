export default {
	useTabs: true,
	overrides: [
		{
			files: ["*.yml", "*.yaml", "*.json"],
			options: {
				tabWidth: 2,
				useTabs: false,
			},
		},
	],
};
