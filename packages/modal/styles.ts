import { css } from "lit";

export const styles = css`
	:host {
		--_backdrop-bg: var(
			--w-c-modal-backdrop-color,
			light-dark(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.75))
		);
		--_background-color: var(--w-c-modal-bg, var(--w-s-color-background));
		--_box-shadow: var(--w-c-modal-box-shadow, var(--w-shadow-l));
		--_color: var(--w-c-modal-color, var(--w-s-color-text));
		--_height: var(
			--w-c-modal-height,
			var(--w-modal-height) /* --w-modal-height kept for backwards compat */
		);
		--_max-height: var(
			--w-c-modal-max-height,
			var(--w-modal-max-height, 80%)
				/* --w-modal-max-height kept for backwards compat */
		);
		--_min-height: var(
			--w-c-modal-min-height,
			var(--w-modal-min-heigh)
				/* --w-modal-min-height kept for backwards compat */
		);
		--_padding-bottom: var(
			--w-c-modal-padding-bottom,
			calc(32px + env(safe-area-inset-bottom, 0px))
		);
		--_translate-distance: var(
			--w-c-modal-translate-distance,
			var(--w-modal-translate-distance, 100%)
				/* --w-modal-translate-distance kept for backwards compat */
		);
		--_width: var(
			--w-c-modal-width,
			var(--w-modal-width, 640px)
				/* --w-modal-width kept for backwards compat */
		);
	}

	[part="dialog"] {
		background-color: transparent;
		border-width: 0;
		align-items: flex-end;
		inset: 0rem;
		height: unset;
		max-height: unset;
		max-width: unset;
		width: unset;
		margin: auto;
		padding: 0rem;
		backface-visibility: hidden;
	}

	[part="dialog"]::backdrop {
		background: var(--_backdrop-bg);
	}

	[part="wrapper"] {
		will-change: height;
		border-radius: 8px;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		position: relative;
		background-color: var(--_background-color);
		color: var(--_color);
		box-shadow: var(--_box-shadow);
		height: var(--_height);
		max-height: var(--_max-height);
		min-height: var(--_min-height);
		width: var(--_width);
		backface-visibility: hidden;
		padding-bottom: var(--_padding-bottom);
		transition-property: all;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 150ms;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	}

	[part="content"] {
		display: block;
		flex-shrink: 1;
		flex-grow: 1;
		overflow-x: hidden;
		overflow-y: auto;
		position: relative;
		margin-bottom: 0rem;
		padding-left: 1.6rem;
		padding-right: 1.6rem;
	}

	@media (min-width: 480px) {
		[part="dialog"] {
			--w-c-modal-translate-distance: 50%;
			place-content: center;
			place-items: center;
		}
		[part="wrapper"] {
			margin-left: 1.6rem;
			margin-right: 1.6rem;
			padding-bottom: 3.2rem;
		}
		[part="content"] {
			padding-left: 3.2rem;
			padding-right: 3.2rem;
		}
	}

	@media (max-width: 479.9px) {
		[part="wrapper"] {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
		}
	}

	[part="dialog"][open] {
		animation: w-modal-in 0.3s ease-in-out forwards;
		display: flex;
		position: fixed;
	}

	[part="dialog"].close {
		animation: w-modal-out 0.3s ease-in-out forwards;
	}

	[part="dialog"][open]::backdrop {
		animation: backdrop-in 0.3s ease-in-out forwards;
	}

	[part="dialog"].close::backdrop {
		animation: backdrop-out 0.3s ease-in-out forwards;
	}

	/* shouldn't need two (in/out) animations declared here, but reversing is being weird */
	@keyframes w-modal-in {
		from {
			transform: translateY(var(--_translate-distance));
			opacity: 0;
		}
		to {
			transform: translateY(0);
			opacity: 1;
		}
	}

	@keyframes w-modal-out {
		from {
			transform: translateY(0);
			opacity: 1;
		}
		to {
			transform: translateY(var(--_translate-distance));
			opacity: 0;
		}
	}

	@keyframes backdrop-in {
		from {
			background: transparent;
		}
		to {
			background: var(--_backdrop-bg);
		}
	}

	@keyframes backdrop-out {
		from {
			background: var(--_backdrop-bg);
		}
		to {
			background: transparent;
		}
	}
`;
