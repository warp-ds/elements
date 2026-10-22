import { css } from "lit";
export const styles = css`
	:host {
		--_transition-property: var(
			--w-c-step-transition-property,
			color,
			background-color,
			border-color,
			text-decoration-color,
			fill,
			stroke
		);
		--_transition-duration: var(--w-c-step-transition-duration, 0.15s);
		--_transition-timing-function: var(
			--w-c-step-transition-timing-function,
			cubic-bezier(0.4, 0, 0.2, 1)
		);
		--_column-gap-vertical: var(--w-c-step-column-gap-vertical, 0.8rem);
		--_indicator-size: var(--w-c-step-indicator-size, 2rem);
		--_indicator-line-thickness: var(
			--w-c-step-indicator-line-thickness,
			0.2rem
		);
		--_indicator-line-color: var(
			--w-c-step-indicator-line-color,
			var(--w-s-color-background-disabled)
		);
		--_indicator-line-color-completed: var(
			--w-c-step-indicator-line-color-completed,
			var(--w-s-color-background-primary)
		);
		--_dot-color: var(--w-c-step-color, var(--w-s-color-icon-inverted));
		--_dot-color-border: var(--w-c-step-color-border, var(--w-s-color-border));
		--_dot-color-background: var(
			--w-c-step-color-background,
			var(--w-s-color-background)
		);
		--_dot-color-active: var(
			--w-c-step-color-active,
			var(--w-s-color-icon-inverted)
		);
		--_dot-color-border-active: var(
			--w-c-step-color-border-active,
			var(--w-s-color-border-primary)
		);
		--_dot-color-background-active: var(
			--w-c-step-color-background-active,
			var(--w-s-color-background-primary)
		);
		--_dot-color-completed: var(
			--w-c-step-color-completed,
			var(--w-s-color-icon-inverted)
		);
		--_dot-color-border-completed: var(
			--w-c-step-color-border-completed,
			var(--w-s-color-border-primary)
		);
		--_dot-color-background-completed: var(
			--w-c-step-color-background-completed,
			var(--w-s-color-background-primary)
		);
		--_dot-border-radius: var(--w-c-step-dot-border-radius, 9999px);
		--_dot-border-width: var(--w-c-step-dot-border-width, 2px);
		--_content-gap-vertical: var(--w-c-step-content-gap-vertical, 3.2rem);
		--_content-padding-inline-horizontal: var(
			--w-c-step-content-padding-inline-horizontal,
			1.2rem
		);
	}

	/* transitions */
	[part="line-horizontal"],
	[part="dot"],
	[part="line"] {
		transition-property: var(--_transition-property);
		transition-duration: var(--_transition-duration);
		transition-timing-function: var(--_transition-timing-function);
	}

	/* base/wrapper element */
	[part="base"] {
		grid-template-columns: var(--_indicator-size) 1fr;
		grid-template-rows: var(--_indicator-size) auto;
		grid-auto-flow: column;
		column-gap: var(--_column-gap-vertical);
		display: grid;
	}
	[data-orientation="horizontal"] {
		grid-auto-flow: row;
		column-gap: 0;
		height: 100%;
		align-items: center;
		grid-template-columns: 1fr var(--_indicator-size) 1fr;
		grid-template-rows: auto var(--_indicator-size);
	}
	[data-orientation="vertical"][data-align="right"] {
		grid-template-columns: 1fr var(--_indicator-size);
	}

	/* line-horizontal */
	[part="line-horizontal"] {
		width: 100%;
		height: var(--_indicator-line-thickness);
		grid-row-start: 2;
		background-color: var(--_indicator-line-color);
	}
	:host([active]) [part="line-horizontal"] {
		background-color: var(--_indicator-line-color-completed);
	}
	:host([completed]) [part="line-horizontal"] {
		background-color: var(--_indicator-line-color-completed);
	}
	:host(:first-child) [part="line-horizontal"] {
		visibility: hidden;
	}

	/* dot */
	[part="dot"] {
		border-color: var(--_dot-color-border);
		width: var(--_indicator-size);
		height: var(--_indicator-size);
		color: var(--_dot-color);
		background-color: var(--_dot-color-background);
		border-radius: var(--_dot-border-radius);
		border-width: var(--_dot-border-width);
	}
	[data-orientation="horizontal"] [part="dot"] {
		justify-self: end;
		grid-row-start: 2;
	}
	[data-orientation="vertical"][data-align="right"] [part="dot"] {
		grid-column-start: 2;
	}
	:host([active]) [part="dot"] {
		color: var(--_dot-color-active);
		border-color: var(--_dot-color-border-active);
		background-color: var(--_dot-color-background-active);
	}
	:host([completed]) [part="dot"] {
		color: var(--_dot-color-completed);
		border-color: var(--_dot-color-border-completed);
		background-color: var(--_dot-color-background-completed);
	}

	/* line */
	[part="line"] {
		width: var(--_indicator-line-thickness);
		height: 100%;
		justify-self: center;
		background-color: var(--_indicator-line-color);
	}
	[data-orientation="horizontal"] [part="line"] {
		width: 100%;
		height: var(--_indicator-line-thickness);
		grid-row-start: 2;
	}
	[data-orientation="vertical"][data-align="right"] [part="line"] {
		grid-column-start: 2;
	}
	:host([active]) [part="line"] {
		background-color: var(--_indicator-line-color);
	}
	:host([completed]) [part="line"] {
		background-color: var(--_indicator-line-color-completed);
	}
	:host(:last-child) [part="line"] {
		visibility: hidden;
	}

	/* content */
	[part="content"] {
		padding-bottom: var(--_content-gap-vertical);
		grid-row: span 2 / span 2;
	}
	:host(:last-child) [data-orientation="vertical"] [part="content"] {
		padding-bottom: 0;
	}
	[data-orientation="horizontal"] [part="content"] {
		height: 100%;
		margin-bottom: 0;
		padding-bottom: 0;
		padding-left: var(--_content-padding-inline-horizontal);
		padding-right: var(--_content-padding-inline-horizontal);
		grid-column: span 3 / span 3;
		text-align: center;
		grid-row: 1;
	}
	[data-orientation="vertical"][data-align="right"] [part="content"] {
		text-align: right;
	}
`;
