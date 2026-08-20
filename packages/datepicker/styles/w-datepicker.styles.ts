import { css } from "lit";

export const inputLabelStyles = css`
	/* Label component tokens with semantic fallbacks */
	label {
		/* Internal tokens - not part of public API */
		--_color: var(--w-c-input-label-color, var(--w-s-color-text));
		--_font-size: var(--w-c-input-label-font-size, var(--w-font-size-s));
		--_line-height: var(--w-c-input-label-line-height, var(--w-line-height-s));
		--_font-weight: var(--w-c-input-label-font-weight, 700);
		--_padding-bottom: var(--w-c-input-label-padding-bottom, 0.4rem);
		--_cursor: var(--w-c-input-label-cursor, pointer);
		--_display: var(--w-c-input-label-display, block);

		/* Apply styles */
		display: var(--_display);
		position: relative;
		font-size: var(--_font-size);
		line-height: var(--_line-height);
		font-weight: var(--_font-weight);
		padding-bottom: var(--_padding-bottom);
		cursor: var(--_cursor);
		color: var(--_color);
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	/* Optional text styling */
	label span {
		--_padding-left: var(--w-c-input-optional-padding-left, 0.8rem);
		--_font-weight: var(--w-c-input-optional-font-weight, 400);
		--_font-size: var(--w-c-input-optional-font-size, var(--w-font-size-s));
		--_line-height: var(
			--w-c-input-optional-line-height,
			var(--w-line-height-s)
		);
		--_color: var(--w-c-input-optional-color, var(--w-s-color-text-subtle));

		padding-left: var(--_padding-left);
		font-weight: var(--_font-weight);
		font-size: var(--_font-size);
		line-height: var(--_line-height);
		color: var(--_color);
	}

	[part="tooltip-target"] {
		appearance: none;
		background: transparent;
		border: none;
		height: 16px;
		margin: 0 0 0 4px;
		padding: 0;
		vertical-align: text-top;
	}

	w-tooltip {
		display: inline-block;
	}
`;

export const inputHelpTextStyles = css`
	/* Help text component tokens with semantic fallbacks */
	:host {
		--_help-text-color: var(
			--w-c-input-help-text-color,
			var(--w-s-color-text-subtle)
		);
		--_help-text-font-size: var(
			--w-c-input-help-text-font-size,
			var(--w-font-size-xs)
		);
		--_help-text-line-height: var(
			--w-c-input-help-text-line-height,
			var(--w-line-height-xs)
		);
		--_help-text-margin-top: var(--w-c-input-help-text-margin-top, 0.4rem);
		--_help-text-display: var(--w-c-input-help-text-display, block);
	}

	/* Invalid state overrides color */
	:host([invalid]) {
		--_help-text-color: var(
			--w-c-input-help-text-color-invalid,
			var(--w-s-color-text-negative)
		);
	}

	.help-text {
		font-size: var(--_help-text-font-size);
		line-height: var(--_help-text-line-height);
		margin-top: var(--_help-text-margin-top);
		display: var(--_help-text-display);
		color: var(--_help-text-color);
	}
`;

export const wDatepickerStyles = css`
	/* CustomDatePicker.css */

	/* container */
	.w-datepicker-wrapper {
		position: relative;
		display: inline-block;
		width: 100%;
		font-size: var(--w-font-size-m);
		line-height: var(--w-line-height-m);
	}
	.w-datepicker-input-wrapper {
		position: relative;
	}
	/* hide the browser’s calendar icon, and prevent the native popup */
	.w-datepicker-input {
		/* remove default arrows/appearance */
		-webkit-appearance: none;
		-moz-appearance: textfield;
		appearance: none;

		/* basic styling */
		display: block;
		padding: 1.2rem 0.8rem;
		border: 1px solid #ccc;
		border-radius: 4px;
		width: 100%;
		height: 48px;
		cursor: pointer;
		font-size: var(--w-font-size-m);
		line-height: var(--w-line-height-m);
		background-color: var(--w-s-color-background);
	}
	.w-datepicker-input:hover {
		border-color: var(--w-s-color-border-hover);
	}
	.w-datepicker-input:active {
		border-color: var(--w-s-color-border-selected);
	}

	.w-datepicker-input:focus,
	.w-datepicker-input:focus-visible {
		outline: 2px solid var(--w-s-color-border-focus);
		outline-offset: -2px;
	}

	/* custom calendar button */
	.w-datepicker-button {
		--padding-x: 14px;
		--padding-y: 14px;
		--border-radius: 2px; /* override to better fit inside the input field */
		position: absolute;
		right: 2px;
		top: 2px;
		pointer-events: auto; /* override parent’s none */
	}

	input[type="date"]::-webkit-inner-spin-button,
	input[type="date"]::-webkit-calendar-picker-indicator {
		display: none;
		-webkit-appearance: none;
	}
	input[type="date"],
	input[type="time"],
	input[type="datetime-local"],
	input[type="month"] {
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
	}
	/* Temporary dropdown, should probably use the appropriate component when it is done */
	.w-dropdown__popover {
		position: absolute;
		width: max-content;
		background-color: var(--w-s-color-background);
		box-shadow: var(--w-shadow-s);
		z-index: 100;
		border-radius: 8px;
		visibility: hidden;
	}
	.w-dropdown__popover--open {
		visibility: visible;
	}
`;
