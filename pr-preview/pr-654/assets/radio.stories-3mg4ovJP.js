import{n as e}from"./chunk-DnJy8xQt.js";import{B as t,D as n,E as r,Mt as i,Ot as a,Pt as o,_ as s,a as c,b as l,d as u,f as d,kt as f,l as ee,o as te,s as ne,y as re,z as p}from"./iframe-DVGjv2S6.js";import{i as ie,n as ae,r as oe,t as se}from"./utilities-Bu8uwYxd.js";import{n as m,t as h}from"./form-control-BF64cDf7.js";import{n as g,t as ce}from"./if-defined-Dv8n1asE.js";var _,v=e((()=>{a(),_=o`
  :host {
    box-sizing: border-box !important;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit !important;
  }
`})),y,le=e((()=>{a(),y=o`
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
`})),b,x=e((()=>{h(),a(),s(),c(),v(),le(),d(),b=class extends m(f){static{this.styles=[_,te,y]}static{this.shadowRootOptions={...f.shadowRootOptions,delegatesFocus:!0}}get tabIndex(){return this._internalTabIndex}set tabIndex(e){this._groupTabIndex=e}#e;#t;#n;constructor(){super(),this.value=null,this.checked=!1,this.disabled=!1,this.required=!1,this.invalid=!1,this.#e=!1,this.#t=!1,this.#n=!1,this.handleClick=()=>{this.isInGroup()||this.disabled||(this.#n=!0,!this.checked&&(this.checked=!0,this.updateComplete.then(()=>{this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))})))},this.handleInvalid=()=>{this.#n=!0,this.updateValidity()},this.handleKeyDown=e=>{if(!this.isInGroup()&&!this.disabled&&!e.defaultPrevented){if([`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`].includes(e.key)){let t=this.getStandaloneNamedRadios().filter(e=>!e.disabled);if(t.length<=1)return;e.preventDefault();let n=t.find(e=>e.checked)??t.find(e=>e===this)??t[0],r=e.key===`ArrowUp`||e.key===`ArrowLeft`?-1:1,i=t[(t.indexOf(n)+r+t.length)%t.length];i.#n=!0,i.checked||(i.checked=!0,i.updateComplete.then(()=>{i.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))})),i.focus();return}if(!(e.key!==` `&&e.key!==`Spacebar`&&e.key!==`Enter`)){if(e.key===`Enter`&&this.internals.form){this.internals.form.requestSubmit();return}e.preventDefault(),this.click()}}},this.addEventListener(`click`,this.handleClick),this.addEventListener(`invalid`,this.handleInvalid),this.addEventListener(`keydown`,this.handleKeyDown)}connectedCallback(){super.connectedCallback(),this.value=this.getAttribute(`value`)??`on`,this.#e=this.hasAttribute(`checked`),this.checked=this.#e,this.internals.role=`radio`,this.syncAriaDisabled(),this.syncFormValue(),this.updateValidity()}syncAriaDisabled(){this.internals.ariaDisabled=this.disabled?`true`:`false`}syncAriaChecked(){this.internals.ariaChecked=this.checked?`true`:`false`}willUpdate(e){this.shouldSyncFormState(e)&&(this.syncFormValue(),this.updateValidity())}updated(e){super.updated(e),e.has(`checked`)&&(this.syncAriaChecked(),this.checked&&!this.isInGroup()&&(this.uncheckOtherRadios(),this.syncStandaloneTabOrder())),e.has(`disabled`)&&(this.syncAriaDisabled(),this.isInGroup()||this.syncStandaloneTabOrder()),e.has(`invalid`)&&(this.internals.ariaInvalid=this.invalid?`true`:null),e.has(`name`)&&this.checked&&!this.isInGroup()&&this.uncheckOtherRadios()}resetFormControl(){this.checked=this.#e,this.syncFormValue(),this.updateValidity()}get validationMessage(){return this.internals.validationMessage}get validity(){return this.internals.validity}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.#n=!0,this.updateValidity(),this.internals.checkValidity()}isInGroup(){return!!this.closest(`w-radio-group`)}getRadioScope(){return this.internals.form??this.closest(`form`)??document}getStandaloneNamedRadios(){if(!this.name)return[this];let e=this.getRadioScope();return Array.from(e.querySelectorAll(`w-radio[name="${this.name}"]`)).filter(e=>!e.closest(`w-radio-group`))}syncStandaloneTabOrder(){let e=this.getStandaloneNamedRadios(),t=e.filter(e=>!e.disabled),n=t.find(e=>e.checked)??t[0]??null;e.forEach(e=>{e._standaloneTabIndex=e===n?0:-1})}get _internalTabIndex(){return this.disabled?-1:this._groupTabIndex===void 0?this._standaloneTabIndex===void 0?0:this._standaloneTabIndex:this._groupTabIndex}firstUpdated(){this.isInGroup()||this.syncStandaloneTabOrder()}uncheckOtherRadios(){if(!this.name)return;let e=this.getRadioScope();Array.from(e.querySelectorAll(`w-radio[name="${this.name}"]`)).forEach(e=>{e!==this&&(e.closest(`w-radio-group`)||(e.checked&&=!1))})}updateValidity(){if(this.disabled||this.isInGroup()){this.internals.setValidity({});return}let e=this.required&&!this.checked,t=this.invalid&&!this.#t;if(e){this.#t=!0,this.invalid=this.#n,this.internals.setValidity({valueMissing:!0},this.internals.validationMessage||` `);return}if(this.#t&&=(this.invalid=!1,!1),t){this.internals.setValidity({customError:!0},this.internals.validationMessage||` `);return}this.internals.setValidity({})}syncFormValue(){if(this.disabled){this.setValue(null);return}this.setValue(this.checked?this.value:null)}shouldSyncFormState(e){return e.has(`checked`)||e.has(`value`)||e.has(`disabled`)||e.has(`required`)||e.has(`invalid`)}render(){return i`
      <div class="wrapper" tabindex="${this._internalTabIndex}">
        <div part="control" class="control"></div>
        <slot part="label" class="label"></slot>
      </div>
    `}},u([l({reflect:!0})],b.prototype,`name`,void 0),u([l({reflect:!0})],b.prototype,`value`,void 0),u([l({type:Boolean,reflect:!0})],b.prototype,`checked`,void 0),u([l({type:Boolean,reflect:!0})],b.prototype,`disabled`,void 0),u([l({type:Boolean,reflect:!0})],b.prototype,`required`,void 0),u([l({type:Boolean,reflect:!0})],b.prototype,`invalid`,void 0),u([l({attribute:!1})],b.prototype,`_groupTabIndex`,void 0),u([l({attribute:!1})],b.prototype,`_standaloneTabIndex`,void 0),customElements.get(`w-radio`)||customElements.define(`w-radio`,b)})),S,ue=e((()=>{S=JSON.parse(`{"radio-group.label.optional":["Valgfri"],"radio-group.validation.required":["Vælg en mulighed."]}`)})),C,de=e((()=>{C=JSON.parse(`{"radio-group.label.optional":["Optional"],"radio-group.validation.required":["Please select an option."]}`)})),w,fe=e((()=>{w=JSON.parse(`{"radio-group.label.optional":["Valinnainen"],"radio-group.validation.required":["Valitse vaihtoehto."]}`)})),T,pe=e((()=>{T=JSON.parse(`{"radio-group.label.optional":["Valgfri"],"radio-group.validation.required":["Velg et alternativ."]}`)})),E,me=e((()=>{E=JSON.parse(`{"radio-group.label.optional":["Valfritt"],"radio-group.validation.required":["Välj ett alternativ."]}`)})),D,he=e((()=>{a(),D=o`
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
`})),O,k,ge=e((()=>{a(),t(),h(),s(),ce(),x(),ee(),ue(),de(),fe(),pe(),me(),he(),v(),d(),ne(C,T,w,S,E),O=()=>p._({id:`radio-group.validation.required`,message:`Please select an option.`,comment:`Shown when required radio group has no selections`}),k=class extends m(f){static{this.styles=[_,D]}static{this.shadowRootOptions={...f.shadowRootOptions,delegatesFocus:!0}}constructor(){super(),this.hasInteracted=!1,this.hasWarnedMissingName=!1,this.autoTabIndex=!1,this.label=``,this.helpText=``,this.optional=!1,this.invalid=!1,this.name=null,this.disabled=!1,this.required=!1,this.defaultCheckedValue=void 0,this.slottedHelpText=null,this.nameManagedRadios=new WeakSet,this.disabledManagedRadios=new WeakSet,this.handleRadioClick=e=>{let t=e.target.closest(`w-radio`);if(!t||t.disabled||this.disabled)return;let n=this.getCheckedValue(),r=this.getAllRadios();this.selectSingleRadio(t,r),this.getCheckedValue()!==n&&this.updateComplete.then(this.emitSelectionChange)},this.handleInvalid=e=>{e.preventDefault(),this.hasInteracted=!0,this.updateValidity()},this.handleHelpTextSlotChange=()=>{this.syncSlottedHelpText(),this.requestUpdate()},this.handleI18nChange=()=>{this.requestUpdate()},this.emitSelectionChange=()=>{this.hasInteracted=!0,this.syncFormValue(),this.updateValidity(),this.requestUpdate(),this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))},this.captureDefaultSelection=()=>{this.defaultCheckedValue===void 0&&(this.defaultCheckedValue=this.getCheckedValue())},this.addEventListener(`keydown`,this.handleKeyDown),this.addEventListener(`click`,this.handleRadioClick),this.addEventListener(`invalid`,this.handleInvalid)}get validationTarget(){return this.querySelector(`:is(w-radio):not([disabled])`)??void 0}connectedCallback(){super.connectedCallback(),this.syncSlottedHelpText(),this.syncFormValue(),this.updateValidity(),this.unsubscribeI18n=p.on(`change`,this.handleI18nChange),this.warnIfMissingName(),this.updateComplete.then(this.captureDefaultSelection)}disconnectedCallback(){this.unsubscribeI18n?.(),this.unsubscribeI18n=void 0,super.disconnectedCallback()}async updated(e){(e.has(`disabled`)||e.has(`name`)||e.has(`required`)||e.has(`invalid`)||e.has(`helpText`))&&(this.syncFormValue(),this.updateValidity(),this.syncRadioElements(),this.syncFormValue(),this.updateValidity())}resetFormControl(){let e=this.defaultCheckedValue??null;this.getAllRadios().forEach(t=>{t.checked=e?t.value===e:!1}),this.syncRadioElements(),this.syncFormValue(),this.updateValidity()}getAllRadios(){return[...this.querySelectorAll(`w-radio`)]}getCheckedValue(){return this.getAllRadios().find(e=>e.checked)?.value??null}getEnabledRadios(e=this.getAllRadios()){return e.filter(e=>!e.disabled)}selectSingleRadio(e,t=this.getAllRadios()){t.forEach(t=>{let n=t===e;t.checked=n,t._groupTabIndex=n?0:-1})}handleLabelClick(){this.focus()}async syncRadioElements(){let e=this.getAllRadios();e.forEach((t,n)=>{t.toggleAttribute(`data-w-radio-first`,n===0),t.toggleAttribute(`data-w-radio-inner`,n!==0&&n!==e.length-1),t.toggleAttribute(`data-w-radio-last`,n===e.length-1),this.syncRadioDisabledState(t),this.name?(!t.getAttribute(`name`)||this.nameManagedRadios.has(t))&&(t.setAttribute(`name`,this.name),this.nameManagedRadios.add(t)):this.nameManagedRadios.has(t)&&(t.removeAttribute(`name`),this.nameManagedRadios.delete(t))}),await Promise.all(e.map(async e=>e.updateComplete)),this.normalizeCheckedRadios(e),this.syncTabOrder(e)}syncRadioDisabledState(e){if(this.disabled){e.disabled||(e.disabled=!0,this.disabledManagedRadios.add(e));return}this.disabledManagedRadios.has(e)&&(e.disabled=!1,this.disabledManagedRadios.delete(e))}syncTabOrder(e){if(this.disabled){e.forEach(e=>e._groupTabIndex=-1);return}let t=this.getEnabledRadios(e),n=t.find(e=>e.checked);t.length>0&&(n?t.forEach(e=>e._groupTabIndex=e.checked?0:-1):t.forEach((e,t)=>e._groupTabIndex=t===0?0:-1)),e.filter(e=>e.disabled).forEach(e=>e._groupTabIndex=-1)}handleKeyDown(e){if(![`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`,` `].includes(e.key)||this.disabled)return;let t=this.getAllRadios(),n=this.getEnabledRadios(t);if(n.length<=0)return;e.preventDefault();let r=this.getCheckedValue(),i=n.find(e=>e.checked)??n[0],a=e.key===` `?0:[`ArrowUp`,`ArrowLeft`].includes(e.key)?-1:1,o=n.indexOf(i)+a;o<0&&(o=n.length-1),o>=n.length&&(o=0),this.selectSingleRadio(n[o],t),n[o].focus(),this.getCheckedValue()!==r&&this.updateComplete.then(this.emitSelectionChange)}focus(e){if(this.disabled)return;let t=this.getAllRadios(),n=t.find(e=>e.checked),r=t.find(e=>!e.disabled),i=n||r;i&&i.focus(e)}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.hasInteracted=!0,this.updateValidity(),this.internals.checkValidity()}hasSlottedContent(e){if(this.querySelector(`[slot="${e}"]`))return!0;let t=this.shadowRoot?.querySelector(`slot[name="${e}"]`);return t?t.assignedNodes({flatten:!0}).some(e=>e.nodeType===Node.ELEMENT_NODE?!0:e.nodeType===Node.TEXT_NODE?!!e.textContent?.trim():!1):!1}syncFormValue(){this.setValue(null)}syncSlottedHelpText(){let e=this.querySelector(`[slot="help-text"]`);this.slottedHelpText=e?.textContent?.trim()||null}updateValidity(){this.warnIfMissingName();let e=this.required&&!this.getCheckedValue(),t=e&&this.hasInteracted,n=this.invalid||this.hasAttribute(`invalid`),r=n||t;if(this.toggleAttribute(`data-show-error`,r),this.disabled){this.internals.setValidity({}),this.syncChildInvalid(!1),this.syncHostTabIndex(!1);return}if(this.syncHostTabIndex(r),e){this.setValidityState({valueMissing:!0}),this.syncChildInvalid(r);return}if(n){this.setValidityState({customError:!0}),this.syncChildInvalid(!0);return}this.internals.setValidity({}),this.syncChildInvalid(!1)}normalizeCheckedRadios(e){let t=e.find(e=>e.checked);t&&e.forEach(e=>{e!==t&&(e.checked=!1)})}syncChildInvalid(e){this.getAllRadios().forEach(t=>{t.invalid=e})}setValidityState(e){let t=this.validationTarget;this.internals.setValidity(e,` `,t??void 0)}syncHostTabIndex(e){if(!(this.hasAttribute(`tabindex`)&&!this.autoTabIndex)){if(e){this.setAttribute(`tabindex`,`0`),this.autoTabIndex=!0;return}this.autoTabIndex&&=(this.removeAttribute(`tabindex`),!1)}}warnIfMissingName(){this.hasWarnedMissingName||this.internals.form&&(this.name&&this.name.trim().length>0||(console.warn(`w-radio-group: "name" is required for form submission.`),this.hasWarnedMissingName=!0))}render(){let e=this.hasSlottedContent(`label`),t=this.hasSlottedContent(`help-text`),n=this.label?!0:!!e,r=this.helpText?!0:!!t,a=this.required&&!this.getCheckedValue()&&this.hasInteracted,o=this.invalid||this.hasAttribute(`invalid`),s=o||a,c=s?o&&this.helpText?this.helpText:O():this.helpText,l=s||r,u=n?`label`:void 0,d=l?`help-text`:void 0,f=this.slottedHelpText||void 0;return i`
      <fieldset
        part="form-control"
        role="radiogroup"
        aria-labelledby=${g(u)}
        aria-describedby=${g(d)}
        aria-errormessage="error-message"
        aria-invalid=${s?`true`:void 0}>
        ${n?i`
              <label part="form-control-label" id="label" @click=${this.handleLabelClick}>
                <slot name="label">${this.label}</slot>
                ${this.optional?i`<span class="optional">
                      ${p._({id:`radio-group.label.optional`,message:`Optional`,comment:`Shown behind label when marked as optional`})}
                    </span>`:null}
              </label>
            `:null}

        <slot part="form-control-input" @slotchange=${this.syncRadioElements}></slot>

        ${l?i`
              <div id="help-text" part="help-text" aria-label=${g(f)}>
                <slot name="help-text" @slotchange=${this.handleHelpTextSlotChange}>${c}</slot>
              </div>
            `:null}
      </fieldset>
    `}},u([re()],k.prototype,`hasInteracted`,void 0),u([l()],k.prototype,`label`,void 0),u([l({attribute:`help-text`})],k.prototype,`helpText`,void 0),u([l({type:Boolean,reflect:!0})],k.prototype,`optional`,void 0),u([l({type:Boolean,reflect:!0})],k.prototype,`invalid`,void 0),u([l({reflect:!0})],k.prototype,`name`,void 0),u([l({type:Boolean,reflect:!0})],k.prototype,`disabled`,void 0),u([l({type:Boolean,reflect:!0})],k.prototype,`required`,void 0),customElements.get(`w-radio-group`)||customElements.define(`w-radio-group`,k)})),_e,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{oe(),n(),a(),se(),x(),ge(),{args:_e}=r(`w-radio-group`),A={title:`Forms/Radio`,render:e=>i`
      <w-radio-group ${ie(ae(e))}>
        <w-radio value="foo" checked>foo</w-radio>
        <w-radio value="bar">bar</w-radio>
      </w-radio-group>
    `},j={args:{label:`Group`,name:`foobar`}},M={args:{},render(){return i` <w-radio value="single">Single radio</w-radio> `}},N={args:{},render(){return i` <w-radio value="single" invalid>Single invalid radio</w-radio> `}},P={args:{},render(){return i` <w-radio value="single" disabled>Single disabled radio</w-radio> `}},F={args:{},render(){return i`
      <form @submit=${e=>{e.preventDefault();let t=e.currentTarget,n=t.querySelector(`[data-status]`);n&&(n.textContent=`Submitted value: ${new FormData(t).get(`newsletter`)??`none`}`)}} style="display: grid; gap: 12px;">
        <w-radio name="newsletter" value="yes" required @invalid=${e=>{e.preventDefault();let t=e.currentTarget.closest(`form`)?.querySelector(`[data-status]`);t&&(t.textContent=`Invalid: please select the radio.`)}}>
          Sign up for updates
        </w-radio>
        <button type="submit">Submit</button>
        <div data-status aria-live="polite"></div>
      </form>
    `}},I={args:{},render(){return i`
      <div style="display: grid; gap: 12px;">
        <w-radio name="standalone" value="one">Standalone one</w-radio>
        <w-radio name="standalone" value="two">Standalone two</w-radio>
      </div>
    `}},L={args:{name:`disabled`,label:`Disabled`,disabled:!0}},R={args:{},render(){return i`
      <form>
        <w-radio-group required name="required">
          <w-radio value="foo">foo</w-radio>
          <w-radio value="bar">bar</w-radio>
        </w-radio-group>
        <button style="margin-top: 16px;">click me</button>
      </form>
    `}},z={args:{name:`disabled group`,disabled:!0,helpText:`This group is disabled`}},B={args:{},render(){return i`
      <w-radio-group name="disabled radio">
        <w-radio value="foo" disabled>disabled</w-radio>
        <w-radio value="bar">not disabled</w-radio>
      </w-radio-group>
    `}},V={args:{label:`Help text`,helpText:`Pick one option`,name:`help-text`}},H={args:{label:`Optional`,optional:!0,helpText:`This is optional`,name:`optional`}},U={render:()=>i`
    <w-radio-group name="group">
      <w-radio value="foo">Foo</w-radio>
      <w-radio value="bar">Bar</w-radio>
    </w-radio-group>
  `},W={render:()=>i`
    <w-radio-group help-text="Select one" name="group">
      <w-radio value="foo">Foo</w-radio>
      <w-radio value="bar">Bar</w-radio>
    </w-radio-group>
  `},G={render:()=>i`
    <w-radio-group label="Label" name="group">
      <w-radio value="foo">Foo</w-radio>
      <w-radio value="bar">Bar</w-radio>
    </w-radio-group>
  `},K={render:()=>i`
    <w-radio-group label="Label" help-text="help text" name="group">
      <w-radio value="foo">Foo</w-radio>
      <w-radio value="bar">Bar</w-radio>
    </w-radio-group>
  `},q={render:()=>i`
    <w-radio-group label="Label" optional help-text="help text" name="group">
      <w-radio value="foo">Foo</w-radio>
      <w-radio value="bar">Bar</w-radio>
    </w-radio-group>
  `},J={render:()=>i`
    <w-radio-group label="Label" invalid help-text="help text" name="group">
      <w-radio value="foo">Foo</w-radio>
      <w-radio value="bar">Bar</w-radio>
    </w-radio-group>
  `},Y={render:()=>i`
      <form @submit=${e=>{e.preventDefault();let t=e.currentTarget.querySelector(`[data-status]`);t&&(t.textContent=`Submitted.`)}} style="display: grid; gap: 12px;">
        <w-radio-group
          label="Preferences"
          required
          name="group"
          help-text="Choose an option"
          @invalid=${e=>{let t=e.currentTarget.closest(`form`)?.querySelector(`[data-status]`);t&&(t.textContent=`Invalid: select an option.`)}}
        >
          <w-radio value="foo">Foo</w-radio>
          <w-radio value="bar">Bar</w-radio>
          <w-radio value="baz">Baz</w-radio>
        </w-radio-group>
        <button type="submit">Submit</button>
        <div data-status aria-live="polite"></div>
      </form>
    `},X={render:()=>i`
      <form @submit=${e=>{e.preventDefault();let t=e.currentTarget.querySelector(`[data-status]`);t&&(t.textContent=`Submitted.`)}} style="display: grid; gap: 12px;">
        <w-radio-group name="radio group form associated" label="Preferences" name="group" help-text="Choose an option" @invalid=${e=>{let t=e.currentTarget.closest(`form`)?.querySelector(`[data-status]`);t&&(t.textContent=`Invalid: select an option.`)}}>
          <w-radio value="foo" checked>Foo</w-radio>
          <w-radio value="bar">Bar</w-radio>
          <w-radio value="baz">Baz</w-radio>
        </w-radio-group>
        <button type="submit">Submit</button>
        <div data-status aria-live="polite"></div>
      </form>
    `},Z={args:{},render(){return i`
      <w-radio-group name="invalid group" label="Invalid group" invalid>
        <w-radio value="foo">foo</w-radio>
        <w-radio value="bar">bar</w-radio>
      </w-radio-group>
    `}},Q={args:{},render(){return i`
      <w-radio-group name="slotted label and hint">
        <span slot="label">Slotted label</span>
        <span slot="help-text">Slotted hint text</span>
        <w-radio value="foo">foo</w-radio>
        <w-radio value="bar">bar</w-radio>
      </w-radio-group>
    `}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Group',
    name: 'foobar'
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    return html\` <w-radio value="single">Single radio</w-radio> \`;
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    return html\` <w-radio value="single" invalid>Single invalid radio</w-radio> \`;
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    return html\` <w-radio value="single" disabled>Single disabled radio</w-radio> \`;
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    return html\`
      <div style="display: grid; gap: 12px;">
        <w-radio name="standalone" value="one">Standalone one</w-radio>
        <w-radio name="standalone" value="two">Standalone two</w-radio>
      </div>
    \`;
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'disabled',
    label: 'Disabled',
    disabled: true
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'disabled group',
    disabled: true,
    helpText: 'This group is disabled'
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    return html\`
      <w-radio-group name="disabled radio">
        <w-radio value="foo" disabled>disabled</w-radio>
        <w-radio value="bar">not disabled</w-radio>
      </w-radio-group>
    \`;
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Help text',
    helpText: 'Pick one option',
    name: 'help-text'
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Optional',
    optional: true,
    helpText: 'This is optional',
    name: 'optional'
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-radio-group name="group">
      <w-radio value="foo">Foo</w-radio>
      <w-radio value="bar">Bar</w-radio>
    </w-radio-group>
  \`
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-radio-group help-text="Select one" name="group">
      <w-radio value="foo">Foo</w-radio>
      <w-radio value="bar">Bar</w-radio>
    </w-radio-group>
  \`
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-radio-group label="Label" name="group">
      <w-radio value="foo">Foo</w-radio>
      <w-radio value="bar">Bar</w-radio>
    </w-radio-group>
  \`
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-radio-group label="Label" help-text="help text" name="group">
      <w-radio value="foo">Foo</w-radio>
      <w-radio value="bar">Bar</w-radio>
    </w-radio-group>
  \`
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-radio-group label="Label" optional help-text="help text" name="group">
      <w-radio value="foo">Foo</w-radio>
      <w-radio value="bar">Bar</w-radio>
    </w-radio-group>
  \`
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-radio-group label="Label" invalid help-text="help text" name="group">
      <w-radio value="foo">Foo</w-radio>
      <w-radio value="bar">Bar</w-radio>
    </w-radio-group>
  \`
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    return html\`
      <w-radio-group name="invalid group" label="Invalid group" invalid>
        <w-radio value="foo">foo</w-radio>
        <w-radio value="bar">bar</w-radio>
      </w-radio-group>
    \`;
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`SingleRadioDefault`,`SingleRadioInvalid`,`SingleRadioDisabled`,`SingleRadioFormAssociated`,`StandaloneRadioGroupByName`,`Disabled`,`Required`,`DisabledGroup`,`DisabledRadio`,`HelpText`,`Optional`,`RadioGroup`,`RadioGroupWithHelpText`,`RadioGroupWithLabel`,`RadioGroupWithHelpTextAndLabel`,`RadioGroupWithOptional`,`RadioGroupWithInvalid`,`RadioGroupRequired`,`RadioGroupFormAssociated`,`InvalidWithMessage`,`SlottedLabelAndHint`]}))();export{j as Default,L as Disabled,z as DisabledGroup,B as DisabledRadio,V as HelpText,Z as InvalidWithMessage,H as Optional,U as RadioGroup,X as RadioGroupFormAssociated,Y as RadioGroupRequired,W as RadioGroupWithHelpText,K as RadioGroupWithHelpTextAndLabel,J as RadioGroupWithInvalid,G as RadioGroupWithLabel,q as RadioGroupWithOptional,R as Required,M as SingleRadioDefault,P as SingleRadioDisabled,F as SingleRadioFormAssociated,N as SingleRadioInvalid,Q as SlottedLabelAndHint,I as StandaloneRadioGroupByName,$ as __namedExportsOrder,A as default};