import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{C as t,a as n,f as r,h as i,p as a,r as o,s,t as c,y as l}from"./decorate-kJVNAdyH.js";import{a as u,o as d,r as f,t as p}from"./i18n-CkjYRTT1.js";import{t as m}from"./icon-DgzLkPq-.js";import{n as h,t as g}from"./styles-BxpTFSox.js";import{n as _,t as v}from"./FormControlMixin-BCJbRrUC.js";import{r as y,t as b}from"./if-defined-CHz3vSYq.js";import{n as x,t as S}from"./styles-CjVtinFL.js";import{t as C}from"./tooltip-DFh_EJXQ.js";var w;function T(){return(T=e((()=>{r(),w=t`
	:host {
		box-sizing: border-box !important;
	}

	:host *,
	:host *::before,
	:host *::after {
		box-sizing: inherit !important;
	}
`})))()}var E;function D(){return(D=e((()=>{r(),E=t`
	:host {
		display: inline-flex;
		align-items: center;
		gap: var(--_gap);

		--_gap: var(--w-c-radio-gap, 8px);

		--_size: var(--w-c-radio-size, 2rem);
		--_radius: var(--w-c-radio-radius, 50%);
		--_border-width: var(--w-c-radio-border-width, 1px);
		--_checked-border-width: var(--w-c-radio-checked-border-width, 0.6rem);

		--_bg: var(--w-c-radio-bg, var(--w-s-color-background));
		--_bg-hover: var(
			--w-c-checkbox-bg-hover,
			var(--w-s-color-background-hover)
		);
		--_bg-invalid-hover: var(
			--w-c-checkbox-bg-hover,
			var(--w-s-color-background-negative-subtle-hover)
		);
		--_border-color: var(
			--w-c-radio-border-color,
			var(--w-s-color-border-strong)
		);
		--_border-color-hover: var(
			--w-c-checkbox-border-color-hover,
			var(--w-s-color-border-strong-hover)
		);
		--_border-color-checked: var(
			--w-c-radio-border-color-checked,
			var(--w-s-color-border-selected)
		);
		--_border-color-checked-hover: var(
			--w-c-radio-border-color-checked-hover,
			var(--w-s-color-border-selected-hover)
		);
		--_border-color-invalid: var(
			--w-c-radio-border-color-invalid,
			var(--w-s-color-border-negative)
		);
		--_border-color-invalid-hover: var(
			--w-c-radio-border-color-invalid,
			var(--w-s-color-border-negative-hover)
		);
		--_border-color-invalid-checked-hover: var(
			--w-c-radio-border-color-invalid-checked-hover,
			var(--w-s-color-border-negative-hover)
		);

		--_outline-width: var(--w-c-radio-outline-width, 2px);
		--_outline-color: var(
			--w-c-radio-outline-color,
			var(--w-s-color-border-focus)
		);
		--_outline-offset: var(
			--w-c-radio-outline-offset,
			var(--w-outline-offset, 1px)
		);

		--_border-color-disabled: var(
			--w-c-radio-border-color-disabled,
			var(--w-s-color-border-disabled)
		);
		--_bg-disabled: var(
			--w-c-radio-bg-disabled,
			var(--w-s-color-background-disabled-subtle)
		);

		--_label-font-size: var(--w-c-radio-label-font-size, var(--w-font-size-m));
		--_label-line-height: var(
			--w-c-radio-label-line-height,
			var(--w-line-height-m)
		);
		--_label-color: var(--w-c-radio-label-color, currentColor);
		--_label-color-disabled: var(
			--w-c-radio-label-color-disabled,
			var(--w-s-color-text-disabled)
		);

		--_cursor: var(--w-c-radio-cursor, pointer);
		--_cursor-disabled: var(--w-c-radio-cursor-disabled, not-allowed);

		--_transition: var(
			--w-c-radio-transition,
			border-color 150ms cubic-bezier(0.4, 0, 0.2, 1),
			border-width 150ms cubic-bezier(0.4, 0, 0.2, 1),
			background-color 150ms cubic-bezier(0.4, 0, 0.2, 1)
		);
	}

	:host(:hover) [part="control"] {
		border-color: var(--_border-color-hover);
		background-color: var(--_bg-hover);
	}

	:host([disabled]),
	:host([disabled-ui]) {
		--w-c-radio-border-color: var(
			--w-c-radio-border-color-disabled,
			var(--w-s-color-border-disabled)
		);
		--w-c-radio-bg: var(
			--w-c-radio-bg-disabled,
			var(--w-s-color-background-disabled-subtle)
		);
		--w-c-radio-border-color-checked: var(
			--w-c-radio-border-color-disabled,
			var(--w-s-color-border-disabled)
		);
		--w-c-radio-label-color: var(
			--w-c-radio-label-color-disabled,
			var(--w-s-color-text-disabled)
		);
		--w-c-radio-cursor: var(--w-c-radio-cursor-disabled, not-allowed);
	}

	[part="base"] {
		display: inline-flex;
		align-items: center;
		gap: var(--_gap);
	}

	[part="control"] {
		appearance: none;
		-webkit-appearance: none;
		margin: 0;

		width: var(--_size);
		height: var(--_size);
		border-style: solid;
		border-width: var(--_border-width);
		border-color: var(--_border-color);
		border-radius: var(--_radius);
		background-color: var(--_bg);
		cursor: var(--_cursor);
		flex-shrink: 0;

		transition: var(--_transition);
	}

	:host([checked]) [part="control"],
	:host([checked-ui]) [part="control"],
	:host([role="radio"][checked-ui]) [part="control"],
	:host([role="radio"]:state(checked)) [part="control"] {
		border-color: var(--_border-color-checked);
		border-width: var(--_checked-border-width);
		background-color: var(--_bg);
	}

	:host([checked]:hover) [part="control"],
	:host([checked-ui]:hover) [part="control"],
	:host([role="radio"][checked-ui]:hover) [part="control"],
	:host([role="radio"]:state(checked):hover) [part="control"] {
		border-color: var(--_border-color-checked-hover);
	}

	:host([invalid]) [part="control"] {
		border-color: var(--_border-color-invalid);
		background-color: var(--_bg);
	}

	:host([invalid]:hover) [part="control"] {
		border-color: var(--_border-color-invalid-hover);
		background-color: var(--_bg-invalid-hover);
	}

	:host([invalid][checked]:hover) [part="control"],
	:host([invalid][checked-ui]:hover) [part="control"],
	:host([invalid][role="radio"][checked-ui]:hover) [part="control"],
	:host([invalid][role="radio"]:state(checked):hover) [part="control"] {
		background-color: var(--_bg);
	}

	:host(:focus-visible) {
		outline: none;
	}

	:host(:focus-visible) [part="control"] {
		outline: var(--_outline-width) solid var(--_outline-color);
		outline-offset: var(--_outline-offset);
	}

	:host([disabled]) [part="control"],
	:host([disabled-ui]) [part="control"],
	:host([role="radio"]:state(disabled)) [part="control"] {
		border-color: var(--_border-color-disabled);
		background-color: var(--_bg-disabled);
		cursor: var(--_cursor-disabled);
	}

	:host([disabled]) [part="label"],
	:host([disabled-ui]) [part="label"] {
		color: var(--_label-color-disabled);
		cursor: var(--_cursor-disabled);
	}

	:host([disabled][checked]),
	:host([disabled][checked-ui]),
	:host([disabled-ui][checked-ui]) [part="control"] {
		border-color: var(--_border-color-disabled);
	}

	[part="label"] {
		font-size: var(--_label-font-size);
		line-height: var(--_label-line-height);
		color: var(--_label-color);
		user-select: none;
		cursor: var(--_cursor);
	}

	@media (prefers-reduced-motion: reduce) {
		:host {
			--w-c-radio-transition: none;
		}
	}

	@media (forced-colors: active) {
		:host {
			--w-c-radio-bg: Canvas;
			--w-c-radio-border-color: ButtonText;
			--w-c-radio-border-color-checked: Highlight;
			--w-c-radio-outline-color: Highlight;
			--w-c-radio-bg-disabled: Canvas;
			--w-c-radio-border-color-disabled: GrayText;
			--w-c-radio-label-color: CanvasText;
			--w-c-radio-label-color-disabled: GrayText;
		}

		[part="control"] {
			forced-color-adjust: none;
		}

		:host([checked]) [part="control"],
		:host([checked-ui]) [part="control"],
		:host([role="radio"]:state(checked)) [part="control"] {
			background-color: var(--_border-color-checked);
			border-color: var(--_border-color-checked);
		}

		:host([disabled][checked]),
		:host([disabled][checked-ui]),
		:host([disabled-ui][checked-ui]) [part="control"],
		:host([role="radio"]:state(disabled):state(checked)) [part="control"] {
			background-color: var(--_border-color-disabled);
			border-color: var(--_border-color-disabled);
		}
	}

	:host([type="button"]) [part="control"] {
		display: none;
	}

	:host([type="button"]) [part="label"] {
		align-items: center;
		background: var(--_button-group-background);
		border-color: var(--_button-group-border-color);
		border-style: solid;
		border-bottom-width: var(--_button-group-border-width);
		border-top-width: var(--_button-group-border-width);
		color: var(--_button-group-color-text);
		display: inline-flex;
		flex-direction: column;
		font-size: var(--_button-group-font-size);
		font-weight: var(--_button-group-font-weight);
		height: var(--_button-group-height);
		justify-content: center;
		line-height: var(--_button-group-line-height);
		padding: var(--_button-group-padding);
		transition: var(--_button-group-transition);
	}

	:host([type="button"]:focus-visible) {
		outline: 2px solid var(--w-s-color-border-focus);
		outline-offset: var(--w-outline-offset, 1px);
	}

	:host([type="button"]:first-of-type) [part="label"] {
		border-width: var(--_button-group-border-width);
		border-radius: 8px 0 0 8px;
	}

	:host([type="button"]:last-of-type) [part="label"] {
		border-width: var(--_button-group-border-width);
		border-radius: 0 8px 8px 0;
	}

	:host([type="button"]:hover) [part="label"],
	:host([type="button"][role="radio"]:hover) [part="label"] {
		background: var(--_button-group-background-hover);
		border-color: var(--_button-group-border-color-hover);
	}

	:host([type="button"][checked]) [part="label"],
	:host([type="button"][checked-ui]) [part="label"],
	:host([type="button"][role="radio"]:state(checked)) [part="label"] {
		background: var(--_button-group-background-selected);
		color: var(--_button-group-color-text-selected);
		border-color: var(--_button-group-border-color-selected);
	}
`})))()}var O;function k(){return(k=e((()=>{_(),r(),o(),g(),T(),D(),x(),O=class extends v(a){static{this.styles=[w,h,S,E]}static{this.shadowRootOptions={...a.shadowRootOptions,delegatesFocus:!0}}get tabIndex(){return this._internalTabIndex}set tabIndex(e){this._groupTabIndex=e}#e;#t;#n;constructor(){super(),this.value=null,this.checked=!1,this.disabled=!1,this.required=!1,this.invalid=!1,this.#e=!1,this.#t=!1,this.#n=!1,this.handleClick=()=>{this.isInGroup()||this.disabled||(this.#n=!0,!this.checked&&(this.checked=!0,this.updateComplete.then(()=>{this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))})))},this.handleInvalid=()=>{this.#n=!0,this.updateValidity()},this.handleKeyDown=e=>{if(!this.isInGroup()&&!this.disabled&&!e.defaultPrevented){if([`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`].includes(e.key)){let t=this.getStandaloneNamedRadios().filter(e=>!e.disabled);if(t.length<=1)return;e.preventDefault();let n=t.find(e=>e.checked)??t.find(e=>e===this)??t[0],r=e.key===`ArrowUp`||e.key===`ArrowLeft`?-1:1,i=t[(t.indexOf(n)+r+t.length)%t.length];i.#n=!0,i.checked||(i.checked=!0,i.updateComplete.then(()=>{i.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))})),i.focus();return}if(e.key===` `||e.key===`Spacebar`||e.key===`Enter`){if(e.key===`Enter`&&this.internals.form){this.internals.form.requestSubmit();return}e.preventDefault(),this.click()}}},this.addEventListener(`click`,this.handleClick),this.addEventListener(`invalid`,this.handleInvalid),this.addEventListener(`keydown`,this.handleKeyDown)}connectedCallback(){super.connectedCallback(),this.value=this.getAttribute(`value`)??`on`,this.#e=this.hasAttribute(`checked`),this.checked=this.#e,this.internals.role=`radio`,this.syncAriaDisabled(),this.syncFormValue(),this.updateValidity()}syncAriaDisabled(){this.internals.ariaDisabled=this.disabled?`true`:`false`}syncAriaChecked(){this.internals.ariaChecked=this.checked?`true`:`false`}willUpdate(e){this.shouldSyncFormState(e)&&(this.syncFormValue(),this.updateValidity())}updated(e){super.updated(e),e.has(`checked`)&&(this.syncAriaChecked(),this.checked&&!this.isInGroup()&&(this.uncheckOtherRadios(),this.syncStandaloneTabOrder())),e.has(`disabled`)&&(this.syncAriaDisabled(),this.isInGroup()||this.syncStandaloneTabOrder()),e.has(`invalid`)&&(this.internals.ariaInvalid=this.invalid?`true`:null),e.has(`name`)&&this.checked&&!this.isInGroup()&&this.uncheckOtherRadios()}resetFormControl(){this.checked=this.#e,this.syncFormValue(),this.updateValidity()}get validationMessage(){return this.internals.validationMessage}get validity(){return this.internals.validity}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.#n=!0,this.updateValidity(),this.internals.checkValidity()}isInGroup(){return!!this.closest(`w-radio-group`)}getRadioScope(){return this.internals.form??this.closest(`form`)??document}getStandaloneNamedRadios(){return this.name?[...this.getRadioScope().querySelectorAll(`w-radio[name="${this.name}"]`)].filter(e=>!e.closest(`w-radio-group`)):[this]}syncStandaloneTabOrder(){let e=this.getStandaloneNamedRadios(),t=e.filter(e=>!e.disabled),n=t.find(e=>e.checked)??t[0]??null;e.forEach(e=>{e._standaloneTabIndex=e===n?0:-1})}get _internalTabIndex(){return this.disabled?-1:this._groupTabIndex===void 0?this._standaloneTabIndex===void 0?0:this._standaloneTabIndex:this._groupTabIndex}firstUpdated(){this.isInGroup()||this.syncStandaloneTabOrder()}uncheckOtherRadios(){this.name&&[...this.getRadioScope().querySelectorAll(`w-radio[name="${this.name}"]`)].forEach(e=>{e!==this&&(e.closest(`w-radio-group`)||(e.checked&&=!1))})}updateValidity(){if(this.disabled||this.isInGroup()){this.internals.setValidity({});return}let e=this.required&&!this.checked,t=this.invalid&&!this.#t;if(e){this.#t=!0,this.invalid=this.#n,this.internals.setValidity({valueMissing:!0},this.internals.validationMessage||` `);return}if(this.#t&&=(this.invalid=!1,!1),t){this.internals.setValidity({customError:!0},this.internals.validationMessage||` `);return}this.internals.setValidity({})}syncFormValue(){if(this.disabled){this.setValue(null);return}this.setValue(this.checked?this.value:null)}shouldSyncFormState(e){return e.has(`checked`)||e.has(`value`)||e.has(`disabled`)||e.has(`required`)||e.has(`invalid`)}render(){return l`
			<div part="base" tabindex="${this._internalTabIndex}">
				<div part="control"></div>
				<slot part="label"></slot>
			</div>
		`}},c([s({reflect:!0})],O.prototype,`name`,void 0),c([s({reflect:!0})],O.prototype,`value`,void 0),c([s({type:Boolean,reflect:!0})],O.prototype,`checked`,void 0),c([s({type:Boolean,reflect:!0})],O.prototype,`disabled`,void 0),c([s({type:Boolean,reflect:!0})],O.prototype,`required`,void 0),c([s({type:Boolean,reflect:!0})],O.prototype,`invalid`,void 0),c([s({attribute:!1})],O.prototype,`_groupTabIndex`,void 0),c([s({attribute:!1})],O.prototype,`_standaloneTabIndex`,void 0),customElements.get(`w-radio`)||customElements.define(`w-radio`,O)})))()}var A;function j(){return(j=e((()=>{A=JSON.parse(`{"radio-group.label.optional":["Valgfri"],"radio-group.validation.required":["Vælg en mulighed."]}`)})))()}var M;function N(){return(N=e((()=>{M=JSON.parse(`{"radio-group.label.optional":["Optional"],"radio-group.validation.required":["Please select an option."]}`)})))()}var P;function F(){return(F=e((()=>{P=JSON.parse(`{"radio-group.label.optional":["Valinnainen"],"radio-group.validation.required":["Valitse vaihtoehto."]}`)})))()}var I;function L(){return(L=e((()=>{I=JSON.parse(`{"radio-group.label.optional":["Valgfri"],"radio-group.validation.required":["Velg et alternativ."]}`)})))()}var R;function z(){return(z=e((()=>{R=JSON.parse(`{"radio-group.label.optional":["Valfritt"],"radio-group.validation.required":["Välj ett alternativ."]}`)})))()}var B;function V(){return(V=e((()=>{r(),B=t`
	:host {
		display: block;

		--_label-font-size: var(
			--w-c-radio-group-label-font-size,
			var(--w-font-size-s)
		);
		--_label-line-height: var(
			--w-c-radio-group-label-line-height,
			var(--w-line-height-s)
		);
		--_label-font-weight: var(--w-c-radio-group-label-font-weight, 700);
		--_label-color: var(--w-c-radio-group-label-color, var(--w-s-color-text));
		--_label-color-disabled: var(
			--w-c-radio-group-label-color-disabled,
			var(--w-s-color-text-disabled)
		);
		--_label-padding-bottom: var(--w-c-radio-group-label-padding-bottom, 16px);

		--_optional-font-weight: var(--w-c-radio-group-optional-font-weight, 400);
		--_optional-color: var(
			--w-c-radio-group-optional-color,
			var(--w-s-color-text-subtle)
		);
		--_optional-margin-inline-start: var(
			--w-c-radio-group-optional-margin-inline-start,
			0.5rem
		);

		--_radios-gap: var(--w-c-radio-group-gap, 16px);

		--_help-text-margin-block-start: var(
			--w-c-radio-group-help-text-margin-block-start,
			16px
		);
		--_help-text-font-size: var(
			--w-c-radio-group-help-text-font-size,
			var(--w-font-size-xs)
		);
		--_help-text-line-height: var(
			--w-c-radio-group-help-text-line-height,
			var(--w-line-height-xs)
		);
		--_help-text-color: var(
			--w-c-radio-group-help-text-color,
			var(--w-s-color-text-subtle)
		);
		--_help-text-color-disabled: var(
			--w-c-radio-group-help-text-color-disabled,
			var(--w-s-color-text-disabled)
		);
		--_help-text-color-error: var(
			--w-c-radio-group-help-text-color-error,
			var(--w-s-color-text-negative)
		);
	}

	[part="form-control"] {
		position: relative;

		border: 0;
		padding: 0;
		margin: 0;

		min-inline-size: 0;
	}

	[part="form-control-label"] {
		display: block;
		cursor: pointer;

		font-size: var(--_label-font-size);
		line-height: var(--_label-line-height);
		font-weight: var(--_label-font-weight);
		color: var(--_label-color);

		padding-bottom: var(--_label-padding-bottom);

		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		font-smoothing: grayscale;
	}

	:host([disabled]) [part="form-control-label"] {
		cursor: default;
		color: var(--_label-color-disabled);
	}

	:host([required]) [part="form-control-label"]::after {
		content: var(--wa-form-control-required-content);
		margin-inline-start: var(--wa-form-control-required-content-offset);
	}

	.optional {
		font-weight: var(--_optional-font-weight);
		color: var(--_optional-color);
		margin-inline-start: var(--_optional-margin-inline-start);
	}

	[part~="form-control-input"] {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		gap: var(--_radios-gap);
	}

	[part~="help-text"] {
		margin-block-start: var(--_help-text-margin-block-start);
		font-size: var(--_help-text-font-size);
		line-height: var(--_help-text-line-height);
		color: var(--_help-text-color);
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

	:host([disabled]) [part~="help-text"] {
		color: var(--_help-text-color-disabled);
	}

	:host([data-show-error]) [part~="help-text"] {
		color: var(--_help-text-color-error);
	}

	:host([type="button"]) [part="form-control-input"] {
		flex-direction: row;
		flex-wrap: nowrap;
		gap: 0;
	}
`})))()}var H,U;function W(){return(W=e((()=>{d(),_(),r(),o(),b(),k(),f(),T(),j(),N(),F(),L(),z(),V(),m(),C(),p(M,I,P,A,R),H=()=>u._({id:`radio-group.validation.required`,message:`Please select an option.`,comment:`Shown when required radio group has no selections`}),U=class extends v(a){static{this.styles=[w,B]}static{this.shadowRootOptions={...a.shadowRootOptions,delegatesFocus:!0}}constructor(){super(),this.hasInteracted=!1,this.hasWarnedMissingName=!1,this.autoTabIndex=!1,this.label=``,this.helpText=``,this.optional=!1,this.invalid=!1,this.name=null,this.disabled=!1,this.required=!1,this.defaultCheckedValue=void 0,this.slottedHelpText=null,this.nameManagedRadios=new WeakSet,this.disabledManagedRadios=new WeakSet,this.handleRadioClick=e=>{let t=e.target.closest(`w-radio`);if(!t||t.disabled||this.disabled)return;let n=this.getCheckedValue(),r=this.getAllRadios();this.selectSingleRadio(t,r),this.getCheckedValue()!==n&&this.updateComplete.then(this.emitSelectionChange)},this.handleInvalid=e=>{e.preventDefault(),this.hasInteracted=!0,this.updateValidity()},this.handleHelpTextSlotChange=()=>{this.syncSlottedHelpText(),this.requestUpdate()},this.handleI18nChange=()=>{this.requestUpdate()},this.emitSelectionChange=()=>{this.hasInteracted=!0,this.syncFormValue(),this.updateValidity(),this.requestUpdate(),this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))},this.captureDefaultSelection=()=>{this.defaultCheckedValue===void 0&&(this.defaultCheckedValue=this.getCheckedValue())},this.addEventListener(`keydown`,this.handleKeyDown),this.addEventListener(`click`,this.handleRadioClick),this.addEventListener(`invalid`,this.handleInvalid)}get validationTarget(){return this.querySelector(`:is(w-radio):not([disabled])`)??void 0}connectedCallback(){super.connectedCallback(),this.syncSlottedHelpText(),this.syncFormValue(),this.updateValidity(),this.unsubscribeI18n=u.on(`change`,this.handleI18nChange),this.warnIfMissingName(),this.updateComplete.then(this.captureDefaultSelection)}disconnectedCallback(){this.unsubscribeI18n?.(),this.unsubscribeI18n=void 0,super.disconnectedCallback()}async updated(e){(e.has(`disabled`)||e.has(`name`)||e.has(`required`)||e.has(`invalid`)||e.has(`helpText`))&&(this.syncFormValue(),this.updateValidity(),this.syncRadioElements(),this.syncFormValue(),this.updateValidity())}resetFormControl(){let e=this.defaultCheckedValue??null;this.getAllRadios().forEach(t=>{t.checked=e?t.value===e:!1}),this.syncRadioElements(),this.syncFormValue(),this.updateValidity()}getAllRadios(){return[...this.querySelectorAll(`w-radio`)]}getCheckedValue(){return this.getAllRadios().find(e=>e.checked)?.value??null}getEnabledRadios(e=this.getAllRadios()){return e.filter(e=>!e.disabled)}selectSingleRadio(e,t=this.getAllRadios()){t.forEach(t=>{let n=t===e;t.checked=n,t._groupTabIndex=n?0:-1})}handleLabelClick(){this.focus()}async syncRadioElements(){let e=this.getAllRadios();e.forEach((t,n)=>{t.toggleAttribute(`data-w-radio-first`,n===0),t.toggleAttribute(`data-w-radio-inner`,n!==0&&n!==e.length-1),t.toggleAttribute(`data-w-radio-last`,n===e.length-1),this.syncRadioDisabledState(t),this.name?(!t.getAttribute(`name`)||this.nameManagedRadios.has(t))&&(t.setAttribute(`name`,this.name),this.nameManagedRadios.add(t)):this.nameManagedRadios.has(t)&&(t.removeAttribute(`name`),this.nameManagedRadios.delete(t)),this.type&&t.setAttribute(`type`,this.type)}),await Promise.all(e.map(async e=>e.updateComplete)),this.normalizeCheckedRadios(e),this.syncTabOrder(e)}syncRadioDisabledState(e){if(this.disabled){e.disabled||(e.disabled=!0,this.disabledManagedRadios.add(e));return}this.disabledManagedRadios.has(e)&&(e.disabled=!1,this.disabledManagedRadios.delete(e))}syncTabOrder(e){if(this.disabled){e.forEach(e=>e._groupTabIndex=-1);return}let t=this.getEnabledRadios(e),n=t.find(e=>e.checked);t.length>0&&(n?t.forEach(e=>e._groupTabIndex=e.checked?0:-1):t.forEach((e,t)=>e._groupTabIndex=t===0?0:-1)),e.filter(e=>e.disabled).forEach(e=>e._groupTabIndex=-1)}handleKeyDown(e){if(![`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`,` `].includes(e.key)||this.disabled)return;let t=this.getAllRadios(),n=this.getEnabledRadios(t);if(n.length<=0)return;e.preventDefault();let r=this.getCheckedValue(),i=n.find(e=>e.checked)??n[0],a=e.key===` `?0:[`ArrowUp`,`ArrowLeft`].includes(e.key)?-1:1,o=n.indexOf(i)+a;o<0&&(o=n.length-1),o>=n.length&&(o=0),this.selectSingleRadio(n[o],t),n[o].focus(),this.getCheckedValue()!==r&&this.updateComplete.then(this.emitSelectionChange)}focus(e){if(this.disabled)return;let t=this.getAllRadios(),n=t.find(e=>e.checked),r=t.find(e=>!e.disabled),i=n||r;i&&i.focus(e)}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.hasInteracted=!0,this.updateValidity(),this.internals.checkValidity()}hasSlottedContent(e){if(this.querySelector(`[slot="${e}"]`))return!0;let t=this.shadowRoot?.querySelector(`slot[name="${e}"]`);return t?t.assignedNodes({flatten:!0}).some(e=>e.nodeType===Node.ELEMENT_NODE||e.nodeType===Node.TEXT_NODE&&!!e.textContent?.trim()):!1}syncFormValue(){this.setValue(null)}syncSlottedHelpText(){let e=this.querySelector(`[slot="help-text"]`);this.slottedHelpText=e?.textContent?.trim()||null}updateValidity(){this.warnIfMissingName();let e=this.required&&!this.getCheckedValue(),t=e&&this.hasInteracted,n=this.invalid||this.hasAttribute(`invalid`),r=n||t;if(this.toggleAttribute(`data-show-error`,r),this.disabled){this.internals.setValidity({}),this.syncChildInvalid(!1),this.syncHostTabIndex(!1);return}if(this.syncHostTabIndex(r),e){this.setValidityState({valueMissing:!0}),this.syncChildInvalid(r);return}if(n){this.setValidityState({customError:!0}),this.syncChildInvalid(!0);return}this.internals.setValidity({}),this.syncChildInvalid(!1)}normalizeCheckedRadios(e){let t=e.find(e=>e.checked);t&&e.forEach(e=>{e!==t&&(e.checked=!1)})}syncChildInvalid(e){this.getAllRadios().forEach(t=>{t.invalid=e})}setValidityState(e){let t=this.validationTarget;this.internals.setValidity(e,` `,t??void 0)}syncHostTabIndex(e){if(!this.hasAttribute(`tabindex`)||this.autoTabIndex){if(e){this.setAttribute(`tabindex`,`0`),this.autoTabIndex=!0;return}this.autoTabIndex&&=(this.removeAttribute(`tabindex`),!1)}}warnIfMissingName(){this.hasWarnedMissingName||this.internals.form&&(this.name&&this.name.trim().length>0||(console.warn(`w-radio-group: "name" is required for form submission.`),this.hasWarnedMissingName=!0))}render(){let e=this.hasSlottedContent(`label`),t=this.hasSlottedContent(`help-text`),n=this.label?!0:!!e,r=this.helpText?!0:!!t,a=this.required&&!this.getCheckedValue()&&this.hasInteracted,o=this.invalid||this.hasAttribute(`invalid`),s=o||a,c=s?o&&this.helpText?this.helpText:H():this.helpText,d=s||r,f=n?`label`:void 0,p=d?`help-text`:void 0,m=this.slottedHelpText||void 0;return l`
			<fieldset
				part="form-control"
				role="radiogroup"
				aria-labelledby=${y(f)}
				aria-describedby=${y(p)}
				aria-errormessage="error-message"
				aria-invalid=${y(s?`true`:void 0)}
			>
				${n?l`
								<label
									part="form-control-label"
									id="label"
									@click=${this.handleLabelClick}
								>
									<slot name="label">${this.label}</slot>
									${this.optional&&!this.required?l`<span class="optional">
													${u._({id:`radio-group.label.optional`,message:`Optional`,comment:`Shown behind label when marked as optional`})}
												</span>`:i}
									${this.tooltip?l`
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
												`:i}
								</label>
							`:i}

				<slot
					part="form-control-input"
					@slotchange=${this.syncRadioElements}
				></slot>

				${d?l`
								<div
									id="help-text"
									part="help-text"
									aria-label=${y(m)}
								>
									<slot
										name="help-text"
										@slotchange=${this.handleHelpTextSlotChange}
										>${c}</slot
									>
								</div>
							`:null}
			</fieldset>
		`}},c([n()],U.prototype,`hasInteracted`,void 0),c([s()],U.prototype,`label`,void 0),c([s({attribute:`help-text`})],U.prototype,`helpText`,void 0),c([s({type:Boolean,reflect:!0})],U.prototype,`optional`,void 0),c([s({type:String,reflect:!0})],U.prototype,`tooltip`,void 0),c([s({type:Boolean,reflect:!0})],U.prototype,`invalid`,void 0),c([s({reflect:!0})],U.prototype,`name`,void 0),c([s({type:Boolean,reflect:!0})],U.prototype,`disabled`,void 0),c([s({type:Boolean,reflect:!0})],U.prototype,`required`,void 0),c([s({reflect:!0})],U.prototype,`type`,void 0),customElements.get(`w-radio-group`)||customElements.define(`w-radio-group`,U)})))()}export{k as n,W as t};