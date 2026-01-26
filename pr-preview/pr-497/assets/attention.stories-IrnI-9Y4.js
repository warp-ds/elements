import{g as w,b as e}from"./iframe-CoR7-Lf6.js";import{s as c,p as v}from"./utilities-UAJoFF_-.js";import"./attention-vuN8KvJj.js";import"./button-BztCpeh-.js";var p=Object.freeze,y=Object.defineProperty,l=(t,g)=>p(y(t,"raw",{value:p(t.slice())})),d,u,m,b;const{events:E,args:I,argTypes:f}=w("w-attention"),T={title:"Overlays/Attention",render(t){return e`
      <w-attention ${c(v(t))}>
        <w-button
          ${c({id:t.buttonId})}
          variant="secondary"
          slot="target">
          ${t.buttonText}
        </w-button>
        <span slot="message">I'm a message</span>
      </w-attention>
    `},args:I,argTypes:f,parameters:{actions:{handles:E}}},n={args:{placement:"bottom",popover:!0,flip:!0},render(t){return e`
      <w-attention ${c(v(t))}>
        <w-button 
          id="popoverTarget" 
          slot="target"
          variant="secondary"
          @click=${g=>{const h=g.currentTarget.closest("w-attention");h.show=!h.show}}>
            Click to toggle a popover
        </w-button>
        <span slot="message">I'm a popover</span>
      </w-attention>
    `}},o={args:{placement:"right",buttonText:"hover me",id:"tooltip-element",tooltip:!0,flip:!0,buttonId:"tooltip-target"},decorators:[t=>e(d||(d=l([`
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
    `])),t())]},s={args:{buttonText:"i need a callout",class:"flex items-center gap-8",placement:"right",callout:!0,show:!0}},r={args:{buttonId:"highlight-target1",id:"highlight-message",buttonText:"I'm highlighted",placement:"right",highlight:!0,flip:!0},decorators:[t=>e(u||(u=l([`
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
    `])),t())]},i={args:{class:"flex items-center gap-8",placement:"right",buttonId:"highlight-target2",buttonText:"click me",id:"dismissible-highlight-message","can-close":!0,"cross-axis":!0,highlight:!0,flip:!0},decorators:[t=>e(m||(m=l([`
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
    `])),t())]},a={args:{},render(){return e`
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
    `},decorators:[t=>e(b||(b=l([" ",`
        <script>
          (() => {
            const button = document.getElementById('accessible-target');
            const accessibleAttention = document.getElementById('accessible-attention');
            button.addEventListener('click', () => {
              accessibleAttention.show = !accessibleAttention.show;
            });
          })();
        <\/script>`])),t())]};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    buttonText: 'i need a callout',
    class: 'flex items-center gap-8',
    placement: 'right',
    callout: true,
    show: true
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const x=["Default","ToolTip","Callout","Highlight","DismissibleHighlight","AccessibleTooltip"],k=Object.freeze(Object.defineProperty({__proto__:null,AccessibleTooltip:a,Callout:s,Default:n,DismissibleHighlight:i,Highlight:r,ToolTip:o,__namedExportsOrder:x,default:T},Symbol.toStringTag,{value:"Module"}));export{k as A,s as C,i as D,r as H,o as T,a};
