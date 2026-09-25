import { css } from "lit";

export const styles = css`
	:host {
		--_label-font-size: var(
			--w-c-checkbox-label-font-size,
			var(--w-font-size-m)
		);
		--_label-line-height: var(
			--w-c-checkbox-label-line-height,
			var(--w-line-height-m)
		);

		--_control-size: var(--w-c-checkbox-control-size, 2rem);
		--_gap: var(--w-c-checkbox-gap, 8px);
		--_radius: var(--w-c-checkbox-radius, 4px);
		--_border-width: var(--w-c-checkbox-border-width, 1px);

		--_bg-default: var(--w-c-checkbox-bg, var(--w-s-color-background));
		--_border-default: var(
			--w-c-checkbox-border-color,
			var(--w-s-color-border-strong)
		);
		--_border-hover: var(
			--w-c-checkbox-border-color-hover,
			var(--w-s-color-border-strong-hover)
		);
		--_icon-color: var(
			--w-c-checkbox-icon-color,
			var(--w-s-color-icon-inverted)
		);

		--_bg-hover: var(
			--w-c-checkbox-bg-hover,
			var(--w-s-color-background-hover)
		);

		--_bg-checked: var(
			--w-c-checkbox-bg-checked,
			var(--w-s-color-background-primary)
		);
		--_bg-checked-hover: var(
			--w-c-checkbox-bg-checked-hover,
			var(--w-s-color-background-primary-hover)
		);
		--_border-checked: var(
			--w-c-checkbox-border-color-checked,
			var(--w-s-color-border-primary)
		);
		--_border-checked-hover: var(
			--w-c-checkbox-border-color-checked-hover,
			var(--w-s-color-border-primary-hover)
		);
		--_checked-icon: var(
			--w-c-checkbox-checked-icon,
			url('data:image/svg+xml,%3csvg xmlns="http://www.w3.org/2000/svg" width="11" height="9" viewBox="0 0 11 9" fill="none"%3e%3cpath d="M3.8938 5.84774L8.49015 0.348736C8.83451 -0.0632444 9.44764 -0.118066 9.85962 0.226289C10.2716 0.570644 10.3264 1.18377 9.98207 1.59576L4.69995 7.9152C4.33222 8.35514 3.66558 8.38293 3.26252 7.97512L0.280746 4.95825C-0.0967018 4.57636 -0.0930997 3.96079 0.288792 3.58334C0.670684 3.20589 1.28625 3.2095 1.6637 3.59139L3.8938 5.84774Z" fill="currentColor"/%3e%3c/svg%3e')
		);
		--_indeterminate-icon: var(
			--w-c-checkbox-indeterminate-icon,
			url('data:image/svg+xml,%3csvg xmlns="http://www.w3.org/2000/svg" width="8" height="2" viewBox="0 0 8 2" fill="none"%3e%3cpath fill-rule="evenodd" clip-rule="evenodd" d="M0 1C0 0.447715 0.358172 0 0.8 0H7.2C7.64183 0 8 0.447715 8 1C8 1.55228 7.64183 2 7.2 2H0.8C0.358172 2 0 1.55228 0 1Z" fill="currentColor"/%3e%3c/svg%3e')
		);

		--_border-invalid: var(
			--w-c-checkbox-border-color-invalid,
			var(--w-s-color-border-negative)
		);
		--_border-invalid-hover: var(
			--w-c-checkbox-border-color-invalid-hover,
			var(--w-s-color-border-negative-hover)
		);
		--_bg-invalid-hover: var(
			--w-c-checkbox-bg-invalid-checked-hover,
			var(--w-s-color-background-negative-subtle-hover)
		);
		--_bg-invalid-checked-hover: var(
			--w-c-checkbox-bg-invalid-checked-hover,
			var(--w-s-color-background-negative-hover)
		);
		--_bg-invalid-checked: var(
			--w-c-checkbox-bg-invalid-checked,
			var(--w-s-color-background-negative)
		);

		--_bg-disabled: var(
			--w-c-checkbox-bg-disabled,
			var(--w-s-color-background-disabled-subtle)
		);
		--_border-disabled: var(
			--w-c-checkbox-border-color-disabled,
			var(--w-s-color-border-disabled)
		);
		--_bg-disabled-checked: var(
			--w-c-checkbox-bg-disabled-checked,
			var(--w-s-color-background-disabled)
		);

		--_outline-width: var(--w-c-checkbox-outline-width, 2px);
		--_outline-color: var(
			--w-c-checkbox-outline-color,
			var(--w-s-color-border-focus)
		);
		--_outline-offset: var(
			--w-c-checkbox-outline-offset,
			var(--w-outline-offset, 1px)
		);

		--_transition: var(
			--w-c-checkbox-transition,
			all 150ms cubic-bezier(0.4, 0, 0.2, 1)
		);

		--_bg: var(--_bg-default);
		--_bg-invalid: var(--_bg-default);
		--_border-color: var(--_border-default);
		--_border-color-invalid: var(--_border-invalid);
	}

	:host([type="checkbox"]) {
		--_radius: var(--w-c-checkbox-radius, 4px);
	}

	:host(:hover) {
		--_bg: var(--_bg-hover);
		--_border-color: var(--_border-hover);
		--_bg-invalid: var(--_bg-invalid-hover);
		--_bg-invalid-checked: var(--_bg-invalid-checked-hover);
		--_border-color-invalid: var(--_border-invalid-hover);
	}

	:host([checked]),
	:host([indeterminate]) {
		--_bg: var(--_bg-checked);
		--_border-color: var(--_border-checked);
	}

	:host([checked]:hover),
	:host([indeterminate]:hover) {
		--_bg: var(--_bg-checked-hover);
		--_border-color: var(--_border-checked-hover);
	}

	:host([disabled]) {
		--_bg: var(--_bg-disabled);
		--_border-color: var(--_border-disabled);
	}

	:host([disabled][checked]),
	:host([disabled][indeterminate]) {
		--_bg: var(--_bg-disabled-checked);
	}

	[part~="label"] {
		display: block;
		font-size: var(--_label-font-size);
		line-height: var(--_label-line-height);
		user-select: none;
		cursor: pointer;
	}

	[part="base"] {
		display: grid;
		grid-template-columns: var(--_control-size) minmax(0, 1fr);
		gap: var(--_gap);
	}

	[part="input"] {
		position: absolute;
		padding: 0;
		margin: 0;
		opacity: 0;
		pointer-events: none;
		inset: 0;
	}

	[part="control"] {
		position: relative;
		display: block;
		height: var(--_control-size);
		width: var(--_control-size);
		flex-shrink: 0;

		border-width: var(--_border-width);
		border-style: solid;
		border-color: var(--_border-color);
		border-radius: var(--_radius);

		background-color: var(--_bg);
		color: var(--_icon-color);

		cursor: pointer;
		user-select: none;
		appearance: none;
		transition: var(--_transition);

		font-weight: 700;
		text-align: center;
		line-height: var(--w-line-height-xs);
		font-size: var(--w-font-size-m);
	}

	/* Invalid visuals are driven by the actual control state instead of host attributes.
   * This preserves group-driven invalid styling without mutating host attributes. */
	[part="control"]:has(> [part="input"][aria-invalid="true"]:not(:disabled)) {
		border-color: var(--_border-color-invalid);
		background-color: var(--_bg-invalid);
	}

	[part="control"]:has(
		> [part="input"][aria-invalid="true"]:is(:checked, :indeterminate):not(
				:disabled
			)
	) {
		background-color: var(--_bg-invalid-checked);
	}

	:host(:focus-visible) {
		outline: none;
	}

	[part="control"]:has(> [part="input"]:focus-visible:not(:disabled)),
	:host(:focus-visible) [part="control"] {
		outline: var(--_outline-width) solid var(--_outline-color);
		outline-offset: var(--_outline-offset);
	}

	/* checked icon (keep driven by actual input state for parity) */
	[part="control"]:has(:checked) {
		background-image: var(--_checked-icon);
		background-position: center;
	}
	/* indeterminate icon (keep driven by actual input state for parity) */
	[part="control"]:has(:indeterminate) {
		background-image: var(--_indeterminate-icon);
		background-position: center;
	}

	@media (prefers-reduced-motion: reduce) {
		:host {
			--w-c-checkbox-transition: none;
		}
	}
`;
