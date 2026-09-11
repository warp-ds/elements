import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{f as n,p as r,y as i}from"./decorate-kJVNAdyH.js";import{n as a,t as o}from"./dist-Bn_0n649.js";import{n as s,t as c}from"./styles-BxpTFSox.js";import{i as l,n as u,r as d}from"./utilities-DyUKeeub.js";import{t as f}from"./button-2zTV9SrP.js";import{n as p,r as m,t as h}from"./styles-C4uzx9FD.js";import{n as g,t as _}from"./checkbox-group-Dkkq4mdm.js";import{n as v,t as y}from"./radio-group-De1bIP6r.js";var b;function x(){return(x=e((()=>{n(),c(),p(),b=class extends r{static{this.styles=[s,h,m]}render(){return i`
			<div part="base">
				<slot></slot>
			</div>
		`}},customElements.get(`w-button-group`)||customElements.define(`w-button-group`,b)})))()}var S=t({ButtonGroupCheckbox:()=>k,ButtonGroupRadio:()=>O,Default:()=>D,__namedExportsOrder:()=>A,default:()=>E}),C,w,T,E,D,O,k,A;function j(){return(j=e((()=>{d(),a(),n(),f(),x(),g(),_(),v(),y(),{events:C,args:w,argTypes:T}=o(`w-button-group`),E={title:`Buttons/Button Group`,render:e=>i`
            <p>TODO: variant=primary here gets us visually in the ballpark (minus borders), but Figma talks about that being an Active state. What is this component when it's got buttons, is it a tablist? When is a button in a button group considered active? Can we even use w-button here?</p>
            <w-button-group ${l(u(e))}>
                <w-button variant="primary">Left</w-button>
                <w-button>Middle</w-button>
                <w-button>Right</w-button>
            </w-button-group>
        `,args:w,argTypes:T,parameters:{actions:{handles:C}}},D={},O={render(){return i`
            <w-radio-group name="package-size" type="button">
                <w-radio value="small">Small</w-radio>
                <w-radio value="medium">Medium</w-radio>
                <w-radio value="large">Large</w-radio>
            </w-radio-group>
        `}},k={render(){return i`
            <w-checkbox-group name="color-filters" type="button">
                <w-checkbox value="red">Red</w-checkbox>
                <w-checkbox value="green">Green</w-checkbox>
                <w-checkbox value="blue">Blue</w-checkbox>
            </w-checkbox-group>
        `}},A=[`Default`,`ButtonGroupRadio`,`ButtonGroupCheckbox`],D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render() {
    return html\`
            <w-radio-group name="package-size" type="button">
                <w-radio value="small">Small</w-radio>
                <w-radio value="medium">Medium</w-radio>
                <w-radio value="large">Large</w-radio>
            </w-radio-group>
        \`;
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render() {
    return html\`
            <w-checkbox-group name="color-filters" type="button">
                <w-checkbox value="red">Red</w-checkbox>
                <w-checkbox value="green">Green</w-checkbox>
                <w-checkbox value="blue">Blue</w-checkbox>
            </w-checkbox-group>
        \`;
  }
}`,...k.parameters?.docs?.source}}}})))()}export{S as n,j as r,D as t};