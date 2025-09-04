import{r as S,n as t,g as E,a as _}from"./styles-GSn3COC5.js";import{i as k,k as v,h as O}from"./iframe-DZvbzxz9.js";import{r as $}from"./index.m-CtIADANO.js";import{W as P}from"./element-BVIeNE0W.js";import{t as a}from"./if-defined-WzAHAfxQ.js";import{F as z}from"./FormControlMixin-DJnJZbro.js";import"./preload-helper-Dch09mLN.js";import"./index-uqR65IT6.js";const T=k`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.focus\\:\\[--w-outline-offset\\:-2px\\]:focus{--w-outline-offset:-2px}.bg-transparent{background-color:#0000}.border-1{border-width:1px}.rounded-4{border-radius:4px}.caret-current{caret-color:currentColor}.block{display:block}.focusable:focus{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:focus-visible{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:not(:focus-visible){outline:none}.outline-\\[--w-s-color-border-negative\\]\\!{outline-color:var(--w-s-color-border-negative)!important}.relative{position:relative}.static{position:static}.s-bg{background-color:var(--w-s-color-background)}.s-bg-disabled-subtle{background-color:var(--w-s-color-background-disabled-subtle)}.s-text{color:var(--w-s-color-text)}.s-text-disabled{color:var(--w-s-color-text-disabled)}.s-text-negative{color:var(--w-s-color-text-negative)}.s-text-subtle{color:var(--w-s-color-text-subtle)}.placeholder\\:s-text-placeholder::placeholder{color:var(--w-s-color-text-placeholder)}.s-border{border-color:var(--w-s-color-border)}.s-border-disabled{border-color:var(--w-s-color-border-disabled)}.s-border-negative{border-color:var(--w-s-color-border-negative)}.hover\\:s-border-hover:hover{border-color:var(--w-s-color-border-hover)}.hover\\:s-border-negative-hover:hover{border-color:var(--w-s-color-border-negative-hover)}.active\\:s-border-selected:active{border-color:var(--w-s-color-border-selected)}.w-full{width:100%}.min-h-\\[42\\]{min-height:4.2rem}.mb-0{margin-bottom:0}.mt-4{margin-top:.4rem}.px-8{padding-left:.8rem;padding-right:.8rem}.py-12{padding-top:1.2rem;padding-bottom:1.2rem}.pb-4{padding-bottom:.4rem}.pl-0{padding-left:0}.pl-8{padding-left:.8rem}.pr-40{padding-right:4rem}.pl-\\[var\\(--w-prefix-width\\,_40px\\)\\]{padding-left:var(--w-prefix-width,40px)}.cursor-pointer{cursor:pointer}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-smoothing:grayscale}.font-bold{font-weight:700}.font-normal{font-weight:400}.pointer-events-none{pointer-events:none}.text-m{font-size:var(--w-font-size-m);line-height:var(--w-line-height-m)}.text-s{font-size:var(--w-font-size-s);line-height:var(--w-line-height-s)}.text-xs{font-size:var(--w-font-size-xs);line-height:var(--w-line-height-xs)}.leading-m{line-height:var(--w-line-height-m)}@media (min-width:480px){.sm\\:min-h-\\[45\\]{min-height:4.5rem}}`;var q=Object.defineProperty,r=(i,s,n,g)=>{for(var o=void 0,x=i.length-1,w;x>=0;x--)(w=i[x])&&(o=w(s,n,o)||o);return o&&q(s,n,o),o};const l={wrapper:"relative",base:"block text-m leading-m mb-0 px-8 py-12 rounded-4 w-full focusable focus:[--w-outline-offset:-2px] caret-current",default:"border-1 s-text s-bg s-border hover:s-border-hover active:s-border-selected",disabled:"border-1 s-text-disabled s-bg-disabled-subtle s-border-disabled pointer-events-none",invalid:"border-1 s-text-negative s-bg s-border-negative hover:s-border-negative-hover outline-[--w-s-color-border-negative]!",readOnly:"pl-0 bg-transparent pointer-events-none",placeholder:"placeholder:s-text-placeholder",suffix:"pr-40",prefix:"pl-[var(--w-prefix-width,_40px)]",textArea:"min-h-[42] sm:min-h-[45]"},I={base:"antialiased block relative text-s font-bold pb-4 cursor-pointer s-text",optional:"pl-8 font-normal text-s s-text-subtle"},y={base:"text-xs mt-4 block",color:"s-text-subtle",colorInvalid:"s-text-negative"};class e extends z(O){constructor(){super(...arguments),this.type="text",this._hasPrefix=!1,this._hasSuffix=!1}static{this.shadowRootOptions={...P.shadowRootOptions,delegatesFocus:!0}}updated(s){s.has("value")&&this.setValue(this.value)}static{this.styles=[S,T]}get _inputstyles(){return $([l.base,this._hasSuffix&&l.suffix,this._hasPrefix&&l.prefix,!this.invalid&&!this.disabled&&!this.readOnly&&l.default,this.invalid&&!this.disabled&&!this.readOnly&&l.invalid,!this.invalid&&this.disabled&&!this.readOnly&&l.disabled,!this.invalid&&!this.disabled&&this.readOnly&&l.readOnly])}get _helptextstyles(){return $([y.base,this.invalid?y.colorInvalid:y.color])}get _label(){if(this.label)return v`<label for="${this._id}" class=${I.base}>${this.label}</label>`}get _helpId(){if(this.helpText)return`${this._id}__hint`}get _id(){return"textfield"}get _error(){if(this.invalid&&this._helpId)return this._helpId}handler(s){const{name:n,value:g}=s.currentTarget;this.setValue(g);const o=new CustomEvent(s.type,{detail:{name:n,value:g,target:s.target}});this.dispatchEvent(o)}prefixSlotChange(){this.renderRoot.querySelector("slot[name=prefix]").assignedElements().length&&(this._hasPrefix=!0)}suffixSlotChange(){this.renderRoot.querySelector("slot[name=suffix]").assignedElements().length&&(this._hasSuffix=!0)}render(){return v`
      ${this._label}
      <div class="${l.wrapper}">
        <slot @slotchange="${this.prefixSlotChange}" name="prefix"></slot>
        <input
          class="${this._inputstyles}"
          type="${this.type}"
          min="${a(this.min)}"
          max="${a(this.max)}"
          size="${a(this.size)}"
          minlength="${a(this.minLength)}"
          maxlength="${a(this.maxLength)}"
          name="${a(this.name)}"
          pattern="${a(this.pattern)}"
          placeholder="${a(this.placeholder)}"
          value="${a(this.value)}"
          aria-describedby="${a(this._helpId)}"
          aria-errormessage="${a(this._error)}"
          aria-invalid="${a(this.invalid)}"
          id="${this._id}"
          ?disabled="${this.disabled}"
          ?readonly="${this.readOnly}"
          ?required="${this.required}"
          @blur="${this.handler}"
          @change="${this.handler}"
          @focus="${this.handler}" />
        <slot @slotchange="${this.suffixSlotChange}" name="suffix"></slot>
      </div>
      ${this.helpText&&v`<div class="${this._helptextstyles}" id="${this._helpId}">${this.helpText}</div>`}
    `}}r([t({type:Boolean,reflect:!0})],e.prototype,"disabled");r([t({type:Boolean,reflect:!0})],e.prototype,"invalid");r([t({type:String,reflect:!0})],e.prototype,"id");r([t({type:String,reflect:!0})],e.prototype,"label");r([t({type:String,reflect:!0})],e.prototype,"helpText");r([t({type:String,reflect:!0})],e.prototype,"size");r([t({type:Number,reflect:!0})],e.prototype,"max");r([t({type:Number,reflect:!0})],e.prototype,"min");r([t({type:Number,reflect:!0,attribute:"min-length"})],e.prototype,"minLength");r([t({type:Number,reflect:!0,attribute:"max-length"})],e.prototype,"maxLength");r([t({type:String,reflect:!0})],e.prototype,"pattern");r([t({type:String,reflect:!0})],e.prototype,"placeholder");r([t({type:Boolean,reflect:!0,attribute:"read-only"})],e.prototype,"readOnly");r([t({type:Boolean,reflect:!0})],e.prototype,"required");r([t({type:String,reflect:!0})],e.prototype,"type");r([t({type:String,reflect:!0})],e.prototype,"value");r([t({type:String,reflect:!0})],e.prototype,"name");r([t({type:Boolean})],e.prototype,"_hasPrefix");r([t({type:Boolean})],e.prototype,"_hasSuffix");customElements.get("w-textfield")||customElements.define("w-textfield",e);const{events:W,args:C,argTypes:R}=E("w-textfield"),V={title:"Forms/Textfield",render(i){return`<w-textfield ${_(i)}></w-textfield>`},args:C,argTypes:R,parameters:{actions:{handles:W}}},d={args:{label:"Email",type:"email"}},p={args:{label:"Email",placeholder:"user@example.com",type:"email"}},c={args:{label:"Password","help-text":"Must be at least 8 characters",type:"password"}},h={args:{label:"Email",invalid:!0,"help-text":"Please enter a valid email address",value:"invalid-email",type:"email"}},u={args:{label:"Email",disabled:!0,value:"user@example.com",type:"email"}},m={args:{label:"Email","read-only":!0,value:"user@example.com",type:"email"}},f={args:{label:"Email",required:!0,type:"email"}},b={args:{label:"Price",placeholder:"1 000 000",type:"text"},render(i){return`
      <w-textfield ${_(i)}>
        <w-affix slot="suffix" label="kr"></w-affix>
      </w-textfield>
    `}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    type: 'email'
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    placeholder: 'user@example.com',
    type: 'email'
  }
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    'help-text': 'Must be at least 8 characters',
    type: 'password'
  }
}`,...c.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    invalid: true,
    'help-text': 'Please enter a valid email address',
    value: 'invalid-email',
    type: 'email'
  }
}`,...h.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    disabled: true,
    value: 'user@example.com',
    type: 'email'
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    'read-only': true,
    value: 'user@example.com',
    type: 'email'
  }
}`,...m.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    required: true,
    type: 'email'
  }
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Price',
    placeholder: '1 000 000',
    type: 'text'
  },
  render(args) {
    return \`
      <w-textfield \${toAttributeString(args)}>
        <w-affix slot="suffix" label="kr"></w-affix>
      </w-textfield>
    \`;
  }
}`,...b.parameters?.docs?.source}}};const j=["Default","WithPlaceholder","WithHelpText","Invalid","Disabled","ReadOnly","Required","WithAffix"];export{d as Default,u as Disabled,h as Invalid,m as ReadOnly,f as Required,b as WithAffix,c as WithHelpText,p as WithPlaceholder,j as __namedExportsOrder,V as default};
