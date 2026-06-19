import{i as e}from"./preload-helper-xPQekRTU.js";import{_ as t,d as n,l as r,n as i,r as a,s as o,t as s,u as c,x as l}from"./decorate-BxgRj7DM.js";import{n as u,t as d}from"./dist-BTTyunOH.js";import{n as f,t as p}from"./class-map-v4FOSj6B.js";import{_ as m,b as h,x as g,y as _}from"./iframe-VqEg3fOI.js";function*v(e,t){if(e!==void 0){let n=0;for(let r of e)yield t(r,n++)}}var y=e((()=>{})),b=e((()=>{y()}));function*x(e,t,n=1){let r=t===void 0?0:e;t??=e;for(let e=r;n>0?e<t:t<e;e+=n)yield e}var S=e((()=>{})),C=e((()=>{S()})),w,T=e((()=>{w=JSON.parse(`{"page-indicator.aria.label":["Prik ",["selectedPage"]," er fremhævet i en række med ",["pageCount"]," prikker"]}`)})),E,D=e((()=>{E=JSON.parse(`{"page-indicator.aria.label":["Dot ",["selectedPage"]," is highlighted in a row of ",["pageCount"]," dots"]}`)})),O,k=e((()=>{O=JSON.parse(`{"page-indicator.aria.label":["Piste ",["selectedPage"]," on korostettuna ",["pageCount"]," pisteen rivissä"]}`)})),A,j=e((()=>{A=JSON.parse(`{"page-indicator.aria.label":["Prikk ",["selectedPage"]," er uthevet i en rad med ",["pageCount"]," prikker"]}`)})),M,N=e((()=>{M=JSON.parse(`{"page-indicator.aria.label":["Prick ",["selectedPage"]," är markerad i en rad med ",["pageCount"]," prickar"]}`)})),P,F=e((()=>{c(),P=l`
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
`})),I,L=e((()=>{u(),c(),a(),p(),b(),C(),_(),T(),D(),k(),j(),N(),F(),i(),m(E,A,O,w,M),I=class extends n{constructor(...e){super(...e),this.selectedPage=1,this.pageCount=1}static{this.styles=[P]}get _validPageCount(){return Math.max(1,Math.floor(this.pageCount??1))}get _validSelectedPage(){let e=Math.floor(this.selectedPage??1);return Math.max(1,Math.min(e,this._validPageCount))}render(){let e=this._validPageCount,n=this._validSelectedPage;return t`
			<div class="w-page-indicator" role="img" aria-label="${d._({id:`page-indicator.aria.label`,comment:`Default screenreader message for page indicator group`,message:`Dot {selectedPage} is highlighted in a row of {pageCount} dots`,values:{selectedPage:n,pageCount:e}})}">
				<div class="w-page-indicator--container">
					${v(x(e),e=>t`<div class="${f({"w-page-indicator--dot":!0,"w-page-indicator--selecteddot":e+1===n})}"></div>`)}
				</div>
			</div>
		`}},s([r({type:Number,attribute:`selected-page`,reflect:!0,useDefault:!0})],I.prototype,`selectedPage`,void 0),s([r({type:Number,attribute:`page-count`,reflect:!0,useDefault:!0})],I.prototype,`pageCount`,void 0),customElements.get(`w-page-indicator`)||customElements.define(`w-page-indicator`,I)})),R,z,B,V,H,U,W,G,K,q,J;e((()=>{g(),c(),a(),L(),i(),{events:R,args:z,argTypes:B}=h(`w-page-indicator`),V={component:`w-page-indicator`,title:`Navigation/PageIndicator`,render:({pageCount:e,selectedPage:n})=>t`
        <w-page-indicator
            page-count=${e}
            selected-page=${n}
        ></w-page-indicator>
    `,args:z,argTypes:B,parameters:{actions:{handles:R}}},H={args:{pageCount:5,selectedPage:1}},U=()=>t`
    <div style="display: grid; height: 10vh; border: 1px solid lightgrey;">
        <w-page-indicator
            page-count="5"
            selected-page="1"
            style="padding-bottom: 12px; align-self: end;"
        >
        </w-page-indicator>
    </div>
`,W=class extends n{constructor(...e){super(...e),this.page=1}connectedCallback(){super.connectedCallback(),this.startPageChanger()}disconnectedCallback(){super.disconnectedCallback(),this.intervalId&&clearInterval(this.intervalId)}startPageChanger(){this.intervalId=setInterval(()=>{this.page>4?this.page=1:this.page+=1},1e3)}render(){return t`
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
        `}},s([o()],W.prototype,`page`,void 0),customElements.get(`page-indicator-change-page`)||customElements.define(`page-indicator-change-page`,W),G=()=>t`
    <page-indicator-change-page></page-indicator-change-page>
`,K=()=>t`
    <div style="display: grid; height: 10vh; border: 1px solid lightgrey;">
        <w-page-indicator
            page-count="10"
            selected-page="3"
            style="padding-bottom: 12px; align-self: end;"
        >
        </w-page-indicator>
    </div>
`,q=()=>t`
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
`,H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    pageCount: 5,
    selectedPage: 1
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => html\`
    <div style="display: grid; height: 10vh; border: 1px solid lightgrey;">
        <w-page-indicator
            page-count="5"
            selected-page="1"
            style="padding-bottom: 12px; align-self: end;"
        >
        </w-page-indicator>
    </div>
\``,...U.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => html\`
    <page-indicator-change-page></page-indicator-change-page>
\``,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => html\`
    <div style="display: grid; height: 10vh; border: 1px solid lightgrey;">
        <w-page-indicator
            page-count="10"
            selected-page="3"
            style="padding-bottom: 12px; align-self: end;"
        >
        </w-page-indicator>
    </div>
\``,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => html\`
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
\``,...q.parameters?.docs?.source}}},J=[`Default`,`InsideContainer`,`InsideContainerChangePage`,`InsideContainer10Pages`,`OutsideContainer`]}))();export{H as Default,U as InsideContainer,K as InsideContainer10Pages,G as InsideContainerChangePage,q as OutsideContainer,J as __namedExportsOrder,V as default};