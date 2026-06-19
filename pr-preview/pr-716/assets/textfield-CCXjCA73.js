import{i as e}from"./preload-helper-xPQekRTU.js";import{Bt as t,D as n,E as r,Ht as i,J as a,Kt as o,Lt as s,O as c,Rt as l,Wt as u,b as d,f,h as p,j as m,k as h,l as g,m as _,p as v,q as y,u as b,x}from"./iframe-k_T8YB6A.js";import{n as S,t as C}from"./form-control-DtXadPi-.js";import{r as w,t as T}from"./if-defined-C2gtt9fo.js";var E,D=e((()=>{E=JSON.parse(`{"textfield.label.optional":["Valgfri"]}`)})),O,k=e((()=>{O=JSON.parse(`{"textfield.label.optional":["Optional"]}`)})),A,j=e((()=>{A=JSON.parse(`{"textfield.label.optional":["Valinnainen"]}`)})),M,N=e((()=>{M=JSON.parse(`{"textfield.label.optional":["Valgfri"]}`)})),P,F=e((()=>{P=JSON.parse(`{"textfield.label.optional":["Valfritt"]}`)})),I,L=e((()=>{s(),I=u`
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
`})),R,z=e((()=>{s(),R=o(`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.focus\\:\\[--w-outline-offset\\:-2px\\]:focus{--w-outline-offset:-2px}.bg-transparent{background-color:#0000}.border-1{border-width:1px}.rounded-4{border-radius:4px}.caret-current{caret-color:currentColor}.block{display:block}.focusable:focus{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:focus-visible{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:not(:focus-visible){outline:none}.outline-\\[--w-s-color-border-negative\\]\\!{outline-color:var(--w-s-color-border-negative)!important}.relative{position:relative}.static{position:static}.s-bg{background-color:var(--w-s-color-background)}.s-bg-disabled-subtle{background-color:var(--w-s-color-background-disabled-subtle)}.s-text{color:var(--w-s-color-text)}.s-text-disabled{color:var(--w-s-color-text-disabled)}.s-text-negative{color:var(--w-s-color-text-negative)}.s-text-subtle{color:var(--w-s-color-text-subtle)}.placeholder\\:s-text-placeholder::placeholder{color:var(--w-s-color-text-placeholder)}.s-border-disabled{border-color:var(--w-s-color-border-disabled)}.s-border-negative{border-color:var(--w-s-color-border-negative)}.s-border-strong{border-color:var(--w-s-color-border-strong)}.hover\\:s-border-negative-hover:hover{border-color:var(--w-s-color-border-negative-hover)}.hover\\:s-border-strong-hover:hover{border-color:var(--w-s-color-border-strong-hover)}.active\\:s-border-selected:active{border-color:var(--w-s-color-border-selected)}.w-full{width:100%}.min-h-\\[42\\]{min-height:4.2rem}.mb-0{margin-bottom:0}.mt-4{margin-top:.4rem}.px-8{padding-left:.8rem;padding-right:.8rem}.py-12{padding-top:1.2rem;padding-bottom:1.2rem}.pb-4{padding-bottom:.4rem}.pl-0{padding-left:0}.pl-8{padding-left:.8rem}.pr-40{padding-right:4rem}.pl-\\[var\\(--w-prefix-width\\,_40px\\)\\]{padding-left:var(--w-prefix-width,40px)}.visible{visibility:visible}.cursor-pointer{cursor:pointer}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-smoothing:grayscale}.font-bold{font-weight:700}.font-normal{font-weight:400}.pointer-events-none{pointer-events:none}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.text-m{font-size:var(--w-font-size-m);line-height:var(--w-line-height-m)}.text-s{font-size:var(--w-font-size-s);line-height:var(--w-line-height-s)}.text-xs{font-size:var(--w-font-size-xs);line-height:var(--w-line-height-xs)}.leading-m{line-height:var(--w-line-height-m)}@media (min-width:480px){.sm\\:min-h-\\[45\\]{min-height:4.5rem}}`)})),B,V,H=e((()=>{s(),B=u`
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
		--_padding-left: var(--w-c-input-optional-padding-left, 0.8rem);
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
`,V=u`
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
`})),U,W,G=e((()=>{n(),a(),C(),s(),d(),_(),T(),m(),g(),D(),k(),j(),N(),F(),L(),z(),H(),v(),U={base:`block text-m leading-m mb-0 px-8 py-12 rounded-4 w-full focusable focus:[--w-outline-offset:-2px] caret-current`,default:`border-1 s-text s-bg s-border-strong hover:s-border-strong-hover active:s-border-selected`,disabled:`border-1 s-text-disabled s-bg-disabled-subtle s-border-disabled pointer-events-none`,invalid:`border-1 s-text-negative s-bg s-border-negative hover:s-border-negative-hover outline-[--w-s-color-border-negative]!`,readOnly:`pl-0 bg-transparent pointer-events-none`,placeholder:`placeholder:s-text-placeholder`,suffix:`pr-40`,prefix:`pl-[var(--w-prefix-width,_40px)]`,textArea:`min-h-[42] sm:min-h-[45]`},W=class extends S(l){static{this.shadowRootOptions={...l.shadowRootOptions,delegatesFocus:!0}}constructor(){super(),this.disabled=!1,this.invalid=!1,this.optional=!1,this.readOnly=!1,this.readonly=!1,this.required=!1,this._hasPrefix=!1,this._hasSuffix=!1,this.#t=void 0,h(O,M,A,E,P)}#e(e){e.key===`Enter`&&this.internals.form&&this.internals.form.requestSubmit()}updated(e){e.has(`value`)&&this.value!==void 0&&(this.setValue(this.value),this.formatter&&this.mask&&(this.mask.innerText=this.formatter(this.value)))}#t;static{this.styles=[b,R,I,B,V]}firstUpdated(){this.#t=this.value}resetFormControl(){this.value=this.#t}get _inputstyles(){return c([U.base,this._hasSuffix&&U.suffix,this._hasPrefix&&U.prefix,!this.invalid&&!this.disabled&&!(this.readonly||this.readOnly)&&U.default,this.invalid&&!this.disabled&&!(this.readonly||this.readOnly)&&U.invalid,!this.invalid&&this.disabled&&!(this.readonly||this.readOnly)&&U.disabled,!this.invalid&&!this.disabled&&(this.readonly||this.readOnly)&&U.readOnly])}get _helptextstyles(){return`help-text`}get _label(){if(this.label)return i`<label for="${this._id}"
				>${this.label}${this.label.length&&this.optional&&!this.required?i` <span>
							${y._({id:`textfield.label.optional`,message:`Optional`,comment:`Shown behind label when marked as optional`})}
						</span>`:t}</label
			>`}get _helpId(){if(this.helpText)return`${this._id}__hint`}get _id(){return`textfield`}get _error(){if(this.invalid&&this._helpId)return this._helpId}handler(e){let{name:t,value:n}=e.currentTarget;this.value=n;let r=new CustomEvent(e.type,{detail:{name:t,value:n,target:e.target}});this.dispatchEvent(r)}prefixSlotChange(){this.renderRoot.querySelector(`slot[name=prefix]`).assignedElements().length&&(this._hasPrefix=!0)}suffixSlotChange(){this.renderRoot.querySelector(`slot[name=suffix]`).assignedElements().length&&(this._hasSuffix=!0)}render(){return i`
			${this._label}
			<div
				class="${p({"w-textfield":!0,"w-textfield--has-prefix":this._hasPrefix,"w-textfield--has-suffix":this._hasSuffix})}"
			>
				<div class="w-textfield__input-wrapper">
					${this.formatter?i`<div class="w-textfield__mask"></div>`:t}
					<input
						part="input"
						class="${this._inputstyles}"
						type="${this.type||`text`}"
						min="${w(this.min)}"
						max="${w(this.max)}"
						size="${w(this.size)}"
						minlength="${w(this.minLength||this.minlength)}"
						maxlength="${w(this.maxLength||this.maxlength)}"
						name="${w(this.name)}"
						pattern="${w(this.pattern)}"
						placeholder="${w(this.placeholder)}"
						.value="${this.value||``}"
						aria-describedby="${w(this._helpId||(this.ariaDescription?`aria-description`:void 0))}"
						aria-errormessage="${w(this._error)}"
						aria-invalid="${w(this.invalid)}"
						id="${this._id}"
						?disabled="${this.disabled}"
						?readonly="${this.readonly||this.readOnly}"
						?required="${this.required}"
						autocomplete="${w(this.autocomplete)}"
						step="${w(this.step)}"
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
			${this.helpText&&i`<div class="${this._helptextstyles}" id="${this._helpId}">
				${this.helpText}
			</div>`}
		`}},f([r({type:Boolean,reflect:!0})],W.prototype,`disabled`,void 0),f([r({type:Boolean,reflect:!0})],W.prototype,`invalid`,void 0),f([r({type:String,reflect:!0})],W.prototype,`label`,void 0),f([r({type:String,reflect:!0,attribute:`help-text`})],W.prototype,`helpText`,void 0),f([r({type:Boolean,reflect:!0})],W.prototype,`optional`,void 0),f([r({type:String,reflect:!0})],W.prototype,`size`,void 0),f([r({type:Number,reflect:!0})],W.prototype,`max`,void 0),f([r({type:Number,reflect:!0})],W.prototype,`min`,void 0),f([r({type:Number,reflect:!0,attribute:`min-length`})],W.prototype,`minLength`,void 0),f([r({type:Number,reflect:!0})],W.prototype,`minlength`,void 0),f([r({type:Number,reflect:!0,attribute:`max-length`})],W.prototype,`maxLength`,void 0),f([r({type:Number,reflect:!0})],W.prototype,`maxlength`,void 0),f([r({type:String,reflect:!0})],W.prototype,`pattern`,void 0),f([r({type:String,reflect:!0})],W.prototype,`placeholder`,void 0),f([r({type:Boolean,reflect:!0,attribute:`read-only`})],W.prototype,`readOnly`,void 0),f([r({type:Boolean,reflect:!0})],W.prototype,`readonly`,void 0),f([r({type:Boolean,reflect:!0})],W.prototype,`required`,void 0),f([r({type:String,reflect:!0})],W.prototype,`type`,void 0),f([r({type:String,reflect:!0})],W.prototype,`value`,void 0),f([r({type:String,reflect:!0})],W.prototype,`name`,void 0),f([r({type:Number,reflect:!0})],W.prototype,`step`,void 0),f([r({type:String,reflect:!0})],W.prototype,`autocomplete`,void 0),f([r({attribute:!1})],W.prototype,`formatter`,void 0),f([x(`.w-textfield__mask`)],W.prototype,`mask`,void 0),f([r({type:Boolean})],W.prototype,`_hasPrefix`,void 0),f([r({type:Boolean})],W.prototype,`_hasSuffix`,void 0),customElements.get(`w-textfield`)||customElements.define(`w-textfield`,W)}));export{G as t};