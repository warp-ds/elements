import{a as e,i as t}from"./preload-helper-xPQekRTU.js";import{Bt as n,D as r,E as i,Ht as a,J as o,Kt as s,Lt as c,M as l,N as ee,O as te,Rt as u,Wt as d,b as ne,f,j as re,k as p,l as ie,p as ae,q as oe,u as se,w as m,x as ce}from"./iframe-ihHcNuh3.js";import{a as le,n as ue,r as de,t as h}from"./utilities-DpCirleT.js";import{n as fe,t as g}from"./form-control-DtXadPi-.js";import{r as _,t as pe}from"./if-defined-CS24ACXJ.js";import{t as me}from"./tooltip-DpLuTpYE.js";import{n as v,t as y}from"./utils-D431BAPN.js";var b,x=t((()=>{c(),b=s(`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.focus\\:\\[--w-outline-offset\\:-2px\\]:focus{--w-outline-offset:-2px}.bg-transparent{background-color:#0000}.border-1{border-width:1px}.rounded-4{border-radius:4px}.caret-current{caret-color:currentColor}.block{display:block}.inline{display:inline}.focusable:focus{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:focus-visible{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:not(:focus-visible){outline:none}.outline-\\[--w-s-color-border-negative\\]\\!{outline-color:var(--w-s-color-border-negative)!important}.fixed{position:fixed}.static{position:static}.s-bg{background-color:var(--w-s-color-background)}.s-bg-disabled-subtle{background-color:var(--w-s-color-background-disabled-subtle)}.s-text{color:var(--w-s-color-text)}.s-text-disabled{color:var(--w-s-color-text-disabled)}.s-text-negative{color:var(--w-s-color-text-negative)}.placeholder\\:s-text-placeholder::placeholder{color:var(--w-s-color-text-placeholder)}.s-border-disabled{border-color:var(--w-s-color-border-disabled)}.s-border-negative{border-color:var(--w-s-color-border-negative)}.s-border-strong{border-color:var(--w-s-color-border-strong)}.hover\\:s-border-negative-hover:hover{border-color:var(--w-s-color-border-negative-hover)}.hover\\:s-border-strong-hover:hover{border-color:var(--w-s-color-border-strong-hover)}.active\\:s-border-selected:active{border-color:var(--w-s-color-border-selected)}.w-full{width:100%}.min-h-\\[42\\]{min-height:4.2rem}.mb-0{margin-bottom:0}.px-8{padding-left:.8rem;padding-right:.8rem}.py-12{padding-top:1.2rem;padding-bottom:1.2rem}.pl-0{padding-left:0}.pr-40{padding-right:4rem}.pl-\\[var\\(--w-prefix-width\\,_40px\\)\\]{padding-left:var(--w-prefix-width,40px)}.visible{visibility:visible}.pointer-events-none{pointer-events:none}.resize{resize:both}.resize-none{resize:none}.text-m{font-size:var(--w-font-size-m);line-height:var(--w-line-height-m)}.leading-m{line-height:var(--w-line-height-m)}@media (min-width:480px){.sm\\:min-h-\\[45\\]{min-height:4.5rem}}`)})),S,C,he=t((()=>{c(),S=d`
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
		height: 16px;
		margin: 0 0 0 4px;
		padding: 0;
		vertical-align: text-top;
	}

	w-tooltip {
		display: inline-block;
	}
`,C=d`
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
`})),w,ge=t((()=>{w=JSON.parse(`{"textarea.label.optional":["Valgfri"]}`)})),T,_e=t((()=>{T=JSON.parse(`{"textarea.label.optional":["Optional"]}`)})),E,D=t((()=>{E=JSON.parse(`{"textarea.label.optional":["Valinnainen"]}`)})),O,k=t((()=>{O=JSON.parse(`{"textarea.label.optional":["Valgfri"]}`)})),A,j=t((()=>{A=JSON.parse(`{"textarea.label.optional":["Valfritt"]}`)})),M,N,P=t((()=>{r(),o(),g(),c(),ne(),pe(),ie(),y(),x(),he(),re(),ge(),_e(),D(),k(),j(),ae(),M={base:`block text-m leading-m mb-0 px-8 py-12 rounded-4 w-full focusable focus:[--w-outline-offset:-2px] caret-current`,default:`border-1 s-text s-bg s-border-strong hover:s-border-strong-hover active:s-border-selected`,disabled:`border-1 s-text-disabled s-bg-disabled-subtle s-border-disabled pointer-events-none`,invalid:`border-1 s-text-negative s-bg s-border-negative hover:s-border-negative-hover outline-[--w-s-color-border-negative]!`,readOnly:`pl-0 bg-transparent pointer-events-none`,placeholder:`placeholder:s-text-placeholder`,suffix:`pr-40`,prefix:`pl-[var(--w-prefix-width,_40px)]`,textArea:`min-h-[42] sm:min-h-[45]`,fixed:`resize-none`},N=class extends fe(u){static{this.shadowRootOptions={...u.shadowRootOptions,delegatesFocus:!0}}#e;#t;#n;#r;#i;constructor(){super(),this.disabled=!1,this.invalid=!1,this.readOnly=!1,this.readonly=!1,this.required=!1,this.optional=!1,this.minHeight=-1/0,this.maxHeight=1/0,this.#e=void 0,this.#t=v(`textarea-`),this.#n=!1,this.#r=void 0,this.#i=!1,this.#l=e=>{e.preventDefault(),this.#i=!0,this.#s()},p(T,O,E,w,A)}updated(e){e.has(`value`)&&this.value!==void 0&&this.setValue(this.value),(e.has(`value`)||e.has(`required`)||e.has(`disabled`))&&this.#s()}resetFormControl(){this.value=this.#e,this.#i=!1,this.#o(),this.#s()}get validationMessage(){return this.internals.validationMessage}get validity(){return this.internals.validity}checkValidity(){return this.#s(),this.internals.checkValidity()}reportValidity(){return this.#i=!0,this.#s(),this.internals.checkValidity()}setCustomValidity(e){e?(this.internals.setValidity({customError:!0},e,this._textarea),this.#a(e)):(this.#o(),this.#s())}#a(e){this.#n||(this.#r=this.helpText),this.#n=!0,this.invalid=!0,this.helpText=e}#o(){this.#n&&=(this.invalid=!1,this.helpText=this.#r,this.#r=void 0,!1)}#s(){if(this.disabled){this.internals.setValidity({}),this.#o();return}if(this.required&&!this.value){let e=this._textarea?.validationMessage||``;this.internals.setValidity({valueMissing:!0},e,this._textarea),this.#i&&this.#a(e);return}this.internals.setValidity({}),this.#o()}static{this.styles=[se,b,S,C]}get _textareaStyles(){return te([M.base,M.textArea,!!this.placeholder&&M.placeholder,!this.invalid&&!this.disabled&&!(this.readonly||this.readOnly)&&M.default,this.invalid&&!this.disabled&&!(this.readonly||this.readOnly)&&M.invalid,!this.invalid&&this.disabled&&!(this.readonly||this.readOnly)&&M.disabled,!this.invalid&&!this.disabled&&(this.readonly||this.readOnly)&&M.readOnly,this.maxRows&&M.fixed])}get _helptextstyles(){return`help-text`}get _helpId(){if(this.helpText)return`${this._id}__hint`}get _id(){return this.#t}get _error(){if(this.invalid&&this._helpId)return this._helpId}async connectedCallback(){if(super.connectedCallback(),this.#e=this.value,this.value!==void 0&&this.setValue(this.value),this.addEventListener(`invalid`,this.#l),await this.updateComplete,this.value||this.minRows){let e=this.shadowRoot?.querySelector(`textarea`);e&&this.#u(e)}}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`invalid`,this.#l)}firstUpdated(e){super.firstUpdated(e),this.#s()}handler(e){let t=e.currentTarget;this.value=t.value,this.#u(t)}#c(){this.#i=!0,this.#s()}#l;#u(e){let t=getComputedStyle(e),n=Number.parseFloat(t.getPropertyValue(`border-top-width`)),r=Number.parseFloat(t.getPropertyValue(`border-bottom-width`)),i=Number.parseFloat(t.getPropertyValue(`line-height`)),a=Number.parseFloat(t.getPropertyValue(`padding-top`))+Number.parseFloat(t.getPropertyValue(`padding-bottom`))+r+n;this.minRows&&(this.minHeight=i*this.minRows+a),this.maxRows&&(this.maxHeight=i*this.maxRows+a);let o=e.scrollHeight+n+r,s=Math.min(this.maxHeight,Math.max(this.minHeight,o));e.style.setProperty(`height`,s+`px`)}render(){return a`
			${this.label?a`
						<label for="${this._id}">
							${this.label}
							${this.optional&&!this.required?a`
										<span>
											${oe._({id:`textarea.label.optional`,message:`Optional`,comment:`Shown behind label when marked as optional`})}
										</span>
									`:n}
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
									`:n}
						</label>
					`:n}
			<textarea
				part="input"
				id="${this._id}"
				class="${this._textareaStyles}"
				name="${_(this.name)}"
				placeholder="${_(this.placeholder)}"
				.value="${this.value||``}"
				aria-describedby="${_(this._helpId||(this.ariaDescription?`aria-description`:void 0))}"
				aria-errormessage="${_(this._error)}"
				aria-invalid=${this.invalid?`true`:n}
				?disabled="${this.disabled}"
				?readonly="${this.readonly||this.readOnly}"
				?required="${this.required}"
				@input="${this.handler}"
				@blur="${this.#c}"
			>
			</textarea>
			${this.helpText?a`<div class="${this._helptextstyles}" id="${this._helpId}">
						${this.helpText}
					</div>`:n}
		`}},f([i({type:Boolean,reflect:!0})],N.prototype,`disabled`,void 0),f([i({type:Boolean,reflect:!0})],N.prototype,`invalid`,void 0),f([i({type:String,reflect:!0})],N.prototype,`label`,void 0),f([i({type:String,reflect:!0,attribute:`help-text`})],N.prototype,`helpText`,void 0),f([i({type:Number,reflect:!0,attribute:`maximum-rows`})],N.prototype,`maxRows`,void 0),f([i({type:Number,reflect:!0,attribute:`minimum-rows`})],N.prototype,`minRows`,void 0),f([i({type:String,reflect:!0})],N.prototype,`name`,void 0),f([i({type:String,reflect:!0})],N.prototype,`placeholder`,void 0),f([i({type:Boolean,reflect:!0,attribute:`read-only`})],N.prototype,`readOnly`,void 0),f([i({type:Boolean,reflect:!0})],N.prototype,`readonly`,void 0),f([i({type:Boolean,reflect:!0})],N.prototype,`required`,void 0),f([i({type:String,reflect:!0})],N.prototype,`tooltip`,void 0),f([i({type:String,reflect:!0})],N.prototype,`value`,void 0),f([i({type:Boolean,reflect:!0})],N.prototype,`optional`,void 0),f([m()],N.prototype,`minHeight`,void 0),f([m()],N.prototype,`maxHeight`,void 0),f([ce(`textarea`)],N.prototype,`_textarea`,void 0),customElements.get(`w-textarea`)||customElements.define(`w-textarea`,N)})),F=e({Autofocus:()=>Y,ControlledSize:()=>J,Default:()=>B,Disabled:()=>G,FormParticipation:()=>X,Invalid:()=>W,NoVisualLabel:()=>U,Optional:()=>q,ReadOnly:()=>K,WithHelpText:()=>H,WithPlaceholder:()=>V,WithTooltip:()=>Z,__namedExportsOrder:()=>Q,default:()=>z}),I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$=t((()=>{de(),ee(),c(),h(),P(),me(),{events:I,args:L,argTypes:R}=l(`w-textarea`),z={title:`Forms/Textarea`,render(e){return a`<w-textarea ${le(ue(e))}></w-textarea>`},args:L,argTypes:R,parameters:{actions:{handles:I}}},B={args:{label:`Description`}},V={args:{label:`Description`,placeholder:`A Link to the Past is a distant prequel to the original The Legend of Zelda`}},H={args:{label:`Description`,"help-text":`You can provide a help text if necessary`}},U={args:{"aria-label":`Description`}},W={args:{label:`Description`,invalid:!0,"help-text":`A description is required`}},G={args:{label:`Description`,disabled:!0,value:`A Link to the Past is a distant prequel to the original The Legend of Zelda, and, within the official chronology, is the first game in the "Defeated Hero" timeline that connects to an alternate reality scenario where the Hero of Time does not succeed in Ocarina of Time.`}},K={args:{label:`Description`,"read-only":!0,value:`A Link to the Past is a distant prequel to the original The Legend of Zelda, and, within the official chronology, is the first game in the "Defeated Hero" timeline that connects to an alternate reality scenario where the Hero of Time does not succeed in Ocarina of Time.`}},q={args:{label:`Description`,optional:!0}},J={args:{label:`Description`,"minimum-rows":3,"maximum-rows":3}},Y={args:{label:`Description`,"minimum-rows":3,"maximum-rows":3,placeholder:`Refresh to see the autofocus take effect`,autofocus:!0}},X={render:()=>a`
        <form
            @submit=${e=>{e.preventDefault();let t=e.target,n=new FormData(t);alert(`Form submitted with message: `+n.get(`message`))}}
        >
            <w-textarea
                label="Message"
                name="message"
                required
                help-text="This field is required. Try submitting without a value."
            ></w-textarea>
            <div style="margin-top: 16px; display: flex; gap: 8px;">
                <button type="submit">Submit</button>
                <button type="reset">Reset</button>
            </div>
        </form>
    `,parameters:{docs:{description:{story:`Demonstrates form validation using ElementInternals. The textarea participates in native form validation - submission is blocked when the required field is empty, and the browser shows a validation message.`}}}},Z={args:{optional:!0,required:!1},render({optional:e,required:t}){return a`
            <w-textarea
                name="tooltip-demo"
                label="Needs an explanation"
                help-text="Help text is available, but might not be enough, or the added context is not important enough that we use help-text"
                tooltip="This tooltip adds supplementary information"
                ?optional=${e}
                ?required=${t}
            ></w-textarea>
        `}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Description"
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Description",
    placeholder: "A Link to the Past is a distant prequel to the original The Legend of Zelda"
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Description",
    "help-text": "You can provide a help text if necessary"
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-label": "Description"
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Description",
    invalid: true,
    "help-text": "A description is required"
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Description",
    disabled: true,
    value: 'A Link to the Past is a distant prequel to the original The Legend of Zelda, and, within the official chronology, is the first game in the "Defeated Hero" timeline that connects to an alternate reality scenario where the Hero of Time does not succeed in Ocarina of Time.'
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Description",
    "read-only": true,
    value: 'A Link to the Past is a distant prequel to the original The Legend of Zelda, and, within the official chronology, is the first game in the "Defeated Hero" timeline that connects to an alternate reality scenario where the Hero of Time does not succeed in Ocarina of Time.'
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Description",
    optional: true
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Description",
    "minimum-rows": 3,
    "maximum-rows": 3
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Description",
    "minimum-rows": 3,
    "maximum-rows": 3,
    placeholder: "Refresh to see the autofocus take effect",
    autofocus: true
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <form
            @submit=\${(e: Event) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    alert("Form submitted with message: " + formData.get("message"));
  }}
        >
            <w-textarea
                label="Message"
                name="message"
                required
                help-text="This field is required. Try submitting without a value."
            ></w-textarea>
            <div style="margin-top: 16px; display: flex; gap: 8px;">
                <button type="submit">Submit</button>
                <button type="reset">Reset</button>
            </div>
        </form>
    \`,
  parameters: {
    docs: {
      description: {
        story: "Demonstrates form validation using ElementInternals. The textarea participates in native form validation - submission is blocked when the required field is empty, and the browser shows a validation message."
      }
    }
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
            <w-textarea
                name="tooltip-demo"
                label="Needs an explanation"
                help-text="Help text is available, but might not be enough, or the added context is not important enough that we use help-text"
                tooltip="This tooltip adds supplementary information"
                ?optional=\${optional}
                ?required=\${required}
            ></w-textarea>
        \`;
  }
}`,...Z.parameters?.docs?.source}}},Q=[`Default`,`WithPlaceholder`,`WithHelpText`,`NoVisualLabel`,`Invalid`,`Disabled`,`ReadOnly`,`Optional`,`ControlledSize`,`Autofocus`,`FormParticipation`,`WithTooltip`]}));$();export{Y as Autofocus,J as ControlledSize,B as Default,G as Disabled,X as FormParticipation,W as Invalid,U as NoVisualLabel,q as Optional,K as ReadOnly,H as WithHelpText,V as WithPlaceholder,Z as WithTooltip,Q as __namedExportsOrder,z as default,F as n,$ as t};