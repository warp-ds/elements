import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{s as n,t as r}from"./lit-JruGAyH3.js";import{a as i,o as a}from"./iframe-D2ZxUGPI.js";import{i as o,n as s,r as c,t as l}from"./utilities-3bRBgS0D.js";import{t as u}from"./attention-CF_Huxwr.js";import{t as d}from"./button-8kYeEKey.js";import{n as f,t as p}from"./taggedTemplateLiteral-Hk2qA96D.js";var m=t({AccessibleTooltip:()=>O,Callout:()=>T,Default:()=>C,DismissibleHighlight:()=>D,Highlight:()=>E,ToolTip:()=>w,__namedExportsOrder:()=>k,default:()=>S}),h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A=e((()=>{c(),a(),r(),l(),u(),d(),f(),{events:y,args:b,argTypes:x}=i(`w-attention`),S={title:`Overlays/Attention`,render(e){return n`
      <w-attention ${o(s(e))}>
        <w-button
          ${o({id:e.buttonId})}
          variant="secondary"
          slot="target">
          ${e.buttonText}
        </w-button>
        <span slot="message">I'm a message</span>
      </w-attention>
    `},args:b,argTypes:x,parameters:{actions:{handles:y}}},C={args:{placement:`bottom`,popover:!0,flip:!0},render(e){return n`
      <w-attention ${o(s(e))}>
        <w-button 
          id="popoverTarget" 
          slot="target"
          variant="secondary"
          @click=${e=>{let t=e.currentTarget.closest(`w-attention`);t.show=!t.show}}>
            Click to toggle a popover
        </w-button>
        <span slot="message">I'm a popover</span>
      </w-attention>
    `}},w={args:{placement:`right`,buttonText:`hover me`,id:`tooltip-element`,tooltip:!0,flip:!0,buttonId:`tooltip-target`},decorators:[e=>n(h||=p([`
      `,`
      <script>
        (() => {
          const button = document.getElementById('tooltip-target');
          const tooltip = document.getElementById('tooltip-element');
          button.addEventListener('mouseenter', () => {
            tooltip.show = true;
          });
          button.addEventListener('mouseleave', () => {
            tooltip.show = false;
          });
          button.addEventListener('focus', () => {
            tooltip.show = true;
          });
          button.addEventListener('blur', () => {
            tooltip.show = false;
          });
        })();
      <\/script>
    `]),e())]},T={args:{buttonText:`i need a callout`,class:`flex items-center gap-8`,placement:`right`,callout:!0,show:!0}},E={args:{buttonId:`highlight-target1`,id:`highlight-message`,buttonText:`I'm highlighted`,placement:`right`,highlight:!0,flip:!0},decorators:[e=>n(g||=p([`
      `,`
      <script>
        (() => {
          const button = document.getElementById('highlight-target1');
          const highlight = document.getElementById('highlight-message');
          button.addEventListener('click', () => {
            highlight.show = !highlight.show;
          });
        })();
      <\/script>
    `]),e())]},D={args:{class:`flex items-center gap-8`,placement:`right`,buttonId:`highlight-target2`,buttonText:`click me`,id:`dismissible-highlight-message`,"can-close":!0,"cross-axis":!0,highlight:!0,flip:!0},decorators:[e=>n(_||=p([`
      `,`
      <script>
        (() => {
          const button = document.getElementById('highlight-target2');
          const highlight = document.getElementById('dismissible-highlight-message');
          button.addEventListener('click', () => {
            highlight.show = true;
          });
          highlight.addEventListener('close', () => {
            highlight.show = false;
          });
        })();
      <\/script>
    `]),e())]},O={args:{},render(){return n`
      <w-attention id="accessible-attention" placement="right" popover>
        <div slot="message">
          <p id="aria-content" role="tooltip">I'm a popover with ARIA "tooltip" role</p>
          <p>(this text is less relevant)</p>
        </div>
        <w-button
          aria-details="aria-content"
          id="accessible-target"
          slot="target"
          variant="secondary">
          Click to toggle a popover
        </w-button>
      </w-attention>
    `},decorators:[e=>n(v||=p([` `,`
        <script>
          (() => {
            const button = document.getElementById('accessible-target');
            const accessibleAttention = document.getElementById('accessible-attention');
            button.addEventListener('click', () => {
              accessibleAttention.show = !accessibleAttention.show;
            });
          })();
        <\/script>`]),e())]},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    placement: 'bottom',
    popover: true,
    flip: true
  },
  render(args) {
    return html\`
      <w-attention \${spread(prespread(args))}>
        <w-button 
          id="popoverTarget" 
          slot="target"
          variant="secondary"
          @click=\${e => {
      const attention = e.currentTarget.closest('w-attention');
      attention.show = !attention.show;
    }}>
            Click to toggle a popover
        </w-button>
        <span slot="message">I'm a popover</span>
      </w-attention>
    \`;
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    placement: 'right',
    buttonText: 'hover me',
    id: 'tooltip-element',
    tooltip: true,
    flip: true,
    buttonId: 'tooltip-target'
  },
  decorators: [story => html\`
      \${story()}
      <script>
        (() => {
          const button = document.getElementById('tooltip-target');
          const tooltip = document.getElementById('tooltip-element');
          button.addEventListener('mouseenter', () => {
            tooltip.show = true;
          });
          button.addEventListener('mouseleave', () => {
            tooltip.show = false;
          });
          button.addEventListener('focus', () => {
            tooltip.show = true;
          });
          button.addEventListener('blur', () => {
            tooltip.show = false;
          });
        })();
      <\/script>
    \`]
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    buttonText: 'i need a callout',
    class: 'flex items-center gap-8',
    placement: 'right',
    callout: true,
    show: true
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    buttonId: 'highlight-target1',
    id: 'highlight-message',
    buttonText: \`I'm highlighted\`,
    placement: 'right',
    highlight: true,
    flip: true
  },
  decorators: [story => html\`
      \${story()}
      <script>
        (() => {
          const button = document.getElementById('highlight-target1');
          const highlight = document.getElementById('highlight-message');
          button.addEventListener('click', () => {
            highlight.show = !highlight.show;
          });
        })();
      <\/script>
    \`]
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    class: 'flex items-center gap-8',
    placement: 'right',
    buttonId: 'highlight-target2',
    buttonText: 'click me',
    id: 'dismissible-highlight-message',
    ['can-close']: true,
    ['cross-axis']: true,
    highlight: true,
    flip: true
  },
  decorators: [story => html\`
      \${story()}
      <script>
        (() => {
          const button = document.getElementById('highlight-target2');
          const highlight = document.getElementById('dismissible-highlight-message');
          button.addEventListener('click', () => {
            highlight.show = true;
          });
          highlight.addEventListener('close', () => {
            highlight.show = false;
          });
        })();
      <\/script>
    \`]
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    return html\`
      <w-attention id="accessible-attention" placement="right" popover>
        <div slot="message">
          <p id="aria-content" role="tooltip">I'm a popover with ARIA "tooltip" role</p>
          <p>(this text is less relevant)</p>
        </div>
        <w-button
          aria-details="aria-content"
          id="accessible-target"
          slot="target"
          variant="secondary">
          Click to toggle a popover
        </w-button>
      </w-attention>
    \`;
  },
  decorators: [story => html\` \${story()}
        <script>
          (() => {
            const button = document.getElementById('accessible-target');
            const accessibleAttention = document.getElementById('accessible-attention');
            button.addEventListener('click', () => {
              accessibleAttention.show = !accessibleAttention.show;
            });
          })();
        <\/script>\`]
}`,...O.parameters?.docs?.source}}},k=[`Default`,`ToolTip`,`Callout`,`Highlight`,`DismissibleHighlight`,`AccessibleTooltip`]}));A();export{O as AccessibleTooltip,T as Callout,C as Default,D as DismissibleHighlight,E as Highlight,w as ToolTip,k as __namedExportsOrder,S as default,A as n,m as t};