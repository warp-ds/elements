import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{c as n,h as r}from"./decorate-J4WBtiHw.js";import{n as i,t as a}from"./dist-Bnzru1sc.js";import{i as o,n as s,r as c}from"./utilities-DhdP2kMI.js";import{t as l}from"./expand-transition-DiGLoKMv.js";import{t as u}from"./button-BJkAuxe5.js";import{t as d}from"./taggedTemplateLiteral-BZenJ0bZ.js";import{n as f,t as p}from"./expandable-T-TSzOkY.js";var m=t({Animated:()=>T,Box:()=>S,BoxBleed:()=>C,CustomTitle:()=>O,Default:()=>b,DefaultWithDivider:()=>w,DeprecatedFlagsCompatibility:()=>j,Expanded:()=>x,NoChevron:()=>D,NoTitle:()=>k,StylingApi:()=>A,WithHeading:()=>E,__namedExportsOrder:()=>M,default:()=>y}),h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M;function N(){return(N=e((()=>{c(),i(),n(),u(),l(),f(),p(),{events:g,args:_,argTypes:v}=a(`w-expandable`),y={title:`Layout/Expandable`,render(e){return r`
            <w-expandable ${o(s(e))}>
                <p>This is the expandable content that can be shown or hidden.</p>
                <p>It can contain multiple paragraphs and other elements.</p>
            </w-expandable>
        `},args:_,argTypes:v,parameters:{actions:{handles:g}}},b={args:{title:`I'm expandable`,variant:`default`,expanded:!1,animated:!1,noChevron:!1}},x={args:{title:`I'm expanded by default`,variant:`default`,expanded:!0,animated:!1,noChevron:!1}},S={args:{title:`I'm a box expandable`,variant:`box`,expanded:!1,animated:!1,noChevron:!1}},C={args:{title:`I'm a box bleed expandable`,variant:`box-bleed`,expanded:!1,animated:!1,noChevron:!1}},w={args:{title:`I'm a divider expandable`,variant:`default-with-divider`,expanded:!1,animated:!0,noChevron:!1},render(e){return r`
            <w-expandable ${o(s(e))}>
                <p>This expandable has a custom title slot with an icon.</p>
            </w-expandable>
            <w-expandable ${o(s(e))}>
                <p>This expandable has a custom title slot with an icon.</p>
            </w-expandable>
            <w-expandable ${o(s(e))}>
                <p>This expandable has a custom title slot with an icon.</p>
            </w-expandable>
            <w-expandable ${o(s(e))}>
                <p>This expandable has a custom title slot with an icon.</p>
            </w-expandable>
            <w-expandable ${o(s(e))}>
                <p>This expandable has a custom title slot with an icon.</p>
            </w-expandable>
            <w-expandable ${o(s(e))}>
                <p>This expandable has a custom title slot with an icon.</p>
            </w-expandable>
        `}},T={args:{title:`I'm animated`,variant:`box`,expanded:!1,animated:!0,noChevron:!1}},E={args:{title:`I'm wrapped in h2`,variant:`box`,expanded:!1,animated:!1,noChevron:!1,"heading-level":2}},D={args:{title:`I have no chevron`,variant:`default`,expanded:!1,animated:!1,noChevron:!0}},O={args:{variant:`box`,expanded:!1,animated:!1,noChevron:!1},render(e){return r`
            <w-expandable ${o(s(e))}>
                <div slot="title" style="display: flex; align-items: center;">
                    <span>Custom title with icon</span>
                </div>
                <p>This expandable has a custom title slot with an icon.</p>
            </w-expandable>
        `}},k={args:{variant:`box`,expanded:!0,animated:!0},render(e){return r(h||=d([`
            <w-button
                aria-label="Toggle expandable content without title"
                aria-controls="expandableWithoutTitle"
                >Toggle</w-button
            >
            <w-expandable `,` id="expandableWithoutTitle">
                <p>with expanded content</p>
            </w-expandable>
            <script>
                document
                    .querySelector('[aria-controls="expandableWithoutTitle"]')
                    .addEventListener("click", () => {
                        const expand = document.getElementById("expandableWithoutTitle");
                        if (expand.expanded) {
                            expand.removeAttribute("expanded");
                        } else {
                            expand.setAttribute("expanded", "true");
                        }
                    });
            <\/script>
        `]),o(s(e)))}},A={args:{title:`Styled expandable`,variant:`box`,expanded:!1},render(e){return r`
            <pre>
<code>
&lt;style&gt;
w-expandable {
    --w-c-expandable-bg: rebeccapurple;
    --w-c-expandable-bg-hover: indigo;
    --w-c-expandable-border-color: cyan;
    --w-c-expandable-border-width: 2px;
    --w-c-expandable-border-radius: 24px;
    --w-c-expandable-padding-x: 2rem;
    --w-c-expandable-padding-y: 1rem;
    --w-c-expandable-gap: 1.5rem;
    color: white;
}

w-expandable::part(base) {
    text-transform: uppercase;
    box-shadow: inset 0 0 0 2px magenta;
}

w-expandable::part(chevron) {
    color: white;
}
&lt;/style&gt;
</code>
            </pre>
            <style>
                w-expandable {
                    --w-c-expandable-bg: rebeccapurple;
                    --w-c-expandable-bg-hover: indigo;
                    --w-c-expandable-border-color: cyan;
                    --w-c-expandable-border-width: 2px;
                    --w-c-expandable-border-radius: 24px;
                    --w-c-expandable-padding-x: 2rem;
                    --w-c-expandable-padding-y: 1rem;
                    --w-c-expandable-gap: 1.5rem;
                    color: white;
                }

                w-expandable::part(base) {
                    text-transform: uppercase;
                    box-shadow: inset 0 0 0 2px magenta;
                }

                w-expandable::part(chevron) {
                    color: white;
                }
            </style>
            <w-expandable ${o(s(e))}>
                <p>This story demonstrates expandable tokens and parts.</p>
            </w-expandable>
        `}},j={args:{title:`Deprecated flags compatibility`,expanded:!1,box:!0,bleed:!0}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    title: "I'm expandable",
    variant: "default",
    expanded: false,
    animated: false,
    noChevron: false
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    title: "I'm expanded by default",
    variant: "default",
    expanded: true,
    animated: false,
    noChevron: false
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    title: "I'm a box expandable",
    variant: "box",
    expanded: false,
    animated: false,
    noChevron: false
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    title: "I'm a box bleed expandable",
    variant: "box-bleed",
    expanded: false,
    animated: false,
    noChevron: false
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    title: "I'm a divider expandable",
    variant: "default-with-divider",
    expanded: false,
    animated: true,
    noChevron: false
  },
  render(args) {
    return html\`
            <w-expandable \${spread(prespread(args))}>
                <p>This expandable has a custom title slot with an icon.</p>
            </w-expandable>
            <w-expandable \${spread(prespread(args))}>
                <p>This expandable has a custom title slot with an icon.</p>
            </w-expandable>
            <w-expandable \${spread(prespread(args))}>
                <p>This expandable has a custom title slot with an icon.</p>
            </w-expandable>
            <w-expandable \${spread(prespread(args))}>
                <p>This expandable has a custom title slot with an icon.</p>
            </w-expandable>
            <w-expandable \${spread(prespread(args))}>
                <p>This expandable has a custom title slot with an icon.</p>
            </w-expandable>
            <w-expandable \${spread(prespread(args))}>
                <p>This expandable has a custom title slot with an icon.</p>
            </w-expandable>
        \`;
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    title: "I'm animated",
    variant: "box",
    expanded: false,
    animated: true,
    noChevron: false
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    title: "I'm wrapped in h2",
    variant: "box",
    expanded: false,
    animated: false,
    noChevron: false,
    "heading-level": 2
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    title: "I have no chevron",
    variant: "default",
    expanded: false,
    animated: false,
    noChevron: true
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "box",
    expanded: false,
    animated: false,
    noChevron: false
  },
  render(args) {
    return html\`
            <w-expandable \${spread(prespread(args))}>
                <div slot="title" style="display: flex; align-items: center;">
                    <span>Custom title with icon</span>
                </div>
                <p>This expandable has a custom title slot with an icon.</p>
            </w-expandable>
        \`;
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "box",
    expanded: true,
    animated: true
  },
  render(args) {
    return html\`
            <w-button
                aria-label="Toggle expandable content without title"
                aria-controls="expandableWithoutTitle"
                >Toggle</w-button
            >
            <w-expandable \${spread(prespread(args))} id="expandableWithoutTitle">
                <p>with expanded content</p>
            </w-expandable>
            <script>
                document
                    .querySelector('[aria-controls="expandableWithoutTitle"]')
                    .addEventListener("click", () => {
                        const expand = document.getElementById("expandableWithoutTitle");
                        if (expand.expanded) {
                            expand.removeAttribute("expanded");
                        } else {
                            expand.setAttribute("expanded", "true");
                        }
                    });
            <\/script>
        \`;
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Styled expandable",
    variant: "box",
    expanded: false
  },
  render(args) {
    return html\`
            <pre>
<code>
&lt;style&gt;
w-expandable {
    --w-c-expandable-bg: rebeccapurple;
    --w-c-expandable-bg-hover: indigo;
    --w-c-expandable-border-color: cyan;
    --w-c-expandable-border-width: 2px;
    --w-c-expandable-border-radius: 24px;
    --w-c-expandable-padding-x: 2rem;
    --w-c-expandable-padding-y: 1rem;
    --w-c-expandable-gap: 1.5rem;
    color: white;
}

w-expandable::part(base) {
    text-transform: uppercase;
    box-shadow: inset 0 0 0 2px magenta;
}

w-expandable::part(chevron) {
    color: white;
}
&lt;/style&gt;
</code>
            </pre>
            <style>
                w-expandable {
                    --w-c-expandable-bg: rebeccapurple;
                    --w-c-expandable-bg-hover: indigo;
                    --w-c-expandable-border-color: cyan;
                    --w-c-expandable-border-width: 2px;
                    --w-c-expandable-border-radius: 24px;
                    --w-c-expandable-padding-x: 2rem;
                    --w-c-expandable-padding-y: 1rem;
                    --w-c-expandable-gap: 1.5rem;
                    color: white;
                }

                w-expandable::part(base) {
                    text-transform: uppercase;
                    box-shadow: inset 0 0 0 2px magenta;
                }

                w-expandable::part(chevron) {
                    color: white;
                }
            </style>
            <w-expandable \${spread(prespread(args))}>
                <p>This story demonstrates expandable tokens and parts.</p>
            </w-expandable>
        \`;
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Deprecated flags compatibility",
    expanded: false,
    box: true,
    bleed: true
  }
}`,...j.parameters?.docs?.source}}},M=[`Default`,`Expanded`,`Box`,`BoxBleed`,`DefaultWithDivider`,`Animated`,`WithHeading`,`NoChevron`,`CustomTitle`,`NoTitle`,`StylingApi`,`DeprecatedFlagsCompatibility`]})))()}export{x as a,E as c,b as i,m as l,S as n,D as o,O as r,k as s,T as t,N as u};