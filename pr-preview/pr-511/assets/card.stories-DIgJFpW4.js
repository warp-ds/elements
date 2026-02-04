import{a as w,i as y,v as S,l as E,r as C,j as f,b as a,n as u,g as _}from"./iframe-D49lx5Fg.js";import{s as k,p as x}from"./utilities-CPWCgPIK.js";import{o as $}from"./if-defined-CojxuyDn.js";const O=JSON.parse('{"card.button.text":["Vælg"]}'),N=JSON.parse('{"card.button.text":["Select"]}'),T=JSON.parse('{"card.button.text":["Valitse"]}'),j=JSON.parse('{"card.button.text":["Velg"]}'),z=JSON.parse('{"card.button.text":["Välj"]}'),B=w`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.border-2{border-width:2px}.border-transparent{border-color:#0000}.rounded-4{border-radius:4px}.rounded-8{border-radius:8px}.block{display:block}.overflow-hidden{overflow:hidden}.outline{outline-style:solid}.inset-0{top:0;bottom:0;left:0;right:0}.absolute{position:absolute}.relative{position:relative}.static{position:static}.\\!s-bg-selected{background-color:var(--w-s-color-background-selected)!important}.s-bg{background-color:var(--w-s-color-background)}.s-bg-selected{background-color:var(--w-s-color-background-selected)}.\\!hover\\:s-bg-selected-hover:hover{background-color:var(--w-s-color-background-selected-hover)!important}.hover\\:s-bg-hover:hover{background-color:var(--w-s-color-background-hover)}.hover\\:s-bg-selected-hover:hover{background-color:var(--w-s-color-background-selected-hover)}.\\!active\\:s-bg-selected-active:active{background-color:var(--w-s-color-background-selected-active)!important}.active\\:s-bg-active:active{background-color:var(--w-s-color-background-active)}.active\\:s-bg-selected-active:active{background-color:var(--w-s-color-background-selected-active)}.s-border{border-color:var(--w-s-color-border)}.s-border-selected{border-color:var(--w-s-color-border-selected)}.group:hover .group-hover\\:s-border-selected-hover{border-color:var(--w-s-color-border-selected-hover)}.hover\\:s-border-hover:hover{border-color:var(--w-s-color-border-hover)}.hover\\:s-border-selected-hover:hover{border-color:var(--w-s-color-border-selected-hover)}.active\\:s-border-active:active{border-color:var(--w-s-color-border-active)}.active\\:s-border-selected-active:active{border-color:var(--w-s-color-border-selected-active)}.group:active .group-active\\:s-border-active{border-color:var(--w-s-color-border-active)}.group:active .group-active\\:s-border-selected-active{border-color:var(--w-s-color-border-selected-active)}.s-surface-elevated-200{background-color:var(--w-s-color-surface-elevated-200);box-shadow:var(--w-s-shadow-surface-elevated-200)}.hover\\:s-surface-elevated-200-hover:hover{background-color:var(--w-s-color-surface-elevated-200-hover);box-shadow:var(--w-s-shadow-surface-elevated-200-hover)}.active\\:s-surface-elevated-200-active:active{background-color:var(--w-s-color-surface-elevated-200-active);box-shadow:var(--w-s-shadow-surface-elevated-200-active)}.cursor-pointer{cursor:pointer}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.transition-all{transition-property:all;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}`;var P=Object.defineProperty,g=(t,e,v,A)=>{for(var s=void 0,b=t.length-1,h;b>=0;b--)(h=t[b])&&(s=h(e,v,s)||s);return s&&P(e,v,s),s};const r={base:"cursor-pointer overflow-hidden relative transition-all",shadow:"group rounded-8 s-surface-elevated-200 hover:s-surface-elevated-200-hover active:s-surface-elevated-200-active",selected:"!s-bg-selected !hover:s-bg-selected-hover !active:s-bg-selected-active",outline:"absolute border-2 rounded-8 inset-0 transition-all",outlineUnselected:"border-transparent group-active:s-border-active",outlineSelected:"s-border-selected group-hover:s-border-selected-hover group-active:s-border-selected-active",flat:"border-2 rounded-4",flatUnselected:"s-bg hover:s-bg-hover active:s-bg-active s-border hover:s-border-hover active:s-border-active",flatSelected:"s-bg-selected hover:s-bg-selected-hover active:s-bg-selected-active s-border-selected hover:s-border-selected-hover active:s-border-selected-active",a11y:"sr-only"},m={ENTER:"Enter",SPACE:" "};class p extends y{constructor(){super(),this.selected=!1,this.flat=!1,this.clickable=!1,S(N,j,T,O,z),this.buttonText=E._({id:"card.button.text",message:"Select",comment:"Screenreader message to indicate that the card is clickable"})}static{this.styles=[C,B,w`
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
    `]}get _containerClasses(){return f([r.base,this.flat?r.flat:r.shadow,this.selected&&!this.flat&&r.selected,this.selected&&this.flat?r.flatSelected:r.flatUnselected])}get _outlineClasses(){return f([r.outline,this.selected?r.outlineSelected:r.outlineUnselected])}get _interactiveElement(){const e=()=>a`<button class="${r.a11y}" aria-pressed="${this.selected}" tabindex="-1">${this.buttonText}</button>`,v=()=>a`<span role="checkbox" aria-checked="true" aria-disabled="true"></span>`;return this.clickable?e():this.selected?v():""}keypressed(e){!this.clickable||e.altKey||e.ctrlKey||(e.key===m.ENTER||e.key===m.SPACE)&&(e.preventDefault(),this.click())}render(){return a`
      <div tabindex=${$(this.clickable?"0":void 0)} class="${this._containerClasses}" @keydown=${this.keypressed}>
        ${this._interactiveElement} ${this.flat?"":a`<div class="${this._outlineClasses}"></div>`}
        <slot></slot>
      </div>
    `}}g([u({type:Boolean,reflect:!0})],p.prototype,"selected");g([u({type:Boolean})],p.prototype,"flat");g([u({type:Boolean})],p.prototype,"clickable");customElements.get("w-card")||customElements.define("w-card",p);const{events:D,args:F,argTypes:J}=_("w-card"),U={title:"Navigation/Card",render(t){return a`
      <w-card ${k(x(t))}>
        <div style="padding: 16px;">
          <h3>Card Title</h3>
          <p>This is card content with some example text.</p>
        </div>
      </w-card>
    `},args:F,argTypes:J,parameters:{actions:{handles:D}}},o={args:{selected:!1,flat:!1,clickable:!1}},c={args:{selected:!0,flat:!1,clickable:!1}},l={args:{selected:!1,flat:!0,clickable:!1}},d={args:{selected:!0,flat:!0,clickable:!1}},i={args:{selected:!1,flat:!1,clickable:!0}},n={args:{selected:!1,flat:!1,clickable:!0},render(t){return a`
      <w-card ${k(x(t))} style="max-width: 300px;">
        <img style="width: 100%; height: 200px; object-fit: cover;" src="https://unsplash.it/300/200?random" alt="Example image" />
        <div style="padding: 16px;">
          <p style="font-size: 12px; color: #666; margin: 0 0 8px 0;">DNB Eiendom</p>
          <p style="margin: 0 0 8px 0;">Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019.</p>
          <p style="font-size: 14px; color: #666; margin: 0 0 8px 0;">Bøgata 25C, 0655 Oslo</p>
          <p style="font-weight: bold; margin: 0;">52 m² Totalpris: 4 869 039 kr</p>
        </div>
      </w-card>
    `}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    selected: false,
    flat: false,
    clickable: false
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    selected: true,
    flat: false,
    clickable: false
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    selected: false,
    flat: true,
    clickable: false
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    selected: true,
    flat: true,
    clickable: false
  }
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    selected: false,
    flat: false,
    clickable: true
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    selected: false,
    flat: false,
    clickable: true
  },
  render(args) {
    return html\`
      <w-card \${spread(prespread(args))} style="max-width: 300px;">
        <img style="width: 100%; height: 200px; object-fit: cover;" src="https://unsplash.it/300/200?random" alt="Example image" />
        <div style="padding: 16px;">
          <p style="font-size: 12px; color: #666; margin: 0 0 8px 0;">DNB Eiendom</p>
          <p style="margin: 0 0 8px 0;">Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019.</p>
          <p style="font-size: 14px; color: #666; margin: 0 0 8px 0;">Bøgata 25C, 0655 Oslo</p>
          <p style="font-weight: bold; margin: 0;">52 m² Totalpris: 4 869 039 kr</p>
        </div>
      </w-card>
    \`;
  }
}`,...n.parameters?.docs?.source}}};const V=["Default","Selected","Flat","FlatSelected","Clickable","PropertyExample"],I=Object.freeze(Object.defineProperty({__proto__:null,Clickable:i,Default:o,Flat:l,FlatSelected:d,PropertyExample:n,Selected:c,__namedExportsOrder:V,default:U},Symbol.toStringTag,{value:"Module"}));export{I as C,o as D,l as F,n as P,c as S,d as a,i as b};
