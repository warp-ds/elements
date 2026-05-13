import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{m as n,n as r,r as i,s as a,t as o}from"./lit-JruGAyH3.js";import{n as s,t as c}from"./dist-BZcjgT0h.js";import{n as l,t as u}from"./index.m-B95STiSX.js";import{a as d,i as ee,n as f,o as p,r as m,t as h}from"./decorate-Dk3JVGAn.js";import{n as te,t as g}from"./styles-DphVJT09.js";import{a as _,o as v}from"./iframe-CoSsnPOh.js";import{i as y,n as b,r as x,t as S}from"./utilities-3bRBgS0D.js";import{n as C,t as w}from"./form-control-CGD42XQP.js";import{n as T,t as E}from"./if-defined-BruKJeYQ.js";import{n as D,t as O}from"./utils-CHoXVWvS.js";var k,A=e((()=>{o(),k=n`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.focus\\:\\[--w-outline-offset\\:-2px\\]:focus{--w-outline-offset:-2px}.bg-transparent{background-color:#0000}.border-1{border-width:1px}.rounded-4{border-radius:4px}.caret-current{caret-color:currentColor}.block{display:block}.flex{display:flex}.focusable:focus{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:focus-visible{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:not(:focus-visible){outline:none}.outline-\\[--w-s-color-border-negative\\]\\!{outline-color:var(--w-s-color-border-negative)!important}.fixed{position:fixed}.relative{position:relative}.static{position:static}.s-bg{background-color:var(--w-s-color-background)}.s-bg-disabled-subtle{background-color:var(--w-s-color-background-disabled-subtle)}.s-text{color:var(--w-s-color-text)}.s-text-disabled{color:var(--w-s-color-text-disabled)}.s-text-negative{color:var(--w-s-color-text-negative)}.s-text-subtle{color:var(--w-s-color-text-subtle)}.placeholder\\:s-text-placeholder::placeholder{color:var(--w-s-color-text-placeholder)}.s-border-disabled{border-color:var(--w-s-color-border-disabled)}.s-border-negative{border-color:var(--w-s-color-border-negative)}.s-border-strong{border-color:var(--w-s-color-border-strong)}.hover\\:s-border-negative-hover:hover{border-color:var(--w-s-color-border-negative-hover)}.hover\\:s-border-strong-hover:hover{border-color:var(--w-s-color-border-strong-hover)}.active\\:s-border-selected:active{border-color:var(--w-s-color-border-selected)}.w-full{width:100%}.min-h-\\[42\\]{min-height:4.2rem}.mb-0{margin-bottom:0}.mt-4{margin-top:.4rem}.px-8{padding-left:.8rem;padding-right:.8rem}.py-12{padding-top:1.2rem;padding-bottom:1.2rem}.pb-4{padding-bottom:.4rem}.pl-0{padding-left:0}.pl-8{padding-left:.8rem}.pr-40{padding-right:4rem}.pl-\\[var\\(--w-prefix-width\\,_40px\\)\\]{padding-left:var(--w-prefix-width,40px)}.cursor-pointer{cursor:pointer}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-smoothing:grayscale}.font-bold{font-weight:700}.font-normal{font-weight:400}.pointer-events-none{pointer-events:none}.resize{resize:both}.resize-none{resize:none}.text-m{font-size:var(--w-font-size-m);line-height:var(--w-line-height-m)}.text-s{font-size:var(--w-font-size-s);line-height:var(--w-line-height-s)}.text-xs{font-size:var(--w-font-size-xs);line-height:var(--w-line-height-xs)}.leading-m{line-height:var(--w-line-height-m)}@media (min-width:480px){.sm\\:min-h-\\[45\\]{min-height:4.5rem}}`})),j,M,N,P,F=e((()=>{u(),s(),w(),o(),m(),E(),g(),O(),A(),f(),j={base:`block text-m leading-m mb-0 px-8 py-12 rounded-4 w-full focusable focus:[--w-outline-offset:-2px] caret-current`,default:`border-1 s-text s-bg s-border-strong hover:s-border-strong-hover active:s-border-selected`,disabled:`border-1 s-text-disabled s-bg-disabled-subtle s-border-disabled pointer-events-none`,invalid:`border-1 s-text-negative s-bg s-border-negative hover:s-border-negative-hover outline-[--w-s-color-border-negative]!`,readOnly:`pl-0 bg-transparent pointer-events-none`,placeholder:`placeholder:s-text-placeholder`,suffix:`pr-40`,prefix:`pl-[var(--w-prefix-width,_40px)]`,textArea:`min-h-[42] sm:min-h-[45]`,fixed:`resize-none`},M={base:`antialiased block relative text-s font-bold pb-4 cursor-pointer s-text flex`,optional:`pl-8 font-normal text-s s-text-subtle`},N={base:`text-xs mt-4 block`,color:`s-text-subtle`,colorInvalid:`s-text-negative`},P=class extends C(r){constructor(...e){super(...e),this.disabled=!1,this.invalid=!1,this.readOnly=!1,this.readonly=!1,this.required=!1,this.optional=!1,this.minHeight=-1/0,this.maxHeight=1/0,this.#e=null,this.#t=D(`textarea-`),this.#n=!1,this.#r=void 0,this.#i=!1,this.#l=e=>{e.preventDefault(),this.#i=!0,this.#s()}}static{this.shadowRootOptions={...r.shadowRootOptions,delegatesFocus:!0}}#e;#t;#n;#r;#i;updated(e){e.has(`value`)&&this.setValue(this.value),(e.has(`value`)||e.has(`required`)||e.has(`disabled`))&&this.#s()}resetFormControl(){this.value=this.#e,this.#i=!1,this.#o(),this.#s()}get validationMessage(){return this.internals.validationMessage}get validity(){return this.internals.validity}checkValidity(){return this.#s(),this.internals.checkValidity()}reportValidity(){return this.#i=!0,this.#s(),this.internals.checkValidity()}setCustomValidity(e){e?(this.internals.setValidity({customError:!0},e,this._textarea),this.#a(e)):(this.#o(),this.#s())}#a(e){this.#n||(this.#r=this.helpText),this.#n=!0,this.invalid=!0,this.helpText=e}#o(){this.#n&&=(this.invalid=!1,this.helpText=this.#r,this.#r=void 0,!1)}#s(){if(this.disabled){this.internals.setValidity({}),this.#o();return}if(this.required&&!this.value){let e=this._textarea?.validationMessage||``;this.internals.setValidity({valueMissing:!0},e,this._textarea),this.#i&&this.#a(e);return}this.internals.setValidity({}),this.#o()}static{this.styles=[te,k]}get _textareaStyles(){return l([j.base,j.textArea,!!this.placeholder&&j.placeholder,!this.invalid&&!this.disabled&&!(this.readonly||this.readOnly)&&j.default,this.invalid&&!this.disabled&&!(this.readonly||this.readOnly)&&j.invalid,!this.invalid&&this.disabled&&!(this.readonly||this.readOnly)&&j.disabled,!this.invalid&&!this.disabled&&(this.readonly||this.readOnly)&&j.readOnly,this.maxRows&&j.fixed])}get _helptextstyles(){return l([N.base,this.invalid?N.colorInvalid:N.color])}get _helpId(){if(this.helpText)return`${this._id}__hint`}get _id(){return this.#t}get _error(){if(this.invalid&&this._helpId)return this._helpId}async connectedCallback(){if(super.connectedCallback(),this.#e=this.value,this.setValue(this.value),this.addEventListener(`invalid`,this.#l),await this.updateComplete,this.value||this.minRows){let e=this.shadowRoot?.querySelector(`textarea`);e&&this.#u(e)}}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`invalid`,this.#l)}firstUpdated(e){super.firstUpdated(e),this.#s()}handler(e){let t=e.currentTarget;this.value=t.value,this.#u(t)}#c(){this.#i=!0,this.#s()}#l;#u(e){let t=getComputedStyle(e),n=Number.parseFloat(t.getPropertyValue(`border-top-width`)),r=Number.parseFloat(t.getPropertyValue(`border-bottom-width`)),i=Number.parseFloat(t.getPropertyValue(`line-height`)),a=Number.parseFloat(t.getPropertyValue(`padding-top`))+Number.parseFloat(t.getPropertyValue(`padding-bottom`))+r+n;this.minRows&&(this.minHeight=i*this.minRows+a),this.maxRows&&(this.maxHeight=i*this.maxRows+a);let o=e.scrollHeight+n+r,s=Math.min(this.maxHeight,Math.max(this.minHeight,o));e.style.setProperty(`height`,s+`px`)}render(){return a`
        ${this.label?a`
                <label for="${this._id}" class=${M.base}>
                  ${this.label}
                  ${this.optional?a`
                          <span class="${M.optional}">
                            ${c._({id:`textarea.label.optional`,message:`(optional)`,comment:`Shown behind label when marked as optional`})}
                          </span>
                    `:i}
                </label>`:i}
        <textarea
          id="${this._id}"
          class="${this._textareaStyles}"
          name="${T(this.name)}"
          placeholder="${T(this.placeholder)}"
          .value="${this.value||``}"
          aria-describedby="${T(this._helpId||(this.ariaDescription?`aria-description`:void 0))}"
          aria-errormessage="${T(this._error)}"
          aria-invalid=${this.invalid?`true`:i}
          ?disabled="${this.disabled}"
          ?readonly="${this.readonly||this.readOnly}"
          ?required="${this.required}"
          @input="${this.handler}"
          @blur="${this.#c}">
        </textarea>
        ${this.helpText?a`<div class="${this._helptextstyles}" id="${this._helpId}">${this.helpText}</div>`:i}
    `}},h([p({type:Boolean,reflect:!0})],P.prototype,`disabled`,void 0),h([p({type:Boolean,reflect:!0})],P.prototype,`invalid`,void 0),h([p({type:String,reflect:!0})],P.prototype,`label`,void 0),h([p({type:String,reflect:!0,attribute:`help-text`})],P.prototype,`helpText`,void 0),h([p({type:Number,reflect:!0,attribute:`maximum-rows`})],P.prototype,`maxRows`,void 0),h([p({type:Number,reflect:!0,attribute:`minimum-rows`})],P.prototype,`minRows`,void 0),h([p({type:String,reflect:!0})],P.prototype,`name`,void 0),h([p({type:String,reflect:!0})],P.prototype,`placeholder`,void 0),h([p({type:Boolean,reflect:!0,attribute:`read-only`})],P.prototype,`readOnly`,void 0),h([p({type:Boolean,reflect:!0})],P.prototype,`readonly`,void 0),h([p({type:Boolean,reflect:!0})],P.prototype,`required`,void 0),h([p({type:String,reflect:!0})],P.prototype,`value`,void 0),h([p({type:Boolean,reflect:!0})],P.prototype,`optional`,void 0),h([d()],P.prototype,`minHeight`,void 0),h([d()],P.prototype,`maxHeight`,void 0),h([ee(`textarea`)],P.prototype,`_textarea`,void 0),customElements.get(`w-textarea`)||customElements.define(`w-textarea`,P)})),I=t({Autofocus:()=>X,ControlledSize:()=>Y,Default:()=>V,Disabled:()=>K,FormParticipation:()=>Z,Invalid:()=>G,NoVisualLabel:()=>W,Optional:()=>J,ReadOnly:()=>q,WithHelpText:()=>U,WithPlaceholder:()=>H,__namedExportsOrder:()=>Q,default:()=>B}),L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$=e((()=>{x(),v(),o(),S(),F(),{events:L,args:R,argTypes:z}=_(`w-textarea`),B={title:`Forms/Textarea`,render(e){return a`<w-textarea ${y(b(e))}></w-textarea>`},args:R,argTypes:z,parameters:{actions:{handles:L}}},V={args:{label:`Description`}},H={args:{label:`Description`,placeholder:`A Link to the Past is a distant prequel to the original The Legend of Zelda`}},U={args:{label:`Description`,"help-text":`You can provide a help text if necessary`}},W={args:{"aria-label":`Description`}},G={args:{label:`Description`,invalid:!0,"help-text":`A description is required`}},K={args:{label:`Description`,disabled:!0,value:`A Link to the Past is a distant prequel to the original The Legend of Zelda, and, within the official chronology, is the first game in the "Defeated Hero" timeline that connects to an alternate reality scenario where the Hero of Time does not succeed in Ocarina of Time.`}},q={args:{label:`Description`,"read-only":!0,value:`A Link to the Past is a distant prequel to the original The Legend of Zelda, and, within the official chronology, is the first game in the "Defeated Hero" timeline that connects to an alternate reality scenario where the Hero of Time does not succeed in Ocarina of Time.`}},J={args:{label:`Description`,optional:!0}},Y={args:{label:`Description`,"minimum-rows":3,"maximum-rows":3}},X={args:{label:`Description`,"minimum-rows":3,"maximum-rows":3,placeholder:`Refresh to see the autofocus take effect`,autofocus:!0}},Z={render:()=>a`
    <form
      @submit=${e=>{e.preventDefault();let t=e.target,n=new FormData(t);alert(`Form submitted with message: `+n.get(`message`))}}>
      <w-textarea
        label="Message"
        name="message"
        required
        help-text="This field is required. Try submitting without a value."></w-textarea>
      <div style="margin-top: 16px; display: flex; gap: 8px;">
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </div>
    </form>
  `,parameters:{docs:{description:{story:`Demonstrates form validation using ElementInternals. The textarea participates in native form validation - submission is blocked when the required field is empty, and the browser shows a validation message.`}}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Description'
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    placeholder: 'A Link to the Past is a distant prequel to the original The Legend of Zelda'
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    'help-text': 'You can provide a help text if necessary'
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Description'
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    invalid: true,
    'help-text': 'A description is required'
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    disabled: true,
    value: 'A Link to the Past is a distant prequel to the original The Legend of Zelda, and, within the official chronology, is the first game in the "Defeated Hero" timeline that connects to an alternate reality scenario where the Hero of Time does not succeed in Ocarina of Time.'
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    'read-only': true,
    value: 'A Link to the Past is a distant prequel to the original The Legend of Zelda, and, within the official chronology, is the first game in the "Defeated Hero" timeline that connects to an alternate reality scenario where the Hero of Time does not succeed in Ocarina of Time.'
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    optional: true
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    'minimum-rows': 3,
    'maximum-rows': 3
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    'minimum-rows': 3,
    'maximum-rows': 3,
    placeholder: 'Refresh to see the autofocus take effect',
    autofocus: true
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <form
      @submit=\${(e: Event) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    alert('Form submitted with message: ' + formData.get('message'));
  }}>
      <w-textarea
        label="Message"
        name="message"
        required
        help-text="This field is required. Try submitting without a value."></w-textarea>
      <div style="margin-top: 16px; display: flex; gap: 8px;">
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </div>
    </form>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates form validation using ElementInternals. The textarea participates in native form validation - submission is blocked when the required field is empty, and the browser shows a validation message.'
      }
    }
  }
}`,...Z.parameters?.docs?.source}}},Q=[`Default`,`WithPlaceholder`,`WithHelpText`,`NoVisualLabel`,`Invalid`,`Disabled`,`ReadOnly`,`Optional`,`ControlledSize`,`Autofocus`,`FormParticipation`]}));$();export{X as Autofocus,Y as ControlledSize,V as Default,K as Disabled,Z as FormParticipation,G as Invalid,W as NoVisualLabel,J as Optional,q as ReadOnly,U as WithHelpText,H as WithPlaceholder,Q as __namedExportsOrder,B as default,I as n,$ as t};