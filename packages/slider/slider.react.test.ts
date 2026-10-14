import { describeReactSsrAttributeMapping } from "../../tests/react-ssr-attributes";
import { Slider } from "./react.js";
import type { SliderSlot } from "../slider-thumb/slider-thumb.js";
import { describeReactPropertyMapping } from "../../tests/react-property-mapping.js";

describeReactPropertyMapping("Slider", Slider, "valueFormatter", () => [
	(value: string) => `${value} kr`,
	(value: string) => `${value} km`,
]);

describeReactPropertyMapping("Slider", Slider, "tooltipFormatter", () => [
	(value: string) => `From ${value}`,
	(value: string) => `Up to ${value}`,
]);

describeReactPropertyMapping("Slider", Slider, "labelFormatter", () => [
	(slot: SliderSlot) => `Minimum ${slot}`,
	(slot: SliderSlot) => `Maximum ${slot}`,
]);

describeReactSsrAttributeMapping("Slider", Slider, [
	{ propName: "openEnded", attrName: "open-ended" },
	{ propName: "helpText", attrName: "help-text", value: "Help text" },
	{ propName: "hiddenTextfield", attrName: "hidden-textfield" },
]);
