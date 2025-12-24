import{d as $,i as P,s as C,u as F,g as H,b as y}from"./iframe-7RbQ2Zc3.js";import{s as r,p as n}from"./utilities-XXws7xiw.js";import"./index-BTovNxH3.js";import"./chevron-left-16-ycmfowU3.js";var I={},_=["en","nb","fi","da","sv"],k="en",A=()=>{var t;let e;switch((t=process==null?void 0:I)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},B=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":k},S=t=>_.find(e=>t===e||t.toLowerCase().includes(e))||B();function E(){var t;if(typeof window>"u"){const e=A();return S(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,a=B();return _.includes(e)?S(e??a):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),S(a))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),k}}var N=(t,e,a,f,x,o)=>t==="nb"?a:t==="fi"?f:t==="da"?x:t==="sv"?o:e,T=(t,e,a,f,x)=>{const o=E(),L=N(o,t,e,a,f,x);$.load(o,L),$.activate(o)},s={nb:{"icon.title.heart":["Hjerte"]},en:{"icon.title.heart":["Heart"]},fi:{"icon.title.heart":["Sydän"]},da:{"icon.title.heart":["Hjerte"]},sv:{"icon.title.heart":["Hjärta"]}};T(s.en,s.nb,s.fi,s.da,s.sv);var U=class extends P{render(){const t=$.t({message:"Heart",id:"icon.title.heart",comment:"Title for heart icon"});return F`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-heart-16-part">${C(`<title>${t}</title>`)}<path stroke="currentColor" stroke-width="1.5" d="M7.98 14c.386 0 .604-.318 1.226-.939.776-.777 1.525-1.5 2.069-2.045 1.605-1.605 2.236-2.215 2.684-2.69 1.191-1.263 1.345-3.019.538-4.351C13.48 2.295 11.961 2 11.145 2s-1.4.295-2.43 1.054l-.716.631-.695-.63C6.186 2.152 5.376 2 4.856 2c-.433 0-2.244 0-3.41 1.975-.851 1.44-.406 3.215.678 4.351.194.203.994.994 2.383 2.417.559.573 1.35 1.361 1.933 1.96C6.77 13.042 7.595 14 7.98 14Z" clip-rule="evenodd"></path></svg>`}};customElements.get("w-icon-heart-16")||customElements.define("w-icon-heart-16",U);const{events:W,args:j,argTypes:O}=H("w-button"),M={title:"Buttons/Button",render(t){return y`<w-button ${r(n(t))}>Button Text</w-button>`},args:j,argTypes:O,parameters:{actions:{handles:W}}},i={args:{variant:"primary",type:"button"}},c={args:{variant:"secondary",type:"button"}},l={args:{variant:"negative",type:"button"}},u={args:{variant:"utility",type:"button"}},p={args:{variant:"link",type:"button",href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_components",target:"_new"}},d={args:{variant:"pill",type:"button"},render(t){return y`<w-button ${r(n(t))}>
        <w-icon-chevron-left-16 style="height: 16px;"></w-icon-chevron-left-16>
      </w-button>
      <w-button ${r(n(t))}>
        <w-icon-close-16 style="height: 16px;"></w-icon-close-16>
      </w-button>
      <w-button ${r(n(t))}>
        <w-icon-heart-16 style="height: 16px;"></w-icon-heart-16>
      </w-button>
      <w-button ${r(n(t))}>
        <w-icon-chevron-right-16
          style="height: 16px;"
        ></w-icon-chevron-right-16>
      </w-button>
      <br />
      <w-button ${r(n(t))} small="">
        <w-icon-chevron-left-16 style="height: 16px;"></w-icon-chevron-left-16>
      </w-button>
      <w-button ${r(n(t))} small="">
        <w-icon-close-16 style="height: 16px;"></w-icon-close-16>
      </w-button>
      <w-button ${r(n(t))} small="">
        <w-icon-heart-16 style="height: 16px;"></w-icon-heart-16>
      </w-button>
      <w-button ${r(n(t))} small="">
        <w-icon-chevron-right-16
          style="height: 16px;"
        ></w-icon-chevron-right-16>
      </w-button>`}},m={args:{variant:"primary",small:!0,type:"button"}},h={args:{variant:"secondary",quiet:!0,type:"button"}},b={args:{variant:"primary",loading:!0,type:"button"}},g={args:{variant:"primary","full-width":!0,type:"button"},render(t){return y`
      <div class="w-full flex flex-col gap-8">
        <w-button ${r(n(t))}>Full width</w-button>
      </div>
    `}},w={args:{variant:"primary",href:"https://example.com",target:"_blank",type:"button"},render(t){return y`<w-button ${r(n(t))}>Visit Example</w-button>`}},v={args:{},render(){return y`
      <form name="form-control">
        <input type="text" value="I am an input field" name="demoValue" style="border: 1px solid lime" />
        <w-button type="reset" name="resetButton" value="fooyoo">Reset</w-button>
        <w-button type="submit" name="submuitButtton" value="fooyoo">Send thing</w-button>
      </form>
    `}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    type: 'button'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    type: 'button'
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'negative',
    type: 'button'
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'utility',
    type: 'button'
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'link',
    type: 'button',
    href: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_components',
    target: '_new'
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'pill',
    type: 'button'
  },
  render(args) {
    return html\`<w-button \${spread(prespread(args))}>
        <w-icon-chevron-left-16 style="height: 16px;"></w-icon-chevron-left-16>
      </w-button>
      <w-button \${spread(prespread(args))}>
        <w-icon-close-16 style="height: 16px;"></w-icon-close-16>
      </w-button>
      <w-button \${spread(prespread(args))}>
        <w-icon-heart-16 style="height: 16px;"></w-icon-heart-16>
      </w-button>
      <w-button \${spread(prespread(args))}>
        <w-icon-chevron-right-16
          style="height: 16px;"
        ></w-icon-chevron-right-16>
      </w-button>
      <br />
      <w-button \${spread(prespread(args))} small="">
        <w-icon-chevron-left-16 style="height: 16px;"></w-icon-chevron-left-16>
      </w-button>
      <w-button \${spread(prespread(args))} small="">
        <w-icon-close-16 style="height: 16px;"></w-icon-close-16>
      </w-button>
      <w-button \${spread(prespread(args))} small="">
        <w-icon-heart-16 style="height: 16px;"></w-icon-heart-16>
      </w-button>
      <w-button \${spread(prespread(args))} small="">
        <w-icon-chevron-right-16
          style="height: 16px;"
        ></w-icon-chevron-right-16>
      </w-button>\`;
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    small: true,
    type: 'button'
  }
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    quiet: true,
    type: 'button'
  }
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    loading: true,
    type: 'button'
  }
}`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    href: 'https://example.com',
    target: '_blank',
    type: 'button'
  },
  render(args) {
    return html\`<w-button \${spread(prespread(args))}>Visit Example</w-button>\`;
  }
}`,...w.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};const R=["Primary","Secondary","Negative","Utility","Link","Pill","Small","Quiet","Loading","FullWidth","AsLink","FormControl"],D=Object.freeze(Object.defineProperty({__proto__:null,AsLink:w,FormControl:v,FullWidth:g,Link:p,Loading:b,Negative:l,Pill:d,Primary:i,Quiet:h,Secondary:c,Small:m,Utility:u,__namedExportsOrder:R,default:M},Symbol.toStringTag,{value:"Module"}));export{w as A,D as B,v as F,p as L,l as N,i as P,h as Q,c as S,u as U,d as a,m as b,b as c,g as d};
