import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{At as n,B as r,D as i,Dt as a,E as o,Et as s,F as ee,I as c,Mt as l,N as te,Nt as ne,Ot as u,P as re,Pt as d,Tt as ie,_ as f,a as ae,b as p,d as m,f as h,jt as g,kt as _,l as oe,o as se,s as ce,v as le,y as ue,z as v}from"./iframe-B4CfJ_nK.js";import{i as de,n as fe,r as pe,t as me}from"./utilities-BYRNwjSV.js";import{n as y,t as b}from"./form-control-BF64cDf7.js";import{n as x,t as S}from"./if-defined-Cwf4gCPh.js";var C,he=e((()=>{ne(),ee(),ie(),C=te(class extends re{constructor(e){if(super(e),e.type!==c.PROPERTY&&e.type!==c.ATTRIBUTE&&e.type!==c.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!a(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===g||t===n)return t;let r=e.element,i=e.name;if(e.type===c.PROPERTY){if(t===r[i])return g}else if(e.type===c.BOOLEAN_ATTRIBUTE){if(!!t===r.hasAttribute(i))return g}else if(e.type===c.ATTRIBUTE&&r.getAttribute(i)===t+``)return g;return s(e),t}})})),ge=e((()=>{he()})),w,_e=e((()=>{u(),w=d`
  :host {
    --_label-font-size: var(--w-c-checkbox-label-font-size, var(--w-font-size-m));
    --_label-line-height: var(--w-c-checkbox-label-line-height, var(--w-line-height-m));

    --_control-size: var(--w-c-checkbox-control-size, 2rem);
    --_gap: var(--w-c-checkbox-gap, 8px);
    --_radius: var(--w-c-checkbox-radius, 4px);
    --_border-width: var(--w-c-checkbox-border-width, 1px);

    --_bg-default: var(--w-c-checkbox-bg, var(--w-s-color-background));
    --_border-default: var(--w-c-checkbox-border-color, var(--w-s-color-border-strong));
    --_icon-color: var(--w-c-checkbox-icon-color, var(--w-s-color-icon-inverted));

    --_bg-checked: var(--w-c-checkbox-bg-checked, var(--w-s-color-background-primary));
    --_border-checked: var(--w-c-checkbox-border-color-checked, var(--w-s-color-border-primary));
    --_checked-icon: var(--w-c-checkbox-checked-icon, var(--w-icon-toggle-checked));

    --_border-invalid: var(--w-c-checkbox-border-color-invalid, var(--w-s-color-border-negative));
    --_bg-invalid-checked: var(--w-c-checkbox-bg-invalid-checked, var(--w-s-color-background-negative));

    --_bg-disabled: var(--w-c-checkbox-bg-disabled, var(--w-s-color-background-disabled-subtle));
    --_border-disabled: var(--w-c-checkbox-border-color-disabled, var(--w-s-color-border-disabled));
    --_bg-disabled-checked: var(--w-c-checkbox-bg-disabled-checked, var(--w-s-color-background-disabled));

    --_outline-width: var(--w-c-checkbox-outline-width, 2px);
    --_outline-color: var(--w-c-checkbox-outline-color, var(--w-s-color-border-focus));
    --_outline-offset: var(--w-c-checkbox-outline-offset, var(--w-outline-offset, 1px));

    --_transition: var(--w-c-checkbox-transition, all 150ms cubic-bezier(0.4, 0, 0.2, 1));

    --_bg: var(--_bg-default);
    --_border-color: var(--_border-default);
  }

  :host([type='checkbox']) {
    --_radius: var(--w-c-checkbox-radius, 4px);
  }

  :host([checked]),
  :host([indeterminate]) {
    --_bg: var(--_bg-checked);
    --_border-color: var(--_border-checked);
  }

  :host([disabled]) {
    --_bg: var(--_bg-disabled);
    --_border-color: var(--_border-disabled);
  }

  :host([disabled][checked]),
  :host([disabled][indeterminate]) {
    --_bg: var(--_bg-disabled-checked);
  }

  [part~='label'] {
    display: block;
    font-size: var(--_label-font-size);
    line-height: var(--_label-line-height);
    user-select: none;
    cursor: pointer;
  }

  [part='base'] {
    display: grid;
    grid-template-columns: var(--_control-size) max-content;
    gap: var(--_gap);
  }

  [part='input'] {
    position: absolute;
    padding: 0;
    margin: 0;
    opacity: 0;
    pointer-events: none;
    inset: 0;
  }

  [part='control'] {
    position: relative;
    display: block;
    height: var(--_control-size);
    width: var(--_control-size);
    flex-shrink: 0;

    border-width: var(--_border-width);
    border-style: solid;
    border-color: var(--_border-color);
    border-radius: var(--_radius);

    background-color: var(--_bg);
    color: var(--_icon-color);

    cursor: pointer;
    user-select: none;
    appearance: none;
    transition: var(--_transition);

    font-weight: 700;
    text-align: center;
    line-height: var(--w-line-height-xs);
    font-size: var(--w-font-size-m);
  }

  /* Invalid visuals are driven by the actual control state instead of host attributes.
   * This preserves group-driven invalid styling without mutating host attributes. */
  [part='control']:has(> [part='input'][aria-invalid='true']:not(:disabled)) {
    border-color: var(--_border-invalid);
  }

  [part='control']:has(> [part='input'][aria-invalid='true']:is(:checked, :indeterminate):not(:disabled)) {
    background-color: var(--_bg-invalid-checked);
  }

  :host(:focus-visible) {
    outline: none;
  }

  [part='control']:has(> [part='input']:focus-visible:not(:disabled)),
  :host(:focus-visible) [part='control'] {
    outline: var(--_outline-width) solid var(--_outline-color);
    outline-offset: var(--_outline-offset);
  }

  /* checked icon (keep driven by actual input state for parity) */
  [part='control']:has(:checked) {
    background-image: var(--_checked-icon);
    background-position: center;
  }

  @media (prefers-reduced-motion: reduce) {
    :host { --w-c-checkbox-transition: none; }
  }
`})),T,ve=e((()=>{b(),u(),f(),S(),ge(),ae(),_e(),h(),T=class extends y(_){constructor(...e){super(...e),this.value=null,this.indeterminate=!1,this.checked=!1,this.disabled=!1,this.required=!1,this.invalid=!1,this.#e=!1,this.#t=!1,this.#n=!1,this.#r=()=>{this.#a(),this.#l()},this.#i=e=>{if(!this.disabled&&!e.defaultPrevented&&!(e.key!==` `&&e.key!==`Spacebar`&&e.key!==`Enter`)){if(e.key===`Enter`&&this.internals.form){this.internals.form.requestSubmit();return}e.composedPath()[0]!==this.input&&(e.preventDefault(),this.click())}}}static{this.styles=[se,w]}static{this.shadowRootOptions={..._.shadowRootOptions,delegatesFocus:!0}}set name(e){this._ownName=e}get name(){return this._ownName||this._groupName}#e;#t;#n;get _computedInvalid(){return this.invalid||this._groupInvalid===!0}connectedCallback(){super.connectedCallback();let e=this.getAttribute(`value`);this.value=e??`on`,this.#e=this.hasAttribute(`checked`),this.checked=this.#e,this.addEventListener(`invalid`,this.#r),this.addEventListener(`keydown`,this.#i),this.#u()}handleClick(){this.disabled||(this.#a(),this.checked=!this.checked,this.indeterminate=!1,this.updateComplete.then(()=>{this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}))}#r;#i;updated(e){super.updated(e),(e.has(`checked`)||e.has(`indeterminate`))&&this.#d(),this.#f(e)&&(this.#u(),this.#l())}resetFormControl(){this.checked=this.#e,this.#u(),this.#l()}click(){this.disabled||this.input?.click()}focus(e){this.input?.focus(e)}blur(){this.input?.blur()}get validationMessage(){return this.internals.validationMessage}get validity(){return this.internals.validity}checkValidity(){return this.#l(),this.internals.checkValidity()}reportValidity(){return this.#a(),this.#l(),this.internals.checkValidity()}#a(){this.#n=!0}#o(){return this.input?.validationMessage||` `}#s(){return this.input??void 0}#c(e){this.internals.setValidity(e,this.#o(),this.#s())}#l(){if(this.disabled){this.internals.setValidity({});return}let e=this.required&&!this.checked,t=this.invalid&&!this.#t;if(e){this.#t=!0,this.invalid=this.#n,this.#c({valueMissing:!0});return}if(this.#t&&=(this.invalid=!1,!1),t){this.#c({customError:!0});return}this.internals.setValidity({})}#u(){if(this.disabled){this.setValue(null);return}let e=this.checked?this.value:null;this.setValue(e)}#d(){this.input&&(this.input.checked=this.checked,this.input.indeterminate=this.indeterminate)}#f(e){return e.has(`checked`)||e.has(`value`)||e.has(`disabled`)||e.has(`required`)||e.has(`invalid`)}render(){let e=!this.checked&&this.indeterminate,t=e?`mixed`:this.checked?`true`:`false`;return l`
      <label part="base" class="wrapper">
        <span part="control" class="checkbox control">
          <input
            part="input"
            class="input hide-toggle"
            type="checkbox"
            name=${x(this.name||void 0)}
            value=${x(this.value)}
            .indeterminate=${C(this.indeterminate)}
            .checked=${C(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${t}
            aria-invalid=${x(this._computedInvalid?`true`:void 0)}
            @click=${this.handleClick} />
          ${e?`–`:``}
        </span>

        <slot part="label"></slot>
      </label>
    `}},m([le(`input[type="checkbox"]`)],T.prototype,`input`,void 0),m([p({reflect:!0})],T.prototype,`name`,null),m([p({reflect:!0})],T.prototype,`value`,void 0),m([p({type:Boolean,reflect:!0})],T.prototype,`indeterminate`,void 0),m([p({type:Boolean,reflect:!0})],T.prototype,`checked`,void 0),m([p({type:Boolean,reflect:!0})],T.prototype,`disabled`,void 0),m([p({type:Boolean,reflect:!0})],T.prototype,`required`,void 0),m([p({type:Boolean,reflect:!0})],T.prototype,`invalid`,void 0),m([p({attribute:!1})],T.prototype,`_groupInvalid`,void 0),m([p({attribute:!1})],T.prototype,`_groupName`,void 0),customElements.get(`w-checkbox`)||customElements.define(`w-checkbox`,T)})),E,ye=e((()=>{E=JSON.parse(`{"checkbox-group.label.optional":["Valgfri"],"checkbox-group.validation.required":["Mindst én valgt mulighed er påkrævet."]}`)})),D,be=e((()=>{D=JSON.parse(`{"checkbox-group.label.optional":["Optional"],"checkbox-group.validation.required":["At least one selection is required."]}`)})),O,xe=e((()=>{O=JSON.parse(`{"checkbox-group.label.optional":["Valinnainen"],"checkbox-group.validation.required":["Vähintään yksi valinta vaaditaan."]}`)})),k,Se=e((()=>{k=JSON.parse(`{"checkbox-group.label.optional":["Valgfri"],"checkbox-group.validation.required":["Minst ett valg er påkrevd."]}`)})),A,Ce=e((()=>{A=JSON.parse(`{"checkbox-group.label.optional":["Valfritt"],"checkbox-group.validation.required":["Minst ett val krävs."]}`)})),j,M,we=e((()=>{r(),b(),u(),f(),S(),oe(),ye(),be(),xe(),Se(),Ce(),h(),ce(D,k,O,E,A),j=()=>v._({id:`checkbox-group.validation.required`,message:`At least one selection is required.`,comment:`Shown when required checkbox group has no selections`}),M=class extends y(_){constructor(...e){super(...e),this.optional=!1,this.required=!1,this.invalid=!1,this.#e=!1,this.#t=!1,this._internalTabIndex=-1,this.#r=()=>{this.#o(),this.#_(),this.requestUpdate()},this.#i=()=>{this.#o(),this.#_(),this.requestUpdate()},this.#a=()=>{this.#l(),this.#_(),this.requestUpdate()},this.#s=()=>{this.requestUpdate()}}static{this.shadowRootOptions={..._.shadowRootOptions,delegatesFocus:!0}}#e;#t;#n;static{this.styles=d`
    .wrapper {
      display: inline-flex;
      flex-direction: column;
      gap: 16px;
    }

    .checkbox-group {
      display: grid;
      gap: 16px;
    }

    .label {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: var(--w-font-size-s);
      line-height: var(--w-line-height-s);
      font-weight: 700;
      color: var(--w-s-color-text);
    }

    .optional {
      font-weight: 400;
      color: var(--w-s-color-text-subtle);
    }

    .help-text {
      display: block;
      font-size: var(--w-font-size-xs);
      line-height: var(--w-line-height-xs);
      color: var(--w-s-color-text-subtle);
    }

    .error {
      color: var(--w-s-color-text-negative);
    }
  `}render(){let e=this.#c()>0,t=this.required&&!e&&this.#e,r=this.invalid||t,i=r?this.#p():this.helpText,a=i?`checkbox-group__help`:void 0,o=this.label?`checkbox-group__label`:void 0,s=r?`true`:void 0;return l`
      <div class="wrapper" tabindex="${this._internalTabIndex}">
        ${this.label?l`
              <div class="label" id="${o}">
                <span>${this.label}</span>
                ${this.optional?l`
                      <span class="optional">
                        ${v._({id:`checkbox-group.label.optional`,message:`Optional`,comment:`Shown behind label when marked as optional`})}
                      </span>
                    `:n}
              </div>
            `:n}
        <div
          class="checkbox-group"
          role="group"
          aria-labelledby=${x(o)}
          aria-describedby=${x(a)}
          aria-invalid=${x(s)}
        >
          <slot></slot>
        </div>
        ${i?l`<div class="${r?`help-text error`:`help-text`}" id="${a}">${i}</div>`:n}
      </div>
    `}connectedCallback(){super.connectedCallback(),this.addEventListener(`change`,this.#r),this.addEventListener(`invalid`,this.#i),this.addEventListener(`slotchange`,this.#a),this.#n=v.on(`change`,this.#s),this.setValue(null),this.#v()}disconnectedCallback(){this.#n?.(),this.#n=void 0,super.disconnectedCallback()}checkValidity(){return this.#_(),this.internals.checkValidity()}reportValidity(){return this.#o(),this.#_(),this.internals.checkValidity()}focus(e){let t=this.#d();if(t?.focus){t.focus(e);return}HTMLElement.prototype.focus.call(this,e)}#r;#i;#a;#o(){this.#e=!0}#s;#c(){return this.#f().filter(e=>e.checked).length}#l(){if(this.name)for(let e of this.#f()){let t=e;t&&typeof t==`object`&&!t.name&&(t._groupName=this.name)}}#u(e){for(let t of this.#f())`_groupInvalid`in t&&(t._groupInvalid=e)}#d(){return this.#f()[0]}#f(){return(this.shadowRoot?.querySelector(`slot`))?.assignedElements({flatten:!0})??[]}#p(){return j()}updated(e){super.updated(e),this.#m(e)&&(e.has(`name`)&&this.#l(),this.#_())}#m(e){return e.has(`invalid`)||e.has(`required`)||e.has(`helpText`)||e.has(`name`)}#h(e){let t=this.#d();this.internals.setValidity(e,` `,t??void 0)}#g(e){this._internalTabIndex=e?0:-1}#_(){this.#v();let e=this.#c()>0,t=this.required&&!e,n=this.invalid,r=t&&this.#e,i=n||r;if(this.#g(i),t){this.#h({valueMissing:!0}),this.#u(i);return}if(n){this.#h({customError:!0}),this.#u(!0);return}this.internals.setValidity({}),this.#u(!1)}#v(){this.#t||this.internals.form&&(this.name&&this.name.trim().length>0||(console.warn(`w-checkbox-group: "name" is required for form submission.`),this.#t=!0))}},m([p({type:String,reflect:!0})],M.prototype,`label`,void 0),m([p({type:String,reflect:!0})],M.prototype,`name`,void 0),m([p({type:Boolean,reflect:!0})],M.prototype,`optional`,void 0),m([p({type:String,reflect:!0,attribute:`help-text`})],M.prototype,`helpText`,void 0),m([p({type:Boolean,reflect:!0})],M.prototype,`required`,void 0),m([p({type:Boolean,reflect:!0})],M.prototype,`invalid`,void 0),m([ue()],M.prototype,`_internalTabIndex`,void 0),customElements.get(`w-checkbox-group`)||customElements.define(`w-checkbox-group`,M)})),Te=t({CheckboxFormAssociated:()=>H,CheckboxGroup:()=>W,CheckboxGroupFormAssociated:()=>Z,CheckboxGroupRequired:()=>X,CheckboxGroupWithHelpText:()=>G,CheckboxGroupWithHelpTextAndLabel:()=>q,CheckboxGroupWithInvalid:()=>Y,CheckboxGroupWithLabel:()=>K,CheckboxGroupWithOptional:()=>J,Default:()=>L,Disabled:()=>U,Indeterminate:()=>z,IndeterminateDisabled:()=>V,IndeterminateError:()=>B,Invalid:()=>R,__namedExportsOrder:()=>Q,default:()=>I}),N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$=e((()=>{pe(),i(),u(),me(),ve(),we(),{events:N,args:P,argTypes:F}=o(`w-checkbox`),I={title:`Forms/Checkbox`,render(e){return l`
      <w-checkbox ${de(fe(e))}>Check me</w-checkbox>
    `},args:P,argTypes:F,parameters:{actions:{handles:N}}},L={},R={args:{name:`invalidfoo`,value:`bar`,invalid:!0}},z={args:{name:`indeterminatefoo`,value:`bar`,indeterminate:!0}},B={args:{name:`indeterminateerrorfoo`,value:`bar`,indeterminate:!0,invalid:!0}},V={args:{name:`indeterminatedisabledfoo`,value:`bar`,indeterminate:!0,disabled:!0}},H={render:()=>l`
      <form @submit=${e=>{e.preventDefault();let t=e.currentTarget,n=t.querySelector(`[data-status]`);n&&(n.textContent=`Submitted value: ${new FormData(t).get(`newsletter`)??`none`}`)}} style="display: grid; gap: 12px;">
        <w-checkbox name="newsletter" value="yes" required @invalid=${e=>{e.preventDefault();let t=e.currentTarget.closest(`form`)?.querySelector(`[data-status]`);t&&(t.textContent=`Invalid: please check the box.`)}}>
          Sign up for updates
        </w-checkbox>
        <button type="submit">Submit</button>
        <div data-status aria-live="polite"></div>
      </form>
    `},U={args:{name:`disabledfoo`,value:`bar`,disabled:!0}},W={render:()=>l`
    <w-checkbox-group name="group">
      <w-checkbox value="foo">Foo</w-checkbox>
      <w-checkbox value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  `},G={render:()=>l`
    <w-checkbox-group help-text="Select all that apply" name="group">
      <w-checkbox value="foo">Foo</w-checkbox>
      <w-checkbox value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  `},K={render:()=>l`
    <w-checkbox-group label="Label" name="group">
      <w-checkbox value="foo">Foo</w-checkbox>
      <w-checkbox value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  `},q={render:()=>l`
    <w-checkbox-group label="Label" help-text="help text" name="group" >
      <w-checkbox value="foo">Foo</w-checkbox>
      <w-checkbox value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  `},J={render:()=>l`
    <w-checkbox-group label="Label" optional help-text="help text" name="group">
      <w-checkbox value="foo">Foo</w-checkbox>
      <w-checkbox value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  `},Y={render:()=>l`
    <w-checkbox-group label="Label" invalid help-text="help text" name="group">
      <w-checkbox value="foo">Foo</w-checkbox>
      <w-checkbox value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  `},X={render:()=>l`
    <w-checkbox-group label="Preferences" required help-text="Help text" name="group">
      <w-checkbox value="foo">Foo</w-checkbox>
      <w-checkbox value="bar">Bar</w-checkbox>
      <w-checkbox value="baz">Baz</w-checkbox>
    </w-checkbox-group>
  `},Z={render:()=>l`
      <form @submit=${e=>{e.preventDefault();let t=e.currentTarget.querySelector(`[data-status]`);t&&(t.textContent=`Submitted.`)}} style="display: grid; gap: 12px;">
        <w-checkbox-group
          label="Preferences"
          required
          name="group"
          help-text="Choose an option"
          @invalid=${e=>{let t=e.currentTarget.closest(`form`)?.querySelector(`[data-status]`);t&&(t.textContent=`Invalid: select at least one option.`)}}
        >
          <w-checkbox value="foo">Foo</w-checkbox>
          <w-checkbox value="bar">Bar</w-checkbox>
          <w-checkbox value="baz">Baz</w-checkbox>
        </w-checkbox-group>
        <button type="submit">Submit</button>
        <div data-status aria-live="polite"></div>
      </form>
    `},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'invalidfoo',
    value: 'bar',
    invalid: true
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'indeterminatefoo',
    value: 'bar',
    indeterminate: true
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'indeterminateerrorfoo',
    value: 'bar',
    indeterminate: true,
    invalid: true
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'indeterminatedisabledfoo',
    value: 'bar',
    indeterminate: true,
    disabled: true
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => {
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
      if (status) status.textContent = 'Invalid: please check the box.';
    };
    return html\`
      <form @submit=\${handleSubmit} style="display: grid; gap: 12px;">
        <w-checkbox name="newsletter" value="yes" required @invalid=\${handleInvalid}>
          Sign up for updates
        </w-checkbox>
        <button type="submit">Submit</button>
        <div data-status aria-live="polite"></div>
      </form>
    \`;
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'disabledfoo',
    value: 'bar',
    disabled: true
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-checkbox-group name="group">
      <w-checkbox value="foo">Foo</w-checkbox>
      <w-checkbox value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  \`
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-checkbox-group help-text="Select all that apply" name="group">
      <w-checkbox value="foo">Foo</w-checkbox>
      <w-checkbox value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  \`
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-checkbox-group label="Label" name="group">
      <w-checkbox value="foo">Foo</w-checkbox>
      <w-checkbox value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  \`
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-checkbox-group label="Label" help-text="help text" name="group" >
      <w-checkbox value="foo">Foo</w-checkbox>
      <w-checkbox value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  \`
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-checkbox-group label="Label" optional help-text="help text" name="group">
      <w-checkbox value="foo">Foo</w-checkbox>
      <w-checkbox value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  \`
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-checkbox-group label="Label" invalid help-text="help text" name="group">
      <w-checkbox value="foo">Foo</w-checkbox>
      <w-checkbox value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  \`
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-checkbox-group label="Preferences" required help-text="Help text" name="group">
      <w-checkbox value="foo">Foo</w-checkbox>
      <w-checkbox value="bar">Bar</w-checkbox>
      <w-checkbox value="baz">Baz</w-checkbox>
    </w-checkbox-group>
  \`
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
      if (status) status.textContent = 'Invalid: select at least one option.';
    };
    return html\`
      <form @submit=\${handleSubmit} style="display: grid; gap: 12px;">
        <w-checkbox-group
          label="Preferences"
          required
          name="group"
          help-text="Choose an option"
          @invalid=\${handleInvalid}
        >
          <w-checkbox value="foo">Foo</w-checkbox>
          <w-checkbox value="bar">Bar</w-checkbox>
          <w-checkbox value="baz">Baz</w-checkbox>
        </w-checkbox-group>
        <button type="submit">Submit</button>
        <div data-status aria-live="polite"></div>
      </form>
    \`;
  }
}`,...Z.parameters?.docs?.source}}},Q=[`Default`,`Invalid`,`Indeterminate`,`IndeterminateError`,`IndeterminateDisabled`,`CheckboxFormAssociated`,`Disabled`,`CheckboxGroup`,`CheckboxGroupWithHelpText`,`CheckboxGroupWithLabel`,`CheckboxGroupWithHelpTextAndLabel`,`CheckboxGroupWithOptional`,`CheckboxGroupWithInvalid`,`CheckboxGroupRequired`,`CheckboxGroupFormAssociated`]}));$();export{H as CheckboxFormAssociated,W as CheckboxGroup,Z as CheckboxGroupFormAssociated,X as CheckboxGroupRequired,G as CheckboxGroupWithHelpText,q as CheckboxGroupWithHelpTextAndLabel,Y as CheckboxGroupWithInvalid,K as CheckboxGroupWithLabel,J as CheckboxGroupWithOptional,L as Default,U as Disabled,z as Indeterminate,V as IndeterminateDisabled,B as IndeterminateError,R as Invalid,Q as __namedExportsOrder,I as default,$ as n,Te as t};