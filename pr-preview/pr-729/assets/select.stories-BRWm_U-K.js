import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{a as n,c as r,d as i,h as a,l as o,r as s,s as c,t as l,x as ee,y as u}from"./decorate-Bt2QF_uA.js";import{a as te,n as ne,o as re,r as d,t as ie}from"./i18n-CkjYRTT1.js";import{n as ae,t as oe}from"./dist-D5kJVy4t.js";import{n as f,t as se}from"./index.m-DHqwZk2H.js";import{t as ce}from"./icon-CD69d68Q.js";import{n as le,t as p}from"./styles-Cw_r5k83.js";import{i as m,n as h,r as g}from"./utilities-BHNt5DhH.js";import{n as ue,t as de}from"./FormControlMixin-BCJbRrUC.js";import{r as _,t as v}from"./if-defined-DBI32Ir5.js";import{t as y}from"./tooltip-D5IbvAIJ.js";var b;function x(){return(x=e((()=>{b=JSON.parse(`{"select.label.optional":["Valgfri"]}`)})))()}var S;function C(){return(C=e((()=>{S=JSON.parse(`{"select.label.optional":["Optional"]}`)})))()}var w;function T(){return(T=e((()=>{w=JSON.parse(`{"select.label.optional":["Valinnainen"]}`)})))()}var E;function D(){return(D=e((()=>{E=JSON.parse(`{"select.label.optional":["Valgfri"]}`)})))()}var O;function k(){return(k=e((()=>{O=JSON.parse(`{"select.label.optional":["Valfritt"]}`)})))()}var A;function j(){return(j=e((()=>{r(),A=ee(`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.focus\\:\\[--w-outline-offset\\:-2px\\]:focus{--w-outline-offset:-2px}.bg-transparent{background-color:#0000}.appearance-none{-webkit-appearance:none;appearance:none}.border-0{border-width:0}.border-1{border-width:1px}.rounded-4{border-radius:4px}.caret-current{caret-color:currentColor}.opacity-25{opacity:.25}.block,.before\\:block:before{display:block}.inline{display:inline}.flex{display:flex}.before\\:hidden:before{display:none}.focusable:focus{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:focus-visible{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:not(:focus-visible){outline:none}.outline-\\[--w-s-color-border-negative\\]\\!{outline-color:var(--w-s-color-border-negative)!important}.bottom-0{bottom:0}.right-0{right:0}.before\\:bottom-0:before{bottom:0}.before\\:right-0:before{right:0}.top-\\[30\\%\\]{top:30%}.absolute{position:absolute}.relative{position:relative}.static{position:static}.before\\:absolute:before{position:absolute}.s-bg{background-color:var(--w-s-color-background)}.s-bg-disabled-subtle{background-color:var(--w-s-color-background-disabled-subtle)}.s-text{color:var(--w-s-color-text)}.s-text-disabled{color:var(--w-s-color-text-disabled)}.s-icon{color:var(--w-s-color-icon)}.s-border-disabled{border-color:var(--w-s-color-border-disabled)}.s-border-negative{border-color:var(--w-s-color-border-negative)}.s-border-strong{border-color:var(--w-s-color-border-strong)}.hover\\:s-border-disabled:hover{border-color:var(--w-s-color-border-disabled)}.hover\\:s-border-negative-hover:hover{border-color:var(--w-s-color-border-negative-hover)}.hover\\:s-border-strong-hover:hover{border-color:var(--w-s-color-border-strong-hover)}.active\\:s-border-active:active{border-color:var(--w-s-color-border-active)}.active\\:s-border-disabled:active{border-color:var(--w-s-color-border-disabled)}.h-full{height:100%}.w-32{width:3.2rem}.w-full{width:100%}.before\\:h-full:before{height:100%}.before\\:w-32:before{width:3.2rem}.mb-0{margin-bottom:0}.py-12{padding-top:1.2rem;padding-bottom:1.2rem}.pl-0{padding-left:0}.pl-8{padding-left:.8rem}.pr-32{padding-right:3.2rem}.cursor-pointer{cursor:pointer}.pointer-events-none,.before\\:pointer-events-none:before{pointer-events:none}.text-m{font-size:var(--w-font-size-m);line-height:var(--w-line-height-m)}`)})))()}var M,N;function P(){return(P=e((()=>{r(),M=u`
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
`,N=u`
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
`})))()}var F,I;function L(){return(L=e((()=>{se(),re(),ue(),r(),s(),v(),d(),p(),x(),C(),T(),D(),k(),j(),P(),ce(),F={base:`block text-m mb-0 py-12 pr-32 rounded-4 w-full focusable focus:[--w-outline-offset:-2px] appearance-none cursor-pointer caret-current`,default:`s-text s-bg pl-8 border-1 s-border-strong hover:s-border-strong-hover active:s-border-active`,disabled:`s-text-disabled s-bg-disabled-subtle pl-8 border-1 s-border-disabled hover:s-border-disabled active:s-border-disabled pointer-events-none`,invalid:`s-text s-bg pl-8 border-1 s-border-negative hover:s-border-negative-hover active:s-border-active outline-[--w-s-color-border-negative]!`,readOnly:`s-text bg-transparent pl-0 border-0 pointer-events-none before:hidden`,wrapper:`relative`,selectWrapper:`relative before:block before:absolute before:right-0 before:bottom-0 before:w-32 before:h-full before:pointer-events-none `,chevron:`block absolute top-[30%] right-0 bottom-0 w-32 h-full s-icon pointer-events-none cursor-pointer`,chevronDisabled:`opacity-25`},I=class extends de(o){get#e(){return this.helpText!==void 0||this._hasHelpTextSlot}#t;#n;#r;static{this.styles=[le,A,M,N,u`
			/* if there is an option with an empty value and it is selected */
			select:has(option[value=""][selected]),
			/* if there is an option with an empty value, and no other options are selected */
				select:has(option[value=""]):not(:has(option[selected])) {
				color: var(--w-s-color-text-placeholder);
			}
		`]}constructor(){super(),this.autoFocus=!1,this.autofocus=!1,this.invalid=!1,this.always=!1,this.optional=!1,this.disabled=!1,this.readOnly=!1,this.readonly=!1,this._options=[],this._hasHelpTextSlot=!1,this.#t=void 0,this.#n=()=>this.#c(),this._setValue=e=>{this.value=e,this.setValue(e)},ie(S,E,w,b,O)}resetFormControl(){this.value=this.#t}#i(){return[...this.children].filter(e=>e.tagName.toLowerCase()===`option`||e.tagName.toLowerCase()===`w-option`)}#a(){return this.shadowRoot?.querySelector(`select`)}#o(){return this.#i().some(e=>e.hasAttribute(`selected`))}#s(e){let t=this.#a();if(!t)return;let n=!1;for(let r of[...t.options]){let t=!n&&r.value===e;r.selected=t,r.toggleAttribute(`selected`,t),t&&(n=!0)}}#c({allowDefaultFirstOption:e=!1}={}){let t=this.#a();if(!t)return;let n=t.value;!n||n===this.value||!e&&!this.value&&!this.#o()&&t.selectedIndex===0||(this._setValue(n),this.#s(n))}#l({syncValueFromSelected:e=!1}={}){let t=this.#i(),n,r=t.map(t=>{let r=t.getAttribute(`value`)??``,i=t.textContent??``,o=t.hasAttribute(`selected`),s=t.hasAttribute(`disabled`);return e&&n===void 0&&o&&(n=r),a`<option
				value="${r}"
				?selected=${o}
				?disabled=${s}
			>
				${i}
			</option>`});this._options=r,e&&n!==void 0&&n!==this.value&&this._setValue(n)}connectedCallback(){super.connectedCallback(),this.#t=this.value,(this.autofocus||this.autoFocus)&&this.shadowRoot.querySelector(`select`).focus(),this.#l({syncValueFromSelected:!0}),this.ownerDocument?.defaultView?.addEventListener(`pageshow`,this.#n),this.#r=new MutationObserver(()=>{this.#l({syncValueFromSelected:!0})}),this.#r.observe(this,{childList:!0,subtree:!0,characterData:!0,attributes:!0,attributeFilter:[`selected`,`disabled`,`value`]})}disconnectedCallback(){super.disconnectedCallback(),this.ownerDocument?.defaultView?.removeEventListener(`pageshow`,this.#n),this.#r?.disconnect()}firstUpdated(){this.value&&this.#s(this.value),this.#c({allowDefaultFirstOption:!1})}formStateRestoreCallback(e,t){if(typeof e==`string`&&e){this._setValue(e),this.#s(e);return}this.#c({allowDefaultFirstOption:!0})}willUpdate(e){e.has(`value`)&&this.setValue(this.value)}updated(e){if(e.has(`value`)){let e=this.#a();e&&e.value!==this.value&&(e.value=this.value??``),this.#s(this.value??``)}}handleKeyDown(e){if((this.readonly||this.readOnly)&&(e.key===` `||e.key===`ArrowDown`||e.key===`ArrowUp`)&&e.preventDefault(),e.key===`Enter`&&this.internals.form){this.internals.form.requestSubmit();return}}get#u(){return f([F.base,!this.invalid&&!this.disabled&&!(this.readonly||this.readOnly)&&F.default,this.invalid&&F.invalid,this.disabled&&F.disabled,(this.readonly||this.readOnly)&&F.readOnly])}get#d(){return`help-text`}get#f(){return f([F.chevron,this.disabled&&F.chevronDisabled])}get#p(){return`select_id`}get#m(){return this.helpText||this.hint?`${this.#p}__hint`:void 0}onChange(e){let t=e.currentTarget.value;this._setValue(t),this.#s(t),this.dispatchEvent(new CustomEvent(`change`,{detail:t,bubbles:!0,composed:!0}))}helpTextSlotChange(){this.renderRoot.querySelector(`slot[name=help-text]`).assignedElements().length&&(this._hasHelpTextSlot=!0)}render(){return a`<div class="${F.wrapper}">
			${this.label?a`
							<label for="${this.#p}">
								${this.label}
								${this.optional?a`
												<span>
													${te.t({id:`select.label.optional`,message:`Optional`,comment:`Shown behind label when marked as optional`})}
												</span>
											`:i}
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
											`:i}
							</label>
						`:i}
			<div class="${F.selectWrapper}">
				<select
					part="input"
					class="${this.#u}"
					id="${this.#p}"
					?disabled=${this.disabled}
					aria-readonly="${this.readonly}"
					aria-describedby="${_(this.#m)}"
					aria-invalid="${_(this.invalid)}"
					aria-errormessage="${_(this.invalid&&this.#m)}"
					@keydown=${this.handleKeyDown}
					@change=${this.onChange}
				>
					${this._options}
				</select>
				<div class="${this.#f}">
					<w-icon
						name="ChevronDown"
						size="small"
						locale="${ne()}"
						class="flex"
					></w-icon>
				</div>
			</div>
			<div
				?hidden=${!this.#e&&!this.always&&!this.invalid}
				class="${this.#d}"
				id="${_(this.#m)}"
			>
				${this.helpText||this.hint}
				<slot @slotchange="${this.helpTextSlotChange}" name="help-text"></slot>
			</div>
		</div>`}},l([c({attribute:`auto-focus`,type:Boolean,reflect:!0})],I.prototype,`autoFocus`,void 0),l([c({type:Boolean,reflect:!0})],I.prototype,`autofocus`,void 0),l([c({attribute:`help-text`,reflect:!0})],I.prototype,`helpText`,void 0),l([c({type:Boolean,reflect:!0})],I.prototype,`invalid`,void 0),l([c({type:Boolean,reflect:!0})],I.prototype,`always`,void 0),l([c({reflect:!0})],I.prototype,`hint`,void 0),l([c({reflect:!0})],I.prototype,`label`,void 0),l([c({type:Boolean,reflect:!0})],I.prototype,`optional`,void 0),l([c({type:String,reflect:!0})],I.prototype,`tooltip`,void 0),l([c({type:Boolean,reflect:!0})],I.prototype,`disabled`,void 0),l([c({attribute:`read-only`,type:Boolean,reflect:!0})],I.prototype,`readOnly`,void 0),l([c({type:Boolean,reflect:!0})],I.prototype,`readonly`,void 0),l([c({attribute:!1,state:!0})],I.prototype,`_options`,void 0),l([c({reflect:!0})],I.prototype,`name`,void 0),l([c({reflect:!0})],I.prototype,`value`,void 0),l([n()],I.prototype,`_hasHelpTextSlot`,void 0),customElements.get(`w-select`)||customElements.define(`w-select`,I)})))()}var R=t({Default:()=>U,Disabled:()=>K,HelpText:()=>W,Invalid:()=>G,NoLabel:()=>J,Optional:()=>Y,Placeholder:()=>X,ReadOnly:()=>q,WithTooltip:()=>Z,__namedExportsOrder:()=>Q,default:()=>H}),z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{g(),ae(),r(),L(),y(),{events:z,args:B,argTypes:V}=oe(`w-select`),H={title:`Forms/Select`,render(e){return a`
            <form>
                <w-select ${m(h(e))}>
                    <option value="raspberries">Raspberries</option>
                    <option value="strawberries" selected>Strawberries</option>
                    <option value="cloudberries">Cloudberries</option>
                </w-select>
            </form>
        `},args:B,argTypes:V,parameters:{actions:{handles:z}}},U={args:{label:`Berries`}},W={args:{label:`Berries`,"help-text":`We assume this is your jam preference`}},G={args:{label:`Berries`,invalid:!0,"help-text":`Wrong choice`}},K={args:{label:`Berries`,disabled:!0}},q={args:{label:`Berries`,"read-only":!0}},J={render(e){return a`
            <div style="display: flex; flex-direction: column; gap: 32px;">
                <w-select
                    ${m(h(e))}
                    aria-label="Your selection is berry nice!"
                >
                    <option value="raspberries">Raspberries</option>
                    <option value="strawberries" selected>Strawberries</option>
                    <option value="cloudberries">Cloudberries</option>
                </w-select>

                <label id="select-label" htmlFor="warp-aria-labelledby-example">
                    You're berry good at selecting!
                </label>
                <w-select ${m(h(e))} id="warp-aria-labelledby-example">
                    <option value="raspberries">Raspberries</option>
                    <option value="strawberries" selected>Strawberries</option>
                    <option value="cloudberries">Cloudberries</option>
                </w-select>
            </div>
        `}},Y={args:{label:`Berries`,optional:!0}},X={args:{label:`Berries`},render(e){return a`
            <w-select ${m(h(e))}>
                <option value="">Select an option</option>
                <option value="raspberries">Raspberries</option>
                <option value="strawberries">Strawberries</option>
                <option value="cloudberries">Cloudberries</option>
            </w-select>
        `}},Z={args:{optional:!0,required:!1},render({optional:e,required:t}){return a`
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
        `}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},Q=[`Default`,`HelpText`,`Invalid`,`Disabled`,`ReadOnly`,`NoLabel`,`Optional`,`Placeholder`,`WithTooltip`]})))()}export{J as a,q as c,G as i,$ as l,K as n,Y as o,W as r,X as s,U as t,R as u};