import{a as N,i as k,r as R,j as S,E as D,b as L,x as c,n as r,k as H,g as A}from"./iframe-DWd23ZOr.js";import{s as q,p as F}from"./utilities-BDlK8qq3.js";import{o as d}from"./if-defined-BZbMyd94.js";import{F as C}from"./FormControlMixin-DJnJZbro.js";const V=N`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.focus\\:\\[--w-outline-offset\\:-2px\\]:focus{--w-outline-offset:-2px}.bg-transparent{background-color:#0000}.border-1{border-width:1px}.rounded-4{border-radius:4px}.caret-current{caret-color:currentColor}.block{display:block}.flex{display:flex}.focusable:focus{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:focus-visible{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:not(:focus-visible){outline:none}.outline-\\[--w-s-color-border-negative\\]\\!{outline-color:var(--w-s-color-border-negative)!important}.fixed{position:fixed}.relative{position:relative}.static{position:static}.s-bg{background-color:var(--w-s-color-background)}.s-bg-disabled-subtle{background-color:var(--w-s-color-background-disabled-subtle)}.s-text{color:var(--w-s-color-text)}.s-text-disabled{color:var(--w-s-color-text-disabled)}.s-text-negative{color:var(--w-s-color-text-negative)}.s-text-subtle{color:var(--w-s-color-text-subtle)}.placeholder\\:s-text-placeholder::placeholder{color:var(--w-s-color-text-placeholder)}.s-border-disabled{border-color:var(--w-s-color-border-disabled)}.s-border-negative{border-color:var(--w-s-color-border-negative)}.s-border-strong{border-color:var(--w-s-color-border-strong)}.hover\\:s-border-negative-hover:hover{border-color:var(--w-s-color-border-negative-hover)}.hover\\:s-border-strong-hover:hover{border-color:var(--w-s-color-border-strong-hover)}.active\\:s-border-selected:active{border-color:var(--w-s-color-border-selected)}.w-full{width:100%}.min-h-\\[42\\]{min-height:4.2rem}.mb-0{margin-bottom:0}.mt-4{margin-top:.4rem}.px-8{padding-left:.8rem;padding-right:.8rem}.py-12{padding-top:1.2rem;padding-bottom:1.2rem}.pb-4{padding-bottom:.4rem}.pl-0{padding-left:0}.pl-8{padding-left:.8rem}.pr-40{padding-right:4rem}.pl-\\[var\\(--w-prefix-width\\,_40px\\)\\]{padding-left:var(--w-prefix-width,40px)}.cursor-pointer{cursor:pointer}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-smoothing:grayscale}.font-bold{font-weight:700}.font-normal{font-weight:400}.pointer-events-none{pointer-events:none}.resize{resize:both}.resize-none{resize:none}.text-m{font-size:var(--w-font-size-m);line-height:var(--w-line-height-m)}.text-s{font-size:var(--w-font-size-s);line-height:var(--w-line-height-s)}.text-xs{font-size:var(--w-font-size-xs);line-height:var(--w-line-height-xs)}.leading-m{line-height:var(--w-line-height-m)}@media (min-width:480px){.sm\\:min-h-\\[45\\]{min-height:4.5rem}}`;var B=Object.defineProperty,t=(l,a,o,T)=>{for(var s=void 0,n=l.length-1,y;n>=0;n--)(y=l[n])&&(s=y(a,o,s)||s);return s&&B(a,o,s),s};const i={base:"block text-m leading-m mb-0 px-8 py-12 rounded-4 w-full focusable focus:[--w-outline-offset:-2px] caret-current",default:"border-1 s-text s-bg s-border-strong hover:s-border-strong-hover active:s-border-selected",disabled:"border-1 s-text-disabled s-bg-disabled-subtle s-border-disabled pointer-events-none",invalid:"border-1 s-text-negative s-bg s-border-negative hover:s-border-negative-hover outline-[--w-s-color-border-negative]!",readOnly:"pl-0 bg-transparent pointer-events-none",placeholder:"placeholder:s-text-placeholder",textArea:"min-h-[42] sm:min-h-[45]",fixed:"resize-none"},O={base:"antialiased block relative text-s font-bold pb-4 cursor-pointer s-text flex",optional:"pl-8 font-normal text-s s-text-subtle"},_={base:"text-xs mt-4 block",color:"s-text-subtle",colorInvalid:"s-text-negative"};class e extends C(k){constructor(){super(...arguments),this.minHeight=Number.NEGATIVE_INFINITY,this.maxHeight=Number.POSITIVE_INFINITY}static{this.shadowRootOptions={...k.shadowRootOptions,delegatesFocus:!0}}updated(a){a.has("value")&&this.setValue(this.value)}static{this.styles=[R,V]}get _textareaStyles(){return S([i.base,i.textArea,!!this.placeholder&&i.placeholder,!this.invalid&&!this.disabled&&!(this.readonly||this.readOnly)&&i.default,this.invalid&&!this.disabled&&!(this.readonly||this.readOnly)&&i.invalid,!this.invalid&&this.disabled&&!(this.readonly||this.readOnly)&&i.disabled,!this.invalid&&!this.disabled&&(this.readonly||this.readOnly)&&i.readOnly,this.maxRows&&i.fixed])}get _helptextstyles(){return S([_.base,this.invalid?_.colorInvalid:_.color])}get _helpId(){if(this.helpText)return`${this._id}__hint`}get _id(){return"textfield"}get _error(){if(this.invalid&&this._helpId)return this._helpId}async connectedCallback(){super.connectedCallback(),await this.updateComplete,(this.value||this.minRows)&&this.#e(this.shadowRoot.querySelector("textarea"))}handler(a){const o=a.currentTarget;this.value=o.value,this.#e(o)}#e(a){const o=getComputedStyle(a),T=Number.parseFloat(o.getPropertyValue("border-top-width")),s=Number.parseFloat(o.getPropertyValue("border-top-width")),n=Number.parseFloat(o.getPropertyValue("line-height")),y=Number.parseFloat(o.getPropertyValue("padding-top")),I=Number.parseFloat(o.getPropertyValue("padding-bottom")),$=y+I+s+T;this.minRows&&(this.minHeight=n*this.minRows+$),this.minRows&&(this.maxHeight=n*this.minRows+$);const P=a.scrollHeight+T+s,z=Math.min(this.maxHeight,Math.max(this.minHeight,P));a.style.setProperty("height",z+"px")}render(){return c`
        ${this.label?c`
                <label for="${this._id}" class=${O.base}>
                  ${this.label}
                  ${this.optional?c`
                          <span class="${O.optional}">
                            ${L.t({id:"textarea.label.optional",message:"(optional)",comment:"Shown behind label when marked as optional"})}
                          </span>
                    `:D}
                </label>`:D}
        <textarea
          id="${this._id}"
          class="${this._textareaStyles}"
          name="${d(this.name)}"
          placeholder="${d(this.placeholder)}"
          .value="${this.value||""}"
          aria-describedby="${d(this._helpId||(this.ariaDescription?"aria-description":void 0))}"
          aria-errormessage="${d(this._error)}"
          aria-invalid="${d(this.invalid)}"
          ?disabled="${this.disabled}"
          ?readonly="${this.readonly||this.readOnly}"
          ?required="${this.required}"
          @input="${this.handler}">
        </textarea>
        ${this.helpText?c`<div class="${this._helptextstyles}" id="${this._helpId}">${this.helpText}</div>`:D}
    `}}t([r({type:Boolean,reflect:!0})],e.prototype,"disabled");t([r({type:Boolean,reflect:!0})],e.prototype,"invalid");t([r({type:String,reflect:!0})],e.prototype,"label");t([r({type:String,reflect:!0,attribute:"help-text"})],e.prototype,"helpText");t([r({type:Number,reflect:!0,attribute:"maximum-rows"})],e.prototype,"maxRows");t([r({type:Number,reflect:!0,attribute:"minimum-rows"})],e.prototype,"minRows");t([r()],e.prototype,"name");t([r()],e.prototype,"placeholder");t([r({type:Boolean,reflect:!0,attribute:"read-only"})],e.prototype,"readOnly");t([r({type:Boolean,reflect:!0})],e.prototype,"readonly");t([r({type:Boolean,reflect:!0})],e.prototype,"required");t([r({type:String,reflect:!0})],e.prototype,"value");t([r({type:Boolean,reflect:!0})],e.prototype,"optional");t([H()],e.prototype,"minHeight");t([H()],e.prototype,"maxHeight");customElements.get("w-textarea")||customElements.define("w-textarea",e);const{events:W,args:E,argTypes:Z}=A("w-textarea"),j={title:"Forms/Textarea",render(l){return c`<w-textarea ${q(F(l))}></w-textarea>`},args:E,argTypes:Z,parameters:{actions:{handles:W}}},p={args:{label:"Description"}},h={args:{label:"Description",placeholder:"A Link to the Past is a distant prequel to the original The Legend of Zelda"}},u={args:{label:"Description","help-text":"You can provide a help text if necessary"}},m={args:{"aria-label":"Description"}},b={args:{label:"Description",invalid:!0,"help-text":"A description is required"}},g={args:{label:"Description",disabled:!0,value:'A Link to the Past is a distant prequel to the original The Legend of Zelda, and, within the official chronology, is the first game in the "Defeated Hero" timeline that connects to an alternate reality scenario where the Hero of Time does not succeed in Ocarina of Time.'}},f={args:{label:"Description","read-only":!0,value:'A Link to the Past is a distant prequel to the original The Legend of Zelda, and, within the official chronology, is the first game in the "Defeated Hero" timeline that connects to an alternate reality scenario where the Hero of Time does not succeed in Ocarina of Time.'}},x={args:{label:"Description",optional:!0}},v={args:{label:"Description","minimum-rows":3,"maximum-rows":3}},w={args:{label:"Description","minimum-rows":3,"maximum-rows":3,placeholder:"Refresh to see the autofocus take effect",autofocus:!0}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    disabled: true,
    value: 'A Link to the Past is a distant prequel to the original The Legend of Zelda, and, within the official chronology, is the first game in the "Defeated Hero" timeline that connects to an alternate reality scenario where the Hero of Time does not succeed in Ocarina of Time.'
  }
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    'minimum-rows': 3,
    'maximum-rows': 3,
    placeholder: 'Refresh to see the autofocus take effect',
    autofocus: true
  }
}`,...w.parameters?.docs?.source}}};const M=["Default","WithPlaceholder","WithHelpText","NoVisualLabel","Invalid","Disabled","ReadOnly","Optional","ControlledSize","Autofocus"],Q=Object.freeze(Object.defineProperty({__proto__:null,Autofocus:w,ControlledSize:v,Default:p,Disabled:g,Invalid:b,NoVisualLabel:m,Optional:x,ReadOnly:f,WithHelpText:u,WithPlaceholder:h,__namedExportsOrder:M,default:j},Symbol.toStringTag,{value:"Module"}));export{v as C,p as D,b as I,m as N,x as O,f as R,Q as T,u as W,h as a,g as b};
