import{W as u,b,x as i,g as f}from"./iframe-DAFhRBI_.js";import{s as p,p as c}from"./utilities-BNUAuEwo.js";import"./expand-transition-BkWgT6KZ.js";class h extends u{static properties={level:{type:Number}};static styles=[u.styles];get _markup(){return`<h${this.level}
    style="margin: 0; font-weight: unset; font-size: unset; line-height: unset;"
  >
    <slot></slot>
  </h${this.level}>
`}render(){return this.level?b(this._markup):i`<slot></slot>`}}customElements.get("w-unstyled-heading")||customElements.define("w-unstyled-heading",h);var m=Object.freeze,g=Object.defineProperty,v=(e,S)=>m(g(e,"raw",{value:m(e.slice())})),x;const{events:w,args:y,argTypes:T}=f("w-expandable"),I={title:"Layout/Expandable",render(e){return i`
      <w-expandable ${p(c(e))}>
        <p>This is the expandable content that can be shown or hidden.</p>
        <p>It can contain multiple paragraphs and other elements.</p>
      </w-expandable>
    `},args:y,argTypes:T,parameters:{actions:{handles:w}}},a={args:{title:"I'm expandable",expanded:!1,box:!1,bleed:!1,animated:!1,"no-chevron":!1}},t={args:{title:"I'm expanded by default",expanded:!0,box:!1,bleed:!1,animated:!1,"no-chevron":!1}},n={args:{title:"I'm a box expandable",expanded:!1,box:!0,bleed:!1,animated:!1,"no-chevron":!1}},s={args:{title:"I'm animated",expanded:!1,box:!0,bleed:!1,animated:!0,"no-chevron":!1}},r={args:{title:"I'm wrapped in h2",expanded:!1,box:!0,bleed:!1,animated:!1,"no-chevron":!1,"heading-level":2}},l={args:{title:"I have no chevron",expanded:!1,box:!1,bleed:!1,animated:!1,"no-chevron":!0}},o={args:{expanded:!1,box:!0,bleed:!1,animated:!1,"no-chevron":!1},render(e){return i`
      <w-expandable ${p(c(e))}>
        <div slot="title" style="display: flex; align-items: center;">
          <span style="margin-right: 8px;">🎯</span>
          <span>Custom title with icon</span>
        </div>
        <p>This expandable has a custom title slot with an icon.</p>
      </w-expandable>
    `}},d={args:{expanded:!0,box:!0,animated:!0},render(e){return i(x||(x=v([`
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
    `])),p(c(e)))}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: "I'm a box expandable",
    expanded: false,
    box: true,
    bleed: false,
    animated: false,
    'no-chevron': false
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: "I'm animated",
    expanded: false,
    box: true,
    bleed: false,
    animated: true,
    'no-chevron': false
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: "I'm wrapped in h2",
    expanded: false,
    box: true,
    bleed: false,
    animated: false,
    'no-chevron': false,
    'heading-level': 2
  }
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'I have no chevron',
    expanded: false,
    box: false,
    bleed: false,
    animated: false,
    'no-chevron': true
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const _=["Default","Expanded","Box","Animated","WithHeading","NoChevron","CustomTitle","NoTitle"],C=Object.freeze(Object.defineProperty({__proto__:null,Animated:s,Box:n,CustomTitle:o,Default:a,Expanded:t,NoChevron:l,NoTitle:d,WithHeading:r,__namedExportsOrder:_,default:I},Symbol.toStringTag,{value:"Module"}));export{s as A,n as B,o as C,a as D,C as E,d as N,r as W,t as a,l as b};
