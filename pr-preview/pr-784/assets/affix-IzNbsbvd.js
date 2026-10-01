import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{C as t,f as n,p as r,r as i,s as a,t as o,y as s}from"./decorate-kJVNAdyH.js";import{a as c,n as l,o as u,r as d}from"./i18n-CkjYRTT1.js";import{n as f,t as p}from"./index.m-DHqwZk2H.js";import{t as m}from"./icon-DgzLkPq-.js";import{n as h,t as g}from"./styles-BxpTFSox.js";import{n as _,t as v}from"./FormControlMixin-BCJbRrUC.js";var y;function b(){return(b=e((()=>{n(),y=t`
	/* Wrapper component tokens with semantic fallbacks */
	:host {
		/* Internal tokens - not part of public API */
		--_wrapper-bg: var(--w-c-affix-wrapper-bg, transparent);
		--_wrapper-border-radius: var(--w-c-affix-wrapper-border-radius, 0.4rem);
		--_wrapper-padding-left: var(--w-c-affix-wrapper-padding-left, 1.2rem);
		--_wrapper-padding-right: var(--w-c-affix-wrapper-padding-right, 1.2rem);
		--_wrapper-width-with-label: var(
			--w-c-affix-wrapper-width-with-label,
			max-content
		);
		--_wrapper-width-with-icon: var(--w-c-affix-wrapper-width-with-icon, 4rem);

		/* Label tokens */
		--_label-color: var(--w-c-affix-label-color, var(--w-s-color-text));
		--_label-font-size: var(--w-c-affix-label-font-size, var(--w-font-size-xs));
		--_label-line-height: var(
			--w-c-affix-label-line-height,
			var(--w-line-height-xs)
		);
		--_label-font-weight: var(--w-c-affix-label-font-weight, 700);
		--_label-cursor: var(--w-c-affix-label-cursor, default);
	}

	/* Base wrapper styles (applied to all variants) */
	[part="wrapper"] {
		position: absolute;
		top: 0;
		bottom: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: var(--_wrapper-bg);
		border-radius: var(--_wrapper-border-radius);
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	/* Prefix positioning */
	:host([slot="prefix"]) [part="wrapper"] {
		left: 0;
	}

	/* Suffix positioning */
	:host([slot="suffix"]) [part="wrapper"] {
		right: 0;
	}

	/* Width variants */
	[part="wrapper"].has-label {
		width: var(--_wrapper-width-with-label);
	}

	:host([slot="prefix"]) [part="wrapper"].has-label {
		padding-left: var(--_wrapper-padding-left);
	}

	:host([slot="suffix"]) [part="wrapper"].has-label {
		padding-right: var(--_wrapper-padding-right);
	}

	[part="wrapper"].has-icon {
		width: var(--_wrapper-width-with-icon);
	}

	/* Label styling */
	[part="label"] {
		display: block;
		position: relative;
		font-size: var(--_label-font-size);
		line-height: var(--_label-line-height);
		font-weight: var(--_label-font-weight);
		color: var(--_label-color);
		cursor: var(--_label-cursor);
		padding-bottom: 0;
	}

	/* Button wrapper for interactive variants */
	button[part="wrapper"] {
		border: none;
		outline: none;
		cursor: pointer;
	}

	/* Focus styles for interactive variants */
	button[part="wrapper"]:focus {
		outline: 2px solid var(--w-s-color-border-focus);
		outline-offset: var(--w-outline-offset, -2px);
	}

	button[part="wrapper"]:focus-visible {
		outline: 2px solid var(--w-s-color-border-focus);
		outline-offset: var(--w-outline-offset, -2px);
	}

	button[part="wrapper"]:not(:focus-visible) {
		outline: none;
	}
`})))()}var x;function S(){return(S=e((()=>{p(),_(),u(),n(),i(),d(),g(),b(),m(),x=class extends v(r){constructor(...e){super(...e),this.ariaLabel=null,this.clear=!1,this.search=!1,this.label=``,this.icon=null}static{this.styles=[h,y]}get _wrapperClasses(){return f([this.label?`has-label`:`has-icon`])}resetContainingTextField(e){let t=this.closest(`w-textfield`);t&&t.resetFormControl(),e.stopPropagation()}submitContainingForm(e){let t=this.internals.form;t&&t.submit(),e.stopPropagation()}get _searchButton(){let e=this.ariaLabel||c._({id:`affix.aria.search`,message:`Search`,comment:`Aria label for the search button in affix`});return s`
			<button
				part="wrapper"
				aria-label="${e}"
				class="${this._wrapperClasses}"
				type="submit"
				@click="${this.submitContainingForm.bind(this)}"
			>
				<w-icon name="Search" size="small" locale="${l()}"></w-icon>
			</button>
		`}get _clearButton(){let e=this.ariaLabel||c._({id:`affix.aria.clearInput`,message:`Clear input`,comment:`Aria label for the clear input button in affix`});return s`
			<button
				part="wrapper"
				aria-label="${e}"
				class="${this._wrapperClasses}"
				type="reset"
				@click="${this.resetContainingTextField.bind(this)}"
			>
				<w-icon name="Close" size="small" locale="${l()}"></w-icon>
			</button>
		`}get _icon(){return this.icon?s`
				<div part="wrapper" class="${this._wrapperClasses}">
					<w-icon
						name="${this.icon}"
						size="small"
						locale="${l()}"
					></w-icon>
				</div>
			`:``}get _text(){return s`
			<div part="wrapper" class="${this._wrapperClasses}">
				<span part="label">${this.label}</span>
			</div>
		`}get _markup(){if(this.label)return this._text;if(this.icon)return this._icon;if(this.search)return this._searchButton;if(this.clear)return this._clearButton}render(){return s`${this._markup}`}},o([a({attribute:`aria-label`,reflect:!0,useDefault:!0})],x.prototype,`ariaLabel`,void 0),o([a({type:Boolean})],x.prototype,`clear`,void 0),o([a({type:Boolean})],x.prototype,`search`,void 0),o([a({reflect:!0,useDefault:!0})],x.prototype,`label`,void 0),o([a({reflect:!0,useDefault:!0})],x.prototype,`icon`,void 0),customElements.get(`w-affix`)||customElements.define(`w-affix`,x)})))()}export{S as t};