import{r as x,n as u,t as w}from"./styles-Dxp8llA4.js";import{a as k,i as y,x as s}from"./iframe-CenlcFCF.js";import{r as f}from"./index.m-DF_LekKB.js";import{i as S}from"./index-DaqRszEa.js";import{o as E}from"./if-defined-RWXx2HGU.js";import{a as $}from"./i18n-B0gjlOVs.js";import"./preload-helper-CmsKOCeN.js";const C=JSON.parse('{"card.button.text":["Vælg"]}'),_=JSON.parse('{"card.button.text":["Select"]}'),O=JSON.parse('{"card.button.text":["Valitse"]}'),N=JSON.parse('{"card.button.text":["Velg"]}'),T=JSON.parse('{"card.button.text":["Välj"]}'),z=k`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.border-2{border-width:2px}.border-transparent{border-color:#0000}.rounded-4{border-radius:4px}.rounded-8{border-radius:8px}.block{display:block}.overflow-hidden{overflow:hidden}.outline{outline-style:solid}.inset-0{top:0;bottom:0;left:0;right:0}.absolute{position:absolute}.relative{position:relative}.static{position:static}.\\!s-bg-selected{background-color:var(--w-s-color-background-selected)!important}.s-bg{background-color:var(--w-s-color-background)}.s-bg-selected{background-color:var(--w-s-color-background-selected)}.\\!hover\\:s-bg-selected-hover:hover{background-color:var(--w-s-color-background-selected-hover)!important}.hover\\:s-bg-hover:hover{background-color:var(--w-s-color-background-hover)}.hover\\:s-bg-selected-hover:hover{background-color:var(--w-s-color-background-selected-hover)}.\\!active\\:s-bg-selected-active:active{background-color:var(--w-s-color-background-selected-active)!important}.active\\:s-bg-active:active{background-color:var(--w-s-color-background-active)}.active\\:s-bg-selected-active:active{background-color:var(--w-s-color-background-selected-active)}.s-border{border-color:var(--w-s-color-border)}.s-border-selected{border-color:var(--w-s-color-border-selected)}.group:hover .group-hover\\:s-border-selected-hover{border-color:var(--w-s-color-border-selected-hover)}.hover\\:s-border-hover:hover{border-color:var(--w-s-color-border-hover)}.hover\\:s-border-selected-hover:hover{border-color:var(--w-s-color-border-selected-hover)}.active\\:s-border-active:active{border-color:var(--w-s-color-border-active)}.active\\:s-border-selected-active:active{border-color:var(--w-s-color-border-selected-active)}.group:active .group-active\\:s-border-active{border-color:var(--w-s-color-border-active)}.group:active .group-active\\:s-border-selected-active{border-color:var(--w-s-color-border-selected-active)}.s-surface-elevated-200{background-color:var(--w-s-color-surface-elevated-200);box-shadow:var(--w-s-shadow-surface-elevated-200)}.hover\\:s-surface-elevated-200-hover:hover{background-color:var(--w-s-color-surface-elevated-200-hover);box-shadow:var(--w-s-shadow-surface-elevated-200-hover)}.active\\:s-surface-elevated-200-active:active{background-color:var(--w-s-color-surface-elevated-200-active);box-shadow:var(--w-s-shadow-surface-elevated-200-active)}.cursor-pointer{cursor:pointer}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.transition-all{transition-property:all;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}`;var B=Object.defineProperty,g=(t,e,a,j)=>{for(var o=void 0,b=t.length-1,h;b>=0;b--)(h=t[b])&&(o=h(e,a,o)||o);return o&&B(e,a,o),o};const r={base:"cursor-pointer overflow-hidden relative transition-all",shadow:"group rounded-8 s-surface-elevated-200 hover:s-surface-elevated-200-hover active:s-surface-elevated-200-active",selected:"!s-bg-selected !hover:s-bg-selected-hover !active:s-bg-selected-active",outline:"absolute border-2 rounded-8 inset-0 transition-all",outlineUnselected:"border-transparent group-active:s-border-active",outlineSelected:"s-border-selected group-hover:s-border-selected-hover group-active:s-border-selected-active",flat:"border-2 rounded-4",flatUnselected:"s-bg hover:s-bg-hover active:s-bg-active s-border hover:s-border-hover active:s-border-active",flatSelected:"s-bg-selected hover:s-bg-selected-hover active:s-bg-selected-active s-border-selected hover:s-border-selected-hover active:s-border-selected-active",a11y:"sr-only"},m={ENTER:"Enter",SPACE:" "};class v extends y{constructor(){super(),this.selected=!1,this.flat=!1,this.clickable=!1,$(_,N,O,C,T),this.buttonText=S._({id:"card.button.text",message:"Select",comment:"Screenreader message to indicate that the card is clickable"})}static{this.styles=[x,z,k`
      a::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      }
      :host {
        display: block;
      }
    `]}get _containerClasses(){return f([r.base,this.flat?r.flat:r.shadow,this.selected&&!this.flat&&r.selected,this.selected&&this.flat?r.flatSelected:r.flatUnselected])}get _outlineClasses(){return f([r.outline,this.selected?r.outlineSelected:r.outlineUnselected])}get _interactiveElement(){const e=()=>s`<button class="${r.a11y}" aria-pressed="${this.selected}" tabindex="-1">${this.buttonText}</button>`,a=()=>s`<span role="checkbox" aria-checked="true" aria-disabled="true"></span>`;return this.clickable?e():this.selected?a():""}keypressed(e){!this.clickable||e.altKey||e.ctrlKey||(e.key===m.ENTER||e.key===m.SPACE)&&(e.preventDefault(),this.click())}render(){return s`
      <div tabindex=${E(this.clickable?"0":void 0)} class="${this._containerClasses}" @keydown=${this.keypressed}>
        ${this._interactiveElement} ${this.flat?"":s`<div class="${this._outlineClasses}"></div>`}
        <slot></slot>
      </div>
    `}}g([u({type:Boolean,reflect:!0})],v.prototype,"selected");g([u({type:Boolean})],v.prototype,"flat");g([u({type:Boolean})],v.prototype,"clickable");customElements.get("w-card")||customElements.define("w-card",v);const K={title:"Navigation/Card",component:"w-card",render(t){return`
      <w-card ${w(t)}>
        <div style="padding: 16px;">
          <h3>Card Title</h3>
          <p>This is card content with some example text.</p>
        </div>
      </w-card>
    `},argTypes:{selected:{type:"boolean",description:"Whether the card appears selected"},flat:{type:"boolean",description:"Flat styling without shadow"},clickable:{type:"boolean",description:"Makes the card interactive and focusable"}}},c={args:{selected:!1,flat:!1,clickable:!1}},l={args:{selected:!0,flat:!1,clickable:!1}},d={args:{selected:!1,flat:!0,clickable:!1}},i={args:{selected:!0,flat:!0,clickable:!1}},n={args:{selected:!1,flat:!1,clickable:!0}},p={args:{selected:!1,flat:!1,clickable:!0},render(t){return`
      <w-card ${w(t)} style="max-width: 300px;">
        <img style="width: 100%; height: 200px; object-fit: cover;" src="https://source.unsplash.com/300x200" alt="Example image" />
        <div style="padding: 16px;">
          <p style="font-size: 12px; color: #666; margin: 0 0 8px 0;">DNB Eiendom</p>
          <p style="margin: 0 0 8px 0;">Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019.</p>
          <p style="font-size: 14px; color: #666; margin: 0 0 8px 0;">Bøgata 25C, 0655 Oslo</p>
          <p style="font-weight: bold; margin: 0;">52 m² Totalpris: 4 869 039 kr</p>
        </div>
      </w-card>
    `}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    selected: false,
    flat: false,
    clickable: false
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    selected: true,
    flat: false,
    clickable: false
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    selected: false,
    flat: true,
    clickable: false
  }
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    selected: true,
    flat: true,
    clickable: false
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    selected: false,
    flat: false,
    clickable: true
  }
}`,...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    selected: false,
    flat: false,
    clickable: true
  },
  render(args) {
    return \`
      <w-card \${toAttributeString(args)} style="max-width: 300px;">
        <img style="width: 100%; height: 200px; object-fit: cover;" src="https://source.unsplash.com/300x200" alt="Example image" />
        <div style="padding: 16px;">
          <p style="font-size: 12px; color: #666; margin: 0 0 8px 0;">DNB Eiendom</p>
          <p style="margin: 0 0 8px 0;">Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019.</p>
          <p style="font-size: 14px; color: #666; margin: 0 0 8px 0;">Bøgata 25C, 0655 Oslo</p>
          <p style="font-weight: bold; margin: 0;">52 m² Totalpris: 4 869 039 kr</p>
        </div>
      </w-card>
    \`;
  }
}`,...p.parameters?.docs?.source}}};const R=["Default","Selected","Flat","FlatSelected","Clickable","PropertyExample"];export{n as Clickable,c as Default,d as Flat,i as FlatSelected,p as PropertyExample,l as Selected,R as __namedExportsOrder,K as default};
