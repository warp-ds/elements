import{g as E,x as e}from"./iframe-CTZFvX7I.js";import{s as c,p as v}from"./utilities-C1002IEs.js";var p=Object.freeze,w=Object.defineProperty,n=(t,x)=>p(w(t,"raw",{value:p(t.slice())})),g,d,h,u,m,b;const{events:I,args:y,argTypes:f}=E("w-attention"),T={title:"Overlays/Attention",render(t){return e`
      <w-attention ${c(v(t))}>
        <button
          ${c({id:t.buttonId})}
          class="group block relative break-words last-child:mb-0 p-16 rounded-8 s-bg-subtle"
          slot="target">
          ${t.buttonText}
        </button>
        <span slot="message">I'm a message</span>
      </w-attention>
    `},args:y,argTypes:f,parameters:{actions:{handles:I}}},o={args:{placement:"bottom",popover:!0,flip:!0},render(t){return e(g||(g=n([`
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
    `])),c(v(t)))},decorators:[t=>e(d||(d=n([`
      `,`
      <script>
        // use IIFE to create local scope
        (() => {
          const popoverIconEl = document.getElementById('attention-element');
          const popoverIconTarget = document.getElementById('icon-button-target');
          popoverIconTarget.addEventListener('click', () => {
            popoverIconEl.show = !popoverIconEl.show;
          });
        })();
      <\/script>
    `])),t())]},r={args:{placement:"right",buttonText:"hover me",id:"tooltip-element",tooltip:!0,flip:!0,buttonId:"tooltip-target"},decorators:[t=>e(h||(h=n([`
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
    `])),t())]},s={args:{buttonText:"i need a callout",class:"flex items-center gap-8",placement:"right",callout:!0,show:!0}},i={args:{buttonId:"highlight-target1",id:"highlight-message",buttonText:"I'm highlighted",placement:"right",highlight:!0,flip:!0},decorators:[t=>e(u||(u=n([`
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
    `])),t())]},a={args:{class:"flex items-center gap-8",placement:"right",buttonId:"highlight-target2",buttonText:"click me",id:"dismissible-highlight-message","can-close":!0,"cross-axis":!0,highlight:!0,flip:!0},decorators:[t=>e(m||(m=n([`
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
    `])),t())]},l={args:{},render(){return e`
      <w-attention id="accessible-attention" placement="right" popover>
        <div slot="message">
          <p id="aria-content" role="tooltip">I'm a popover with ARIA "tooltip" role</p>
          <p>(this text is less relevant)</p>
        </div>
        <button
          aria-details="aria-content"
          id="accessible-target"
          class="group block relative break-words last-child:mb-0 p-16 rounded-8 s-bg-subtle"
          slot="target">
          Click to toggle a popover
        </button>
      </w-attention>
    `},decorators:[t=>e(b||(b=n([" ",`
        <script>
          (() => {
            const button = document.getElementById('accessible-target');
            const accessibleAttention = document.getElementById('accessible-attention');
            button.addEventListener('click', () => {
              accessibleAttention.show = !accessibleAttention.show;
            });
          })();
        <\/script>`])),t())]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
  },
  decorators: [story => html\`
      \${story()}
      <script>
        // use IIFE to create local scope
        (() => {
          const popoverIconEl = document.getElementById('attention-element');
          const popoverIconTarget = document.getElementById('icon-button-target');
          popoverIconTarget.addEventListener('click', () => {
            popoverIconEl.show = !popoverIconEl.show;
          });
        })();
      <\/script>
    \`]
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    buttonText: 'i need a callout',
    class: 'flex items-center gap-8',
    placement: 'right',
    callout: true,
    show: true
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    return html\`
      <w-attention id="accessible-attention" placement="right" popover>
        <div slot="message">
          <p id="aria-content" role="tooltip">I'm a popover with ARIA "tooltip" role</p>
          <p>(this text is less relevant)</p>
        </div>
        <button
          aria-details="aria-content"
          id="accessible-target"
          class="group block relative break-words last-child:mb-0 p-16 rounded-8 s-bg-subtle"
          slot="target">
          Click to toggle a popover
        </button>
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
}`,...l.parameters?.docs?.source}}};const k=["Default","ToolTip","Callout","Highlight","DismissibleHighlight","AccessibleTooltip"],A=Object.freeze(Object.defineProperty({__proto__:null,AccessibleTooltip:l,Callout:s,Default:o,DismissibleHighlight:a,Highlight:i,ToolTip:r,__namedExportsOrder:k,default:T},Symbol.toStringTag,{value:"Module"}));export{A,s as C,a as D,i as H,r as T,l as a};
