import { css } from "lit";

export const styles = css`
	:host {
		--_font-size: var(--w-c-modal-header-font-size, var(--w-font-size-l));
		--_line-height: var(--w-c-modal-header-line-height, var(--w-line-height-l));
		--_title-margin: 0 0 6px 0;
		--_title-padding: 22px 0 0 16px;
		--_close-button-top: 14px;
		--_close-button-right: 0px;
		--_header-margin-bottom: var(--w-c-modal-header-margin-bottom, 8px);
	}

	@media (min-width: 480px) {
		:host {
			--_title-padding: 22px 0 0 32px;
			--_close-button-right: 14px;
		}
	}

	[part="header"] {
		display: grid;
		grid-template:
			"top top top"
			"title title title";
		margin-bottom: var(--_header-margin-bottom);
	}

	[part="header"][show-back]:not([show-close]) {
		grid-template:
			"top top top"
			"back title title";
	}

	[part="header"][show-close]:not([show-back]) {
		grid-template:
			"top top top"
			"title title close";
	}

	[part="header"][show-back][show-close] {
		grid-template:
			"top top top"
			"back title close" / 44px 1fr 44px;
	}

	[part="top"]::slotted(*) {
		grid-area: top;
	}

	[part="title"] {
		grid-area: title;

		margin: var(--_title-margin);
		padding: var(--_title-padding);

		/* t3 */
		font-weight: 700;
		font-size: var(--_font-size);
		line-height: var(--_line-height);
	}

	[part="header"][show-back] [part="title"] {
		text-align: center;
	}

	[part="back"] {
		grid-area: back;

		margin-block-end: -2px; /* align the touch target with the close button which is _slightly_ lower than the title */
		padding-block-start: 14px; /* same vertical position as the close button */
		padding-inline-start: 18px; /* 32px (left padding of title) - 14px (left padding of button) so icon aligns with text */
	}

	[part="header"][show-back] [part="title"] {
		padding-inline-start: 0;
	}

	[part="close"] {
		grid-area: close;

		position: absolute; /* so we can place it on top of the [part="top"] image */
		top: var(--_close-button-top);
		right: var(--_close-button-right);
	}

	[part="header"][show-top] [part="close"] {
		/* Invert the button colors on images */
		--w-c-button-color: var(--w-s-color-icon-inverted-static);
		--w-c-button-color-hover: var(--w-s-color-icon-inverted-static);
		--w-c-button-color-active: var(--w-s-color-icon-inverted-static);

		--w-c-button-bg: rgba(var(--w-rgb-black), 0.7);
		--w-c-button-bg-hover: rgba(var(--w-rgb-black), 0.85);
		--w-c-button-bg-active: rgba(var(--w-rgb-black), 1);
	}
`;
