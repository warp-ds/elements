import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{c as n,d as r,h as i,l as a,r as o,s,t as c,y as l}from"./decorate-Bt2QF_uA.js";import{a as u,o as d,r as f,t as p}from"./i18n-Bcb14Fzc.js";import{n as m,t as h}from"./dist-D5kJVy4t.js";import{n as g,t as _}from"./styles-Cw_r5k83.js";import{i as v,n as y,r as b}from"./utilities-BHNt5DhH.js";import{r as x,t as S}from"./if-defined-DBI32Ir5.js";var C;function w(){return(w=e((()=>{C=JSON.parse(`{"card.button.text":["Vælg"]}`)})))()}var T;function E(){return(E=e((()=>{T=JSON.parse(`{"card.button.text":["Select"]}`)})))()}var D;function O(){return(O=e((()=>{D=JSON.parse(`{"card.button.text":["Valitse"]}`)})))()}var k;function A(){return(A=e((()=>{k=JSON.parse(`{"card.button.text":["Velg"]}`)})))()}var j;function M(){return(M=e((()=>{j=JSON.parse(`{"card.button.text":["Välj"]}`)})))()}var N;function P(){return(P=e((()=>{n(),N=l`
	:host {
		--_background-color: var(
			--w-c-card-bg,
			var(--w-s-color-surface-elevated-200)
		);
		--_background-color-active: var(
			--w-c-card-bg-active,
			var(--w-s-color-background-active)
		);
		--_background-color-hover: var(
			--w-c-card-bg-hover,
			var(--w-s-color-background-hover)
		);
		--_border-color: var(--w-c-card-border-color, transparent);
		--_border-color-active: var(
			--w-c-card-border-color-active,
			var(--w-s-color-border-active)
		);
		--_border-color-hover: var(
			--w-c-card-border-color-hover,
			var(--w-s-color-border-hover)
		);
		--_border-radius: var(--w-c-card-border-radius, 8px);
		--_border-width: var(--w-c-card-border-width, 2px);
		--_box-shadow: var(
			--w-c-card-box-shadow,
			var(--w-s-shadow-surface-elevated-200)
		);
		--_box-shadow-active: var(
			--w-c-card-box-shadow-active,
			var(--w-s-shadow-surface-elevated-200-active)
		);
		--_box-shadow-hover: var(
			--w-c-card-box-shadow-hover,
			var(--w-s-shadow-surface-elevated-200-hover)
		);
	}

	:host([flat]) {
		--_border-color: var(--w-c-card-border-color, var(--w-s-color-border));
		--_border-width: var(--w-c-card-border-width, 2px);
		--_border-radius: var(--w-c-card-border-radius, 4px);
		--_box-shadow: none;
		--_box-shadow-active: none;
		--_box-shadow-hover: none;
	}

	:host([selected]) {
		--_background-color: var(
			--w-c-card-bg,
			var(--w-s-color-background-selected)
		);
		--_background-color-active: var(
			--w-c-card-bg-active,
			var(--w-s-color-background-selected-active)
		);
		--_background-color-hover: var(
			--w-c-card-bg-hover,
			var(--w-s-color-background-selected-hover)
		);
		--_border-color: var(
			--w-c-card-border-color,
			var(--w-s-color-border-selected)
		);
		--_border-color-active: var(
			--w-c-card-border-color-active,
			var(--w-s-color-border-selected-active)
		);
		--_border-color-hover: var(
			--w-c-card-border-color-hover,
			var(--w-s-color-border-selected-hover)
		);
		--_border-width: var(--w-c-card-border-width, 2px);
	}

	[part="base"] {
		background-color: var(--_background-color);
		border-radius: var(--_border-radius);
		box-shadow: var(--_box-shadow);
		cursor: pointer;
		display: block;
		overflow: hidden;
		position: relative;
		transition-property: all;
		transition-duration: 0.15s;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	}

	[part="base"]:hover {
		background-color: var(--_background-color-hover);
		box-shadow: var(--_box-shadow-hover);
	}

	[part="base"]:active {
		background-color: var(--_background-color-active);
		box-shadow: var(--_box-shadow-active);
	}

	[part="border"] {
		border-radius: var(--_border-radius);
		border-color: var(--_border-color);
		border-width: var(--_border-width);
		position: absolute;
		inset: 0px;
		transition-property: all;
		transition-duration: 0.15s;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	}

	:host([flat]) [part="base"]:hover [part="border"],
	:host([selected]) [part="base"]:hover [part="border"] {
		border-color: var(--_border-color-hover);
	}

	[part="base"]:active [part="border"] {
		border-color: var(--_border-color-active);
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
`})))()}var F,I;function L(){return(L=e((()=>{d(),n(),o(),S(),f(),_(),w(),E(),O(),A(),M(),P(),F={ENTER:`Enter`,SPACE:` `},I=class extends a{static{this.styles=[g,N,l`
			a::after {
				content: "";
				position: absolute;
				top: 0;
				right: 0;
				bottom: 0;
				left: 0;
			}
			:host {
				display: block;
			}
		`]}constructor(){super(),this.selected=!1,this.flat=!1,this.clickable=!1,p(T,k,D,C,j),this.buttonText=u._({id:`card.button.text`,message:`Select`,comment:`Screenreader message to indicate that the card is clickable`})}keypressed(e){!this.clickable||e.altKey||e.ctrlKey||(e.key===F.ENTER||e.key===F.SPACE)&&(e.preventDefault(),this.click())}render(){return i`
			<div
				part="base"
				tabindex=${x(this.clickable?`0`:void 0)}
				@keydown=${this.keypressed}
			>
				<div part="border"></div>
				${this.clickable?i`<button
								class="sr-only"
								aria-pressed="${this.selected}"
								tabindex="-1"
							>
								${this.buttonText}
							</button>`:this.selected?i`<span
									class="sr-only"
									role="checkbox"
									aria-checked="true"
									aria-disabled="true"
								></span>`:r}
				<slot></slot>
			</div>
		`}},c([s({type:Boolean,reflect:!0})],I.prototype,`selected`,void 0),c([s({type:Boolean})],I.prototype,`flat`,void 0),c([s({type:Boolean})],I.prototype,`clickable`,void 0),customElements.get(`w-card`)||customElements.define(`w-card`,I)})))()}var R=t({Clickable:()=>q,Default:()=>U,Flat:()=>G,FlatSelected:()=>K,PropertyExample:()=>J,Selected:()=>W,StylingApi:()=>Y,__namedExportsOrder:()=>X,default:()=>H}),z,B,V,H,U,W,G,K,q,J,Y,X;function Z(){return(Z=e((()=>{b(),m(),n(),L(),{events:z,args:B,argTypes:V}=h(`w-card`),H={title:`Navigation/Card`,render(e){return i`
            <w-card ${v(y(e))}>
                <div style="padding: 16px;">
                    <h3>Card Title</h3>
                    <p>This is card content with some example text.</p>
                </div>
            </w-card>
        `},args:B,argTypes:V,parameters:{actions:{handles:z}}},U={args:{selected:!1,flat:!1,clickable:!1}},W={args:{selected:!0,flat:!1,clickable:!1}},G={args:{selected:!1,flat:!0,clickable:!1}},K={args:{selected:!0,flat:!0,clickable:!1}},q={args:{selected:!1,flat:!1,clickable:!0}},J={args:{selected:!1,flat:!1,clickable:!0},render(e){return i`
            <w-card ${v(y(e))}>
                <img
                    style="width: 100%; height: 200px; object-fit: cover;"
                    src="https://unsplash.it/300/200?random"
                    alt="Example image"
                />
                <div style="padding: 16px;">
                    <p style="font-size: 12px; color: #666; margin: 0 0 8px 0;">
                        DNB Eiendom
                    </p>
                    <p style="margin: 0 0 8px 0;">
                        Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019.
                    </p>
                    <p style="font-size: 14px; color: #666; margin: 0 0 8px 0;">
                        Bøgata 25C, 0655 Oslo
                    </p>
                    <p style="font-weight: bold; margin: 0;">
                        52 m² Totalpris: 4 869 039 kr
                    </p>
                </div>
            </w-card>
        `}},Y={args:{clickable:!1,selected:!1,flat:!1},render(e){return i`
            <pre>
<code>
&lt;style&gt;
w-card::part(base) {
    padding: 48px;
    background: rebeccapurple;
    color: cyan;
}
w-card::part(border) {
    border-color: magenta;
    border-width: 8px;
}
&lt;/style&gt;
</code>
        </pre>
            <style>
                w-card::part(base) {
                    padding: 48px;
                    background: rebeccapurple;
                    color: cyan;
                }
                w-card::part(border) {
                    border-color: magenta;
                    border-width: 8px;
                }
            </style>
            <w-card ${v(y(e))}>
                <div style="padding: 16px;">
                    <h3>Card Title</h3>
                    <p>This is card content with some example text.</p>
                </div>
            </w-card>
        `}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    selected: false,
    flat: false,
    clickable: false
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    selected: true,
    flat: false,
    clickable: false
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    selected: false,
    flat: true,
    clickable: false
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    selected: true,
    flat: true,
    clickable: false
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    selected: false,
    flat: false,
    clickable: true
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    selected: false,
    flat: false,
    clickable: true
  },
  render(args) {
    return html\`
            <w-card \${spread(prespread(args))}>
                <img
                    style="width: 100%; height: 200px; object-fit: cover;"
                    src="https://unsplash.it/300/200?random"
                    alt="Example image"
                />
                <div style="padding: 16px;">
                    <p style="font-size: 12px; color: #666; margin: 0 0 8px 0;">
                        DNB Eiendom
                    </p>
                    <p style="margin: 0 0 8px 0;">
                        Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019.
                    </p>
                    <p style="font-size: 14px; color: #666; margin: 0 0 8px 0;">
                        Bøgata 25C, 0655 Oslo
                    </p>
                    <p style="font-weight: bold; margin: 0;">
                        52 m² Totalpris: 4 869 039 kr
                    </p>
                </div>
            </w-card>
        \`;
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    clickable: false,
    selected: false,
    flat: false
  },
  render(args) {
    return html\`
            <pre>
<code>
&lt;style&gt;
w-card::part(base) {
    padding: 48px;
    background: rebeccapurple;
    color: cyan;
}
w-card::part(border) {
    border-color: magenta;
    border-width: 8px;
}
&lt;/style&gt;
</code>
        </pre>
            <style>
                w-card::part(base) {
                    padding: 48px;
                    background: rebeccapurple;
                    color: cyan;
                }
                w-card::part(border) {
                    border-color: magenta;
                    border-width: 8px;
                }
            </style>
            <w-card \${spread(prespread(args))}>
                <div style="padding: 16px;">
                    <h3>Card Title</h3>
                    <p>This is card content with some example text.</p>
                </div>
            </w-card>
        \`;
  }
}`,...Y.parameters?.docs?.source}}},X=[`Default`,`Selected`,`Flat`,`FlatSelected`,`Clickable`,`PropertyExample`,`StylingApi`]})))()}export{J as a,Z as c,K as i,U as n,W as o,G as r,R as s,q as t};