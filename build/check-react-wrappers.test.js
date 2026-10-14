import assert from "node:assert/strict";
import { mkdtempSync, writeFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { test } from "node:test";
import ts from "typescript";
import { checkWrappers } from "./check-react-wrappers.js";

test("CLI distinguishes clean checks, drift, and invalid input from another directory", () => {
	const script = fileURLToPath(
		new URL("./check-react-wrappers.js", import.meta.url),
	);
	for (const [args, status, message] of [
		[["box"], 0, /0 drift error/],
		[["button"], 1, /buttonClass/],
		[["does-not-exist"], 2, /Unknown component/],
		[["--fix"], 2, /Use component names/],
	]) {
		const result = spawnSync(process.execPath, [script, ...args], {
			cwd: tmpdir(),
			encoding: "utf8",
		});
		assert.equal(result.status, status, result.stdout + result.stderr);
		assert.match(result.stdout + result.stderr, message);
	}
});

// Fixtures exercise the TypeScript analysis without importing custom elements,
// requiring a browser, or changing repository component files.
function analyze(component, props, render) {
	const directory = mkdtempSync(join(tmpdir(), "wrapper-drift-"));
	const file = join(directory, "react.ts");
	try {
		writeFileSync(
			file,
			`
declare function property(options?: object): PropertyDecorator;
class LitElement { tabIndex!: number; }
class Component extends LitElement {}
${component}
declare function createComponent<C extends new () => object>(options: {tagName: string; elementClass: C}): (props: Partial<InstanceType<C>>) => unknown;
declare const React: {
  createElement(component: unknown, props: unknown): unknown;
  forwardRef<P>(render: (props: P) => unknown): (props: P) => unknown;
};
const Base = createComponent({tagName: "w-example", elementClass: Component as unknown as typeof FixtureElement});
export const Example = React.forwardRef<${props}>(${render});
`,
		);
		const program = ts.createProgram([file], {
			experimentalDecorators: true,
			strict: true,
			target: ts.ScriptTarget.ES2022,
			skipLibCheck: true,
		});
		return checkWrappers(program, [file]);
	} finally {
		rmSync(directory, { recursive: true, force: true });
	}
}

test("reports newly exposed inherited attributes without translations", () => {
	const result = analyze(
		`
class Parent extends LitElement { @property({attribute: "help-text"}) helpText!: string; }
class FixtureElement extends Parent { @property({attribute: "full-width"}) fullWidth!: boolean; }
`,
		"Partial<FixtureElement>",
		"(props) => React.createElement(Base, {...props})",
	);
	assert.equal(result.checked, 1);
	assert.equal(result.findings.length, 2);
	assert.ok(result.findings.every((finding) => finding.severity === "error"));
	assert.match(result.findings[0].message, /fullWidth.*full-width/);
	assert.match(result.findings[1].message, /helpText.*help-text/);
});

test("accepts conditional boolean, JSX/string, and serialized-array mappings", () => {
	const result = analyze(
		`
class FixtureElement extends LitElement {
  @property({attribute: "full-width"}) fullWidth!: boolean;
  @property({attribute: "help-text"}) helpText!: string;
  @property({attribute: "fallback-placements"}) fallbackPlacements!: string[];
}
`,
		"Partial<FixtureElement>",
		`({fullWidth, helpText, fallbackPlacements, ...props}) => React.createElement(Base, {
  ...props,
  ...(fullWidth ? {"full-width": true} : {}),
  ...(typeof helpText === "string" ? {"help-text": helpText} : {}),
  ...(fallbackPlacements !== undefined ? {"fallback-placements": JSON.stringify(fallbackPlacements)} : {})
})`,
	);
	assert.deepEqual(result.findings, []);
});

test("does not demand aliases for excluded props or native DOM casing", () => {
	const result = analyze(
		`
class FixtureElement extends LitElement {
  @property({attribute: "full-width"}) fullWidth!: boolean;
  @property({attribute: "tabindex"}) override tabIndex!: number;
}
`,
		'Omit<Partial<FixtureElement>, "fullWidth"> & {"full-width"?: boolean}',
		"(props) => React.createElement(Base, {...props})",
	);
	assert.deepEqual(result.findings, []);
});

test("a type assertion alone is not a runtime mapping", () => {
	const result = analyze(
		'class FixtureElement extends LitElement { @property({attribute: "help-text"}) helpText!: string; }',
		"Partial<FixtureElement>",
		'(props) => React.createElement(Base, {...props} as {"help-text"?: string})',
	);
	assert.equal(result.findings.length, 1);
	assert.equal(result.findings[0].severity, "error");
});

test("reports stale mappings after an attribute is renamed", () => {
	const result = analyze(
		'class FixtureElement extends LitElement { @property({attribute: "new-name"}) oldName!: string; }',
		"Partial<FixtureElement>",
		'({oldName}) => React.createElement(Base, {"old-name": oldName})',
	);
	assert.equal(result.findings.length, 2);
	assert.match(result.findings[0].message, /unknown attribute "old-name"/);
	assert.match(result.findings[1].message, /needs "new-name"/);
});

test("property-only and dynamic declarations require review, internal fields are ignored", () => {
	const result = analyze(
		`
class FixtureElement extends LitElement {
  @property({attribute: false}) formatter!: (value: string) => string;
  @property({attribute: false}) count!: number;
  /** @internal */
  @property({attribute: "private-name"}) internalName!: string;
  @property() _internalName!: string;
  @property({attribute: dynamicName}) dynamicName!: string;
}
declare const dynamicName: string;
`,
		"Partial<FixtureElement>",
		"(props) => React.createElement(Base, {...props})",
	);
	assert.equal(result.findings.length, 3);
	assert.ok(result.findings.every((finding) => finding.severity === "review"));
});
