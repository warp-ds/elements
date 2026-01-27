import{i as f,b as u,r as h,n as c,g as y}from"./iframe-BGeWIGj7.js";import{s as v,p as k}from"./utilities-B89Z5-ni.js";import{t as b}from"./toggle-styles-Bm2ejicw.js";var S=Object.defineProperty,i=(t,l,m,D)=>{for(var e=void 0,p=t.length-1,g;p>=0;p--)(g=t[p])&&(e=g(l,m,e)||e);return e&&S(l,m,e),e};class r extends f{constructor(){super(...arguments),this.type="radio",this.checked=!1,this.indeterminate=!1,this.invalid=!1,this.disabled=!1}get indeterminateMarker(){return!this.checked&&this.indeterminate?"–":""}render(){return u` <div class="control">${this.indeterminateMarker}</div> `}static{this.styles=[h,b]}}i([c({type:String,reflect:!0})],r.prototype,"type");i([c({type:Boolean,reflect:!0})],r.prototype,"checked");i([c({type:Boolean,reflect:!0})],r.prototype,"indeterminate");i([c({type:Boolean,reflect:!0})],r.prototype,"invalid");i([c({type:Boolean,reflect:!0})],r.prototype,"disabled");customElements.get("w-dead-toggle")||customElements.define("w-dead-toggle",r);const{events:_,args:x,argTypes:w}=y("w-dead-toggle"),C={title:"Forms/Dead toggle",render(t){return u`<w-dead-toggle ${v(k(t))}></w-dead-toggle>`},args:x,argTypes:w,parameters:{actions:{handles:_}}},a={args:{type:"radio"}},s={args:{type:"checkbox"}},o={args:{indeterminate:!0}},n={args:{checked:!0}},d={args:{invalid:!0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const B=["Radio","Checkbox","Indeterminate","Checked","Invalid"],j=Object.freeze(Object.defineProperty({__proto__:null,Checkbox:s,Checked:n,Indeterminate:o,Invalid:d,Radio:a,__namedExportsOrder:B,default:C},Symbol.toStringTag,{value:"Module"}));export{j as D};
