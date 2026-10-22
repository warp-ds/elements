import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";

const packageDir = dirname(fileURLToPath(import.meta.url));
const source = readFileSync(join(packageDir, "combobox.ts"), "utf8");
const classDocPattern = /\/\*\*[\s\S]*?\*\/\s*export class WarpCombobox/;
const selectFiresPattern =
	/@fires \{CustomEvent<\{ value: string \}>\} select\b/;
const changeFiresPattern =
	/@fires \{CustomEvent<\{ value: string \}>\} change\b/;
const blurFiresPattern = /@fires \{CustomEvent<\{ value: string \}>\} blur\b/;
const focusFiresPattern = /@fires \{CustomEvent\} focus\b/;

const classDocMatch = source.match(classDocPattern);

test("WarpCombobox class JSDoc documents select, change, blur, and focus with @fires", () => {
	assert.ok(classDocMatch, "expected class JSDoc above WarpCombobox");
	const classDoc = classDocMatch[0];

	assert.match(classDoc, selectFiresPattern);
	assert.match(classDoc, changeFiresPattern);
	assert.match(classDoc, blurFiresPattern);
	assert.match(classDoc, focusFiresPattern);
});
