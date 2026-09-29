import { css } from "lit";

/*
--_border-width: var(--w-c-radio-border-width, 1px);

	--_gap: var(--w-c-radio-gap, 8px);

		--_size: var(--w-c-radio-size, 2rem);
		--_radius: var(--w-c-radio-radius, 50%);
		--_checked-border-width: var(--w-c-radio-checked-border-width, 0.6rem);

		--_bg: var(--w-c-radio-bg, var(--w-s-color-background));
		--_bg-hover: var(
			--w-c-checkbox-bg-hover,
			var(--w-s-color-background-hover)
		);
		--_bg-invalid-hover: var(
			--w-c-checkbox-bg-hover,
			var(--w-s-color-background-negative-subtle-hover)
		);
		--_border-color: var(
			--w-c-radio-border-color,
			var(--w-s-color-border-strong)
		);
		--_border-color-hover: var(
			--w-c-checkbox-border-color-hover,
			var(--w-s-color-border-strong-hover)
		);
		--_border-color-checked: var(
			--w-c-radio-border-color-checked,
			var(--w-s-color-border-selected)
		);
		--_border-color-checked-hover: var(
			--w-c-radio-border-color-checked-hover,
			var(--w-s-color-border-selected-hover)
		);
		--_border-color-invalid: var(
			--w-c-radio-border-color-invalid,
			var(--w-s-color-border-negative)
		);
		--_border-color-invalid-hover: var(
			--w-c-radio-border-color-invalid,
			var(--w-s-color-border-negative-hover)
		);
		--_border-color-invalid-checked-hover: var(
			--w-c-radio-border-color-invalid-checked-hover,
			var(--w-s-color-border-negative-hover)
		);

		--_outline-width: var(--w-c-radio-outline-width, 2px);
		--_outline-color: var(
			--w-c-radio-outline-color,
			var(--w-s-color-border-focus)
		);
		--_outline-offset: var(
			--w-c-radio-outline-offset,
			var(--w-outline-offset, 1px)
		);

		--_border-color-disabled: var(
			--w-c-radio-border-color-disabled,
			var(--w-s-color-border-disabled)
		);
		--_bg-disabled: var(
			--w-c-radio-bg-disabled,
			var(--w-s-color-background-disabled-subtle)
		);

		--_label-font-size: var(--w-c-radio-label-font-size, var(--w-font-size-m));
		--_label-line-height: var(
			--w-c-radio-label-line-height,
			var(--w-line-height-m)
		);
		--_label-color: var(--w-c-radio-label-color, currentColor);
		--_label-color-disabled: var(
			--w-c-radio-label-color-disabled,
			var(--w-s-color-text-disabled)
		);

		--_cursor: var(--w-c-radio-cursor, pointer);
		--_cursor-disabled: var(--w-c-radio-cursor-disabled, not-allowed);

		--_transition: var(
			--w-c-radio-transition,
			border-color 150ms cubic-bezier(0.4, 0, 0.2, 1),
			border-width 150ms cubic-bezier(0.4, 0, 0.2, 1),
			background-color 150ms cubic-bezier(0.4, 0, 0.2, 1)
		);

 */

export const styles = css`
	:host {
		--_padding-left: var(--w-c-textfield-padding-left, 8px);
		--_padding-right: var(--w-c-textfield-padding-right, 8px);

		--_line-height: var(--w-c-textfield-line-height, var(--w-line-height-m));
		--_font-size: var(--w-c-textfield-font-size, var(--w-font-size-m));
		--_border-color: var(--w-c-textfield-border-color, var(--w-s-color-border-strong));
		--_color: var(--w-c-textfield-color, var(--w-s-color-text));
		--_background-color: var(--w-c-textfield-background-color, var(--w-s-color-background));

		--_active-border-color: var(--w-c-textfield-active-border-color, var(--w-s-color-border-selected));

		--_hover-border-color: var(--w-c-textfield-hover-border-color, var(--w-s-color-border-strong-hover));

		--_focus-outline: var(--w-c-textfield-focus-outline, 2px solid var(--w-s-color-border-focus));
		--_outline-offset: var(--w-c-textfield-outline-offset, -2px);

		--_invalid-border-color: var(--w-c-textfield-invalid-border-color, var(--w-s-color-border-negative));
		--_invalid-color: var(--w-c-textfield-invalid-color, var(--w-s-color-text-negative));
		--_invalid-outline: var(--w-c-textfield-invalid-outline, 2px solid var(--w-s-color-border-negative));

		--_invalid-hover-border-color: var(--w-c-textfield-invalid-hover-border-color, var(--w-s-color-border-negative-hover));

		--_disabled-border-color: var(--w-c-textfield-disabled-border-color, var(--w-s-color-border-disabled));
		--_disabled-color: var(--w-c-textfield-disabled-color, var(--w-s-color-text-disabled));
		--_disabled-background-color: var(--w-c-textfield-disabled-background-color, var(--w-s-color-background-disabled-subtle));

		--_placeholder-color: var(
			--w-c-textfield-placeholder-color,
			var(--w-s-color-text-placeholder)
		);
		
	}
	[part="base"] {
		position: relative;
		--_input-padding-top: 12px;
	}

	[part="base"][data-has-prefix="true"] {
		--_padding-left: var(--w-prefix-width, 40px);
	}

	[part="base"][data-has-suffix="true"] {
		--_padding-right: var(--w-prefix-width, 40px);
	}

	[part="input"] {
		outline: none;
		line-height: var(--_line-height);
		font-size: var(--_font-size);
		padding-top: 1.2rem;
		padding-bottom: 1.2rem;
		padding-left: var(--_padding-left);
		padding-right: var(--_padding-right);
		margin-bottom: 0px;
		width: 100%;
		border-color: var(--_border-color);
		color: var(--_color);
		background-color: var(--_background-color);
		display: block;
		caret-color: currentcolor;
		border-radius: 4px;
		border-width: 1px;
	}

	[part="input"]:hover {
		border-color: var(--_hover-border-color);
	}

	[part="input"]:active {
		border-color: var(--_active-border-color);
	}

	[part="input"]:focus,
	[part="input"]:focus-visible {
		outline: var(--_focus-outline);
		outline-offset: var(--_outline-offset);
	}

	[part="input"][aria-invalid="true"] {
		border-color: var(--_invalid-border-color);
		color: var(--_invalid-color);
		outline-color: var(--_invalid-outline);
	}

	[part="input"][aria-invalid="true"]:hover {
		border-color: var(--_invalid-hover-border-color);
	}

	[part="input"][disabled] {
		border-color: var(--_disabled-border-color);
		color: var(--_disabled-color);
		background-color: var(--_disabled-background-color);
	}
	[part="mask-wrapper"] {
		position: relative;
		overflow: hidden;
	}
	[part="mask-wrapper"]:focus-within [part="mask"] {
		display: none;
	}
	[part="mask-wrapper"]:has([part="mask"]):not(:focus-within) input {
		color: transparent;
	}

	/* Hide the native browser controls */
	input[type="number"] {
		-moz-appearance: textfield;
	}

	input[type="number"]::-webkit-inner-spin-button {
		display: none;
	}

	/* It's supposed to behave like a placeholder, but look like a value. Don't tell the designers 🤫 */
	input::placeholder {
		color: var(--_placeholder-color);
	}

	[part="mask"] {
		display: block;
		border: 1px solid transparent;
		top: var(--_input-padding-top);
		left: var(--_padding-left);
		right: var(--_padding-right);
		position: absolute;
		pointer-events: none;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		z-index: 1;
	}
`;
