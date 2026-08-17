import { css } from "lit";

export const styles = css`
	:host {
		display: block;
		--_background-color: var(--w-c-box-bg, transparent);
		--_border-color: var(--w-c-box-border-color, transparent);
		--_border-radius: var(--w-c-box-border-radius, 8px);
		--_border-width: var(--w-c-box-border-width, 0px);
		--_padding: var(--w-c-box-padding, 1.6rem);
		--_bleed-margin-inline: var(--w-c-box-bleed-margin-inline, 1.6rem);
	}

	:host([info]) {
		--_background-color: var(
			--w-c-box-bg,
			var(--w-s-color-background-info-subtle)
		);
	}

	:host([neutral]) {
		--_background-color: var(--w-c-box-bg, var(--w-s-color-surface-sunken));
	}

	:host([bordered]) {
		--_background-color: var(--w-c-box-bg, var(--w-s-color-background));
		--_border-color: var(--w-c-box-border-color, var(--w-s-color-border));
		--_border-width: var(--w-c-box-border-width, 2px);
	}

	[part="base"] {
		background-color: var(--_background-color);
		border: var(--_border-width) solid var(--_border-color);
		border-radius: var(--_border-radius);
		display: block;
		overflow-wrap: break-word;
		padding: var(--_padding);
		position: relative;
	}

	:host([bleed]) [part="base"] {
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
		margin-left: calc(var(--_bleed-margin-inline) * -1);
		margin-right: calc(var(--_bleed-margin-inline) * -1);
	}

	// Slotted elements remain in lightDOM which allows for control of their style outside of shadowDOM.
	// ::slotted([Simple Selector]) confirms to Specificity rules, but (being simple) does not add weight to lightDOM skin selectors,
	// so never gets higher Specificity. Thus in order to overwrite style linked within shadowDOM, we need to use !important.
	// https://stackoverflow.com/a/61631668
	::slotted(:last-child) {
		margin-bottom: 0px !important;
	}

	@media (min-width: 480px) {
		:host([bleed]) [part="base"] {
			border-radius: var(--_border-radius);
			margin-left: 0;
			margin-right: 0;
		}
	}
`;
