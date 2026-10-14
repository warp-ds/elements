import { css } from "lit";
export const styles = css`
	[part="base"] {
		width: 100%;
	}

	:host([horizontal]) [part="base"] {
		display: flex;
	}
`;
