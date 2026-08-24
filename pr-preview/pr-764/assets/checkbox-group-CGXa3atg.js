import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,c as n,d as r,g as i,h as a,l as o,p as s,r as c,s as l,t as u,y as d}from"./decorate-Bt2QF_uA.js";import{l as f,s as p,u as m}from"./async-directive-BZIqf2aE.js";import{a as h,o as g,r as _,t as v}from"./i18n-CkjYRTT1.js";import{i as y,n as b,r as x,t as S}from"./directive-CZiujxgm.js";import{t as C}from"./query-BHY-nhsh.js";import{t as w}from"./icon-ND47zKHd.js";import{n as T,t as E}from"./styles-Cw_r5k83.js";import{n as D,t as O}from"./FormControlMixin-BCJbRrUC.js";import{r as k,t as A}from"./if-defined-DBI32Ir5.js";import{t as j}from"./tooltip-D5IbvAIJ.js";var M;function N(){return(N=e((()=>{i(),x(),p(),M=S(class extends b{constructor(e){if(super(e),e.type!==y.PROPERTY&&e.type!==y.ATTRIBUTE&&e.type!==y.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!m(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===s||t===r)return t;let n=e.element,i=e.name;if(e.type===y.PROPERTY){if(t===n[i])return s}else if(e.type===y.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(i))return s}else if(e.type===y.ATTRIBUTE&&n.getAttribute(i)===t+``)return s;return f(e),t}})})))()}function P(){return(P=e((()=>{N()})))()}var F;function I(){return(I=e((()=>{n(),F=d`
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
		--_icon-color: var(
			--w-c-checkbox-icon-color,
			var(--w-s-color-icon-inverted)
		);

		--_bg-checked: var(
			--w-c-checkbox-bg-checked,
			var(--w-s-color-background-primary)
		);
		--_border-checked: var(
			--w-c-checkbox-border-color-checked,
			var(--w-s-color-border-primary)
		);
		--_checked-icon: var(
			--w-c-checkbox-checked-icon,
			var(--w-icon-toggle-checked)
		);

		--_border-invalid: var(
			--w-c-checkbox-border-color-invalid,
			var(--w-s-color-border-negative)
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
		--_border-color: var(--_border-default);
	}

	:host([type="checkbox"]) {
		--_radius: var(--w-c-checkbox-radius, 4px);
	}

	:host([checked]),
	:host([indeterminate]) {
		--_bg: var(--_bg-checked);
		--_border-color: var(--_border-checked);
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
		grid-template-columns: var(--_control-size) max-content;
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
		border-color: var(--_border-invalid);
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

	@media (prefers-reduced-motion: reduce) {
		:host {
			--w-c-checkbox-transition: none;
		}
	}
`})))()}var L;function R(){return(R=e((()=>{D(),n(),c(),A(),P(),E(),I(),L=class extends O(o){constructor(...e){super(...e),this.value=null,this.indeterminate=!1,this.checked=!1,this.disabled=!1,this.required=!1,this.invalid=!1,this.#e=!1,this.#t=!1,this.#n=!1,this.#r=e=>{e.composedPath()[0]===this&&this.handleClick()},this.#i=()=>{this.toggleAttribute(`data-focus-visible`,this.shadowRoot?.activeElement?.matches(`:focus-visible`)??!1)},this.#a=()=>{this.removeAttribute(`data-focus-visible`)},this.#o=()=>{this.#c(),this.#f()},this.#s=e=>{if(!this.disabled&&!e.defaultPrevented&&(e.key===` `||e.key===`Spacebar`||e.key===`Enter`)){if(e.key===`Enter`&&this.internals.form){this.internals.form.requestSubmit();return}e.composedPath()[0]!==this.input&&(e.preventDefault(),this.click())}}}static{this.styles=[T,F]}static{this.shadowRootOptions={...o.shadowRootOptions,delegatesFocus:!0}}set name(e){this._ownName=e}get name(){return this._ownName||this._groupName}#e;#t;#n;get _computedInvalid(){return this.invalid||this._groupInvalid===!0}connectedCallback(){super.connectedCallback(),this.addEventListener(`click`,this.#r);let e=this.getAttribute(`value`);this.value=e??`on`,this.#e=this.hasAttribute(`checked`),this.checked=this.#e,this.addEventListener(`invalid`,this.#o),this.addEventListener(`keydown`,this.#s),this.addEventListener(`focusin`,this.#i),this.addEventListener(`focusout`,this.#a),this.#p()}handleClick(){this.disabled||(this.#c(),this.checked=!this.checked,this.indeterminate=!1,this.updateComplete.then(()=>{this.input.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}))}#r;#i;#a;#o;#s;updated(e){super.updated(e),(e.has(`checked`)||e.has(`indeterminate`))&&this.#m(),this.#h(e)&&(this.#p(),this.#f())}resetFormControl(){this.checked=this.#e,this.#p(),this.#f()}click(){this.disabled||this.input?.click()}focus(e){this.input?.focus(e)}blur(){this.input?.blur()}get validationMessage(){return this.internals.validationMessage}get validity(){return this.internals.validity}checkValidity(){return this.#f(),this.internals.checkValidity()}reportValidity(){return this.#c(),this.#f(),this.internals.checkValidity()}#c(){this.#n=!0}#l(){return this.input?.validationMessage||` `}#u(){return this.input??void 0}#d(e){this.internals.setValidity(e,this.#l(),this.#u())}#f(){if(this.disabled){this.internals.setValidity({});return}let e=this.required&&!this.checked,t=this.invalid&&!this.#t;if(e){this.#t=!0,this.invalid=this.#n,this.#d({valueMissing:!0});return}if(this.#t&&=(this.invalid=!1,!1),t){this.#d({customError:!0});return}this.internals.setValidity({})}#p(){if(this.disabled){this.setValue(null);return}let e=this.checked?this.value:null;this.setValue(e)}#m(){this.input&&(this.input.checked=this.checked,this.input.indeterminate=this.indeterminate)}#h(e){return e.has(`checked`)||e.has(`value`)||e.has(`disabled`)||e.has(`required`)||e.has(`invalid`)}render(){let e=!this.checked&&this.indeterminate,t=e?`mixed`:this.checked?`true`:`false`;return a`
			<label part="base">
				<span part="control">
					<input
						part="input"
						type="checkbox"
						name=${k(this.name||void 0)}
						value=${k(this.value)}
						.indeterminate=${M(this.indeterminate)}
						.checked=${M(this.checked)}
						.disabled=${this.disabled}
						.required=${this.required}
						aria-checked=${t}
						aria-invalid=${k(this._computedInvalid?`true`:void 0)}
						@click=${this.handleClick}
					/>
					${e?`–`:``}
				</span>

				<slot part="label"></slot>
			</label>
		`}},u([C(`input[type="checkbox"]`)],L.prototype,`input`,void 0),u([l({reflect:!0})],L.prototype,`name`,null),u([l({reflect:!0})],L.prototype,`value`,void 0),u([l({type:Boolean,reflect:!0})],L.prototype,`indeterminate`,void 0),u([l({type:Boolean,reflect:!0})],L.prototype,`checked`,void 0),u([l({type:Boolean,reflect:!0})],L.prototype,`disabled`,void 0),u([l({type:Boolean,reflect:!0})],L.prototype,`required`,void 0),u([l({type:Boolean,reflect:!0})],L.prototype,`invalid`,void 0),u([l({attribute:!1})],L.prototype,`_groupInvalid`,void 0),u([l({attribute:!1})],L.prototype,`_groupName`,void 0),customElements.get(`w-checkbox`)||customElements.define(`w-checkbox`,L)})))()}var z;function B(){return(B=e((()=>{z=JSON.parse(`{"checkbox-group.label.optional":["Valgfri"],"checkbox-group.validation.required":["Mindst én valgt mulighed er påkrævet."]}`)})))()}var V;function H(){return(H=e((()=>{V=JSON.parse(`{"checkbox-group.label.optional":["Optional"],"checkbox-group.validation.required":["At least one selection is required."]}`)})))()}var U;function W(){return(W=e((()=>{U=JSON.parse(`{"checkbox-group.label.optional":["Valinnainen"],"checkbox-group.validation.required":["Vähintään yksi valinta vaaditaan."]}`)})))()}var G;function K(){return(K=e((()=>{G=JSON.parse(`{"checkbox-group.label.optional":["Valgfri"],"checkbox-group.validation.required":["Minst ett valg er påkrevd."]}`)})))()}var q;function J(){return(J=e((()=>{q=JSON.parse(`{"checkbox-group.label.optional":["Valfritt"],"checkbox-group.validation.required":["Minst ett val krävs."]}`)})))()}var Y,X;function Z(){return(Z=e((()=>{g(),D(),n(),c(),A(),_(),B(),H(),W(),K(),J(),w(),j(),v(V,G,U,z,q),Y=()=>h._({id:`checkbox-group.validation.required`,message:`At least one selection is required.`,comment:`Shown when required checkbox group has no selections`}),X=class extends O(o){constructor(...e){super(...e),this.optional=!1,this.required=!1,this.invalid=!1,this._hasHelpTextSlot=!1,this.#e=!1,this.#t=!1,this._internalTabIndex=-1,this.#r=()=>{this.#o(),this.#_(),this.requestUpdate()},this.#i=()=>{this.#o(),this.#_(),this.requestUpdate()},this.#a=()=>{this.#l(),this.#_(),this.requestUpdate()},this.#s=()=>{this.requestUpdate()}}static{this.shadowRootOptions={...o.shadowRootOptions,delegatesFocus:!0}}#e;#t;#n;static{this.styles=d`
		.wrapper {
			display: inline-flex;
			flex-direction: column;
			gap: 16px;
		}

		.checkbox-group {
			display: grid;
			gap: 16px;
		}

		.label {
			display: flex;
			align-items: center;
			gap: 8px;
			font-size: var(--w-font-size-s);
			line-height: var(--w-line-height-s);
			font-weight: 700;
			color: var(--w-s-color-text);
		}

		.optional {
			font-weight: 400;
			color: var(--w-s-color-text-subtle);
		}

		.help-text {
			display: block;
			font-size: var(--w-font-size-xs);
			line-height: var(--w-line-height-xs);
			color: var(--w-s-color-text-subtle);
		}

		.error {
			color: var(--w-s-color-text-negative);
		}

		[part="tooltip-target"] {
			appearance: none;
			background: transparent;
			border: none;
			height: 16px;
			margin: 0 0 0 4px;
			padding: 0;
			vertical-align: text-top;
		}

		w-tooltip {
			display: inline-block;
		}
	`}helpTextSlotChange(){this.renderRoot.querySelector(`slot[name=help-text]`).assignedElements().length&&(this._hasHelpTextSlot=!0)}render(){let e=this.#c()>0,t=this.required&&!e&&this.#e,n=this.invalid||t,i=n?this.#p():this.helpText,o=!!(i||this._hasHelpTextSlot),s=o?`checkbox-group__help`:void 0,c=this.label?`checkbox-group__label`:void 0,l=n?`true`:void 0;return a`
			<div class="wrapper" tabindex="${this._internalTabIndex}">
				${this.label?a`
								<div class="label" id="${k(c)}">
									<span>${this.label}</span>
									${this.optional&&!this.required?a`
													<span class="optional">
														${h._({id:`checkbox-group.label.optional`,message:`Optional`,comment:`Shown behind label when marked as optional`})}
													</span>
												`:r}
									${this.tooltip?a`
													<button
														id="tooltip-target"
														part="tooltip-target"
														aria-describedby="tooltip"
													>
														<w-icon name="Info" size="small"></w-icon>
													</button>
													<w-tooltip
														for="tooltip-target"
														id="tooltip"
														exportparts="tooltip, arrow, beak, hover-bridge"
													>
														${this.tooltip}
													</w-tooltip>
												`:r}
								</div>
							`:r}
				<div
					class="checkbox-group"
					role="group"
					aria-labelledby=${k(c)}
					aria-describedby=${k(s)}
					aria-invalid=${k(l)}
				>
					<slot></slot>
				</div>
				<div
					?hidden=${!o}
					class="${n?`help-text error`:`help-text`}"
					id="${k(s)}"
				>
					${i}
					<slot
						@slotchange="${this.helpTextSlotChange}"
						name="help-text"
					></slot>
				</div>
			</div>
		`}connectedCallback(){super.connectedCallback(),this.addEventListener(`change`,this.#r),this.addEventListener(`invalid`,this.#i),this.addEventListener(`slotchange`,this.#a),this.#n=h.on(`change`,this.#s),this.setValue(null),this.#v()}disconnectedCallback(){this.#n?.(),this.#n=void 0,super.disconnectedCallback()}checkValidity(){return this.#_(),this.internals.checkValidity()}reportValidity(){return this.#o(),this.#_(),this.internals.checkValidity()}focus(e){let t=this.#d();if(t?.focus){t.focus(e);return}HTMLElement.prototype.focus.call(this,e)}#r;#i;#a;#o(){this.#e=!0}#s;#c(){return this.#f().filter(e=>e.checked).length}#l(){if(this.name)for(let e of this.#f()){let t=e;t&&typeof t==`object`&&!t.name&&(t._groupName=this.name)}}#u(e){for(let t of this.#f())`_groupInvalid`in t&&(t._groupInvalid=e)}#d(){return this.#f()[0]}#f(){return(this.shadowRoot?.querySelector(`slot`))?.assignedElements({flatten:!0})??[]}#p(){return Y()}updated(e){super.updated(e),this.#m(e)&&(e.has(`name`)&&this.#l(),this.#_())}#m(e){return e.has(`invalid`)||e.has(`required`)||e.has(`helpText`)||e.has(`name`)}#h(e){let t=this.#d();this.internals.setValidity(e,` `,t??void 0)}#g(e){this._internalTabIndex=e?0:-1}#_(){this.#v();let e=this.#c()>0,t=this.required&&!e,n=this.invalid,r=t&&this.#e,i=n||r;if(this.#g(i),t){this.#h({valueMissing:!0}),this.#u(i);return}if(n){this.#h({customError:!0}),this.#u(!0);return}this.internals.setValidity({}),this.#u(!1)}#v(){this.#t||this.internals.form&&(this.name&&this.name.trim().length>0||(console.warn(`w-checkbox-group: "name" is required for form submission.`),this.#t=!0))}},u([l({type:String,reflect:!0})],X.prototype,`label`,void 0),u([l({type:String,reflect:!0})],X.prototype,`tooltip`,void 0),u([l({type:String,reflect:!0})],X.prototype,`name`,void 0),u([l({type:Boolean,reflect:!0})],X.prototype,`optional`,void 0),u([l({type:String,reflect:!0,attribute:`help-text`})],X.prototype,`helpText`,void 0),u([l({type:Boolean,reflect:!0})],X.prototype,`required`,void 0),u([l({type:Boolean,reflect:!0})],X.prototype,`invalid`,void 0),u([t()],X.prototype,`_hasHelpTextSlot`,void 0),u([t()],X.prototype,`_internalTabIndex`,void 0),customElements.get(`w-checkbox-group`)||customElements.define(`w-checkbox-group`,X)})))()}export{R as n,Z as t};