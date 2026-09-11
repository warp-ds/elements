import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{C as n,f as r,p as i,y as a}from"./decorate-kJVNAdyH.js";import{n as o,t as s}from"./dist-Bn_0n649.js";import{n as c,t as l}from"./styles-BxpTFSox.js";import{i as u,n as d,r as f}from"./utilities-DyUKeeub.js";import{t as p}from"./button-D1TGgYkI.js";import{n as m,t as h}from"./checkbox-group-lpWNXXCJ.js";import{n as g,t as _}from"./radio-group-lI5bI-5O.js";var v;function y(){return(y=e((()=>{r(),v=n`
`})))()}var b;function x(){return(x=e((()=>{r(),l(),y(),b=class extends i{static{this.styles=[c,v]}render(){return a`
			<div part="base">
				<slot></slot>
			</div>
		`}},customElements.get(`w-button-group`)||customElements.define(`w-button-group`,b)})))()}var S=t({ButtonGroupRadio:()=>O,Default:()=>D,__namedExportsOrder:()=>k,default:()=>E}),C,w,T,E,D,O,k;function A(){return(A=e((()=>{f(),o(),r(),p(),x(),m(),h(),g(),_(),{events:C,args:w,argTypes:T}=s(`w-button-group`),E={title:`Layout/ButtonGroup`,render:e=>a`
            <w-button-group ${u(d(e))}> Slot content </w-button-group>
        `,args:w,argTypes:T,parameters:{actions:{handles:C}}},D={},O={render(){return a`
            <w-radio-group name="package-size" type="button">
                <w-radio value="small">Small</w-radio>
                <w-radio value="medium">Medium</w-radio>
                <w-radio value="large">Large</w-radio>
            </w-radio-group>
        `}},k=[`Default`,`ButtonGroupRadio`],D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render() {
    return html\`
            <w-radio-group name="package-size" type="button">
                <w-radio value="small">Small</w-radio>
                <w-radio value="medium">Medium</w-radio>
                <w-radio value="large">Large</w-radio>
            </w-radio-group>
        \`;
  }
}`,...O.parameters?.docs?.source}}}})))()}export{S as n,A as r,D as t};