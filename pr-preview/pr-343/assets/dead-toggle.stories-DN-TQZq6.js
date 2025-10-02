import{i as p,x as l,r as h,a as g,n as i,g as v}from"./iframe-DH82sNiT.js";import{s as m,p as u}from"./utilities-BZsCxbZk.js";import{e as b}from"./class-map-C-U2BKey.js";var k=Object.defineProperty,s=(r,a,c,D)=>{for(var e=void 0,d=r.length-1,n;d>=0;d--)(n=r[d])&&(e=n(a,c,e)||e);return e&&k(a,c,e),e};class o extends p{constructor(){super(...arguments),this.type="radio",this.checked=!1,this.indeterminate=!1,this.invalid=!1}get indeterminateMarker(){return!this.checked&&this.indeterminate?"–":""}render(){const a=b({checkbox:this.type==="checkbox",radio:this.type==="radio",checked:this.checked});return l` <div class="${a}">${this.indeterminateMarker}</div> `}static{this.styles=[h,g`
      div {
        display: block;
        border-width: 1px;
        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;
        cursor: pointer;
        appearance: none;
        user-select: none;
        flex-shrink: 0;
        height: 2rem;
        width: 2rem;
        background-color: var(--w-s-color-background);
        border-color: var(--w-s-color-border);
        color: var(--w-s-color-icon-inverted);
        font-weight: 700;
        text-align: center;
        line-height: var(--w-line-height-xs);
        font-size: var(--w-font-size-m);
      }
      :host([type='checkbox']) div {
        border-radius: 2px;
      }
      :host([type='checkbox'][checked]) div,
      :host([type='checkbox'][indeterminate]) div {
        background-color: var(--w-s-color-background-primary);
        border-color: var(--w-s-color-border-primary);
      }
      :host([type='checkbox'][checked]) div {
        background-image: var(--w-icon-toggle-checked);
      }
      :host([type='radio']) div {
        border-radius: 50%;
      }
      :host([type='radio'][checked]) div {
        border-color: var(--w-s-color-border-selected);
        border-width: 0.6rem;
      }
      :host([invalid]) div {
        border-color: var(--w-s-color-border-negative) !important;
      }
      :host([type='checkbox'][invalid][checked]) div,
      :host([type='checkbox'][invalid][indeterminate]) div {
        background-color: var(--w-s-color-background-negative);
      }
    `]}}s([i({type:String})],o.prototype,"type");s([i({type:Boolean,reflect:!0})],o.prototype,"checked");s([i({type:Boolean,reflect:!0})],o.prototype,"indeterminate");s([i({type:Boolean,reflect:!0})],o.prototype,"invalid");customElements.get("w-dead-toggle")||customElements.define("w-dead-toggle",o);const{events:y,args:f,argTypes:w}=v("w-dead-toggle"),x={title:"Forms/Dead toggle",render(r){return l`<w-dead-toggle ${m(u(r))}></w-dead-toggle>`},args:f,argTypes:w,parameters:{actions:{handles:y}}},t={args:{}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...t.parameters?.docs?.source}}};const _=["Default"],T=Object.freeze(Object.defineProperty({__proto__:null,Default:t,__namedExportsOrder:_,default:x},Symbol.toStringTag,{value:"Module"}));export{T as D};
