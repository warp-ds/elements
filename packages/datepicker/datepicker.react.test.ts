import { describeReactSsrAttributeMapping } from "../../tests/react-ssr-attributes";
import { DatePicker } from "./react.js";
import { describeReactPropertyMapping } from "../../tests/react-property-mapping.js";

describeReactPropertyMapping("DatePicker", DatePicker, "isDayDisabled", () => [
	(day: Date) => day.getDay() === 0,
	(day: Date) => day.getDay() === 6,
]);

describeReactSsrAttributeMapping("DatePicker", DatePicker, [
	{ propName: "headerFormat", attrName: "header-format", value: "short" },
	{ propName: "weekdayFormat", attrName: "weekday-format", value: "narrow" },
	{ propName: "dayFormat", attrName: "day-format", value: "numeric" },
	{ propName: "helpText", attrName: "help-text", value: "Choose a date" },
]);
