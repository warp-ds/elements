import{g as p,x as a}from"./iframe-DH02w2vH.js";import{s,p as n}from"./utilities-DRr3ovZ3.js";var r=Object.freeze,l=Object.defineProperty,c=(t,d)=>r(l(t,"raw",{value:r(t.slice())})),o;const{events:i,args:v,argTypes:u}=p("w-attention"),m={title:"Overlays/Attention",args:v,argTypes:u,parameters:{actions:{handles:i}}},e={args:{placement:"bottom",popover:!0,flip:!0},render(t){return a(o||(o=c([`
      <w-attention `,`>
        <w-button id="popoverTarget" slot="target"> Click to toggle a popover </w-button>
        <span slot="message">I'm a popover</span>
      </w-attention>

      <script>
        const popoverTarget = document.querySelector('#popoverTarget');
        const popoverEl = document.querySelector('[popover]');

        popoverTarget.addEventListener('click', () => {
          if (popoverEl.show) {
            popoverEl.removeAttribute('show');
          } else {
            popoverEl.setAttribute('show', 'true');
          }
        });
      <\/script>
    `])),s(n(t)))}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    placement: 'bottom',
    popover: true,
    flip: true
  },
  render(args) {
    return html\`
      <w-attention \${spread(prespread(args))}>
        <w-button id="popoverTarget" slot="target"> Click to toggle a popover </w-button>
        <span slot="message">I'm a popover</span>
      </w-attention>

      <script>
        const popoverTarget = document.querySelector('#popoverTarget');
        const popoverEl = document.querySelector('[popover]');

        popoverTarget.addEventListener('click', () => {
          if (popoverEl.show) {
            popoverEl.removeAttribute('show');
          } else {
            popoverEl.setAttribute('show', 'true');
          }
        });
      <\/script>
    \`;
  }
}`,...e.parameters?.docs?.source}}};const g=["Default"],f=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:g,default:m},Symbol.toStringTag,{value:"Module"}));export{f as A,e as D};
