import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{T as t,_ as n,a as r,d as i,g as a,i as o,k as s,r as c,t as l,v as u,y as d}from"./decorate-r9jH0CjD.js";import{n as f,r as p}from"./i18n-CH8KbyPD.js";import{n as m,t as h}from"./index.m-ChAdMYgE.js";import{t as g}from"./icon-BLxYKJ3e.js";import{n as _,t as v}from"./styles-zocEQ6mS.js";import{n as y,t as b}from"./FormControlMixin-wSdHiYtY.js";var x;function S(){return(S=e((()=>{u(),x=s`
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
`})))()}var C;function w(){return(w=e((()=>{h(),y(),n(),u(),r(),o(),p(),v(),S(),g(),C=class extends b(d){constructor(){super(),this.ariaLabel=null,this.clear=!1,this.search=!1,this.label=``,this.icon=null,new c(this)}static{this.styles=[_,x]}get _wrapperClasses(){return m([this.label?`has-label`:`has-icon`])}resetContainingTextField(e){let t=this.closest(`w-textfield`);t&&t.resetFormControl(),e.stopPropagation()}submitContainingForm(e){let t=this.internals.form;t&&t.submit(),e.stopPropagation()}get _searchButton(){let e=this.ariaLabel||a._({id:`affix.aria.search`,message:`Search`,comment:`Aria label for the search button in affix`});return t`
			<button
				part="wrapper"
				aria-label="${e}"
				class="${this._wrapperClasses}"
				type="submit"
				@click="${this.submitContainingForm.bind(this)}"
			>
				<w-icon name="Search" size="small" locale="${f()}"></w-icon>
			</button>
		`}get _clearButton(){let e=this.ariaLabel||a._({id:`affix.aria.clearInput`,message:`Clear input`,comment:`Aria label for the clear input button in affix`});return t`
			<button
				part="wrapper"
				aria-label="${e}"
				class="${this._wrapperClasses}"
				type="reset"
				@click="${this.resetContainingTextField.bind(this)}"
			>
				<w-icon name="Close" size="small" locale="${f()}"></w-icon>
			</button>
		`}get _icon(){return this.icon?t`
				<div part="wrapper" class="${this._wrapperClasses}">
					<w-icon
						name="${this.icon}"
						size="small"
						locale="${f()}"
					></w-icon>
				</div>
			`:``}get _text(){return t`
			<div part="wrapper" class="${this._wrapperClasses}">
				<span part="label">${this.label}</span>
			</div>
		`}get _markup(){if(this.label)return this._text;if(this.icon)return this._icon;if(this.search)return this._searchButton;if(this.clear)return this._clearButton}render(){return t`${this._markup}`}},l([i({attribute:`aria-label`,reflect:!0,useDefault:!0})],C.prototype,`ariaLabel`,void 0),l([i({type:Boolean})],C.prototype,`clear`,void 0),l([i({type:Boolean})],C.prototype,`search`,void 0),l([i({reflect:!0,useDefault:!0})],C.prototype,`label`,void 0),l([i({reflect:!0,useDefault:!0})],C.prototype,`icon`,void 0),customElements.get(`w-affix`)||customElements.define(`w-affix`,C)})))()}export{w as t};