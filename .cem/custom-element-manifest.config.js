import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { cemValidatorPlugin } from "@wc-toolkit/cem-validator";
import { jsDocTagsPlugin } from "@wc-toolkit/jsdoc-tags";
import { jsxTypesPlugin } from "@wc-toolkit/jsx-types";
import { getTsProgram, typeParserPlugin } from "@wc-toolkit/type-parser";

const jsxTypesPath = fileURLToPath(
	new URL("../dist/index.d.ts", import.meta.url),
);

function reactJsxIntrinsicPropsPlugin() {
	return {
		name: "react-jsx-intrinsic-props",
		packageLinkPhase() {
			const source = readFileSync(jsxTypesPath, "utf8");
			const customElementsStart = source.indexOf(
				"export type CustomElements = {",
			);
			const solidElementsStart = source.indexOf(
				"export type CustomElementsSolidJs = {",
			);

			if (customElementsStart === -1 || solidElementsStart === -1) {
				throw new Error(
					"Unable to find generated CustomElements types in dist/index.d.ts",
				);
			}

			const customElementsBlock = source.slice(
				customElementsStart,
				solidElementsStart,
			);
			const customElementPattern =
				/"([^"]+)":\s*Partial<\s*([A-Za-z_$][\w$]*Props)\s*&\s*BaseProps<([^>]+)>\s*&\s*BaseEvents\s*>;/g;
			const customElements = Array.from(
				customElementsBlock.matchAll(customElementPattern),
				([, tagName, propsType, elementType]) => ({
					tagName,
					propsType,
					elementType,
				}),
			);

			if (customElements.length === 0) {
				throw new Error(
					"Unable to derive custom element types from dist/index.d.ts",
				);
			}

			// Keep the generated CustomElements/Solid types intact and add a React-only
			// intrinsic map where React props and component props are merged by precedence.
			const reactCustomElementsTypes = `type ReactElementProps<T extends HTMLElement> = import("react").DOMAttributes<T> &
  import("react").AriaAttributes &
  import("react").RefAttributes<T> &
  Pick<
    import("react").HTMLAttributes<T>,
    | "className"
    | "style"
    | "suppressContentEditableWarning"
    | "suppressHydrationWarning"
  >;

// Merge order matters: component props must win over React/global/base props
// when names collide, e.g. w-attention's boolean popover prop.
type ReactCustomElementProps<T extends HTMLElement, Props> = Omit<
  BaseProps<T> & BaseEvents,
  keyof ReactElementProps<T> | keyof Props
> &
  Omit<ReactElementProps<T>, keyof Props> &
  Props;

type CustomElementInstances = {
${customElements.map(({ tagName, elementType }) => `  "${tagName}": ${elementType};`).join("\n")}
};

type CustomElementComponentProps = {
${customElements.map(({ tagName, propsType }) => `  "${tagName}": ${propsType};`).join("\n")}
};

export type ReactCustomElements = {
  [Tag in keyof CustomElementComponentProps]: Tag extends keyof CustomElementInstances
    ? Partial<ReactCustomElementProps<CustomElementInstances[Tag], CustomElementComponentProps[Tag]>>
    : never;
};

`;

			const withReactTypes = `${source.slice(0, solidElementsStart)}${reactCustomElementsTypes}${source.slice(
				solidElementsStart,
			)}`;
			const updatedSource = withReactTypes.replace(
				// eslint-disable-next-line e18e/prefer-static-regex
				/(declare module ["']react["']\s*\{\s*namespace JSX\s*\{\s*interface IntrinsicElements extends )CustomElements(\s*\{\})/,
				"$1ReactCustomElements$2",
			);

			if (
				!updatedSource.includes(
					"interface IntrinsicElements extends ReactCustomElements",
				)
			) {
				throw new Error(
					"Unable to update React JSX IntrinsicElements in dist/index.d.ts",
				);
			}

			writeFileSync(jsxTypesPath, updatedSource);
		},
	};
}

