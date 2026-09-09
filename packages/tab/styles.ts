import { css } from "lit";

export const styles = css`
	:host {
		--_inactive-color: var(
			--w-c-tab-inactive-color,
			var(--w-s-color-text-subtle)
		);
		--_hover-color: var(--w-c-tab-hover-color, var(--w-s-color-text-link));
		--_hover-color-border: var(
			--w-c-tab-hover-color-border,
			var(--w-s-color-border-primary)
		);
		--_active-color: var(--w-c-tab-active-color, var(--w-s-color-text-link));
		--_active-color-border: var(
			--w-c-tab-active-color-border,
			var(--w-s-color-border-selected)
		);
	}

	::slotted([slot="icon"]) {
		display: flex;
	}

	:host(:focus-visible) {
		outline: 2px solid var(--w-s-color-border-focus, #1a73e8);
		outline-offset: var(--w-outline-offset, 1px);
	}

	[part="base"] {
		align-items: center;
		background-color: rgba(0, 0, 0, 0);
		border-bottom-width: 4px;
		border-color: rgba(0, 0, 0, 0);
		cursor: pointer;
		color: var(--_inactive-color);
		display: grid;
		gap: 8px;
		padding: 16px;
		padding-bottom: 8px;
		font-weight: 700;
		height: 100%;
		width: 100%;
		text-align: center;
	}

	[part="icon-inline"] {
		align-items: center;
		display: flex;
		gap: 8px;
		justify-content: center;
	}

	[part="icon-block"] {
		margin-inline: auto;
	}

	:host(:hover) [part="base"] {
		border-color: var(--_hover-color-border);
		color: var(--_hover-color);
	}

	/* Selected tab */
	:host([tabindex="0"]) [part="base"] {
		border-color: var(--_active-color-border);
		color: var(--_active-color);
	}
`;
