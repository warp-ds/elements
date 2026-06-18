import{a as e,i as t}from"./preload-helper-CwA5MRLW.js";import{A as n,D as r,E as i,Ht as a,J as o,Kt as s,Lt as c,M as l,N as ee,O as u,Rt as d,Wt as f,_ as te,b as ne,d as re,f as p,j as m,k as ie,l as ae,p as oe,q as se,u as ce,y as h}from"./iframe-DMjPUcM0.js";import{a as g,n as _,r as le,t as v}from"./utilities-CHo-EV-9.js";import{n as y,t as b}from"./form-control-EbCgjNJ6.js";import{r as x,t as ue}from"./if-defined-BmC97mzt.js";var S,C=t((()=>{S=JSON.parse(`{"select.label.optional":["(valgfrit)"]}`)})),w,T=t((()=>{w=JSON.parse(`{"select.label.optional":["(optional)"]}`)})),E,D=t((()=>{E=JSON.parse(`{"select.label.optional":["(vapaaehtoinen)"]}`)})),O,de=t((()=>{O=JSON.parse(`{"select.label.optional":["(valgfritt)"]}`)})),k,A=t((()=>{k=JSON.parse(`{"select.label.optional":["(valfritt)"]}`)})),j,M=t((()=>{c(),j=s(`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.focus\\:\\[--w-outline-offset\\:-2px\\]:focus{--w-outline-offset:-2px}.bg-transparent{background-color:#0000}.appearance-none{-webkit-appearance:none;appearance:none}.border-0{border-width:0}.border-1{border-width:1px}.rounded-4{border-radius:4px}.caret-current{caret-color:currentColor}.opacity-25{opacity:.25}.block,.before\\:block:before{display:block}.flex{display:flex}.before\\:hidden:before{display:none}.focusable:focus{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:focus-visible{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:not(:focus-visible){outline:none}.outline-\\[--w-s-color-border-negative\\]\\!{outline-color:var(--w-s-color-border-negative)!important}.bottom-0{bottom:0}.right-0{right:0}.before\\:bottom-0:before{bottom:0}.before\\:right-0:before{right:0}.top-\\[30\\%\\]{top:30%}.absolute{position:absolute}.relative{position:relative}.static{position:static}.before\\:absolute:before{position:absolute}.s-bg{background-color:var(--w-s-color-background)}.s-bg-disabled-subtle{background-color:var(--w-s-color-background-disabled-subtle)}.s-text{color:var(--w-s-color-text)}.s-text-disabled{color:var(--w-s-color-text-disabled)}.s-text-negative{color:var(--w-s-color-text-negative)}.s-text-subtle{color:var(--w-s-color-text-subtle)}.s-icon{color:var(--w-s-color-icon)}.s-border-disabled{border-color:var(--w-s-color-border-disabled)}.s-border-negative{border-color:var(--w-s-color-border-negative)}.s-border-strong{border-color:var(--w-s-color-border-strong)}.hover\\:s-border-disabled:hover{border-color:var(--w-s-color-border-disabled)}.hover\\:s-border-negative-hover:hover{border-color:var(--w-s-color-border-negative-hover)}.hover\\:s-border-strong-hover:hover{border-color:var(--w-s-color-border-strong-hover)}.active\\:s-border-active:active{border-color:var(--w-s-color-border-active)}.active\\:s-border-disabled:active{border-color:var(--w-s-color-border-disabled)}.h-full{height:100%}.w-32{width:3.2rem}.w-full{width:100%}.before\\:h-full:before{height:100%}.before\\:w-32:before{width:3.2rem}.mb-0{margin-bottom:0}.mt-4{margin-top:.4rem}.py-12{padding-top:1.2rem;padding-bottom:1.2rem}.pb-4{padding-bottom:.4rem}.pl-0{padding-left:0}.pl-8{padding-left:.8rem}.pr-32{padding-right:3.2rem}.cursor-pointer{cursor:pointer}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-smoothing:grayscale}.font-bold{font-weight:700}.font-normal{font-weight:400}.pointer-events-none,.before\\:pointer-events-none:before{pointer-events:none}.text-m{font-size:var(--w-font-size-m);line-height:var(--w-line-height-m)}.text-s{font-size:var(--w-font-size-s);line-height:var(--w-line-height-s)}.text-xs{font-size:var(--w-font-size-xs);line-height:var(--w-line-height-xs)}`)})),N,P,F=t((()=>{c(),N=f`
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
`,P=f`
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
`})),I,L,R=t((()=>{r(),o(),b(),c(),ne(),ue(),te(),m(),ae(),C(),T(),D(),de(),A(),M(),F(),re(),oe(),I={base:`block text-m mb-0 py-12 pr-32 rounded-4 w-full focusable focus:[--w-outline-offset:-2px] appearance-none cursor-pointer caret-current`,default:`s-text s-bg pl-8 border-1 s-border-strong hover:s-border-strong-hover active:s-border-active`,disabled:`s-text-disabled s-bg-disabled-subtle pl-8 border-1 s-border-disabled hover:s-border-disabled active:s-border-disabled pointer-events-none`,invalid:`s-text s-bg pl-8 border-1 s-border-negative hover:s-border-negative-hover active:s-border-active outline-[--w-s-color-border-negative]!`,readOnly:`s-text bg-transparent pl-0 border-0 pointer-events-none before:hidden`,wrapper:`relative`,selectWrapper:`relative before:block before:absolute before:right-0 before:bottom-0 before:w-32 before:h-full before:pointer-events-none `,chevron:`block absolute top-[30%] right-0 bottom-0 w-32 h-full s-icon pointer-events-none cursor-pointer`,chevronDisabled:`opacity-25`},L=class extends y(d){#e;#t;#n;static{this.styles=[ce,j,N,P,f`
			/* if there is an option with an empty value and it is selected */
			select:has(option[value=""][selected]),
			/* if there is an option with an empty value, and no other options are selected */
				select:has(option[value=""]):not(:has(option[selected])) {
				color: var(--w-s-color-text-placeholder);
			}
		`]}constructor(){super(),this.autoFocus=!1,this.autofocus=!1,this.invalid=!1,this.always=!1,this.optional=!1,this.disabled=!1,this.readOnly=!1,this.readonly=!1,this._options=[],this.#e=void 0,this.#t=()=>this.#s(),this._setValue=e=>{this.value=e,this.setValue(e)},ie(w,O,E,S,k)}resetFormControl(){this.value=this.#e}#r(){return[...this.children].filter(e=>e.tagName.toLowerCase()===`option`||e.tagName.toLowerCase()===`w-option`)}#i(){return this.shadowRoot?.querySelector(`select`)}#a(){return this.#r().some(e=>e.hasAttribute(`selected`))}#o(e){let t=this.#i();if(!t)return;let n=!1;for(let r of[...t.options]){let t=!n&&r.value===e;r.selected=t,r.toggleAttribute(`selected`,t),t&&(n=!0)}}#s({allowDefaultFirstOption:e=!1}={}){let t=this.#i();if(!t)return;let n=t.value;!n||n===this.value||!e&&!this.value&&!this.#a()&&t.selectedIndex===0||(this._setValue(n),this.#o(n))}#c({syncValueFromSelected:e=!1}={}){let t=this.#r(),n,r=t.map(t=>{let r=t.getAttribute(`value`)??``,i=t.textContent??``,o=t.hasAttribute(`selected`),s=t.hasAttribute(`disabled`);return e&&n===void 0&&o&&(n=r),a`<option
				value="${r}"
				?selected=${o}
				?disabled=${s}
			>
				${i}
			</option>`});this._options=r,e&&n!==void 0&&n!==this.value&&this._setValue(n)}connectedCallback(){super.connectedCallback(),this.#e=this.value,(this.autofocus||this.autoFocus)&&this.shadowRoot.querySelector(`select`).focus(),this.#c({syncValueFromSelected:!0}),this.ownerDocument?.defaultView?.addEventListener(`pageshow`,this.#t),this.#n=new MutationObserver(()=>{this.#c({syncValueFromSelected:!0})}),this.#n.observe(this,{childList:!0,subtree:!0,characterData:!0,attributes:!0,attributeFilter:[`selected`,`disabled`,`value`]})}disconnectedCallback(){super.disconnectedCallback(),this.ownerDocument?.defaultView?.removeEventListener(`pageshow`,this.#t),this.#n?.disconnect()}firstUpdated(){this.value&&this.#o(this.value),this.#s({allowDefaultFirstOption:!1})}formStateRestoreCallback(e,t){if(typeof e==`string`&&e){this._setValue(e),this.#o(e);return}this.#s({allowDefaultFirstOption:!0})}willUpdate(e){e.has(`value`)&&this.setValue(this.value)}updated(e){if(e.has(`value`)){let e=this.#i();e&&e.value!==this.value&&(e.value=this.value??``),this.#o(this.value??``)}}handleKeyDown(e){if((this.readonly||this.readOnly)&&(e.key===` `||e.key===`ArrowDown`||e.key===`ArrowUp`)&&e.preventDefault(),e.key===`Enter`&&this.internals.form){this.internals.form.requestSubmit();return}}get#l(){return u([I.base,!this.invalid&&!this.disabled&&!(this.readonly||this.readOnly)&&I.default,this.invalid&&I.invalid,this.disabled&&I.disabled,(this.readonly||this.readOnly)&&I.readOnly])}get#u(){return`help-text`}get#d(){return u([I.chevron,this.disabled&&I.chevronDisabled])}get#f(){return`select_id`}get#p(){return this.helpText||this.hint?`${this.#f}__hint`:void 0}onChange(e){let t=e.currentTarget.value;e.stopPropagation(),this._setValue(t),this.#o(t),this.dispatchEvent(new CustomEvent(`change`,{detail:t,bubbles:!0,composed:!0}))}render(){return a`<div class="${I.wrapper}">
			${h(this.label,()=>a`<label for="${this.#f}">
						${this.label}
						${h(this.optional,()=>a`<span
									>${se._({id:`select.label.optional`,message:`(optional)`,comment:`Shown behind label when marked as optional`})}</span
								>`)}</label
					>`)}
			<div class="${I.selectWrapper}">
				<select
					part="input"
					class="${this.#l}"
					id="${this.#f}"
					?disabled=${this.disabled}
					aria-readonly="${this.readonly}"
					aria-describedby="${x(this.#p)}"
					aria-invalid="${x(this.invalid)}"
					aria-errormessage="${x(this.invalid&&this.#p)}"
					@keydown=${this.handleKeyDown}
					@change=${this.onChange}
				>
					${this._options}
				</select>
				<div class="${this.#d}">
					<w-icon
						name="ChevronDown"
						size="small"
						locale="${n()}"
						class="flex"
					></w-icon>
				</div>
			</div>
			${h(this.helpText||this.always||this.invalid,()=>a`<div id="${this.#p}" class="${this.#u}">
							${this.helpText||this.hint}
						</div>`)}
		</div>`}},p([i({attribute:`auto-focus`,type:Boolean,reflect:!0})],L.prototype,`autoFocus`,void 0),p([i({type:Boolean,reflect:!0})],L.prototype,`autofocus`,void 0),p([i({attribute:`help-text`,reflect:!0})],L.prototype,`helpText`,void 0),p([i({type:Boolean,reflect:!0})],L.prototype,`invalid`,void 0),p([i({type:Boolean,reflect:!0})],L.prototype,`always`,void 0),p([i({reflect:!0})],L.prototype,`hint`,void 0),p([i({reflect:!0})],L.prototype,`label`,void 0),p([i({type:Boolean,reflect:!0})],L.prototype,`optional`,void 0),p([i({type:Boolean,reflect:!0})],L.prototype,`disabled`,void 0),p([i({attribute:`read-only`,type:Boolean,reflect:!0})],L.prototype,`readOnly`,void 0),p([i({type:Boolean,reflect:!0})],L.prototype,`readonly`,void 0),p([i({attribute:!1,state:!0})],L.prototype,`_options`,void 0),p([i({reflect:!0})],L.prototype,`name`,void 0),p([i({reflect:!0})],L.prototype,`value`,void 0),customElements.get(`w-select`)||customElements.define(`w-select`,L)})),z=e({Default:()=>W,Disabled:()=>q,HelpText:()=>G,Invalid:()=>K,NoLabel:()=>Y,Optional:()=>X,Placeholder:()=>Z,ReadOnly:()=>J,__namedExportsOrder:()=>Q,default:()=>U}),B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$=t((()=>{le(),ee(),c(),v(),R(),{events:B,args:V,argTypes:H}=l(`w-select`),U={title:`Forms/Select`,render(e){return a`
            <form>
                <w-select ${g(_(e))}>
                    <option value="raspberries">Raspberries</option>
                    <option value="strawberries" selected>Strawberries</option>
                    <option value="cloudberries">Cloudberries</option>
                </w-select>
            </form>
        `},args:V,argTypes:H,parameters:{actions:{handles:B}}},W={args:{label:`Berries`}},G={args:{label:`Berries`,"help-text":`We assume this is your jam preference`}},K={args:{label:`Berries`,invalid:!0,"help-text":`Wrong choice`}},q={args:{label:`Berries`,disabled:!0}},J={args:{label:`Berries`,"read-only":!0}},Y={render(e){return a`
            <div style="display: flex; flex-direction: column; gap: 32px;">
                <w-select
                    ${g(_(e))}
                    aria-label="Your selection is berry nice!"
                >
                    <option value="raspberries">Raspberries</option>
                    <option value="strawberries" selected>Strawberries</option>
                    <option value="cloudberries">Cloudberries</option>
                </w-select>

                <label id="select-label" htmlFor="warp-aria-labelledby-example">
                    You're berry good at selecting!
                </label>
                <w-select ${g(_(e))} id="warp-aria-labelledby-example">
                    <option value="raspberries">Raspberries</option>
                    <option value="strawberries" selected>Strawberries</option>
                    <option value="cloudberries">Cloudberries</option>
                </w-select>
            </div>
        `}},X={args:{label:`Berries`,optional:!0}},Z={args:{label:`Berries`},render(e){return a`
            <w-select ${g(_(e))}>
                <option value="">Select an option</option>
                <option value="raspberries">Raspberries</option>
                <option value="strawberries">Strawberries</option>
                <option value="cloudberries">Cloudberries</option>
            </w-select>
        `}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Berries"
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Berries",
    "help-text": "We assume this is your jam preference"
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Berries",
    invalid: true,
    "help-text": "Wrong choice"
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Berries",
    disabled: true
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Berries",
    "read-only": true
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Berries",
    optional: true
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},Q=[`Default`,`HelpText`,`Invalid`,`Disabled`,`ReadOnly`,`NoLabel`,`Optional`,`Placeholder`]}));$();export{W as Default,q as Disabled,G as HelpText,K as Invalid,Y as NoLabel,X as Optional,Z as Placeholder,J as ReadOnly,Q as __namedExportsOrder,U as default,z as n,$ as t};