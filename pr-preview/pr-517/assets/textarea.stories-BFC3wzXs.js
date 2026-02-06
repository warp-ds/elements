import{a as P,i as H,r as R,j as V,A as c,l as N,b as l,d as A,n as a,m as q,g as C}from"./iframe-CGbjfi2o.js";import{s as E,p as M}from"./utilities-Bd39rqz0.js";import{e as B}from"./query-NYTjQBeo.js";import{o as S}from"./if-defined-DLvRqfFU.js";import{u as W}from"./utils-CCcvPjT2.js";import{F as Z}from"./FormControlMixin-DJnJZbro.js";const j=P`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.focus\\:\\[--w-outline-offset\\:-2px\\]:focus{--w-outline-offset:-2px}.bg-transparent{background-color:#0000}.border-1{border-width:1px}.rounded-4{border-radius:4px}.caret-current{caret-color:currentColor}.block{display:block}.flex{display:flex}.focusable:focus{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:focus-visible{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:not(:focus-visible){outline:none}.outline-\\[--w-s-color-border-negative\\]\\!{outline-color:var(--w-s-color-border-negative)!important}.fixed{position:fixed}.relative{position:relative}.static{position:static}.s-bg{background-color:var(--w-s-color-background)}.s-bg-disabled-subtle{background-color:var(--w-s-color-background-disabled-subtle)}.s-text{color:var(--w-s-color-text)}.s-text-disabled{color:var(--w-s-color-text-disabled)}.s-text-negative{color:var(--w-s-color-text-negative)}.s-text-subtle{color:var(--w-s-color-text-subtle)}.placeholder\\:s-text-placeholder::placeholder{color:var(--w-s-color-text-placeholder)}.s-border-disabled{border-color:var(--w-s-color-border-disabled)}.s-border-negative{border-color:var(--w-s-color-border-negative)}.s-border-strong{border-color:var(--w-s-color-border-strong)}.hover\\:s-border-negative-hover:hover{border-color:var(--w-s-color-border-negative-hover)}.hover\\:s-border-strong-hover:hover{border-color:var(--w-s-color-border-strong-hover)}.active\\:s-border-selected:active{border-color:var(--w-s-color-border-selected)}.w-full{width:100%}.min-h-\\[42\\]{min-height:4.2rem}.mb-0{margin-bottom:0}.mt-4{margin-top:.4rem}.px-8{padding-left:.8rem;padding-right:.8rem}.py-12{padding-top:1.2rem;padding-bottom:1.2rem}.pb-4{padding-bottom:.4rem}.pl-0{padding-left:0}.pl-8{padding-left:.8rem}.pr-40{padding-right:4rem}.pl-\\[var\\(--w-prefix-width\\,_40px\\)\\]{padding-left:var(--w-prefix-width,40px)}.cursor-pointer{cursor:pointer}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-smoothing:grayscale}.font-bold{font-weight:700}.font-normal{font-weight:400}.pointer-events-none{pointer-events:none}.resize{resize:both}.resize-none{resize:none}.text-m{font-size:var(--w-font-size-m);line-height:var(--w-line-height-m)}.text-s{font-size:var(--w-font-size-s);line-height:var(--w-line-height-s)}.text-xs{font-size:var(--w-font-size-xs);line-height:var(--w-line-height-xs)}.leading-m{line-height:var(--w-line-height-m)}@media (min-width:480px){.sm\\:min-h-\\[45\\]{min-height:4.5rem}}`;var Y=Object.defineProperty,r=(s,e,o,I)=>{for(var i=void 0,d=s.length-1,_;d>=0;d--)(_=s[d])&&(i=_(e,o,i)||i);return i&&Y(e,o,i),i};const n={base:"block text-m leading-m mb-0 px-8 py-12 rounded-4 w-full focusable focus:[--w-outline-offset:-2px] caret-current",default:"border-1 s-text s-bg s-border-strong hover:s-border-strong-hover active:s-border-selected",disabled:"border-1 s-text-disabled s-bg-disabled-subtle s-border-disabled pointer-events-none",invalid:"border-1 s-text-negative s-bg s-border-negative hover:s-border-negative-hover outline-[--w-s-color-border-negative]!",readOnly:"pl-0 bg-transparent pointer-events-none",placeholder:"placeholder:s-text-placeholder",textArea:"min-h-[42] sm:min-h-[45]",fixed:"resize-none"},$={base:"antialiased block relative text-s font-bold pb-4 cursor-pointer s-text flex",optional:"pl-8 font-normal text-s s-text-subtle",infoIcon:"pl-8"},k={base:"text-xs mt-4 block",color:"s-text-subtle",colorInvalid:"s-text-negative"};class t extends Z(H){constructor(){super(...arguments),this.minHeight=Number.NEGATIVE_INFINITY,this.maxHeight=Number.POSITIVE_INFINITY,this.#i=null,this.#n=W("textarea-"),this.#r=!1,this.#a=void 0,this.#t=!1,this.#s=e=>{e.preventDefault(),this.#t=!0,this.#e()}}static{this.shadowRootOptions={...H.shadowRootOptions,delegatesFocus:!0}}#i;#n;#r;#a;#t;updated(e){e.has("value")&&this.setValue(this.value),(e.has("value")||e.has("required")||e.has("disabled"))&&this.#e()}resetFormControl(){this.value=this.#i,this.#t=!1,this.#o(),this.#e()}get validationMessage(){return this.internals.validationMessage}get validity(){return this.internals.validity}checkValidity(){return this.#e(),this.internals.checkValidity()}reportValidity(){return this.#t=!0,this.#e(),this.internals.checkValidity()}setCustomValidity(e){e?(this.internals.setValidity({customError:!0},e,this._textarea),this.#l(e)):(this.#o(),this.#e())}#l(e){this.#r||(this.#a=this.helpText),this.#r=!0,this.invalid=!0,this.helpText=e}#o(){this.#r&&(this.invalid=!1,this.helpText=this.#a,this.#a=void 0,this.#r=!1)}#e(){if(this.disabled){this.internals.setValidity({}),this.#o();return}if(this.required&&!this.value){const e=this._textarea?.validationMessage||"";this.internals.setValidity({valueMissing:!0},e,this._textarea),this.#t&&this.#l(e);return}this.internals.setValidity({}),this.#o()}static{this.styles=[R,j]}get _textareaStyles(){return V([n.base,n.textArea,!!this.placeholder&&n.placeholder,!this.invalid&&!this.disabled&&!(this.readonly||this.readOnly)&&n.default,this.invalid&&!this.disabled&&!(this.readonly||this.readOnly)&&n.invalid,!this.invalid&&this.disabled&&!(this.readonly||this.readOnly)&&n.disabled,!this.invalid&&!this.disabled&&(this.readonly||this.readOnly)&&n.readOnly,this.maxRows&&n.fixed])}get _helptextstyles(){return V([k.base,this.invalid?k.colorInvalid:k.color])}get _helpId(){if(this.helpText)return`${this._id}__hint`}get _id(){return this.#n}get _error(){if(this.invalid&&this._helpId)return this._helpId}async connectedCallback(){if(super.connectedCallback(),this.#i=this.value,this.setValue(this.value),this.addEventListener("invalid",this.#s),await this.updateComplete,this.value||this.minRows){const e=this.shadowRoot?.querySelector("textarea");e&&this.#d(e)}}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("invalid",this.#s)}firstUpdated(e){super.firstUpdated(e),this.#e()}handler(e){const o=e.currentTarget;this.value=o.value,this.#d(o)}#c(){this.#t=!0,this.#e()}#s;#d(e){const o=getComputedStyle(e),I=Number.parseFloat(o.getPropertyValue("border-top-width")),i=Number.parseFloat(o.getPropertyValue("border-bottom-width")),d=Number.parseFloat(o.getPropertyValue("line-height")),_=Number.parseFloat(o.getPropertyValue("padding-top")),z=Number.parseFloat(o.getPropertyValue("padding-bottom")),O=_+z+i+I;this.minRows&&(this.minHeight=d*this.minRows+O),this.maxRows&&(this.maxHeight=d*this.maxRows+O);const F=e.scrollHeight+I+i,L=Math.min(this.maxHeight,Math.max(this.minHeight,F));e.style.setProperty("height",L+"px")}render(){return l`
        ${this.label?l`
                <label for="${this._id}" class=${$.base}>
                  ${this.label}
                  ${this.optional?l`
                          <span class="${$.optional}">
                            ${N._({id:"textarea.label.optional",message:"Optional",comment:"Shown behind label when marked as optional"})}
                          </span>
                    `:c}
                  ${this.infoTooltip?l`
                          <span class="${$.infoIcon}">
                            <w-icon name="Info" size="small" class="flex" locale="${A()}"></w-icon>
                          </span>
                    `:c}
                </label>`:c}
        <textarea
          id="${this._id}"
          class="${this._textareaStyles}"
          name="${S(this.name)}"
          placeholder="${S(this.placeholder)}"
          .value="${this.value||""}"
          aria-describedby="${S(this._helpId||(this.ariaDescription?"aria-description":void 0))}"
          aria-errormessage="${S(this._error)}"
          aria-invalid=${this.invalid?"true":c}
          ?disabled="${this.disabled}"
          ?readonly="${this.readonly||this.readOnly}"
          ?required="${this.required}"
          @input="${this.handler}"
          @blur="${this.#c}">
        </textarea>
        ${this.helpText?l`<div class="${this._helptextstyles}" id="${this._helpId}">${this.helpText}</div>`:c}
    `}}r([a({type:Boolean,reflect:!0})],t.prototype,"disabled");r([a({type:Boolean,reflect:!0})],t.prototype,"invalid");r([a({type:String,reflect:!0})],t.prototype,"label");r([a({type:String,reflect:!0,attribute:"help-text"})],t.prototype,"helpText");r([a({type:Number,reflect:!0,attribute:"maximum-rows"})],t.prototype,"maxRows");r([a({type:Number,reflect:!0,attribute:"minimum-rows"})],t.prototype,"minRows");r([a({type:String,reflect:!0})],t.prototype,"name");r([a({type:String,reflect:!0})],t.prototype,"placeholder");r([a({type:Boolean,reflect:!0,attribute:"read-only"})],t.prototype,"readOnly");r([a({type:Boolean,reflect:!0})],t.prototype,"readonly");r([a({type:Boolean,reflect:!0})],t.prototype,"required");r([a({type:String,reflect:!0})],t.prototype,"value");r([a({type:Boolean,reflect:!0})],t.prototype,"optional");r([a({type:Boolean,reflect:!0,attribute:"info-tooltip"})],t.prototype,"infoTooltip");r([q()],t.prototype,"minHeight");r([q()],t.prototype,"maxHeight");r([B("textarea")],t.prototype,"_textarea");customElements.get("w-textarea")||customElements.define("w-textarea",t);const{events:U,args:G,argTypes:J}=C("w-textarea"),K={title:"Forms/Textarea",render(s){return l`<w-textarea ${E(M(s))}></w-textarea>`},args:G,argTypes:J,parameters:{actions:{handles:U}}},p={args:{label:"Description"}},h={args:{label:"Description",placeholder:"A Link to the Past is a distant prequel to the original The Legend of Zelda"}},u={args:{label:"Description","help-text":"You can provide a help text if necessary"}},m={args:{"aria-label":"Description"}},b={args:{label:"Description",invalid:!0,"help-text":"A description is required"}},f={args:{label:"Description",disabled:!0,value:'A Link to the Past is a distant prequel to the original The Legend of Zelda, and, within the official chronology, is the first game in the "Defeated Hero" timeline that connects to an alternate reality scenario where the Hero of Time does not succeed in Ocarina of Time.'}},g={args:{label:"Description","read-only":!0,value:'A Link to the Past is a distant prequel to the original The Legend of Zelda, and, within the official chronology, is the first game in the "Defeated Hero" timeline that connects to an alternate reality scenario where the Hero of Time does not succeed in Ocarina of Time.'}},v={args:{label:"Description",optional:!0}},x={args:{label:"Description","info-tooltip":!0}},y={args:{label:"Description",optional:!0,"info-tooltip":!0}},w={args:{label:"Description","minimum-rows":3,"maximum-rows":3}},T={args:{label:"Description","minimum-rows":3,"maximum-rows":3,placeholder:"Refresh to see the autofocus take effect",autofocus:!0}},D={render:()=>l`
    <form
      @submit=${s=>{s.preventDefault();const e=s.target,o=new FormData(e);alert("Form submitted with message: "+o.get("message"))}}>
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
  `,parameters:{docs:{description:{story:"Demonstrates form validation using ElementInternals. The textarea participates in native form validation - submission is blocked when the required field is empty, and the browser shows a validation message."}}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Description'
  }
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    placeholder: 'A Link to the Past is a distant prequel to the original The Legend of Zelda'
  }
}`,...h.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    'help-text': 'You can provide a help text if necessary'
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Description'
  }
}`,...m.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    invalid: true,
    'help-text': 'A description is required'
  }
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    disabled: true,
    value: 'A Link to the Past is a distant prequel to the original The Legend of Zelda, and, within the official chronology, is the first game in the "Defeated Hero" timeline that connects to an alternate reality scenario where the Hero of Time does not succeed in Ocarina of Time.'
  }
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    'read-only': true,
    value: 'A Link to the Past is a distant prequel to the original The Legend of Zelda, and, within the official chronology, is the first game in the "Defeated Hero" timeline that connects to an alternate reality scenario where the Hero of Time does not succeed in Ocarina of Time.'
  }
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    optional: true
  }
}`,...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    'info-tooltip': true
  }
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    optional: true,
    'info-tooltip': true
  }
}`,...y.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    'minimum-rows': 3,
    'maximum-rows': 3
  }
}`,...w.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    'minimum-rows': 3,
    'maximum-rows': 3,
    placeholder: 'Refresh to see the autofocus take effect',
    autofocus: true
  }
}`,...T.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}};const Q=["Default","WithPlaceholder","WithHelpText","NoVisualLabel","Invalid","Disabled","ReadOnly","Optional","InfoTooltip","OptionalWithInfoTooltip","ControlledSize","Autofocus","FormParticipation"],ie=Object.freeze(Object.defineProperty({__proto__:null,Autofocus:T,ControlledSize:w,Default:p,Disabled:f,FormParticipation:D,InfoTooltip:x,Invalid:b,NoVisualLabel:m,Optional:v,OptionalWithInfoTooltip:y,ReadOnly:g,WithHelpText:u,WithPlaceholder:h,__namedExportsOrder:Q,default:K},Symbol.toStringTag,{value:"Module"}));export{w as C,p as D,b as I,m as N,v as O,g as R,ie as T,u as W,h as a,f as b};
