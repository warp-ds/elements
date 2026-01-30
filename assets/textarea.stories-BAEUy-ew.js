import{a as F,i as $,r as P,k as I,A as T,h as L,b as d,n as i,l as O,g as R}from"./iframe-C6l8ksTH.js";import{s as N,p as A}from"./utilities-BxwYi8Yx.js";import{e as C}from"./query-NYTjQBeo.js";import{o as D}from"./if-defined-D_FwwK3T.js";import{u as E}from"./utils-CCcvPjT2.js";import{F as M}from"./FormControlMixin-DJnJZbro.js";const B=F`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.focus\\:\\[--w-outline-offset\\:-2px\\]:focus{--w-outline-offset:-2px}.bg-transparent{background-color:#0000}.border-1{border-width:1px}.rounded-4{border-radius:4px}.caret-current{caret-color:currentColor}.block{display:block}.flex{display:flex}.focusable:focus{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:focus-visible{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:not(:focus-visible){outline:none}.outline-\\[--w-s-color-border-negative\\]\\!{outline-color:var(--w-s-color-border-negative)!important}.fixed{position:fixed}.relative{position:relative}.static{position:static}.s-bg{background-color:var(--w-s-color-background)}.s-bg-disabled-subtle{background-color:var(--w-s-color-background-disabled-subtle)}.s-text{color:var(--w-s-color-text)}.s-text-disabled{color:var(--w-s-color-text-disabled)}.s-text-negative{color:var(--w-s-color-text-negative)}.s-text-subtle{color:var(--w-s-color-text-subtle)}.placeholder\\:s-text-placeholder::placeholder{color:var(--w-s-color-text-placeholder)}.s-border-disabled{border-color:var(--w-s-color-border-disabled)}.s-border-negative{border-color:var(--w-s-color-border-negative)}.s-border-strong{border-color:var(--w-s-color-border-strong)}.hover\\:s-border-negative-hover:hover{border-color:var(--w-s-color-border-negative-hover)}.hover\\:s-border-strong-hover:hover{border-color:var(--w-s-color-border-strong-hover)}.active\\:s-border-selected:active{border-color:var(--w-s-color-border-selected)}.w-full{width:100%}.min-h-\\[42\\]{min-height:4.2rem}.mb-0{margin-bottom:0}.mt-4{margin-top:.4rem}.px-8{padding-left:.8rem;padding-right:.8rem}.py-12{padding-top:1.2rem;padding-bottom:1.2rem}.pb-4{padding-bottom:.4rem}.pl-0{padding-left:0}.pl-8{padding-left:.8rem}.pr-40{padding-right:4rem}.pl-\\[var\\(--w-prefix-width\\,_40px\\)\\]{padding-left:var(--w-prefix-width,40px)}.cursor-pointer{cursor:pointer}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-smoothing:grayscale}.font-bold{font-weight:700}.font-normal{font-weight:400}.pointer-events-none{pointer-events:none}.resize{resize:both}.resize-none{resize:none}.text-m{font-size:var(--w-font-size-m);line-height:var(--w-line-height-m)}.text-s{font-size:var(--w-font-size-s);line-height:var(--w-line-height-s)}.text-xs{font-size:var(--w-font-size-xs);line-height:var(--w-line-height-xs)}.leading-m{line-height:var(--w-line-height-m)}@media (min-width:480px){.sm\\:min-h-\\[45\\]{min-height:4.5rem}}`;var W=Object.defineProperty,r=(o,e,a,_)=>{for(var s=void 0,l=o.length-1,w;l>=0;l--)(w=o[l])&&(s=w(e,a,s)||s);return s&&W(e,a,s),s};const n={base:"block text-m leading-m mb-0 px-8 py-12 rounded-4 w-full focusable focus:[--w-outline-offset:-2px] caret-current",default:"border-1 s-text s-bg s-border-strong hover:s-border-strong-hover active:s-border-selected",disabled:"border-1 s-text-disabled s-bg-disabled-subtle s-border-disabled pointer-events-none",invalid:"border-1 s-text-negative s-bg s-border-negative hover:s-border-negative-hover outline-[--w-s-color-border-negative]!",readOnly:"pl-0 bg-transparent pointer-events-none",placeholder:"placeholder:s-text-placeholder",textArea:"min-h-[42] sm:min-h-[45]",fixed:"resize-none"},H={base:"antialiased block relative text-s font-bold pb-4 cursor-pointer s-text flex",optional:"pl-8 font-normal text-s s-text-subtle"},k={base:"text-xs mt-4 block",color:"s-text-subtle",colorInvalid:"s-text-negative"};class t extends M($){constructor(){super(...arguments),this.minHeight=Number.NEGATIVE_INFINITY,this.maxHeight=Number.POSITIVE_INFINITY,this.#s=null,this.#n=E("textarea-"),this.#r=!1,this.#a=void 0,this.#t=!1,this.#o=e=>{e.preventDefault(),this.#t=!0,this.#e()}}static{this.shadowRootOptions={...$.shadowRootOptions,delegatesFocus:!0}}#s;#n;#r;#a;#t;updated(e){e.has("value")&&this.setValue(this.value),(e.has("value")||e.has("required")||e.has("disabled"))&&this.#e()}resetFormControl(){this.value=this.#s,this.#t=!1,this.#i(),this.#e()}get validationMessage(){return this.internals.validationMessage}get validity(){return this.internals.validity}checkValidity(){return this.#e(),this.internals.checkValidity()}reportValidity(){return this.#t=!0,this.#e(),this.internals.checkValidity()}setCustomValidity(e){e?(this.internals.setValidity({customError:!0},e,this._textarea),this.#l(e)):(this.#i(),this.#e())}#l(e){this.#r||(this.#a=this.helpText),this.#r=!0,this.invalid=!0,this.helpText=e}#i(){this.#r&&(this.invalid=!1,this.helpText=this.#a,this.#a=void 0,this.#r=!1)}#e(){if(this.disabled){this.internals.setValidity({}),this.#i();return}if(this.required&&!this.value){const e=this._textarea?.validationMessage||"";this.internals.setValidity({valueMissing:!0},e,this._textarea),this.#t&&this.#l(e);return}this.internals.setValidity({}),this.#i()}static{this.styles=[P,B]}get _textareaStyles(){return I([n.base,n.textArea,!!this.placeholder&&n.placeholder,!this.invalid&&!this.disabled&&!(this.readonly||this.readOnly)&&n.default,this.invalid&&!this.disabled&&!(this.readonly||this.readOnly)&&n.invalid,!this.invalid&&this.disabled&&!(this.readonly||this.readOnly)&&n.disabled,!this.invalid&&!this.disabled&&(this.readonly||this.readOnly)&&n.readOnly,this.maxRows&&n.fixed])}get _helptextstyles(){return I([k.base,this.invalid?k.colorInvalid:k.color])}get _helpId(){if(this.helpText)return`${this._id}__hint`}get _id(){return this.#n}get _error(){if(this.invalid&&this._helpId)return this._helpId}async connectedCallback(){if(super.connectedCallback(),this.#s=this.value,this.setValue(this.value),this.addEventListener("invalid",this.#o),await this.updateComplete,this.value||this.minRows){const e=this.shadowRoot?.querySelector("textarea");e&&this.#d(e)}}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("invalid",this.#o)}firstUpdated(e){super.firstUpdated(e),this.#e()}handler(e){const a=e.currentTarget;this.value=a.value,this.#d(a)}#h(){this.#t=!0,this.#e()}#o;#d(e){const a=getComputedStyle(e),_=Number.parseFloat(a.getPropertyValue("border-top-width")),s=Number.parseFloat(a.getPropertyValue("border-bottom-width")),l=Number.parseFloat(a.getPropertyValue("line-height")),w=Number.parseFloat(a.getPropertyValue("padding-top")),V=Number.parseFloat(a.getPropertyValue("padding-bottom")),S=w+V+s+_;this.minRows&&(this.minHeight=l*this.minRows+S),this.maxRows&&(this.maxHeight=l*this.maxRows+S);const q=e.scrollHeight+_+s,z=Math.min(this.maxHeight,Math.max(this.minHeight,q));e.style.setProperty("height",z+"px")}render(){return d`
        ${this.label?d`
                <label for="${this._id}" class=${H.base}>
                  ${this.label}
                  ${this.optional?d`
                          <span class="${H.optional}">
                            ${L._({id:"textarea.label.optional",message:"(optional)",comment:"Shown behind label when marked as optional"})}
                          </span>
                    `:T}
                </label>`:T}
        <textarea
          id="${this._id}"
          class="${this._textareaStyles}"
          name="${D(this.name)}"
          placeholder="${D(this.placeholder)}"
          .value="${this.value||""}"
          aria-describedby="${D(this._helpId||(this.ariaDescription?"aria-description":void 0))}"
          aria-errormessage="${D(this._error)}"
          aria-invalid=${this.invalid?"true":T}
          ?disabled="${this.disabled}"
          ?readonly="${this.readonly||this.readOnly}"
          ?required="${this.required}"
          @input="${this.handler}"
          @blur="${this.#h}">
        </textarea>
        ${this.helpText?d`<div class="${this._helptextstyles}" id="${this._helpId}">${this.helpText}</div>`:T}
    `}}r([i({type:Boolean,reflect:!0})],t.prototype,"disabled");r([i({type:Boolean,reflect:!0})],t.prototype,"invalid");r([i({type:String,reflect:!0})],t.prototype,"label");r([i({type:String,reflect:!0,attribute:"help-text"})],t.prototype,"helpText");r([i({type:Number,reflect:!0,attribute:"maximum-rows"})],t.prototype,"maxRows");r([i({type:Number,reflect:!0,attribute:"minimum-rows"})],t.prototype,"minRows");r([i()],t.prototype,"name");r([i()],t.prototype,"placeholder");r([i({type:Boolean,reflect:!0,attribute:"read-only"})],t.prototype,"readOnly");r([i({type:Boolean,reflect:!0})],t.prototype,"readonly");r([i({type:Boolean,reflect:!0})],t.prototype,"required");r([i({type:String,reflect:!0})],t.prototype,"value");r([i({type:Boolean,reflect:!0})],t.prototype,"optional");r([O()],t.prototype,"minHeight");r([O()],t.prototype,"maxHeight");r([C("textarea")],t.prototype,"_textarea");customElements.get("w-textarea")||customElements.define("w-textarea",t);const{events:Z,args:Y,argTypes:j}=R("w-textarea"),U={title:"Forms/Textarea",render(o){return d`<w-textarea ${N(A(o))}></w-textarea>`},args:Y,argTypes:j,parameters:{actions:{handles:Z}}},h={args:{label:"Description"}},c={args:{label:"Description",placeholder:"A Link to the Past is a distant prequel to the original The Legend of Zelda"}},p={args:{label:"Description","help-text":"You can provide a help text if necessary"}},u={args:{"aria-label":"Description"}},m={args:{label:"Description",invalid:!0,"help-text":"A description is required"}},b={args:{label:"Description",disabled:!0,value:'A Link to the Past is a distant prequel to the original The Legend of Zelda, and, within the official chronology, is the first game in the "Defeated Hero" timeline that connects to an alternate reality scenario where the Hero of Time does not succeed in Ocarina of Time.'}},g={args:{label:"Description","read-only":!0,value:'A Link to the Past is a distant prequel to the original The Legend of Zelda, and, within the official chronology, is the first game in the "Defeated Hero" timeline that connects to an alternate reality scenario where the Hero of Time does not succeed in Ocarina of Time.'}},f={args:{label:"Description",optional:!0}},v={args:{label:"Description","minimum-rows":3,"maximum-rows":3}},x={args:{label:"Description","minimum-rows":3,"maximum-rows":3,placeholder:"Refresh to see the autofocus take effect",autofocus:!0}},y={render:()=>d`
    <form
      @submit=${o=>{o.preventDefault();const e=o.target,a=new FormData(e);alert("Form submitted with message: "+a.get("message"))}}>
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
  `,parameters:{docs:{description:{story:"Demonstrates form validation using ElementInternals. The textarea participates in native form validation - submission is blocked when the required field is empty, and the browser shows a validation message."}}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Description'
  }
}`,...h.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    placeholder: 'A Link to the Past is a distant prequel to the original The Legend of Zelda'
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    'help-text': 'You can provide a help text if necessary'
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Description'
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    invalid: true,
    'help-text': 'A description is required'
  }
}`,...m.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    disabled: true,
    value: 'A Link to the Past is a distant prequel to the original The Legend of Zelda, and, within the official chronology, is the first game in the "Defeated Hero" timeline that connects to an alternate reality scenario where the Hero of Time does not succeed in Ocarina of Time.'
  }
}`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    'read-only': true,
    value: 'A Link to the Past is a distant prequel to the original The Legend of Zelda, and, within the official chronology, is the first game in the "Defeated Hero" timeline that connects to an alternate reality scenario where the Hero of Time does not succeed in Ocarina of Time.'
  }
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    optional: true
  }
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    'minimum-rows': 3,
    'maximum-rows': 3
  }
}`,...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    'minimum-rows': 3,
    'maximum-rows': 3,
    placeholder: 'Refresh to see the autofocus take effect',
    autofocus: true
  }
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};const G=["Default","WithPlaceholder","WithHelpText","NoVisualLabel","Invalid","Disabled","ReadOnly","Optional","ControlledSize","Autofocus","FormParticipation"],re=Object.freeze(Object.defineProperty({__proto__:null,Autofocus:x,ControlledSize:v,Default:h,Disabled:b,FormParticipation:y,Invalid:m,NoVisualLabel:u,Optional:f,ReadOnly:g,WithHelpText:p,WithPlaceholder:c,__namedExportsOrder:G,default:U},Symbol.toStringTag,{value:"Module"}));export{v as C,h as D,m as I,u as N,f as O,g as R,re as T,p as W,c as a,b};
