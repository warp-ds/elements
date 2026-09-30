import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{C as t,a as n,f as r,h as i,p as a,r as o,s,t as c,y as l}from"./decorate-kJVNAdyH.js";import{a as u,o as d,r as f,t as p}from"./i18n-CkjYRTT1.js";import{t as m}from"./query-BHY-nhsh.js";import{t as h}from"./icon-DgzLkPq-.js";import{n as g,t as _}from"./styles-BxpTFSox.js";import{n as v,t as y}from"./FormControlMixin-BCJbRrUC.js";import{r as b,t as x}from"./if-defined-CHz3vSYq.js";import{t as S}from"./tooltip-DFh_EJXQ.js";var C;function w(){return(w=e((()=>{C=JSON.parse(`{"textfield.label.optional":["Valgfri"]}`)})))()}var T;function E(){return(E=e((()=>{T=JSON.parse(`{"textfield.label.optional":["Optional"]}`)})))()}var D;function O(){return(O=e((()=>{D=JSON.parse(`{"textfield.label.optional":["Valinnainen"]}`)})))()}var k;function A(){return(A=e((()=>{k=JSON.parse(`{"textfield.label.optional":["Valgfri"]}`)})))()}var j;function M(){return(M=e((()=>{j=JSON.parse(`{"textfield.label.optional":["Valfritt"]}`)})))()}var N;function P(){return(P=e((()=>{r(),N=t`
	:host {
		--_padding-left: var(--w-c-textfield-padding-left, 8px);
		--_padding-right: var(--w-c-textfield-padding-right, 8px);
		--_line-height: var(--w-c-textfield-line-height, var(--w-line-height-m));
		--_font-size: var(--w-c-textfield-font-size, var(--w-font-size-m));
		--_border-color: var(
			--w-c-textfield-color-border,
			var(--w-s-color-border-strong)
		);
		--_color: var(--w-c-textfield-color, var(--w-s-color-text));
		--_background-color: var(--w-c-textfield-background, var(--w-s-color-background));
		--_active-border-color: var(
			--w-c-textfield-color-border-active,
			var(--w-s-color-border-selected)
		);
		--_hover-border-color: var(
			--w-c-textfield-color-border-hover,
			var(--w-s-color-border-strong-hover)
		);
		--_focus-outline: var(
			--w-c-textfield-outline-focus,
			2px solid var(--w-s-color-border-focus)
		);
		--_outline-offset: var(--w-c-textfield-outline-offset, -2px);
		--_invalid-border-color: var(
			--w-c-textfield-color-border-invalid,
			var(--w-s-color-border-negative)
		);
		--_invalid-color: var(
			--w-c-textfield-color-invalid,
			var(--w-s-color-text-negative)
		);
		--_invalid-outline: var(
			--w-c-textfield-outline-invalid,
			2px solid var(--w-s-color-border-negative)
		);
		--_invalid-hover-border-color: var(
			--w-c-textfield-color-border-invalid-hover,
			var(--w-s-color-border-negative-hover)
		);
		--_disabled-border-color: var(
			--w-c-textfield-color-border-disabled,
			var(--w-s-color-border-disabled)
		);
		--_disabled-color: var(
			--w-c-textfield-color-disabled,
			var(--w-s-color-text-disabled)
		);
		--_disabled-background-color: var(
			--w-c-textfield-color-background-disabled,
			var(--w-s-color-background-disabled-subtle)
		);
		--_placeholder-color: var(
			--w-c-textfield-placeholder-color,
			var(--w-s-color-text-placeholder)
		);
	}
	[part="base"] {
		position: relative;
		--_input-padding-top: 12px;
	}

	[part="base"][data-has-prefix="true"] {
		--_padding-left: var(--w-prefix-width, 40px);
	}

	[part="base"][data-has-suffix="true"] {
		--_padding-right: var(--w-prefix-width, 40px);
	}

	[part="input"] {
		outline: none;
		line-height: var(--_line-height);
		font-size: var(--_font-size);
		padding-top: 1.2rem;
		padding-bottom: 1.2rem;
		padding-left: var(--_padding-left);
		padding-right: var(--_padding-right);
		margin-bottom: 0px;
		width: 100%;
		border-color: var(--_border-color);
		color: var(--_color);
		background-color: var(--_background-color);
		display: block;
		caret-color: currentcolor;
		border-radius: 4px;
		border-width: 1px;
	}

	[part="input"]:hover {
		border-color: var(--_hover-border-color);
	}

	[part="input"]:active {
		border-color: var(--_active-border-color);
	}

	[part="input"]:focus,
	[part="input"]:focus-visible {
		outline: var(--_focus-outline);
		outline-offset: var(--_outline-offset);
	}

	[part="input"][aria-invalid="true"] {
		border-color: var(--_invalid-border-color);
		color: var(--_invalid-color);
		outline-color: var(--_invalid-outline);
	}

	[part="input"][aria-invalid="true"]:hover {
		border-color: var(--_invalid-hover-border-color);
	}

	[part="input"][disabled] {
		border-color: var(--_disabled-border-color);
		color: var(--_disabled-color);
		background-color: var(--_disabled-background-color);
	}
	[part="mask-wrapper"] {
		position: relative;
		overflow: hidden;
	}
	[part="mask-wrapper"]:focus-within [part="mask"] {
		display: none;
	}
	[part="mask-wrapper"]:has([part="mask"]):not(:focus-within) input {
		color: transparent;
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
		color: var(--_placeholder-color);
	}

	[part="mask"] {
		display: block;
		border: 1px solid transparent;
		top: var(--_input-padding-top);
		left: var(--_padding-left);
		right: var(--_padding-right);
		position: absolute;
		pointer-events: none;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		z-index: 1;
	}
`})))()}var F,I;function L(){return(L=e((()=>{r(),F=t`
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
`,I=t`
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
`})))()}var R;function z(){return(z=e((()=>{d(),v(),r(),o(),x(),f(),_(),w(),E(),O(),A(),M(),P(),L(),h(),S(),R=class extends y(a){static{this.shadowRootOptions={...a.shadowRootOptions,delegatesFocus:!0}}constructor(){super(),this.disabled=!1,this.invalid=!1,this.optional=!1,this.readOnly=!1,this.readonly=!1,this.required=!1,this._hasPrefix=!1,this._hasSuffix=!1,this._hasHelpTextSlot=!1,this.#n=void 0,p(T,k,D,C,j)}get#e(){return this.helpText!==void 0||this._hasHelpTextSlot}#t(e){e.key===`Enter`&&this.internals.form&&this.internals.form.requestSubmit()}updated(e){e.has(`value`)&&this.value!==void 0&&(this.setValue(this.value),this.formatter&&this.mask&&(this.mask.innerText=this.formatter(this.value)))}#n;static{this.styles=[g,N,F,I]}firstUpdated(){this.#n=this.value}resetFormControl(){this.value=this.#n}get _helptextstyles(){return`help-text`}get _helpId(){if(this.#e)return`${this._id}__hint`}get _id(){return`textfield`}get _error(){if(this.invalid&&this._helpId)return this._helpId}handler(e){let{name:t,value:n}=e.currentTarget;this.value=n;let r={name:t,value:n,target:e.target},i=new Proxy(r,{get(e,t){return typeof window<`u`&&(window.location.host.startsWith(`www`)||console.warn(`w-textfield's CustomEvent is deprecated, please use the browser-native events instead (e.g. replace e.detail.value with e.target.value)`)),e[t]}}),a=new CustomEvent(e.type,{detail:i});this.dispatchEvent(a)}prefixSlotChange(){this.renderRoot.querySelector(`slot[name=prefix]`).assignedElements().length&&(this._hasPrefix=!0)}suffixSlotChange(){this.renderRoot.querySelector(`slot[name=suffix]`).assignedElements().length&&(this._hasSuffix=!0)}helpTextSlotChange(){this.renderRoot.querySelector(`slot[name=help-text]`).assignedElements().length&&(this._hasHelpTextSlot=!0)}render(){let e=this.label?.length&&this.optional&&!this.required,t=!!this.tooltip;return l`
			${this.label?l`
							<label for="${this._id}" part="label">
								${this.label}${e?l`
												<span>
													${u._({id:`textfield.label.optional`,message:`Optional`,comment:`Shown behind label when marked as optional`})}
												</span>
											`:i}
								${t?l`
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
			<div
				part="base"
				data-has-prefix="${b(this._hasPrefix)}"
				data-has-suffix="${b(this._hasSuffix)}"
			>
				<div part="mask-wrapper">
					${this.formatter?l`<div part="mask"></div>`:i}
					<input
						part="input"
						type="${this.type||`text`}"
						min="${b(this.min)}"
						max="${b(this.max)}"
						size="${b(this.size)}"
						minlength="${b(this.minLength||this.minlength)}"
						maxlength="${b(this.maxLength||this.maxlength)}"
						name="${b(this.name)}"
						pattern="${b(this.pattern)}"
						placeholder="${b(this.placeholder)}"
						.value="${this.value||``}"
						aria-describedby="${b(this._helpId||(this.ariaDescription?`aria-description`:void 0))}"
						aria-errormessage="${b(this._error)}"
						aria-invalid="${b(this.invalid)}"
						id="${this._id}"
						?disabled="${this.disabled}"
						?readonly="${this.readonly||this.readOnly}"
						?required="${this.required}"
						autocomplete="${b(this.autocomplete)}"
						step="${b(this.step)}"
						@blur="${this.handler}"
						@change="${this.handler}"
						@input="${this.handler}"
						@focus="${this.handler}"
						@keydown="${this.#t}"
					/>
				</div>
				<slot @slotchange="${this.prefixSlotChange}" name="prefix"></slot>
				<slot @slotchange="${this.suffixSlotChange}" name="suffix"></slot>
			</div>
			<span class="sr-only" id="aria-description">${this.ariaDescription}</span>
			<div
				?hidden=${!this.#e}
				class="${this._helptextstyles}"
				part="help-text"
				id="${b(this._helpId)}"
			>
				${this.helpText}
				<slot @slotchange="${this.helpTextSlotChange}" name="help-text"></slot>
			</div>
		`}},c([s({type:Boolean,reflect:!0})],R.prototype,`disabled`,void 0),c([s({type:Boolean,reflect:!0})],R.prototype,`invalid`,void 0),c([s({type:String,reflect:!0})],R.prototype,`label`,void 0),c([s({type:String,reflect:!0,attribute:`help-text`})],R.prototype,`helpText`,void 0),c([s({type:Boolean,reflect:!0})],R.prototype,`optional`,void 0),c([s({type:String,reflect:!0})],R.prototype,`size`,void 0),c([s({type:Number,reflect:!0})],R.prototype,`max`,void 0),c([s({type:Number,reflect:!0})],R.prototype,`min`,void 0),c([s({type:Number,reflect:!0,attribute:`min-length`})],R.prototype,`minLength`,void 0),c([s({type:Number,reflect:!0})],R.prototype,`minlength`,void 0),c([s({type:Number,reflect:!0,attribute:`max-length`})],R.prototype,`maxLength`,void 0),c([s({type:Number,reflect:!0})],R.prototype,`maxlength`,void 0),c([s({type:String,reflect:!0})],R.prototype,`pattern`,void 0),c([s({type:String,reflect:!0})],R.prototype,`placeholder`,void 0),c([s({type:Boolean,reflect:!0,attribute:`read-only`})],R.prototype,`readOnly`,void 0),c([s({type:Boolean,reflect:!0})],R.prototype,`readonly`,void 0),c([s({type:Boolean,reflect:!0})],R.prototype,`required`,void 0),c([s({type:String,reflect:!0})],R.prototype,`type`,void 0),c([s({type:String,reflect:!0})],R.prototype,`value`,void 0),c([s({type:String,reflect:!0})],R.prototype,`name`,void 0),c([s({type:Number,reflect:!0})],R.prototype,`step`,void 0),c([s({type:String,reflect:!0})],R.prototype,`autocomplete`,void 0),c([s({type:String,reflect:!0})],R.prototype,`tooltip`,void 0),c([s({attribute:!1})],R.prototype,`formatter`,void 0),c([m(`[part="mask"]`)],R.prototype,`mask`,void 0),c([s({type:Boolean})],R.prototype,`_hasPrefix`,void 0),c([s({type:Boolean})],R.prototype,`_hasSuffix`,void 0),c([n()],R.prototype,`_hasHelpTextSlot`,void 0),customElements.get(`w-textfield`)||customElements.define(`w-textfield`,R)})))()}export{z as t};