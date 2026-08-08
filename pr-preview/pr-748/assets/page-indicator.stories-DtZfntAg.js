import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,c as n,h as r,l as i,r as a,s as o,t as s,y as c}from"./decorate-J4WBtiHw.js";import{a as l,o as u,r as d,t as f}from"./i18n-CkjYRTT1.js";import{n as p,t as m}from"./dist-DYA0KhTf.js";import{n as h,t as g}from"./class-map-DIRZr7YF.js";function*_(e,t){if(e!==void 0){let n=0;for(let r of e)yield t(r,n++)}}function*v(e,t,n=1){let r=t===void 0?0:e;t??=e;for(let e=r;n>0?e<t:t<e;e+=n)yield e}var y;function b(){return(b=e((()=>{y=JSON.parse(`{"page-indicator.aria.label":["Prik ",["selectedPage"]," er fremhævet i en række med ",["pageCount"]," prikker"]}`)})))()}var x;function S(){return(S=e((()=>{x=JSON.parse(`{"page-indicator.aria.label":["Dot ",["selectedPage"]," is highlighted in a row of ",["pageCount"]," dots"]}`)})))()}var C;function w(){return(w=e((()=>{C=JSON.parse(`{"page-indicator.aria.label":["Piste ",["selectedPage"]," on korostettuna ",["pageCount"]," pisteen rivissä"]}`)})))()}var T;function E(){return(E=e((()=>{T=JSON.parse(`{"page-indicator.aria.label":["Prikk ",["selectedPage"]," er uthevet i en rad med ",["pageCount"]," prikker"]}`)})))()}var D;function O(){return(O=e((()=>{D=JSON.parse(`{"page-indicator.aria.label":["Prick ",["selectedPage"]," är markerad i en rad med ",["pageCount"]," prickar"]}`)})))()}var k;function A(){return(A=e((()=>{n(),k=c`
	.w-page-indicator {
		display: grid;
		justify-content: center;
		height: max-content;
		pointer-events: none;
	}

	.w-page-indicator--container {
		display: grid;
		grid-auto-flow: column;
		gap: 8px;
	}

	.w-page-indicator--dot {
		background-color: var(--w-s-color-background-disabled);
		border-radius: 5px;
		width: 10px;
		height: 10px;
	}

	.w-page-indicator--selecteddot {
		background-color: var(--w-s-color-icon-selected);
	}
`})))()}var j;function M(){return(M=e((()=>{u(),n(),a(),g(),d(),b(),S(),w(),E(),O(),A(),f(x,T,C,y,D),j=class extends i{constructor(...e){super(...e),this.selectedPage=1,this.pageCount=1}static{this.styles=[k]}get _validPageCount(){return Math.max(1,Math.floor(this.pageCount??1))}get _validSelectedPage(){let e=Math.floor(this.selectedPage??1);return Math.max(1,Math.min(e,this._validPageCount))}render(){let e=this._validPageCount,t=this._validSelectedPage,n=l._({id:`page-indicator.aria.label`,comment:`Default screenreader message for page indicator group`,message:`Dot {selectedPage} is highlighted in a row of {pageCount} dots`,values:{selectedPage:t,pageCount:e}});return r`
			<div class="w-page-indicator" role="img" aria-label="${n}">
				<div class="w-page-indicator--container">
					${_(v(e),e=>{let n={"w-page-indicator--dot":!0,"w-page-indicator--selecteddot":e+1===t};return r`<div class="${h(n)}"></div>`})}
				</div>
			</div>
		`}},s([o({type:Number,attribute:`selected-page`,reflect:!0,useDefault:!0})],j.prototype,`selectedPage`,void 0),s([o({type:Number,attribute:`page-count`,reflect:!0,useDefault:!0})],j.prototype,`pageCount`,void 0),customElements.get(`w-page-indicator`)||customElements.define(`w-page-indicator`,j)})))()}var N,P,F,I,L,R,z,B,V,H,U;function W(){return(W=e((()=>{p(),n(),a(),M(),{events:N,args:P,argTypes:F}=m(`w-page-indicator`),I={component:`w-page-indicator`,title:`Navigation/PageIndicator`,render:({pageCount:e,selectedPage:t})=>r`
        <w-page-indicator
            page-count=${e}
            selected-page=${t}
        ></w-page-indicator>
    `,args:P,argTypes:F,parameters:{actions:{handles:N}}},L={args:{pageCount:5,selectedPage:1}},R=()=>r`
    <div style="display: grid; height: 10vh; border: 1px solid lightgrey;">
        <w-page-indicator
            page-count="5"
            selected-page="1"
            style="padding-bottom: 12px; align-self: end;"
        >
        </w-page-indicator>
    </div>
`,z=class extends i{constructor(...e){super(...e),this.page=1}connectedCallback(){super.connectedCallback(),this.startPageChanger()}disconnectedCallback(){super.disconnectedCallback(),this.intervalId&&clearInterval(this.intervalId)}startPageChanger(){this.intervalId=setInterval(()=>{this.page>4?this.page=1:this.page+=1},1e3)}render(){return r`
            <div style="display: grid; height: 10vh; border: 1px solid lightgrey;">
                <div style="align-self: center; justify-self: center;">
                    Page ${this.page}
                </div>
                <w-page-indicator
                    page-count="5"
                    selected-page=${this.page}
                    style="padding-bottom: 12px; align-self: end;"
                >
                </w-page-indicator>
            </div>
        `}},s([t()],z.prototype,`page`,void 0),customElements.get(`page-indicator-change-page`)||customElements.define(`page-indicator-change-page`,z),B=()=>r`
    <page-indicator-change-page></page-indicator-change-page>
`,V=()=>r`
    <div style="display: grid; height: 10vh; border: 1px solid lightgrey;">
        <w-page-indicator
            page-count="10"
            selected-page="3"
            style="padding-bottom: 12px; align-self: end;"
        >
        </w-page-indicator>
    </div>
`,H=()=>r`
    <div style="height: 11vh; border: 1px solid lightgrey;">
        <div
            style="height: 5vh; border-bottom: 1px solid #e6e6e6; margin-bottom: 10px;"
        ></div>
        <w-page-indicator
            page-count="5"
            selected-page="1"
            style="padding-top: 16px;"
        >
        </w-page-indicator>
    </div>
`,L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    pageCount: 5,
    selectedPage: 1
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => html\`
    <div style="display: grid; height: 10vh; border: 1px solid lightgrey;">
        <w-page-indicator
            page-count="5"
            selected-page="1"
            style="padding-bottom: 12px; align-self: end;"
        >
        </w-page-indicator>
    </div>
\``,...R.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => html\`
    <page-indicator-change-page></page-indicator-change-page>
\``,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => html\`
    <div style="display: grid; height: 10vh; border: 1px solid lightgrey;">
        <w-page-indicator
            page-count="10"
            selected-page="3"
            style="padding-bottom: 12px; align-self: end;"
        >
        </w-page-indicator>
    </div>
\``,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => html\`
    <div style="height: 11vh; border: 1px solid lightgrey;">
        <div
            style="height: 5vh; border-bottom: 1px solid #e6e6e6; margin-bottom: 10px;"
        ></div>
        <w-page-indicator
            page-count="5"
            selected-page="1"
            style="padding-top: 16px;"
        >
        </w-page-indicator>
    </div>
\``,...H.parameters?.docs?.source}}},U=[`Default`,`InsideContainer`,`InsideContainerChangePage`,`InsideContainer10Pages`,`OutsideContainer`]})))()}W();export{L as Default,R as InsideContainer,V as InsideContainer10Pages,B as InsideContainerChangePage,H as OutsideContainer,U as __namedExportsOrder,I as default};