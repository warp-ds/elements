import{g as y,b as g,d as h}from"./iframe-RMPxWOnk.js";import{s as t,p as a}from"./utilities-DgKhqZo5.js";import"./button-C4vUiUcO.js";const{events:f,args:v,argTypes:x}=y("w-button"),$={title:"Buttons/Button",render(e){return g`<w-button ${t(a(e))}>Button Text</w-button>`},args:v,argTypes:x,parameters:{actions:{handles:f}}},r={args:{variant:"primary",type:"button"}},o={args:{variant:"secondary",type:"button"}},s={args:{variant:"negative",type:"button"}},l={args:{variant:"utility",type:"button"}},i={args:{variant:"link",type:"button",href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_components",target:"_new"}},c={args:{variant:"pill",type:"button"},render(e){const n=h();return g`<w-button ${t(a(e))}>
        <w-icon name="ChevronLeft" size="small" locale="${n}" style="height: 16px;" class="flex"></w-icon>
      </w-button>
      <w-button ${t(a(e))}>
        <w-icon name="Close" size="small" locale="${n}" style="height: 16px;" class="flex"></w-icon>
      </w-button>
      <w-button ${t(a(e))}>
        <w-icon name="Heart" size="small" locale="${n}" style="height: 16px;" class="flex"></w-icon>
      </w-button>
      <w-button ${t(a(e))}>
        <w-icon name="ChevronRight" size="small" locale="${n}" style="height: 16px;" class="flex"></w-icon>
      </w-button>
      <br />
      <w-button ${t(a(e))} small="">
        <w-icon name="ChevronLeft" size="small" locale="${n}" style="height: 16px;" class="flex"></w-icon>
      </w-button>
      <w-button ${t(a(e))} small="">
        <w-icon name="Close" size="small" locale="${n}" style="height: 16px;" class="flex"></w-icon>
      </w-button>
      <w-button ${t(a(e))} small="">
        <w-icon name="Heart" size="small" locale="${n}" style="height: 16px;" class="flex"></w-icon>
      </w-button>
      <w-button ${t(a(e))} small="">
        <w-icon name="ChevronRight" size="small" locale="${n}" style="height: 16px;" class="flex"></w-icon>
      </w-button>`}},u={args:{variant:"primary",small:!0,type:"button"}},p={args:{variant:"secondary",quiet:!0,type:"button"}},m={args:{variant:"primary",loading:!0,type:"button"}},d={args:{variant:"primary","full-width":!0,type:"button"},render(e){return g`
      <div class="w-full flex flex-col gap-8">
        <w-button ${t(a(e))}>Full width</w-button>
      </div>
    `}},b={args:{variant:"primary",href:"https://example.com",target:"_blank",type:"button"},render(e){return g`<w-button ${t(a(e))}>Visit Example</w-button>`}},w={args:{},render(){return g`
      <form name="form-control">
        <input type="text" value="I am an input field" name="demoValue" style="border: 1px solid lime" />
        <w-button type="reset" name="resetButton" value="fooyoo">Reset</w-button>
        <w-button type="submit" name="submuitButtton" value="fooyoo">Send thing</w-button>
      </form>
    `}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    type: 'button'
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    type: 'button'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'negative',
    type: 'button'
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'utility',
    type: 'button'
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'link',
    type: 'button',
    href: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_components',
    target: '_new'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'pill',
    type: 'button'
  },
  render(args) {
    const locale = detectLocale();
    return html\`<w-button \${spread(prespread(args))}>
        <w-icon name="ChevronLeft" size="small" locale="\${locale}" style="height: 16px;" class="flex"></w-icon>
      </w-button>
      <w-button \${spread(prespread(args))}>
        <w-icon name="Close" size="small" locale="\${locale}" style="height: 16px;" class="flex"></w-icon>
      </w-button>
      <w-button \${spread(prespread(args))}>
        <w-icon name="Heart" size="small" locale="\${locale}" style="height: 16px;" class="flex"></w-icon>
      </w-button>
      <w-button \${spread(prespread(args))}>
        <w-icon name="ChevronRight" size="small" locale="\${locale}" style="height: 16px;" class="flex"></w-icon>
      </w-button>
      <br />
      <w-button \${spread(prespread(args))} small="">
        <w-icon name="ChevronLeft" size="small" locale="\${locale}" style="height: 16px;" class="flex"></w-icon>
      </w-button>
      <w-button \${spread(prespread(args))} small="">
        <w-icon name="Close" size="small" locale="\${locale}" style="height: 16px;" class="flex"></w-icon>
      </w-button>
      <w-button \${spread(prespread(args))} small="">
        <w-icon name="Heart" size="small" locale="\${locale}" style="height: 16px;" class="flex"></w-icon>
      </w-button>
      <w-button \${spread(prespread(args))} small="">
        <w-icon name="ChevronRight" size="small" locale="\${locale}" style="height: 16px;" class="flex"></w-icon>
      </w-button>\`;
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    small: true,
    type: 'button'
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    quiet: true,
    type: 'button'
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    loading: true,
    type: 'button'
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    href: 'https://example.com',
    target: '_blank',
    type: 'button'
  },
  render(args) {
    return html\`<w-button \${spread(prespread(args))}>Visit Example</w-button>\`;
  }
}`,...b.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};const S=["Primary","Secondary","Negative","Utility","Link","Pill","Small","Quiet","Loading","FullWidth","AsLink","FormControl"],_=Object.freeze(Object.defineProperty({__proto__:null,AsLink:b,FormControl:w,FullWidth:d,Link:i,Loading:m,Negative:s,Pill:c,Primary:r,Quiet:p,Secondary:o,Small:u,Utility:l,__namedExportsOrder:S,default:$},Symbol.toStringTag,{value:"Module"}));export{b as A,_ as B,w as F,i as L,s as N,r as P,p as Q,o as S,l as U,c as a,u as b,m as c,d};
