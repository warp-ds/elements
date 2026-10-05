import { css } from "lit";
export const styles = css`
	.sr-only {
		clip: rect(0px, 0px, 0px, 0px);
		white-space: nowrap;
		border-width: 0px;
		width: 1px;
		height: 1px;
		margin: -1px;
		padding: 0px;
		position: absolute;
		overflow: hidden;
	}
	[part="trail"] {
		display: flex;
	}
	[part="trail"] > :not([hidden]) ~ :not([hidden]) {
		--w-space-x-reverse: 0;
		margin-left: calc(0.8rem * calc(1 - var(--w-space-x-reverse)));
		margin-right: calc(0.8rem * var(--w-space-x-reverse));
	}
	.legacy-separator {
		-webkit-user-select: none;
		user-select: none;
		color: var(--w-s-color-icon);
	}
	.legacy-trail-segment-link {
		color: var(--w-s-color-text-link);
		cursor: pointer;
		text-decoration: none;
	}
	.legacy-trail-segment-text {
		color: var(--w-s-color-text);
	}
`;
