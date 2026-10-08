import { css } from "lit";

export const styles = css`
	:host {
		display: block;
	}

	[part~="base"] {
		align-items: center;
		display: flex;
		justify-content: center;
		padding: 0.8rem;
	}

	.sr-only {
		clip: rect(0, 0, 0, 0);
		border-width: 0;
		height: 1px;
		margin: -1px;
		overflow: hidden;
		padding: 0;
		position: absolute;
		white-space: nowrap;
		width: 1px;
	}

	[part~="list"] {
		align-items: center;
		display: flex;
	}

	[part~="control"],
	[part~="page"] {
		align-items: center;
		border-width: 0;
		border-radius: 9999px;
		display: inline-flex;
		justify-content: center;
		min-height: 44px;
		min-width: 44px;
		padding: 0.4rem;
		transition-duration: 0.15s;
		transition-property:
			color, background-color, border-color, text-decoration-color, fill, stroke;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	}

	[part~="control"]:hover,
	[part~="control"]:focus,
	[part~="page"]:hover,
	[part~="page"]:focus {
		text-decoration: none;
	}

	[part~="control"]:focus,
	[part~="control"]:focus-visible,
	[part~="page"]:focus,
	[part~="page"]:focus-visible {
		outline: 2px solid var(--w-s-color-border-focus);
		outline-offset: var(--w-outline-offset, 1px);
	}

	[part~="control"]:not(:focus-visible),
	[part~="page"]:not(:focus-visible) {
		outline: none;
	}

	[part~="control"] {
		color: var(--w-s-color-icon);
	}

	[part~="control"]:hover {
		background-clip: padding-box;
		background-color: var(--w-color-button-pill-background-hover);
	}

	[part~="control"]:active {
		background-color: var(--w-color-button-pill-background-active);
	}

	[part~="page"] {
		color: var(--w-s-color-text-link);
		display: none;
		font-weight: 700;
	}

	[part~="page"]:not([part~="current"]):hover {
		background-clip: padding-box;
		background-color: var(--w-color-button-pill-background-hover);
	}

	[part~="page"]:not([part~="current"]):active {
		background-color: var(--w-color-button-pill-background-active);
	}

	[part~="current"] {
		background-color: var(--w-s-color-background-primary);
		color: var(--w-s-color-text-inverted);
	}

	[part~="placeholder"] {
		display: inline-flex;
		min-height: 44px;
		min-width: 44px;
		padding: 0.4rem;
	}

	[part~="mobile-label"] {
		display: block;
		font-weight: 700;
		padding: 0.8rem;
	}

	[part~="icon"] {
		align-items: center;
		display: flex;
		height: 16px;
		pointer-events: none;
	}

	@media (min-width: 768px) {
		[part~="page"] {
			display: inline-flex;
		}

		[part~="mobile-label"] {
			display: none;
		}
	}
`;
