import{a as O,i as D,v as R,r as A,b as c,j as S,x as k,d as T,l as F,n as o,g as L}from"./iframe-7efHSNY5.js";import{s as y,p as x}from"./utilities-waIjOQTh.js";import{o as C}from"./if-defined-DaXzGl0q.js";import{F as I}from"./FormControlMixin-DJnJZbro.js";const W=JSON.parse('{"select.label.optional":["(valgfrit)"]}'),j=JSON.parse('{"select.label.optional":["(optional)"]}'),P=JSON.parse('{"select.label.optional":["(vapaaehtoinen)"]}'),E=JSON.parse('{"select.label.optional":["(valgfritt)"]}'),H=JSON.parse('{"select.label.optional":["(valfritt)"]}'),J=O`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.focus\\:\\[--w-outline-offset\\:-2px\\]:focus{--w-outline-offset:-2px}.bg-transparent{background-color:#0000}.appearance-none{-webkit-appearance:none;appearance:none}.border-0{border-width:0}.border-1{border-width:1px}.rounded-4{border-radius:4px}.caret-current{caret-color:currentColor}.opacity-25{opacity:.25}.block,.before\\:block:before{display:block}.before\\:hidden:before{display:none}.focusable:focus{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:focus-visible{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:not(:focus-visible){outline:none}.outline-\\[--w-s-color-border-negative\\]\\!{outline-color:var(--w-s-color-border-negative)!important}.bottom-0{bottom:0}.right-0{right:0}.before\\:bottom-0:before{bottom:0}.before\\:right-0:before{right:0}.top-\\[30\\%\\]{top:30%}.absolute{position:absolute}.relative{position:relative}.static{position:static}.before\\:absolute:before{position:absolute}.s-bg{background-color:var(--w-s-color-background)}.s-bg-disabled-subtle{background-color:var(--w-s-color-background-disabled-subtle)}.s-text{color:var(--w-s-color-text)}.s-text-disabled{color:var(--w-s-color-text-disabled)}.s-text-negative{color:var(--w-s-color-text-negative)}.s-text-subtle{color:var(--w-s-color-text-subtle)}.s-icon{color:var(--w-s-color-icon)}.s-border-disabled{border-color:var(--w-s-color-border-disabled)}.s-border-negative{border-color:var(--w-s-color-border-negative)}.s-border-strong{border-color:var(--w-s-color-border-strong)}.hover\\:s-border-disabled:hover{border-color:var(--w-s-color-border-disabled)}.hover\\:s-border-negative-hover:hover{border-color:var(--w-s-color-border-negative-hover)}.hover\\:s-border-strong-hover:hover{border-color:var(--w-s-color-border-strong-hover)}.active\\:s-border-active:active{border-color:var(--w-s-color-border-active)}.active\\:s-border-disabled:active{border-color:var(--w-s-color-border-disabled)}.h-full{height:100%}.w-32{width:3.2rem}.w-full{width:100%}.before\\:h-full:before{height:100%}.before\\:w-32:before{width:3.2rem}.mb-0{margin-bottom:0}.mt-4{margin-top:.4rem}.py-12{padding-top:1.2rem;padding-bottom:1.2rem}.pb-4{padding-bottom:.4rem}.pl-0{padding-left:0}.pl-8{padding-left:.8rem}.pr-32{padding-right:3.2rem}.cursor-pointer{cursor:pointer}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-smoothing:grayscale}.font-bold{font-weight:700}.font-normal{font-weight:400}.pointer-events-none,.before\\:pointer-events-none:before{pointer-events:none}.text-m{font-size:var(--w-font-size-m);line-height:var(--w-line-height-m)}.text-s{font-size:var(--w-font-size-s);line-height:var(--w-line-height-s)}.text-xs{font-size:var(--w-font-size-xs);line-height:var(--w-line-height-xs)}`;var V=Object.defineProperty,t=(l,e,d,i)=>{for(var a=void 0,s=l.length-1,p;s>=0;s--)(p=l[s])&&(a=p(e,d,a)||a);return a&&V(e,d,a),a};const n={base:"block text-m mb-0 py-12 pr-32 rounded-4 w-full focusable focus:[--w-outline-offset:-2px] appearance-none cursor-pointer caret-current",default:"s-text s-bg pl-8 border-1 s-border-strong hover:s-border-strong-hover active:s-border-active",disabled:"s-text-disabled s-bg-disabled-subtle pl-8 border-1 s-border-disabled hover:s-border-disabled active:s-border-disabled pointer-events-none",invalid:"s-text s-bg pl-8 border-1 s-border-negative hover:s-border-negative-hover active:s-border-active outline-[--w-s-color-border-negative]!",readOnly:"s-text bg-transparent pl-0 border-0 pointer-events-none before:hidden",wrapper:"relative",selectWrapper:"relative before:block before:absolute before:right-0 before:bottom-0 before:w-32 before:h-full before:pointer-events-none ",chevron:"block absolute top-[30%] right-0 bottom-0 w-32 h-full s-icon pointer-events-none cursor-pointer",chevronDisabled:"opacity-25"},_={base:"antialiased block relative text-s font-bold pb-4 cursor-pointer s-text",optional:"pl-8 font-normal text-s s-text-subtle"},B={base:"text-xs mt-4 block",color:"s-text-subtle",colorInvalid:"s-text-negative"};class r extends I(D){constructor(){super(),this.#e=null,this._setValue=e=>{this.value=e,this.setValue(e)},R(j,E,P,W,H)}#e;static{this.styles=[A,J,O`
    /* if there is an option with an empty value and it is selected */
    select:has(option[value=""][selected]),
    /* if there is an option with an empty value, and no other options are selected */
    select:has(option[value=""]):not(:has(option[selected])) {
      color: var(--w-s-color-text-placeholder);
    }
  `]}resetFormControl(){this.value=this.#e}connectedCallback(){super.connectedCallback(),this.#e=this.value,(this.autofocus||this.autoFocus)&&this.shadowRoot.querySelector("select").focus();const d=Array.from(this.children).filter(i=>i.tagName.toLowerCase()==="option"||i.tagName.toLowerCase()==="w-option").map(i=>{const a=i.getAttribute("value")??"",s=i.textContent??"",p=i.hasAttribute("selected"),$=i.hasAttribute("disabled");return p&&this._setValue(a),c`<option value="${a}" ?selected=${p} ?disabled=${$}>${s}</option>`});this._options=d}handleKeyDown(e){(this.readonly||this.readOnly)&&(e.key===" "||e.key==="ArrowDown"||e.key==="ArrowUp")&&e.preventDefault()}get#t(){return S([n.base,!this.invalid&&!this.disabled&&!(this.readonly||this.readOnly)&&n.default,this.invalid&&n.invalid,this.disabled&&n.disabled,(this.readonly||this.readOnly)&&n.readOnly])}get#s(){return S([B.base,this.invalid?B.colorInvalid:B.color])}get#a(){return S([n.chevron,this.disabled&&n.chevronDisabled])}get#r(){return"select_id"}get#o(){return this.hint?`${this.#r}__hint`:void 0}onChange({target:e}){this._setValue(e.value);const d=new CustomEvent("change",{detail:e.value}),a=Array.from(this.children).filter(s=>s.tagName.toLowerCase()==="option"||s.tagName.toLowerCase()==="w-option").map(s=>{const p=s.getAttribute("value")??"",$=p===e.value,N=s.textContent??"",z=s.hasAttribute("disabled");return c`<option value="${p}" ?selected=${$} ?disabled=${z}>${N}</option>`});this._options=a,this.dispatchEvent(d)}render(){return c`<div class="${n.wrapper}">
      ${k(this.label,()=>c`<label class="${_.base}" for="${this.#r}">
            ${this.label}
            ${k(this.optional,()=>c`<span class="${_.optional}"
                  >${F._({id:"select.label.optional",message:"(optional)",comment:"Shown behind label when marked as optional"})}</span
                >`)}</label
          >`)}
      <div class="${n.selectWrapper}">
        <select
          class="${this.#t}"
          id="${this.#r}"
          ?disabled=${this.disabled}
          aria-readonly="${this.readonly}"
          aria-describedby="${C(this.#o)}"
          aria-invalid="${C(this.invalid)}"
          aria-errormessage="${C(this.invalid&&this.#o)}"
          @keydown=${this.handleKeyDown}
          @change=${this.onChange}>
          ${this._options}
        </select>
        <div class="${this.#a}">
          <w-icon name="ChevronDown" size="small" locale="${T()}" class="flex"></w-icon>
        </div>
      </div>
      ${k(this.helpText||this.always||this.invalid,()=>c`<div id="${this.#o}" class="${this.#s}">${this.helpText||this.hint}</div>`)}
    </div>`}}t([o({attribute:"auto-focus",type:Boolean,reflect:!0})],r.prototype,"autoFocus");t([o({type:Boolean,reflect:!0})],r.prototype,"autofocus");t([o({attribute:"help-text",reflect:!0})],r.prototype,"helpText");t([o({type:Boolean,reflect:!0})],r.prototype,"invalid");t([o({type:Boolean,reflect:!0})],r.prototype,"always");t([o({reflect:!0})],r.prototype,"hint");t([o({reflect:!0})],r.prototype,"label");t([o({type:Boolean,reflect:!0})],r.prototype,"optional");t([o({type:Boolean,reflect:!0})],r.prototype,"disabled");t([o({attribute:"read-only",type:Boolean,reflect:!0})],r.prototype,"readOnly");t([o({type:Boolean,reflect:!0})],r.prototype,"readonly");t([o({attribute:!1,state:!0})],r.prototype,"_options");t([o({reflect:!0})],r.prototype,"name");t([o({reflect:!0})],r.prototype,"value");customElements.get("w-select")||customElements.define("w-select",r);const{events:Y,args:K,argTypes:M}=L("w-select"),q={title:"Forms/Select",render(l){return c`
      <w-select ${y(x(l))}>
        <option value="raspberries">Raspberries</option>
        <option value="strawberries" selected>Strawberries</option>
        <option value="cloudberries">Cloudberries</option>
      </w-select>
    `},args:K,argTypes:M,parameters:{actions:{handles:Y}}},b={args:{label:"Berries"}},u={args:{label:"Berries","help-text":"We assume this is your jam preference"}},v={args:{label:"Berries",invalid:!0,"help-text":"Wrong choice"}},h={args:{label:"Berries",disabled:!0}},f={args:{label:"Berries","read-only":!0}},g={render(l){return c`
      <div style="display: flex; flex-direction: column; gap: 32px;">
        <w-select ${y(x(l))} aria-label="Your selection is berry nice!">
          <option value="raspberries">Raspberries</option>
          <option value="strawberries" selected>Strawberries</option>
          <option value="cloudberries">Cloudberries</option>
        </w-select>

        <label id="select-label" htmlFor="warp-aria-labelledby-example">
          You're berry good at selecting!
        </label>
        <w-select ${y(x(l))} id="warp-aria-labelledby-example">
          <option value="raspberries">Raspberries</option>
          <option value="strawberries" selected>Strawberries</option>
          <option value="cloudberries">Cloudberries</option>
        </w-select>
      </div>
    `}},m={args:{label:"Berries",optional:!0}},w={args:{label:"Berries"},render(l){return c`
      <w-select ${y(x(l))}>
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
}`,...u.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Berries',
    invalid: true,
    'help-text': 'Wrong choice'
  }
}`,...v.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Berries',
    disabled: true
  }
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};const U=["Default","HelpText","Invalid","Disabled","ReadOnly","NoLabel","Optional","Placeholder"],ee=Object.freeze(Object.defineProperty({__proto__:null,Default:b,Disabled:h,HelpText:u,Invalid:v,NoLabel:g,Optional:m,Placeholder:w,ReadOnly:f,__namedExportsOrder:U,default:q},Symbol.toStringTag,{value:"Module"}));export{b as D,u as H,v as I,g as N,m as O,w as P,f as R,ee as S,h as a};
