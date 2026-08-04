import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{c as t,d as n,h as r,l as i,r as a,s as o,t as s,x as c,y as l}from"./decorate-Bt2QF_uA.js";import{a as u,o as d,r as f,t as p}from"./i18n-CkjYRTT1.js";import{n as m,t as h}from"./index.m-DHqwZk2H.js";import{t as g}from"./query-BHY-nhsh.js";import{n as _,t as v}from"./class-map-DaGxfNVq.js";import{n as y,t as b}from"./styles-Cw_r5k83.js";import{n as x,t as S}from"./FormControlMixin-BCJbRrUC.js";import{r as C,t as w}from"./if-defined-DBI32Ir5.js";var T;function E(){return(E=e((()=>{T=JSON.parse(`{"textfield.label.optional":["Valgfri"]}`)})))()}var D;function O(){return(O=e((()=>{D=JSON.parse(`{"textfield.label.optional":["Optional"]}`)})))()}var k;function A(){return(A=e((()=>{k=JSON.parse(`{"textfield.label.optional":["Valinnainen"]}`)})))()}var j;function M(){return(M=e((()=>{j=JSON.parse(`{"textfield.label.optional":["Valgfri"]}`)})))()}var N;function P(){return(P=e((()=>{N=JSON.parse(`{"textfield.label.optional":["Valfritt"]}`)})))()}var F;function I(){return(I=e((()=>{t(),F=l`
	.w-textfield {
		--_input-padding-top: 12px;
		--_input-padding-left: 8px;
		--_input-padding-right: 8px;
		position: relative;
	}

	.w-textfield--has-prefix {
		--_input-padding-left: 40px;
	}

	.w-textfield--has-suffix {
		--_input-padding-right: var(--w-prefix-width, 40px);
	}

	.w-textfield__input-wrapper {
		position: relative;
		overflow: hidden;
	}

	.w-textfield__input-wrapper:focus-within .w-textfield__mask {
		display: none;
	}

	/* Hide the native browser controls */
	input[type="number"] {
		-moz-appearance: textfield;
	}

	input[type="number"]::-webkit-inner-spin-button {
		display: none;
	}

	/* It's supposed to behave like a placeholder, but look like a value. Don't tell the designers 🤫 */
	input::placeholder {
		color: var(
			--w-textfield-placeholder-color-text,
			var(--w-s-color-text-placeholder)
		);
	}

	/* Could also consider giving the input mask a background color instead of this */
	.w-textfield__input-wrapper:has(.w-textfield__mask):not(:focus-within) input {
		color: transparent;
	}

	.w-textfield__mask {
		display: block;
		border: 1px solid transparent;
		top: var(--_input-padding-top);
		left: var(--_input-padding-left);
		right: var(--_input-padding-right);
		position: absolute;
		pointer-events: none;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		z-index: 1;
	}
`})))()}var L;function R(){return(R=e((()=>{t(),L=c(`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.align-text-top{vertical-align:text-top}.focus\\:\\[--w-outline-offset\\:-2px\\]:focus{--w-outline-offset:-2px}.bg-transparent{background-color:#0000}.appearance-none{-webkit-appearance:none;appearance:none}.border-1{border-width:1px}.rounded-4{border-radius:4px}.caret-current{caret-color:currentColor}.block{display:block}.inline{display:inline}.focusable:focus{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:focus-visible{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:not(:focus-visible){outline:none}.outline-\\[--w-s-color-border-negative\\]\\!{outline-color:var(--w-s-color-border-negative)!important}.static{position:static}.s-bg{background-color:var(--w-s-color-background)}.s-bg-disabled-subtle{background-color:var(--w-s-color-background-disabled-subtle)}.s-text{color:var(--w-s-color-text)}.s-text-disabled{color:var(--w-s-color-text-disabled)}.s-text-negative{color:var(--w-s-color-text-negative)}.placeholder\\:s-text-placeholder::placeholder{color:var(--w-s-color-text-placeholder)}.s-border-disabled{border-color:var(--w-s-color-border-disabled)}.s-border-negative{border-color:var(--w-s-color-border-negative)}.s-border-strong{border-color:var(--w-s-color-border-strong)}.hover\\:s-border-negative-hover:hover{border-color:var(--w-s-color-border-negative-hover)}.hover\\:s-border-strong-hover:hover{border-color:var(--w-s-color-border-strong-hover)}.active\\:s-border-selected:active{border-color:var(--w-s-color-border-selected)}.w-full{width:100%}.min-h-\\[42\\]{min-height:4.2rem}.m-0{margin:0}.mb-0{margin-bottom:0}.ml-4{margin-left:.4rem}.p-0{padding:0}.px-8{padding-left:.8rem;padding-right:.8rem}.py-12{padding-top:1.2rem;padding-bottom:1.2rem}.pl-0{padding-left:0}.pr-40{padding-right:4rem}.pl-\\[var\\(--w-prefix-width\\,_40px\\)\\]{padding-left:var(--w-prefix-width,40px)}.visible{visibility:visible}.pointer-events-none{pointer-events:none}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.text-m{font-size:var(--w-font-size-m);line-height:var(--w-line-height-m)}.leading-m{line-height:var(--w-line-height-m)}@media (min-width:480px){.sm\\:min-h-\\[45\\]{min-height:4.5rem}}`)})))()}var z,B;function V(){return(V=e((()=>{t(),z=l`
	/* Label component tokens with semantic fallbacks */
	label {
		/* Internal tokens - not part of public API */
		--_color: var(--w-c-input-label-color, var(--w-s-color-text));
		--_font-size: var(--w-c-input-label-font-size, var(--w-font-size-s));
		--_line-height: var(--w-c-input-label-line-height, var(--w-line-height-s));
		--_font-weight: var(--w-c-input-label-font-weight, 700);
		--_padding-bottom: var(--w-c-input-label-padding-bottom, 0.4rem);
		--_cursor: var(--w-c-input-label-cursor, pointer);
		--_display: var(--w-c-input-label-display, block);

		/* Apply styles */
		display: var(--_display);
		position: relative;
		font-size: var(--_font-size);
		line-height: var(--_line-height);
		font-weight: var(--_font-weight);
		padding-bottom: var(--_padding-bottom);
		cursor: var(--_cursor);
		color: var(--_color);
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	/* Optional text styling */
	label span {
		--_padding-left: var(--w-c-input-optional-padding-left, 0.4rem);
		--_font-weight: var(--w-c-input-optional-font-weight, 400);
		--_font-size: var(--w-c-input-optional-font-size, var(--w-font-size-s));
		--_line-height: var(
			--w-c-input-optional-line-height,
			var(--w-line-height-s)
		);
		--_color: var(--w-c-input-optional-color, var(--w-s-color-text-subtle));

		padding-left: var(--_padding-left);
		font-weight: var(--_font-weight);
		font-size: var(--_font-size);
		line-height: var(--_line-height);
		color: var(--_color);
	}
`,B=l`
	/* Help text component tokens with semantic fallbacks */
	:host {
		--_help-text-color: var(
			--w-c-input-help-text-color,
			var(--w-s-color-text-subtle)
		);
		--_help-text-font-size: var(
			--w-c-input-help-text-font-size,
			var(--w-font-size-xs)
		);
		--_help-text-line-height: var(
			--w-c-input-help-text-line-height,
			var(--w-line-height-xs)
		);
		--_help-text-margin-top: var(--w-c-input-help-text-margin-top, 0.4rem);
		--_help-text-display: var(--w-c-input-help-text-display, block);
	}

	/* Invalid state overrides color */
	:host([invalid]) {
		--_help-text-color: var(
			--w-c-input-help-text-color-invalid,
			var(--w-s-color-text-negative)
		);
	}

	.help-text {
		font-size: var(--_help-text-font-size);
		line-height: var(--_help-text-line-height);
		margin-top: var(--_help-text-margin-top);
		display: var(--_help-text-display);
		color: var(--_help-text-color);
	}
`})))()}var H,U;function W(){return(W=e((()=>{h(),d(),x(),t(),a(),v(),w(),f(),b(),E(),O(),A(),M(),P(),I(),R(),V(),H={base:`block text-m leading-m mb-0 px-8 py-12 rounded-4 w-full focusable focus:[--w-outline-offset:-2px] caret-current`,default:`border-1 s-text s-bg s-border-strong hover:s-border-strong-hover active:s-border-selected`,disabled:`border-1 s-text-disabled s-bg-disabled-subtle s-border-disabled pointer-events-none`,invalid:`border-1 s-text-negative s-bg s-border-negative hover:s-border-negative-hover outline-[--w-s-color-border-negative]!`,readOnly:`pl-0 bg-transparent pointer-events-none`,placeholder:`placeholder:s-text-placeholder`,suffix:`pr-40`,prefix:`pl-[var(--w-prefix-width,_40px)]`,textArea:`min-h-[42] sm:min-h-[45]`},U=class extends S(i){static{this.shadowRootOptions={...i.shadowRootOptions,delegatesFocus:!0}}constructor(){super(),this.disabled=!1,this.invalid=!1,this.optional=!1,this.readOnly=!1,this.readonly=!1,this.required=!1,this._hasPrefix=!1,this._hasSuffix=!1,this.#t=void 0,p(D,j,k,T,N)}#e(e){e.key===`Enter`&&this.internals.form&&this.internals.form.requestSubmit()}updated(e){e.has(`value`)&&this.value!==void 0&&(this.setValue(this.value),this.formatter&&this.mask&&(this.mask.innerText=this.formatter(this.value)))}#t;static{this.styles=[y,L,F,z,B]}firstUpdated(){this.#t=this.value}resetFormControl(){this.value=this.#t}get _inputstyles(){return m([H.base,this._hasSuffix&&H.suffix,this._hasPrefix&&H.prefix,!this.invalid&&!this.disabled&&!(this.readonly||this.readOnly)&&H.default,this.invalid&&!this.disabled&&!(this.readonly||this.readOnly)&&H.invalid,!this.invalid&&this.disabled&&!(this.readonly||this.readOnly)&&H.disabled,!this.invalid&&!this.disabled&&(this.readonly||this.readOnly)&&H.readOnly])}get _helptextstyles(){return`help-text`}get _label(){if(this.label){let e=this.label.length&&this.optional&&!this.required,t=!!this.tooltip;return r`
				<label for="${this._id}">
					${this.label}${e?r`
									<span>
										${u._({id:`textfield.label.optional`,message:`Optional`,comment:`Shown behind label when marked as optional`})}
									</span>
								`:n}
					${t?r`
									<button
										id="tooltip-target"
										class="appearance-none align-text-top bg-transparent m-0 p-0 ml-4"
										part="tooltip-target"
										aria-details="tooltip"
									>
										<w-icon name="Info" size="small"></w-icon>
									</button>
									<w-tooltip for="tooltip-target" id="tooltip">
										${this.tooltip}
									</w-tooltip>
								`:n}
				</label>
			`}}get _helpId(){if(this.helpText)return`${this._id}__hint`}get _id(){return`textfield`}get _error(){if(this.invalid&&this._helpId)return this._helpId}handler(e){let{name:t,value:n}=e.currentTarget;this.value=n;let r={name:t,value:n,target:e.target},i=new Proxy(r,{get(e,t){return typeof window<`u`&&(window.location.host.startsWith(`www`)||console.warn(`w-textfield's CustomEvent is deprecated, please use the browser-native events instead (e.g. replace e.detail.value with e.target.value)`)),e[t]}}),a=new CustomEvent(e.type,{detail:i});this.dispatchEvent(a)}prefixSlotChange(){this.renderRoot.querySelector(`slot[name=prefix]`).assignedElements().length&&(this._hasPrefix=!0)}suffixSlotChange(){this.renderRoot.querySelector(`slot[name=suffix]`).assignedElements().length&&(this._hasSuffix=!0)}render(){return r`
			${this._label}
			<div
				class="${_({"w-textfield":!0,"w-textfield--has-prefix":this._hasPrefix,"w-textfield--has-suffix":this._hasSuffix})}"
			>
				<div class="w-textfield__input-wrapper">
					${this.formatter?r`<div class="w-textfield__mask"></div>`:n}
					<input
						part="input"
						class="${this._inputstyles}"
						type="${this.type||`text`}"
						min="${C(this.min)}"
						max="${C(this.max)}"
						size="${C(this.size)}"
						minlength="${C(this.minLength||this.minlength)}"
						maxlength="${C(this.maxLength||this.maxlength)}"
						name="${C(this.name)}"
						pattern="${C(this.pattern)}"
						placeholder="${C(this.placeholder)}"
						.value="${this.value||``}"
						aria-describedby="${C(this._helpId||(this.ariaDescription?`aria-description`:void 0))}"
						aria-errormessage="${C(this._error)}"
						aria-invalid="${C(this.invalid)}"
						id="${this._id}"
						?disabled="${this.disabled}"
						?readonly="${this.readonly||this.readOnly}"
						?required="${this.required}"
						autocomplete="${C(this.autocomplete)}"
						step="${C(this.step)}"
						@blur="${this.handler}"
						@change="${this.handler}"
						@input="${this.handler}"
						@focus="${this.handler}"
						@keydown="${this.#e}"
					/>
				</div>
				<slot @slotchange="${this.prefixSlotChange}" name="prefix"></slot>
				<slot @slotchange="${this.suffixSlotChange}" name="suffix"></slot>
			</div>
			<span class="sr-only" id="aria-description">${this.ariaDescription}</span>
			${this.helpText&&r`<div class="${this._helptextstyles}" id="${this._helpId}">
					${this.helpText}
				</div>`}
		`}},s([o({type:Boolean,reflect:!0})],U.prototype,`disabled`,void 0),s([o({type:Boolean,reflect:!0})],U.prototype,`invalid`,void 0),s([o({type:String,reflect:!0})],U.prototype,`label`,void 0),s([o({type:String,reflect:!0,attribute:`help-text`})],U.prototype,`helpText`,void 0),s([o({type:Boolean,reflect:!0})],U.prototype,`optional`,void 0),s([o({type:String,reflect:!0})],U.prototype,`size`,void 0),s([o({type:Number,reflect:!0})],U.prototype,`max`,void 0),s([o({type:Number,reflect:!0})],U.prototype,`min`,void 0),s([o({type:Number,reflect:!0,attribute:`min-length`})],U.prototype,`minLength`,void 0),s([o({type:Number,reflect:!0})],U.prototype,`minlength`,void 0),s([o({type:Number,reflect:!0,attribute:`max-length`})],U.prototype,`maxLength`,void 0),s([o({type:Number,reflect:!0})],U.prototype,`maxlength`,void 0),s([o({type:String,reflect:!0})],U.prototype,`pattern`,void 0),s([o({type:String,reflect:!0})],U.prototype,`placeholder`,void 0),s([o({type:Boolean,reflect:!0,attribute:`read-only`})],U.prototype,`readOnly`,void 0),s([o({type:Boolean,reflect:!0})],U.prototype,`readonly`,void 0),s([o({type:Boolean,reflect:!0})],U.prototype,`required`,void 0),s([o({type:String,reflect:!0})],U.prototype,`type`,void 0),s([o({type:String,reflect:!0})],U.prototype,`value`,void 0),s([o({type:String,reflect:!0})],U.prototype,`name`,void 0),s([o({type:Number,reflect:!0})],U.prototype,`step`,void 0),s([o({type:String,reflect:!0})],U.prototype,`autocomplete`,void 0),s([o({type:String,reflect:!0})],U.prototype,`tooltip`,void 0),s([o({attribute:!1})],U.prototype,`formatter`,void 0),s([g(`.w-textfield__mask`)],U.prototype,`mask`,void 0),s([o({type:Boolean})],U.prototype,`_hasPrefix`,void 0),s([o({type:Boolean})],U.prototype,`_hasSuffix`,void 0),customElements.get(`w-textfield`)||customElements.define(`w-textfield`,U)})))()}export{W as t};