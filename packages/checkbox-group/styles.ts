import { css } from "lit";

export const styles = css`
	[part="form-control"] {
		display: inline-flex;
		flex-direction: column;
		gap: 16px;
	}

	[part="form-control-input"] {
		display: grid;
		gap: 16px;
	}

	[part="form-control-label"] {
		display: flex;
		align-items: center;
		gap: 8px;
		font-size: var(--w-font-size-s);
		line-height: var(--w-line-height-s);
		font-weight: 700;
		color: var(--w-s-color-text);
	}

	.optional {
		font-weight: 400;
		color: var(--w-s-color-text-subtle);
	}

	[part="help-text"] {
		display: block;
		font-size: var(--w-font-size-xs);
		line-height: var(--w-line-height-xs);
		color: var(--w-s-color-text-subtle);
	}

	.error {
		color: var(--w-s-color-text-negative);
	}

	[part="tooltip-target"] {
		appearance: none;
		background: transparent;
		border: none;
		height: 16px;
		margin: 0 0 0 4px;
		padding: 0;
		vertical-align: text-top;
	}

	w-tooltip {
		display: inline-block;
	}

	:host([type="button"]) [part="form-control-input"] {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		gap: 0;
	}
`;
