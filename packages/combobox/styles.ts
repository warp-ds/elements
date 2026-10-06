import { css } from "lit";
export const styles = css`
	:host {
		--_option-list-padding-bottom: var(--w-c-combobox-padding-bottom, 0.4rem);
		--_option-list-shadow: var(--w-c-combobox-shadow, var(--w-shadow-m));
		--_option-list-color-background: var(
			--w-c-combobox-color-background,
			var(--w-s-color-background)
		);
		--_option-list-border-radius: var(--w-c-combobox-border-radius, 8px);
		--_option-padding: var(--w-c-combobox-option-padding, 0.8rem);
		--_option-color-background-hover: var(
			--w-c-combobox-option-color-background-hover,
			var(--w-s-color-background-hover)
		);
		--_option-color-background-selected: var(
			--w-c-combobox-option-color-background-selected,
			var(--w-s-color-background-selected)
		);
		--_z-index: var(--w-c-combobox-z-index, 20);
	}
	.sr-only {
		clip: rect(0px, 0px, 0px, 0px);
		white-space: nowrap;
		border-width: 0px;
		width: 1px;
		height: 1px;
		margin: -1px;
		padding: 0px;
		position: absolute;
		overflow: hidden;
	}
	[part="base"] {
		position: relative;
	}
	[part="options-list"][hidden] {
		display: none !important;
	}
	[part="options-list"] {
		box-shadow: var(--_option-list-shadow);
		background-color: var(--_option-list-color-background);
		z-index: var(--_z-index);
		position: absolute;
		right: 0px;
		left: 0px;
		overflow: hidden;
		border-radius: var(--_option-list-border-radius);
		user-select: none;
		padding: 0px;
		margin: 0px;
		list-style-type: none;
		padding-bottom: var(--_option-list-padding-bottom);
	}
	[part="option"] {
		cursor: pointer;
		padding: var(--_option-padding);
		display: block;
	}
	[part="option"]:hover {
		background-color: var(--_option-color-background-hover);
	}
	[part="option"][tabindex="-1"]:focus:not(:focus-visible) {
		outline: none;
	}
	[part="option"][aria-selected="true"] {
		background-color: var(--_option-color-background-selected);
	}
	.font-bold {
		font-weight: 700;
	}
`;
