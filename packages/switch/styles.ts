import { css } from "lit";

export const styles = css`
	:host {
		--_border-width: var(--w-c-switch-border-width, 1px);
		--_border-radius: var(--w-c-switch-border-radius, 9999px);
		--_handle-border-radius: var(--w-c-switch-border-radius-handle, 9999px);

		--_background-color: var(
			--w-c-switch-color-background,
			var(--w-s-color-background)
		);
		--_background-color-hover: var(
			--w-c-switch-color-background-hover,
			var(--w-s-color-background-hover)
		);
		--_background-color-active: var(
			--w-c-switch-color-background-active,
			var(--w-s-color-background-primary)
		);
		--_background-color-active-hover: var(
			--w-c-switch-color-background-active-hover,
			var(--w-s-color-background-primary-hover)
		);
		--_background-color-disabled: var(
			--w-c-switch-color-background-disabled,
			var(--w-s-color-background-disabled-subtle)
		);
		--_background-color-active-disabled: var(
			--w-c-switch-color-background-active-disabled,
			var(--w-s-color-background-disabled)
		);

		--_border-color: var(
			--w-c-switch-color-border,
			var(--w-s-color-border-strong)
		);
		--_border-color-hover: var(
			--w-c-switch-color-border-hover,
			var(--w-s-color-border-strong-hover)
		);
		--_border-color-active: var(
			--w-c-switch-color-border-active,
			var(--w-s-color-background-primary)
		);
		--_border-color-active-hover: var(
			--w-c-switch-color-border-active-hover,
			var(--w-s-color-background-primary-hover)
		);
		--_border-color-disabled: var(
			--w-c-switch-color-border-disabled,
			var(--w-s-color-border-disabled)
		);
		--_border-color-active-disabled: var(
			--w-c-switch-color-border-active-disabled,
			var(--w-s-color-background-disabled)
		);

		--_handle-color: var(
			--w-c-switch-color-handle,
			var(--w-s-color-border-strong)
		);
		--_handle-color-hover: var(
			--w-c-switch-color-handle-hover,
			var(--w-s-color-border-strong-hover)
		);
		--_handle-color-active: var(
			--w-c-switch-color-handle-active,
			var(--w-s-color-background)
		);
		--_handle-color-active-hover: var(
			--w-c-switch-color-handle-active-hover,
			var(--w-s-color-background-hover)
		);
		--_handle-color-disabled: var(
			--w-c-switch-color-handle-disabled,
			var(--w-s-color-background-disabled)
		);
		--_handle-color-active-disabled: var(
			--w-c-switch-color-handle-active-disabled,
			var(--w-s-color-background-disabled-subtle)
		);

		--_height: var(--w-c-switch-height, 2.4rem);
		--_width: var(--w-c-switch-width, 4.4rem);
		--_handle-height: var(--w-c-switch-height-handle, 1.6rem);
		--_handle-width: var(--w-c-switch-width-handle, 1.6rem);
		--_handle-gap: var(--w-c-switch-gap-handle, 0.4rem);

		--_transition: var(
			--w-c-switch-transition,
			background-color 150ms cubic-bezier(0.4, 0, 0.2, 1),
			border-color 150ms cubic-bezier(0.4, 0, 0.2, 1),
			transform 150ms cubic-bezier(0.4, 0, 0.2, 1)
		);

		border-radius: var(--_border-radius); /* for outline */
		display: inline-block;
	}

	:host(:focus) {
		outline: none;
	}

	:host(:focus-visible) {
		outline: 2px solid var(--w-s-color-border-focus);
		outline-offset: var(--w-outline-offset, 1px);
	}

	:host(:hover) {
		--_background-color: var(--_background-color-hover);
		--_border-color: var(--_border-color-hover);
		--_handle-color: var(--_handle-color-hover);
	}

	:host([checked]) {
		--_background-color: var(--_background-color-active);
		--_border-color: var(--_border-color-active);
		--_handle-color: var(--_handle-color-active);
	}

	:host([checked]:hover) {
		--_background-color: var(--_background-color-active-hover);
		--_border-color: var(--_border-color-active-hover);
		--_handle-color: var(--_handle-color-active-hover);
	}

	:host([checked]) [part="handle"] {
		transform: translateX(
			calc(var(--_width) - var(--_handle-width) - calc(var(--_handle-gap) * 2))
		);
	}

	:host([disabled]) {
		pointer-events: none;
		--_background-color: var(--_background-color-disabled);
		--_border-color: var(--_border-color-disabled);
		--_handle-color: var(--_handle-color-disabled);
	}

	:host([checked][disabled]) {
		--_background-color: var(--_background-color-active-disabled);
		--_border-color: var(--_border-color-active-disabled);
		--_handle-color: var(--_handle-color-active-disabled);
	}

	[part="base"] {
		background-color: var(--_background-color);
		border-radius: var(--_border-radius);
		cursor: pointer;
		display: block;
		height: var(--_height);
		position: relative;
		width: var(--_width);
		transition: var(--_transition);
	}

	[part="track"] {
		border-radius: var(--_border-radius);
		border-color: var(--_border-color);
		border-width: var(--_border-width);
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		transition: var(--_transition);
	}

	[part="handle"] {
		background-color: var(--_background-color);
		background-color: var(--_handle-color);
		border-radius: var(--_handle-border-radius);
		height: var(--_handle-height);
		left: var(--_handle-gap);
		position: absolute;
		top: var(--_handle-gap);
		transition: var(--_transition);
		width: var(--_handle-width);
	}
`;
