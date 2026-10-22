import { css } from "lit";

export const styles = css`
	:host {
		display: block;

		--_gap: var(--w-c-pagination-gap, 0);
		--_base-padding: var(--w-c-pagination-base-padding, 0.8rem);
		--_item-padding: var(--w-c-pagination-padding, 0.4rem);
		--_placeholder-padding: var(
			--w-c-pagination-placeholder-padding,
			var(--_item-padding)
		);
		--_control-padding: var(
			--w-c-pagination-control-padding,
			var(--_item-padding)
		);
		--_current-page-padding: var(
			--w-c-pagination-current-page-padding,
			var(--_item-padding)
		);
		--_mobile-label-padding: var(--w-c-pagination-mobile-label-padding, 0.8rem);
		--_item-border-width: var(--w-c-pagination-border-width, 0);
		--_item-border-radius: var(--w-c-pagination-border-radius, 9999px);
		--_item-focus-outline: var(
			--w-c-pagination-focus-outline,
			2px solid var(--w-s-color-border-focus)
		);
		--_item-focus-outline-offset: var(
			--w-c-pagination-focus-outline-offset,
			1px
		);
		--_font-size: var(--w-c-pagination-font-size, inherit);
		--_mobile-label-font-size: var(
			--w-c-pagination-mobile-label-font-size,
			var(--_font-size)
		);
		--_font-weight: var(--w-c-pagination-font-weight, 700);
		--_mobile-label-font-weight: var(
			--w-c-pagination-mobile-label-font-weight,
			var(--_font-weight)
		);
		--_line-height: var(--w-c-pagination-line-height, inherit);
		--_mobile-label-line-height: var(
			--w-c-pagination-mobile-label-line-height,
			var(--_line-height)
		);
		--_item-color-text: var(
			--w-c-pagination-color-text,
			var(--w-s-color-text-link)
		);
		--_item-color-text-hover: var(
			--w-c-pagination-color-text-hover,
			var(--_item-color-text)
		);
		--_item-color-text-active: var(
			--w-c-pagination-color-text-active,
			var(--_item-color-text)
		);
		--_item-color-text-selected: var(
			--w-c-pagination-color-text-selected,
			var(--_item-color-text)
		);
		--_current-page-text-color: var(
			--w-c-pagination-current-page-text-color,
			var(--w-s-color-text-inverted)
		);
		--_current-page-text-color-hover: var(
			--w-c-pagination-current-page-text-color-hover,
			var(--_current-page-text-color)
		);
		--_current-page-text-color-active: var(
			--w-c-pagination-current-page-text-color-active,
			var(--_current-page-text-color)
		);
		--_current-page-text-color-selected: var(
			--w-c-pagination-current-page-text-color-selected,
			var(--_current-page-text-color)
		);
		--_controls-text-color: var(
			--w-c-pagination-controls-text-color,
			var(--w-s-color-icon)
		);
		--_controls-text-color-hover: var(
			--w-c-pagination-controls-text-color-hover,
			var(--_controls-text-color)
		);
		--_controls-text-color-active: var(
			--w-c-pagination-controls-text-color-active,
			var(--_controls-text-color)
		);
		--_controls-text-color-selected: var(
			--w-c-pagination-controls-text-color-selected,
			var(--_controls-text-color)
		);
		--_item-color-background: var(
			--w-c-pagination-color-background,
			transparent
		);
		--_item-color-background-hover: var(
			--w-c-pagination-color-background-hover,
			var(--w-color-button-pill-background-hover)
		);
		--_item-color-background-active: var(
			--w-c-pagination-color-background-active,
			var(--w-color-button-pill-background-active)
		);
		--_item-color-background-selected: var(
			--w-c-pagination-color-background-selected,
			var(--_item-color-background)
		);
		--_current-page-color-background: var(
			--w-c-pagination-current-page-color-background,
			var(--w-s-color-background-primary)
		);
		--_current-page-color-background-hover: var(
			--w-c-pagination-current-page-color-background-hover,
			var(--_current-page-color-background)
		);
		--_current-page-color-background-active: var(
			--w-c-pagination-current-page-color-background-active,
			var(--_current-page-color-background)
		);
		--_current-page-color-background-selected: var(
			--w-c-pagination-current-page-color-background-selected,
			var(--_current-page-color-background)
		);
		--_controls-color-background: var(
			--w-c-pagination-controls-color-background,
			transparent
		);
		--_controls-color-background-hover: var(
			--w-c-pagination-controls-color-background-hover,
			var(--w-color-button-pill-background-hover)
		);
		--_controls-color-background-active: var(
			--w-c-pagination-controls-color-background-active,
			var(--w-color-button-pill-background-active)
		);
		--_controls-color-background-selected: var(
			--w-c-pagination-controls-color-background-selected,
			var(--_controls-color-background)
		);
		--_item-transition-duration: var(
			--w-c-pagination-transition-duration,
			0.15s
		);
		--_item-transition-property: var(
			--w-c-pagination-transition-property,
			color,
			background-color,
			border-color,
			text-decoration-color,
			fill,
			stroke
		);
		--_item-transition-timing-function: var(
			--w-c-pagination-transition-timing-function,
			cubic-bezier(0.4, 0, 0.2, 1)
		);
	}

	[part="base"] {
		align-items: center;
		display: flex;
		gap: var(--_gap);
		justify-content: center;
		padding: var(--_base-padding);
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
		padding: var(--_item-padding);
	}

	[part="placeholder"] {
		padding: var(--_placeholder-padding);
	}

	[part="control"],
	[part="page"],
	[part="page current"] {
		align-items: center;
		background-color: var(--_item-color-background);
		border-width: var(--_item-border-width);
		border-radius: var(--_item-border-radius);
		font-size: var(--_font-size);
		font-weight: var(--_font-weight);
		justify-content: center;
		line-height: var(--_line-height);
		transition-duration: var(--_item-transition-duration);
		transition-property: var(--_item-transition-property);
		transition-timing-function: var(--_item-transition-timing-function);
	}

	[part="control"] {
		background-color: var(--_controls-color-background);
		color: var(--_controls-text-color);
		padding: var(--_control-padding);
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
		outline: var(--_item-focus-outline);
		outline-offset: var(--_item-focus-outline-offset);
	}

	:is([part="control"], [part="page"], [part="page current"]):not(
		:focus-visible
	) {
		outline: none;
	}

	[part="control"]:hover {
		background-clip: padding-box;
		background-color: var(--_controls-color-background-hover);
		color: var(--_controls-text-color-hover);
	}

	[part="control"]:active {
		background-color: var(--_controls-color-background-active);
		color: var(--_controls-text-color-active);
	}

	[part="control"][aria-current="page"] {
		background-color: var(--_controls-color-background-selected);
		color: var(--_controls-text-color-selected);
	}

	[part="page"],
	[part="page current"] {
		color: var(--_item-color-text);
		display: none;
	}

	[part="page"]:hover {
		background-clip: padding-box;
		background-color: var(--_item-color-background-hover);
		color: var(--_item-color-text-hover);
	}

	[part="page"]:active {
		background-color: var(--_item-color-background-active);
		color: var(--_item-color-text-active);
	}

	[part="page"][aria-current="page"] {
		background-color: var(--_item-color-background-selected);
		color: var(--_item-color-text-selected);
	}

	[part="page current"] {
		background-color: var(--_current-page-color-background-selected);
		color: var(--_current-page-text-color-selected);
		padding: var(--_current-page-padding);
	}

	[part="page current"]:hover {
		background-color: var(--_current-page-color-background-hover);
		color: var(--_current-page-text-color-hover);
	}

	[part="page current"]:active {
		background-color: var(--_current-page-color-background-active);
		color: var(--_current-page-text-color-active);
	}

	[part="mobile-label"] {
		display: block;
		font-size: var(--_mobile-label-font-size);
		font-weight: var(--_mobile-label-font-weight);
		line-height: var(--_mobile-label-line-height);
		padding: var(--_mobile-label-padding);
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
