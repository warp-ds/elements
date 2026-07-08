import { css } from "lit";

export const styles = css`
	:host {
		--_background-color: var(
			--w-c-tooltip-bg,
			var(--w-color-tooltip-background-static)
		);
		--_box-shadow: var(--w-c-tooltip-box-shadow, var(--w-shadow-m));
		--_color: var(--w-c-tooltip-color, var(--w-s-color-text-inverted-static));
		--_z-index: var(--w-c-tooltip-z-index, 30);
	}

	[part="tooltip"] {
		box-shadow: var(--_box-shadow);
		width: max-content;
		position: absolute;
		top: 0;
		left: 0;
		background: var(--_background-color);
		color: var(--_color);
		padding: 6px 8px;
		border-radius: 4px;
		font-size: var(--w-font-size-s);
		font-weight: 400;
		line-height: var(--w-line-height-s);
		z-index: var(--_z-index);
	}

	[part="arrow"] {
		position: absolute;
		width: 23px; /* square box for floating-ui arrow plugin, width of the "beak" */
		height: 23px;
		z-index: -1; /* within part="tooltip"'s stacking context */
	}

	[part="beak"] {
		position: absolute;
		background: var(--_background-color);
	}

	[part="hover-bridge"] {
		position: fixed;
		z-index: calc(var(--_z-index) + 1);
		inset: 0px;
		clip-path: polygon(
			var(--_hover-bridge-top-left-x, 0) var(--_hover-bridge-top-left-y, 0),
			var(--_hover-bridge-top-right-x, 0) var(--_hover-bridge-top-right-y, 0),
			var(--_hover-bridge-bottom-right-x, 0)
				var(--_hover-bridge-bottom-right-y, 0),
			var(--_hover-bridge-bottom-left-x, 0)
				var(--_hover-bridge-bottom-left-y, 0)
		);
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
