import{a as b,i as u,r as g,j as x,x as n,E as v,n as r}from"./iframe-BBOtFiqW.js";import{e as m}from"./query-NYTjQBeo.js";import{e as w}from"./class-map-DJEer9QW.js";import{o as i}from"./if-defined-B5sXAcw1.js";import{F as y}from"./FormControlMixin-DJnJZbro.js";const _=b`
  .w-textfield {
    --_input-padding-top: 12px;
    --_input-padding-left: 8px;
    --_input-padding-right: 8px;
    position: relative;
  }

  .w-textfield--has-prefix {
    --_input-padding-left: 40px;
  }

  .w-textfield--has-suffix {
    --_input-padding-right: var(--w-prefix-width, 40px);
  }

  .w-textfield__input-wrapper {
    position: relative;
    overflow: hidden;
  }

  .w-textfield__input-wrapper:focus-within .w-textfield__mask {
    display: none;
  }

  /* Hide the native browser controls */
  input[type="number"] {
    -moz-appearance:textfield;
  }

  input[type="number"]::-webkit-inner-spin-button {
    display: none;
  }

  /* Could also consider giving the input mask a background color instead of this */
  .w-textfield__input-wrapper:has(.w-textfield__mask):not(:focus-within) input {
    color: transparent;
  }

  .w-textfield__mask {
    display: block;
    border: 1px solid transparent;
    top: var(--_input-padding-top);
    left: var(--_input-padding-left);
    right: var(--_input-padding-right);
    position: absolute;
    pointer-events: none;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    z-index: 1;
  }
`,$=b`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.focus\\:\\[--w-outline-offset\\:-2px\\]:focus{--w-outline-offset:-2px}.bg-transparent{background-color:#0000}.border-1{border-width:1px}.rounded-4{border-radius:4px}.caret-current{caret-color:currentColor}.block{display:block}.focusable:focus{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:focus-visible{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:not(:focus-visible){outline:none}.outline-\\[--w-s-color-border-negative\\]\\!{outline-color:var(--w-s-color-border-negative)!important}.relative{position:relative}.static{position:static}.s-bg{background-color:var(--w-s-color-background)}.s-bg-disabled-subtle{background-color:var(--w-s-color-background-disabled-subtle)}.s-text{color:var(--w-s-color-text)}.s-text-disabled{color:var(--w-s-color-text-disabled)}.s-text-negative{color:var(--w-s-color-text-negative)}.s-text-subtle{color:var(--w-s-color-text-subtle)}.placeholder\\:s-text-placeholder::placeholder{color:var(--w-s-color-text-placeholder)}.s-border-disabled{border-color:var(--w-s-color-border-disabled)}.s-border-negative{border-color:var(--w-s-color-border-negative)}.s-border-strong{border-color:var(--w-s-color-border-strong)}.hover\\:s-border-negative-hover:hover{border-color:var(--w-s-color-border-negative-hover)}.hover\\:s-border-strong-hover:hover{border-color:var(--w-s-color-border-strong-hover)}.active\\:s-border-selected:active{border-color:var(--w-s-color-border-selected)}.w-full{width:100%}.min-h-\\[42\\]{min-height:4.2rem}.mb-0{margin-bottom:0}.mt-4{margin-top:.4rem}.px-8{padding-left:.8rem;padding-right:.8rem}.py-12{padding-top:1.2rem;padding-bottom:1.2rem}.pb-4{padding-bottom:.4rem}.pl-0{padding-left:0}.pl-8{padding-left:.8rem}.pr-40{padding-right:4rem}.pl-\\[var\\(--w-prefix-width\\,_40px\\)\\]{padding-left:var(--w-prefix-width,40px)}.cursor-pointer{cursor:pointer}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-smoothing:grayscale}.font-bold{font-weight:700}.font-normal{font-weight:400}.pointer-events-none{pointer-events:none}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.text-m{font-size:var(--w-font-size-m);line-height:var(--w-line-height-m)}.text-s{font-size:var(--w-font-size-s);line-height:var(--w-line-height-s)}.text-xs{font-size:var(--w-font-size-xs);line-height:var(--w-line-height-xs)}.leading-m{line-height:var(--w-line-height-m)}@media (min-width:480px){.sm\\:min-h-\\[45\\]{min-height:4.5rem}}`;var k=Object.defineProperty,t=(d,o,l,p)=>{for(var s=void 0,h=d.length-1,c;h>=0;h--)(c=d[h])&&(s=c(o,l,s)||s);return s&&k(o,l,s),s};const a={base:"block text-m leading-m mb-0 px-8 py-12 rounded-4 w-full focusable focus:[--w-outline-offset:-2px] caret-current",default:"border-1 s-text s-bg s-border-strong hover:s-border-strong-hover active:s-border-selected",disabled:"border-1 s-text-disabled s-bg-disabled-subtle s-border-disabled pointer-events-none",invalid:"border-1 s-text-negative s-bg s-border-negative hover:s-border-negative-hover outline-[--w-s-color-border-negative]!",readOnly:"pl-0 bg-transparent pointer-events-none",suffix:"pr-40",prefix:"pl-[var(--w-prefix-width,_40px)]"},S={base:"antialiased block relative text-s font-bold pb-4 cursor-pointer s-text"},f={base:"text-xs mt-4 block",color:"s-text-subtle",colorInvalid:"s-text-negative"};class e extends y(u){constructor(){super(...arguments),this.type="text",this._hasPrefix=!1,this._hasSuffix=!1}static{this.shadowRootOptions={...u.shadowRootOptions,delegatesFocus:!0}}updated(o){o.has("value")&&this.setValue(this.value),this.formatter&&this.value&&(this.mask.innerText=this.formatter(this.value))}static{this.styles=[g,$,_]}get _inputstyles(){return x([a.base,this._hasSuffix&&a.suffix,this._hasPrefix&&a.prefix,!this.invalid&&!this.disabled&&!this.readOnly&&a.default,this.invalid&&!this.disabled&&!this.readOnly&&a.invalid,!this.invalid&&this.disabled&&!this.readOnly&&a.disabled,!this.invalid&&!this.disabled&&this.readOnly&&a.readOnly])}get _helptextstyles(){return x([f.base,this.invalid?f.colorInvalid:f.color])}get _label(){if(this.label)return n`<label for="${this._id}" class=${S.base}>${this.label}</label>`}get _helpId(){if(this.helpText)return`${this._id}__hint`}get _id(){return"textfield"}get _error(){if(this.invalid&&this._helpId)return this._helpId}handler(o){const{name:l,value:p}=o.currentTarget;this.value=p;const s=new CustomEvent(o.type,{detail:{name:l,value:p,target:o.target}});this.dispatchEvent(s)}prefixSlotChange(){this.renderRoot.querySelector("slot[name=prefix]").assignedElements().length&&(this._hasPrefix=!0)}suffixSlotChange(){this.renderRoot.querySelector("slot[name=suffix]").assignedElements().length&&(this._hasSuffix=!0)}render(){return n`
      ${this._label}
      <div
        class="${w({"w-textfield":!0,"w-textfield--has-prefix":this._hasPrefix,"w-textfield--has-suffix":this._hasSuffix})}">
        <slot @slotchange="${this.prefixSlotChange}" name="prefix"></slot>
        <div class="w-textfield__input-wrapper">
          ${this.formatter?n`<div class="w-textfield__mask"></div>`:v}
          <input
            class="${this._inputstyles}"
            type="${this.type}"
            min="${i(this.min)}"
            max="${i(this.max)}"
            size="${i(this.size)}"
            minlength="${i(this.minLength)}"
            maxlength="${i(this.maxLength)}"
            name="${i(this.name)}"
            pattern="${i(this.pattern)}"
            placeholder="${i(this.placeholder)}"
            .value="${this.value||""}"
            aria-describedby="${i(this._helpId||(this.ariaDescription?"aria-description":void 0))}"
            aria-errormessage="${i(this._error)}"
            aria-invalid="${i(this.invalid)}"
            id="${this._id}"
            ?disabled="${this.disabled}"
            ?readonly="${this.readOnly}"
            ?required="${this.required}"
            @blur="${this.handler}"
            @change="${this.handler}"
            @input="${this.handler}"
            @focus="${this.handler}" />
        </div>
        <slot @slotchange="${this.suffixSlotChange}" name="suffix"></slot>
      </div>
      <span class="sr-only" id="aria-description">${this.ariaDescription}</span>
      ${this.helpText&&n`<div class="${this._helptextstyles}" id="${this._helpId}">${this.helpText}</div>`}
    `}}t([r({type:Boolean,reflect:!0})],e.prototype,"disabled");t([r({type:Boolean,reflect:!0})],e.prototype,"invalid");t([r({type:String,reflect:!0})],e.prototype,"id");t([r({type:String,reflect:!0})],e.prototype,"label");t([r({type:String,reflect:!0,attribute:"help-text"})],e.prototype,"helpText");t([r({type:String,reflect:!0})],e.prototype,"size");t([r({type:Number,reflect:!0})],e.prototype,"max");t([r({type:Number,reflect:!0})],e.prototype,"min");t([r({type:Number,reflect:!0,attribute:"min-length"})],e.prototype,"minLength");t([r({type:Number,reflect:!0,attribute:"max-length"})],e.prototype,"maxLength");t([r({type:String,reflect:!0})],e.prototype,"pattern");t([r({type:String,reflect:!0})],e.prototype,"placeholder");t([r({type:Boolean,reflect:!0,attribute:"read-only"})],e.prototype,"readOnly");t([r({type:Boolean,reflect:!0})],e.prototype,"required");t([r({type:String,reflect:!0})],e.prototype,"type");t([r({type:String,reflect:!0})],e.prototype,"value");t([r({type:String,reflect:!0})],e.prototype,"name");t([r({attribute:!1})],e.prototype,"formatter");t([m(".w-textfield__mask")],e.prototype,"mask");t([r({type:Boolean})],e.prototype,"_hasPrefix");t([r({type:Boolean})],e.prototype,"_hasSuffix");customElements.get("w-textfield")||customElements.define("w-textfield",e);
