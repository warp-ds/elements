import { html } from "lit";

import { expect, test } from "vitest";
import { render } from "vitest-browser-lit";

import "./expandable.js";

const dividerBorderColor = "rgb(222, 222, 227)";

function getExpandable(testId: string) {
	return document.querySelector(
		`w-expandable[data-testid="${testId}"]`,
	) as HTMLElement & {
		variant?: string;
	};
}

function getShadowElement<T extends HTMLElement>(
	el: HTMLElement,
	selector: string,
) {
	return el.shadowRoot?.querySelector(selector) as T | null;
}

function baseStyleSnapshot(el: HTMLElement) {
	const base = getShadowElement<HTMLElement>(el, '[part="base"]');
	if (!base) return null;

	const style = getComputedStyle(base);
	return {
		backgroundColor: style.backgroundColor,
		borderRadius: style.borderRadius,
		marginLeft: style.marginLeft,
		marginRight: style.marginRight,
		paddingLeft: style.paddingLeft,
		paddingRight: style.paddingRight,
		paddingTop: style.paddingTop,
	};
}

test("renders the given title prop and hides the slotted content", async () => {
	const component = html`
		<w-expandable title="I'm expandable">
			<p>with expanded content</p>
		</w-expandable>
	`;

	const page = render(component);
	await expect.element(page.getByText("I'm expandable")).toBeVisible();
	await expect
		.element(page.getByText("with expanded content"))
		.not.toBeVisible();
});

test("exposes the base CSS part", async () => {
	const component = html`
		<w-expandable title="I'm expandable">
			<p>with expanded content</p>
		</w-expandable>
	`;

	const page = render(component);
	await expect.element(page.getByText("I'm expandable")).toBeVisible();

	const shadowRoot = document.querySelector("w-expandable")?.shadowRoot;
	expect(shadowRoot?.querySelector('[part="base"]')).toBeTruthy();
});

test("supports styling through component tokens", async () => {
	const component = html`
		<w-expandable
			data-testid="expandable"
			title="Styled expandable"
			style="--w-c-expandable-bg: rgb(1, 2, 3); --w-c-expandable-border-color: rgb(4, 5, 6); --w-c-expandable-border-radius: 13px; --w-c-expandable-border-width: 3px; --w-c-expandable-padding-x: 21px; --w-c-expandable-padding-y: 22px;"
		>
			<p>Expandable content</p>
		</w-expandable>
	`;

	const page = render(component);
	const el = page.getByTestId("expandable").element() as HTMLElement;

	await expect
		.poll(() => {
			const base = el.shadowRoot?.querySelector(
				'[part="base"]',
			) as HTMLElement | null;
			if (!base) return null;

			const style = getComputedStyle(base);
			return {
				backgroundColor: style.backgroundColor,
				borderColor: style.borderColor,
				borderRadius: style.borderRadius,
				borderWidth: style.borderTopWidth,
				paddingLeft: style.paddingLeft,
				paddingTop: style.paddingTop,
			};
		})
		.toEqual({
			backgroundColor: "rgb(1, 2, 3)",
			borderColor: "rgb(4, 5, 6)",
			borderRadius: "13px",
			borderWidth: "3px",
			paddingLeft: "21px",
			paddingTop: "22px",
		});
});

test("supports styling through the base part", async () => {
	const component = html`
		<style>
			w-expandable::part(base) {
				background-color: rgb(7, 8, 9);
				border-radius: 17px;
			}
		</style>
		<w-expandable data-testid="expandable" title="Part styled expandable">
			<p>Expandable content</p>
		</w-expandable>
	`;

	const page = render(component);
	const el = page.getByTestId("expandable").element() as HTMLElement;

	await expect
		.poll(() => {
			const base = el.shadowRoot?.querySelector(
				'[part="base"]',
			) as HTMLElement | null;
			if (!base) return null;

			const style = getComputedStyle(base);
			return {
				backgroundColor: style.backgroundColor,
				borderRadius: style.borderRadius,
			};
		})
		.toEqual({
			backgroundColor: "rgb(7, 8, 9)",
			borderRadius: "17px",
		});
});

test("does not render a chevron when no-chevron is set", async () => {
	const component = html`
		<w-expandable data-testid="expandable" title="No chevron" no-chevron>
			<p>Expandable content</p>
		</w-expandable>
	`;

	const page = render(component);
	const el = page.getByTestId("expandable").element() as HTMLElement;

	await expect
		.poll(() => el.shadowRoot?.querySelector('[part="chevron"]') ?? null)
		.toBe(null);
});

test("clicking the expandable shows the slotted content", async () => {
	const component = html`
		<w-expandable title="I'm expandable">
			<p>content shown after click</p>
		</w-expandable>
	`;

	const page = render(component);
	await page.getByRole("button").click();
	await expect
		.element(page.getByText("content shown after click"))
		.toBeVisible();
});

test("underlines the default-with-divider title row on hover", async () => {
	const component = html`
		<w-expandable
			data-testid="divider-hover"
			variant="default-with-divider"
			title="Hover title"
		>
			<p>Divider content</p>
		</w-expandable>
	`;

	const page = render(component);
	const el = getExpandable("divider-hover");
	await page.getByRole("button").hover();

	await expect
		.poll(() => {
			const button = getShadowElement<HTMLButtonElement>(el, "button");
			return button ? getComputedStyle(button).textDecorationLine : null;
		})
		.toBe("underline");
});

