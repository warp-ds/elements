import{a as _,i as N,q as V,r as L,b as d,j as S,t as $,d as R,l as z,n as s,g as T}from"./iframe-Csl67nxc.js";import{s as y,p as x}from"./utilities-C2PPAsF0.js";import{o as k}from"./if-defined-wOvmu4NH.js";import{F as A}from"./FormControlMixin-DJnJZbro.js";const E=JSON.parse('{"select.label.optional":["(valgfrit)"]}'),I=JSON.parse('{"select.label.optional":["(optional)"]}'),P=JSON.parse('{"select.label.optional":["(vapaaehtoinen)"]}'),W=JSON.parse('{"select.label.optional":["(valgfritt)"]}'),j=JSON.parse('{"select.label.optional":["(valfritt)"]}'),H=_`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.focus\\:\\[--w-outline-offset\\:-2px\\]:focus{--w-outline-offset:-2px}.bg-transparent{background-color:#0000}.appearance-none{-webkit-appearance:none;appearance:none}.border-0{border-width:0}.border-1{border-width:1px}.rounded-4{border-radius:4px}.caret-current{caret-color:currentColor}.opacity-25{opacity:.25}.block,.before\\:block:before{display:block}.before\\:hidden:before{display:none}.focusable:focus{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:focus-visible{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:not(:focus-visible){outline:none}.outline-\\[--w-s-color-border-negative\\]\\!{outline-color:var(--w-s-color-border-negative)!important}.bottom-0{bottom:0}.right-0{right:0}.before\\:bottom-0:before{bottom:0}.before\\:right-0:before{right:0}.top-\\[30\\%\\]{top:30%}.absolute{position:absolute}.relative{position:relative}.static{position:static}.before\\:absolute:before{position:absolute}.s-bg{background-color:var(--w-s-color-background)}.s-bg-disabled-subtle{background-color:var(--w-s-color-background-disabled-subtle)}.s-text{color:var(--w-s-color-text)}.s-text-disabled{color:var(--w-s-color-text-disabled)}.s-text-negative{color:var(--w-s-color-text-negative)}.s-text-subtle{color:var(--w-s-color-text-subtle)}.s-icon{color:var(--w-s-color-icon)}.s-border-disabled{border-color:var(--w-s-color-border-disabled)}.s-border-negative{border-color:var(--w-s-color-border-negative)}.s-border-strong{border-color:var(--w-s-color-border-strong)}.hover\\:s-border-disabled:hover{border-color:var(--w-s-color-border-disabled)}.hover\\:s-border-negative-hover:hover{border-color:var(--w-s-color-border-negative-hover)}.hover\\:s-border-strong-hover:hover{border-color:var(--w-s-color-border-strong-hover)}.active\\:s-border-active:active{border-color:var(--w-s-color-border-active)}.active\\:s-border-disabled:active{border-color:var(--w-s-color-border-disabled)}.h-full{height:100%}.w-32{width:3.2rem}.w-full{width:100%}.before\\:h-full:before{height:100%}.before\\:w-32:before{width:3.2rem}.mb-0{margin-bottom:0}.mt-4{margin-top:.4rem}.py-12{padding-top:1.2rem;padding-bottom:1.2rem}.pb-4{padding-bottom:.4rem}.pl-0{padding-left:0}.pl-8{padding-left:.8rem}.pr-32{padding-right:3.2rem}.cursor-pointer{cursor:pointer}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-smoothing:grayscale}.font-bold{font-weight:700}.font-normal{font-weight:400}.pointer-events-none,.before\\:pointer-events-none:before{pointer-events:none}.text-m{font-size:var(--w-font-size-m);line-height:var(--w-line-height-m)}.text-s{font-size:var(--w-font-size-s);line-height:var(--w-line-height-s)}.text-xs{font-size:var(--w-font-size-xs);line-height:var(--w-line-height-xs)}`;var J=Object.defineProperty,a=(n,e,r,t)=>{for(var l=void 0,i=n.length-1,p;i>=0;i--)(p=n[i])&&(l=p(e,r,l)||l);return l&&J(e,r,l),l};const c={base:"block text-m mb-0 py-12 pr-32 rounded-4 w-full focusable focus:[--w-outline-offset:-2px] appearance-none cursor-pointer caret-current",default:"s-text s-bg pl-8 border-1 s-border-strong hover:s-border-strong-hover active:s-border-active",disabled:"s-text-disabled s-bg-disabled-subtle pl-8 border-1 s-border-disabled hover:s-border-disabled active:s-border-disabled pointer-events-none",invalid:"s-text s-bg pl-8 border-1 s-border-negative hover:s-border-negative-hover active:s-border-active outline-[--w-s-color-border-negative]!",readOnly:"s-text bg-transparent pl-0 border-0 pointer-events-none before:hidden",wrapper:"relative",selectWrapper:"relative before:block before:absolute before:right-0 before:bottom-0 before:w-32 before:h-full before:pointer-events-none ",chevron:"block absolute top-[30%] right-0 bottom-0 w-32 h-full s-icon pointer-events-none cursor-pointer",chevronDisabled:"opacity-25"},B={base:"antialiased block relative text-s font-bold pb-4 cursor-pointer s-text",optional:"pl-8 font-normal text-s s-text-subtle"},O={base:"text-xs mt-4 block",color:"s-text-subtle",colorInvalid:"s-text-negative"};class o extends A(N){constructor(){super(),this.#t=null,this.#r=()=>this.#a(),this._setValue=e=>{this.value=e,this.setValue(e)},V(I,W,P,E,j)}#t;#r;#o;static{this.styles=[L,H,_`
    /* if there is an option with an empty value and it is selected */
    select:has(option[value=""][selected]),
    /* if there is an option with an empty value, and no other options are selected */
    select:has(option[value=""]):not(:has(option[selected])) {
      color: var(--w-s-color-text-placeholder);
    }
  `]}resetFormControl(){this.value=this.#t}#n(){return Array.from(this.children).filter(e=>e.tagName.toLowerCase()==="option"||e.tagName.toLowerCase()==="w-option")}#s(){return this.shadowRoot?.querySelector("select")}#d(){return this.#n().some(e=>e.hasAttribute("selected"))}#e(e){const r=this.#s();if(!r)return;let t=!1;for(const l of Array.from(r.options)){const i=!t&&l.value===e;l.selected=i,l.toggleAttribute("selected",i),i&&(t=!0)}}#a({allowDefaultFirstOption:e=!1}={}){const r=this.#s();if(!r)return;const t=r.value;!t||t===this.value||!e&&!this.value&&!this.#d()&&r.selectedIndex===0||(this._setValue(t),this.#e(t))}#c({syncValueFromSelected:e=!1}={}){const r=this.#n();let t;const l=r.map(i=>{const p=i.getAttribute("value")??"",D=i.textContent??"",C=i.hasAttribute("selected"),F=i.hasAttribute("disabled");return e&&t===void 0&&C&&(t=p),d`<option value="${p}" ?selected=${C} ?disabled=${F}>${D}</option>`});this._options=l,e&&t!==void 0&&t!==this.value&&this._setValue(t)}connectedCallback(){super.connectedCallback(),this.#t=this.value,(this.autofocus||this.autoFocus)&&this.shadowRoot.querySelector("select").focus(),this.#c({syncValueFromSelected:!0}),this.ownerDocument?.defaultView?.addEventListener("pageshow",this.#r),this.#o=new MutationObserver(()=>{this.#c({syncValueFromSelected:!0})}),this.#o.observe(this,{childList:!0,subtree:!0,characterData:!0,attributes:!0,attributeFilter:["selected","disabled","value"]})}disconnectedCallback(){super.disconnectedCallback(),this.ownerDocument?.defaultView?.removeEventListener("pageshow",this.#r),this.#o?.disconnect()}firstUpdated(){this.#a()}formStateRestoreCallback(e,r){if(typeof e=="string"&&e){this._setValue(e),this.#e(e);return}this.#a({allowDefaultFirstOption:!0})}willUpdate(e){e.has("value")&&this.setValue(this.value)}updated(e){if(e.has("value")){const r=this.#s();r&&r.value!==this.value&&(r.value=this.value??""),this.#e(this.value??"")}}handleKeyDown(e){(this.readonly||this.readOnly)&&(e.key===" "||e.key==="ArrowDown"||e.key==="ArrowUp")&&e.preventDefault()}get#p(){return S([c.base,!this.invalid&&!this.disabled&&!(this.readonly||this.readOnly)&&c.default,this.invalid&&c.invalid,this.disabled&&c.disabled,(this.readonly||this.readOnly)&&c.readOnly])}get#b(){return S([O.base,this.invalid?O.colorInvalid:O.color])}get#u(){return S([c.chevron,this.disabled&&c.chevronDisabled])}get#l(){return"select_id"}get#i(){return this.hint?`${this.#l}__hint`:void 0}onChange(e){const t=e.currentTarget.value;e.stopPropagation(),this._setValue(t),this.#e(t),this.dispatchEvent(new CustomEvent("change",{detail:t}))}render(){return d`<div class="${c.wrapper}">
      ${$(this.label,()=>d`<label class="${B.base}" for="${this.#l}">
            ${this.label}
            ${$(this.optional,()=>d`<span class="${B.optional}"
                  >${z._({id:"select.label.optional",message:"(optional)",comment:"Shown behind label when marked as optional"})}</span
                >`)}</label
          >`)}
      <div class="${c.selectWrapper}">
        <select
          class="${this.#p}"
          id="${this.#l}"
          ?disabled=${this.disabled}
          aria-readonly="${this.readonly}"
          aria-describedby="${k(this.#i)}"
          aria-invalid="${k(this.invalid)}"
          aria-errormessage="${k(this.invalid&&this.#i)}"
          @keydown=${this.handleKeyDown}
          @change=${this.onChange}>
          ${this._options}
        </select>
        <div class="${this.#u}">
          <w-icon name="ChevronDown" size="small" locale="${R()}" class="flex"></w-icon>
        </div>
      </div>
      ${$(this.helpText||this.always||this.invalid,()=>d`<div id="${this.#i}" class="${this.#b}">${this.helpText||this.hint}</div>`)}
    </div>`}}a([s({attribute:"auto-focus",type:Boolean,reflect:!0})],o.prototype,"autoFocus");a([s({type:Boolean,reflect:!0})],o.prototype,"autofocus");a([s({attribute:"help-text",reflect:!0})],o.prototype,"helpText");a([s({type:Boolean,reflect:!0})],o.prototype,"invalid");a([s({type:Boolean,reflect:!0})],o.prototype,"always");a([s({reflect:!0})],o.prototype,"hint");a([s({reflect:!0})],o.prototype,"label");a([s({type:Boolean,reflect:!0})],o.prototype,"optional");a([s({type:Boolean,reflect:!0})],o.prototype,"disabled");a([s({attribute:"read-only",type:Boolean,reflect:!0})],o.prototype,"readOnly");a([s({type:Boolean,reflect:!0})],o.prototype,"readonly");a([s({attribute:!1,state:!0})],o.prototype,"_options");a([s({reflect:!0})],o.prototype,"name");a([s({reflect:!0})],o.prototype,"value");customElements.get("w-select")||customElements.define("w-select",o);const{events:Y,args:q,argTypes:M}=T("w-select"),U={title:"Forms/Select",render(n){return d`
      <w-select ${y(x(n))}>
        <option value="raspberries">Raspberries</option>
        <option value="strawberries" selected>Strawberries</option>
        <option value="cloudberries">Cloudberries</option>
      </w-select>
    `},args:q,argTypes:M,parameters:{actions:{handles:Y}}},b={args:{label:"Berries"}},u={args:{label:"Berries","help-text":"We assume this is your jam preference"}},h={args:{label:"Berries",invalid:!0,"help-text":"Wrong choice"}},v={args:{label:"Berries",disabled:!0}},f={args:{label:"Berries","read-only":!0}},g={render(n){return d`
      <div style="display: flex; flex-direction: column; gap: 32px;">
        <w-select ${y(x(n))} aria-label="Your selection is berry nice!">
          <option value="raspberries">Raspberries</option>
          <option value="strawberries" selected>Strawberries</option>
          <option value="cloudberries">Cloudberries</option>
        </w-select>

        <label id="select-label" htmlFor="warp-aria-labelledby-example">
          You're berry good at selecting!
        </label>
        <w-select ${y(x(n))} id="warp-aria-labelledby-example">
          <option value="raspberries">Raspberries</option>
          <option value="strawberries" selected>Strawberries</option>
          <option value="cloudberries">Cloudberries</option>
        </w-select>
      </div>
    `}},m={args:{label:"Berries",optional:!0}},w={args:{label:"Berries"},render(n){return d`
      <w-select ${y(x(n))}>
        <option value="">Select an option</option>
        <option value="raspberries">Raspberries</option>
        <option value="strawberries">Strawberries</option>
        <option value="cloudberries">Cloudberries</option>
      </w-select>
    `}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Berries'
  }
}`,...b.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Berries',
    'help-text': 'We assume this is your jam preference'
  }
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Berries',
    invalid: true,
    'help-text': 'Wrong choice'
  }
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Berries',
    disabled: true
  }
}`,...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Berries',
    'read-only': true
  }
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render(args) {
    return html\`
      <div style="display: flex; flex-direction: column; gap: 32px;">
        <w-select \${spread(prespread(args))} aria-label="Your selection is berry nice!">
          <option value="raspberries">Raspberries</option>
          <option value="strawberries" selected>Strawberries</option>
          <option value="cloudberries">Cloudberries</option>
        </w-select>

        <label id="select-label" htmlFor="warp-aria-labelledby-example">
          You're berry good at selecting!
        </label>
        <w-select \${spread(prespread(args))} id="warp-aria-labelledby-example">
          <option value="raspberries">Raspberries</option>
          <option value="strawberries" selected>Strawberries</option>
          <option value="cloudberries">Cloudberries</option>
        </w-select>
      </div>
    \`;
  }
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Berries',
    optional: true
  }
}`,...m.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Berries'
  },
  render(args) {
    return html\`
      <w-select \${spread(prespread(args))}>
        <option value="">Select an option</option>
        <option value="raspberries">Raspberries</option>
        <option value="strawberries">Strawberries</option>
        <option value="cloudberries">Cloudberries</option>
      </w-select>
    \`;
  }
}`,...w.parameters?.docs?.source}}};const K=["Default","HelpText","Invalid","Disabled","ReadOnly","NoLabel","Optional","Placeholder"],ee=Object.freeze(Object.defineProperty({__proto__:null,Default:b,Disabled:v,HelpText:u,Invalid:h,NoLabel:g,Optional:m,Placeholder:w,ReadOnly:f,__namedExportsOrder:K,default:U},Symbol.toStringTag,{value:"Module"}));export{b as D,u as H,h as I,g as N,m as O,w as P,f as R,ee as S,v as a};
