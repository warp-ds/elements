import { css } from "lit";

export const buttonGroupComponentVariables = css`
	:host {
		--_button-group-background: var(
			--w-c-button-group-bg,
			var(--w-s-color-background)
		);
		--_button-group-background-hover: var(
			--w-c-button-group-bg-hover,
			var(--w-s-color-background-hover)
		);
		--_button-group-background-selected: var(
			--w-c-button-group-bg-selected,
			var(--w-s-color-background-primary)
		);
		--_button-group-border-color: var(
			--w-c-button-group-color-border,
			var(--w-s-color-border)
		);
		--_button-group-border-color-hover: var(
			--w-c-button-group-color-border-hover,
			var(--w-s-color-border-hover)
		);
		--_button-group-border-color-selected: var(
			--w-c-button-group-color-border-selected,
			var(--w-s-color-border-selected)
		);
		--_button-group-border-width: var(--w-c-button-group-border-width, 1px);
		--_button-group-color-text: var(
			--w-c-button-group-color-text,
			var(--w-s-color-text-link)
		);
		--_button-group-color-text-selected: var(
			--w-c-button-group-color-text-selected,
			var(--w-s-color-text-inverted)
		);
		--_button-group-font-size: var(
			--w-c-button-group-font-size,
			var(--w-font-size-m)
		);
		--_button-group-font-weight: var(
			--w-c-button-group-font-weight,
			var(--w-c-button-font-weight, 700)
		);
		--_button-group-line-height: var(
			--w-c-button-group-line-height,
			var(--w-line-height-m)
		);
		--_button-group-height: var(--w-c-button-group-height, 32px);
		--_button-group-padding: var(--w-c-button-group-padding, 0 12px);
		--_button-group-transition: var(
			--w-c-button-group-transition,
			color 150ms cubic-bezier(0.4, 0, 0.2, 1),
			background-color 150ms cubic-bezier(0.4, 0, 0.2, 1),
			border-color 150ms cubic-bezier(0.4, 0, 0.2, 1)
		);
	}
`;

export const styles = css`
	:host {
	}
`;
