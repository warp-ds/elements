import{i as e}from"./preload-helper-xPQekRTU.js";import{Bt as t,D as n,E as r,Ht as i,Kt as a,Lt as o,O as s,Rt as c,Wt as l,b as u,f as d,h as f,l as p,m,p as h,u as g,x as _}from"./iframe-BRh2F1_A.js";import{n as v,t as y}from"./form-control-DtXadPi-.js";import{r as b,t as x}from"./if-defined-Bxi-3SEH.js";var S,C=e((()=>{o(),S=l`
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
`})),w,T=e((()=>{o(),w=a(`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.focus\\:\\[--w-outline-offset\\:-2px\\]:focus{--w-outline-offset:-2px}.bg-transparent{background-color:#0000}.border-1{border-width:1px}.rounded-4{border-radius:4px}.caret-current{caret-color:currentColor}.block{display:block}.focusable:focus{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:focus-visible{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:not(:focus-visible){outline:none}.outline-\\[--w-s-color-border-negative\\]\\!{outline-color:var(--w-s-color-border-negative)!important}.relative{position:relative}.static{position:static}.s-bg{background-color:var(--w-s-color-background)}.s-bg-disabled-subtle{background-color:var(--w-s-color-background-disabled-subtle)}.s-text{color:var(--w-s-color-text)}.s-text-disabled{color:var(--w-s-color-text-disabled)}.s-text-negative{color:var(--w-s-color-text-negative)}.s-text-subtle{color:var(--w-s-color-text-subtle)}.placeholder\\:s-text-placeholder::placeholder{color:var(--w-s-color-text-placeholder)}.s-border-disabled{border-color:var(--w-s-color-border-disabled)}.s-border-negative{border-color:var(--w-s-color-border-negative)}.s-border-strong{border-color:var(--w-s-color-border-strong)}.hover\\:s-border-negative-hover:hover{border-color:var(--w-s-color-border-negative-hover)}.hover\\:s-border-strong-hover:hover{border-color:var(--w-s-color-border-strong-hover)}.active\\:s-border-selected:active{border-color:var(--w-s-color-border-selected)}.w-full{width:100%}.min-h-\\[42\\]{min-height:4.2rem}.mb-0{margin-bottom:0}.mt-4{margin-top:.4rem}.px-8{padding-left:.8rem;padding-right:.8rem}.py-12{padding-top:1.2rem;padding-bottom:1.2rem}.pb-4{padding-bottom:.4rem}.pl-0{padding-left:0}.pl-8{padding-left:.8rem}.pr-40{padding-right:4rem}.pl-\\[var\\(--w-prefix-width\\,_40px\\)\\]{padding-left:var(--w-prefix-width,40px)}.visible{visibility:visible}.cursor-pointer{cursor:pointer}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-smoothing:grayscale}.font-bold{font-weight:700}.font-normal{font-weight:400}.pointer-events-none{pointer-events:none}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.text-m{font-size:var(--w-font-size-m);line-height:var(--w-line-height-m)}.text-s{font-size:var(--w-font-size-s);line-height:var(--w-line-height-s)}.text-xs{font-size:var(--w-font-size-xs);line-height:var(--w-line-height-xs)}.leading-m{line-height:var(--w-line-height-m)}@media (min-width:480px){.sm\\:min-h-\\[45\\]{min-height:4.5rem}}`)})),E,D,O,k,A=e((()=>{n(),y(),o(),u(),m(),x(),p(),C(),T(),h(),E={base:`block text-m leading-m mb-0 px-8 py-12 rounded-4 w-full focusable focus:[--w-outline-offset:-2px] caret-current`,default:`border-1 s-text s-bg s-border-strong hover:s-border-strong-hover active:s-border-selected`,disabled:`border-1 s-text-disabled s-bg-disabled-subtle s-border-disabled pointer-events-none`,invalid:`border-1 s-text-negative s-bg s-border-negative hover:s-border-negative-hover outline-[--w-s-color-border-negative]!`,readOnly:`pl-0 bg-transparent pointer-events-none`,placeholder:`placeholder:s-text-placeholder`,suffix:`pr-40`,prefix:`pl-[var(--w-prefix-width,_40px)]`,textArea:`min-h-[42] sm:min-h-[45]`},D={base:`antialiased block relative text-s font-bold pb-4 cursor-pointer s-text`,optional:`pl-8 font-normal text-s s-text-subtle`},O={base:`text-xs mt-4 block`,color:`s-text-subtle`,colorInvalid:`s-text-negative`},k=class extends v(c){constructor(...e){super(...e),this.disabled=!1,this.invalid=!1,this.readOnly=!1,this.readonly=!1,this.required=!1,this._hasPrefix=!1,this._hasSuffix=!1,this.#t=void 0}static{this.shadowRootOptions={...c.shadowRootOptions,delegatesFocus:!0}}#e(e){e.key===`Enter`&&this.internals.form&&this.internals.form.requestSubmit()}updated(e){e.has(`value`)&&this.value!==void 0&&(this.setValue(this.value),this.formatter&&this.mask&&(this.mask.innerText=this.formatter(this.value)))}#t;firstUpdated(e){this.#t=this.value}resetFormControl(){this.value=this.#t}static{this.styles=[g,w,S]}get _inputstyles(){return s([E.base,this._hasSuffix&&E.suffix,this._hasPrefix&&E.prefix,!this.invalid&&!this.disabled&&!(this.readonly||this.readOnly)&&E.default,this.invalid&&!this.disabled&&!(this.readonly||this.readOnly)&&E.invalid,!this.invalid&&this.disabled&&!(this.readonly||this.readOnly)&&E.disabled,!this.invalid&&!this.disabled&&(this.readonly||this.readOnly)&&E.readOnly])}get _helptextstyles(){return s([O.base,this.invalid?O.colorInvalid:O.color])}get _label(){if(this.label)return i`<label for="${this._id}" class=${D.base}>${this.label}</label>`}get _helpId(){if(this.helpText)return`${this._id}__hint`}get _id(){return`textfield`}get _error(){if(this.invalid&&this._helpId)return this._helpId}handler(e){let{name:t,value:n}=e.currentTarget;this.value=n;let r=new CustomEvent(e.type,{detail:{name:t,value:n,target:e.target}});this.dispatchEvent(r)}prefixSlotChange(){this.renderRoot.querySelector(`slot[name=prefix]`).assignedElements().length&&(this._hasPrefix=!0)}suffixSlotChange(){this.renderRoot.querySelector(`slot[name=suffix]`).assignedElements().length&&(this._hasSuffix=!0)}render(){return i`
      ${this._label}
      <div
        class="${f({"w-textfield":!0,"w-textfield--has-prefix":this._hasPrefix,"w-textfield--has-suffix":this._hasSuffix})}">
        <div class="w-textfield__input-wrapper">
          ${this.formatter?i`<div class="w-textfield__mask"></div>`:t}
          <input
            class="${this._inputstyles}"
            type="${this.type||`text`}"
            min="${b(this.min)}"
            max="${b(this.max)}"
            size="${b(this.size)}"
            minlength="${b(this.minLength||this.minlength)}"
            maxlength="${b(this.maxLength||this.maxlength)}"
            name="${b(this.name)}"
            pattern="${b(this.pattern)}"
            placeholder="${b(this.placeholder)}"
            .value="${this.value||``}"
            aria-describedby="${b(this._helpId||(this.ariaDescription?`aria-description`:void 0))}"
            aria-errormessage="${b(this._error)}"
            aria-invalid="${b(this.invalid)}"
            id="${this._id}"
            ?disabled="${this.disabled}"
            ?readonly="${this.readonly||this.readOnly}"
            ?required="${this.required}"
            autocomplete="${b(this.autocomplete)}"
            step="${b(this.step)}"
            @blur="${this.handler}"
            @change="${this.handler}"
            @input="${this.handler}"
            @focus="${this.handler}"
            @keydown="${this.#e}" />
        </div>
        <slot @slotchange="${this.prefixSlotChange}" name="prefix"></slot>
        <slot @slotchange="${this.suffixSlotChange}" name="suffix"></slot>
      </div>
      <span class="sr-only" id="aria-description">${this.ariaDescription}</span>
      ${this.helpText&&i`<div class="${this._helptextstyles}" id="${this._helpId}">${this.helpText}</div>`}
    `}},d([r({type:Boolean,reflect:!0})],k.prototype,`disabled`,void 0),d([r({type:Boolean,reflect:!0})],k.prototype,`invalid`,void 0),d([r({type:String,reflect:!0})],k.prototype,`label`,void 0),d([r({type:String,reflect:!0,attribute:`help-text`})],k.prototype,`helpText`,void 0),d([r({type:String,reflect:!0})],k.prototype,`size`,void 0),d([r({type:Number,reflect:!0})],k.prototype,`max`,void 0),d([r({type:Number,reflect:!0})],k.prototype,`min`,void 0),d([r({type:Number,reflect:!0,attribute:`min-length`})],k.prototype,`minLength`,void 0),d([r({type:Number,reflect:!0})],k.prototype,`minlength`,void 0),d([r({type:Number,reflect:!0,attribute:`max-length`})],k.prototype,`maxLength`,void 0),d([r({type:Number,reflect:!0})],k.prototype,`maxlength`,void 0),d([r({type:String,reflect:!0})],k.prototype,`pattern`,void 0),d([r({type:String,reflect:!0})],k.prototype,`placeholder`,void 0),d([r({type:Boolean,reflect:!0,attribute:`read-only`})],k.prototype,`readOnly`,void 0),d([r({type:Boolean,reflect:!0})],k.prototype,`readonly`,void 0),d([r({type:Boolean,reflect:!0})],k.prototype,`required`,void 0),d([r({type:String,reflect:!0})],k.prototype,`type`,void 0),d([r({type:String,reflect:!0})],k.prototype,`value`,void 0),d([r({type:String,reflect:!0})],k.prototype,`name`,void 0),d([r({type:Number,reflect:!0})],k.prototype,`step`,void 0),d([r({type:String,reflect:!0})],k.prototype,`autocomplete`,void 0),d([r({attribute:!1})],k.prototype,`formatter`,void 0),d([_(`.w-textfield__mask`)],k.prototype,`mask`,void 0),d([r({type:Boolean})],k.prototype,`_hasPrefix`,void 0),d([r({type:Boolean})],k.prototype,`_hasSuffix`,void 0),customElements.get(`w-textfield`)||customElements.define(`w-textfield`,k)}));export{A as t};