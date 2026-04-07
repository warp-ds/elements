import{a as G,i as H,r as K,b as i,n as l,q as P,l as B,m as Q,g as X}from"./iframe-ar3y14il.js";import{s as Y,p as Z}from"./utilities-CZrShXnU.js";import{F as N}from"./FormControlMixin-DJnJZbro.js";import{o as z}from"./if-defined-BOzyP09t.js";import"./preload-helper-DvrX7W50.js";const W=G`
  :host {
    box-sizing: border-box !important;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit !important;
  }
`,ee=G`
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
`;var ae=Object.defineProperty,p=(d,e,a,r)=>{for(var t=void 0,o=d.length-1,s;o>=0;o--)(s=d[o])&&(t=s(e,a,t)||t);return t&&ae(e,a,t),t};class u extends N(H){constructor(){super(),this.value=null,this.checked=!1,this.disabled=!1,this.required=!1,this.invalid=!1,this.#t=!1,this.#a=!1,this.#e=!1,this.handleClick=()=>{this.isInGroup()||this.disabled||(this.#e=!0,!this.checked&&(this.checked=!0,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})))},this.handleInvalid=()=>{this.#e=!0,this.updateValidity()},this.handleKeyDown=e=>{if(!this.isInGroup()&&!this.disabled&&!e.defaultPrevented){if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.key)){const a=this.getStandaloneNamedRadios().filter(c=>!c.disabled);if(a.length<=1)return;e.preventDefault();const r=a.find(c=>c.checked)??a.find(c=>c===this)??a[0],t=e.key==="ArrowUp"||e.key==="ArrowLeft"?-1:1,s=(a.indexOf(r)+t+a.length)%a.length,n=a[s];n.#e=!0,n.checked||(n.checked=!0,n.updateComplete.then(()=>{n.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})),n.focus();return}e.key!==" "&&e.key!=="Spacebar"&&e.key!=="Enter"||(e.preventDefault(),this.click())}},this.addEventListener("click",this.handleClick),this.addEventListener("invalid",this.handleInvalid),this.addEventListener("keydown",this.handleKeyDown)}static{this.styles=[W,K,ee]}static{this.shadowRootOptions={...H.shadowRootOptions,delegatesFocus:!0}}get tabIndex(){return this._internalTabIndex}set tabIndex(e){this._groupTabIndex=e}#t;#a;#e;connectedCallback(){super.connectedCallback(),this.value=this.getAttribute("value")??"on",this.#t=this.hasAttribute("checked"),this.checked=this.#t,this.internals.role="radio",this.syncAriaDisabled(),this.syncFormValue(),this.updateValidity()}syncAriaDisabled(){this.internals.ariaDisabled=this.disabled?"true":"false"}syncAriaChecked(){this.internals.ariaChecked=this.checked?"true":"false"}willUpdate(e){this.shouldSyncFormState(e)&&(this.syncFormValue(),this.updateValidity())}updated(e){super.updated(e),e.has("checked")&&(this.syncAriaChecked(),this.checked&&!this.isInGroup()&&(this.uncheckOtherRadios(),this.syncStandaloneTabOrder())),e.has("disabled")&&(this.syncAriaDisabled(),this.isInGroup()||this.syncStandaloneTabOrder()),e.has("invalid")&&(this.internals.ariaInvalid=this.invalid?"true":null),e.has("name")&&this.checked&&!this.isInGroup()&&this.uncheckOtherRadios()}resetFormControl(){this.checked=this.#t,this.syncFormValue(),this.updateValidity()}get validationMessage(){return this.internals.validationMessage}get validity(){return this.internals.validity}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.#e=!0,this.updateValidity(),this.internals.checkValidity()}isInGroup(){return!!this.closest("w-radio-group")}getRadioScope(){return this.internals.form??this.closest("form")??document}getStandaloneNamedRadios(){if(!this.name)return[this];const e=this.getRadioScope();return Array.from(e.querySelectorAll(`w-radio[name="${this.name}"]`)).filter(a=>!a.closest("w-radio-group"))}syncStandaloneTabOrder(){const e=this.getStandaloneNamedRadios(),a=e.filter(o=>!o.disabled),t=a.find(o=>o.checked)??a[0]??null;e.forEach(o=>{o._standaloneTabIndex=o===t?0:-1})}get _internalTabIndex(){return this.disabled?-1:this._groupTabIndex!==void 0?this._groupTabIndex:this._standaloneTabIndex!==void 0?this._standaloneTabIndex:0}firstUpdated(){this.isInGroup()||this.syncStandaloneTabOrder()}uncheckOtherRadios(){if(!this.name)return;const e=this.getRadioScope();Array.from(e.querySelectorAll(`w-radio[name="${this.name}"]`)).forEach(r=>{r!==this&&(r.closest("w-radio-group")||r.checked&&(r.checked=!1))})}updateValidity(){if(this.disabled||this.isInGroup()){this.internals.setValidity({});return}const e=this.required&&!this.checked,a=this.invalid&&!this.#a;if(e){this.#a=!0,this.invalid=this.#e,this.internals.setValidity({valueMissing:!0},this.internals.validationMessage||" ");return}if(this.#a&&(this.invalid=!1,this.#a=!1),a){this.internals.setValidity({customError:!0},this.internals.validationMessage||" ");return}this.internals.setValidity({})}syncFormValue(){if(this.disabled){this.setValue(null);return}this.setValue(this.checked?this.value:null)}shouldSyncFormState(e){return e.has("checked")||e.has("value")||e.has("disabled")||e.has("required")||e.has("invalid")}render(){return i`
      <div class="wrapper" tabindex="${this._internalTabIndex}">
        <div part="control" class="control"></div>
        <slot part="label" class="label"></slot>
      </div>
    `}}p([l({reflect:!0})],u.prototype,"name");p([l({reflect:!0})],u.prototype,"value");p([l({type:Boolean,reflect:!0})],u.prototype,"checked");p([l({type:Boolean,reflect:!0})],u.prototype,"disabled");p([l({type:Boolean,reflect:!0})],u.prototype,"required");p([l({type:Boolean,reflect:!0})],u.prototype,"invalid");p([l({attribute:!1})],u.prototype,"_groupTabIndex");p([l({attribute:!1})],u.prototype,"_standaloneTabIndex");customElements.get("w-radio")||customElements.define("w-radio",u);const te=JSON.parse('{"radio-group.label.optional":["Valgfri"],"radio-group.validation.required":["Vælg en mulighed."]}'),re=JSON.parse('{"radio-group.label.optional":["Optional"],"radio-group.validation.required":["Please select an option."]}'),oe=JSON.parse('{"radio-group.label.optional":["Valinnainen"],"radio-group.validation.required":["Valitse vaihtoehto."]}'),ie=JSON.parse('{"radio-group.label.optional":["Valgfri"],"radio-group.validation.required":["Velg et alternativ."]}'),se=JSON.parse('{"radio-group.label.optional":["Valfritt"],"radio-group.validation.required":["Välj ett alternativ."]}'),le=G`
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
`;var ne=Object.defineProperty,b=(d,e,a,r)=>{for(var t=void 0,o=d.length-1,s;o>=0;o--)(s=d[o])&&(t=s(e,a,t)||t);return t&&ne(e,a,t),t};P(re,ie,oe,te,se);const de=()=>B._({id:"radio-group.validation.required",message:"Please select an option.",comment:"Shown when required radio group has no selections"});class h extends N(H){constructor(){super(),this.hasInteracted=!1,this.hasWarnedMissingName=!1,this.autoTabIndex=!1,this.label="",this.helpText="",this.optional=!1,this.invalid=!1,this.name=null,this.disabled=!1,this.required=!1,this.defaultCheckedValue=void 0,this.slottedHelpText=null,this.nameManagedRadios=new WeakSet,this.disabledManagedRadios=new WeakSet,this.handleRadioClick=e=>{const a=e.target.closest("w-radio");if(!a||a.disabled||this.disabled)return;const r=this.getCheckedValue(),t=this.getAllRadios();this.selectSingleRadio(a,t),this.getCheckedValue()!==r&&this.updateComplete.then(this.emitSelectionChange)},this.handleInvalid=e=>{e.preventDefault(),this.hasInteracted=!0,this.updateValidity()},this.handleHelpTextSlotChange=()=>{this.syncSlottedHelpText(),this.requestUpdate()},this.handleI18nChange=()=>{this.requestUpdate()},this.emitSelectionChange=()=>{this.hasInteracted=!0,this.syncFormValue(),this.updateValidity(),this.requestUpdate(),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))},this.captureDefaultSelection=()=>{this.defaultCheckedValue===void 0&&(this.defaultCheckedValue=this.getCheckedValue())},this.addEventListener("keydown",this.handleKeyDown),this.addEventListener("click",this.handleRadioClick),this.addEventListener("invalid",this.handleInvalid)}static{this.styles=[W,le]}static{this.shadowRootOptions={...H.shadowRootOptions,delegatesFocus:!0}}get validationTarget(){return this.querySelector(":is(w-radio):not([disabled])")??void 0}connectedCallback(){super.connectedCallback(),this.syncSlottedHelpText(),this.syncFormValue(),this.updateValidity(),this.unsubscribeI18n=B.on("change",this.handleI18nChange),this.warnIfMissingName(),this.updateComplete.then(this.captureDefaultSelection)}disconnectedCallback(){this.unsubscribeI18n?.(),this.unsubscribeI18n=void 0,super.disconnectedCallback()}async updated(e){(e.has("disabled")||e.has("name")||e.has("required")||e.has("invalid")||e.has("helpText"))&&(this.syncFormValue(),this.updateValidity(),this.syncRadioElements(),this.syncFormValue(),this.updateValidity())}resetFormControl(){const e=this.defaultCheckedValue??null;this.getAllRadios().forEach(a=>{a.checked=e?a.value===e:!1}),this.syncRadioElements(),this.syncFormValue(),this.updateValidity()}getAllRadios(){return[...this.querySelectorAll("w-radio")]}getCheckedValue(){return this.getAllRadios().find(a=>a.checked)?.value??null}getEnabledRadios(e=this.getAllRadios()){return e.filter(a=>!a.disabled)}selectSingleRadio(e,a=this.getAllRadios()){a.forEach(r=>{const t=r===e;r.checked=t,r._groupTabIndex=t?0:-1})}handleLabelClick(){this.focus()}async syncRadioElements(){const e=this.getAllRadios();e.forEach((a,r)=>{a.toggleAttribute("data-w-radio-first",r===0),a.toggleAttribute("data-w-radio-inner",r!==0&&r!==e.length-1),a.toggleAttribute("data-w-radio-last",r===e.length-1),this.syncRadioDisabledState(a),this.name?(!a.getAttribute("name")||this.nameManagedRadios.has(a))&&(a.setAttribute("name",this.name),this.nameManagedRadios.add(a)):this.nameManagedRadios.has(a)&&(a.removeAttribute("name"),this.nameManagedRadios.delete(a))}),await Promise.all(e.map(async a=>a.updateComplete)),this.normalizeCheckedRadios(e),this.syncTabOrder(e)}syncRadioDisabledState(e){if(this.disabled){e.disabled||(e.disabled=!0,this.disabledManagedRadios.add(e));return}this.disabledManagedRadios.has(e)&&(e.disabled=!1,this.disabledManagedRadios.delete(e))}syncTabOrder(e){if(this.disabled){e.forEach(t=>t._groupTabIndex=-1);return}const a=this.getEnabledRadios(e),r=a.find(t=>t.checked);a.length>0&&(r?a.forEach(t=>t._groupTabIndex=t.checked?0:-1):a.forEach((t,o)=>t._groupTabIndex=o===0?0:-1)),e.filter(t=>t.disabled).forEach(t=>t._groupTabIndex=-1)}handleKeyDown(e){if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(e.key)||this.disabled)return;const a=this.getAllRadios(),r=this.getEnabledRadios(a);if(r.length<=0)return;e.preventDefault();const t=this.getCheckedValue(),o=r.find(M=>M.checked)??r[0],s=e.key===" "?0:["ArrowUp","ArrowLeft"].includes(e.key)?-1:1;let n=r.indexOf(o)+s;n<0&&(n=r.length-1),n>=r.length&&(n=0),this.selectSingleRadio(r[n],a),r[n].focus(),this.getCheckedValue()!==t&&this.updateComplete.then(this.emitSelectionChange)}focus(e){if(this.disabled)return;const a=this.getAllRadios(),r=a.find(s=>s.checked),t=a.find(s=>!s.disabled),o=r||t;o&&o.focus(e)}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.hasInteracted=!0,this.updateValidity(),this.internals.checkValidity()}hasSlottedContent(e){if(this.querySelector(`[slot="${e}"]`))return!0;const a=this.shadowRoot?.querySelector(`slot[name="${e}"]`);return a?a.assignedNodes({flatten:!0}).some(r=>r.nodeType===Node.ELEMENT_NODE?!0:r.nodeType===Node.TEXT_NODE?!!r.textContent?.trim():!1):!1}syncFormValue(){this.setValue(null)}syncSlottedHelpText(){const e=this.querySelector('[slot="help-text"]');this.slottedHelpText=e?.textContent?.trim()||null}updateValidity(){this.warnIfMissingName();const e=this.required&&!this.getCheckedValue(),a=e&&this.hasInteracted,r=this.invalid||this.hasAttribute("invalid"),t=r||a;if(this.toggleAttribute("data-show-error",t),this.disabled){this.internals.setValidity({}),this.syncChildInvalid(!1),this.syncHostTabIndex(!1);return}if(this.syncHostTabIndex(t),e){this.setValidityState({valueMissing:!0}),this.syncChildInvalid(t);return}if(r){this.setValidityState({customError:!0}),this.syncChildInvalid(!0);return}this.internals.setValidity({}),this.syncChildInvalid(!1)}normalizeCheckedRadios(e){const a=e.find(r=>r.checked);a&&e.forEach(r=>{r!==a&&(r.checked=!1)})}syncChildInvalid(e){this.getAllRadios().forEach(a=>{a.invalid=e})}setValidityState(e){const a=this.validationTarget;this.internals.setValidity(e," ",a??void 0)}syncHostTabIndex(e){if(!(this.hasAttribute("tabindex")&&!this.autoTabIndex)){if(e){this.setAttribute("tabindex","0"),this.autoTabIndex=!0;return}this.autoTabIndex&&(this.removeAttribute("tabindex"),this.autoTabIndex=!1)}}warnIfMissingName(){this.hasWarnedMissingName||this.internals.form&&(this.name&&this.name.trim().length>0||(console.warn('w-radio-group: "name" is required for form submission.'),this.hasWarnedMissingName=!0))}render(){const e=this.hasSlottedContent("label"),a=this.hasSlottedContent("help-text"),r=this.label?!0:!!e,t=this.helpText?!0:!!a,s=this.required&&!this.getCheckedValue()&&this.hasInteracted,c=this.invalid||this.hasAttribute("invalid")||s,M=c?de():this.helpText,O=c||t,U=r?"label":void 0,J=O?"help-text":void 0,j=this.slottedHelpText||void 0;return i`
      <fieldset
        part="form-control"
        role="radiogroup"
        aria-labelledby=${z(U)}
        aria-describedby=${z(J)}
        aria-errormessage="error-message"
        aria-invalid=${c?"true":void 0}>
        ${r?i`
              <label part="form-control-label" id="label" @click=${this.handleLabelClick}>
                <slot name="label">${this.label}</slot>
                ${this.optional?i`<span class="optional">
                      ${B._({id:"radio-group.label.optional",message:"Optional",comment:"Shown behind label when marked as optional"})}
                    </span>`:null}
              </label>
            `:null}

        <slot part="form-control-input" @slotchange=${this.syncRadioElements}></slot>

        ${O?i`
              <div id="help-text" part="help-text" aria-label=${z(j)}>
                <slot name="help-text" @slotchange=${this.handleHelpTextSlotChange}>${M}</slot>
              </div>
            `:null}
      </fieldset>
    `}}b([Q()],h.prototype,"hasInteracted");b([l()],h.prototype,"label");b([l({attribute:"help-text"})],h.prototype,"helpText");b([l({type:Boolean,reflect:!0})],h.prototype,"optional");b([l({type:Boolean,reflect:!0})],h.prototype,"invalid");b([l({reflect:!0})],h.prototype,"name");b([l({type:Boolean,reflect:!0})],h.prototype,"disabled");b([l({type:Boolean,reflect:!0})],h.prototype,"required");customElements.get("w-radio-group")||customElements.define("w-radio-group",h);X("w-radio-group");const me={title:"Forms/Radio",render:d=>i`
      <w-radio-group ${Y(Z(d))}>
        <w-radio value="foo" checked>foo</w-radio>
        <w-radio value="bar">bar</w-radio>
      </w-radio-group>
    `},m={args:{label:"Group",name:"foobar"}},g={args:{},render(){return i` <w-radio value="single">Single radio</w-radio> `}},v={args:{},render(){return i` <w-radio value="single" invalid>Single invalid radio</w-radio> `}},w={args:{},render(){return i` <w-radio value="single" disabled>Single disabled radio</w-radio> `}},f={args:{},render(){return i`
      <form @submit=${a=>{a.preventDefault();const r=a.currentTarget,t=r.querySelector("[data-status]");if(!t)return;const o=new FormData(r);t.textContent=`Submitted value: ${o.get("newsletter")??"none"}`}} style="display: grid; gap: 12px;">
        <w-radio name="newsletter" value="yes" required @invalid=${a=>{a.preventDefault();const o=a.currentTarget.closest("form")?.querySelector("[data-status]");o&&(o.textContent="Invalid: please select the radio.")}}>
          Sign up for updates
        </w-radio>
        <button type="submit">Submit</button>
        <div data-status aria-live="polite"></div>
      </form>
    `}},y={args:{},render(){return i`
      <div style="display: grid; gap: 12px;">
        <w-radio name="standalone" value="one">Standalone one</w-radio>
        <w-radio name="standalone" value="two">Standalone two</w-radio>
      </div>
    `}},x={args:{name:"disabled",label:"Disabled",disabled:!0}},S={args:{},render(){return i`
      <form>
        <w-radio-group required name="required">
          <w-radio value="foo">foo</w-radio>
          <w-radio value="bar">bar</w-radio>
        </w-radio-group>
        <button style="margin-top: 16px;">click me</button>
      </form>
    `}},k={args:{name:"disabled group",disabled:!0,helpText:"This group is disabled"}},_={args:{},render(){return i`
      <w-radio-group name="disabled radio">
        <w-radio value="foo" disabled>disabled</w-radio>
        <w-radio value="bar">not disabled</w-radio>
      </w-radio-group>
    `}},R={args:{label:"Help text",helpText:"Pick one option",name:"help-text"}},I={args:{label:"Optional",optional:!0,helpText:"This is optional",name:"optional"}},T={render:()=>i`
    <w-radio-group name="group">
      <w-radio value="foo">Foo</w-radio>
      <w-radio value="bar">Bar</w-radio>
    </w-radio-group>
  `},C={render:()=>i`
    <w-radio-group help-text="Select one" name="group">
      <w-radio value="foo">Foo</w-radio>
      <w-radio value="bar">Bar</w-radio>
    </w-radio-group>
  `},V={render:()=>i`
    <w-radio-group label="Label" name="group">
      <w-radio value="foo">Foo</w-radio>
      <w-radio value="bar">Bar</w-radio>
    </w-radio-group>
  `},E={render:()=>i`
    <w-radio-group label="Label" help-text="help text" name="group">
      <w-radio value="foo">Foo</w-radio>
      <w-radio value="bar">Bar</w-radio>
    </w-radio-group>
  `},q={render:()=>i`
    <w-radio-group label="Label" optional help-text="help text" name="group">
      <w-radio value="foo">Foo</w-radio>
      <w-radio value="bar">Bar</w-radio>
    </w-radio-group>
  `},A={render:()=>i`
    <w-radio-group label="Label" invalid help-text="help text" name="group">
      <w-radio value="foo">Foo</w-radio>
      <w-radio value="bar">Bar</w-radio>
    </w-radio-group>
  `},F={render:()=>i`
      <form @submit=${a=>{a.preventDefault();const t=a.currentTarget.querySelector("[data-status]");t&&(t.textContent="Submitted.")}} style="display: grid; gap: 12px;">
        <w-radio-group
          label="Preferences"
          required
          name="group"
          help-text="Choose an option"
          @invalid=${a=>{const o=a.currentTarget.closest("form")?.querySelector("[data-status]");o&&(o.textContent="Invalid: select an option.")}}
        >
          <w-radio value="foo">Foo</w-radio>
          <w-radio value="bar">Bar</w-radio>
          <w-radio value="baz">Baz</w-radio>
        </w-radio-group>
        <button type="submit">Submit</button>
        <div data-status aria-live="polite"></div>
      </form>
    `},D={render:()=>i`
      <form @submit=${a=>{a.preventDefault();const t=a.currentTarget.querySelector("[data-status]");t&&(t.textContent="Submitted.")}} style="display: grid; gap: 12px;">
        <w-radio-group name="radio group form associated" label="Preferences" name="group" help-text="Choose an option" @invalid=${a=>{const o=a.currentTarget.closest("form")?.querySelector("[data-status]");o&&(o.textContent="Invalid: select an option.")}}>
          <w-radio value="foo" checked>Foo</w-radio>
          <w-radio value="bar">Bar</w-radio>
          <w-radio value="baz">Baz</w-radio>
        </w-radio-group>
        <button type="submit">Submit</button>
        <div data-status aria-live="polite"></div>
      </form>
    `},L={args:{},render(){return i`
      <w-radio-group name="invalid group" label="Invalid group" invalid>
        <w-radio value="foo">foo</w-radio>
        <w-radio value="bar">bar</w-radio>
      </w-radio-group>
    `}},$={args:{},render(){return i`
      <w-radio-group name="slotted label and hint">
        <span slot="label">Slotted label</span>
        <span slot="help-text">Slotted hint text</span>
        <w-radio value="foo">foo</w-radio>
        <w-radio value="bar">bar</w-radio>
      </w-radio-group>
    `}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Group',
    name: 'foobar'
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    return html\` <w-radio value="single">Single radio</w-radio> \`;
  }
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    return html\` <w-radio value="single" invalid>Single invalid radio</w-radio> \`;
  }
}`,...v.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    return html\` <w-radio value="single" disabled>Single disabled radio</w-radio> \`;
  }
}`,...w.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    return html\`
      <div style="display: grid; gap: 12px;">
        <w-radio name="standalone" value="one">Standalone one</w-radio>
        <w-radio name="standalone" value="two">Standalone two</w-radio>
      </div>
    \`;
  }
}`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'disabled',
    label: 'Disabled',
    disabled: true
  }
}`,...x.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'disabled group',
    disabled: true,
    helpText: 'This group is disabled'
  }
}`,...k.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    return html\`
      <w-radio-group name="disabled radio">
        <w-radio value="foo" disabled>disabled</w-radio>
        <w-radio value="bar">not disabled</w-radio>
      </w-radio-group>
    \`;
  }
}`,..._.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Help text',
    helpText: 'Pick one option',
    name: 'help-text'
  }
}`,...R.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Optional',
    optional: true,
    helpText: 'This is optional',
    name: 'optional'
  }
}`,...I.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-radio-group name="group">
      <w-radio value="foo">Foo</w-radio>
      <w-radio value="bar">Bar</w-radio>
    </w-radio-group>
  \`
}`,...T.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-radio-group help-text="Select one" name="group">
      <w-radio value="foo">Foo</w-radio>
      <w-radio value="bar">Bar</w-radio>
    </w-radio-group>
  \`
}`,...C.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-radio-group label="Label" name="group">
      <w-radio value="foo">Foo</w-radio>
      <w-radio value="bar">Bar</w-radio>
    </w-radio-group>
  \`
}`,...V.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-radio-group label="Label" help-text="help text" name="group">
      <w-radio value="foo">Foo</w-radio>
      <w-radio value="bar">Bar</w-radio>
    </w-radio-group>
  \`
}`,...E.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-radio-group label="Label" optional help-text="help text" name="group">
      <w-radio value="foo">Foo</w-radio>
      <w-radio value="bar">Bar</w-radio>
    </w-radio-group>
  \`
}`,...q.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-radio-group label="Label" invalid help-text="help text" name="group">
      <w-radio value="foo">Foo</w-radio>
      <w-radio value="bar">Bar</w-radio>
    </w-radio-group>
  \`
}`,...A.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    return html\`
      <w-radio-group name="invalid group" label="Invalid group" invalid>
        <w-radio value="foo">foo</w-radio>
        <w-radio value="bar">bar</w-radio>
      </w-radio-group>
    \`;
  }
}`,...L.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}};const ge=["Default","SingleRadioDefault","SingleRadioInvalid","SingleRadioDisabled","SingleRadioFormAssociated","StandaloneRadioGroupByName","Disabled","Required","DisabledGroup","DisabledRadio","HelpText","Optional","RadioGroup","RadioGroupWithHelpText","RadioGroupWithLabel","RadioGroupWithHelpTextAndLabel","RadioGroupWithOptional","RadioGroupWithInvalid","RadioGroupRequired","RadioGroupFormAssociated","InvalidWithMessage","SlottedLabelAndHint"];export{m as Default,x as Disabled,k as DisabledGroup,_ as DisabledRadio,R as HelpText,L as InvalidWithMessage,I as Optional,T as RadioGroup,D as RadioGroupFormAssociated,F as RadioGroupRequired,C as RadioGroupWithHelpText,E as RadioGroupWithHelpTextAndLabel,A as RadioGroupWithInvalid,V as RadioGroupWithLabel,q as RadioGroupWithOptional,S as Required,g as SingleRadioDefault,w as SingleRadioDisabled,f as SingleRadioFormAssociated,v as SingleRadioInvalid,$ as SlottedLabelAndHint,y as StandaloneRadioGroupByName,ge as __namedExportsOrder,me as default};
