import { css } from "lit";

export const styles = css`
	:host {
		--_gap: var(--w-c-modal-footer-gap, 8px);
	}

	[part="footer"] {
		display: flex;
		justify-content: flex-end;
		padding-left: 1.6rem;
		padding-right: 1.6rem;
		padding-top: 2.4rem;
		gap: var(--_gap);
	}

	@media (min-width: 480px) {
		[part="footer"] {
			padding-left: 3.2rem;
			padding-right: 3.2rem;
		}
	}
`;
