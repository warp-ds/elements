/// <reference types="vite/client" />

import { describe, expect, test } from "vitest";

import manifest from "../../dist/custom-elements.json" with { type: "json" };
import docsAccessibility from "./docs/accessibility.md?raw";
import docsExamples from "./docs/examples.md?raw";
import docsStyling from "./docs/styling.md?raw";
import docsUsage from "./docs/usage.md?raw";
import expandableSource from "./expandable.ts?raw";
import reactStories from "./expandable.react.stories.tsx?raw";
import stories from "./expandable.stories.ts?raw";

const variants = [
	"default",
	"box",
	"box-bleed",
	"default-with-divider",
] as const;

type ManifestAttribute = {
	name?: string;
	type?: {
		text?: string;
	};
	deprecated?: string;
};

type ManifestMember = ManifestAttribute;

type ManifestDeclaration = {
	tagName?: string;
	attributes?: ManifestAttribute[];
	members?: ManifestMember[];
};

const customElementsManifest = manifest as {
	modules: Array<{
		declarations?: ManifestDeclaration[];
	}>;
};

function getExpandableDeclaration() {
	return customElementsManifest.modules
		.flatMap((module) => module.declarations ?? [])
		.find((declaration) => declaration.tagName === "w-expandable");
}

function getAttribute(name: string) {
	const declaration = getExpandableDeclaration();
	return declaration?.attributes?.find((attribute) => attribute.name === name);
}

function getMember(name: string) {
	const declaration = getExpandableDeclaration();
	return declaration?.members?.find((member) => member.name === name);
}

describe("w-expandable variant source contract", () => {
	test("documents the variant property and deprecated compatibility flags for generated metadata", () => {
		expect(expandableSource).toContain("@property({ type: String");
		expect(expandableSource).toMatch(/\bvariant\s*:/);
		for (const variant of variants) {
			expect(expandableSource).toContain(`"${variant}"`);
		}

		expect(expandableSource).toMatch(
			/@deprecated[\s\S]*Use `variant="box"`[\s\S]*\bbox\s*=/,
		);
		expect(expandableSource).toMatch(
			/@deprecated[\s\S]*Use `variant="box-bleed"`[\s\S]*\bbleed\s*=/,
		);
	});

	test("generated custom elements metadata lists variant values and deprecated flags", () => {
		const variantAttribute = getAttribute("variant");
		const variantMember = getMember("variant");
		const boxAttribute = getAttribute("box");
		const bleedAttribute = getAttribute("bleed");

		expect(variantAttribute).toBeTruthy();
		expect(variantMember).toBeTruthy();
		for (const variant of variants) {
			expect(variantAttribute?.type?.text).toContain(variant);
			expect(variantMember?.type?.text).toContain(variant);
		}

		expect(boxAttribute?.deprecated).toContain('variant="box"');
		expect(bleedAttribute?.deprecated).toContain('variant="box-bleed"');
	});

	test("element and React stories show all variants and keep deprecated flags isolated to compatibility guidance", () => {
		expect(stories).toMatch(
			/export const Default\b[\s\S]*variant:\s*"default"/,
		);
		expect(stories).toMatch(/export const Box\b[\s\S]*variant:\s*"box"/);
		expect(stories).toMatch(
			/export const BoxBleed\b[\s\S]*variant:\s*"box-bleed"/,
		);
		expect(stories).toMatch(
			/export const DefaultWithDivider\b[\s\S]*variant:\s*"default-with-divider"/,
		);
		expect(stories).toMatch(/export const DeprecatedFlagsCompatibility\b/);

		expect(reactStories).toMatch(
			/export const DefaultWithDivider\b[\s\S]*variant:\s*"default-with-divider"/,
		);
		for (const variant of variants) {
			expect(reactStories).toContain(`variant: "${variant}"`);
		}
	});

	test("expandable docs describe variant usage and deprecate box and bleed examples", () => {
		const docs = [docsAccessibility, docsExamples, docsStyling, docsUsage].join(
			"\n",
		);

		for (const variant of variants) {
			expect(docs).toContain(`variant="${variant}"`);
		}

		expect(docs).toMatch(/box[\s\S]*deprecated/i);
		expect(docs).toMatch(/bleed[\s\S]*deprecated/i);
		expect(docs).toMatch(/new usage[\s\S]*variant/i);
		expect(docsExamples).not.toMatch(
			/<w-expandable(?:(?!deprecated|compatib)[\s\S])*?\s(?:box|bleed)(?:\s|>)/i,
		);
	});
});
