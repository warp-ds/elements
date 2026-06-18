import { css } from "lit";

/**
 * Affix component styles using the internal token pattern with a public styling API.
 *
 * Public API tokens (customizable):
 * - Wrapper: --w-c-affix-*
 * - Label: --w-c-affix-label-*
 */

export const affixStyles = css`
	/* Wrapper component tokens with semantic fallbacks */
	:host {
		/* Internal tokens - not part of public API */
		--_wrapper-bg: var(--w-c-affix-wrapper-bg, transparent);
		--_wrapper-border-radius: var(--w-c-affix-wrapper-border-radius, 0.4rem);
		--_wrapper-padding-left: var(--w-c-affix-wrapper-padding-left, 1.2rem);
		--_wrapper-padding-right: var(--w-c-affix-wrapper-padding-right, 1.2rem);
		--_wrapper-width-with-label: var(
			--w-c-affix-wrapper-width-with-label,
			max-content
		);
		--_wrapper-width-with-icon: var(--w-c-affix-wrapper-width-with-icon, 4rem);

		/* Label tokens */
		--_label-color: var(--w-c-affix-label-color, var(--w-s-color-text));
		--_label-font-size: var(--w-c-affix-label-font-size, var(--w-font-size-xs));
		--_label-line-height: var(
			--w-c-affix-label-line-height,
			var(--w-line-height-xs)
		);
		--_label-font-weight: var(--w-c-affix-label-font-weight, 700);
		--_label-cursor: var(--w-c-affix-label-cursor, default);
	}

	/* Base wrapper styles (applied to all variants) */
	[part="wrapper"] {
		position: absolute;
		top: 0;
		bottom: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: var(--_wrapper-bg);
		border-radius: var(--_wrapper-border-radius);
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	/* Prefix positioning */
	:host([slot="prefix"]) [part="wrapper"] {
		left: 0;
	}

	/* Suffix positioning */
	:host([slot="suffix"]) [part="wrapper"] {
		right: 0;
	}

	/* Width variants */
	[part="wrapper"].has-label {
		width: var(--_wrapper-width-with-label);
	}

	:host([slot="prefix"]) [part="wrapper"].has-label {
		padding-left: var(--_wrapper-padding-left);
	}

	:host([slot="suffix"]) [part="wrapper"].has-label {
		padding-right: var(--_wrapper-padding-right);
	}

	[part="wrapper"].has-icon {
		width: var(--_wrapper-width-with-icon);
	}

	/* Label styling */
	[part="label"] {
		display: block;
		position: relative;
		font-size: var(--_label-font-size);
		line-height: var(--_label-line-height);
		font-weight: var(--_label-font-weight);
		color: var(--_label-color);
		cursor: var(--_label-cursor);
		padding-bottom: 0;
	}

	/* Button wrapper for interactive variants */
	button[part="wrapper"] {
		border: none;
		outline: none;
		cursor: pointer;
	}

	/* Focus styles for interactive variants */
	button[part="wrapper"]:focus {
		outline: 2px solid var(--w-s-color-border-focus);
		outline-offset: var(--w-outline-offset, -2px);
	}

	button[part="wrapper"]:focus-visible {
		outline: 2px solid var(--w-s-color-border-focus);
		outline-offset: var(--w-outline-offset, -2px);
	}

	button[part="wrapper"]:not(:focus-visible) {
		outline: none;
	}
`;
