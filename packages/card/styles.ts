import { css } from "lit";

export const styles = css`
	:host {
		--_background-color: var(
			--w-c-card-bg,
			var(--w-s-color-surface-elevated-200)
		);
		--_background-color-active: var(
			--w-c-card-bg-active,
			var(--w-s-color-background-active)
		);
		--_background-color-hover: var(
			--w-c-card-bg-hover,
			var(--w-s-color-background-hover)
		);
		--_border-color: var(--w-c-card-border-color, transparent);
		--_border-color-active: var(
			--w-c-card-border-color-active,
			var(--w-s-color-border-active)
		);
		--_border-color-hover: var(
			--w-c-card-border-color-hover,
			var(--w-s-color-border-hover)
		);
		--_border-radius: var(--w-c-card-border-radius, 8px);
		--_border-width: var(--w-c-card-border-width, 2px);
		--_box-shadow: var(
			--w-c-card-box-shadow,
			var(--w-s-shadow-surface-elevated-200)
		);
		--_box-shadow-active: var(
			--w-c-card-box-shadow-active,
			var(--w-s-shadow-surface-elevated-200-active)
		);
		--_box-shadow-hover: var(
			--w-c-card-box-shadow-hover,
			var(--w-s-shadow-surface-elevated-200-hover)
		);
	}

	:host([flat]) {
		--_border-color: var(--w-c-card-border-color, var(--w-s-color-border));
		--_border-width: var(--w-c-card-border-width, 2px);
		--_border-radius: var(--w-c-card-border-radius, 4px);
		--_box-shadow: none;
		--_box-shadow-active: none;
		--_box-shadow-hover: none;
	}

	:host([selected]) {
		--_background-color: var(
			--w-c-card-bg,
			var(--w-s-color-background-selected)
		);
		--_background-color-active: var(
			--w-c-card-bg-active,
			var(--w-s-color-background-selected-active)
		);
		--_background-color-hover: var(
			--w-c-card-bg-hover,
			var(--w-s-color-background-selected-hover)
		);
		--_border-color: var(
			--w-c-card-border-color,
			var(--w-s-color-border-selected)
		);
		--_border-color-active: var(
			--w-c-card-border-color-active,
			var(--w-s-color-border-selected-active)
		);
		--_border-color-hover: var(
			--w-c-card-border-color-hover,
			var(--w-s-color-border-selected-hover)
		);
		--_border-width: var(--w-c-card-border-width, 2px);
	}

	[part="base"] {
		background-color: var(--_background-color);
		border-radius: var(--_border-radius);
		box-shadow: var(--_box-shadow);
		cursor: pointer;
		display: block;
		overflow: hidden;
		position: relative;
		transition-property: all;
		transition-duration: 0.15s;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	}

	[part="base"]:hover {
		background-color: var(--_background-color-hover);
		box-shadow: var(--_box-shadow-hover);
	}

	[part="base"]:active {
		background-color: var(--_background-color-active);
		box-shadow: var(--_box-shadow-active);
	}

	[part="border"] {
		border-radius: var(--_border-radius);
		border-color: var(--_border-color);
		border-width: var(--_border-width);
		position: absolute;
		inset: 0px;
		transition-property: all;
		transition-duration: 0.15s;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	}

	:host([flat]) [part="base"]:hover [part="border"],
	:host([selected]) [part="base"]:hover [part="border"] {
		border-color: var(--_border-color-hover);
	}

	[part="base"]:active [part="border"] {
		border-color: var(--_border-color-active);
	}

	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border-width: 0;
	}
`;
