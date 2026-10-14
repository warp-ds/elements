import { describeReactSsrAttributeMapping } from "../../tests/react-ssr-attributes";
import { Slider } from "./react.js";
import { describeReactPropertyMapping } from "../../tests/react-property-mapping.js";

describeReactPropertyMapping("Slider", Slider, "valueFormatter", () => [
	(value: string) => `${value} kr`,
	(value: string) => `${value} km`,
]);

describeReactSsrAttributeMapping("Slider", Slider, [
	{ propName: "openEnded", attrName: "open-ended" },
	{ propName: "helpText", attrName: "help-text", value: "Help text" },
	{ propName: "hiddenTextfield", attrName: "hidden-textfield" },
]);
