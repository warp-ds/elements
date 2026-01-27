import{a as R,i as I,r as z,k as V,A as S,h as N,b as l,n as s,l as M,g as A}from"./iframe-BGeWIGj7.js";import{s as C,p as E}from"./utilities-B89Z5-ni.js";import{e as B}from"./query-NYTjQBeo.js";import{o as h}from"./if-defined-DIgTfZd_.js";import{u as W}from"./utils-CCcvPjT2.js";import{F as Z}from"./FormControlMixin-DJnJZbro.js";const Y=R`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.focus\\:\\[--w-outline-offset\\:-2px\\]:focus{--w-outline-offset:-2px}.bg-transparent{background-color:#0000}.border-1{border-width:1px}.rounded-4{border-radius:4px}.caret-current{caret-color:currentColor}.block{display:block}.flex{display:flex}.focusable:focus{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:focus-visible{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:not(:focus-visible){outline:none}.outline-\\[--w-s-color-border-negative\\]\\!{outline-color:var(--w-s-color-border-negative)!important}.fixed{position:fixed}.relative{position:relative}.static{position:static}.s-bg{background-color:var(--w-s-color-background)}.s-bg-disabled-subtle{background-color:var(--w-s-color-background-disabled-subtle)}.s-text{color:var(--w-s-color-text)}.s-text-disabled{color:var(--w-s-color-text-disabled)}.s-text-negative{color:var(--w-s-color-text-negative)}.s-text-subtle{color:var(--w-s-color-text-subtle)}.placeholder\\:s-text-placeholder::placeholder{color:var(--w-s-color-text-placeholder)}.s-border-disabled{border-color:var(--w-s-color-border-disabled)}.s-border-negative{border-color:var(--w-s-color-border-negative)}.s-border-strong{border-color:var(--w-s-color-border-strong)}.hover\\:s-border-negative-hover:hover{border-color:var(--w-s-color-border-negative-hover)}.hover\\:s-border-strong-hover:hover{border-color:var(--w-s-color-border-strong-hover)}.active\\:s-border-selected:active{border-color:var(--w-s-color-border-selected)}.w-full{width:100%}.min-h-\\[42\\]{min-height:4.2rem}.mb-0{margin-bottom:0}.mt-4{margin-top:.4rem}.px-8{padding-left:.8rem;padding-right:.8rem}.py-12{padding-top:1.2rem;padding-bottom:1.2rem}.pb-4{padding-bottom:.4rem}.pl-0{padding-left:0}.pl-8{padding-left:.8rem}.pr-40{padding-right:4rem}.pl-\\[var\\(--w-prefix-width\\,_40px\\)\\]{padding-left:var(--w-prefix-width,40px)}.cursor-pointer{cursor:pointer}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-smoothing:grayscale}.font-bold{font-weight:700}.font-normal{font-weight:400}.pointer-events-none{pointer-events:none}.resize{resize:both}.resize-none{resize:none}.text-m{font-size:var(--w-font-size-m);line-height:var(--w-line-height-m)}.text-s{font-size:var(--w-font-size-s);line-height:var(--w-line-height-s)}.text-xs{font-size:var(--w-font-size-xs);line-height:var(--w-line-height-xs)}.leading-m{line-height:var(--w-line-height-m)}@media (min-width:480px){.sm\\:min-h-\\[45\\]{min-height:4.5rem}}`;var j=Object.defineProperty,a=(i,e,t,$)=>{for(var o=void 0,d=i.length-1,_;d>=0;d--)(_=i[d])&&(o=_(e,t,o)||o);return o&&j(e,t,o),o};const n={base:"block text-m leading-m mb-0 px-8 py-12 rounded-4 w-full focusable focus:[--w-outline-offset:-2px] caret-current",default:"border-1 s-text s-bg s-border-strong hover:s-border-strong-hover active:s-border-selected",disabled:"border-1 s-text-disabled s-bg-disabled-subtle s-border-disabled pointer-events-none",invalid:"border-1 s-text-negative s-bg s-border-negative hover:s-border-negative-hover outline-[--w-s-color-border-negative]!",readOnly:"pl-0 bg-transparent pointer-events-none",placeholder:"placeholder:s-text-placeholder",textArea:"min-h-[42] sm:min-h-[45]",fixed:"resize-none"},F={base:"antialiased block relative text-s font-bold pb-4 cursor-pointer s-text flex",optional:"pl-8 font-normal text-s s-text-subtle"},k={base:"text-xs mt-4 block",color:"s-text-subtle",colorInvalid:"s-text-negative"};class r extends Z(I){constructor(){super(...arguments),this.minHeight=Number.NEGATIVE_INFINITY,this.maxHeight=Number.POSITIVE_INFINITY,this.#o=null,this.#l=W("textarea-"),this.#r=!1,this.#a=void 0,this.#e=!1,this.#n=e=>{e.preventDefault(),this.#e=!0,this.#t()}}static{this.shadowRootOptions={...I.shadowRootOptions,delegatesFocus:!0}}#o;#l;#r;#a;#e;updated(e){e.has("value")&&this.setValue(this.value),(e.has("value")||e.has("required")||e.has("disabled")||e.has("minLength")||e.has("maxLength"))&&this.#t()}resetFormControl(){this.value=this.#o,this.#e=!1,this.#i(),this.#t()}get validationMessage(){return this.internals.validationMessage}get validity(){return this.internals.validity}checkValidity(){return this.#t(),this.internals.checkValidity()}reportValidity(){return this.#e=!0,this.#t(),this.internals.checkValidity()}setCustomValidity(e){e?(this.internals.setValidity({customError:!0},e,this._textarea),this.#s(e)):(this.#i(),this.#t())}#s(e){this.#r||(this.#a=this.helpText),this.#r=!0,this.invalid=!0,this.helpText=e}#i(){this.#r&&(this.invalid=!1,this.helpText=this.#a,this.#a=void 0,this.#r=!1)}#t(){if(this.disabled){this.internals.setValidity({}),this.#i();return}const e=this.value?.length||0;if(this.required&&!this.value){const t=this._textarea?.validationMessage||"";this.internals.setValidity({valueMissing:!0},t,this._textarea),this.#e&&this.#s(t);return}if(this.minLength&&e>0&&e<this.minLength){const t=this._textarea?.validationMessage||`Please use at least ${this.minLength} characters`;this.internals.setValidity({tooShort:!0},t,this._textarea),this.#e&&this.#s(t);return}if(this.maxLength&&e>this.maxLength){const t=this._textarea?.validationMessage||`Please use no more than ${this.maxLength} characters`;this.internals.setValidity({tooLong:!0},t,this._textarea),this.#e&&this.#s(t);return}this.internals.setValidity({}),this.#i()}static{this.styles=[z,Y]}get _textareaStyles(){return V([n.base,n.textArea,!!this.placeholder&&n.placeholder,!this.invalid&&!this.disabled&&!(this.readonly||this.readOnly)&&n.default,this.invalid&&!this.disabled&&!(this.readonly||this.readOnly)&&n.invalid,!this.invalid&&this.disabled&&!(this.readonly||this.readOnly)&&n.disabled,!this.invalid&&!this.disabled&&(this.readonly||this.readOnly)&&n.readOnly,this.maxRows&&n.fixed])}get _helptextstyles(){return V([k.base,this.invalid?k.colorInvalid:k.color])}get _helpId(){if(this.helpText)return`${this._id}__hint`}get _id(){return this.#l}get _error(){if(this.invalid&&this._helpId)return this._helpId}async connectedCallback(){if(super.connectedCallback(),this.#o=this.value,this.setValue(this.value),this.addEventListener("invalid",this.#n),await this.updateComplete,this.value||this.minRows){const e=this.shadowRoot?.querySelector("textarea");e&&this.#d(e)}}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("invalid",this.#n)}firstUpdated(e){super.firstUpdated(e),this.#t()}handler(e){const t=e.currentTarget;this.value=t.value,this.#d(t),this.#e&&this.#t()}#h(){this.#e=!0,this.#t()}#n;#d(e){const t=getComputedStyle(e),$=Number.parseFloat(t.getPropertyValue("border-top-width")),o=Number.parseFloat(t.getPropertyValue("border-bottom-width")),d=Number.parseFloat(t.getPropertyValue("line-height")),_=Number.parseFloat(t.getPropertyValue("padding-top")),O=Number.parseFloat(t.getPropertyValue("padding-bottom")),H=_+O+o+$;this.minRows&&(this.minHeight=d*this.minRows+H),this.maxRows&&(this.maxHeight=d*this.maxRows+H);const q=e.scrollHeight+$+o,P=Math.min(this.maxHeight,Math.max(this.minHeight,q));e.style.setProperty("height",P+"px")}render(){return l`
        ${this.label?l`
                <label for="${this._id}" class=${F.base}>
                  ${this.label}
                  ${this.optional?l`
                          <span class="${F.optional}">
                            ${N._({id:"textarea.label.optional",message:"(optional)",comment:"Shown behind label when marked as optional"})}
                          </span>
                    `:S}
                </label>`:S}
        <textarea
          id="${this._id}"
          class="${this._textareaStyles}"
          name="${h(this.name)}"
          placeholder="${h(this.placeholder)}"
          minlength="${h(this.minLength)}"
          maxlength="${h(this.maxLength)}"
          .value="${this.value||""}"
          aria-describedby="${h(this._helpId||(this.ariaDescription?"aria-description":void 0))}"
          aria-errormessage="${h(this._error)}"
          aria-invalid=${this.invalid?"true":S}
          ?disabled="${this.disabled}"
          ?readonly="${this.readonly||this.readOnly}"
          ?required="${this.required}"
          @input="${this.handler}"
          @blur="${this.#h}">
        </textarea>
        ${this.helpText?l`<div class="${this._helptextstyles}" id="${this._helpId}">${this.helpText}</div>`:S}
    `}}a([s({type:Boolean,reflect:!0})],r.prototype,"disabled");a([s({type:Boolean,reflect:!0})],r.prototype,"invalid");a([s({type:String,reflect:!0})],r.prototype,"label");a([s({type:String,reflect:!0,attribute:"help-text"})],r.prototype,"helpText");a([s({type:Number,reflect:!0,attribute:"maximum-rows"})],r.prototype,"maxRows");a([s({type:Number,reflect:!0,attribute:"minimum-rows"})],r.prototype,"minRows");a([s()],r.prototype,"name");a([s()],r.prototype,"placeholder");a([s({type:Boolean,reflect:!0,attribute:"read-only"})],r.prototype,"readOnly");a([s({type:Boolean,reflect:!0})],r.prototype,"readonly");a([s({type:Boolean,reflect:!0})],r.prototype,"required");a([s({type:Number,reflect:!0,attribute:"minlength"})],r.prototype,"minLength");a([s({type:Number,reflect:!0,attribute:"maxlength"})],r.prototype,"maxLength");a([s({type:String,reflect:!0})],r.prototype,"value");a([s({type:Boolean,reflect:!0})],r.prototype,"optional");a([M()],r.prototype,"minHeight");a([M()],r.prototype,"maxHeight");a([B("textarea")],r.prototype,"_textarea");customElements.get("w-textarea")||customElements.define("w-textarea",r);const{events:U,args:G,argTypes:J}=A("w-textarea"),K={title:"Forms/Textarea",render(i){return l`<w-textarea ${C(E(i))}></w-textarea>`},args:G,argTypes:J,parameters:{actions:{handles:U}}},c={args:{label:"Description"}},m={args:{label:"Description",placeholder:"A Link to the Past is a distant prequel to the original The Legend of Zelda"}},p={args:{label:"Description","help-text":"You can provide a help text if necessary"}},u={args:{"aria-label":"Description"}},g={args:{label:"Description",invalid:!0,"help-text":"A description is required"}},b={args:{label:"Description",disabled:!0,value:'A Link to the Past is a distant prequel to the original The Legend of Zelda, and, within the official chronology, is the first game in the "Defeated Hero" timeline that connects to an alternate reality scenario where the Hero of Time does not succeed in Ocarina of Time.'}},f={args:{label:"Description","read-only":!0,value:'A Link to the Past is a distant prequel to the original The Legend of Zelda, and, within the official chronology, is the first game in the "Defeated Hero" timeline that connects to an alternate reality scenario where the Hero of Time does not succeed in Ocarina of Time.'}},x={args:{label:"Description",optional:!0}},v={args:{label:"Description","minimum-rows":3,"maximum-rows":3}},y={args:{label:"Description","minimum-rows":3,"maximum-rows":3,placeholder:"Refresh to see the autofocus take effect",autofocus:!0}},w={render:()=>l`
    <form
      @submit=${i=>{i.preventDefault();const e=i.target,t=new FormData(e);alert("Form submitted with message: "+t.get("message"))}}>
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
  `,parameters:{docs:{description:{story:"Demonstrates form validation using ElementInternals. The textarea participates in native form validation - submission is blocked when the required field is empty, and the browser shows a validation message."}}}},T={args:{label:"Description",minlength:20,"help-text":"Please enter at least 20 characters"},parameters:{docs:{description:{story:"Demonstrates minlength validation. Type a short message and blur to see the validation error. The error clears when the minimum length is reached."}}}},D={args:{label:"Description",maxlength:50,"help-text":"Maximum 50 characters allowed"},parameters:{docs:{description:{story:"Demonstrates maxlength constraint. The browser prevents typing beyond the limit. Try typing more than 50 characters."}}}},L={render:()=>l`
    <form
      @submit=${i=>{i.preventDefault();const e=i.target,t=new FormData(e);alert("Form submitted with message: "+t.get("message"))}}>
      <w-textarea
        label="Tweet"
        name="message"
        minlength="10"
        maxlength="280"
        help-text="Between 10 and 280 characters"></w-textarea>
      <div style="margin-top: 16px; display: flex; gap: 8px;">
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </div>
    </form>
  `,parameters:{docs:{description:{story:"Combines minlength and maxlength constraints. The message must be between 10 and 280 characters to submit successfully."}}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Description'
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    placeholder: 'A Link to the Past is a distant prequel to the original The Legend of Zelda'
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    'help-text': 'You can provide a help text if necessary'
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Description'
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    invalid: true,
    'help-text': 'A description is required'
  }
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    disabled: true,
    value: 'A Link to the Past is a distant prequel to the original The Legend of Zelda, and, within the official chronology, is the first game in the "Defeated Hero" timeline that connects to an alternate reality scenario where the Hero of Time does not succeed in Ocarina of Time.'
  }
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    'read-only': true,
    value: 'A Link to the Past is a distant prequel to the original The Legend of Zelda, and, within the official chronology, is the first game in the "Defeated Hero" timeline that connects to an alternate reality scenario where the Hero of Time does not succeed in Ocarina of Time.'
  }
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    optional: true
  }
}`,...x.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    'minimum-rows': 3,
    'maximum-rows': 3
  }
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    'minimum-rows': 3,
    'maximum-rows': 3,
    placeholder: 'Refresh to see the autofocus take effect',
    autofocus: true
  }
}`,...y.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    minlength: 20,
    'help-text': 'Please enter at least 20 characters'
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates minlength validation. Type a short message and blur to see the validation error. The error clears when the minimum length is reached.'
      }
    }
  }
}`,...T.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    maxlength: 50,
    'help-text': 'Maximum 50 characters allowed'
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates maxlength constraint. The browser prevents typing beyond the limit. Try typing more than 50 characters.'
      }
    }
  }
}`,...D.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <form
      @submit=\${(e: Event) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    alert('Form submitted with message: ' + formData.get('message'));
  }}>
      <w-textarea
        label="Tweet"
        name="message"
        minlength="10"
        maxlength="280"
        help-text="Between 10 and 280 characters"></w-textarea>
      <div style="margin-top: 16px; display: flex; gap: 8px;">
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </div>
    </form>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Combines minlength and maxlength constraints. The message must be between 10 and 280 characters to submit successfully.'
      }
    }
  }
}`,...L.parameters?.docs?.source}}};const Q=["Default","WithPlaceholder","WithHelpText","NoVisualLabel","Invalid","Disabled","ReadOnly","Optional","ControlledSize","Autofocus","FormParticipation","MinLength","MaxLength","MinAndMaxLength"],ie=Object.freeze(Object.defineProperty({__proto__:null,Autofocus:y,ControlledSize:v,Default:c,Disabled:b,FormParticipation:w,Invalid:g,MaxLength:D,MinAndMaxLength:L,MinLength:T,NoVisualLabel:u,Optional:x,ReadOnly:f,WithHelpText:p,WithPlaceholder:m,__namedExportsOrder:Q,default:K},Symbol.toStringTag,{value:"Module"}));export{v as C,c as D,g as I,u as N,x as O,f as R,ie as T,p as W,m as a,b};
