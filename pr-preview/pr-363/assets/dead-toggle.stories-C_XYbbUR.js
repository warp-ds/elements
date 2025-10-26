import{i as f,x as g,r as y,n as i,g as v}from"./iframe-SyuKOQXd.js";import{s as k,p as S}from"./utilities-uZcDZWlx.js";import{t as b}from"./toggle-styles-Duq4GNJm.js";var _=Object.defineProperty,p=(e,m,u,I)=>{for(var r=void 0,l=e.length-1,h;l>=0;l--)(h=e[l])&&(r=h(m,u,r)||r);return r&&_(m,u,r),r};class t extends f{constructor(){super(...arguments),this.type="radio",this.checked=!1,this.indeterminate=!1,this.invalid=!1,this.disabled=!1}get indeterminateMarker(){return!this.checked&&this.indeterminate?"–":""}render(){return g` <div class="control">${this.indeterminateMarker}</div> `}static{this.styles=[y,b]}}p([i({type:String,reflect:!0})],t.prototype,"type");p([i({type:Boolean,reflect:!0})],t.prototype,"checked");p([i({type:Boolean,reflect:!0})],t.prototype,"indeterminate");p([i({type:Boolean,reflect:!0})],t.prototype,"invalid");p([i({type:Boolean,reflect:!0})],t.prototype,"disabled");customElements.get("w-dead-toggle")||customElements.define("w-dead-toggle",t);const{events:w,args:x,argTypes:C}=v("w-dead-toggle"),B={title:"Forms/Dead toggle",render(e){return g`<w-dead-toggle ${k(S(e))}></w-dead-toggle>`},args:x,argTypes:C,parameters:{actions:{handles:w}}},a={render(e){return g`<w-dead-toggle></w-dead-toggle>`}},s={args:{type:"radio"}},o={args:{type:"checkbox"}},n={args:{indeterminate:!0}},d={args:{checked:!0}},c={args:{invalid:!0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render(args) {
    return html\`<w-dead-toggle></w-dead-toggle>\`;
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'radio'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'checkbox'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    indeterminate: true
  }
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    invalid: true
  }
}`,...c.parameters?.docs?.source}}};const D=["Nothing","Radio","Checkbox","Indeterminate","Checked","Invalid"],E=Object.freeze(Object.defineProperty({__proto__:null,Checkbox:o,Checked:d,Indeterminate:n,Invalid:c,Nothing:a,Radio:s,__namedExportsOrder:D,default:B},Symbol.toStringTag,{value:"Module"}));export{E as D};
