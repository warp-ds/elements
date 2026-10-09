import { css } from "lit";
export const styles = css`
	:host {
		/* layout */
		--_padding-x:var(--w-c-pill-padding, 1.2rem);
		--_padding-y:var(--w-c-pill-padding, .8rem);

		/* border */
		--_border-width:var(--w-c-pill-border-width, 0);
		--_border-style:var(--w-c-pill-border-style, solid);
		--_border-color:var(--w-c-pill-border-color, transparent);
		--_border-radius:var(--w-c-pill-border-radius, 9999px);
		--_focus-outline:var(--w-c-pill-focus-outline, 2px solid var(--w-s-color-border-focus));
		--_focus-outline-offset:var(--w-c-pill-focus-outline-offset, 1px);

		/* text  */
		--_font-size:var(--w-c-pill-font-size, var(--w-font-size-xs));
		--_line-height:var(--w-c-pill-line-height, var(--w-line-height-xs));
		--_font-weight:var(--w-c-pill-font-weight, normal);
		--_suggestion-font-weight:var(--w-c-pill-suggestion-font-weight, 700);
		--_color-text:var(--w-c-pill-color-text, var(--w-s-color-text-inverted));
		--_color-text-hover:var(--w-c-pill-color-text-hover, var(--_color-text));
		--_color-text-active:var(--w-c-pill-color-text-active, var(--_color-text));
		--_suggestion-color-text:var(--w-c-pill-suggestion-color-text, var(--w-s-color-text));

		/* background */
		--_color-background:var(--w-c-pill-color-background, var(--w-s-color-background-primary));
		--_color-background-hover:var(--w-c-pill-color-background-hover, var(--w-s-color-background-primary-hover));
		--_color-background-active:var(--w-c-pill-color-background-active, var(--w-s-color-background-primary-active));
		--_suggestion-color-background:var(--w-c-pill-suggestion-color-background, var(--w-color-pill-suggestion-background));
		--_suggestion-color-background-hover:var(--w-c-pill-suggestion-color-background-hover, var(--w-color-pill-suggestion-background-hover));
		--_suggestion-color-background-active:var(--w-c-pill-suggestion-color-background-active, var(--w-color-pill-suggestion-background-active));

		/* motion */
		--_transition-property:var(--w-c-pill-transition-property, all);
		--_transition-duration:var(--w-c-pill-transition-duration, .15s);
		--_transition-timing-function:var(--w-c-pill-transition-timing-function, cubic-bezier(.4, 0, .2, 1));
	}
	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		border: 0;
	}
	[part="base"] {
		align-items: center;
		display: flex;
	}
	[part="label"] {
		outline: none;
		font-size: var(--_font-size);
		font-weight: var(--_font-weight);
		line-height: var(--_line-height);
		transition-property: var(--_transition-property);
		transition-duration: var(--_transition-duration);
		transition-timing-function: var(--_transition-timing-function);
		padding-right: var(--_padding-x);
		padding-left: var(--_padding-x);
		padding-top: var(--_padding-y);
		padding-bottom: var(--_padding-y);
		color: var(--_color-text);
		background-color: var(--_color-background);
		align-items: center;
		display: inline-flex;
		border-top-right-radius: var(--_border-radius);
		border-bottom-right-radius: var(--_border-radius);
		border-top-left-radius: var(--_border-radius);
		border-bottom-left-radius: var(--_border-radius);
		border-width: var(--_border-width);
		border-style: var(--_border-style);
		border-color: var(--_border-color);
	}
	[part="label"]:hover, [part="close-button"]:hover {
		color: var(--_color-text-hover);
		background-color: var(--_color-background-hover);
	}
	[part="label"]:active, [part="close-button"]:active {
		color: var(--_color-text-active);
		background-color: var(--_color-background-active);
	}
	[part="label"]:focus-visible, [part="close-button"]:focus-visible {
		outline: var(--_focus-outline);
    	outline-offset: var(--_focus-outline-offset);
	}
	:host([suggestion]) [part="label"] {
    	background-color: var(--_suggestion-color-background);
		color: var(--_suggestion-color-text);
		font-weight: var(--_suggestion-font-weight);
	}
	:host([suggestion]) [part="label"]:hover {
    	background-color: var(--_suggestion-color-background-hover);
	}
	:host([suggestion]) [part="label"]:active {
    	background-color: var(--_suggestion-color-background-active);
	}
	:host([suggestion]) [part="label"]:focus-visible {
    	outline: var(--_focus-outline);
    	outline-offset: var(--_focus-outline-offset);
	}
	:host([can-close]) [part="label"] {
		padding-right: calc(var(--_padding-x) / 6);
		border-top-right-radius: 0;
    	border-bottom-right-radius: 0;
	}
	[part="close-button"] {
		outline: none;
		font-size: var(--w-font-size-xs);
		line-height: var(--w-line-height-xs);
		transition-property: var(--_transition-property);
		transition-duration: var(--_transition-duration);
		transition-timing-function: var(--_transition-timing-function);
		padding-right: var(--_padding-x);
		padding-left: calc(var(--_padding-x) / 3);
		padding-top: var(--_padding-y);
		padding-bottom: var(--_padding-y);
		color: var(--_color-text);
		background-color: var(--_color-background);
		align-items: center;
		display: inline-flex;
		border-top-right-radius: var(--_border-radius);
		border-bottom-right-radius: var(--_border-radius);
	}
}`;
