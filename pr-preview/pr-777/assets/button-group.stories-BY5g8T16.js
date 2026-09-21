import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{f as n,y as r}from"./decorate-kJVNAdyH.js";import{n as i,t as a}from"./checkbox-group-C6M67ezz.js";import{n as o,t as s}from"./radio-group-D0o3YIZs.js";var c=t({ButtonGroupCheckbox:()=>u,ButtonGroupRadio:()=>d,__namedExportsOrder:()=>f,default:()=>l}),l,u,d,f;function p(){return(p=e((()=>{n(),i(),a(),o(),s(),l={title:`Buttons/Button Group`},u={render(){return r`
            <w-checkbox-group
                label="Filter by color"
                name="color-filters"
                type="button"
            >
                <w-checkbox value="red">Red</w-checkbox>
                <w-checkbox value="green">Green</w-checkbox>
                <w-checkbox value="blue">Blue</w-checkbox>
            </w-checkbox-group>
        `}},d={render(){return r`
            <w-radio-group label="Package size" name="package-size" type="button">
                <w-radio value="small">Small</w-radio>
                <w-radio value="medium">Medium</w-radio>
                <w-radio value="large">Large</w-radio>
            </w-radio-group>
        `}},f=[`ButtonGroupCheckbox`,`ButtonGroupRadio`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render() {
    return html\`
            <w-checkbox-group
                label="Filter by color"
                name="color-filters"
                type="button"
            >
                <w-checkbox value="red">Red</w-checkbox>
                <w-checkbox value="green">Green</w-checkbox>
                <w-checkbox value="blue">Blue</w-checkbox>
            </w-checkbox-group>
        \`;
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render() {
    return html\`
            <w-radio-group label="Package size" name="package-size" type="button">
                <w-radio value="small">Small</w-radio>
                <w-radio value="medium">Medium</w-radio>
                <w-radio value="large">Large</w-radio>
            </w-radio-group>
        \`;
  }
}`,...d.parameters?.docs?.source}}}})))()}export{p as i,d as n,c as r,u as t};