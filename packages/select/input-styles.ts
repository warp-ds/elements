import { css } from "lit";

/**
 * Shared styles for input components (textfield, textarea, select)
 * using the internal token pattern with a public styling API.
 *
 * Public API tokens (customizable):
 * - Label: --w-c-input-label-*
 * - Help text: --w-c-input-help-text-*
 * - Optional indicator: --w-c-input-optional-*
 */

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
