import { css } from "lit";
export const styles = css`
	:host {
		--_line-height: var(--w-c-textarea-line-height, var(--w-line-height-m));
		--_font-size: var(--w-c-textarea-font-size, var(--w-font-size-m));
		--_border-color: var(
			--w-c-textarea-border-color,
			var(--w-s-color-border-strong)
		);
		--_color: var(--w-c-textarea-color, var(--w-s-color-text));
		--_background-color: var(
			--w-c-textarea-bg-color,
			var(--w-s-color-background)
		);
		--_hover-border-color: var(
			--w-c-textarea-border-color-hover,
			var(--w-s-color-border-strong-hover)
		);
		--_active-border-color: var(
			--w-c-textarea-border-color-active,
			var(--w-s-color-border-selected)
		);
		--_outline-offset: var(--w-c-textarea-outline-offset, -2px);
		--_focus-outline: var(
			--w-c-textarea-outline-focus,
			2px solid var(--w-s-color-border-focus)
		);
		--_invalid-border-color: var(
			--w-c-textarea-border-color-invalid,
			var(--w-s-color-border-negative)
		);
		--_invalid-color: var(
			--w-c-textarea-color-invalid,
			var(--w-s-color-text-negative)
		);
		--_invalid-outline: var(
			--w-c-textarea-outline-invalid,
			2px solid var(--w-s-color-border-negative)
		);
		--_invalid-hover-border-color: var(
			--w-c-textarea-border-color-invalid-hover,
			var(--w-s-color-border-negative-hover)
		);
		--_disabled-border-color: var(
			--w-c-textarea-border-color-disabled,
			var(--w-s-color-border-disabled)
		);
		--_disabled-color: var(
			--w-c-textarea-color-disabled,
			var(--w-s-color-text-disabled)
		);
		--_disabled-background-color: var(
			--w-c-textarea-bg-color-disabled,
			var(--w-s-color-background-disabled-subtle)
		);
	}
	[part="input"] {
		outline: none;
		line-height: var(--_line-height);
		font-size: var(--_font-size);
		padding-top: 1.2rem;
		padding-bottom: 1.2rem;
		padding-left: 0.8rem;
		padding-right: 0.8rem;
		margin-bottom: 0px;
		min-height: 4.2rem;
		width: 100%;
		border-color: var(--_border-color);
		color: var(--_color);
		background-color: var(--_background-color);
		display: block;
		caret-color: currentcolor;
		border-radius: 4px;
		border-width: 1px;
		resize: vertical;
		font-family: inherit;
		font-weight: inherit;
		margin: 0;
	}
	[part="input"]:hover {
		border-color: var(--_hover-border-color);
	}
	[part="input"]:focus-visible {
		outline: var(--_focus-outline);
		outline-offset: var(--_outline-offset);
	}
	[part="input"]:focus {
		outline-offset: var(--_outline-offset);
	}
	[part="input"]:active {
		border-color: var(--_active-border-color);
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
`;
