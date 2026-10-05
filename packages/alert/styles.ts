import { css } from "lit";
export const styles = css`
	:host {
		--_icon-size: var(--w-c-alert-icon-size, 16px);
		--_icon-color: var(--w-c-alert-color-icon, var(--w-s-color-icon-info));
		--_background-color: var(
			--w-c-alert-color-background,
			var(--w-s-color-background-info-subtle)
		);
		--_border-color: var(
			--w-c-alert-color-border,
			var(--w-s-color-border-info-subtle)
		);
		--_border-left-color: var(
			--w-c-alert-color-border-left,
			var(--w-s-color-border-info)
		);
		--_border-radius: var(--w-c-alert-border-radius, 4px);
		--_border-width: var(--w-c-alert-border-width, 1px);
		--_border-left-width: var(--w-c-alert-border-left-width, 4px);
		--_text-color: var(--w-c-alert-color-text, var(--w-s-color-text));
		--_font-size: var(--w-c-alert-font-size, var(--w-font-size-s));
		--_line-height: var(--w-c-alert-line-height, var(--w-line-height-s));
		--_padding: var(--w-c-alert-padding, 1.6rem);
	}
	:host([variant="positive"]) {
		--_background-color: var(
			--w-c-alert-color-background,
			var(--w-s-color-background-positive-subtle)
		);
		--_border-color: var(
			--w-c-alert-border-color,
			var(--w-s-color-border-positive-subtle)
		);
		--_border-left-color: var(
			--w-c-alert-border-left-color,
			var(--w-s-color-border-positive)
		);
		--_icon-color: var(--w-c-alert-icon-color, var(--w-s-color-icon-positive));
	}
	:host([variant="warning"]) {
		--_background-color: var(
			--w-c-alert-color-background,
			var(--w-s-color-background-warning-subtle)
		);
		--_border-color: var(
			--w-c-alert-color-border,
			var(--w-s-color-border-warning-subtle)
		);
		--_border-left-color: var(
			--w-c-alert-color-border-left,
			var(--w-s-color-border-warning)
		);
		--_icon-color: var(--w-c-alert-color-icon, var(--w-s-color-icon-warning));
	}
	:host([variant="negative"]) {
		--_background-color: var(
			--w-c-alert-color-background,
			var(--w-s-color-background-negative-subtle)
		);
		--_border-color: var(
			--w-c-alert-color-border,
			var(--w-s-color-border-negative-subtle)
		);
		--_border-left-color: var(
			--w-c-alert-color-border-left,
			var(--w-s-color-border-negative)
		);
		--_icon-color: var(--w-c-alert-color-icon, var(--w-s-color-icon-negative));
	}
	[part="base"] {
		padding: var(--_padding);
		border-color: var(--_border-color);
		border-left-color: var(--_border-left-color);
		color: var(--_text-color);
		background-color: var(--_background-color);
		display: flex;
		border-radius: var(--_border-radius);
		border-width: var(--_border-width);
		border-left-width: var(--_border-left-width);
	}
	[part="icon"] {
		margin-right: 0.8rem;
		width: 1.6rem;
		min-width: 1.6rem;
		color: var(--_icon-color);
	}
	w-icon {
		height: var(--_icon-size);
		width: var(--_icon-size);
		display: flex;
	}
	[part="content"] {
		font-size: var(--_font-size);
		line-height: var(--_line-height);
	}
`;
