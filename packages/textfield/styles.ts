import { css } from "lit";

export const styles = css`
	:host {
		--_padding-left: var(--w-c-textfield-padding-left, 8px);
		--_padding-right: var(--w-c-textfield-padding-right, 8px);
		--_line-height: var(--w-c-textfield-line-height, var(--w-line-height-m));
		--_font-size: var(--w-c-textfield-font-size, var(--w-font-size-m));
		--_border-color: var(
			--w-c-textfield-color-border,
			var(--w-s-color-border-strong)
		);
		--_color: var(--w-c-textfield-color, var(--w-s-color-text));
		--_background-color: var(--w-c-textfield-background, var(--w-s-color-background));
		--_active-border-color: var(
			--w-c-textfield-color-border-active,
			var(--w-s-color-border-selected)
		);
		--_hover-border-color: var(
			--w-c-textfield-color-border-hover,
			var(--w-s-color-border-strong-hover)
		);
		--_focus-outline: var(
			--w-c-textfield-outline-focus,
			2px solid var(--w-s-color-border-focus)
		);
		--_outline-offset: var(--w-c-textfield-outline-offset, -2px);
		--_invalid-border-color: var(
			--w-c-textfield-color-border-invalid,
			var(--w-s-color-border-negative)
		);
		--_invalid-color: var(
			--w-c-textfield-color-invalid,
			var(--w-s-color-text-negative)
		);
		--_invalid-outline: var(
			--w-c-textfield-outline-invalid,
			2px solid var(--w-s-color-border-negative)
		);
		--_invalid-hover-border-color: var(
			--w-c-textfield-color-border-invalid-hover,
			var(--w-s-color-border-negative-hover)
		);
		--_disabled-border-color: var(
			--w-c-textfield-color-border-disabled,
			var(--w-s-color-border-disabled)
		);
		--_disabled-color: var(
			--w-c-textfield-color-disabled,
			var(--w-s-color-text-disabled)
		);
		--_disabled-background-color: var(
			--w-c-textfield-color-background-disabled,
			var(--w-s-color-background-disabled-subtle)
		);
		--_placeholder-color: var(
			--w-c-textfield-color-placeholder,
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
