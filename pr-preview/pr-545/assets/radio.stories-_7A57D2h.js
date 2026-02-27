import{a as G,i as z,r as j,b as i,n as d,q as K,l as B,m as P,g as Q}from"./iframe-fwU1Fuq4.js";import{s as X,p as Y}from"./utilities-BsCzDLPM.js";import{F as O}from"./FormControlMixin-DJnJZbro.js";import{o as M}from"./if-defined-DUzG6b2u.js";import"./preload-helper-Ct5FWWRu.js";const N=G`
  :host {
    box-sizing: border-box !important;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit !important;
  }
`,Z=G`
  :host {
    display: inline-flex;
    align-items: center;
    gap: var(--_gap);

    --_gap: var(--w-c-radio-gap, 8px);

    --_size: var(--w-c-radio-size, 2rem);
    --_radius: var(--w-c-radio-radius, 50%);
    --_border-width: var(--w-c-radio-border-width, 1px);
    --_checked-border-width: var(--w-c-radio-checked-border-width, 0.6rem);

    --_bg: var(--w-c-radio-bg, var(--w-s-color-background));
    --_border-color: var(--w-c-radio-border-color, var(--w-s-color-border-strong));
    --_border-color-checked: var(--w-c-radio-border-color-checked, var(--w-s-color-border-selected));
    --_border-color-invalid: var(--w-c-radio-border-color-invalid, var(--w-s-color-border-negative));

    --_outline-width: var(--w-c-radio-outline-width, 2px);
    --_outline-color: var(--w-c-radio-outline-color, var(--w-s-color-border-focus));
    --_outline-offset: var(--w-c-radio-outline-offset, var(--w-outline-offset, 1px));

    --_border-color-disabled: var(--w-c-radio-border-color-disabled, var(--w-s-color-border-disabled));
    --_bg-disabled: var(--w-c-radio-bg-disabled, var(--w-s-color-background-disabled-subtle));

    --_label-font-size: var(--w-c-radio-label-font-size, var(--w-font-size-m));
    --_label-line-height: var(--w-c-radio-label-line-height, var(--w-line-height-m));
    --_label-color: var(--w-c-radio-label-color, currentColor);
    --_label-color-disabled: var(--w-c-radio-label-color-disabled, var(--w-s-color-text-disabled));

    --_cursor: var(--w-c-radio-cursor, pointer);
    --_cursor-disabled: var(--w-c-radio-cursor-disabled, not-allowed);

    --_transition: var(
      --w-c-radio-transition,
      border-color 150ms cubic-bezier(0.4, 0, 0.2, 1),
      border-width 150ms cubic-bezier(0.4, 0, 0.2, 1),
      background-color 150ms cubic-bezier(0.4, 0, 0.2, 1)
    );
  }

  :host([disabled]),
  :host([disabled-ui]) {
    --w-c-radio-border-color: var(--w-c-radio-border-color-disabled, var(--w-s-color-border-disabled));
    --w-c-radio-bg: var(--w-c-radio-bg-disabled, var(--w-s-color-background-disabled-subtle));
    --w-c-radio-border-color-checked: var(--w-c-radio-border-color-disabled, var(--w-s-color-border-disabled));
    --w-c-radio-label-color: var(--w-c-radio-label-color-disabled, var(--w-s-color-text-disabled));
    --w-c-radio-cursor: var(--w-c-radio-cursor-disabled, not-allowed);
  }

  .wrapper {
    display: inline-flex;
    align-items: center;
    gap: var(--_gap);
  }

  [part='control'] {
    appearance: none;
    -webkit-appearance: none;
    margin: 0;

    width: var(--_size);
    height: var(--_size);
    border-style: solid;
    border-width: var(--_border-width);
    border-color: var(--_border-color);
    border-radius: var(--_radius);
    background-color: var(--_bg);
    cursor: var(--_cursor);
    flex-shrink: 0;

    transition: var(--_transition);
  }

  :host([checked]) [part='control'],
  :host([checked-ui]) [part='control'],
  :host([role='radio'][checked-ui]) [part='control'],
  :host([role='radio']:state(checked)) [part='control'] {
    border-color: var(--_border-color-checked);
    border-width: var(--_checked-border-width);
  }

  :host([invalid]) [part='control'] {
    border-color: var(--_border-color-invalid);
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:focus-visible) [part='control'] {
    outline: var(--_outline-width) solid var(--_outline-color);
    outline-offset: var(--_outline-offset);
  }

  :host([disabled]) [part='control'],
  :host([disabled-ui]) [part='control'],
  :host([role='radio']:state(disabled)) [part='control'] {
    border-color: var(--_border-color-disabled);
    background-color: var(--_bg-disabled);
    cursor: var(--_cursor-disabled);
  }

  :host([disabled]) [part='label'],
  :host([disabled-ui]) [part='label'] {
    color: var(--_label-color-disabled);
    cursor: var(--_cursor-disabled);
  }

  :host([disabled][checked]),
  :host([disabled][checked-ui]),
  :host([disabled-ui][checked-ui]) [part='control'] {
    border-color: var(--_border-color-disabled);
  }

  [part='label'] {
    font-size: var(--_label-font-size);
    line-height: var(--_label-line-height);
    color: var(--_label-color);
    user-select: none;
    cursor: var(--_cursor);
  }

  @media (prefers-reduced-motion: reduce) {
    :host {
      --w-c-radio-transition: none;
    }
  }

  @media (forced-colors: active) {
    :host {
      --w-c-radio-bg: Canvas;
      --w-c-radio-border-color: ButtonText;
      --w-c-radio-border-color-checked: Highlight;
      --w-c-radio-outline-color: Highlight;
      --w-c-radio-bg-disabled: Canvas;
      --w-c-radio-border-color-disabled: GrayText;
      --w-c-radio-label-color: CanvasText;
      --w-c-radio-label-color-disabled: GrayText;
    }

    [part='control'] {
      forced-color-adjust: none;
    }

    :host([checked]) [part='control'],
    :host([checked-ui]) [part='control'],
    :host([role='radio']:state(checked)) [part='control'] {
      background-color: var(--_border-color-checked);
      border-color: var(--_border-color-checked);
    }

    :host([disabled][checked]),
    :host([disabled][checked-ui]),
    :host([disabled-ui][checked-ui]) [part='control'],
    :host([role='radio']:state(disabled):state(checked)) [part='control'] {
      background-color: var(--_border-color-disabled);
      border-color: var(--_border-color-disabled);
    }
  }
`;var ee=Object.defineProperty,b=(n,e,t,a)=>{for(var r=void 0,o=n.length-1,l;o>=0;o--)(l=n[o])&&(r=l(e,t,r)||r);return r&&ee(e,t,r),r};class p extends O(z){constructor(){super(),this.name="",this.value=null,this.checked=!1,this.disabled=!1,this.required=!1,this.invalid=!1,this.#r=!1,this.#a=!1,this.#e=!1,this.#t=!1,this.handleClick=()=>{this.isInGroup()||this.disabled||(this.#e=!0,!this.checked&&(this.checked=!0,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})))},this.handleInvalid=()=>{this.#e=!0,this.updateValidity()},this.handleKeyDown=e=>{if(!this.isInGroup()&&!this.disabled&&!e.defaultPrevented){if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.key)){const t=this.getStandaloneNamedRadios().filter(u=>!u.disabled);if(t.length<=1)return;e.preventDefault();const a=t.find(u=>u.checked)??t.find(u=>u===this)??t[0],r=e.key==="ArrowUp"||e.key==="ArrowLeft"?-1:1,l=(t.indexOf(a)+r+t.length)%t.length,s=t[l];s.#e=!0,s.checked||(s.checked=!0,s.updateComplete.then(()=>{s.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})),s.focus();return}e.key!==" "&&e.key!=="Spacebar"&&e.key!=="Enter"||(e.preventDefault(),this.click())}},this.addEventListener("click",this.handleClick),this.addEventListener("invalid",this.handleInvalid),this.addEventListener("keydown",this.handleKeyDown)}static{this.styles=[N,j,Z]}#r;#a;#e;#t;connectedCallback(){super.connectedCallback(),this.setAttribute("type","radio"),this.value=this.getAttribute("value")??"on",this.#r=this.hasAttribute("checked"),this.checked=this.#r,this.setAttribute("role","radio"),this.syncAriaDisabled(),this.syncTabIndex(),this.syncFormValue(),this.updateValidity()}syncAriaDisabled(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}syncAriaChecked(){this.setAttribute("aria-checked",this.checked?"true":"false")}willUpdate(e){this.shouldSyncFormState(e)&&(this.syncFormValue(),this.updateValidity())}updated(e){super.updated(e),e.has("checked")&&(this[this.checked?"setAttribute":"removeAttribute"]("checked-ui",""),this.syncAriaChecked(),this.checked&&!this.isInGroup()&&this.uncheckOtherRadios(),this.syncTabIndex()),e.has("disabled")&&(this[this.disabled?"setAttribute":"removeAttribute"]("disabled-ui",""),this.syncAriaDisabled(),this.syncTabIndex()),e.has("invalid")&&this.toggleAttribute("aria-invalid",this.invalid),e.has("name")&&this.checked&&!this.isInGroup()&&this.uncheckOtherRadios()}resetFormControl(){this.checked=this.#r,this.syncFormValue(),this.updateValidity()}get validationMessage(){return this.internals.validationMessage}get validity(){return this.internals.validity}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.#e=!0,this.updateValidity(),this.internals.checkValidity()}isInGroup(){return!!this.closest("w-radio-group")}getRadioScope(){return this.internals.form??this.closest("form")??document}getStandaloneNamedRadios(){if(!this.name)return[this];const e=this.getRadioScope();return Array.from(e.querySelectorAll(`w-radio[name="${this.name}"]`)).filter(t=>!t.closest("w-radio-group"))}syncStandaloneTabOrder(){const e=this.getStandaloneNamedRadios(),t=e.filter(o=>!o.disabled),r=t.find(o=>o.checked)??t[0]??null;e.forEach(o=>{if(o.disabled){o.tabIndex=-1;return}o.hasAttribute("tabindex")&&!o.#t||(o.tabIndex=o===r?0:-1,o.#t=!0)})}uncheckOtherRadios(){if(!this.name)return;const e=this.getRadioScope();Array.from(e.querySelectorAll(`w-radio[name="${this.name}"]`)).forEach(a=>{a!==this&&(a.closest("w-radio-group")||a.checked&&(a.checked=!1))})}updateValidity(){if(this.disabled||this.isInGroup()){this.internals.setValidity({});return}const e=this.required&&!this.checked,t=this.invalid&&!this.#a;if(e){this.#a=!0,this.invalid=this.#e,this.internals.setValidity({valueMissing:!0},this.internals.validationMessage||" ");return}if(this.#a&&(this.invalid=!1,this.#a=!1),t){this.internals.setValidity({customError:!0},this.internals.validationMessage||" ");return}this.internals.setValidity({})}syncFormValue(){if(this.disabled){this.setValue(null);return}this.setValue(this.checked?this.value:null)}syncTabIndex(){if(!this.hasAttribute("tabindex")&&!this.#t&&(this.#t=!0,this.tabIndex=0),this.isInGroup()){this.disabled&&(this.tabIndex=-1);return}this.hasAttribute("tabindex")&&!this.#t||this.syncStandaloneTabOrder()}shouldSyncFormState(e){return e.has("checked")||e.has("value")||e.has("disabled")||e.has("required")||e.has("invalid")}render(){return i`
      <div class="wrapper">
        <div part="control" class="control"></div>
        <slot part="label" class="label"></slot>
      </div>
    `}}b([d({reflect:!0})],p.prototype,"name");b([d({reflect:!0})],p.prototype,"value");b([d({type:Boolean,reflect:!0})],p.prototype,"checked");b([d({type:Boolean,reflect:!0})],p.prototype,"disabled");b([d({type:Boolean,reflect:!0})],p.prototype,"required");b([d({type:Boolean,reflect:!0})],p.prototype,"invalid");customElements.get("w-radio")||customElements.define("w-radio",p);const te=JSON.parse('{"radio-group.validation.required":["Vælg en mulighed."],"radio-group.label.optional":["Valgfri"]}'),ae=JSON.parse('{"radio-group.validation.required":["Please select an option."],"radio-group.label.optional":["Optional"]}'),re=JSON.parse('{"radio-group.validation.required":["Valitse vaihtoehto."],"radio-group.label.optional":["Valinnainen"]}'),oe=JSON.parse('{"radio-group.validation.required":["Velg et alternativ."],"radio-group.label.optional":["Valgfri"]}'),ie=JSON.parse('{"radio-group.validation.required":["Välj ett alternativ."],"radio-group.label.optional":["Valfritt"]}'),se=G`
  :host {
    display: block;

    --_label-font-size: var(--w-c-radio-group-label-font-size, var(--w-font-size-s));
    --_label-line-height: var(--w-c-radio-group-label-line-height, var(--w-line-height-s));
    --_label-font-weight: var(--w-c-radio-group-label-font-weight, 700);
    --_label-color: var(--w-c-radio-group-label-color, var(--w-s-color-text));
    --_label-color-disabled: var(--w-c-radio-group-label-color-disabled, var(--w-s-color-text-disabled));
    --_label-padding-bottom: var(--w-c-radio-group-label-padding-bottom, 16px);

    --_optional-font-weight: var(--w-c-radio-group-optional-font-weight, 400);
    --_optional-color: var(--w-c-radio-group-optional-color, var(--w-s-color-text-subtle));
    --_optional-margin-inline-start: var(--w-c-radio-group-optional-margin-inline-start, 0.5rem);

    --_radios-gap: var(--w-c-radio-group-gap, 16px);

    --_help-text-margin-block-start: var(--w-c-radio-group-help-text-margin-block-start, 16px);
    --_help-text-font-size: var(--w-c-radio-group-help-text-font-size, var(--w-font-size-xs));
    --_help-text-line-height: var(--w-c-radio-group-help-text-line-height, var(--w-line-height-xs));
    --_help-text-color: var(--w-c-radio-group-help-text-color, var(--w-s-color-text-subtle));
    --_help-text-color-disabled: var(--w-c-radio-group-help-text-color-disabled, var(--w-s-color-text-disabled));
    --_help-text-color-error: var(--w-c-radio-group-help-text-color-error, var(--w-s-color-text-negative));
  }

  [part='form-control'] {
    position: relative;

    border: 0;
    padding: 0;
    margin: 0;

    min-inline-size: 0;
  }

  [part='form-control-label'] {
    display: block;
    cursor: pointer;

    font-size: var(--_label-font-size);
    line-height: var(--_label-line-height);
    font-weight: var(--_label-font-weight);
    color: var(--_label-color);

    padding-bottom: var(--_label-padding-bottom);

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-smoothing: grayscale;
  }

  :host([disabled]) [part='form-control-label'] {
    cursor: default;
    color: var(--_label-color-disabled);
  }

  :host([required]) [part='form-control-label']::after {
    content: var(--wa-form-control-required-content);
    margin-inline-start: var(--wa-form-control-required-content-offset);
  }

  .optional {
    font-weight: var(--_optional-font-weight);
    color: var(--_optional-color);
    margin-inline-start: var(--_optional-margin-inline-start);
  }

  [part~='form-control-input'] {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: var(--_radios-gap);
  }

  [part~='help-text'] {
    margin-block-start: var(--_help-text-margin-block-start);
    font-size: var(--_help-text-font-size);
    line-height: var(--_help-text-line-height);
    color: var(--_help-text-color);
  }

  :host([disabled]) [part~='help-text'] {
    color: var(--_help-text-color-disabled);
  }

  :host([data-show-error]) [part~='help-text'] {
    color: var(--_help-text-color-error);
  }
`;var le=Object.defineProperty,h=(n,e,t,a)=>{for(var r=void 0,o=n.length-1,l;o>=0;o--)(l=n[o])&&(r=l(e,t,r)||r);return r&&le(e,t,r),r};K(ae,oe,re,te,ie);const de=()=>B._({id:"radio-group.validation.required",message:"Please select an option.",comment:"Shown when required radio group has no selections"});class c extends O(z){constructor(){super(),this.hasInteracted=!1,this.hasWarnedMissingName=!1,this.autoTabIndex=!1,this.label="",this.helpText="",this.optional=!1,this.invalid=!1,this.name=null,this.disabled=!1,this.required=!1,this.defaultCheckedValue=void 0,this.slottedHelpText=null,this.nameManagedRadios=new WeakSet,this.disabledManagedRadios=new WeakSet,this.handleRadioClick=e=>{const t=e.target.closest("w-radio");if(!t||t.disabled||this.disabled)return;const a=this.getCheckedValue(),r=this.getAllRadios();this.selectSingleRadio(t,r),this.getCheckedValue()!==a&&this.updateComplete.then(this.emitSelectionChange)},this.handleInvalid=e=>{e.preventDefault(),this.hasInteracted=!0,this.updateValidity()},this.handleHelpTextSlotChange=()=>{this.syncSlottedHelpText(),this.requestUpdate()},this.handleI18nChange=()=>{this.requestUpdate()},this.emitSelectionChange=()=>{this.hasInteracted=!0,this.syncFormValue(),this.updateValidity(),this.requestUpdate(),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))},this.captureDefaultSelection=()=>{this.defaultCheckedValue===void 0&&(this.defaultCheckedValue=this.getCheckedValue())},this.addEventListener("keydown",this.handleKeyDown),this.addEventListener("click",this.handleRadioClick),this.addEventListener("invalid",this.handleInvalid)}static{this.styles=[N,se]}static{this.shadowRootOptions={...z.shadowRootOptions,delegatesFocus:!0}}get validationTarget(){return this.querySelector(":is(w-radio):not([disabled])")??void 0}connectedCallback(){super.connectedCallback(),this.syncSlottedHelpText(),this.syncFormValue(),this.updateValidity(),this.unsubscribeI18n=B.on("change",this.handleI18nChange),this.warnIfMissingName(),this.updateComplete.then(this.captureDefaultSelection)}disconnectedCallback(){this.unsubscribeI18n?.(),this.unsubscribeI18n=void 0,super.disconnectedCallback()}async updated(e){if(e.has("disabled")||e.has("name")||e.has("required")||e.has("invalid")||e.has("helpText")){await this.syncRadioElements(),this.syncFormValue(),this.updateValidity();return}}resetFormControl(){const e=this.defaultCheckedValue??null;this.getAllRadios().forEach(t=>{t.checked=e?t.value===e:!1}),this.syncRadioElements().then(()=>{this.syncFormValue(),this.updateValidity()})}getAllRadios(){return[...this.querySelectorAll("w-radio")]}getCheckedValue(){return this.getAllRadios().find(t=>t.checked)?.value??null}getEnabledRadios(e=this.getAllRadios()){return e.filter(t=>!t.disabled)}selectSingleRadio(e,t=this.getAllRadios()){t.forEach(a=>{const r=a===e;a.checked=r,a.setAttribute("tabindex",r?"0":"-1")})}handleLabelClick(){this.focus()}async syncRadioElements(){const e=this.getAllRadios();e.forEach((t,a)=>{t.toggleAttribute("data-w-radio-first",a===0),t.toggleAttribute("data-w-radio-inner",a!==0&&a!==e.length-1),t.toggleAttribute("data-w-radio-last",a===e.length-1),this.syncRadioDisabledState(t),this.name?(!t.getAttribute("name")||this.nameManagedRadios.has(t))&&(t.setAttribute("name",this.name),this.nameManagedRadios.add(t)):this.nameManagedRadios.has(t)&&(t.removeAttribute("name"),this.nameManagedRadios.delete(t))}),await Promise.all(e.map(async t=>t.updateComplete)),this.normalizeCheckedRadios(e),this.syncTabOrder(e)}syncRadioDisabledState(e){if(this.disabled){e.disabled||(e.disabled=!0,this.disabledManagedRadios.add(e));return}this.disabledManagedRadios.has(e)&&(e.disabled=!1,this.disabledManagedRadios.delete(e))}syncTabOrder(e){if(this.disabled){e.forEach(r=>r.tabIndex=-1);return}const t=this.getEnabledRadios(e),a=t.find(r=>r.checked);t.length>0&&(a?t.forEach(r=>r.tabIndex=r.checked?0:-1):t.forEach((r,o)=>r.tabIndex=o===0?0:-1)),e.filter(r=>r.disabled).forEach(r=>r.tabIndex=-1)}handleKeyDown(e){if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(e.key)||this.disabled)return;const t=this.getAllRadios(),a=this.getEnabledRadios(t);if(a.length<=0)return;e.preventDefault();const r=this.getCheckedValue(),o=a.find(m=>m.checked)??a[0],l=e.key===" "?0:["ArrowUp","ArrowLeft"].includes(e.key)?-1:1;let s=a.indexOf(o)+l;s<0&&(s=a.length-1),s>=a.length&&(s=0),this.selectSingleRadio(a[s],t),a[s].focus(),this.getCheckedValue()!==r&&this.updateComplete.then(this.emitSelectionChange)}focus(e){if(this.disabled)return;const t=this.getAllRadios(),a=t.find(l=>l.checked),r=t.find(l=>!l.disabled),o=a||r;o&&o.focus(e)}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.hasInteracted=!0,this.updateValidity(),this.internals.checkValidity()}hasSlottedContent(e){if(this.querySelector(`[slot="${e}"]`))return!0;const t=this.shadowRoot?.querySelector(`slot[name="${e}"]`);return t?t.assignedNodes({flatten:!0}).some(a=>a.nodeType===Node.ELEMENT_NODE?!0:a.nodeType===Node.TEXT_NODE?!!a.textContent?.trim():!1):!1}syncFormValue(){this.setValue(null)}syncSlottedHelpText(){const e=this.querySelector('[slot="help-text"]');this.slottedHelpText=e?.textContent?.trim()||null}updateValidity(){this.warnIfMissingName();const e=this.required&&!this.getCheckedValue(),t=e&&this.hasInteracted,a=this.invalid||t;if(this.toggleAttribute("data-show-error",a),this.disabled){this.internals.setValidity({}),this.syncChildInvalid(!1),this.syncHostTabIndex(!1);return}if(this.syncHostTabIndex(a),e){this.setValidityState({valueMissing:!0}),this.syncChildInvalid(a);return}if(this.invalid){this.setValidityState({customError:!0}),this.syncChildInvalid(!0);return}this.internals.setValidity({}),this.syncChildInvalid(!1)}normalizeCheckedRadios(e){const t=e.find(a=>a.checked);t&&e.forEach(a=>{a!==t&&(a.checked=!1)})}syncChildInvalid(e){this.getAllRadios().forEach(t=>{t.invalid=e})}setValidityState(e){const t=this.validationTarget;this.internals.setValidity(e," ",t??void 0)}syncHostTabIndex(e){if(!(this.hasAttribute("tabindex")&&!this.autoTabIndex)){if(e){this.tabIndex=0,this.autoTabIndex=!0;return}this.autoTabIndex&&(this.removeAttribute("tabindex"),this.autoTabIndex=!1)}}warnIfMissingName(){this.hasWarnedMissingName||this.internals.form&&(this.name&&this.name.trim().length>0||(console.warn('w-radio-group: "name" is required for form submission.'),this.hasWarnedMissingName=!0))}render(){const e=this.hasSlottedContent("label"),t=this.hasSlottedContent("help-text"),a=this.label?!0:!!e,r=this.helpText?!0:!!t,l=this.required&&!this.getCheckedValue()&&this.hasInteracted,s=this.invalid||l,u=s?de():this.helpText,m=s||r,W=a?"label":void 0,U=m?"help-text":void 0,J=this.slottedHelpText||void 0;return i`
      <fieldset
        part="form-control"
        role="radiogroup"
        aria-labelledby=${M(W)}
        aria-describedby=${M(U)}
        aria-errormessage="error-message"
        aria-invalid=${s?"true":void 0}>
        ${a?i`
              <label part="form-control-label" id="label" @click=${this.handleLabelClick}>
                <slot name="label">${this.label}</slot>
                ${this.optional?i`<span class="optional">
                      ${B._({id:"radio-group.label.optional",message:"Optional",comment:"Shown behind label when marked as optional"})}
                    </span>`:null}
              </label>
            `:null}

        <slot part="form-control-input" @slotchange=${this.syncRadioElements}></slot>

        ${m?i`
              <div id="help-text" part="help-text" aria-label=${M(J)}>
                <slot name="help-text" @slotchange=${this.handleHelpTextSlotChange}>${u}</slot>
              </div>
            `:null}
      </fieldset>
    `}}h([P()],c.prototype,"hasInteracted");h([d()],c.prototype,"label");h([d({attribute:"help-text"})],c.prototype,"helpText");h([d({type:Boolean,reflect:!0})],c.prototype,"optional");h([d({type:Boolean,reflect:!0})],c.prototype,"invalid");h([d({reflect:!0})],c.prototype,"name");h([d({type:Boolean,reflect:!0})],c.prototype,"disabled");h([d({type:Boolean,reflect:!0})],c.prototype,"required");customElements.get("w-radio-group")||customElements.define("w-radio-group",c);Q("w-radio-group");const be={title:"Forms/Radio",render:n=>i`
      <w-radio-group ${X(Y(n))}>
        <w-radio value="foo" checked>foo</w-radio>
        <w-radio value="bar">bar</w-radio>
      </w-radio-group>
    `},g={args:{label:"Group",name:"foobar"}},v={args:{},render(){return i` <w-radio value="single">Single radio</w-radio> `}},w={args:{},render(){return i` <w-radio value="single" invalid>Single invalid radio</w-radio> `}},f={args:{},render(){return i` <w-radio value="single" disabled>Single disabled radio</w-radio> `}},y={args:{},render(){return i`
      <form @submit=${t=>{t.preventDefault();const a=t.currentTarget,r=a.querySelector("[data-status]");if(!r)return;const o=new FormData(a);r.textContent=`Submitted value: ${o.get("newsletter")??"none"}`}} style="display: grid; gap: 12px;">
        <w-radio name="newsletter" value="yes" required @invalid=${t=>{t.preventDefault();const o=t.currentTarget.closest("form")?.querySelector("[data-status]");o&&(o.textContent="Invalid: please select the radio.")}}>
          Sign up for updates
        </w-radio>
        <button type="submit">Submit</button>
        <div data-status aria-live="polite"></div>
      </form>
    `}},x={args:{},render(){return i`
      <div style="display: grid; gap: 12px;">
        <w-radio name="standalone" value="one">Standalone one</w-radio>
        <w-radio name="standalone" value="two">Standalone two</w-radio>
      </div>
    `}},k={args:{name:"disabled",label:"Disabled",disabled:!0}},S={args:{},render(){return i`
      <form>
        <w-radio-group required name="required">
          <w-radio value="foo">foo</w-radio>
          <w-radio value="bar">bar</w-radio>
        </w-radio-group>
        <button style="margin-top: 16px;">click me</button>
      </form>
    `}},R={args:{name:"disabled group",disabled:!0,helpText:"This group is disabled"}},I={args:{},render(){return i`
      <w-radio-group name="disabled radio">
        <w-radio value="foo" disabled>disabled</w-radio>
        <w-radio value="bar">not disabled</w-radio>
      </w-radio-group>
    `}},_={args:{label:"Help text",helpText:"Pick one option",name:"help-text"}},T={args:{label:"Optional",optional:!0,helpText:"This is optional",name:"optional"}},C={render:()=>i`
    <w-radio-group name="group">
      <w-radio value="foo">Foo</w-radio>
      <w-radio value="bar">Bar</w-radio>
    </w-radio-group>
  `},A={render:()=>i`
    <w-radio-group help-text="Select one" name="group">
      <w-radio value="foo">Foo</w-radio>
      <w-radio value="bar">Bar</w-radio>
    </w-radio-group>
  `},E={render:()=>i`
    <w-radio-group label="Label" name="group">
      <w-radio value="foo">Foo</w-radio>
      <w-radio value="bar">Bar</w-radio>
    </w-radio-group>
  `},V={render:()=>i`
    <w-radio-group label="Label" help-text="help text" name="group">
      <w-radio value="foo">Foo</w-radio>
      <w-radio value="bar">Bar</w-radio>
    </w-radio-group>
  `},q={render:()=>i`
    <w-radio-group label="Label" optional help-text="help text" name="group">
      <w-radio value="foo">Foo</w-radio>
      <w-radio value="bar">Bar</w-radio>
    </w-radio-group>
  `},D={render:()=>i`
    <w-radio-group label="Label" invalid help-text="help text" name="group">
      <w-radio value="foo">Foo</w-radio>
      <w-radio value="bar">Bar</w-radio>
    </w-radio-group>
  `},F={render:()=>i`
      <form @submit=${t=>{t.preventDefault();const r=t.currentTarget.querySelector("[data-status]");r&&(r.textContent="Submitted.")}} style="display: grid; gap: 12px;">
        <w-radio-group
          label="Preferences"
          required
          name="group"
          help-text="Choose an option"
          @invalid=${t=>{const o=t.currentTarget.closest("form")?.querySelector("[data-status]");o&&(o.textContent="Invalid: select an option.")}}
        >
          <w-radio value="foo">Foo</w-radio>
          <w-radio value="bar">Bar</w-radio>
          <w-radio value="baz">Baz</w-radio>
        </w-radio-group>
        <button type="submit">Submit</button>
        <div data-status aria-live="polite"></div>
      </form>
    `},L={render:()=>i`
      <form @submit=${t=>{t.preventDefault();const r=t.currentTarget.querySelector("[data-status]");r&&(r.textContent="Submitted.")}} style="display: grid; gap: 12px;">
        <w-radio-group name="radio group form associated" label="Preferences" name="group" help-text="Choose an option" @invalid=${t=>{const o=t.currentTarget.closest("form")?.querySelector("[data-status]");o&&(o.textContent="Invalid: select an option.")}}>
          <w-radio value="foo" checked>Foo</w-radio>
          <w-radio value="bar">Bar</w-radio>
          <w-radio value="baz">Baz</w-radio>
        </w-radio-group>
        <button type="submit">Submit</button>
        <div data-status aria-live="polite"></div>
      </form>
    `},$={args:{},render(){return i`
      <w-radio-group name="invalid group" label="Invalid group" invalid>
        <w-radio value="foo">foo</w-radio>
        <w-radio value="bar">bar</w-radio>
      </w-radio-group>
    `}},H={args:{},render(){return i`
      <w-radio-group name="slotted label and hint">
        <span slot="label">Slotted label</span>
        <span slot="help-text">Slotted hint text</span>
        <w-radio value="foo">foo</w-radio>
        <w-radio value="bar">bar</w-radio>
      </w-radio-group>
    `}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Group',
    name: 'foobar'
  }
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    return html\` <w-radio value="single">Single radio</w-radio> \`;
  }
}`,...v.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    return html\` <w-radio value="single" invalid>Single invalid radio</w-radio> \`;
  }
}`,...w.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    return html\` <w-radio value="single" disabled>Single disabled radio</w-radio> \`;
  }
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    const handleSubmit = (event: Event) => {
      event.preventDefault();
      const form = event.currentTarget as HTMLFormElement;
      const status = form.querySelector('[data-status]') as HTMLElement | null;
      if (!status) return;
      const data = new FormData(form);
      status.textContent = \`Submitted value: \${data.get('newsletter') ?? 'none'}\`;
    };
    const handleInvalid = (event: Event) => {
      event.preventDefault();
      const target = event.currentTarget as HTMLElement;
      const form = target.closest('form');
      const status = form?.querySelector('[data-status]') as HTMLElement | null;
      if (status) status.textContent = 'Invalid: please select the radio.';
    };
    return html\`
      <form @submit=\${handleSubmit} style="display: grid; gap: 12px;">
        <w-radio name="newsletter" value="yes" required @invalid=\${handleInvalid}>
          Sign up for updates
        </w-radio>
        <button type="submit">Submit</button>
        <div data-status aria-live="polite"></div>
      </form>
    \`;
  }
}`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    return html\`
      <div style="display: grid; gap: 12px;">
        <w-radio name="standalone" value="one">Standalone one</w-radio>
        <w-radio name="standalone" value="two">Standalone two</w-radio>
      </div>
    \`;
  }
}`,...x.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'disabled',
    label: 'Disabled',
    disabled: true
  }
}`,...k.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    return html\`
      <form>
        <w-radio-group required name="required">
          <w-radio value="foo">foo</w-radio>
          <w-radio value="bar">bar</w-radio>
        </w-radio-group>
        <button style="margin-top: 16px;">click me</button>
      </form>
    \`;
  }
}`,...S.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'disabled group',
    disabled: true,
    helpText: 'This group is disabled'
  }
}`,...R.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    return html\`
      <w-radio-group name="disabled radio">
        <w-radio value="foo" disabled>disabled</w-radio>
        <w-radio value="bar">not disabled</w-radio>
      </w-radio-group>
    \`;
  }
}`,...I.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Help text',
    helpText: 'Pick one option',
    name: 'help-text'
  }
}`,..._.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Optional',
    optional: true,
    helpText: 'This is optional',
    name: 'optional'
  }
}`,...T.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-radio-group name="group">
      <w-radio value="foo">Foo</w-radio>
      <w-radio value="bar">Bar</w-radio>
    </w-radio-group>
  \`
}`,...C.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-radio-group help-text="Select one" name="group">
      <w-radio value="foo">Foo</w-radio>
      <w-radio value="bar">Bar</w-radio>
    </w-radio-group>
  \`
}`,...A.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-radio-group label="Label" name="group">
      <w-radio value="foo">Foo</w-radio>
      <w-radio value="bar">Bar</w-radio>
    </w-radio-group>
  \`
}`,...E.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-radio-group label="Label" help-text="help text" name="group">
      <w-radio value="foo">Foo</w-radio>
      <w-radio value="bar">Bar</w-radio>
    </w-radio-group>
  \`
}`,...V.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-radio-group label="Label" optional help-text="help text" name="group">
      <w-radio value="foo">Foo</w-radio>
      <w-radio value="bar">Bar</w-radio>
    </w-radio-group>
  \`
}`,...q.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-radio-group label="Label" invalid help-text="help text" name="group">
      <w-radio value="foo">Foo</w-radio>
      <w-radio value="bar">Bar</w-radio>
    </w-radio-group>
  \`
}`,...D.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => {
    const handleSubmit = (event: Event) => {
      event.preventDefault();
      const form = event.currentTarget as HTMLFormElement;
      const status = form.querySelector('[data-status]') as HTMLElement | null;
      if (status) status.textContent = 'Submitted.';
    };
    const handleInvalid = (event: Event) => {
      const target = event.currentTarget as HTMLElement;
      const form = target.closest('form');
      const status = form?.querySelector('[data-status]') as HTMLElement | null;
      if (status) status.textContent = 'Invalid: select an option.';
    };
    return html\`
      <form @submit=\${handleSubmit} style="display: grid; gap: 12px;">
        <w-radio-group
          label="Preferences"
          required
          name="group"
          help-text="Choose an option"
          @invalid=\${handleInvalid}
        >
          <w-radio value="foo">Foo</w-radio>
          <w-radio value="bar">Bar</w-radio>
          <w-radio value="baz">Baz</w-radio>
        </w-radio-group>
        <button type="submit">Submit</button>
        <div data-status aria-live="polite"></div>
      </form>
    \`;
  }
}`,...F.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => {
    const handleSubmit = (event: Event) => {
      event.preventDefault();
      const form = event.currentTarget as HTMLFormElement;
      const status = form.querySelector('[data-status]') as HTMLElement | null;
      if (status) status.textContent = 'Submitted.';
    };
    const handleInvalid = (event: Event) => {
      const target = event.currentTarget as HTMLElement;
      const form = target.closest('form');
      const status = form?.querySelector('[data-status]') as HTMLElement | null;
      if (status) status.textContent = 'Invalid: select an option.';
    };
    return html\`
      <form @submit=\${handleSubmit} style="display: grid; gap: 12px;">
        <w-radio-group name="radio group form associated" label="Preferences" name="group" help-text="Choose an option" @invalid=\${handleInvalid}>
          <w-radio value="foo" checked>Foo</w-radio>
          <w-radio value="bar">Bar</w-radio>
          <w-radio value="baz">Baz</w-radio>
        </w-radio-group>
        <button type="submit">Submit</button>
        <div data-status aria-live="polite"></div>
      </form>
    \`;
  }
}`,...L.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    return html\`
      <w-radio-group name="invalid group" label="Invalid group" invalid>
        <w-radio value="foo">foo</w-radio>
        <w-radio value="bar">bar</w-radio>
      </w-radio-group>
    \`;
  }
}`,...$.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    return html\`
      <w-radio-group name="slotted label and hint">
        <span slot="label">Slotted label</span>
        <span slot="help-text">Slotted hint text</span>
        <w-radio value="foo">foo</w-radio>
        <w-radio value="bar">bar</w-radio>
      </w-radio-group>
    \`;
  }
}`,...H.parameters?.docs?.source}}};const me=["Default","SingleRadioDefault","SingleRadioInvalid","SingleRadioDisabled","SingleRadioFormAssociated","StandaloneRadioGroupByName","Disabled","Required","DisabledGroup","DisabledRadio","HelpText","Optional","RadioGroup","RadioGroupWithHelpText","RadioGroupWithLabel","RadioGroupWithHelpTextAndLabel","RadioGroupWithOptional","RadioGroupWithInvalid","RadioGroupRequired","RadioGroupFormAssociated","InvalidWithMessage","SlottedLabelAndHint"];export{g as Default,k as Disabled,R as DisabledGroup,I as DisabledRadio,_ as HelpText,$ as InvalidWithMessage,T as Optional,C as RadioGroup,L as RadioGroupFormAssociated,F as RadioGroupRequired,A as RadioGroupWithHelpText,V as RadioGroupWithHelpTextAndLabel,D as RadioGroupWithInvalid,E as RadioGroupWithLabel,q as RadioGroupWithOptional,S as Required,v as SingleRadioDefault,f as SingleRadioDisabled,y as SingleRadioFormAssociated,w as SingleRadioInvalid,H as SlottedLabelAndHint,x as StandaloneRadioGroupByName,me as __namedExportsOrder,be as default};
