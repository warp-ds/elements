import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{c as n,h as r,i,n as a,t as o}from"./lit-BcpSydpl.js";import{a as s,n as ee,o as te,r as c,t as l}from"./i18n-CkjYRTT1.js";import{a as u,r as d,s as f,t as p}from"./decorate-DkSsDgub.js";import{n as ne,t as re}from"./dist-Ps3JgUEV.js";import{t as ie}from"./icon-BiweboAb.js";import{n as m,t as ae}from"./styles-C65P6sGa.js";import{i as h,n as g,r as _}from"./utilities-bFq4FP4z.js";import{n as v,t as oe}from"./FormControlMixin-BCJbRrUC.js";import{r as y,t as b}from"./if-defined-xzAzOBzc.js";import{t as x}from"./tooltip-D4FseuBT.js";var S;function C(){return(C=e((()=>{S=JSON.parse(`{"select.label.optional":["Valgfri"]}`)})))()}var w;function T(){return(T=e((()=>{w=JSON.parse(`{"select.label.optional":["Optional"]}`)})))()}var E;function D(){return(D=e((()=>{E=JSON.parse(`{"select.label.optional":["Valinnainen"]}`)})))()}var O;function k(){return(k=e((()=>{O=JSON.parse(`{"select.label.optional":["Valgfri"]}`)})))()}var A;function j(){return(j=e((()=>{A=JSON.parse(`{"select.label.optional":["Valfritt"]}`)})))()}var M;function N(){return(N=e((()=>{o(),M=r`
	:host {
		--_font-size: var(--w-c-select-font-size, var(--w-font-size-m));
		--_line-height: var(--w-c-select-line-height, var(--w-line-height-m));
		--_padding-right: var(--w-c-select-padding-right, 3.2rem);
		--_padding-left: var(--w-c-select-padding-left, 0.8rem);
		--_padding-top: var(--w-c-select-padding-top, 1.2rem);
		--_padding-bottom: var(--w-c-select-padding-bottom, 1.2rem);
		--_border-color: var(
			--w-c-select-color-border,
			var(--w-s-color-border-strong)
		);
		--_color: var(--w-c-select-color-text, var(--w-s-color-text));
		--_background-color: var(
			--w-c-select-color-background,
			var(--w-s-color-background)
		);
		--_border-radius: var(--w-c-select-border-radius, 4px);
		--_border-width: var(--w-c-select-border-width, 1px);
		--_border-color-hover: var(
			--w-c-select-color-border-hover,
			var(--w-s-color-border-strong-hover)
		);
		--_border-color-active: var(
			--w-c-select-color-border-active,
			var(--w-s-color-border-active)
		);
		--_outline-focus: var(
			--w-c-select-outline-focus,
			2px solid var(--w-s-color-border-focus)
		);
		--_outline-offset-focus: var(--w-c-select-outline-offset-focus, -2px);
		--_border-color-invalid: var(
			--w-c-select-color-border-invalid,
			var(--w-s-color-border-negative)
		);
		--_outline-invalid: var(
			--w-c-select-outline-invalid,
			var(--w-s-color-border-negative)
		);
		--_color-invalid: var(--w-c-select-color-text-invalid, inherit);
		--_background-color-invalid: var(
			--w-c-select-color-background-invalid,
			inherit
		);
		--_border-color-disabled: var(
			--w-c-select-color-border-disabled,
			var(--w-s-color-border-disabled)
		);
		--_color-disabled: var(
			--w-c-select-color-text-disabled,
			var(--w-s-color-text-disabled)
		);
		--_background-color-disabled: var(
			--w-c-select-color-background-disabled,
			var(--w-s-color-background-disabled-subtle)
		);
		--_chevron-width: var(--w-c-select-chevron-width, 3.2rem);
		--_chevron-height: var(--w-c-select-chevron-height, 100%);
		--_chevron-color: var(--w-c-select-chevron-color, var(--w-s-color-icon));
		--_chevron-position-top: var(--w-c-select-chevron-position-top, 30%);
		--_chevron-position-right: var(--w-c-select-chevron-position-right, 0px);
		--_chevron-position-bottom: var(--w-c-select-chevron-position-bottom, 0px);
		--_chevron-position-left: var(--w-c-select-chevron-position-left, auto);
		--_chevron-opacity-disabled: var(
			--w-c-select-chevron-opacity-disabled,
			0.25
		);
	}
	[part="base"] {
		position: relative;
	}
	.input-wrapper {
		position: relative;
	}
	[part="input"] {
		outline: none;
		font-size: var(--_font-size);
		line-height: var(--_line-height);
		cursor: pointer;
		padding-right: var(--_padding-right);
		padding-left: var(--_padding-left);
		padding-top: var(--_padding-top);
		padding-bottom: var(--_padding-bottom);
		margin-bottom: 0px;
		width: 100%;
		border-color: var(--_border-color);
		color: var(--_color);
		background-color: var(--_background-color);
		display: block;
		caret-color: currentcolor;
		border-radius: var(--_border-radius);
		border-width: var(--_border-width);
		appearance: none;
	}
	[part="input"]:hover {
		border-color: var(--_border-color-hover);
	}
	[part="input"]:active {
		border-color: var(--_border-color-active);
	}
	[part="input"]:focus-visible {
		outline: var(--_outline-focus);
		outline-offset: var(--_outline-offset-focus);
	}
	:host([invalid]) [part="input"] {
		border-color: var(--_border-color-invalid);
		outline: var(--_outline-invalid) !important;
		color: var(--_color-invalid);
		background-color: var(--_background-color-invalid);
	}
	:host([disabled]) [part="input"] {
		border-color: var(--_border-color-disabled);
		color: var(--_color-disabled);
		background-color: var(--_background-color-disabled);
	}
	[part="chevron"] {
		pointer-events: none;
		cursor: pointer;
		width: var(--_chevron-width);
		height: var(--_chevron-height);
		color: var(--_chevron-color);
		position: absolute;
		top: var(--_chevron-position-top);
		right: var(--_chevron-position-right);
		bottom: var(--_chevron-position-bottom);
		left: var(--_chevron-position-left);
		display: block;
	}
	:host([disabled]) [part="chevron"] {
		opacity: var(--_chevron-opacity-disabled);
	}
	/* if there is an option with an empty value and it is selected */
	/* if there is an option with an empty value, and no other options are selected */
	select:has(option[value=""][selected]),
	select:has(option[value=""]):not(:has(option[selected])) {
		color: var(--w-s-color-text-placeholder);
	}

	/* the options in the list that have a value should always use the text color */
	option:not([value=""]) {
		color: var(--w-s-color-text);
	}

	/* the placeholder should not use the semantic text color when the select has a value */
	option[value=""] {
		color: var(--w-s-color-text-placeholder);
	}
`})))()}var P,F;function I(){return(I=e((()=>{o(),P=r`
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
`,F=r`
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
`})))()}var L;function R(){return(R=e((()=>{te(),v(),o(),d(),b(),c(),ae(),C(),T(),D(),k(),j(),N(),I(),ie(),x(),L=class extends oe(a){get#e(){return this.helpText!==void 0||this._hasHelpTextSlot}#t;#n;#r;static{this.styles=[m,M,P,F]}constructor(){super(),this.autoFocus=!1,this.autofocus=!1,this.invalid=!1,this.always=!1,this.optional=!1,this.disabled=!1,this.readOnly=!1,this.readonly=!1,this._options=[],this._hasHelpTextSlot=!1,this.#t=void 0,this.#n=()=>this.#c(),this._setValue=e=>{this.value=e,this.setValue(e)},l(w,O,E,S,A)}resetFormControl(){this.value=this.#t}#i(){return[...this.children].filter(e=>e.tagName.toLowerCase()===`option`||e.tagName.toLowerCase()===`w-option`)}#a(){return this.shadowRoot?.querySelector(`select`)}#o(){return this.#i().some(e=>e.hasAttribute(`selected`))}#s(e){let t=this.#a();if(!t)return;let n=!1;for(let r of[...t.options]){let t=!n&&r.value===e;r.selected=t,r.toggleAttribute(`selected`,t),t&&(n=!0)}}#c({allowDefaultFirstOption:e=!1}={}){let t=this.#a();if(!t)return;let n=t.value;n&&n!==this.value&&(e||this.value||this.#o()||t.selectedIndex!==0)&&(this._setValue(n),this.#s(n))}#l({syncValueFromSelected:e=!1}={}){let t=this.#i(),r,i=t.map(t=>{let i=t.getAttribute(`value`)??``,a=t.textContent??``,o=t.hasAttribute(`selected`),s=t.hasAttribute(`disabled`);return e&&r===void 0&&o&&(r=i),n`<option
				value="${i}"
				?selected=${o}
				?disabled=${s}
			>
				${a}
			</option>`});this._options=i,e&&r!==void 0&&r!==this.value&&this._setValue(r)}connectedCallback(){super.connectedCallback(),this.#t=this.value,(this.autofocus||this.autoFocus)&&this.shadowRoot.querySelector(`select`).focus(),this.#l({syncValueFromSelected:!0}),this.ownerDocument?.defaultView?.addEventListener(`pageshow`,this.#n),this.#r=new MutationObserver(()=>{this.#l({syncValueFromSelected:!0})}),this.#r.observe(this,{childList:!0,subtree:!0,characterData:!0,attributes:!0,attributeFilter:[`selected`,`disabled`,`value`]})}disconnectedCallback(){super.disconnectedCallback(),this.ownerDocument?.defaultView?.removeEventListener(`pageshow`,this.#n),this.#r?.disconnect()}firstUpdated(){this.value&&this.#s(this.value),this.#c({allowDefaultFirstOption:!1})}formStateRestoreCallback(e,t){if(typeof e==`string`&&e){this._setValue(e),this.#s(e);return}this.#c({allowDefaultFirstOption:!0})}willUpdate(e){e.has(`value`)&&this.setValue(this.value)}updated(e){if(e.has(`value`)){let e=this.#a();e&&e.value!==this.value&&(e.value=this.value??``),this.#s(this.value??``)}}handleKeyDown(e){if((this.readonly||this.readOnly)&&(e.key===` `||e.key===`ArrowDown`||e.key===`ArrowUp`)&&e.preventDefault(),e.key===`Enter`&&this.internals.form){this.internals.form.requestSubmit();return}}get#u(){return`select_id`}get#d(){return this.helpText||this.hint?`${this.#u}__hint`:void 0}onChange(e){let t=e.currentTarget.value;this._setValue(t),this.#s(t),this.dispatchEvent(new CustomEvent(`change`,{detail:t,bubbles:!0,composed:!0}))}helpTextSlotChange(){this.renderRoot.querySelector(`slot[name=help-text]`).assignedElements().length&&(this._hasHelpTextSlot=!0)}render(){return n`<div part="base">
			${this.label?n`
							<label part="label" for="${this.#u}">
								${this.label}
								${this.optional?n`
												<span>
													${s.t({id:`select.label.optional`,message:`Optional`,comment:`Shown behind label when marked as optional`})}
												</span>
											`:i}
								${this.tooltip?n`
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
			<div class="input-wrapper">
				<select
					part="input"
					id="${this.#u}"
					?disabled=${this.disabled}
					aria-readonly="${this.readonly}"
					aria-describedby="${y(this.#d)}"
					aria-invalid="${y(this.invalid)}"
					aria-errormessage="${y(this.invalid&&this.#d)}"
					@keydown=${this.handleKeyDown}
					@change=${this.onChange}
				>
					${this._options}
				</select>
				<w-icon
					name="ChevronDown"
					size="small"
					locale="${ee()}"
					part="chevron"
				></w-icon>
			</div>
			<div
				?hidden=${!this.#e&&!this.always&&!this.invalid}
				part="help-text"
				class="help-text"
				id="${y(this.#d)}"
			>
				${this.helpText||this.hint}
				<slot @slotchange="${this.helpTextSlotChange}" name="help-text"></slot>
			</div>
		</div>`}},p([f({attribute:`auto-focus`,type:Boolean,reflect:!0})],L.prototype,`autoFocus`,void 0),p([f({type:Boolean,reflect:!0})],L.prototype,`autofocus`,void 0),p([f({attribute:`help-text`,reflect:!0})],L.prototype,`helpText`,void 0),p([f({type:Boolean,reflect:!0})],L.prototype,`invalid`,void 0),p([f({type:Boolean,reflect:!0})],L.prototype,`always`,void 0),p([f({reflect:!0})],L.prototype,`hint`,void 0),p([f({reflect:!0})],L.prototype,`label`,void 0),p([f({type:Boolean,reflect:!0})],L.prototype,`optional`,void 0),p([f({type:String,reflect:!0})],L.prototype,`tooltip`,void 0),p([f({type:Boolean,reflect:!0})],L.prototype,`disabled`,void 0),p([f({attribute:`read-only`,type:Boolean,reflect:!0})],L.prototype,`readOnly`,void 0),p([f({type:Boolean,reflect:!0})],L.prototype,`readonly`,void 0),p([f({attribute:!1,state:!0})],L.prototype,`_options`,void 0),p([f({reflect:!0})],L.prototype,`name`,void 0),p([f({reflect:!0})],L.prototype,`value`,void 0),p([u()],L.prototype,`_hasHelpTextSlot`,void 0),customElements.get(`w-select`)||customElements.define(`w-select`,L)})))()}var se=t({Default:()=>U,Disabled:()=>K,HelpText:()=>W,Invalid:()=>G,NoLabel:()=>J,Optional:()=>Y,Placeholder:()=>X,ReadOnly:()=>q,WithTooltip:()=>Z,__namedExportsOrder:()=>Q,default:()=>H}),z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{_(),ne(),o(),R(),x(),{events:z,args:B,argTypes:V}=re(`w-select`),H={title:`Forms/Select`,render(e){return n`
            <form>
                <w-select ${h(g(e))}>
                    <option value="raspberries">Raspberries</option>
                    <option value="strawberries" selected>Strawberries</option>
                    <option value="cloudberries">Cloudberries</option>
                </w-select>
            </form>
        `},args:B,argTypes:V,parameters:{actions:{handles:z}}},U={args:{label:`Berries`}},W={args:{label:`Berries`,"help-text":`We assume this is your jam preference`}},G={args:{label:`Berries`,invalid:!0,"help-text":`Wrong choice`}},K={args:{label:`Berries`,disabled:!0}},q={args:{label:`Berries`,"read-only":!0}},J={render(e){return n`
            <div style="display: flex; flex-direction: column; gap: 32px;">
                <w-select
                    ${h(g(e))}
                    aria-label="Your selection is berry nice!"
                >
                    <option value="raspberries">Raspberries</option>
                    <option value="strawberries" selected>Strawberries</option>
                    <option value="cloudberries">Cloudberries</option>
                </w-select>

                <label id="select-label" htmlFor="warp-aria-labelledby-example">
                    You're berry good at selecting!
                </label>
                <w-select ${h(g(e))} id="warp-aria-labelledby-example">
                    <option value="raspberries">Raspberries</option>
                    <option value="strawberries" selected>Strawberries</option>
                    <option value="cloudberries">Cloudberries</option>
                </w-select>
            </div>
        `}},Y={args:{label:`Berries`,optional:!0}},X={args:{label:`Berries`},render(e){return n`
            <w-select ${h(g(e))}>
                <option value="">Select an option</option>
                <option value="raspberries">Raspberries</option>
                <option value="strawberries">Strawberries</option>
                <option value="cloudberries">Cloudberries</option>
            </w-select>
        `}},Z={args:{optional:!0,required:!1},render({optional:e,required:t}){return n`
            <w-select
                name="tooltip-demo"
                label="Needs an explanation"
                help-text="Help text is available, but might not be enough, or the added context is not important enough that we use help-text"
                tooltip="This tooltip adds supplementary information"
                ?optional=${e}
                ?required=${t}
            >
                <option value="raspberries">Raspberries</option>
                <option value="strawberries" selected>Strawberries</option>
                <option value="cloudberries">Cloudberries</option>
            </w-select>
        `}},Q=[`Default`,`HelpText`,`Invalid`,`Disabled`,`ReadOnly`,`NoLabel`,`Optional`,`Placeholder`,`WithTooltip`],U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Berries"
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Berries",
    "help-text": "We assume this is your jam preference"
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Berries",
    invalid: true,
    "help-text": "Wrong choice"
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Berries",
    disabled: true
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Berries",
    "read-only": true
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render(args) {
    return html\`
            <div style="display: flex; flex-direction: column; gap: 32px;">
                <w-select
                    \${spread(prespread(args))}
                    aria-label="Your selection is berry nice!"
                >
                    <option value="raspberries">Raspberries</option>
                    <option value="strawberries" selected>Strawberries</option>
                    <option value="cloudberries">Cloudberries</option>
                </w-select>

                <label id="select-label" htmlFor="warp-aria-labelledby-example">
                    You're berry good at selecting!
                </label>
                <w-select \${spread(prespread(args))} id="warp-aria-labelledby-example">
                    <option value="raspberries">Raspberries</option>
                    <option value="strawberries" selected>Strawberries</option>
                    <option value="cloudberries">Cloudberries</option>
                </w-select>
            </div>
        \`;
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Berries",
    optional: true
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Berries"
  },
  render(args) {
    return html\`
            <w-select \${spread(prespread(args))}>
                <option value="">Select an option</option>
                <option value="raspberries">Raspberries</option>
                <option value="strawberries">Strawberries</option>
                <option value="cloudberries">Cloudberries</option>
            </w-select>
        \`;
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    optional: true,
    required: false
  },
  render({
    optional,
    required
  }) {
    return html\`
            <w-select
                name="tooltip-demo"
                label="Needs an explanation"
                help-text="Help text is available, but might not be enough, or the added context is not important enough that we use help-text"
                tooltip="This tooltip adds supplementary information"
                ?optional=\${optional}
                ?required=\${required}
            >
                <option value="raspberries">Raspberries</option>
                <option value="strawberries" selected>Strawberries</option>
                <option value="cloudberries">Cloudberries</option>
            </w-select>
        \`;
  }
}`,...Z.parameters?.docs?.source}}}})))()}export{J as a,q as c,G as i,$ as l,K as n,Y as o,W as r,X as s,U as t,se as u};