import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{a as n,c as r,d as i,h as a,l as o,r as s,s as c,t as l,x as u,y as d}from"./decorate-Bt2QF_uA.js";import{a as f,o as p,r as ee,t as te}from"./i18n-CkjYRTT1.js";import{n as ne,t as re}from"./dist-D5kJVy4t.js";import{n as ie,t as ae}from"./index.m-DHqwZk2H.js";import{t as oe}from"./query-BHY-nhsh.js";import{t as se}from"./icon-ND47zKHd.js";import{n as ce,t as le}from"./styles-Cw_r5k83.js";import{i as ue,n as de,r as fe}from"./utilities-BHNt5DhH.js";import{n as m,t as h}from"./FormControlMixin-BCJbRrUC.js";import{r as g,t as pe}from"./if-defined-DBI32Ir5.js";import{t as _}from"./tooltip-D5IbvAIJ.js";var v;function y(){return(y=e((()=>{r(),v=u(`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.focus\\:\\[--w-outline-offset\\:-2px\\]:focus{--w-outline-offset:-2px}.bg-transparent{background-color:#0000}.border-1{border-width:1px}.rounded-4{border-radius:4px}.caret-current{caret-color:currentColor}.block{display:block}.inline{display:inline}.focusable:focus{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:focus-visible{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:not(:focus-visible){outline:none}.outline-\\[--w-s-color-border-negative\\]\\!{outline-color:var(--w-s-color-border-negative)!important}.fixed{position:fixed}.static{position:static}.s-bg{background-color:var(--w-s-color-background)}.s-bg-disabled-subtle{background-color:var(--w-s-color-background-disabled-subtle)}.s-text{color:var(--w-s-color-text)}.s-text-disabled{color:var(--w-s-color-text-disabled)}.s-text-negative{color:var(--w-s-color-text-negative)}.placeholder\\:s-text-placeholder::placeholder{color:var(--w-s-color-text-placeholder)}.s-border-disabled{border-color:var(--w-s-color-border-disabled)}.s-border-negative{border-color:var(--w-s-color-border-negative)}.s-border-strong{border-color:var(--w-s-color-border-strong)}.hover\\:s-border-negative-hover:hover{border-color:var(--w-s-color-border-negative-hover)}.hover\\:s-border-strong-hover:hover{border-color:var(--w-s-color-border-strong-hover)}.active\\:s-border-selected:active{border-color:var(--w-s-color-border-selected)}.w-full{width:100%}.min-h-\\[42\\]{min-height:4.2rem}.mb-0{margin-bottom:0}.px-8{padding-left:.8rem;padding-right:.8rem}.py-12{padding-top:1.2rem;padding-bottom:1.2rem}.pl-0{padding-left:0}.pr-40{padding-right:4rem}.pl-\\[var\\(--w-prefix-width\\,_40px\\)\\]{padding-left:var(--w-prefix-width,40px)}.visible{visibility:visible}.pointer-events-none{pointer-events:none}.resize{resize:both}.resize-none{resize:none}.text-m{font-size:var(--w-font-size-m);line-height:var(--w-line-height-m)}.leading-m{line-height:var(--w-line-height-m)}@media (min-width:480px){.sm\\:min-h-\\[45\\]{min-height:4.5rem}}`)})))()}var b,x;function S(){return(S=e((()=>{r(),b=d`
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
`,x=d`
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
`})))()}var C;function w(){return(w=e((()=>{C=JSON.parse(`{"textarea.label.optional":["Valgfri"],"textarea.validation.invalid":["Angiv en gyldig værdi."],"textarea.validation.tooLong":["Gør teksten kortere til højst ",["maxLength"]," tegn (du bruger i øjeblikket ",["currentLength"]," tegn)."],"textarea.validation.tooShort":["Gør teksten længere til mindst ",["minLength"]," tegn (du bruger i øjeblikket ",["currentLength"]," tegn)."],"textarea.validation.valueMissing":["Udfyld dette felt."]}`)})))()}var T;function E(){return(E=e((()=>{T=JSON.parse(`{"textarea.label.optional":["Optional"],"textarea.validation.invalid":["Please enter a valid value."],"textarea.validation.tooLong":["Please shorten this text to ",["maxLength"]," characters or less (you are currently using ",["currentLength"]," characters)."],"textarea.validation.tooShort":["Please lengthen this text to ",["minLength"]," characters or more (you are currently using ",["currentLength"]," characters)."],"textarea.validation.valueMissing":["Please fill out this field."]}`)})))()}var D;function O(){return(O=e((()=>{D=JSON.parse(`{"textarea.label.optional":["Valinnainen"],"textarea.validation.invalid":["Anna kelvollinen arvo."],"textarea.validation.tooLong":["Lyhennä teksti enintään ",["maxLength"]," merkkiin (käytät tällä hetkellä ",["currentLength"]," merkkiä)."],"textarea.validation.tooShort":["Pidennä tekstiä vähintään ",["minLength"]," merkkiin (käytät tällä hetkellä ",["currentLength"]," merkkiä)."],"textarea.validation.valueMissing":["Täytä tämä kenttä."]}`)})))()}var k;function A(){return(A=e((()=>{k=JSON.parse(`{"textarea.label.optional":["Valgfri"],"textarea.validation.invalid":["Angi en gyldig verdi."],"textarea.validation.tooLong":["Gjør teksten kortere til høyst ",["maxLength"]," tegn (du bruker for øyeblikket ",["currentLength"]," tegn)."],"textarea.validation.tooShort":["Gjør teksten lengre til minst ",["minLength"]," tegn (du bruker for øyeblikket ",["currentLength"]," tegn)."],"textarea.validation.valueMissing":["Fyll ut dette feltet."]}`)})))()}var j;function M(){return(M=e((()=>{j=JSON.parse(`{"textarea.label.optional":["Valfritt"],"textarea.validation.invalid":["Ange ett giltigt värde."],"textarea.validation.tooLong":["Gör texten kortare till högst ",["maxLength"]," tecken (du använder för närvarande ",["currentLength"]," tecken)."],"textarea.validation.tooShort":["Gör texten längre till minst ",["minLength"]," tecken (du använder för närvarande ",["currentLength"]," tecken)."],"textarea.validation.valueMissing":["Fyll i det här fältet."]}`)})))()}var N,P;function F(){return(F=e((()=>{ae(),p(),m(),r(),s(),pe(),le(),y(),S(),ee(),w(),E(),O(),A(),M(),se(),_(),N={base:`block text-m leading-m mb-0 px-8 py-12 rounded-4 w-full focusable focus:[--w-outline-offset:-2px] caret-current`,default:`border-1 s-text s-bg s-border-strong hover:s-border-strong-hover active:s-border-selected`,disabled:`border-1 s-text-disabled s-bg-disabled-subtle s-border-disabled pointer-events-none`,invalid:`border-1 s-text-negative s-bg s-border-negative hover:s-border-negative-hover outline-[--w-s-color-border-negative]!`,readOnly:`pl-0 bg-transparent pointer-events-none`,placeholder:`placeholder:s-text-placeholder`,suffix:`pr-40`,prefix:`pl-[var(--w-prefix-width,_40px)]`,textArea:`min-h-[42] sm:min-h-[45]`,fixed:`resize-none`},P=class extends h(o){static{this.shadowRootOptions={...o.shadowRootOptions,delegatesFocus:!0}}get#e(){return this.helpText!==void 0||this._hasHelpTextSlot}#t;#n;#r;#i;#a;constructor(){super(),this.disabled=!1,this.invalid=!1,this.readOnly=!1,this.readonly=!1,this.required=!1,this.optional=!1,this.minHeight=-1/0,this.maxHeight=1/0,this._hasHelpTextSlot=!1,this.#t=void 0,this.#n=!1,this.#r=void 0,this.#i=!1,this.#a=``,this.#f=e=>{e.preventDefault(),this.#i=!0,this.#c()},te(T,k,D,C,j)}updated(e){e.has(`value`)&&this.value!==void 0&&this.setValue(this.value),(e.has(`value`)||e.has(`required`)||e.has(`disabled`)||e.has(`minLength`)||e.has(`maxLength`))&&this.#c()}resetFormControl(){this.value=this.#t,this.#i=!1,this.#s(),this.#c()}get validationMessage(){return this.internals.validationMessage}get validity(){return this.internals.validity}checkValidity(){return this.#c(),this.internals.checkValidity()}reportValidity(){return this.#i=!0,this.#c(),this.internals.checkValidity()}setCustomValidity(e){this.#a=e,e?(this.#c(),this.#o(e)):(this.#s(),this.#c())}#o(e){this.#n||(this.#r=this.helpText),this.#n=!0,this.invalid=!0,this.helpText=e}#s(){this.#n&&=(this.invalid=!1,this.helpText=this.#r,this.#r=void 0,!1)}#c(){if(!this._textarea)return;if(this.disabled){this.internals.setValidity({}),this.#s();return}let e=this._textarea.validity,t=this.value??this._textarea.value??``,n=t.length>0&&typeof this.minLength==`number`&&t.length<this.minLength,r=typeof this.maxLength==`number`&&t.length>this.maxLength,i={valueMissing:e.valueMissing,tooShort:e.tooShort||n,tooLong:e.tooLong||r,customError:this.#a!==``};if(Object.values(i).some(Boolean)){let e=this.#l(i,t.length);this.internals.setValidity(i,e,this._textarea),this.#i&&this.#o(e);return}this.internals.setValidity({}),this.#s()}#l(e,t){return e.customError&&this.#a?this.#a:e.valueMissing?f._({id:`textarea.validation.valueMissing`,message:`Please fill out this field.`,comment:`Validation message shown when textarea value is required`}):e.tooShort&&typeof this.minLength==`number`?f._({id:`textarea.validation.tooShort`,message:`Please lengthen this text to {minLength} characters or more (you are currently using {currentLength} characters).`,comment:`Validation message shown when textarea value is too short`,values:{minLength:this.minLength,currentLength:t}}):e.tooLong&&typeof this.maxLength==`number`?f._({id:`textarea.validation.tooLong`,message:`Please shorten this text to {maxLength} characters or less (you are currently using {currentLength} characters).`,comment:`Validation message shown when textarea value is too long`,values:{maxLength:this.maxLength,currentLength:t}}):f._({id:`textarea.validation.invalid`,message:`Please enter a valid value.`,comment:`Fallback validation message for textarea`})}static{this.styles=[ce,v,b,x]}get _textareaStyles(){return ie([N.base,N.textArea,!!this.placeholder&&N.placeholder,!this.invalid&&!this.disabled&&!(this.readonly||this.readOnly)&&N.default,this.invalid&&!this.disabled&&!(this.readonly||this.readOnly)&&N.invalid,!this.invalid&&this.disabled&&!(this.readonly||this.readOnly)&&N.disabled,!this.invalid&&!this.disabled&&(this.readonly||this.readOnly)&&N.readOnly,this.maxRows&&N.fixed])}get _helptextstyles(){return`help-text`}get _helpId(){if(this.#e)return`${this._id}__hint`}get _id(){return`textarea`}get _error(){if(this.invalid&&this._helpId)return this._helpId}async connectedCallback(){if(super.connectedCallback(),this.#t=this.value,this.value!==void 0&&this.setValue(this.value),this.addEventListener(`invalid`,this.#f),await this.updateComplete,this.value||this.minRows){let e=this.shadowRoot?.querySelector(`textarea`);e&&this.#p(e)}}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`invalid`,this.#f)}firstUpdated(e){super.firstUpdated(e),this.#c()}handler(e){let t=e.currentTarget;this.value=t.value,this.#p(t)}#u(e){this.dispatchEvent(new e.constructor(e.type,e))}#d(){this.#i=!0,this.#c()}#f;#p(e){let t=getComputedStyle(e),n=Number.parseFloat(t.getPropertyValue(`border-top-width`)),r=Number.parseFloat(t.getPropertyValue(`border-bottom-width`)),i=Number.parseFloat(t.getPropertyValue(`line-height`)),a=Number.parseFloat(t.getPropertyValue(`padding-top`))+Number.parseFloat(t.getPropertyValue(`padding-bottom`))+r+n;this.minRows&&(this.minHeight=i*this.minRows+a),this.maxRows&&(this.maxHeight=i*this.maxRows+a);let o=e.scrollHeight+n+r,s=Math.min(this.maxHeight,Math.max(this.minHeight,o));e.style.setProperty(`height`,s+`px`)}helpTextSlotChange(){let e=this.renderRoot.querySelector(`slot[name=help-text]`);this._hasHelpTextSlot=e.assignedElements().length>0}render(){return a`
			${this.label?a`
							<label for="${this._id}">
								${this.label}
								${this.optional&&!this.required?a`
												<span>
													${f._({id:`textarea.label.optional`,message:`Optional`,comment:`Shown behind label when marked as optional`})}
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
			<textarea
				part="input"
				id="${this._id}"
				class="${this._textareaStyles}"
				name="${g(this.name)}"
				placeholder="${g(this.placeholder)}"
				.value="${this.value||``}"
				aria-describedby="${g(this._helpId||(this.ariaDescription?`aria-description`:void 0))}"
				aria-errormessage="${g(this._error)}"
				aria-invalid=${g(this.invalid?`true`:void 0)}
				maxlength="${g(this.maxLength)}"
				minlength="${g(this.minLength)}"
				?disabled="${this.disabled}"
				?readonly="${this.readonly||this.readOnly}"
				?required="${this.required}"
				@input="${this.handler}"
				@blur="${this.#d}"
				@change="${this.#u}"
			>
			</textarea>
			<div
				?hidden=${!this.#e}
				class="${this._helptextstyles}"
				id="${g(this._helpId)}"
			>
				${this.helpText}
				<slot @slotchange="${this.helpTextSlotChange}" name="help-text"></slot>
			</div>
		`}},l([c({type:Boolean,reflect:!0})],P.prototype,`disabled`,void 0),l([c({type:Boolean,reflect:!0})],P.prototype,`invalid`,void 0),l([c({type:String,reflect:!0})],P.prototype,`label`,void 0),l([c({type:String,reflect:!0,attribute:`help-text`})],P.prototype,`helpText`,void 0),l([c({type:Number,reflect:!0,attribute:`maximum-rows`})],P.prototype,`maxRows`,void 0),l([c({type:Number,reflect:!0,attribute:`minimum-rows`})],P.prototype,`minRows`,void 0),l([c({type:Number,reflect:!0,attribute:`maxlength`})],P.prototype,`maxLength`,void 0),l([c({type:Number,reflect:!0,attribute:`minlength`})],P.prototype,`minLength`,void 0),l([c({type:String,reflect:!0})],P.prototype,`name`,void 0),l([c({type:String,reflect:!0})],P.prototype,`placeholder`,void 0),l([c({type:Boolean,reflect:!0,attribute:`read-only`})],P.prototype,`readOnly`,void 0),l([c({type:Boolean,reflect:!0})],P.prototype,`readonly`,void 0),l([c({type:Boolean,reflect:!0})],P.prototype,`required`,void 0),l([c({type:String,reflect:!0})],P.prototype,`tooltip`,void 0),l([c({type:String,reflect:!0})],P.prototype,`value`,void 0),l([c({type:Boolean,reflect:!0})],P.prototype,`optional`,void 0),l([n()],P.prototype,`minHeight`,void 0),l([n()],P.prototype,`maxHeight`,void 0),l([oe(`textarea`)],P.prototype,`_textarea`,void 0),l([n()],P.prototype,`_hasHelpTextSlot`,void 0),customElements.get(`w-textarea`)||customElements.define(`w-textarea`,P)})))()}var I=t({Autofocus:()=>Y,ControlledSize:()=>J,Default:()=>B,Disabled:()=>G,FormParticipation:()=>X,Invalid:()=>W,NoVisualLabel:()=>U,Optional:()=>q,ReadOnly:()=>K,WithHelpText:()=>H,WithPlaceholder:()=>V,WithTooltip:()=>Z,__namedExportsOrder:()=>Q,default:()=>z}),L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{fe(),ne(),r(),F(),_(),{args:L,argTypes:R}=re(`w-textarea`),z={title:`Forms/Textarea`,render(e){return a`<w-textarea
            ${ue(de(e))}
            @blur=${e=>console.log(e)}
            @input=${e=>console.log(e)}
            @change=${e=>console.log(e)}
        ></w-textarea>`},args:L,argTypes:R},B={args:{label:`Description`}},V={args:{label:`Description`,placeholder:`A Link to the Past is a distant prequel to the original The Legend of Zelda`}},H={args:{label:`Description`,"help-text":`You can provide a help text if necessary`}},U={args:{"aria-label":`Description`}},W={args:{label:`Description`,invalid:!0,"help-text":`A description is required`}},G={args:{label:`Description`,disabled:!0,value:`A Link to the Past is a distant prequel to the original The Legend of Zelda, and, within the official chronology, is the first game in the "Defeated Hero" timeline that connects to an alternate reality scenario where the Hero of Time does not succeed in Ocarina of Time.`}},K={args:{label:`Description`,"read-only":!0,value:`A Link to the Past is a distant prequel to the original The Legend of Zelda, and, within the official chronology, is the first game in the "Defeated Hero" timeline that connects to an alternate reality scenario where the Hero of Time does not succeed in Ocarina of Time.`}},q={args:{label:`Description`,optional:!0}},J={args:{label:`Description`,"minimum-rows":3,"maximum-rows":3}},Y={args:{label:`Description`,"minimum-rows":3,"maximum-rows":3,placeholder:`Refresh to see the autofocus take effect`,autofocus:!0}},X={render:()=>a`
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
}`,...Z.parameters?.docs?.source}}},Q=[`Default`,`WithPlaceholder`,`WithHelpText`,`NoVisualLabel`,`Invalid`,`Disabled`,`ReadOnly`,`Optional`,`ControlledSize`,`Autofocus`,`FormParticipation`,`WithTooltip`]})))()}export{U as a,H as c,$ as d,I as f,W as i,V as l,B as n,q as o,G as r,K as s,J as t,Z as u};