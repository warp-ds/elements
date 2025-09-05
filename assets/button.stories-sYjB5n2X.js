import{g as b,k as d}from"./iframe-7FmQs7QA.js";import{s as g,p as y}from"./utilities-i7JHUjbG.js";const{events:v,args:w,argTypes:f}=b("w-button"),S={title:"Buttons/Button",render(r){return d`<w-button ${g(y(r))}>Button Text</w-button>`},args:w,argTypes:f,parameters:{actions:{handles:v}}},t={args:{variant:"primary",type:"button"}},e={args:{variant:"secondary",type:"button"}},a={args:{variant:"negative",type:"button"}},n={args:{variant:"utility",type:"button"}},o={args:{variant:"link",type:"button"}},s={args:{variant:"pill",type:"button"},render(r){return d`<w-button ${g(y(r))}>💙</w-button>`}},u={args:{variant:"primary",small:!0,type:"button"}},i={args:{variant:"secondary",quiet:!0,type:"button"}},p={args:{variant:"primary",loading:!0,type:"button"}},m={args:{variant:"primary","full-width":!0,type:"button"},render(r){return d`
      <div class="w-full flex flex-col gap-8">
        <w-button ${g(y(r))}>Full width</w-button>
      </div>
    `}},c={args:{variant:"primary",href:"https://example.com",target:"_blank",type:"button"},render(r){return d`<w-button ${g(y(r))}>Visit Example</w-button>`}},l={args:{},render(){return d`
      <form name="form-control">
        <input type="text" value="I am an input field" name="demoValue" style="border: 1px solid lime" />
        <w-button type="reset" name="resetButton" value="fooyoo">Reset</w-button>
        <w-button type="submit" name="submuitButtton" value="fooyoo">Send thing</w-button>
      </form>
    `}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    type: 'button'
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    type: 'button'
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'negative',
    type: 'button'
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'utility',
    type: 'button'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'link',
    type: 'button'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'pill',
    type: 'button'
  },
  render(args) {
    return html\`<w-button \${spread(prespread(args))}>💙</w-button>\`;
  }
}`,...s.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    small: true,
    type: 'button'
  }
}`,...u.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    quiet: true,
    type: 'button'
  }
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    loading: true,
    type: 'button'
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    'full-width': true,
    type: 'button'
  },
  render(args) {
    return html\`
      <div class="w-full flex flex-col gap-8">
        <w-button \${spread(prespread(args))}>Full width</w-button>
      </div>
    \`;
  }
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    href: 'https://example.com',
    target: '_blank',
    type: 'button'
  },
  render(args) {
    return html\`<w-button \${spread(prespread(args))}>Visit Example</w-button>\`;
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    return html\`
      <form name="form-control">
        <input type="text" value="I am an input field" name="demoValue" style="border: 1px solid lime" />
        <w-button type="reset" name="resetButton" value="fooyoo">Reset</w-button>
        <w-button type="submit" name="submuitButtton" value="fooyoo">Send thing</w-button>
      </form>
    \`;
  }
}`,...l.parameters?.docs?.source}}};const h=["Primary","Secondary","Negative","Utility","Link","Pill","Small","Quiet","Loading","FullWidth","AsLink","FormControl"],B=Object.freeze(Object.defineProperty({__proto__:null,AsLink:c,FormControl:l,FullWidth:m,Link:o,Loading:p,Negative:a,Pill:s,Primary:t,Quiet:i,Secondary:e,Small:u,Utility:n,__namedExportsOrder:h,default:S},Symbol.toStringTag,{value:"Module"}));export{c as A,B,l as F,o as L,a as N,t as P,i as Q,e as S,n as U,s as a,u as b,p as c,m as d};
