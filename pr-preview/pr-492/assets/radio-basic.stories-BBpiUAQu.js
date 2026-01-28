import{a as R,b as s,n as g}from"./iframe-DzWjb3nD.js";import{B as x}from"./form-associated-element-B1eD3_g-.js";import"./preload-helper-Ct5FWWRu.js";const S=R`
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

    --_transition: var(--w-c-radio-transition, border-color 150ms cubic-bezier(0.4, 0, 0.2, 1), border-width 150ms cubic-bezier(0.4, 0, 0.2, 1), background-color 150ms cubic-bezier(0.4, 0, 0.2, 1));
  }

  :host([disabled]) {
    --w-c-radio-border-color: var(--w-c-radio-border-color-disabled, var(--w-s-color-border-disabled));
    --w-c-radio-bg: var(--w-c-radio-bg-disabled, var(--w-s-color-background-disabled-subtle));
    --w-c-radio-border-color-checked: var(--w-c-radio-border-color-disabled, var(--w-s-color-border-disabled));
    --w-c-radio-label-color: var(--w-c-radio-label-color-disabled, var(--w-s-color-text-disabled));
    --w-c-radio-cursor: var(--w-c-radio-cursor-disabled, not-allowed);
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

  [part='control']:checked {
    border-color: var(--_border-color-checked);
    border-width: var(--_checked-border-width);
  }

  [part='control']:focus-visible {
    outline: var(--_outline-width) solid var(--_outline-color);
    outline-offset: var(--_outline-offset);
  }

  [part='control']:disabled {
    border-color: var(--_border-color-disabled);
    background-color: var(--_bg-disabled);
    cursor: var(--_cursor-disabled);
  }

  [part='control']:disabled:checked {
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
    :host { --w-c-radio-transition: none; }
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

    [part='control'] { forced-color-adjust: none; }

    [part='control']:checked {
      background-color: var(--_border-color-checked);
      border-color: var(--_border-color-checked);
    }

    [part='control']:disabled:checked {
      background-color: var(--_border-color-disabled);
      border-color: var(--_border-color-disabled);
    }
  }
`;var A=Object.defineProperty,k=(c,e,r,o)=>{for(var i=void 0,a=c.length-1,d;a>=0;a--)(d=c[a])&&(i=d(e,r,i)||i);return i&&A(e,r,i),i};const f=class _ extends x{constructor(){super(...arguments),this.#a=`w-radio-basic-${_.#d++}`,this.value="",this.checked=!1,this.required=!1,this.#r=null,this.#o=e=>{if(e.key===" "){if(this.disabled||this.checked)return;if(e.preventDefault(),this.checked=!0,this.hasInteracted=!0,this.name){const C=this.getRootNode().querySelectorAll(`w-radio-basic[name="${this.name}"]`);for(const n of C)n!==this&&n.checked&&(n.checked=!1,n.updateFormValue())}this.updateFormValue(),this.dispatchEvent(new CustomEvent("change",{detail:{checked:!0,value:this.value},bubbles:!0,composed:!0}));return}if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.key)||this.disabled||!this.name)return;const r=this.getRootNode(),o=Array.from(r.querySelectorAll(`w-radio-basic[name="${this.name}"]`)).filter(y=>!y.disabled);if(o.length<=1)return;e.preventDefault();const i=o.indexOf(this),a=["ArrowUp","ArrowLeft"].includes(e.key)?-1:1;let d=i+a;d<0?d=o.length-1:d>=o.length&&(d=0);const t=o[d];t.checked=!0,t.focus(),t!==this&&(this.checked=!1,this.updateFormValue()),t.updateFormValue(),t.dispatchEvent(new CustomEvent("change",{detail:{checked:!0,value:t.value},bubbles:!0,composed:!0}))}}static{this.css=[S]}static{this.shadowRootOptions={...x.shadowRootOptions,delegatesFocus:!0}}static#d=0;static get validators(){return[...super.validators,{observedAttributes:["required","disabled"],checkValidity:e=>{if(e.disabled)return{message:"",isValid:!0,invalidKeys:[]};if(!(e.required||e.hasAttribute("required")))return{message:"",isValid:!0,invalidKeys:[]};if(e.name){const o=e.getRootNode();if(Array.from(o.querySelectorAll(`w-radio-basic[name="${e.name}"]`)).some(d=>d.checked))return{message:"",isValid:!0,invalidKeys:[]}}else if(e.checked)return{message:"",isValid:!0,invalidKeys:[]};return{message:"Please select an option.",isValid:!1,invalidKeys:["valueMissing"]}}}]}#a;#r;connectedCallback(){this.#r=this.checked,super.connectedCallback(),this.updateFormValue(),this.addEventListener("keydown",this.#o),requestAnimationFrame(()=>this.#i())}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this.#o)}#i(){if(!this.name){this.#e(this.disabled?-1:0);return}const e=this.getRootNode(),r=Array.from(e.querySelectorAll(`w-radio-basic[name="${this.name}"]`)),o=r.filter(a=>!a.disabled),i=o.find(a=>a.checked);for(const a of r)a.disabled?a.#e(-1):i?a.#e(a===i?0:-1):a.#e(a===o[0]?0:-1)}#e(e){const r=this.shadowRoot?.querySelector("input");r&&(r.tabIndex=e)}#o;updateFormValue(){if(this.checked&&this.value?this.setValue(this.value):this.checked||this.setValue(null),this.updateValidity(),this.name&&this.checked){const r=this.getRootNode().querySelectorAll(`w-radio-basic[name="${this.name}"]`);for(const o of r)o!==this&&o.updateValidity()}}_handleChange(e){const r=e.target;if(this.checked=r.checked,this.hasInteracted=!0,this.checked&&this.name){const i=this.getRootNode().querySelectorAll(`w-radio-basic[name="${this.name}"]`);for(const a of i)a!==this&&a.checked&&(a.checked=!1,a.updateFormValue())}this.updateFormValue(),this.dispatchEvent(new CustomEvent("change",{detail:{checked:this.checked,value:this.value},bubbles:!0,composed:!0}))}formResetCallback(){this.checked=this.#r??!1,super.formResetCallback(),this.updateFormValue()}willUpdate(e){super.willUpdate(e),(e.has("checked")||e.has("value"))&&this.updateFormValue(),(e.has("checked")||e.has("disabled"))&&this.updateComplete.then(()=>this.#i())}render(){return s`
      <input
        type="radio"
        part="control"
        id=${this.#a}
        .name=${this.name??""}
        .value=${this.value}
        .checked=${this.checked}
        ?disabled=${this.disabled}
        ?required=${this.required}
        @change=${this._handleChange}
      />
      <label part="label" for=${this.#a}><slot></slot></label>
    `}};k([g({type:String,reflect:!0})],f.prototype,"value");k([g({type:Boolean,reflect:!0})],f.prototype,"checked");k([g({type:Boolean,reflect:!0})],f.prototype,"required");let q=f;customElements.get("w-radio-basic")||customElements.define("w-radio-basic",q);const V={title:"Forms/RadioBasic",component:"w-radio-basic"},l={render:()=>s`
    <w-radio-basic name="example" value="option1">Option 1</w-radio-basic>
  `},b={render:()=>s`
    <div style="display: flex; flex-direction: column; gap: 8px;">
      <w-radio-basic name="group" value="apple">Apple</w-radio-basic>
      <w-radio-basic name="group" value="banana">Banana</w-radio-basic>
      <w-radio-basic name="group" value="cherry" checked>Cherry</w-radio-basic>
    </div>
  `},u={render:()=>s`
    <div style="display: flex; flex-direction: column; gap: 8px;">
      <w-radio-basic name="disabled-demo" value="unchecked" disabled>Disabled unchecked</w-radio-basic>
      <w-radio-basic name="disabled-demo" value="checked" disabled checked>Disabled checked</w-radio-basic>
    </div>
  `},p={render:()=>s`
    <div style="display: flex; gap: 32px;">
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <strong>Enabled</strong>
        <w-radio-basic name="enabled-compare" value="unchecked">Unchecked</w-radio-basic>
        <w-radio-basic name="enabled-compare" value="checked" checked>Checked</w-radio-basic>
      </div>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <strong>Disabled</strong>
        <w-radio-basic name="disabled-compare" value="unchecked" disabled>Unchecked</w-radio-basic>
        <w-radio-basic name="disabled-compare" value="checked" disabled checked>Checked</w-radio-basic>
      </div>
    </div>
  `},h={render:()=>s`
    <form style="display: flex; flex-direction: column; gap: 8px;">
      <w-radio-basic name="required-demo" value="one" required>Option one</w-radio-basic>
      <w-radio-basic name="required-demo" value="two" required>Option two</w-radio-basic>
      <button type="submit">Submit</button>
    </form>
  `},m={render:()=>s`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <p style="margin: 0; max-width: 400px;">
        When <code>prefers-reduced-motion: reduce</code> is enabled in your OS settings,
        the radio button transitions are disabled. Click the radios below and observe
        the transition behavior.
      </p>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <w-radio-basic name="motion-demo" value="one">Option one</w-radio-basic>
        <w-radio-basic name="motion-demo" value="two">Option two</w-radio-basic>
        <w-radio-basic name="motion-demo" value="three">Option three</w-radio-basic>
      </div>
      <p style="margin: 0; font-size: 0.875rem; color: #666;">
        To test: Enable "Reduce motion" in your OS accessibility settings, then refresh.
      </p>
    </div>
  `},w={render:()=>s`
    <form @submit=${c=>{c.preventDefault(),console.log(new FormData(c.target))}}>
      <fieldset style="border: 1px solid #ccc; padding: 16px; border-radius: 8px;">
        <legend>Choose a fruit</legend>
        <div style="display: flex; flex-direction: column; gap: 8px;">
          <w-radio-basic name="fruit" value="apple">Apple</w-radio-basic>
          <w-radio-basic name="fruit" value="banana">Banana</w-radio-basic>
          <w-radio-basic name="fruit" value="cherry">Cherry</w-radio-basic>
        </div>
      </fieldset>
      <button type="submit" style="margin-top: 16px;">Submit</button>
    </form>
  `},v={render:()=>s`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <p style="margin: 0; max-width: 400px;">
        Keyboard navigation matches native radio behavior:
      </p>
      <ul style="margin: 0; max-width: 400px; padding-left: 20px;">
        <li><kbd>Tab</kbd> - Focus the radio group (first or checked radio)</li>
        <li><kbd>Space</kbd> - Select the focused radio</li>
        <li><kbd>Arrow keys</kbd> - Move focus AND selection between radios</li>
        <li><kbd>Shift+Tab</kbd> - Leave the radio group</li>
      </ul>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <w-radio-basic name="keyboard-demo" value="first">First option</w-radio-basic>
        <w-radio-basic name="keyboard-demo" value="second">Second option</w-radio-basic>
        <w-radio-basic name="keyboard-demo" value="third">Third option</w-radio-basic>
        <w-radio-basic name="keyboard-demo" value="fourth">Fourth option</w-radio-basic>
      </div>
      <p style="margin: 0; font-size: 0.875rem; color: #666;">
        Arrow keys wrap around: pressing Down on the last option moves to the first.
      </p>
    </div>
  `};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-radio-basic name="example" value="option1">Option 1</w-radio-basic>
  \`
}`,...l.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 8px;">
      <w-radio-basic name="group" value="apple">Apple</w-radio-basic>
      <w-radio-basic name="group" value="banana">Banana</w-radio-basic>
      <w-radio-basic name="group" value="cherry" checked>Cherry</w-radio-basic>
    </div>
  \`
}`,...b.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 8px;">
      <w-radio-basic name="disabled-demo" value="unchecked" disabled>Disabled unchecked</w-radio-basic>
      <w-radio-basic name="disabled-demo" value="checked" disabled checked>Disabled checked</w-radio-basic>
    </div>
  \`
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; gap: 32px;">
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <strong>Enabled</strong>
        <w-radio-basic name="enabled-compare" value="unchecked">Unchecked</w-radio-basic>
        <w-radio-basic name="enabled-compare" value="checked" checked>Checked</w-radio-basic>
      </div>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <strong>Disabled</strong>
        <w-radio-basic name="disabled-compare" value="unchecked" disabled>Unchecked</w-radio-basic>
        <w-radio-basic name="disabled-compare" value="checked" disabled checked>Checked</w-radio-basic>
      </div>
    </div>
  \`
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <form style="display: flex; flex-direction: column; gap: 8px;">
      <w-radio-basic name="required-demo" value="one" required>Option one</w-radio-basic>
      <w-radio-basic name="required-demo" value="two" required>Option two</w-radio-basic>
      <button type="submit">Submit</button>
    </form>
  \`
}`,...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <p style="margin: 0; max-width: 400px;">
        When <code>prefers-reduced-motion: reduce</code> is enabled in your OS settings,
        the radio button transitions are disabled. Click the radios below and observe
        the transition behavior.
      </p>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <w-radio-basic name="motion-demo" value="one">Option one</w-radio-basic>
        <w-radio-basic name="motion-demo" value="two">Option two</w-radio-basic>
        <w-radio-basic name="motion-demo" value="three">Option three</w-radio-basic>
      </div>
      <p style="margin: 0; font-size: 0.875rem; color: #666;">
        To test: Enable "Reduce motion" in your OS accessibility settings, then refresh.
      </p>
    </div>
  \`
}`,...m.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <form @submit=\${(e: Event) => {
    e.preventDefault();
    console.log(new FormData(e.target as HTMLFormElement));
  }}>
      <fieldset style="border: 1px solid #ccc; padding: 16px; border-radius: 8px;">
        <legend>Choose a fruit</legend>
        <div style="display: flex; flex-direction: column; gap: 8px;">
          <w-radio-basic name="fruit" value="apple">Apple</w-radio-basic>
          <w-radio-basic name="fruit" value="banana">Banana</w-radio-basic>
          <w-radio-basic name="fruit" value="cherry">Cherry</w-radio-basic>
        </div>
      </fieldset>
      <button type="submit" style="margin-top: 16px;">Submit</button>
    </form>
  \`
}`,...w.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <p style="margin: 0; max-width: 400px;">
        Keyboard navigation matches native radio behavior:
      </p>
      <ul style="margin: 0; max-width: 400px; padding-left: 20px;">
        <li><kbd>Tab</kbd> - Focus the radio group (first or checked radio)</li>
        <li><kbd>Space</kbd> - Select the focused radio</li>
        <li><kbd>Arrow keys</kbd> - Move focus AND selection between radios</li>
        <li><kbd>Shift+Tab</kbd> - Leave the radio group</li>
      </ul>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <w-radio-basic name="keyboard-demo" value="first">First option</w-radio-basic>
        <w-radio-basic name="keyboard-demo" value="second">Second option</w-radio-basic>
        <w-radio-basic name="keyboard-demo" value="third">Third option</w-radio-basic>
        <w-radio-basic name="keyboard-demo" value="fourth">Fourth option</w-radio-basic>
      </div>
      <p style="margin: 0; font-size: 0.875rem; color: #666;">
        Arrow keys wrap around: pressing Down on the last option moves to the first.
      </p>
    </div>
  \`
}`,...v.parameters?.docs?.source}}};const E=["Default","RadioGroup","Disabled","DisabledComparison","Required","ReducedMotion","InForm","KeyboardNavigation"];export{l as Default,u as Disabled,p as DisabledComparison,w as InForm,v as KeyboardNavigation,b as RadioGroup,m as ReducedMotion,h as Required,E as __namedExportsOrder,V as default};
