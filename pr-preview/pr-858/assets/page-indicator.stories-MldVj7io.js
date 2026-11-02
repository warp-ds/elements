import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{T as t,_ as n,a as r,d as i,g as a,i as o,k as s,l as c,r as l,t as u,v as d,y as f}from"./decorate-r9jH0CjD.js";import{n as p,t as m}from"./dist-gZ_m6TlA.js";import{r as h,t as g}from"./i18n-CH8KbyPD.js";import{n as _,t as v}from"./class-map-tAQ7AVtN.js";function*y(e,t){if(e!==void 0){let n=0;for(let r of e)yield t(r,n++)}}function*b(e,t,n=1){let r=t===void 0?0:e;t??=e;for(let e=r;n>0?e<t:t<e;e+=n)yield e}var x;function S(){return(S=e((()=>{x=JSON.parse(`{"page-indicator.aria.label":["Prik ",["selectedPage"]," er fremhævet i en række med ",["pageCount"]," prikker"]}`)})))()}var C;function w(){return(w=e((()=>{C=JSON.parse(`{"page-indicator.aria.label":["Dot ",["selectedPage"]," is highlighted in a row of ",["pageCount"]," dots"]}`)})))()}var T;function E(){return(E=e((()=>{T=JSON.parse(`{"page-indicator.aria.label":["Piste ",["selectedPage"]," on korostettuna ",["pageCount"]," pisteen rivissä"]}`)})))()}var D;function O(){return(O=e((()=>{D=JSON.parse(`{"page-indicator.aria.label":["Prikk ",["selectedPage"]," er uthevet i en rad med ",["pageCount"]," prikker"]}`)})))()}var k;function A(){return(A=e((()=>{k=JSON.parse(`{"page-indicator.aria.label":["Prick ",["selectedPage"]," är markerad i en rad med ",["pageCount"]," prickar"]}`)})))()}var j;function M(){return(M=e((()=>{d(),j=s`
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
`})))()}var N;function P(){return(P=e((()=>{n(),d(),r(),v(),o(),h(),S(),w(),E(),O(),A(),M(),g(C,D,T,x,k),N=class extends f{static{this.styles=[j]}constructor(){super(),this.selectedPage=1,this.pageCount=1,new l(this),this._internals=this.attachInternals(),this._internals.role=`img`}get _validPageCount(){return Math.max(1,Math.floor(this.pageCount??1))}get _validSelectedPage(){let e=Math.floor(this.selectedPage??1);return Math.max(1,Math.min(e,this._validPageCount))}render(){let e=a._({id:`page-indicator.aria.label`,comment:`Default screenreader message for page indicator group`,message:`Dot {selectedPage} is highlighted in a row of {pageCount} dots`,values:{selectedPage:this._validSelectedPage,pageCount:this._validPageCount}});return this._internals.ariaLabel=e,t`
			<div class="w-page-indicator">
				<div class="w-page-indicator--container">
					${y(b(this._validPageCount),e=>{let n={"w-page-indicator--dot":!0,"w-page-indicator--selecteddot":e+1===this._validSelectedPage};return t`<div class="${_(n)}"></div>`})}
				</div>
			</div>
		`}},u([i({type:Number,attribute:`selected-page`,reflect:!0,useDefault:!0})],N.prototype,`selectedPage`,void 0),u([i({type:Number,attribute:`page-count`,reflect:!0,useDefault:!0})],N.prototype,`pageCount`,void 0),customElements.get(`w-page-indicator`)||customElements.define(`w-page-indicator`,N)})))()}var F,I,L,R,z,B,V,H,U,W,G;function K(){return(K=e((()=>{p(),d(),r(),P(),{events:F,args:I,argTypes:L}=m(`w-page-indicator`),R={component:`w-page-indicator`,title:`Navigation/PageIndicator`,render:({pageCount:e,selectedPage:n})=>t`
        <w-page-indicator
            page-count=${e}
            selected-page=${n}
        ></w-page-indicator>
    `,args:I,argTypes:L,parameters:{actions:{handles:F}}},z={args:{pageCount:5,selectedPage:1}},B=()=>t`
    <div style="display: grid; height: 10vh; border: 1px solid lightgrey;">
        <w-page-indicator
            page-count="5"
            selected-page="1"
            style="padding-bottom: 12px; align-self: end;"
        >
        </w-page-indicator>
    </div>
`,V=class extends f{constructor(...e){super(...e),this.page=1}connectedCallback(){super.connectedCallback(),this.startPageChanger()}disconnectedCallback(){super.disconnectedCallback(),this.intervalId&&clearInterval(this.intervalId)}startPageChanger(){this.intervalId=setInterval(()=>{this.page>4?this.page=1:this.page+=1},1e3)}render(){return t`
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
        `}},u([c()],V.prototype,`page`,void 0),customElements.get(`page-indicator-change-page`)||customElements.define(`page-indicator-change-page`,V),H=()=>t`
    <page-indicator-change-page></page-indicator-change-page>
`,U=()=>t`
    <div style="display: grid; height: 10vh; border: 1px solid lightgrey;">
        <w-page-indicator
            page-count="10"
            selected-page="3"
            style="padding-bottom: 12px; align-self: end;"
        >
        </w-page-indicator>
    </div>
`,W=()=>t`
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
`,G=[`Default`,`InsideContainer`,`InsideContainerChangePage`,`InsideContainer10Pages`,`OutsideContainer`],z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    pageCount: 5,
    selectedPage: 1
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => html\`
    <div style="display: grid; height: 10vh; border: 1px solid lightgrey;">
        <w-page-indicator
            page-count="5"
            selected-page="1"
            style="padding-bottom: 12px; align-self: end;"
        >
        </w-page-indicator>
    </div>
\``,...B.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => html\`
    <page-indicator-change-page></page-indicator-change-page>
\``,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => html\`
    <div style="display: grid; height: 10vh; border: 1px solid lightgrey;">
        <w-page-indicator
            page-count="10"
            selected-page="3"
            style="padding-bottom: 12px; align-self: end;"
        >
        </w-page-indicator>
    </div>
\``,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => html\`
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
\``,...W.parameters?.docs?.source}}}})))()}K();export{z as Default,B as InsideContainer,U as InsideContainer10Pages,H as InsideContainerChangePage,W as OutsideContainer,G as __namedExportsOrder,R as default};