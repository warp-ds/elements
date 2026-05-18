import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{m as n,n as r,s as i,t as a}from"./lit-JruGAyH3.js";import{n as o,t as s}from"./dist-BZcjgT0h.js";import{n as c,t as l}from"./index.m-B95STiSX.js";import{n as u,o as d,r as f,t as p}from"./decorate-Dk3JVGAn.js";import{r as m,t as h}from"./i18n-CXvrc2gG.js";import{n as g,t as _}from"./styles-DphVJT09.js";import{a as v,o as y}from"./iframe-BP6Jvu1C.js";import{i as b,n as x,r as S,t as C}from"./utilities-3bRBgS0D.js";import{n as w,t as T}from"./if-defined-BruKJeYQ.js";var E,D=e((()=>{E=JSON.parse(`{"card.button.text":["Vælg"]}`)})),O,k=e((()=>{O=JSON.parse(`{"card.button.text":["Select"]}`)})),A,ee=e((()=>{A=JSON.parse(`{"card.button.text":["Valitse"]}`)})),j,M=e((()=>{j=JSON.parse(`{"card.button.text":["Velg"]}`)})),N,P=e((()=>{N=JSON.parse(`{"card.button.text":["Välj"]}`)})),F,I=e((()=>{a(),F=n`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.border-2{border-width:2px}.border-transparent{border-color:#0000}.rounded-4{border-radius:4px}.rounded-8{border-radius:8px}.block{display:block}.overflow-hidden{overflow:hidden}.outline{outline-style:solid}.inset-0{top:0;bottom:0;left:0;right:0}.absolute{position:absolute}.relative{position:relative}.static{position:static}.\\!s-bg-selected{background-color:var(--w-s-color-background-selected)!important}.s-bg{background-color:var(--w-s-color-background)}.s-bg-selected{background-color:var(--w-s-color-background-selected)}.\\!hover\\:s-bg-selected-hover:hover{background-color:var(--w-s-color-background-selected-hover)!important}.hover\\:s-bg-hover:hover{background-color:var(--w-s-color-background-hover)}.hover\\:s-bg-selected-hover:hover{background-color:var(--w-s-color-background-selected-hover)}.\\!active\\:s-bg-selected-active:active{background-color:var(--w-s-color-background-selected-active)!important}.active\\:s-bg-active:active{background-color:var(--w-s-color-background-active)}.active\\:s-bg-selected-active:active{background-color:var(--w-s-color-background-selected-active)}.s-border{border-color:var(--w-s-color-border)}.s-border-selected{border-color:var(--w-s-color-border-selected)}.group:hover .group-hover\\:s-border-selected-hover{border-color:var(--w-s-color-border-selected-hover)}.hover\\:s-border-hover:hover{border-color:var(--w-s-color-border-hover)}.hover\\:s-border-selected-hover:hover{border-color:var(--w-s-color-border-selected-hover)}.active\\:s-border-active:active{border-color:var(--w-s-color-border-active)}.active\\:s-border-selected-active:active{border-color:var(--w-s-color-border-selected-active)}.group:active .group-active\\:s-border-active{border-color:var(--w-s-color-border-active)}.group:active .group-active\\:s-border-selected-active{border-color:var(--w-s-color-border-selected-active)}.s-surface-elevated-200{background-color:var(--w-s-color-surface-elevated-200);box-shadow:var(--w-s-shadow-surface-elevated-200)}.hover\\:s-surface-elevated-200-hover:hover{background-color:var(--w-s-color-surface-elevated-200-hover);box-shadow:var(--w-s-shadow-surface-elevated-200-hover)}.active\\:s-surface-elevated-200-active:active{background-color:var(--w-s-color-surface-elevated-200-active);box-shadow:var(--w-s-shadow-surface-elevated-200-active)}.cursor-pointer{cursor:pointer}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.transition-all{transition-property:all;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}`})),L,R,z,B=e((()=>{l(),o(),a(),f(),T(),m(),_(),D(),k(),ee(),M(),P(),I(),u(),L={base:`cursor-pointer overflow-hidden relative transition-all`,shadow:`group rounded-8 s-surface-elevated-200 hover:s-surface-elevated-200-hover active:s-surface-elevated-200-active`,selected:`!s-bg-selected !hover:s-bg-selected-hover !active:s-bg-selected-active`,outline:`absolute border-2 rounded-8 inset-0 transition-all`,outlineUnselected:`border-transparent group-active:s-border-active`,outlineSelected:`s-border-selected group-hover:s-border-selected-hover group-active:s-border-selected-active`,flat:`border-2 rounded-4`,flatUnselected:`s-bg hover:s-bg-hover active:s-bg-active s-border hover:s-border-hover active:s-border-active`,flatSelected:`s-bg-selected hover:s-bg-selected-hover active:s-bg-selected-active s-border-selected hover:s-border-selected-hover active:s-border-selected-active`,a11y:`sr-only`},R={ENTER:`Enter`,SPACE:` `},z=class extends r{static{this.styles=[g,F,n`
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
    `]}constructor(){super(),this.selected=!1,this.flat=!1,this.clickable=!1,h(O,j,A,E,N),this.buttonText=s._({id:`card.button.text`,message:`Select`,comment:`Screenreader message to indicate that the card is clickable`})}get _containerClasses(){return c([L.base,this.flat?L.flat:L.shadow,this.selected&&!this.flat&&L.selected,this.selected&&this.flat?L.flatSelected:L.flatUnselected])}get _outlineClasses(){return c([L.outline,this.selected?L.outlineSelected:L.outlineUnselected])}get _interactiveElement(){return this.clickable?i`<button class="${L.a11y}" aria-pressed="${this.selected}" tabindex="-1">${this.buttonText}</button>`:this.selected?i`<span role="checkbox" aria-checked="true" aria-disabled="true"></span>`:``}keypressed(e){!this.clickable||e.altKey||e.ctrlKey||(e.key===R.ENTER||e.key===R.SPACE)&&(e.preventDefault(),this.click())}render(){return i`
      <div tabindex=${w(this.clickable?`0`:void 0)} class="${this._containerClasses}" @keydown=${this.keypressed}>
        ${this._interactiveElement} ${this.flat?``:i`<div class="${this._outlineClasses}"></div>`}
        <slot></slot>
      </div>
    `}},p([d({type:Boolean,reflect:!0})],z.prototype,`selected`,void 0),p([d({type:Boolean})],z.prototype,`flat`,void 0),p([d({type:Boolean})],z.prototype,`clickable`,void 0),customElements.get(`w-card`)||customElements.define(`w-card`,z)})),V=t({Clickable:()=>X,Default:()=>K,Flat:()=>J,FlatSelected:()=>Y,PropertyExample:()=>Z,Selected:()=>q,__namedExportsOrder:()=>Q,default:()=>G}),H,U,W,G,K,q,J,Y,X,Z,Q,$=e((()=>{S(),y(),a(),C(),B(),{events:H,args:U,argTypes:W}=v(`w-card`),G={title:`Navigation/Card`,render(e){return i`
      <w-card ${b(x(e))}>
        <div style="padding: 16px;">
          <h3>Card Title</h3>
          <p>This is card content with some example text.</p>
        </div>
      </w-card>
    `},args:U,argTypes:W,parameters:{actions:{handles:H}}},K={args:{selected:!1,flat:!1,clickable:!1}},q={args:{selected:!0,flat:!1,clickable:!1}},J={args:{selected:!1,flat:!0,clickable:!1}},Y={args:{selected:!0,flat:!0,clickable:!1}},X={args:{selected:!1,flat:!1,clickable:!0}},Z={args:{selected:!1,flat:!1,clickable:!0},render(e){return i`
      <w-card ${b(x(e))} style="max-width: 300px;">
        <img style="width: 100%; height: 200px; object-fit: cover;" src="https://unsplash.it/300/200?random" alt="Example image" />
        <div style="padding: 16px;">
          <p style="font-size: 12px; color: #666; margin: 0 0 8px 0;">DNB Eiendom</p>
          <p style="margin: 0 0 8px 0;">Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019.</p>
          <p style="font-size: 14px; color: #666; margin: 0 0 8px 0;">Bøgata 25C, 0655 Oslo</p>
          <p style="font-weight: bold; margin: 0;">52 m² Totalpris: 4 869 039 kr</p>
        </div>
      </w-card>
    `}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    selected: false,
    flat: false,
    clickable: false
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    selected: true,
    flat: false,
    clickable: false
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    selected: false,
    flat: true,
    clickable: false
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    selected: true,
    flat: true,
    clickable: false
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    selected: false,
    flat: false,
    clickable: true
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},Q=[`Default`,`Selected`,`Flat`,`FlatSelected`,`Clickable`,`PropertyExample`]}));$();export{X as Clickable,K as Default,J as Flat,Y as FlatSelected,Z as PropertyExample,q as Selected,Q as __namedExportsOrder,G as default,$ as n,V as t};