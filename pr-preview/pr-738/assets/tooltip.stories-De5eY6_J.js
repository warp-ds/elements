import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{_ as n,d as r,i,l as a,n as o,p as s,r as c,s as l,t as u,u as d,x as f}from"./decorate-WA8yucmX.js";import{D as p,E as m,T as h,_ as g,l as _,u as v,y}from"./iframe-prwWVCQe.js";import{a as b,n as x,r as S,t as C}from"./utilities-CLq91F3N.js";import{c as w,i as T,n as E,o as D,r as O,s as k,t as A}from"./floating-ui.dom-BZwHDy4M.js";import{t as j}from"./button-CunLSkn2.js";import{t as M}from"./textfield-BJ1a-vRW.js";var N,P=e((()=>{N=JSON.parse(`{"tooltip.aria.description":["En sort taleboble med flere oplysninger"],"tooltip.aria.pointingDown":["peger nedad"],"tooltip.aria.pointingLeft":["peger til venstre"],"tooltip.aria.pointingRight":["peger til højre"],"tooltip.aria.pointingUp":["peger opad"]}`)})),F,I=e((()=>{F=JSON.parse(`{"tooltip.aria.description":["A black speech bubble providing complementary information"],"tooltip.aria.pointingDown":["pointing down"],"tooltip.aria.pointingLeft":["pointing left"],"tooltip.aria.pointingRight":["pointing right"],"tooltip.aria.pointingUp":["pointing up"]}`)})),L,R=e((()=>{L=JSON.parse(`{"tooltip.aria.description":["Musta puhekupla, joka tarjoaa täydentävää tietoa"],"tooltip.aria.pointingDown":["osoittaa alas"],"tooltip.aria.pointingLeft":["osoittaa vasemmalle"],"tooltip.aria.pointingRight":["osoittaa oikealle"],"tooltip.aria.pointingUp":["osoittaa ylös"]}`)})),z,B=e((()=>{z=JSON.parse(`{"tooltip.aria.description":["En svart taleboble som forklarer konteksten"],"tooltip.aria.pointingDown":["peker ned"],"tooltip.aria.pointingLeft":["peker til venstre"],"tooltip.aria.pointingRight":["peker til høyre"],"tooltip.aria.pointingUp":["peker opp"]}`)})),V,H=e((()=>{V=JSON.parse(`{"tooltip.aria.description":["En svart pratbubbla som ger kompletterande information"],"tooltip.aria.pointingDown":["pekar ned"],"tooltip.aria.pointingLeft":["pekar vänster"],"tooltip.aria.pointingRight":["pekar höger"],"tooltip.aria.pointingUp":["pekar upp"]}`)})),U,W=e((()=>{d(),U=f`
	:host {
		--_background-color: var(
			--w-c-tooltip-bg,
			var(--w-color-tooltip-background-static)
		);
		--_box-shadow: var(--w-c-tooltip-box-shadow, var(--w-shadow-m));
		--_color: var(--w-c-tooltip-color, var(--w-s-color-text-inverted-static));
		--_z-index: var(--w-c-tooltip-z-index, 30);
	}

	[part="tooltip"] {
		box-shadow: var(--_box-shadow);
		width: max-content;
		position: absolute;
		top: 0;
		left: 0;
		background: var(--_background-color);
		color: var(--_color);
		padding: 6px 8px;
		border-radius: 4px;
		font-size: var(--w-font-size-s);
		font-weight: 400;
		line-height: var(--w-line-height-s);
		z-index: var(--_z-index);
	}

	[part="arrow"] {
		position: absolute;
		width: 23px; /* square box for floating-ui arrow plugin, width of the "beak" */
		height: 23px;
		z-index: -1; /* within part="tooltip"'s stacking context */
	}

	[part="beak"] {
		position: absolute;
		background: var(--_background-color);
	}

	[part="hover-bridge"] {
		position: fixed;
		z-index: calc(var(--_z-index) + 1);
		inset: 0px;
		clip-path: polygon(
			var(--_hover-bridge-top-left-x, 0) var(--_hover-bridge-top-left-y, 0),
			var(--_hover-bridge-top-right-x, 0) var(--_hover-bridge-top-right-y, 0),
			var(--_hover-bridge-bottom-right-x, 0)
				var(--_hover-bridge-bottom-right-y, 0),
			var(--_hover-bridge-bottom-left-x, 0)
				var(--_hover-bridge-bottom-left-y, 0)
		);
	}

	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border-width: 0;
	}
`})),G,K=e((()=>{d(),p(),D(),y(),_(),P(),I(),R(),B(),H(),W(),c(),o(),G=class extends r{static{this.styles=[v,U]}#e;get#t(){let e=m.t({id:`tooltip.aria.description`,message:`tooltip`,comment:`Default screenreader message for tooltip in the attention component`});if(!this.noArrow)switch(e+=` `,this.#e){case`top-start`:case`top`:case`top-end`:e+=m._({id:`tooltip.aria.pointingDown`,message:`pointing down`,comment:`Screenreader description for downwards arrow direction in the tooltip component`});break;case`right-start`:case`right`:case`right-end`:e+=m._({id:`tooltip.aria.pointingLeft`,message:`pointing left`,comment:`Screenreader description for left arrow direction in the tooltip component`});break;case`bottom-start`:case`bottom`:case`bottom-end`:e+=m._({id:`tooltip.aria.pointingUp`,message:`pointing up`,comment:`Screenreader description for upwards arrow direction in the tooltip component`});break;case`left-start`:case`left`:case`left-end`:e+=m._({id:`tooltip.aria.pointingRight`,message:`pointing right`,comment:`Screenreader description for right arrow direction in the tooltip component`});break}return e}#n;#r;constructor(){super(),this.for=``,this.noArrow=!1,this.open=!1,this.placement=`top`,this.#e=`top`,this.showDelay=150,this.hideDelay=0,this.target=null,this.#n=null,this.handleBlur=()=>{this.hide()},this.handleFocus=()=>{this.show()},this.handleMouseOver=()=>{clearTimeout(this.#r),this.#r=window.setTimeout(()=>{this.show()},this.showDelay)},this.handleKeydown=e=>{e.key===`Escape`&&(e.preventDefault(),this.hide())},this.handleMouseOut=e=>{let t=e.relatedTarget;if(t){let e=this.contains(t),n=this.target?.contains(t);if(e||n)return}clearTimeout(this.#r),this.#r=window.setTimeout(()=>{this.hide()},this.hideDelay)},g(F,z,L,N,V)}connectedCallback(){super.connectedCallback(),this.for&&this.#i(),this.addEventListener(`mouseout`,this.handleMouseOut)}disconnectedCallback(){super.disconnectedCallback(),this.#s?.(),document.removeEventListener(`keydown`,this.handleKeydown)}updated(e){e.has(`for`)&&this.#i(),e.has(`open`)&&this.#a()}firstUpdated(){this.tooltip.hidden=!this.open}#i(){let e=this.getRootNode?.();if(!e)return;let t=this.for?e.getElementById(this.for):null,n=this.target;t!==this.target&&(t&&(t.addEventListener(`blur`,this.handleBlur),t.addEventListener(`focus`,this.handleFocus),t.addEventListener(`mouseover`,this.handleMouseOver),t.addEventListener(`mouseout`,this.handleMouseOut)),n&&(n.removeEventListener(`blur`,this.handleBlur),n.removeEventListener(`focus`,this.handleFocus),n.removeEventListener(`mouseover`,this.handleMouseOver),n.removeEventListener(`mouseout`,this.handleMouseOut)),this.target=t)}async hide(){this.open&&=!1}async show(){this.open||=!0}#a(){this.tooltip&&(this.open?(this.tooltip.hidden=!1,this.hoverBridge.hidden=!1,document.addEventListener(`keydown`,this.handleKeydown),this.updateComplete.then(()=>{this.#o()})):(this.hoverBridge.hidden=!0,this.tooltip.hidden=!0,this.#s(),document.removeEventListener(`keydown`,this.handleKeydown)))}#o(){!this.tooltip||!this.target||(this.#c(),this.#n=E(this.target,this.tooltip,()=>{this.#c()}))}#s(){this.#n?.(),this.#n=null}async#c(){if(!this.tooltip||!this.target)return;let e=[k({mainAxis:8}),T(),w({padding:8})],t=!this.noArrow&&this.arrow;t&&e.push(A({element:this.arrow}));let{x:n,y:r,placement:i,middlewareData:a}=await O(this.target,this.tooltip,{placement:this.placement,middleware:e});if(this.#e=i,Object.assign(this.tooltip.style,{left:`${n.toFixed(1)}px`,top:`${r.toFixed(1)}px`}),t){let e=``,t=0,n=0,r=8.5,o=`${r/2}px`;i===`top`?(e=`polygon(43% 82.3%, 24.6% 29.3%, 23.9% 27.4%, 23.3% 25.6%, 22.6% 23.9%, 21.9% 22.2%, 21.1% 20.6%, 20.4% 19%, 19.7% 17.5%, 18.9% 16.1%, 18.1% 14.7%, 17.4% 13.4%, 16.6% 12.1%, 15.8% 10.9%, 15% 9.7%, 14.1% 8.6%, 13.3% 7.6%, 12.5% 6.6%, 11.6% 5.7%, 10.8% 4.9%, 9.9% 4.1%, 9% 3.4%, 8.1% 2.8%, 7.3% 2.2%, 6.4% 1.7%, 5.5% 1.2%, 4.6% 0.9%, 3.7% 0.6%, 2.8% 0.3%, 1.8% 0.1%, 0.9% 0%, 0% 0%, 98.4% 0%, 97.5% 0%, 96.5% 0.1%, 95.6% 0.3%, 94.7% 0.6%, 93.8% 0.9%, 92.9% 1.2%, 92% 1.7%, 91.1% 2.2%, 90.2% 2.8%, 89.4% 3.4%, 88.5% 4.1%, 87.6% 4.9%, 86.8% 5.7%, 85.9% 6.6%, 85.1% 7.6%, 84.2% 8.6%, 83.4% 9.7%, 82.6% 10.9%, 81.8% 12.1%, 81% 13.4%, 80.2% 14.7%, 79.5% 16.1%, 78.7% 17.5%, 78% 19%, 77.2% 20.6%, 76.5% 22.2%, 75.8% 23.9%, 75.1% 25.6%, 74.4% 27.4%, 73.8% 29.3%, 55.3% 82.3%, 55% 83.3%, 54.6% 84.1%, 54.3% 85%, 53.9% 85.7%, 53.5% 86.4%, 53.1% 87%, 52.7% 87.6%, 52.3% 88.1%, 51.8% 88.5%, 51.4% 88.8%, 51% 89.1%, 50.5% 89.4%, 50.1% 89.5%, 49.6% 89.6%, 49.2% 89.6%, 48.7% 89.6%, 48.3% 89.5%, 47.9% 89.4%, 47.4% 89.1%, 47% 88.8%, 46.6% 88.5%, 46.1% 88.1%, 45.7% 87.6%, 45.3% 87%, 44.9% 86.4%, 44.5% 85.7%, 44.1% 85%, 43.7% 84.1%, 43.4% 83.3%)`,t=23,n=r,o=`3.5px`):i===`bottom`?(e=`polygon(55.3% 7.3%, 73.8% 60.4%, 74.4% 62.2%, 75.1% 64%, 75.8% 65.7%, 76.5% 67.4%, 77.2% 69%, 78% 70.6%, 78.7% 72.1%, 79.5% 73.6%, 80.2% 75%, 81% 76.3%, 81.8% 77.6%, 82.6% 78.8%, 83.4% 79.9%, 84.2% 81%, 85.1% 82%, 85.9% 83%, 86.8% 83.9%, 87.6% 84.7%, 88.5% 85.5%, 89.4% 86.2%, 90.2% 86.9%, 91.1% 87.4%, 92% 88%, 92.9% 88.4%, 93.8% 88.8%, 94.7% 89.1%, 95.6% 89.3%, 96.5% 89.5%, 97.5% 89.6%, 98.4% 89.6%, 0% 89.6%, 0.9% 89.6%, 1.8% 89.5%, 2.8% 89.3%, 3.7% 89.1%, 4.6% 88.8%, 5.5% 88.4%, 6.4% 88%, 7.3% 87.4%, 8.1% 86.9%, 9% 86.2%, 9.9% 85.5%, 10.8% 84.7%, 11.6% 83.9%, 12.5% 83%, 13.3% 82%, 14.1% 81%, 15% 79.9%, 15.8% 78.8%, 16.6% 77.6%, 17.4% 76.3%, 18.1% 75%, 18.9% 73.6%, 19.7% 72.1%, 20.4% 70.6%, 21.1% 69%, 21.9% 67.4%, 22.6% 65.7%, 23.3% 64%, 23.9% 62.2%, 24.6% 60.4%, 43% 7.3%, 43.4% 6.4%, 43.7% 5.5%, 44.1% 4.7%, 44.5% 3.9%, 44.9% 3.3%, 45.3% 2.6%, 45.7% 2.1%, 46.1% 1.6%, 46.6% 1.2%, 47% 0.8%, 47.4% 0.5%, 47.9% 0.3%, 48.3% 0.1%, 48.7% 0%, 49.2% 0%, 49.6% 0%, 50.1% 0.1%, 50.5% 0.3%, 51% 0.5%, 51.4% 0.8%, 51.8% 1.2%, 52.3% 1.6%, 52.7% 2.1%, 53.1% 2.6%, 53.5% 3.3%, 53.9% 3.9%, 54.3% 4.7%, 54.6% 5.5%, 55% 6.4%)`,t=23,n=r):i===`right`?(e=`polygon(7.3% 43%, 60.4% 24.6%, 62.2% 23.9%, 64% 23.3%, 65.7% 22.6%, 67.4% 21.9%, 69% 21.1%, 70.6% 20.4%, 72.1% 19.7%, 73.6% 18.9%, 75% 18.1%, 76.3% 17.4%, 77.6% 16.6%, 78.8% 15.8%, 79.9% 15%, 81% 14.1%, 82% 13.3%, 83% 12.5%, 83.9% 11.6%, 84.7% 10.8%, 85.5% 9.9%, 86.2% 9%, 86.9% 8.1%, 87.4% 7.3%, 88% 6.4%, 88.4% 5.5%, 88.8% 4.6%, 89.1% 3.7%, 89.3% 2.8%, 89.5% 1.8%, 89.6% 0.9%, 89.6% 0%, 89.6% 98.4%, 89.6% 97.5%, 89.5% 96.5%, 89.3% 95.6%, 89.1% 94.7%, 88.8% 93.8%, 88.4% 92.9%, 88% 92%, 87.4% 91.1%, 86.9% 90.2%, 86.2% 89.4%, 85.5% 88.5%, 84.7% 87.6%, 83.9% 86.8%, 83% 85.9%, 82% 85.1%, 81% 84.2%, 79.9% 83.4%, 78.8% 82.6%, 77.6% 81.8%, 76.3% 81%, 75% 80.2%, 73.6% 79.5%, 72.1% 78.7%, 70.6% 78%, 69% 77.2%, 67.4% 76.5%, 65.7% 75.8%, 64% 75.1%, 62.2% 74.4%, 60.4% 73.8%, 7.3% 55.3%, 6.4% 55%, 5.5% 54.6%, 4.7% 54.3%, 3.9% 53.9%, 3.3% 53.5%, 2.6% 53.1%, 2.1% 52.7%, 1.6% 52.3%, 1.2% 51.8%, 0.8% 51.4%, 0.5% 51%, 0.3% 50.5%, 0.1% 50.1%, 0% 49.6%, 0% 49.2%, 0% 48.7%, 0.1% 48.3%, 0.3% 47.9%, 0.5% 47.4%, 0.8% 47%, 1.2% 46.6%, 1.6% 46.1%, 2.1% 45.7%, 2.6% 45.3%, 3.3% 44.9%, 3.9% 44.5%, 4.7% 44.1%, 5.5% 43.7%, 6.4% 43.4%)`,t=r,n=23):i===`left`&&(e=`polygon(82.3% 55.3%, 29.3% 73.8%, 27.4% 74.4%, 25.6% 75.1%, 23.9% 75.8%, 22.2% 76.5%, 20.6% 77.2%, 19% 78%, 17.5% 78.7%, 16.1% 79.5%, 14.7% 80.2%, 13.4% 81%, 12.1% 81.8%, 10.9% 82.6%, 9.7% 83.4%, 8.6% 84.2%, 7.6% 85.1%, 6.6% 85.9%, 5.7% 86.8%, 4.9% 87.6%, 4.1% 88.5%, 3.4% 89.4%, 2.8% 90.2%, 2.2% 91.1%, 1.7% 92%, 1.2% 92.9%, 0.9% 93.8%, 0.6% 94.7%, 0.3% 95.6%, 0.1% 96.5%, 0% 97.5%, 0% 98.4%, 0% 0%, 0% 0.9%, 0.1% 1.8%, 0.3% 2.8%, 0.6% 3.7%, 0.9% 4.6%, 1.2% 5.5%, 1.7% 6.4%, 2.2% 7.3%, 2.8% 8.1%, 3.4% 9%, 4.1% 9.9%, 4.9% 10.8%, 5.7% 11.6%, 6.6% 12.5%, 7.6% 13.3%, 8.6% 14.1%, 9.7% 15%, 10.9% 15.8%, 12.1% 16.6%, 13.4% 17.4%, 14.7% 18.1%, 16.1% 18.9%, 17.5% 19.7%, 19% 20.4%, 20.6% 21.1%, 22.2% 21.9%, 23.9% 22.6%, 25.6% 23.3%, 27.4% 23.9%, 29.3% 24.6%, 82.3% 43%, 83.3% 43.4%, 84.1% 43.7%, 85% 44.1%, 85.7% 44.5%, 86.4% 44.9%, 87% 45.3%, 87.6% 45.7%, 88.1% 46.1%, 88.5% 46.6%, 88.8% 47%, 89.1% 47.4%, 89.4% 47.9%, 89.5% 48.3%, 89.6% 48.7%, 89.6% 49.2%, 89.6% 49.6%, 89.5% 50.1%, 89.4% 50.5%, 89.1% 51%, 88.8% 51.4%, 88.5% 51.8%, 88.1% 52.3%, 87.6% 52.7%, 87% 53.1%, 86.4% 53.5%, 85.7% 53.9%, 85% 54.3%, 84.1% 54.6%, 83.3% 55%)`,t=r,n=23);let s=`-${23/2}px`,c={top:`bottom`,right:`left`,bottom:`top`,left:`right`}[i.split(`-`)[0]],{x:l,y:u}=a.arrow??{};Object.assign(this.arrow.style,{left:l==null?``:`${l}px`,top:u==null?``:`${u}px`,right:``,bottom:``,[c]:s}),Object.assign(this.beak.style,{height:`${n}px`,width:`${t}px`,clipPath:e,[c]:o})}requestAnimationFrame(()=>this.#l())}#l(){if(!this.target)return;let e=this.target.getBoundingClientRect(),t=this.tooltip.getBoundingClientRect(),n=this.placement.includes(`top`)||this.placement.includes(`bottom`),r,i,a,o,s,c,l,u;n?e.top<t.top?(r=e.left,i=e.bottom,a=e.right,o=e.bottom,s=t.left,c=t.top,l=t.right,u=t.top):(r=t.left,i=t.bottom,a=t.right,o=t.bottom,s=e.left,c=e.top,l=e.right,u=e.top):e.left<t.left?(r=e.right,i=e.top,a=t.left,o=t.top,s=e.right,c=e.bottom,l=t.left,u=t.bottom):(r=t.right,i=t.top,a=e.left,o=e.top,s=t.right,c=t.bottom,l=e.left,u=e.bottom),this.style.setProperty(`--_hover-bridge-top-left-x`,`${r}px`),this.style.setProperty(`--_hover-bridge-top-left-y`,`${i}px`),this.style.setProperty(`--_hover-bridge-top-right-x`,`${a}px`),this.style.setProperty(`--_hover-bridge-top-right-y`,`${o}px`),this.style.setProperty(`--_hover-bridge-bottom-left-x`,`${s}px`),this.style.setProperty(`--_hover-bridge-bottom-left-y`,`${c}px`),this.style.setProperty(`--_hover-bridge-bottom-right-x`,`${l}px`),this.style.setProperty(`--_hover-bridge-bottom-right-y`,`${u}px`)}render(){return n`
			<div part="hover-bridge" hidden></div>
			<div
				part="tooltip"
				role="tooltip"
				aria-description="${this.#t}"
				hidden
			>
				${this.noArrow?s:n`
								<div part="arrow">
									<div part="beak"></div>
								</div>
							`}
				<slot></slot>
			</div>
		`}},u([a({useDefault:!0})],G.prototype,`for`,void 0),u([a({type:Boolean,attribute:`no-arrow`})],G.prototype,`noArrow`,void 0),u([a({type:Boolean})],G.prototype,`open`,void 0),u([a({useDefault:!0})],G.prototype,`placement`,void 0),u([a({attribute:`show-delay`,type:Number,useDefault:!0,reflect:!0})],G.prototype,`showDelay`,void 0),u([a({attribute:`hide-delay`,type:Number,useDefault:!0,reflect:!0})],G.prototype,`hideDelay`,void 0),u([l()],G.prototype,`target`,void 0),u([i(`[part="tooltip"]`)],G.prototype,`tooltip`,void 0),u([i(`[part="hover-bridge"]`)],G.prototype,`hoverBridge`,void 0),u([i(`[part="arrow"]`)],G.prototype,`arrow`,void 0),u([i(`[part="beak"]`)],G.prototype,`beak`,void 0),customElements.get(`w-tooltip`)||customElements.define(`w-tooltip`,G)})),q=t({Default:()=>Y,Placement:()=>X,Textfield:()=>Z,__namedExportsOrder:()=>Q,default:()=>J}),J,Y,X,Z,Q,$=e((()=>{S(),d(),h(),C(),j(),M(),K(),J={title:`Overlays/Tooltip`,args:{"no-arrow":!1,placement:`top`,"show-delay":150,"hide-delay":0},argTypes:{placement:{control:{type:`select`},options:[`top`,`bottom`,`left`,`right`]}}},Y={render(e){return n`
            <w-button id="my-button" aria-labelledby="my-tooltip">
                Hover over me
            </w-button>
            <w-tooltip id="my-tooltip" for="my-button" ${b(x(e))}>
                Check out this tooltip
            </w-tooltip>
        `}},X={render({placement:e,...t}){return n`
            <div style="display: flex; gap: 32px; flex-direction: column;">
                <div>
                    <w-button id="top-button" aria-labelledby="top-tooltip">
                        Top
                    </w-button>
                    <w-tooltip
                        id="top-tooltip"
                        for="top-button"
                        placement="top"
                        ${b(x(t))}
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
                        ${b(x(t))}
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
                        ${b(x(t))}
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
                        ${b(x(t))}
                    >
                        Placement left
                    </w-tooltip>
                </div>
            </div>
        `}},Z={args:{},argTypes:{},parameters:{},render(){return n`
            <w-textfield
                name="tooltip-demo"
                label="Needs an explanation"
                placeholder="Placeholder"
                help-text="Help text is available, but might not be enough, or the added context is not important enough that we use help-text"
                tooltip="This tooltip adds supplementary information"
                optional
            ></w-textfield>
        `}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},Q=[`Default`,`Placement`,`Textfield`]}));$();export{Y as Default,X as Placement,Z as Textfield,Q as __namedExportsOrder,J as default,q as n,$ as t};