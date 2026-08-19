import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{c as n,h as r}from"./decorate-J4WBtiHw.js";import{n as i,t as a}from"./dist-Bnzru1sc.js";import{i as o,n as s,r as c}from"./utilities-DhdP2kMI.js";import{t as l}from"./attention-jNCJbtAn.js";import{t as u}from"./button-BJkAuxe5.js";import{t as d}from"./taggedTemplateLiteral-BZenJ0bZ.js";var f=t({AccessibleTooltip:()=>E,Callout:()=>C,Default:()=>x,DismissibleHighlight:()=>T,Highlight:()=>w,ToolTip:()=>S,__namedExportsOrder:()=>D,default:()=>b}),p,m,h,g,_,v,y,b,x,S,C,w,T,E,D;function O(){return(O=e((()=>{c(),i(),n(),l(),u(),{events:_,args:v,argTypes:y}=a(`w-attention`),b={title:`Overlays/Attention`,render(e){return r`
            <w-attention ${o(s(e))}>
                <w-button
                    ${o({id:e.buttonId})}
                    variant="secondary"
                    slot="target"
                >
                    ${e.buttonText}
                </w-button>
                <span slot="message">I'm a message</span>
            </w-attention>
        `},args:v,argTypes:y,parameters:{actions:{handles:_}}},x={args:{placement:`bottom`,popover:!0,flip:!0},render(e){return r`
            <w-attention ${o(s(e))}>
                <w-button
                    id="popoverTarget"
                    slot="target"
                    variant="secondary"
                    @click=${e=>{let t=e.currentTarget.closest(`w-attention`);t.show=!t.show}}
                >
                    Click to toggle a popover
                </w-button>
                <span slot="message">I'm a popover</span>
            </w-attention>
        `}},S={args:{placement:`right`,buttonText:`hover me`,id:`tooltip-element`,tooltip:!0,flip:!0,buttonId:`tooltip-target`},decorators:[e=>r(p||=d([`
            `,`
            <script>
                (() => {
                    const button = document.getElementById("tooltip-target");
                    const tooltip = document.getElementById("tooltip-element");
                    tooltip.show = true;
                    button.addEventListener("click", (e) => {
                        tooltip.show = true;
                    });
                    button.addEventListener("mouseover", () => {
                        tooltip.show = true;
                    });
                    button.addEventListener("mouseout", () => {
                        tooltip.show = false;
                    });
                    button.addEventListener("focus", () => {
                        tooltip.show = true;
                    });
                    button.addEventListener("blur", () => {
                        tooltip.show = false;
                    });
                })();
            <\/script>
        `]),e())]},C={args:{buttonText:`i need a callout`,class:`flex items-center gap-8`,placement:`right`,callout:!0,show:!0}},w={args:{buttonId:`highlight-target1`,id:`highlight-message`,buttonText:`I'm highlighted`,placement:`right`,highlight:!0,flip:!0},decorators:[e=>r(m||=d([`
            `,`
            <script>
                (() => {
                    const button = document.getElementById("highlight-target1");
                    const highlight = document.getElementById("highlight-message");
                    button.addEventListener("click", () => {
                        highlight.show = !highlight.show;
                    });
                })();
            <\/script>
        `]),e())]},T={args:{class:`flex items-center gap-8`,placement:`right`,buttonId:`highlight-target2`,buttonText:`click me`,id:`dismissible-highlight-message`,"can-close":!0,"cross-axis":!0,highlight:!0,flip:!0},decorators:[e=>r(h||=d([`
            `,`
            <script>
                (() => {
                    const button = document.getElementById("highlight-target2");
                    const highlight = document.getElementById(
                        "dismissible-highlight-message",
                    );
                    button.addEventListener("click", () => {
                        highlight.show = true;
                    });
                    highlight.addEventListener("close", () => {
                        highlight.show = false;
                    });
                })();
            <\/script>
        `]),e())]},E={args:{},render(){return r`
            <w-attention id="accessible-attention" placement="right" popover>
                <div slot="message">
                    <p id="aria-content" role="tooltip">
                        I'm a popover with ARIA "tooltip" role
                    </p>
                    <p>(this text is less relevant)</p>
                </div>
                <w-button
                    aria-details="aria-content"
                    id="accessible-target"
                    slot="target"
                    variant="secondary"
                >
                    Click to toggle a popover
                </w-button>
            </w-attention>
        `},decorators:[e=>r(g||=d([` `,`
                <script>
                    (() => {
                        const button = document.getElementById("accessible-target");
                        const accessibleAttention = document.getElementById(
                            "accessible-attention",
                        );
                        button.addEventListener("click", () => {
                            accessibleAttention.show = !accessibleAttention.show;
                        });
                    })();
                <\/script>`]),e())]},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    placement: "bottom",
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
                    @click=\${(e: PointerEvent) => {
      const attention = (e.currentTarget as HTMLButtonElement).closest("w-attention") as WarpAttention;
      attention.show = !attention.show;
    }}
                >
                    Click to toggle a popover
                </w-button>
                <span slot="message">I'm a popover</span>
            </w-attention>
        \`;
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    placement: "right",
    buttonText: "hover me",
    id: "tooltip-element",
    tooltip: true,
    flip: true,
    buttonId: "tooltip-target"
  },
  decorators: [story => html\`
            \${story()}
            <script>
                (() => {
                    const button = document.getElementById("tooltip-target");
                    const tooltip = document.getElementById("tooltip-element");
                    tooltip.show = true;
                    button.addEventListener("click", (e) => {
                        tooltip.show = true;
                    });
                    button.addEventListener("mouseover", () => {
                        tooltip.show = true;
                    });
                    button.addEventListener("mouseout", () => {
                        tooltip.show = false;
                    });
                    button.addEventListener("focus", () => {
                        tooltip.show = true;
                    });
                    button.addEventListener("blur", () => {
                        tooltip.show = false;
                    });
                })();
            <\/script>
        \`]
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    buttonText: "i need a callout",
    class: "flex items-center gap-8",
    placement: "right",
    callout: true,
    show: true
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    buttonId: "highlight-target1",
    id: "highlight-message",
    buttonText: \`I'm highlighted\`,
    placement: "right",
    highlight: true,
    flip: true
  },
  decorators: [story => html\`
            \${story()}
            <script>
                (() => {
                    const button = document.getElementById("highlight-target1");
                    const highlight = document.getElementById("highlight-message");
                    button.addEventListener("click", () => {
                        highlight.show = !highlight.show;
                    });
                })();
            <\/script>
        \`]
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    class: "flex items-center gap-8",
    placement: "right",
    buttonId: "highlight-target2",
    buttonText: "click me",
    id: "dismissible-highlight-message",
    ["can-close"]: true,
    ["cross-axis"]: true,
    highlight: true,
    flip: true
  },
  decorators: [story => html\`
            \${story()}
            <script>
                (() => {
                    const button = document.getElementById("highlight-target2");
                    const highlight = document.getElementById(
                        "dismissible-highlight-message",
                    );
                    button.addEventListener("click", () => {
                        highlight.show = true;
                    });
                    highlight.addEventListener("close", () => {
                        highlight.show = false;
                    });
                })();
            <\/script>
        \`]
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    return html\`
            <w-attention id="accessible-attention" placement="right" popover>
                <div slot="message">
                    <p id="aria-content" role="tooltip">
                        I'm a popover with ARIA "tooltip" role
                    </p>
                    <p>(this text is less relevant)</p>
                </div>
                <w-button
                    aria-details="aria-content"
                    id="accessible-target"
                    slot="target"
                    variant="secondary"
                >
                    Click to toggle a popover
                </w-button>
            </w-attention>
        \`;
  },
  decorators: [story => html\` \${story()}
                <script>
                    (() => {
                        const button = document.getElementById("accessible-target");
                        const accessibleAttention = document.getElementById(
                            "accessible-attention",
                        );
                        button.addEventListener("click", () => {
                            accessibleAttention.show = !accessibleAttention.show;
                        });
                    })();
                <\/script>\`]
}`,...E.parameters?.docs?.source}}},D=[`Default`,`ToolTip`,`Callout`,`Highlight`,`DismissibleHighlight`,`AccessibleTooltip`]})))()}export{S as a,w as i,C as n,f as o,T as r,O as s,E as t};