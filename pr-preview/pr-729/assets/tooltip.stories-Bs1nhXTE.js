import{a as e,i as t}from"./preload-helper-xPQekRTU.js";import{Ht as n,K as r,Lt as i}from"./iframe-ihHcNuh3.js";import{a,n as o,r as s,t as c}from"./utilities-DpCirleT.js";import{t as l}from"./button-CmiFSYoN.js";import{t as u}from"./tooltip-DpLuTpYE.js";import{t as d}from"./textfield-BGbec9cj.js";var f=e({Default:()=>m,Placement:()=>h,Textfield:()=>g,__namedExportsOrder:()=>_,default:()=>p}),p,m,h,g,_,v=t((()=>{s(),i(),r(),c(),l(),d(),u(),p={title:`Overlays/Tooltip`,args:{"no-arrow":!1,placement:`top`,"show-delay":150,"hide-delay":0},argTypes:{placement:{control:{type:`select`},options:[`top`,`bottom`,`left`,`right`]}}},m={render(e){return n`
            <w-button id="my-button" aria-labelledby="my-tooltip">
                Hover over me
            </w-button>
            <w-tooltip id="my-tooltip" for="my-button" ${a(o(e))}>
                Check out this tooltip
            </w-tooltip>
        `}},h={render({placement:e,...t}){return n`
            <div style="display: flex; gap: 32px; flex-direction: column;">
                <div>
                    <w-button id="top-button" aria-labelledby="top-tooltip">
                        Top
                    </w-button>
                    <w-tooltip
                        id="top-tooltip"
                        for="top-button"
                        placement="top"
                        ${a(o(t))}
                    >
                        Placement top
                    </w-tooltip>
                </div>
                <div>
                    <w-button id="right-button" aria-labelledby="right-tooltip"
                        >Right</w-button
                    >
                    <w-tooltip
                        id="right-tooltip"
                        for="right-button"
                        placement="right"
                        ${a(o(t))}
                    >
                        Placement right
                    </w-tooltip>
                </div>
                <div>
                    <w-button id="bottom-button" aria-labelledby="bottom-tooltip">
                        Bottom
                    </w-button>
                    <w-tooltip
                        id="bottom-tooltip"
                        for="bottom-button"
                        placement="bottom"
                        ${a(o(t))}
                    >
                        Placement bottom
                    </w-tooltip>
                </div>
                <div>
                    <w-button id="left-button" aria-labelledby="left-tooltip">
                        Left
                    </w-button>
                    <w-tooltip
                        id="left-tooltip"
                        for="left-button"
                        placement="left"
                        ${a(o(t))}
                    >
                        Placement left
                    </w-tooltip>
                </div>
            </div>
        `}},g={args:{},argTypes:{},parameters:{},render(){return n`
            <w-textfield
                name="tooltip-demo"
                label="Needs an explanation"
                placeholder="Placeholder"
                help-text="Help text is available, but might not be enough, or the added context is not important enough that we use help-text"
                tooltip="This tooltip adds supplementary information"
                optional
            ></w-textfield>
        `}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render(args) {
    return html\`
            <w-button id="my-button" aria-labelledby="my-tooltip">
                Hover over me
            </w-button>
            <w-tooltip id="my-tooltip" for="my-button" \${spread(prespread(args))}>
                Check out this tooltip
            </w-tooltip>
        \`;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render({
    placement,
    ...rest
  }) {
    return html\`
            <div style="display: flex; gap: 32px; flex-direction: column;">
                <div>
                    <w-button id="top-button" aria-labelledby="top-tooltip">
                        Top
                    </w-button>
                    <w-tooltip
                        id="top-tooltip"
                        for="top-button"
                        placement="top"
                        \${spread(prespread(rest))}
                    >
                        Placement top
                    </w-tooltip>
                </div>
                <div>
                    <w-button id="right-button" aria-labelledby="right-tooltip"
                        >Right</w-button
                    >
                    <w-tooltip
                        id="right-tooltip"
                        for="right-button"
                        placement="right"
                        \${spread(prespread(rest))}
                    >
                        Placement right
                    </w-tooltip>
                </div>
                <div>
                    <w-button id="bottom-button" aria-labelledby="bottom-tooltip">
                        Bottom
                    </w-button>
                    <w-tooltip
                        id="bottom-tooltip"
                        for="bottom-button"
                        placement="bottom"
                        \${spread(prespread(rest))}
                    >
                        Placement bottom
                    </w-tooltip>
                </div>
                <div>
                    <w-button id="left-button" aria-labelledby="left-tooltip">
                        Left
                    </w-button>
                    <w-tooltip
                        id="left-tooltip"
                        for="left-button"
                        placement="left"
                        \${spread(prespread(rest))}
                    >
                        Placement left
                    </w-tooltip>
                </div>
            </div>
        \`;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {},
  argTypes: {},
  parameters: {},
  render() {
    return html\`
            <w-textfield
                name="tooltip-demo"
                label="Needs an explanation"
                placeholder="Placeholder"
                help-text="Help text is available, but might not be enough, or the added context is not important enough that we use help-text"
                tooltip="This tooltip adds supplementary information"
                optional
            ></w-textfield>
        \`;
  }
}`,...g.parameters?.docs?.source}}},_=[`Default`,`Placement`,`Textfield`]}));v();export{m as Default,h as Placement,g as Textfield,_ as __namedExportsOrder,p as default,f as n,v as t};