import{n as e}from"./chunk-DnJy8xQt.js";import{Mt as t,Ot as n,Pt as r,T as i,_ as a,a as o,b as s,d as c,f as l,kt as u,o as d,w as f}from"./iframe-CEP5nfbG.js";import{n as p,t as m}from"./form-control-BF64cDf7.js";var h,g=e((()=>{n(),h=r`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.bg-\\[--w-s-color-border-strong\\]{background-color:var(--w-s-color-border-strong)}.group:hover .group-hover\\:bg-\\[--w-s-color-border-strong-hover\\]{background-color:var(--w-s-color-border-strong-hover)}.border{border-width:1px}.rounded-full{border-radius:9999px}.block{display:block}.focusable:focus{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:focus-visible{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:not(:focus-visible){outline:none}.left-0{left:0}.left-4{left:.4rem}.top-0{top:0}.top-4{top:.4rem}.absolute{position:absolute}.relative{position:relative}.static{position:static}.s-bg{background-color:var(--w-s-color-background)}.s-bg-disabled{background-color:var(--w-s-color-background-disabled)}.s-bg-disabled-subtle{background-color:var(--w-s-color-background-disabled-subtle)}.s-bg-primary{background-color:var(--w-s-color-background-primary)}.group:hover .group-hover\\:s-bg-hover{background-color:var(--w-s-color-background-hover)}.group:hover .group-hover\\:s-bg-primary-hover{background-color:var(--w-s-color-background-primary-hover)}.s-border-disabled{border-color:var(--w-s-color-border-disabled)}.s-border-strong{border-color:var(--w-s-color-border-strong)}.group:hover .group-hover\\:s-border-strong-hover{border-color:var(--w-s-color-border-strong-hover)}.h-16{height:1.6rem}.h-24{height:2.4rem}.h-full{height:100%}.w-16{width:1.6rem}.w-44{width:4.4rem}.w-full{width:100%}.cursor-pointer{cursor:pointer}.pointer-events-none{pointer-events:none}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.translate-x-20{--w-translate-x:2rem;transform:translateX(var(--w-translate-x))translateY(var(--w-translate-y))translateZ(var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.transform-gpu{transform:translate3d(var(--w-translate-x),var(--w-translate-y),var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition-transform{transition-property:transform;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}`})),_,v,y=e((()=>{f(),m(),n(),a(),o(),g(),l(),_={base:`block relative h-24 w-44 cursor-pointer group focusable rounded-full`,disabled:`pointer-events-none`,track:`absolute top-0 left-0 h-full w-full rounded-full transition-colors`,trackActive:`s-bg-primary group-hover:s-bg-primary-hover`,trackInactive:`s-bg border s-border-strong group-hover:s-bg-hover group-hover:s-border-strong-hover`,trackDisabledOn:`s-bg-disabled`,trackDisabledOff:`s-bg-disabled-subtle border s-border-disabled`,handle:`absolute transform-gpu h-16 w-16 top-4 left-4 rounded-full transition-transform`,handleSelected:`translate-x-20`,handleActive:`s-bg`,handleNotDisabled:`bg-[--w-s-color-border-strong] group-hover:bg-[--w-s-color-border-strong-hover]`,handleDisabledOn:`s-bg-disabled-subtle`,handleDisabledOff:`s-bg-disabled`,a11y:`sr-only`},v=class extends p(u){constructor(...e){super(...e),this.checked=!1,this.disabled=!1,this.#e=null,this._handleHostClick=e=>{this.disabled||e.composedPath()[0]===this&&this._handleClick()},this._handleKeyDown=e=>{this.disabled||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||(e.key===` `||e.key===`Enter`)&&(e.preventDefault(),this._handleClick())}}static{this.shadowRootOptions={...u.shadowRootOptions,delegatesFocus:!0}}#e;static{this.styles=[d,h,r`
      :host {
        display: inline-block;
      }

      button:focus {
        outline: none;
      }

      button:focus-visible {
        outline: 2px solid var(--w-s-color-border-focus);
        outline-offset: var(--w-outline-offset, 1px);
      }
    `]}get _baseClasses(){return i([_.base,this.disabled&&_.disabled])}get _trackClasses(){return i([_.track,this.disabled?this.checked?_.trackDisabledOn:_.trackDisabledOff:this.checked?_.trackActive:_.trackInactive])}get _handleClasses(){return i([_.handle,this.checked&&_.handleSelected,this.disabled?this.checked?_.handleDisabledOn:_.handleDisabledOff:this.checked?_.handleActive:_.handleNotDisabled])}_handleClick(){this.disabled||(this.checked=!this.checked,this.dispatchEvent(new CustomEvent(`change`,{detail:{checked:this.checked,value:this.value||null},bubbles:!0,composed:!0})))}_syncA11yState(){this.internals.ariaChecked=this.checked?`true`:`false`,this.internals.ariaDisabled=this.disabled?`true`:null}connectedCallback(){this.#e=this.checked,super.connectedCallback(),this.internals.role=`switch`;let e=this.getAttribute(`aria-label`);e&&(this.internals.ariaLabel=e),this.disabled||this.setValue(this.checked&&this.value?this.value:null),this._syncA11yState(),this.addEventListener(`click`,this._handleHostClick),this.addEventListener(`keydown`,this._handleKeyDown)}disconnectedCallback(){this.removeEventListener(`click`,this._handleHostClick),this.removeEventListener(`keydown`,this._handleKeyDown),super.disconnectedCallback()}willUpdate(e){e.has(`checked`)&&(this.disabled||this.setValue(this.checked&&this.value?this.value:null)),(e.has(`checked`)||e.has(`disabled`))&&this._syncA11yState()}resetFormControl(){this.checked=this.#e}render(){return t`
      <div>
        <button
          type="button"
          role="none"
          tabindex=${this.disabled?-1:0}
          class=${this._baseClasses}
          ?disabled=${this.disabled}
          @click=${this._handleClick}
        >
          <span data-testid="track" class=${this._trackClasses}></span>
          <span data-testid="handle" class=${this._handleClasses}></span>
        </button>
      </div>
    `}},c([s({type:String,reflect:!0})],v.prototype,`name`,void 0),c([s({type:String,reflect:!0})],v.prototype,`value`,void 0),c([s({type:Boolean,reflect:!0})],v.prototype,`checked`,void 0),c([s({type:Boolean,reflect:!0})],v.prototype,`disabled`,void 0),customElements.get(`w-switch`)||customElements.define(`w-switch`,v)})),b,x,S,C,w,T,E,D,O;e((()=>{n(),y(),b={title:`Forms/Switch`,component:`w-switch`,argTypes:{checked:{control:`boolean`},disabled:{control:`boolean`},value:{control:`text`}}},x={args:{checked:!1,disabled:!1}},S={args:{checked:!0,disabled:!1}},C={args:{checked:!1,disabled:!0}},w={args:{checked:!0,disabled:!0}},T={render:()=>t`
    <div style="display: inline-flex; align-items: center; gap: 8px;">
      <span id="switch-label">Enable notifications</span>
      <w-switch aria-labelledby="switch-label"></w-switch>
    </div>
  `},E={render:()=>t`
    <div style="display: inline-flex; align-items: center; gap: 8px;">
      <label for="native-label-switch">Enable notifications</label>
      <w-switch
        id="native-label-switch"
        name="notifications"
        value="enabled"
      ></w-switch>
    </div>
  `},D={render:()=>t`
      <form @submit=${e=>{e.preventDefault();let t=e.currentTarget,n=t.querySelector(`[data-status]`);if(!n)return;let r=new FormData(t),i=`notifications`,a=r.get(i);n.textContent=a===null?`Submitted: no switch value captured.`:`Submitted: ${i}=${String(a)}`}} style="display: grid; gap: 12px; max-width: 320px;">
        <div style="display: inline-flex; align-items: center; gap: 8px;">
          <span id="switch-form-label">Enable notifications</span>
          <w-switch
            aria-labelledby="switch-form-label"
            name="notifications"
            value="enabled"
          ></w-switch>
        </div>
        <button type="submit">Submit</button>
        <div data-status aria-live="polite"></div>
      </form>
    `},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: false
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: true
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: true
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: inline-flex; align-items: center; gap: 8px;">
      <span id="switch-label">Enable notifications</span>
      <w-switch aria-labelledby="switch-label"></w-switch>
    </div>
  \`
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: inline-flex; align-items: center; gap: 8px;">
      <label for="native-label-switch">Enable notifications</label>
      <w-switch
        id="native-label-switch"
        name="notifications"
        value="enabled"
      ></w-switch>
    </div>
  \`
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => {
    const handleSubmit = (event: Event) => {
      event.preventDefault();
      const form = event.currentTarget as HTMLFormElement;
      const status = form.querySelector('[data-status]') as HTMLElement | null;
      if (!status) return;
      const data = new FormData(form);
      const name = 'notifications';
      const value = data.get(name);
      status.textContent = value === null ? 'Submitted: no switch value captured.' : \`Submitted: \${name}=\${String(value)}\`;
    };
    return html\`
      <form @submit=\${handleSubmit} style="display: grid; gap: 12px; max-width: 320px;">
        <div style="display: inline-flex; align-items: center; gap: 8px;">
          <span id="switch-form-label">Enable notifications</span>
          <w-switch
            aria-labelledby="switch-form-label"
            name="notifications"
            value="enabled"
          ></w-switch>
        </div>
        <button type="submit">Submit</button>
        <div data-status aria-live="polite"></div>
      </form>
    \`;
  }
}`,...D.parameters?.docs?.source}}},O=[`Default`,`Checked`,`Disabled`,`DisabledChecked`,`WithLabel`,`NativeLabel`,`SwitchFormAssociated`]}))();export{S as Checked,x as Default,C as Disabled,w as DisabledChecked,E as NativeLabel,D as SwitchFormAssociated,T as WithLabel,O as __namedExportsOrder,b as default};