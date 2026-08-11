import { css } from "lit";

export const styles = css`
	:host {
		--_background-color: var(
			--w-c-badge-bg,
			var(--w-color-badge-neutral-background)
		);
		--_color: var(--w-c-badge-color, var(--w-s-color-text));
		--_border-radius: var(--w-c-badge-border-radius, 4px);
		--_border-width: var(--w-c-badge-border-width, 0);
		--_border-color: var(--w-c-badge-border-color, transparent);
		--_font-size: var(--w-c-badge-font-size, var(--w-font-size-xs));
		--_line-height: var(--w-c-badge-line-height, var(--w-line-height-xs));
		--_padding-x: var(--w-c-badge-padding-x, 0.8rem);
		--_padding-y: var(--w-c-badge-padding-y, 0.4rem);
		--_backdrop-filter: var(--w-c-badge-backdrop-filter, none);
	}

	:host([variant="neutral"]) {
		--_background-color: var(
			--w-c-badge-bg,
			var(--w-color-badge-neutral-background)
		);
	}

	:host([variant="info"]) {
		--_background-color: var(
			--w-c-badge-bg,
			var(--w-color-badge-info-background)
		);
	}

	:host([variant="positive"]) {
		--_background-color: var(
			--w-c-badge-bg,
			var(--w-color-badge-positive-background)
		);
	}

	:host([variant="warning"]) {
		--_background-color: var(
			--w-c-badge-bg,
			var(--w-color-badge-warning-background)
		);
	}

	:host([variant="negative"]) {
		--_background-color: var(
			--w-c-badge-bg,
			var(--w-color-badge-negative-background)
		);
	}

	:host([variant="disabled"]) {
		--_background-color: var(
			--w-c-badge-bg,
			var(--w-s-color-background-disabled)
		);
	}

	:host([variant="price"]) {
		--_background-color: var(--w-c-badge-bg, rgba(var(--w-rgb-black), 0.7));
		--_color: var(--w-c-badge-color, var(--w-s-color-text-inverted-static));
	}

	:host([variant="sponsored"]) {
		--_background-color: var(
			--w-c-badge-bg,
			var(--w-color-badge-sponsored-background)
		);
	}

	:host([position]) {
		--_backdrop-filter: var(--w-c-badge-backdrop-filter, blur(4px));
	}

	:host([position="top-left"]) {
		inset: 0 auto auto 0;
	}

	:host([position="top-right"]) {
		inset: 0 0 auto auto;
	}

	:host([position="bottom-right"]) {
		inset: auto 0 0 auto;
	}

	:host([position="bottom-left"]) {
		inset: auto auto 0 0;
	}

	[part="base"] {
		background-color: var(--_background-color);
		border: var(--_border-width) solid var(--_border-color);
		border-radius: var(--_border-radius);
		color: var(--_color);
		display: inline-flex;
		font-size: var(--_font-size);
		line-height: var(--_line-height);
		padding: var(--_padding-y) var(--_padding-x);
	}

	:host([position]) [part="base"] {
		-webkit-backdrop-filter: var(--_backdrop-filter);
		backdrop-filter: var(--_backdrop-filter);
	}

	:host([position]) {
		position: absolute;
	}

	:host([position="top-left"]) [part="base"] {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
		border-bottom-left-radius: 0;
	}

	:host([position="top-right"]) [part="base"] {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
	}

	:host([position="bottom-right"]) [part="base"] {
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
		border-bottom-left-radius: 0;
	}

	:host([position="bottom-left"]) [part="base"] {
		border-top-left-radius: 0;
		border-bottom-right-radius: 0;
		border-bottom-left-radius: 0;
	}
`;
