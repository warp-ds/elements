import { css } from "lit";

export const styles = css`
	:host {
		display: block;
	}

	[part="base"] {
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

	[part="control"],
	[part="page"],
	[part="page current"],
	[part="placeholder"] {
		display: inline-flex;
		min-height: 44px;
		min-width: 44px;
		padding: 0.4rem;
	}

	[part="control"],
	[part="page"],
	[part="page current"] {
		align-items: center;
		border-width: 0;
		border-radius: 9999px;
		justify-content: center;
		transition-duration: 0.15s;
		transition-property:
			color, background-color, border-color, text-decoration-color, fill, stroke;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	}

	:is([part="control"], [part="page"], [part="page current"]):is(
		:hover,
		:focus
	) {
		text-decoration: none;
	}

	:is([part="control"], [part="page"], [part="page current"]):is(
		:focus,
		:focus-visible
	) {
		outline: 2px solid var(--w-s-color-border-focus);
		outline-offset: var(--w-outline-offset, 1px);
	}

	:is([part="control"], [part="page"], [part="page current"]):not(
		:focus-visible
	) {
		outline: none;
	}

	[part="control"] {
		color: var(--w-s-color-icon);
	}

	:is([part="control"], [part="page"]):hover {
		background-clip: padding-box;
		background-color: var(--w-color-button-pill-background-hover);
	}

	:is([part="control"], [part="page"]):active {
		background-color: var(--w-color-button-pill-background-active);
	}

	[part="page"],
	[part="page current"] {
		color: var(--w-s-color-text-link);
		display: none;
		font-weight: 700;
	}

	[part="page current"] {
		background-color: var(--w-s-color-background-primary);
		color: var(--w-s-color-text-inverted);
	}

	[part="mobile-label"] {
		display: block;
		font-weight: 700;
		padding: 0.8rem;
	}

	[part="icon"] {
		align-items: center;
		display: flex;
		height: 16px;
		pointer-events: none;
	}

	@media (min-width: 768px) {
		[part="page"],
		[part="page current"] {
			display: inline-flex;
		}

		[part="mobile-label"] {
			display: none;
		}
	}
`;
