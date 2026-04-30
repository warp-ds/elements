import{n as e}from"./chunk-BneVvdWh.js";import{m as t,n,r,s as i,t as a}from"./lit-C07f_Bua.js";import{n as o,t as s}from"./index.m-wj1BHO_P.js";import{i as c,n as l,o as u,r as d,t as f}from"./decorate-BZxMavXy.js";import{n as p,t as m}from"./class-map-DFBsEYAd.js";import{n as h,t as g}from"./styles-BM5RxtAH.js";import{n as _,t as v}from"./form-control-Dpu9R3Zk.js";import{n as y,t as b}from"./if-defined-C6phCcrk.js";var x,S=e((()=>{a(),x=t`
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


  /* It's supposed to behave like a placeholder, but look like a value. Don't tell the designers 🤫 */
  input::placeholder {
    color: var(--w-textfield-placeholder-color-text, var(--w-s-color-text-placeholder));
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
`})),C,w=e((()=>{a(),C=t`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.focus\\:\\[--w-outline-offset\\:-2px\\]:focus{--w-outline-offset:-2px}.bg-transparent{background-color:#0000}.border-1{border-width:1px}.rounded-4{border-radius:4px}.caret-current{caret-color:currentColor}.block{display:block}.focusable:focus{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:focus-visible{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:not(:focus-visible){outline:none}.outline-\\[--w-s-color-border-negative\\]\\!{outline-color:var(--w-s-color-border-negative)!important}.relative{position:relative}.static{position:static}.s-bg{background-color:var(--w-s-color-background)}.s-bg-disabled-subtle{background-color:var(--w-s-color-background-disabled-subtle)}.s-text{color:var(--w-s-color-text)}.s-text-disabled{color:var(--w-s-color-text-disabled)}.s-text-negative{color:var(--w-s-color-text-negative)}.s-text-subtle{color:var(--w-s-color-text-subtle)}.placeholder\\:s-text-placeholder::placeholder{color:var(--w-s-color-text-placeholder)}.s-border-disabled{border-color:var(--w-s-color-border-disabled)}.s-border-negative{border-color:var(--w-s-color-border-negative)}.s-border-strong{border-color:var(--w-s-color-border-strong)}.hover\\:s-border-negative-hover:hover{border-color:var(--w-s-color-border-negative-hover)}.hover\\:s-border-strong-hover:hover{border-color:var(--w-s-color-border-strong-hover)}.active\\:s-border-selected:active{border-color:var(--w-s-color-border-selected)}.w-full{width:100%}.min-h-\\[42\\]{min-height:4.2rem}.mb-0{margin-bottom:0}.mt-4{margin-top:.4rem}.px-8{padding-left:.8rem;padding-right:.8rem}.py-12{padding-top:1.2rem;padding-bottom:1.2rem}.pb-4{padding-bottom:.4rem}.pl-0{padding-left:0}.pl-8{padding-left:.8rem}.pr-40{padding-right:4rem}.pl-\\[var\\(--w-prefix-width\\,_40px\\)\\]{padding-left:var(--w-prefix-width,40px)}.cursor-pointer{cursor:pointer}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-smoothing:grayscale}.font-bold{font-weight:700}.font-normal{font-weight:400}.pointer-events-none{pointer-events:none}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.text-m{font-size:var(--w-font-size-m);line-height:var(--w-line-height-m)}.text-s{font-size:var(--w-font-size-s);line-height:var(--w-line-height-s)}.text-xs{font-size:var(--w-font-size-xs);line-height:var(--w-line-height-xs)}.leading-m{line-height:var(--w-line-height-m)}@media (min-width:480px){.sm\\:min-h-\\[45\\]{min-height:4.5rem}}`})),T,E,D,O,k=e((()=>{s(),v(),a(),d(),m(),b(),g(),S(),w(),l(),T={base:`block text-m leading-m mb-0 px-8 py-12 rounded-4 w-full focusable focus:[--w-outline-offset:-2px] caret-current`,default:`border-1 s-text s-bg s-border-strong hover:s-border-strong-hover active:s-border-selected`,disabled:`border-1 s-text-disabled s-bg-disabled-subtle s-border-disabled pointer-events-none`,invalid:`border-1 s-text-negative s-bg s-border-negative hover:s-border-negative-hover outline-[--w-s-color-border-negative]!`,readOnly:`pl-0 bg-transparent pointer-events-none`,placeholder:`placeholder:s-text-placeholder`,suffix:`pr-40`,prefix:`pl-[var(--w-prefix-width,_40px)]`,textArea:`min-h-[42] sm:min-h-[45]`},E={base:`antialiased block relative text-s font-bold pb-4 cursor-pointer s-text`,optional:`pl-8 font-normal text-s s-text-subtle`},D={base:`text-xs mt-4 block`,color:`s-text-subtle`,colorInvalid:`s-text-negative`},O=class extends _(n){constructor(...e){super(...e),this.disabled=!1,this.invalid=!1,this.readOnly=!1,this.readonly=!1,this.required=!1,this._hasPrefix=!1,this._hasSuffix=!1}static{this.shadowRootOptions={...n.shadowRootOptions,delegatesFocus:!0}}updated(e){e.has(`value`)&&(this.setValue(this.value),this.formatter&&(this.mask.innerText=this.formatter(this.value)))}#e=null;firstUpdated(e){this.#e=this.value}resetFormControl(){this.value=this.#e}static{this.styles=[h,C,x]}get _inputstyles(){return o([T.base,this._hasSuffix&&T.suffix,this._hasPrefix&&T.prefix,!this.invalid&&!this.disabled&&!(this.readonly||this.readOnly)&&T.default,this.invalid&&!this.disabled&&!(this.readonly||this.readOnly)&&T.invalid,!this.invalid&&this.disabled&&!(this.readonly||this.readOnly)&&T.disabled,!this.invalid&&!this.disabled&&(this.readonly||this.readOnly)&&T.readOnly])}get _helptextstyles(){return o([D.base,this.invalid?D.colorInvalid:D.color])}get _label(){if(this.label)return i`<label for="${this._id}" class=${E.base}>${this.label}</label>`}get _helpId(){if(this.helpText)return`${this._id}__hint`}get _id(){return`textfield`}get _error(){if(this.invalid&&this._helpId)return this._helpId}handler(e){let{name:t,value:n}=e.currentTarget;this.value=n;let r=new CustomEvent(e.type,{detail:{name:t,value:n,target:e.target}});this.dispatchEvent(r)}prefixSlotChange(){this.renderRoot.querySelector(`slot[name=prefix]`).assignedElements().length&&(this._hasPrefix=!0)}suffixSlotChange(){this.renderRoot.querySelector(`slot[name=suffix]`).assignedElements().length&&(this._hasSuffix=!0)}render(){return i`
      ${this._label}
      <div
        class="${p({"w-textfield":!0,"w-textfield--has-prefix":this._hasPrefix,"w-textfield--has-suffix":this._hasSuffix})}">
        <div class="w-textfield__input-wrapper">
          ${this.formatter?i`<div class="w-textfield__mask"></div>`:r}
          <input
            class="${this._inputstyles}"
            type="${this.type||`text`}"
            min="${y(this.min)}"
            max="${y(this.max)}"
            size="${y(this.size)}"
            minlength="${y(this.minLength||this.minlength)}"
            maxlength="${y(this.maxLength||this.maxlength)}"
            name="${y(this.name)}"
            pattern="${y(this.pattern)}"
            placeholder="${y(this.placeholder)}"
            .value="${this.value||``}"
            aria-describedby="${y(this._helpId||(this.ariaDescription?`aria-description`:void 0))}"
            aria-errormessage="${y(this._error)}"
            aria-invalid="${y(this.invalid)}"
            id="${this._id}"
            ?disabled="${this.disabled}"
            ?readonly="${this.readonly||this.readOnly}"
            ?required="${this.required}"
            autocomplete="${y(this.autocomplete)}"
            step="${y(this.step)}"
            @blur="${this.handler}"
            @change="${this.handler}"
            @input="${this.handler}"
            @focus="${this.handler}" />
        </div>
        <slot @slotchange="${this.prefixSlotChange}" name="prefix"></slot>
        <slot @slotchange="${this.suffixSlotChange}" name="suffix"></slot>
      </div>
      <span class="sr-only" id="aria-description">${this.ariaDescription}</span>
      ${this.helpText&&i`<div class="${this._helptextstyles}" id="${this._helpId}">${this.helpText}</div>`}
    `}},f([u({type:Boolean,reflect:!0})],O.prototype,`disabled`,void 0),f([u({type:Boolean,reflect:!0})],O.prototype,`invalid`,void 0),f([u({type:String,reflect:!0})],O.prototype,`label`,void 0),f([u({type:String,reflect:!0,attribute:`help-text`})],O.prototype,`helpText`,void 0),f([u({type:String,reflect:!0})],O.prototype,`size`,void 0),f([u({type:Number,reflect:!0})],O.prototype,`max`,void 0),f([u({type:Number,reflect:!0})],O.prototype,`min`,void 0),f([u({type:Number,reflect:!0,attribute:`min-length`})],O.prototype,`minLength`,void 0),f([u({type:Number,reflect:!0})],O.prototype,`minlength`,void 0),f([u({type:Number,reflect:!0,attribute:`max-length`})],O.prototype,`maxLength`,void 0),f([u({type:Number,reflect:!0})],O.prototype,`maxlength`,void 0),f([u({type:String,reflect:!0})],O.prototype,`pattern`,void 0),f([u({type:String,reflect:!0})],O.prototype,`placeholder`,void 0),f([u({type:Boolean,reflect:!0,attribute:`read-only`})],O.prototype,`readOnly`,void 0),f([u({type:Boolean,reflect:!0})],O.prototype,`readonly`,void 0),f([u({type:Boolean,reflect:!0})],O.prototype,`required`,void 0),f([u({type:String,reflect:!0})],O.prototype,`type`,void 0),f([u({type:String,reflect:!0})],O.prototype,`value`,void 0),f([u({type:String,reflect:!0})],O.prototype,`name`,void 0),f([u({type:Number,reflect:!0})],O.prototype,`step`,void 0),f([u({type:String,reflect:!0})],O.prototype,`autocomplete`,void 0),f([u({attribute:!1})],O.prototype,`formatter`,void 0),f([c(`.w-textfield__mask`)],O.prototype,`mask`,void 0),f([u({type:Boolean})],O.prototype,`_hasPrefix`,void 0),f([u({type:Boolean})],O.prototype,`_hasSuffix`,void 0),customElements.get(`w-textfield`)||customElements.define(`w-textfield`,O)}));export{k as t};