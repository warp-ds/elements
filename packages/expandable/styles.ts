import { css } from "lit";

export const styles = css`
	:host {
		display: block;
		--_padding-x: var(--w-c-expandable-padding-x, 0px);
		--_padding-y: var(--w-c-expandable-padding-y, 1.6rem);
		--_gap: var(--w-c-expandable-gap, 0.8rem);
		--_bleed-margin-inline: 1.6rem;
		--_background-color: var(--w-c-expandable-bg, transparent);
		--_background-color-hover: var(
			--w-c-expandable-bg-hover,
			var(--_background-color)
		);
		--_background-color-active: var(
			--w-c-expandable-bg-active,
			var(--_background-color)
		);
		--_border-color: var(--w-c-expandable-border-color, transparent);
		--_border-width: var(--w-c-expandable-border-width, 0px);
		--_border-radius: var(--w-c-expandable-border-radius, 8px);
		--_color: var(--w-c-expandable-color, var(--w-s-color-text));
		--_icon-color: var(--w-c-expandable-icon-color, var(--w-s-color-icon));
		--_title-font-size: var(
			--w-c-expandable-title-font-size,
			var(--w-font-size-m)
		);
		--_title-line-height: var(
			--w-c-expandable-title-line-height,
			var(--w-line-height-m)
		);
		--_title-font-weight: var(--w-c-expandable-title-font-weight, 700);
		--_transition-duration: var(--w-c-expandable-transition-duration, 150ms);
		--_transition-timing-function: var(
			--w-c-expandable-transition-timing-function,
			ease-in-out
		);
		--_expansion-transition-duration: var(
			--w-c-expandable-expansion-duration,
			0.3s
		);
		--_expansion-transition-timing-function: var(
			--w-c-expandable-expansion-timing-function
		);

		/* Forwarded to w-expand-transition / element-collapse.js */
		--w-expansion-duration: var(--_expansion-transition-duration);
		--w-expansion-timing-function: var(--_expansion-transition-timing-function);
	}

	:host([box]:not([variant])),
	:host([variant="box"]),
	:host([variant="box-bleed"]) {
		--_background-color: var(
			--w-c-expandable-bg,
			var(--w-s-color-background-subtle)
		);
		--_background-color-hover: var(
			--w-c-expandable-bg-hover,
			var(--w-s-color-background-subtle-hover)
		);
		--_background-color-active: var(
			--w-c-expandable-bg-active,
			var(--w-s-color-background-subtle-active)
		);
		--_padding-x: var(--w-c-expandable-padding-x, 1.6rem);
		--_padding-y: var(--w-c-expandable-padding-y, 1.6rem);
		--_gap: var(--w-c-expandable-gap, 1.6rem);
	}

	:host([variant="default-with-divider"]) {
		--_background-color: transparent;
		--_background-color-hover: var(
			--w-c-expandable-bg-hover,
			var(--_background-color)
		);
		--_background-color-active: var(
			--w-c-expandable-bg-active,
			var(--_background-color)
		);
		--_border-color: var(
			--w-c-expandable-divider-border-color,
			var(--Semantic-Color-Border-Default, #dedee3)
		);
		--_border-radius: 0px;
		--_gap: var(--w-c-expandable-gap, 8px);
		--_padding-x: 0px;
		--_padding-y: 0px;
	}

	[part="base"] {
		background-color: var(--_background-color);
		border: var(--_border-width) solid var(--_border-color);
		border-radius: var(--_border-radius);
		color: var(--_color);
		display: block;
		padding: var(--_padding-y) var(--_padding-x);
		position: relative;
		transition:
			background-color var(--_transition-duration)
				var(--_transition-timing-function),
			border-color var(--_transition-duration)
				var(--_transition-timing-function),
			color var(--_transition-duration) var(--_transition-timing-function);
		will-change: height;
	}

	:host([box]:not([variant])) [part="base"]:hover,
	:host([variant="box"]) [part="base"]:hover,
	:host([variant="box-bleed"]) [part="base"]:hover {
		background-color: var(--_background-color-hover);
	}

	:host([box]:not([variant])) [part="base"]:active,
	:host([variant="box"]) [part="base"]:active,
	:host([variant="box-bleed"]) [part="base"]:active {
		background-color: var(--_background-color-active);
	}

	:host([bleed]:not([variant])) [part="base"],
	:host([variant="box-bleed"]) [part="base"] {
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
		margin-left: calc(var(--_bleed-margin-inline) * -1);
		margin-right: calc(var(--_bleed-margin-inline) * -1);
	}

	.button {
		appearance: none;
		background-color: transparent;
		border: 0;
		cursor: pointer;
		margin: 0;
		padding: 0;
		text-align: left;
		width: auto;
	}

	.button:focus {
		outline: none;
	}

	.button:hover,
	.button:focus-visible {
		text-decoration: underline;
	}

	:host([box]:not([variant])) .button,
	:host([variant="box"]) .button,
	:host([variant="box-bleed"]) .button,
	:host([variant="default-with-divider"]) .button {
		align-items: center;
		display: inline-flex;
		justify-content: space-between;
		position: relative;
		width: 100%;
	}

	:host([variant="default-with-divider"]) .button:hover,
	:host([variant="default-with-divider"]) .button:focus-visible {
		text-decoration: none;
	}

	.title {
		align-items: center;
		display: flex;
		justify-content: space-between;
		width: 100%;
	}

	:host([variant="default-with-divider"]) .title {
		border-top: 1px solid var(--_border-color);
		gap: var(--_gap);
		padding: 16px 16px 16px 0;
	}

	.title-text,
	slot[name="title"] {
		font-size: var(--_title-font-size);
		font-weight: var(--_title-font-weight);
		line-height: var(--_title-line-height);
	}

	[part="chevron"] {
		color: var(--_icon-color);
		display: inline-block;
		margin-left: 0;
		vertical-align: middle;
	}

	:host(:not([box]):not([variant])) [part="chevron"],
	:host([variant="default"]) [part="chevron"],
	:host([variant="default-with-divider"]) [part="chevron"] {
		margin-left: var(--_gap);
	}

	.chevron-icon {
		display: flex;
		transition: transform var(--_transition-duration)
			var(--_transition-timing-function);
	}

	:host([expanded]) .chevron-icon[data-direction="down"] {
		transform: rotate(-180deg);
	}

	:host(:not([expanded])) .chevron-icon[data-direction="up"] {
		transform: rotate(180deg);
	}

	.expansion {
		overflow: hidden;
	}

	.expansion[aria-hidden="true"] {
		height: 0;
		visibility: hidden;
	}

	.content[data-has-title] {
		margin-top: var(--_gap);
	}

	.content {
		overflow-wrap: break-word;
		position: relative;
	}

	:host([variant="default-with-divider"]:not(:first-of-type):last-of-type)
		[part="base"] {
		border-bottom: 1px solid var(--_border-color);
	}

	::slotted(:last-child) {
		margin-bottom: 0px !important;
	}

	@media (min-width: 480px) {
		:host([bleed]:not([variant])) [part="base"],
		:host([variant="box-bleed"]) [part="base"] {
			border-radius: var(--_border-radius);
			margin-left: 0;
			margin-right: 0;
		}
	}
`;
