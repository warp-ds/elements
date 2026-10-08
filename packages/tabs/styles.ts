import { css } from "lit";

export const styles = css`
	:host {
		--_tabs-border-width: var(--w-c-tabs-border-width, 1px);
		--_tabs-border-color: var(--w-c-tabs-border-color, var(--w-s-color-border));
		--_tabs-selection-width: var(--w-c-tabs-selection-width, 4px);
		--_tabs-selection-color: var(
			--w-c-tabs-selection-color,
			var(--w-s-color-border-selected)
		);
	}

	[part="base"] {
		border-bottom-width: var(--_tabs-border-width);
		border-color: var(--_tabs-border-color);
		margin-bottom: 3.2rem;
	}

	[part="tablist"] {
		display: inline-grid;
		margin-bottom: -0.1rem;
		position: relative;
	}

	[part="selection"] {
		border-bottom-width: var(--_tabs-selection-width);
		border-color: var(--_tabs-selection-color);
		bottom: 0px;
		position: absolute;
		transition-duration: 0.15s;
		transition-property: left, width;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	}

	.grid-cols-1 {
		grid-template-columns: repeat(1, minmax(0, 1fr));
	}

	.grid-cols-2 {
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}

	.grid-cols-3 {
		grid-template-columns: repeat(3, minmax(0, 1fr));
	}

	.grid-cols-4 {
		grid-template-columns: repeat(4, minmax(0, 1fr));
	}

	.grid-cols-5 {
		grid-template-columns: repeat(5, minmax(0, 1fr));
	}

	.grid-cols-6 {
		grid-template-columns: repeat(6, minmax(0, 1fr));
	}

	.grid-cols-7 {
		grid-template-columns: repeat(7, minmax(0, 1fr));
	}

	.grid-cols-8 {
		grid-template-columns: repeat(8, minmax(0, 1fr));
	}

	.grid-cols-9 {
		grid-template-columns: repeat(9, minmax(0, 1fr));
	}
`;
