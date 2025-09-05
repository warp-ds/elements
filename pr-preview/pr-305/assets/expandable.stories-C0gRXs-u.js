import{g as x,k as p}from"./iframe-Bsfw-Lyz.js";import{s as i,p as c}from"./utilities-B6TGv-nm.js";var m=Object.freeze,b=Object.defineProperty,f=(e,y)=>m(b(e,"raw",{value:m(e.slice())})),u;const{events:h,args:g,argTypes:v}=x("w-expandable"),w={title:"Layout/Expandable",render(e){return p`
      <w-expandable ${i(c(e))}>
        <p>This is the expandable content that can be shown or hidden.</p>
        <p>It can contain multiple paragraphs and other elements.</p>
      </w-expandable>
    `},args:g,argTypes:v,parameters:{actions:{handles:h}}},a={args:{title:"I'm expandable",expanded:!1,box:!1,bleed:!1,animated:!1,"no-chevron":!1}},t={args:{title:"I'm expanded by default",expanded:!0,box:!1,bleed:!1,animated:!1,"no-chevron":!1}},r={args:{title:"I'm a box expandable",expanded:!1,box:!0,bleed:!1,animated:!1,"no-chevron":!1}},n={args:{title:"I'm animated",expanded:!1,box:!0,bleed:!1,animated:!0,"no-chevron":!1}},s={args:{title:"I'm wrapped in h2",expanded:!1,box:!0,bleed:!1,animated:!1,"no-chevron":!1,"heading-level":2}},o={args:{title:"I have no chevron",expanded:!1,box:!1,bleed:!1,animated:!1,"no-chevron":!0}},d={args:{expanded:!1,box:!0,bleed:!1,animated:!1,"no-chevron":!1},render(e){return p`
      <w-expandable ${i(c(e))}>
        <div slot="title" style="display: flex; align-items: center;">
          <span style="margin-right: 8px;">🎯</span>
          <span>Custom title with icon</span>
        </div>
        <p>This expandable has a custom title slot with an icon.</p>
      </w-expandable>
    `}},l={args:{expanded:!0,box:!0,animated:!0},render(e){return p(u||(u=f([`
      <w-button aria-label="Toggle expandable content without title" aria-controls="expandableWithoutTitle">Toggle</w-button>
      <w-expandable `,` id="expandableWithoutTitle">
        <p>with expanded content</p>
      </w-expandable>
      <script>
        document.querySelector('[aria-controls="expandableWithoutTitle"]').addEventListener('click', () => {
          const expand = document.getElementById('expandableWithoutTitle');
          if (expand.expanded) {
            expand.removeAttribute('expanded');
          } else {
            expand.setAttribute('expanded', 'true');
          }
        });
      <\/script>
    `])),i(c(e)))}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: "I'm expandable",
    expanded: false,
    box: false,
    bleed: false,
    animated: false,
    'no-chevron': false
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: "I'm expanded by default",
    expanded: true,
    box: false,
    bleed: false,
    animated: false,
    'no-chevron': false
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: "I'm a box expandable",
    expanded: false,
    box: true,
    bleed: false,
    animated: false,
    'no-chevron': false
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: "I'm animated",
    expanded: false,
    box: true,
    bleed: false,
    animated: true,
    'no-chevron': false
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: "I'm wrapped in h2",
    expanded: false,
    box: true,
    bleed: false,
    animated: false,
    'no-chevron': false,
    'heading-level': 2
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'I have no chevron',
    expanded: false,
    box: false,
    bleed: false,
    animated: false,
    'no-chevron': true
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    expanded: false,
    box: true,
    bleed: false,
    animated: false,
    'no-chevron': false
  },
  render(args) {
    return html\`
      <w-expandable \${spread(prespread(args))}>
        <div slot="title" style="display: flex; align-items: center;">
          <span style="margin-right: 8px;">🎯</span>
          <span>Custom title with icon</span>
        </div>
        <p>This expandable has a custom title slot with an icon.</p>
      </w-expandable>
    \`;
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    expanded: true,
    box: true,
    animated: true
  },
  render(args) {
    return html\`
      <w-button aria-label="Toggle expandable content without title" aria-controls="expandableWithoutTitle">Toggle</w-button>
      <w-expandable \${spread(prespread(args))} id="expandableWithoutTitle">
        <p>with expanded content</p>
      </w-expandable>
      <script>
        document.querySelector('[aria-controls="expandableWithoutTitle"]').addEventListener('click', () => {
          const expand = document.getElementById('expandableWithoutTitle');
          if (expand.expanded) {
            expand.removeAttribute('expanded');
          } else {
            expand.setAttribute('expanded', 'true');
          }
        });
      <\/script>
    \`;
  }
}`,...l.parameters?.docs?.source}}};const T=["Default","Expanded","Box","Animated","WithHeading","NoChevron","CustomTitle","NoTitle"],_=Object.freeze(Object.defineProperty({__proto__:null,Animated:n,Box:r,CustomTitle:d,Default:a,Expanded:t,NoChevron:o,NoTitle:l,WithHeading:s,__namedExportsOrder:T,default:w},Symbol.toStringTag,{value:"Module"}));export{n as A,r as B,d as C,a as D,_ as E,l as N,s as W,t as a,o as b};
