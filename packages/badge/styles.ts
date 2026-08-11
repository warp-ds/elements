import { css } from "lit";

export const styles = css`
	:host {
		--_background-color: var(
			--w-c-badge-bg,
			var(--w-color-badge-neutral-background)
		);
		--_color: var(--w-c-badge-color, var(--w-s-color-text));
		--_border-radius: var(--w-c-badge-border-radius, 4px);
		--_font-size: var(--w-c-badge-font-size, var(--w-font-size-xs));
		--_line-height: var(--w-c-badge-line-height, var(--w-line-height-xs));
		--_padding-x: var(--w-c-badge-padding-x, 0.8rem);
		--_padding-y: var(--w-c-badge-padding-y, 0.4rem);
		--_backdrop-filter: var(--w-c-badge-backdrop-filter, none);
	}

	.badge--neutral {
		--_background-color: var(
			--w-c-badge-bg,
			var(--w-color-badge-neutral-background)
		);
	}

	.badge--info {
		--_background-color: var(
			--w-c-badge-bg,
			var(--w-color-badge-info-background)
		);
	}

	.badge--positive {
		--_background-color: var(
			--w-c-badge-bg,
			var(--w-color-badge-positive-background)
		);
	}

	.badge--warning {
		--_background-color: var(
			--w-c-badge-bg,
			var(--w-color-badge-warning-background)
		);
	}

	.badge--negative {
		--_background-color: var(
			--w-c-badge-bg,
			var(--w-color-badge-negative-background)
		);
	}

	.badge--disabled {
		--_background-color: var(
			--w-c-badge-bg,
			var(--w-s-color-background-disabled)
		);
	}

	.badge--price {
		--_background-color: var(
			--w-c-badge-bg,
			rgba(var(--w-rgb-black), 0.7)
		);
		--_color: var(--w-c-badge-color, var(--w-s-color-text-inverted-static));
	}

	.badge--sponsored {
		--_background-color: var(
			--w-c-badge-bg,
			var(--w-color-badge-sponsored-background)
		);
	}

	.badge {
		background-color: var(--_background-color);
		border: 0;
		border-radius: var(--_border-radius);
		color: var(--_color);
		display: inline-flex;
		font-size: var(--_font-size);
		line-height: var(--_line-height);
		padding: var(--_padding-y) var(--_padding-x);
	}

	.badge--positioned {
		--_backdrop-filter: var(--w-c-badge-backdrop-filter, blur(4px));
		-webkit-backdrop-filter: var(--_backdrop-filter);
		backdrop-filter: var(--_backdrop-filter);
		position: absolute;
	}

	.badge--top-left {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
		border-bottom-left-radius: 0;
		top: 0;
		left: 0;
	}

	.badge--top-right {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
		top: 0;
		right: 0;
	}

	.badge--bottom-right {
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
		border-bottom-left-radius: 0;
		bottom: 0;
		right: 0;
	}

	.badge--bottom-left {
		border-top-left-radius: 0;
		border-bottom-right-radius: 0;
		border-bottom-left-radius: 0;
		bottom: 0;
		left: 0;
	}
`;
