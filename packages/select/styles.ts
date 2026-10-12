import { css } from "lit";
export const styles = css`
	:host {
		--_font-size: var(--w-c-select-font-size, var(--w-font-size-m));
		--_line-height: var(--w-c-select-line-height, var(--w-line-height-m));
		--_padding-right: var(--w-c-select-padding-right, 3.2rem);
		--_padding-left: var(--w-c-select-padding-left, 0.8rem);
		--_padding-top: var(--w-c-select-padding-top, 1.2rem);
		--_padding-bottom: var(--w-c-select-padding-bottom, 1.2rem);
		--_border-color: var(
			--w-c-select-color-border,
			var(--w-s-color-border-strong)
		);
		--_color: var(--w-c-select-color-text, var(--w-s-color-text));
		--_background-color: var(
			--w-c-select-color-background,
			var(--w-s-color-background)
		);
		--_border-radius: var(--w-c-select-border-radius, 4px);
		--_border-width: var(--w-c-select-border-width, 1px);
		--_border-color-hover: var(
			--w-c-select-color-border-hover,
			var(--w-s-color-border-strong-hover)
		);
		--_border-color-active: var(
			--w-c-select-color-border-active,
			var(--w-s-color-border-active)
		);
		--_outline-focus: var(
			--w-c-select-outline-focus,
			2px solid var(--w-s-color-border-focus)
		);
		--_outline-offset-focus: var(--w-c-select-outline-offset-focus, -2px);
		--_border-color-invalid: var(
			--w-c-select-color-border-invalid,
			var(--w-s-color-border-negative)
		);
		--_outline-invalid: var(
			--w-c-select-outline-invalid,
			var(--w-s-color-border-negative)
		);
		--_color-invalid: var(--w-c-select-color-text-invalid, inherit);
		--_background-color-invalid: var(
			--w-c-select-color-background-invalid,
			inherit
		);
		--_border-color-disabled: var(
			--w-c-select-color-border-disabled,
			var(--w-s-color-border-disabled)
		);
		--_color-disabled: var(
			--w-c-select-color-text-disabled,
			var(--w-s-color-text-disabled)
		);
		--_background-color-disabled: var(
			--w-c-select-color-background-disabled,
			var(--w-s-color-background-disabled-subtle)
		);
		--_chevron-width: var(--w-c-select-chevron-width, 3.2rem);
		--_chevron-height: var(--w-c-select-chevron-height, 100%);
		--_chevron-color: var(--w-c-select-chevron-color, var(--w-s-color-icon));
		--_chevron-position-top: var(--w-c-select-chevron-position-top, 30%);
		--_chevron-position-right: var(--w-c-select-chevron-position-right, 0px);
		--_chevron-position-bottom: var(--w-c-select-chevron-position-bottom, 0px);
		--_chevron-position-left: var(--w-c-select-chevron-position-left, auto);
		--_chevron-opacity-disabled: var(
			--w-c-select-chevron-opacity-disabled,
			0.25
		);
	}
	[part="base"] {
		position: relative;
	}
	.input-wrapper {
		position: relative;
	}
	[part="input"] {
		outline: none;
		font-size: var(--_font-size);
		line-height: var(--_line-height);
		cursor: pointer;
		padding-right: var(--_padding-right);
		padding-left: var(--_padding-left);
		padding-top: var(--_padding-top);
		padding-bottom: var(--_padding-bottom);
		margin-bottom: 0px;
		width: 100%;
		border-color: var(--_border-color);
		color: var(--_color);
		background-color: var(--_background-color);
		display: block;
		caret-color: currentcolor;
		border-radius: var(--_border-radius);
		border-width: var(--_border-width);
		appearance: none;
	}
	[part="input"]:hover {
		border-color: var(--_border-color-hover);
	}
	[part="input"]:active {
		border-color: var(--_border-color-active);
	}
	[part="input"]:focus-visible {
		outline: var(--_outline-focus);
		outline-offset: var(--_outline-offset-focus);
	}
	:host([invalid]) [part="input"] {
		border-color: var(--_border-color-invalid);
		outline: var(--_outline-invalid) !important;
		color: var(--_color-invalid);
		background-color: var(--_background-color-invalid);
	}
	:host([disabled]) [part="input"] {
		border-color: var(--_border-color-disabled);
		color: var(--_color-disabled);
		background-color: var(--_background-color-disabled);
	}
	[part="chevron"] {
		pointer-events: none;
		cursor: pointer;
		width: var(--_chevron-width);
		height: var(--_chevron-height);
		color: var(--_chevron-color);
		position: absolute;
		top: var(--_chevron-position-top);
		right: var(--_chevron-position-right);
		bottom: var(--_chevron-position-bottom);
		left: var(--_chevron-position-left);
		display: block;
	}
	:host([disabled]) [part="chevron"] {
		opacity: var(--_chevron-opacity-disabled);
	}
	/* if there is an option with an empty value and it is selected */
	/* if there is an option with an empty value, and no other options are selected */
	select:has(option[value=""][selected]),
	select:has(option[value=""]):not(:has(option[selected])) {
		color: var(--w-s-color-text-placeholder);
	}

	/* the options in the list that have a value should always use the text color */
	option:not([value=""]) {
		color: var(--w-s-color-text);
	}

	/* the placeholder should not use the semantic text color when the select has a value */
	option[value=""] {
		color: var(--w-s-color-text-placeholder);
	}
`;
