import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,c as n,d as r,h as i,l as a,r as o,s,t as c,x as l,y as u}from"./decorate-Bt2QF_uA.js";import{a as d,o as f,r as p,t as m}from"./i18n-CkjYRTT1.js";import{n as h,t as g}from"./index.m-DHqwZk2H.js";import{t as _}from"./query-BHY-nhsh.js";import{n as v,t as y}from"./class-map-DaGxfNVq.js";import{t as b}from"./icon-CD69d68Q.js";import{n as x,t as S}from"./styles-Cw_r5k83.js";import{n as C,t as w}from"./FormControlMixin-BCJbRrUC.js";import{r as T,t as E}from"./if-defined-DBI32Ir5.js";import{n as D,t as O}from"./utils-qj3txzlQ.js";import{t as k}from"./tooltip-D5IbvAIJ.js";var A;function j(){return(j=e((()=>{A=JSON.parse(`{"textfield.label.optional":["Valgfri"]}`)})))()}var M;function N(){return(N=e((()=>{M=JSON.parse(`{"textfield.label.optional":["Optional"]}`)})))()}var P;function F(){return(F=e((()=>{P=JSON.parse(`{"textfield.label.optional":["Valinnainen"]}`)})))()}var I;function L(){return(L=e((()=>{I=JSON.parse(`{"textfield.label.optional":["Valgfri"]}`)})))()}var R;function z(){return(z=e((()=>{R=JSON.parse(`{"textfield.label.optional":["Valfritt"]}`)})))()}var B;function V(){return(V=e((()=>{n(),B=u`
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
`})))()}var H;function U(){return(U=e((()=>{n(),H=l(`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.align-text-top{vertical-align:text-top}.focus\\:\\[--w-outline-offset\\:-2px\\]:focus{--w-outline-offset:-2px}.bg-transparent{background-color:#0000}.appearance-none{-webkit-appearance:none;appearance:none}.border-1{border-width:1px}.rounded-4{border-radius:4px}.caret-current{caret-color:currentColor}.block{display:block}.inline{display:inline}.focusable:focus{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:focus-visible{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:not(:focus-visible){outline:none}.outline-\\[--w-s-color-border-negative\\]\\!{outline-color:var(--w-s-color-border-negative)!important}.static{position:static}.s-bg{background-color:var(--w-s-color-background)}.s-bg-disabled-subtle{background-color:var(--w-s-color-background-disabled-subtle)}.s-text{color:var(--w-s-color-text)}.s-text-disabled{color:var(--w-s-color-text-disabled)}.s-text-negative{color:var(--w-s-color-text-negative)}.placeholder\\:s-text-placeholder::placeholder{color:var(--w-s-color-text-placeholder)}.s-border-disabled{border-color:var(--w-s-color-border-disabled)}.s-border-negative{border-color:var(--w-s-color-border-negative)}.s-border-strong{border-color:var(--w-s-color-border-strong)}.hover\\:s-border-negative-hover:hover{border-color:var(--w-s-color-border-negative-hover)}.hover\\:s-border-strong-hover:hover{border-color:var(--w-s-color-border-strong-hover)}.active\\:s-border-selected:active{border-color:var(--w-s-color-border-selected)}.w-full{width:100%}.min-h-\\[42\\]{min-height:4.2rem}.m-0{margin:0}.mb-0{margin-bottom:0}.ml-4{margin-left:.4rem}.p-0{padding:0}.px-8{padding-left:.8rem;padding-right:.8rem}.py-12{padding-top:1.2rem;padding-bottom:1.2rem}.pl-0{padding-left:0}.pr-40{padding-right:4rem}.pl-\\[var\\(--w-prefix-width\\,_40px\\)\\]{padding-left:var(--w-prefix-width,40px)}.visible{visibility:visible}.pointer-events-none{pointer-events:none}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.text-m{font-size:var(--w-font-size-m);line-height:var(--w-line-height-m)}.leading-m{line-height:var(--w-line-height-m)}@media (min-width:480px){.sm\\:min-h-\\[45\\]{min-height:4.5rem}}`)})))()}var W,G;function K(){return(K=e((()=>{n(),W=u`
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
`,G=u`
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
`})))()}var q,J;function Y(){return(Y=e((()=>{g(),f(),C(),n(),o(),y(),E(),p(),S(),D(),j(),N(),F(),L(),z(),V(),U(),K(),b(),k(),q={base:`block text-m leading-m mb-0 px-8 py-12 rounded-4 w-full focusable focus:[--w-outline-offset:-2px] caret-current`,default:`border-1 s-text s-bg s-border-strong hover:s-border-strong-hover active:s-border-selected`,disabled:`border-1 s-text-disabled s-bg-disabled-subtle s-border-disabled pointer-events-none`,invalid:`border-1 s-text-negative s-bg s-border-negative hover:s-border-negative-hover outline-[--w-s-color-border-negative]!`,readOnly:`pl-0 bg-transparent pointer-events-none`,placeholder:`placeholder:s-text-placeholder`,suffix:`pr-40`,prefix:`pl-[var(--w-prefix-width,_40px)]`,textArea:`min-h-[42] sm:min-h-[45]`},J=class extends w(a){static{this.shadowRootOptions={...a.shadowRootOptions,delegatesFocus:!0}}constructor(){super(),this.disabled=!1,this.invalid=!1,this.optional=!1,this.readOnly=!1,this.readonly=!1,this.required=!1,this._hasPrefix=!1,this._hasSuffix=!1,this._hasHelpTextSlot=!1,this.#e=new O(this),this.#r=void 0,m(M,I,P,A,R)}#e;get#t(){return this.helpText!==void 0||this._hasHelpTextSlot}#n(e){this.#e.submit(e)}updated(e){e.has(`value`)&&this.value!==void 0&&(this.setValue(this.value),this.formatter&&this.mask&&(this.mask.innerText=this.formatter(this.value)))}#r;static{this.styles=[x,H,B,W,G]}firstUpdated(){this.#r=this.value}resetFormControl(){this.value=this.#r}get _inputstyles(){return h([q.base,this._hasSuffix&&q.suffix,this._hasPrefix&&q.prefix,!this.invalid&&!this.disabled&&!(this.readonly||this.readOnly)&&q.default,this.invalid&&!this.disabled&&!(this.readonly||this.readOnly)&&q.invalid,!this.invalid&&this.disabled&&!(this.readonly||this.readOnly)&&q.disabled,!this.invalid&&!this.disabled&&(this.readonly||this.readOnly)&&q.readOnly])}get _helptextstyles(){return`help-text`}get _label(){if(this.label){let e=this.label.length&&this.optional&&!this.required,t=!!this.tooltip;return i`
				<label for="${this._id}">
					${this.label}${e?i`
									<span>
										${d._({id:`textfield.label.optional`,message:`Optional`,comment:`Shown behind label when marked as optional`})}
									</span>
								`:r}
					${t?i`
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
				</label>
			`}}get _helpId(){if(this.#t)return`${this._id}__hint`}get _id(){return`textfield`}get _error(){if(this.invalid&&this._helpId)return this._helpId}handler(e){let{name:t,value:n}=e.currentTarget;this.value=n;let r={name:t,value:n,target:e.target},i=new Proxy(r,{get(e,t){return typeof window<`u`&&(window.location.host.startsWith(`www`)||console.warn(`w-textfield's CustomEvent is deprecated, please use the browser-native events instead (e.g. replace e.detail.value with e.target.value)`)),e[t]}}),a=new CustomEvent(e.type,{detail:i});this.dispatchEvent(a)}prefixSlotChange(){this.renderRoot.querySelector(`slot[name=prefix]`).assignedElements().length&&(this._hasPrefix=!0)}suffixSlotChange(){this.renderRoot.querySelector(`slot[name=suffix]`).assignedElements().length&&(this._hasSuffix=!0)}helpTextSlotChange(){this.renderRoot.querySelector(`slot[name=help-text]`).assignedElements().length&&(this._hasHelpTextSlot=!0)}render(){return i`
			${this._label}
			<div
				class="${v({"w-textfield":!0,"w-textfield--has-prefix":this._hasPrefix,"w-textfield--has-suffix":this._hasSuffix})}"
			>
				<div class="w-textfield__input-wrapper">
					${this.formatter?i`<div class="w-textfield__mask"></div>`:r}
					<input
						part="input"
						class="${this._inputstyles}"
						type="${this.type||`text`}"
						min="${T(this.min)}"
						max="${T(this.max)}"
						size="${T(this.size)}"
						minlength="${T(this.minLength||this.minlength)}"
						maxlength="${T(this.maxLength||this.maxlength)}"
						name="${T(this.name)}"
						pattern="${T(this.pattern)}"
						placeholder="${T(this.placeholder)}"
						.value="${this.value||``}"
						aria-describedby="${T(this._helpId||(this.ariaDescription?`aria-description`:void 0))}"
						aria-errormessage="${T(this._error)}"
						aria-invalid="${T(this.invalid)}"
						id="${this._id}"
						?disabled="${this.disabled}"
						?readonly="${this.readonly||this.readOnly}"
						?required="${this.required}"
						autocomplete="${T(this.autocomplete)}"
						step="${T(this.step)}"
						@blur="${this.handler}"
						@change="${this.handler}"
						@input="${this.handler}"
						@focus="${this.handler}"
						@keydown="${this.#n}"
					/>
				</div>
				<slot @slotchange="${this.prefixSlotChange}" name="prefix"></slot>
				<slot @slotchange="${this.suffixSlotChange}" name="suffix"></slot>
			</div>
			<span class="sr-only" id="aria-description">${this.ariaDescription}</span>
			<div
				?hidden=${!this.#t}
				class="${this._helptextstyles}"
				id="${T(this._helpId)}"
			>
				${this.helpText}
				<slot @slotchange="${this.helpTextSlotChange}" name="help-text"></slot>
			</div>
		`}},c([s({type:Boolean,reflect:!0})],J.prototype,`disabled`,void 0),c([s({type:Boolean,reflect:!0})],J.prototype,`invalid`,void 0),c([s({type:String,reflect:!0})],J.prototype,`label`,void 0),c([s({type:String,reflect:!0,attribute:`help-text`})],J.prototype,`helpText`,void 0),c([s({type:Boolean,reflect:!0})],J.prototype,`optional`,void 0),c([s({type:String,reflect:!0})],J.prototype,`size`,void 0),c([s({type:Number,reflect:!0})],J.prototype,`max`,void 0),c([s({type:Number,reflect:!0})],J.prototype,`min`,void 0),c([s({type:Number,reflect:!0,attribute:`min-length`})],J.prototype,`minLength`,void 0),c([s({type:Number,reflect:!0})],J.prototype,`minlength`,void 0),c([s({type:Number,reflect:!0,attribute:`max-length`})],J.prototype,`maxLength`,void 0),c([s({type:Number,reflect:!0})],J.prototype,`maxlength`,void 0),c([s({type:String,reflect:!0})],J.prototype,`pattern`,void 0),c([s({type:String,reflect:!0})],J.prototype,`placeholder`,void 0),c([s({type:Boolean,reflect:!0,attribute:`read-only`})],J.prototype,`readOnly`,void 0),c([s({type:Boolean,reflect:!0})],J.prototype,`readonly`,void 0),c([s({type:Boolean,reflect:!0})],J.prototype,`required`,void 0),c([s({type:String,reflect:!0})],J.prototype,`type`,void 0),c([s({type:String,reflect:!0})],J.prototype,`value`,void 0),c([s({type:String,reflect:!0})],J.prototype,`name`,void 0),c([s({type:Number,reflect:!0})],J.prototype,`step`,void 0),c([s({type:String,reflect:!0})],J.prototype,`autocomplete`,void 0),c([s({type:String,reflect:!0})],J.prototype,`tooltip`,void 0),c([s({attribute:!1})],J.prototype,`formatter`,void 0),c([_(`.w-textfield__mask`)],J.prototype,`mask`,void 0),c([s({type:Boolean})],J.prototype,`_hasPrefix`,void 0),c([s({type:Boolean})],J.prototype,`_hasSuffix`,void 0),c([t()],J.prototype,`_hasHelpTextSlot`,void 0),customElements.get(`w-textfield`)||customElements.define(`w-textfield`,J)})))()}export{Y as t};