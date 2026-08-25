import { css } from "lit";

export const styles = css`
	:host {
		--_background-color: var(
			--w-c-card-bg,
			var(--w-s-color-surface-elevated-200)
		);
		--_background-color-active: var(
			--w-c-card-bg-active,
			var(--w-s-color-surface-elevated-200-active)
		);
		--_background-color-hover: var(
			--w-c-card-bg-hover,
			var(--w-s-color-surface-elevated-200-hover)
		);
		--_border-color: var(--w-c-card-border-color, var(--w-transparent));
		--_border-color-active: var(
			--w-c-card-border-color-active,
			var(--w-transparent)
		);
		--_border-color-hover: var(
			--w-c-card-border-color-hover,
			var(--w-transparent)
		);
		--_border-radius: var(--w-c-card-border-radius, 8px);
		--_border-width: var(--w-c-card-border-width, 2px);
		--_box-shadow: var(--w-c-card-box-shadow, var(--w-shadow-s));
		--_box-shadow-active: var(--w-c-card-box-shadow-active, var(--w-none));
		--_box-shadow-hover: var(--w-c-card-box-shadow-hover, var(--w-shadow-m));
	}

	:host([flat]) {
		--_border-color: var(--w-c-card-border-color, var(--w-s-color-border));
		--_border-color-active: var(
			--w-c-card-border-color-active,
			var(--w-s-color-border-active)
		);
		--_border-color-hover: var(
			--w-c-card-border-color-hover,
			var(--w-s-color-border-hover)
		);
		--_border-width: var(--w-c-card-border-width, 2px);
		--_border-radius: var(--w-c-card-border-radius, 4px);
		--_box-shadow: var(--w-none);
		--_box-shadow-active: var(--w-none);
		--_box-shadow-hover: var(--w-none);
	}

	:host([selected]) {
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

	:host([selected]:not([flat])) {
		--_background-color: var(
			--w-c-card-bg,
			var(--w-s-color-surface-elevated-200)
		);
		--_background-color-active: var(
			--w-c-card-bg-active,
			var(--w-s-color-surface-elevated-200-active)
		);
		--_background-color-hover: var(
			--w-c-card-bg-hover,
			var(--w-s-color-surface-elevated-200-hover)
		);
	}

	:host([selected][flat]) {
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
	}

	[part="base"] {
		background-color: var(--_background-color);
		border-radius: var(--_border-radius);
		box-shadow: var(--_box-shadow);
		display: block;
		overflow: hidden;
		position: relative;
	}

	:host([clickable]) [part="base"] {
		cursor: pointer;
		transition-property: all;
		transition-duration: 0.15s;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	}

	:host([clickable]) [part="base"]:hover {
		background-color: var(--_background-color-hover);
		box-shadow: var(--_box-shadow-hover);
	}

	:host([clickable]) [part="base"]:active {
		background-color: var(--_background-color-active);
		box-shadow: var(--_box-shadow-active);
	}

	[part="border"] {
		border-radius: var(--_border-radius);
		border-color: var(--_border-color);
		border-width: var(--_border-width);
		pointer-events: none;
		position: absolute;
		inset: 0px;
		transition-property: all;
		transition-duration: 0.15s;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	}

	:host([clickable][selected]:not([flat])) [part="base"]:hover [part="border"] {
		border-color: var(--_border-color-hover);
	}

	:host([clickable]) [part="base"]:active [part="border"] {
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
