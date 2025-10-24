import{i as f,x as l,r as y,n as i,g as v}from"./iframe-BQNlnchq.js";import{s as k,p as S}from"./utilities-C7XIwumM.js";import{t as _}from"./toggle-styles-D2cxFani.js";var b=Object.defineProperty,p=(e,m,u,O)=>{for(var r=void 0,g=e.length-1,h;g>=0;g--)(h=e[g])&&(r=h(m,u,r)||r);return r&&b(m,u,r),r};class c extends f{constructor(){super(...arguments),this.type="radio",this.checked=!1,this.indeterminate=!1,this.invalid=!1}get indeterminateMarker(){return!this.checked&&this.indeterminate?"–":""}render(){return l` <div class="control">${this.indeterminateMarker}</div> `}static{this.styles=[y,_]}}p([i({type:String,reflect:!0})],c.prototype,"type");p([i({type:Boolean,reflect:!0})],c.prototype,"checked");p([i({type:Boolean,reflect:!0})],c.prototype,"indeterminate");p([i({type:Boolean,reflect:!0})],c.prototype,"invalid");customElements.get("w-dead-toggle")||customElements.define("w-dead-toggle",c);const{events:w,args:x,argTypes:C}=v("w-dead-toggle"),D={title:"Forms/Dead toggle",render(e){return l`<w-dead-toggle ${k(S(e))}></w-dead-toggle>`},args:x,argTypes:C,parameters:{actions:{handles:w}}},t={render(e){return l`<w-dead-toggle></w-dead-toggle>`}},a={args:{type:"radio"}},s={args:{type:"checkbox"}},o={args:{indeterminate:!0}},n={args:{checked:!0}},d={args:{invalid:!0}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render(args) {
    return html\`<w-dead-toggle></w-dead-toggle>\`;
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'radio'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'checkbox'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    indeterminate: true
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true
  }
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    invalid: true
  }
}`,...d.parameters?.docs?.source}}};const I=["Nothing","Radio","Checkbox","Indeterminate","Checked","Invalid"],E=Object.freeze(Object.defineProperty({__proto__:null,Checkbox:s,Checked:n,Indeterminate:o,Invalid:d,Nothing:t,Radio:a,__namedExportsOrder:I,default:D},Symbol.toStringTag,{value:"Module"}));export{E as D};
