import{a as N,i as k,r as R,k as S,A as y,h as L,b as d,n as o,l as H,g as q}from"./iframe-DzWjb3nD.js";import{s as A,p as F}from"./utilities-BxbR84Oj.js";import{o as T}from"./if-defined-E65KvbCC.js";import{u as V}from"./utils-CCcvPjT2.js";import{F as C}from"./FormControlMixin-DJnJZbro.js";const B=N`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.focus\\:\\[--w-outline-offset\\:-2px\\]:focus{--w-outline-offset:-2px}.bg-transparent{background-color:#0000}.border-1{border-width:1px}.rounded-4{border-radius:4px}.caret-current{caret-color:currentColor}.block{display:block}.flex{display:flex}.focusable:focus{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:focus-visible{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:not(:focus-visible){outline:none}.outline-\\[--w-s-color-border-negative\\]\\!{outline-color:var(--w-s-color-border-negative)!important}.fixed{position:fixed}.relative{position:relative}.static{position:static}.s-bg{background-color:var(--w-s-color-background)}.s-bg-disabled-subtle{background-color:var(--w-s-color-background-disabled-subtle)}.s-text{color:var(--w-s-color-text)}.s-text-disabled{color:var(--w-s-color-text-disabled)}.s-text-negative{color:var(--w-s-color-text-negative)}.s-text-subtle{color:var(--w-s-color-text-subtle)}.placeholder\\:s-text-placeholder::placeholder{color:var(--w-s-color-text-placeholder)}.s-border-disabled{border-color:var(--w-s-color-border-disabled)}.s-border-negative{border-color:var(--w-s-color-border-negative)}.s-border-strong{border-color:var(--w-s-color-border-strong)}.hover\\:s-border-negative-hover:hover{border-color:var(--w-s-color-border-negative-hover)}.hover\\:s-border-strong-hover:hover{border-color:var(--w-s-color-border-strong-hover)}.active\\:s-border-selected:active{border-color:var(--w-s-color-border-selected)}.w-full{width:100%}.min-h-\\[42\\]{min-height:4.2rem}.mb-0{margin-bottom:0}.mt-4{margin-top:.4rem}.px-8{padding-left:.8rem;padding-right:.8rem}.py-12{padding-top:1.2rem;padding-bottom:1.2rem}.pb-4{padding-bottom:.4rem}.pl-0{padding-left:0}.pl-8{padding-left:.8rem}.pr-40{padding-right:4rem}.pl-\\[var\\(--w-prefix-width\\,_40px\\)\\]{padding-left:var(--w-prefix-width,40px)}.cursor-pointer{cursor:pointer}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-smoothing:grayscale}.font-bold{font-weight:700}.font-normal{font-weight:400}.pointer-events-none{pointer-events:none}.resize{resize:both}.resize-none{resize:none}.text-m{font-size:var(--w-font-size-m);line-height:var(--w-line-height-m)}.text-s{font-size:var(--w-font-size-s);line-height:var(--w-line-height-s)}.text-xs{font-size:var(--w-font-size-xs);line-height:var(--w-line-height-xs)}.leading-m{line-height:var(--w-line-height-m)}@media (min-width:480px){.sm\\:min-h-\\[45\\]{min-height:4.5rem}}`;var W=Object.defineProperty,t=(l,r,a,_)=>{for(var s=void 0,n=l.length-1,w;n>=0;n--)(w=l[n])&&(s=w(r,a,s)||s);return s&&W(r,a,s),s};const i={base:"block text-m leading-m mb-0 px-8 py-12 rounded-4 w-full focusable focus:[--w-outline-offset:-2px] caret-current",default:"border-1 s-text s-bg s-border-strong hover:s-border-strong-hover active:s-border-selected",disabled:"border-1 s-text-disabled s-bg-disabled-subtle s-border-disabled pointer-events-none",invalid:"border-1 s-text-negative s-bg s-border-negative hover:s-border-negative-hover outline-[--w-s-color-border-negative]!",readOnly:"pl-0 bg-transparent pointer-events-none",placeholder:"placeholder:s-text-placeholder",textArea:"min-h-[42] sm:min-h-[45]",fixed:"resize-none"},O={base:"antialiased block relative text-s font-bold pb-4 cursor-pointer s-text flex",optional:"pl-8 font-normal text-s s-text-subtle"},D={base:"text-xs mt-4 block",color:"s-text-subtle",colorInvalid:"s-text-negative"};class e extends C(k){constructor(){super(...arguments),this.minHeight=Number.NEGATIVE_INFINITY,this.maxHeight=Number.POSITIVE_INFINITY,this.#e=null,this.#t=V("textarea-")}static{this.shadowRootOptions={...k.shadowRootOptions,delegatesFocus:!0}}#e;#t;updated(r){r.has("value")&&this.setValue(this.value)}resetFormControl(){this.value=this.#e}static{this.styles=[R,B]}get _textareaStyles(){return S([i.base,i.textArea,!!this.placeholder&&i.placeholder,!this.invalid&&!this.disabled&&!(this.readonly||this.readOnly)&&i.default,this.invalid&&!this.disabled&&!(this.readonly||this.readOnly)&&i.invalid,!this.invalid&&this.disabled&&!(this.readonly||this.readOnly)&&i.disabled,!this.invalid&&!this.disabled&&(this.readonly||this.readOnly)&&i.readOnly,this.maxRows&&i.fixed])}get _helptextstyles(){return S([D.base,this.invalid?D.colorInvalid:D.color])}get _helpId(){if(this.helpText)return`${this._id}__hint`}get _id(){return this.#t}get _error(){if(this.invalid&&this._helpId)return this._helpId}async connectedCallback(){if(super.connectedCallback(),this.#e=this.value,this.setValue(this.value),await this.updateComplete,this.value||this.minRows){const r=this.shadowRoot?.querySelector("textarea");r&&this.#r(r)}}handler(r){const a=r.currentTarget;this.value=a.value,this.#r(a)}#r(r){const a=getComputedStyle(r),_=Number.parseFloat(a.getPropertyValue("border-top-width")),s=Number.parseFloat(a.getPropertyValue("border-bottom-width")),n=Number.parseFloat(a.getPropertyValue("line-height")),w=Number.parseFloat(a.getPropertyValue("padding-top")),I=Number.parseFloat(a.getPropertyValue("padding-bottom")),$=w+I+s+_;this.minRows&&(this.minHeight=n*this.minRows+$),this.maxRows&&(this.maxHeight=n*this.maxRows+$);const P=r.scrollHeight+_+s,z=Math.min(this.maxHeight,Math.max(this.minHeight,P));r.style.setProperty("height",z+"px")}render(){return d`
        ${this.label?d`
                <label for="${this._id}" class=${O.base}>
                  ${this.label}
                  ${this.optional?d`
                          <span class="${O.optional}">
                            ${L._({id:"textarea.label.optional",message:"(optional)",comment:"Shown behind label when marked as optional"})}
                          </span>
                    `:y}
                </label>`:y}
        <textarea
          id="${this._id}"
          class="${this._textareaStyles}"
          name="${T(this.name)}"
          placeholder="${T(this.placeholder)}"
          .value="${this.value||""}"
          aria-describedby="${T(this._helpId||(this.ariaDescription?"aria-description":void 0))}"
          aria-errormessage="${T(this._error)}"
          aria-invalid=${this.invalid?"true":y}
          ?disabled="${this.disabled}"
          ?readonly="${this.readonly||this.readOnly}"
          ?required="${this.required}"
          @input="${this.handler}">
        </textarea>
        ${this.helpText?d`<div class="${this._helptextstyles}" id="${this._helpId}">${this.helpText}</div>`:y}
    `}}t([o({type:Boolean,reflect:!0})],e.prototype,"disabled");t([o({type:Boolean,reflect:!0})],e.prototype,"invalid");t([o({type:String,reflect:!0})],e.prototype,"label");t([o({type:String,reflect:!0,attribute:"help-text"})],e.prototype,"helpText");t([o({type:Number,reflect:!0,attribute:"maximum-rows"})],e.prototype,"maxRows");t([o({type:Number,reflect:!0,attribute:"minimum-rows"})],e.prototype,"minRows");t([o()],e.prototype,"name");t([o()],e.prototype,"placeholder");t([o({type:Boolean,reflect:!0,attribute:"read-only"})],e.prototype,"readOnly");t([o({type:Boolean,reflect:!0})],e.prototype,"readonly");t([o({type:Boolean,reflect:!0})],e.prototype,"required");t([o({type:String,reflect:!0})],e.prototype,"value");t([o({type:Boolean,reflect:!0})],e.prototype,"optional");t([H()],e.prototype,"minHeight");t([H()],e.prototype,"maxHeight");customElements.get("w-textarea")||customElements.define("w-textarea",e);const{events:E,args:Z,argTypes:M}=q("w-textarea"),Y={title:"Forms/Textarea",render(l){return d`<w-textarea ${A(F(l))}></w-textarea>`},args:Z,argTypes:M,parameters:{actions:{handles:E}}},c={args:{label:"Description"}},p={args:{label:"Description",placeholder:"A Link to the Past is a distant prequel to the original The Legend of Zelda"}},h={args:{label:"Description","help-text":"You can provide a help text if necessary"}},u={args:{"aria-label":"Description"}},m={args:{label:"Description",invalid:!0,"help-text":"A description is required"}},b={args:{label:"Description",disabled:!0,value:'A Link to the Past is a distant prequel to the original The Legend of Zelda, and, within the official chronology, is the first game in the "Defeated Hero" timeline that connects to an alternate reality scenario where the Hero of Time does not succeed in Ocarina of Time.'}},g={args:{label:"Description","read-only":!0,value:'A Link to the Past is a distant prequel to the original The Legend of Zelda, and, within the official chronology, is the first game in the "Defeated Hero" timeline that connects to an alternate reality scenario where the Hero of Time does not succeed in Ocarina of Time.'}},f={args:{label:"Description",optional:!0}},x={args:{label:"Description","minimum-rows":3,"maximum-rows":3}},v={args:{label:"Description","minimum-rows":3,"maximum-rows":3,placeholder:"Refresh to see the autofocus take effect",autofocus:!0}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Description'
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    placeholder: 'A Link to the Past is a distant prequel to the original The Legend of Zelda'
  }
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    'help-text': 'You can provide a help text if necessary'
  }
}`,...h.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    'minimum-rows': 3,
    'maximum-rows': 3
  }
}`,...x.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    'minimum-rows': 3,
    'maximum-rows': 3,
    placeholder: 'Refresh to see the autofocus take effect',
    autofocus: true
  }
}`,...v.parameters?.docs?.source}}};const j=["Default","WithPlaceholder","WithHelpText","NoVisualLabel","Invalid","Disabled","ReadOnly","Optional","ControlledSize","Autofocus"],X=Object.freeze(Object.defineProperty({__proto__:null,Autofocus:v,ControlledSize:x,Default:c,Disabled:b,Invalid:m,NoVisualLabel:u,Optional:f,ReadOnly:g,WithHelpText:h,WithPlaceholder:p,__namedExportsOrder:j,default:Y},Symbol.toStringTag,{value:"Module"}));export{x as C,c as D,m as I,u as N,f as O,g as R,X as T,h as W,p as a,b};
