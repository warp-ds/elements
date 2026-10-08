import { css } from "lit";

export const styles = css`
	:host {
		display: block;
	}

	/* Stories and legacy markup may set [hidden] on inactive panels.
    * Visibility is now controlled internally via active state, so neutralize it. */
	:host([hidden]) {
		display: block !important;
	}

	[part="base"] {
		display: none;
	}

	[part="base"][data-active] {
		display: block;
	}
`;