test("adds 16px after expanded default-with-divider content before the next element", async () => {
	const component = html`
		<w-expandable
			data-testid="expanded-divider"
			variant="default-with-divider"
			title="Expanded divider"
			expanded
		>
			<div style="height: 20px;">Expanded divider content</div>
		</w-expandable>
		<div data-testid="after-divider">After divider</div>
	`;

	render(component);
	const el = getExpandable("expanded-divider");
	const after = document.querySelector(
		'[data-testid="after-divider"]',
	) as HTMLElement;

	await expect
		.poll(() => {
			const base = getShadowElement<HTMLElement>(el, '[part="base"]');
			const content = getShadowElement<HTMLElement>(el, ".content");
			if (!base || !content || !after) return null;

			const contentRect = content.getBoundingClientRect();
			const afterRect = after.getBoundingClientRect();

			return {
				basePaddingBottom: getComputedStyle(base).paddingBottom,
				contentToNextGap: Math.round(afterRect.top - contentRect.bottom),
			};
		})
		.toEqual({
			basePaddingBottom: "16px",
			contentToNextGap: 16,
		});
});

test("preserves expandable rendering and state behavior for default-with-divider", async () => {
	const component = html`
		<w-expandable
			data-testid="expanded"
			variant="default-with-divider"
			title="Initially expanded"
			expanded
		>
			<p>Expanded content</p>
		</w-expandable>
		<w-expandable data-testid="slotted" variant="default-with-divider">
			<span slot="title">Slotted title</span>
			<p>Slotted content</p>
		</w-expandable>
		<w-expandable
			data-testid="no-chevron"
			variant="default-with-divider"
			title="No chevron"
			no-chevron
		>
			<p>No chevron content</p>
		</w-expandable>
		<w-expandable
			data-testid="heading"
			variant="default-with-divider"
			heading-level="2"
			title="Heading title"
		>
			<p>Heading content</p>
		</w-expandable>
		<w-expandable
			data-testid="animated"
			variant="default-with-divider"
			title="Animated title"
			animated
		>
			<p>Animated content</p>
		</w-expandable>
		<w-expandable
			data-testid="no-title"
			variant="default-with-divider"
			expanded
		>
			<p>No title content</p>
		</w-expandable>
	`;

	render(component);

	const expanded = getExpandable("expanded");
	const slotted = getExpandable("slotted");
	const noChevron = getExpandable("no-chevron");
	const heading = getExpandable("heading");
	const animated = getExpandable("animated");
	const noTitle = getExpandable("no-title");

	await expect
		.poll(() => {
			const expandedExpansion = getShadowElement<HTMLElement>(
				expanded,
				".expansion",
			);
			const expandedContent = getShadowElement<HTMLElement>(
				expanded,
				".content",
			);
			const slottedExpansion = getShadowElement<HTMLElement>(
				slotted,
				".expansion",
			);
			const slottedButton = getShadowElement<HTMLButtonElement>(
				slotted,
				"button",
			);
			const noChevronBase = getShadowElement<HTMLElement>(
				noChevron,
				'[part="base"]',
			);
			const noChevronButton = getShadowElement<HTMLButtonElement>(
				noChevron,
				"button",
			);
			const animatedTransition = getShadowElement<HTMLElement>(
				animated,
				"w-expand-transition.expansion",
			);
			if (
				!expandedContent ||
				!slottedButton ||
				!noChevronBase ||
				!noChevronButton ||
				!animatedTransition
			) {
				return null;
			}

			return {
				animatedUsesTransition: animatedTransition.localName,
				expandedContentOffset: getComputedStyle(expandedContent).marginTop,
				expandedIsVisible: expandedExpansion?.hasAttribute("aria-hidden"),
				headingWrapsButton: Boolean(
					heading.shadowRoot?.querySelector(
						'w-unstyled-heading[level="2"] button',
					),
				),
				noChevronPart: noChevron.shadowRoot?.querySelector('[part="chevron"]'),
				noChevronButtonSpansBase:
					Math.abs(
						noChevronButton.getBoundingClientRect().width -
							noChevronBase.getBoundingClientRect().width,
					) < 1,
				noTitleButton: noTitle.shadowRoot?.querySelector("button"),
				slottedAriaExpanded: slottedButton.getAttribute("aria-expanded"),
				slottedIsHidden: slottedExpansion?.getAttribute("aria-hidden"),
			};
		})
		.toEqual({
			animatedUsesTransition: "w-expand-transition",
			expandedContentOffset: "8px",
			expandedIsVisible: false,
			headingWrapsButton: true,
			noChevronPart: null,
			noChevronButtonSpansBase: true,
			noTitleButton: null,
			slottedAriaExpanded: "false",
			slottedIsHidden: "true",
		});

	getShadowElement<HTMLButtonElement>(slotted, "button")?.click();

	await expect
		.poll(() => {
			const button = getShadowElement<HTMLButtonElement>(slotted, "button");
			const expansion = getShadowElement<HTMLElement>(slotted, ".expansion");
			return {
				ariaExpanded: button?.getAttribute("aria-expanded"),
				expanded: slotted.hasAttribute("expanded"),
				isVisible: expansion?.hasAttribute("aria-hidden"),
			};
		})
		.toEqual({
			ariaExpanded: "true",
			expanded: true,
			isVisible: false,
		});
});
