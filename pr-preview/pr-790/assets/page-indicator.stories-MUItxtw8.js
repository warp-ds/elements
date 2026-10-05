import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{c as t,h as n,n as r,t as i}from"./lit-BcpSydpl.js";import{a,o,r as s,t as c}from"./i18n-CkjYRTT1.js";import{a as l,r as u,s as d,t as f}from"./decorate-DkSsDgub.js";import{n as p,t as m}from"./dist-C_sOTet4.js";import{n as h,t as g}from"./class-map-CERi6i-_.js";function*_(e,t){if(e!==void 0){let n=0;for(let r of e)yield t(r,n++)}}function*v(e,t,n=1){let r=t===void 0?0:e;t??=e;for(let e=r;n>0?e<t:t<e;e+=n)yield e}var y;function b(){return(b=e((()=>{y=JSON.parse(`{"page-indicator.aria.label":["Prik ",["selectedPage"]," er fremhævet i en række med ",["pageCount"]," prikker"]}`)})))()}var x;function S(){return(S=e((()=>{x=JSON.parse(`{"page-indicator.aria.label":["Dot ",["selectedPage"]," is highlighted in a row of ",["pageCount"]," dots"]}`)})))()}var C;function w(){return(w=e((()=>{C=JSON.parse(`{"page-indicator.aria.label":["Piste ",["selectedPage"]," on korostettuna ",["pageCount"]," pisteen rivissä"]}`)})))()}var T;function E(){return(E=e((()=>{T=JSON.parse(`{"page-indicator.aria.label":["Prikk ",["selectedPage"]," er uthevet i en rad med ",["pageCount"]," prikker"]}`)})))()}var D;function O(){return(O=e((()=>{D=JSON.parse(`{"page-indicator.aria.label":["Prick ",["selectedPage"]," är markerad i en rad med ",["pageCount"]," prickar"]}`)})))()}var k;function A(){return(A=e((()=>{i(),k=n`
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
`})))()}var j;function M(){return(M=e((()=>{o(),i(),u(),g(),s(),b(),S(),w(),E(),O(),A(),c(x,T,C,y,D),j=class extends r{static{this.styles=[k]}constructor(){super(),this.selectedPage=1,this.pageCount=1,this._internals=this.attachInternals(),this._internals.role=`img`;let e=a._({id:`page-indicator.aria.label`,comment:`Default screenreader message for page indicator group`,message:`Dot {selectedPage} is highlighted in a row of {pageCount} dots`,values:{selectedPage:this._validSelectedPage,pageCount:this._validPageCount}});this._internals.ariaLabel=e}get _validPageCount(){return Math.max(1,Math.floor(this.pageCount??1))}get _validSelectedPage(){let e=Math.floor(this.selectedPage??1);return Math.max(1,Math.min(e,this._validPageCount))}render(){return t`
			<div class="w-page-indicator">
				<div class="w-page-indicator--container">
					${_(v(this._validPageCount),e=>{let n={"w-page-indicator--dot":!0,"w-page-indicator--selecteddot":e+1===this._validSelectedPage};return t`<div class="${h(n)}"></div>`})}
				</div>
			</div>
		`}},f([d({type:Number,attribute:`selected-page`,reflect:!0,useDefault:!0})],j.prototype,`selectedPage`,void 0),f([d({type:Number,attribute:`page-count`,reflect:!0,useDefault:!0})],j.prototype,`pageCount`,void 0),customElements.get(`w-page-indicator`)||customElements.define(`w-page-indicator`,j)})))()}var N,P,F,I,L,R,z,B,V,H,U;function W(){return(W=e((()=>{p(),i(),u(),M(),{events:N,args:P,argTypes:F}=m(`w-page-indicator`),I={component:`w-page-indicator`,title:`Navigation/PageIndicator`,render:({pageCount:e,selectedPage:n})=>t`
        <w-page-indicator
            page-count=${e}
            selected-page=${n}
        ></w-page-indicator>
    `,args:P,argTypes:F,parameters:{actions:{handles:N}}},L={args:{pageCount:5,selectedPage:1}},R=()=>t`
    <div style="display: grid; height: 10vh; border: 1px solid lightgrey;">
        <w-page-indicator
            page-count="5"
            selected-page="1"
            style="padding-bottom: 12px; align-self: end;"
        >
        </w-page-indicator>
    </div>
`,z=class extends r{constructor(...e){super(...e),this.page=1}connectedCallback(){super.connectedCallback(),this.startPageChanger()}disconnectedCallback(){super.disconnectedCallback(),this.intervalId&&clearInterval(this.intervalId)}startPageChanger(){this.intervalId=setInterval(()=>{this.page>4?this.page=1:this.page+=1},1e3)}render(){return t`
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
        `}},f([l()],z.prototype,`page`,void 0),customElements.get(`page-indicator-change-page`)||customElements.define(`page-indicator-change-page`,z),B=()=>t`
    <page-indicator-change-page></page-indicator-change-page>
`,V=()=>t`
    <div style="display: grid; height: 10vh; border: 1px solid lightgrey;">
        <w-page-indicator
            page-count="10"
            selected-page="3"
            style="padding-bottom: 12px; align-self: end;"
        >
        </w-page-indicator>
    </div>
`,H=()=>t`
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
`,U=[`Default`,`InsideContainer`,`InsideContainerChangePage`,`InsideContainer10Pages`,`OutsideContainer`],L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
\``,...H.parameters?.docs?.source}}}})))()}W();export{L as Default,R as InsideContainer,V as InsideContainer10Pages,B as InsideContainerChangePage,H as OutsideContainer,U as __namedExportsOrder,I as default};