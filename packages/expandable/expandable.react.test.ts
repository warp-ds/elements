import type React from "react";
import { describeReactSsrAttributeMapping } from "../../tests/react-ssr-attributes";
import { Expandable } from "./react.js";
import { expectTypeOf, test } from "vitest";

type ExpandableProps = React.ComponentProps<typeof Expandable>;

test("types variant as the accepted expandable variants", () => {
	expectTypeOf<ExpandableProps["variant"]>().toEqualTypeOf<
		"default" | "box" | "box-bleed" | "default-with-divider" | undefined
	>();
});

describeReactSsrAttributeMapping("Expandable", Expandable, [
	{
		propName: "buttonClass",
		attrName: "button-class",
		value: "button-class-name",
	},
	{
		propName: "contentClass",
		attrName: "content-class",
		value: "content-class-name",
	},
	{ propName: "noChevron", attrName: "no-chevron" },
	{ propName: "headingLevel", attrName: "heading-level", value: 2 },
]);