export default {
	overrideModuleCreation: ({ ts, globs }) => {
		const program = getTsProgram(ts, globs, "tsconfig.json");
		return program
			.getSourceFiles()
			.filter((sf) => globs.find((glob) => sf.fileName.includes(glob)));
	},

	// Globs to analyze
	globs: [
		// released
		"packages/affix/affix.ts",
		"packages/alert/alert.ts",
		"packages/attention/attention.ts",
		"packages/badge/badge.ts",
		"packages/box/box.ts",
		"packages/breadcrumbs/breadcrumbs.ts",
		"packages/button/button.ts",
		"packages/card/card.ts",
		"packages/checkbox/checkbox.ts",
		"packages/checkbox-group/checkbox-group.ts",
		"packages/combobox/combobox.ts",
		"packages/datepicker/datepicker.ts",
		"packages/expandable/expandable.ts",
		"packages/icon/icon.ts",
		"packages/link/link.ts",
		"packages/modal/modal.ts",
		"packages/modal-footer/modal-footer.ts",
		"packages/modal-header/modal-header.ts",
		"packages/page-indicator/page-indicator.ts",
		"packages/pagination/pagination.ts",
		"packages/pill/pill.ts",
		"packages/radio/radio.ts",
		"packages/radio-group/radio-group.ts",
		"packages/select/select.ts",
		"packages/slider/slider.ts",
		"packages/slider-thumb/slider-thumb.ts",
		"packages/snackbar/snackbar.ts",
		"packages/snackbar-item/snackbar-item.ts",
		"packages/step/step.ts",
		"packages/step-indicator/step-indicator.ts",
		"packages/switch/switch.ts",
		"packages/tab/tab.ts",
		"packages/tab-panel/tab-panel.ts",
		"packages/tabs/tabs.ts",
		"packages/textarea/textarea.ts",
		"packages/textfield/textfield.ts",
		"packages/toast/toast.ts",
		"packages/toast-container/toast-container.ts",

		// unreleased
		// 'packages/dead-toggle/dead-toggle.ts',
	],

	// Globs to exclude
	exclude: [],

	// Directory to output CEM to
	outdir: "dist/",

	// Run in dev mode, provides extra logging
	dev: false,

	// Run in watch mode, runs on file changes
	watch: false,

	// Include third party custom elements manifests
	dependencies: true,

	// Enable special handling for litelement
	litelement: true,

	// The `analyze` command and the validator plugin
	// disagree on what's a valid path, so disable the
	// automatic package.json update.
	packagejson: false,

	plugins: [
		typeParserPlugin(),
		jsDocTagsPlugin({
			tags: {
				parent: {},
			},
		}),
		jsxTypesPlugin({
			outdir: "dist/",
			fileName: "index.d.ts",
			stronglyTypedEvents: true,
			includeDefaultDOMEvents: true,
			allowUnknownProps: false,
			/* @wc-toolkit/jsx-types uses the paths recorded in your Custom Elements Manifest to build the imports for JSX type generation.
    Specifically:
      •	It reads modulePath or declaration.module values from the CEM.
      •	Then it passes those into a path join/normalize function.
      •	However, it does not prefix relative paths with ./, meaning packages/foo/index.ts is treated as a bare module specifier, not a relative path — which is invalid in most TypeScript/ESM contexts.
    So we use this hook to rewrite incorrect modulePath to correct ones */
			componentTypePath(name, tag, modulePath) {
				return modulePath.replace("packages", "./packages");
			},
		}),
		reactJsxIntrinsicPropsPlugin(),
		cemValidatorPlugin({
			rules: {
				manifest: {
					// not sure what's wrong here, either the types parser doesn't pick up that we export the type,
					// or the validator doesn't check for parsedType on the member itself (if that's also valid).
					exportTypes: "warning",
					// not quite sure how to configure the path resolver plugin to fix these, the resolver plugin doesn't seem to help even when it changes the output
					modulePath: "off",
					definitionPath: "off",
					typeDefinitionPath: "off",
				},
			},
		}),
	],
};
