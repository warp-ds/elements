import{b as S,i as L,s as N,u as O,g as P,x as v}from"./iframe-Bn_j39Le.js";import{s as r,p as n}from"./utilities-DH5it2x3.js";import"./index-D9k6YCR-.js";import"./chevron-left-16-OyoNBjCC.js";var C={},F=JSON.parse('{"icon.title.heart":["Hjerte"]}'),H=JSON.parse('{"icon.title.heart":["Heart"]}'),I=JSON.parse('{"icon.title.heart":["Sydän"]}'),A=JSON.parse('{"icon.title.heart":["Hjerte"]}'),E=JSON.parse('{"icon.title.heart":["Hjärta"]}'),$=["en","nb","fi","da","sv"],_="en",T=()=>{var e;let t;switch((e=process==null?void 0:C)==null?void 0:e.NMP_BRAND){case"FINN":t="nb";break;case"TORI":t="fi";break;case"BLOCKET":t="sv";break;case"DBA":t="da";break;default:t="en"}return t},k=()=>{var e;const t=(e=document?.location)==null?void 0:e.hostname;return t?.includes("finn")?"nb":t.includes("tori")?"fi":t.includes("blocket")?"sv":t.includes("dba")?"da":_},x=e=>$.find(t=>e===t||e.toLowerCase().includes(t))||k();function U(){var e;if(typeof window>"u"){const t=T();return x(t)}try{const t=(e=document?.documentElement)==null?void 0:e.lang,a=k();return $.includes(t)?x(t??a):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),x(a))}catch(t){return console.warn("could not detect locale, falling back to source locale",t),_}}var W=(e,t,a,y,f,o)=>e==="nb"?a:e==="fi"?y:e==="da"?f:e==="sv"?o:t,j=(e,t,a,y,f)=>{const o=U(),B=W(o,e,t,a,y,f);S.load(o,B),S.activate(o)};j(H,F,I,A,E);var J=class extends L{render(){const e=S.t({message:"Heart",id:"icon.title.heart",comment:"Title for heart icon"});return O`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-heart-16-part">${N(`<title>${e}</title>`)}<path stroke="currentColor" stroke-width="1.5" d="M7.98 14c.386 0 .604-.318 1.226-.939.776-.777 1.525-1.5 2.069-2.045 1.605-1.605 2.236-2.215 2.684-2.69 1.191-1.263 1.345-3.019.538-4.351C13.48 2.295 11.961 2 11.145 2s-1.4.295-2.43 1.054l-.716.631-.695-.63C6.186 2.152 5.376 2 4.856 2c-.433 0-2.244 0-3.41 1.975-.851 1.44-.406 3.215.678 4.351.194.203.994.994 2.383 2.417.559.573 1.35 1.361 1.933 1.96C6.77 13.042 7.595 14 7.98 14Z" clip-rule="evenodd"></path></svg>`}};customElements.get("w-icon-heart-16")||customElements.define("w-icon-heart-16",J);const{events:M,args:R,argTypes:V}=P("w-button"),z={title:"Buttons/Button",render(e){return v`<w-button ${r(n(e))}>Button Text</w-button>`},args:R,argTypes:V,parameters:{actions:{handles:M}}},s={args:{variant:"primary",type:"button"}},i={args:{variant:"secondary",type:"button"}},c={args:{variant:"negative",type:"button"}},l={args:{variant:"utility",type:"button"}},u={args:{variant:"link",type:"button",href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_components",target:"_new"}},p={args:{variant:"pill",type:"button"},render(e){return v`<w-button ${r(n(e))}>
        <w-icon-chevron-left-16 style="height: 16px;"></w-icon-chevron-left-16>
      </w-button>
      <w-button ${r(n(e))}>
        <w-icon-close-16 style="height: 16px;"></w-icon-close-16>
      </w-button>
      <w-button ${r(n(e))}>
        <w-icon-heart-16 style="height: 16px;"></w-icon-heart-16>
      </w-button>
      <w-button ${r(n(e))}>
        <w-icon-chevron-right-16
          style="height: 16px;"
        ></w-icon-chevron-right-16>
      </w-button>
      <br />
      <w-button ${r(n(e))} small="">
        <w-icon-chevron-left-16 style="height: 16px;"></w-icon-chevron-left-16>
      </w-button>
      <w-button ${r(n(e))} small="">
        <w-icon-close-16 style="height: 16px;"></w-icon-close-16>
      </w-button>
      <w-button ${r(n(e))} small="">
        <w-icon-heart-16 style="height: 16px;"></w-icon-heart-16>
      </w-button>
      <w-button ${r(n(e))} small="">
        <w-icon-chevron-right-16
          style="height: 16px;"
        ></w-icon-chevron-right-16>
      </w-button>`}},d={args:{variant:"primary",small:!0,type:"button"}},m={args:{variant:"secondary",quiet:!0,type:"button"}},g={args:{variant:"primary",loading:!0,type:"button"}},h={args:{variant:"primary","full-width":!0,type:"button"},render(e){return v`
      <div class="w-full flex flex-col gap-8">
        <w-button ${r(n(e))}>Full width</w-button>
      </div>
    `}},w={args:{variant:"primary",href:"https://example.com",target:"_blank",type:"button"},render(e){return v`<w-button ${r(n(e))}>Visit Example</w-button>`}},b={args:{},render(){return v`
      <form name="form-control">
        <input type="text" value="I am an input field" name="demoValue" style="border: 1px solid lime" />
        <w-button type="reset" name="resetButton" value="fooyoo">Reset</w-button>
        <w-button type="submit" name="submuitButtton" value="fooyoo">Send thing</w-button>
      </form>
    `}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    type: 'button'
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    type: 'button'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'negative',
    type: 'button'
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'utility',
    type: 'button'
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'link',
    type: 'button',
    href: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_components',
    target: '_new'
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    small: true,
    type: 'button'
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    quiet: true,
    type: 'button'
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    loading: true,
    type: 'button'
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    href: 'https://example.com',
    target: '_blank',
    type: 'button'
  },
  render(args) {
    return html\`<w-button \${spread(prespread(args))}>Visit Example</w-button>\`;
  }
}`,...w.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};const Q=["Primary","Secondary","Negative","Utility","Link","Pill","Small","Quiet","Loading","FullWidth","AsLink","FormControl"],G=Object.freeze(Object.defineProperty({__proto__:null,AsLink:w,FormControl:b,FullWidth:h,Link:u,Loading:g,Negative:c,Pill:p,Primary:s,Quiet:m,Secondary:i,Small:d,Utility:l,__namedExportsOrder:Q,default:z},Symbol.toStringTag,{value:"Module"}));export{w as A,G as B,b as F,u as L,c as N,s as P,m as Q,i as S,l as U,p as a,d as b,g as c,h as d};
