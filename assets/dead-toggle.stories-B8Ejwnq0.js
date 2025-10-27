import{i as u,x as m,r as v,a as b,n as d,g as k}from"./iframe-eRIJYyP-.js";import{s as y,p as f}from"./utilities-BxwXGKHc.js";import{e as x}from"./class-map-DOFdSYpI.js";var w=Object.defineProperty,l=(r,n,g,I)=>{for(var e=void 0,p=r.length-1,h;p>=0;p--)(h=r[p])&&(e=h(n,g,e)||e);return e&&w(n,g,e),e};class i extends u{constructor(){super(...arguments),this.type="radio",this.checked=!1,this.indeterminate=!1,this.invalid=!1}get indeterminateMarker(){return!this.checked&&this.indeterminate?"–":""}render(){const n=x({checkbox:this.type==="checkbox",radio:this.type==="radio",checked:this.checked});return m` <div class="${n}">${this.indeterminateMarker}</div> `}static{this.styles=[v,b`
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
    `]}}l([d({type:String,reflect:!0})],i.prototype,"type");l([d({type:Boolean,reflect:!0})],i.prototype,"checked");l([d({type:Boolean,reflect:!0})],i.prototype,"indeterminate");l([d({type:Boolean,reflect:!0})],i.prototype,"invalid");customElements.get("w-dead-toggle")||customElements.define("w-dead-toggle",i);const{events:S,args:_,argTypes:C}=k("w-dead-toggle"),z={title:"Forms/Dead toggle",render(r){return m`<w-dead-toggle ${y(f(r))}></w-dead-toggle>`},args:_,argTypes:C,parameters:{actions:{handles:S}}},t={args:{type:"radio"}},o={args:{type:"checkbox"}},a={args:{indeterminate:!0}},s={args:{checked:!0}},c={args:{invalid:!0}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'radio'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'checkbox'
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    indeterminate: true
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    invalid: true
  }
}`,...c.parameters?.docs?.source}}};const D=["Radio","Checkbox","Indeterminate","Checked","Invalid"],j=Object.freeze(Object.defineProperty({__proto__:null,Checkbox:o,Checked:s,Indeterminate:a,Invalid:c,Radio:t,__namedExportsOrder:D,default:z},Symbol.toStringTag,{value:"Module"}));export{j as D};
