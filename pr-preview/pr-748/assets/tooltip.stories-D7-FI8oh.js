import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{c as n,h as r}from"./decorate-J4WBtiHw.js";import"./__uno-CmvWQQDY.js";import{i,n as a,r as o}from"./utilities-DhdP2kMI.js";import{t as s}from"./button-DJxYfhFB.js";import{t as c}from"./tooltip-Cg97vTGg.js";import{t as l}from"./textfield-C4QhGFIW.js";var u=t({Default:()=>f,Placement:()=>p,Textfield:()=>m,__namedExportsOrder:()=>h,default:()=>d}),d,f,p,m,h;function g(){return(g=e((()=>{o(),n(),s(),l(),c(),d={title:`Overlays/Tooltip`,args:{"no-arrow":!1,placement:`top`,"show-delay":150,"hide-delay":0},argTypes:{placement:{control:{type:`select`},options:[`top`,`bottom`,`left`,`right`]}}},f={render(e){return r`
            <w-button id="my-button" aria-labelledby="my-tooltip">
                Hover over me
            </w-button>
            <w-tooltip id="my-tooltip" for="my-button" ${i(a(e))}>
                Check out this tooltip
            </w-tooltip>
        `}},p={render({placement:e,...t}){return r`
            <div style="display: flex; gap: 32px; flex-direction: column;">
                <div>
                    <w-button id="top-button" aria-labelledby="top-tooltip">
                        Top
                    </w-button>
                    <w-tooltip
                        id="top-tooltip"
                        for="top-button"
                        placement="top"
                        ${i(a(t))}
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
                        ${i(a(t))}
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
                        ${i(a(t))}
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
                        ${i(a(t))}
                    >
                        Placement left
                    </w-tooltip>
                </div>
            </div>
        `}},m={args:{},argTypes:{},parameters:{},render(){return r`
            <w-textfield
                name="tooltip-demo"
                label="Needs an explanation"
                placeholder="Placeholder"
                help-text="Help text is available, but might not be enough, or the added context is not important enough that we use help-text"
                tooltip="This tooltip adds supplementary information"
                optional
            ></w-textfield>
        `}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h=[`Default`,`Placement`,`Textfield`]})))()}export{u as a,g as i,p as n,m as r,f as t};