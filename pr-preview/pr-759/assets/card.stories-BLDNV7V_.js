import{n as e,r as ee}from"./rolldown-runtime-DkW27tQK.js";import{c as t,d as n,h as r,l as i,r as a,s as o,t as s,y as c}from"./decorate-Bt2QF_uA.js";import{a as l,o as u,r as d,t as f}from"./i18n-CkjYRTT1.js";import{n as p,t as te}from"./dist-D5kJVy4t.js";import{n as m,t as h}from"./styles-Cw_r5k83.js";import{i as g,n as _,r as v}from"./utilities-BHNt5DhH.js";import{r as y,t as ne}from"./if-defined-DBI32Ir5.js";var b;function x(){return(x=e((()=>{b=JSON.parse(`{"card.button.text":["Vælg"]}`)})))()}var S;function C(){return(C=e((()=>{S=JSON.parse(`{"card.button.text":["Select"]}`)})))()}var w;function T(){return(T=e((()=>{w=JSON.parse(`{"card.button.text":["Valitse"]}`)})))()}var E;function D(){return(D=e((()=>{E=JSON.parse(`{"card.button.text":["Velg"]}`)})))()}var O;function k(){return(k=e((()=>{O=JSON.parse(`{"card.button.text":["Välj"]}`)})))()}var A;function j(){return(j=e((()=>{t(),A=c`
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
		display: block;
		overflow: hidden;
		position: relative;
	}

	:host([clickable]) [part="base"] {
		cursor: pointer;
		transition-property: all;
		transition-duration: 0.15s;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	}

	:host([clickable]) [part="base"]:hover {
		background-color: var(--_background-color-hover);
		box-shadow: var(--_box-shadow-hover);
	}

	:host([clickable]) [part="base"]:active {
		background-color: var(--_background-color-active);
		box-shadow: var(--_box-shadow-active);
	}

	[part="border"] {
		border-radius: var(--_border-radius);
		border-color: var(--_border-color);
		border-width: var(--_border-width);
		pointer-events: none;
		position: absolute;
		inset: 0px;
		transition-property: all;
		transition-duration: 0.15s;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	}

	:host([clickable][flat]) [part="base"]:hover [part="border"],
	:host([clickable][selected]) [part="base"]:hover [part="border"] {
		border-color: var(--_border-color-hover);
	}

	:host([clickable]) [part="base"]:active [part="border"] {
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
`})))()}var M,N;function P(){return(P=e((()=>{u(),t(),a(),ne(),d(),h(),x(),C(),T(),D(),k(),j(),M={ENTER:`Enter`,SPACE:` `},N=class extends i{static{this.styles=[m,A,c`
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
		`]}constructor(){super(),this.selected=!1,this.flat=!1,this.clickable=!1,f(S,E,w,b,O),this.buttonText=l._({id:`card.button.text`,message:`Select`,comment:`Screenreader message to indicate that the card is clickable`})}keypressed(e){!this.clickable||e.altKey||e.ctrlKey||(e.key===M.ENTER||e.key===M.SPACE)&&(e.preventDefault(),this.click())}render(){return r`
			<div
				part="base"
				tabindex=${y(this.clickable?`0`:void 0)}
				@keydown=${this.keypressed}
			>
				<div part="border"></div>
				${this.clickable?r`<button
								class="sr-only"
								aria-pressed="${this.selected}"
								tabindex="-1"
							>
								${this.buttonText}
							</button>`:this.selected?r`<span
									class="sr-only"
									role="checkbox"
									aria-checked="true"
									aria-disabled="true"
								></span>`:n}
				<slot></slot>
			</div>
		`}},s([o({type:Boolean,reflect:!0})],N.prototype,`selected`,void 0),s([o({type:Boolean})],N.prototype,`flat`,void 0),s([o({type:Boolean})],N.prototype,`clickable`,void 0),customElements.get(`w-card`)||customElements.define(`w-card`,N)})))()}var F=ee({AdvancedExample:()=>Z,CardCardClickablePlusASecondInteractiveElement:()=>Y,CardNoNavigation:()=>q,CardSeparateInteractiveElements:()=>X,CardWholeCardClickable:()=>J,Clickable:()=>W,Default:()=>B,Flat:()=>H,FlatSelected:()=>U,PropertyExample:()=>G,Selected:()=>V,StylingApi:()=>K,__namedExportsOrder:()=>Q,default:()=>z}),I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{v(),p(),t(),P(),{events:I,args:L,argTypes:R}=te(`w-card`),z={title:`Navigation/Card`,render(e){return r`
            <w-card ${g(_(e))}>
                <div style="padding: 16px;">
                    <h3>Card Title</h3>
                    <p>This is card content with some example text.</p>
                </div>
            </w-card>
        `},args:L,argTypes:R,parameters:{actions:{handles:I}}},B={args:{selected:!1,flat:!1,clickable:!1}},V={args:{selected:!0,flat:!1,clickable:!1}},H={args:{selected:!1,flat:!0,clickable:!1}},U={args:{selected:!0,flat:!0,clickable:!1}},W={args:{selected:!1,flat:!1,clickable:!0}},G={args:{selected:!1,flat:!1,clickable:!0},render(e){return r`
            <w-card ${g(_(e))}>
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
        `}},K={args:{clickable:!1,selected:!1,flat:!1},render(e){return r`
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
            <w-card ${g(_(e))}>
                <div style="padding: 16px;">
                    <h3>Card Title</h3>
                    <p>This is card content with some example text.</p>
                </div>
            </w-card>
        `}},q={args:{},render(){return r`
            <w-card>
                <div style="padding: 16px;">
                    <h3 class="t3">This is the card title</h3>
                    <p>This is the card content</p>
                </div>
            </w-card>
        `}},J={args:{},render(){return r`
            <w-card>
                <div style="padding: 16px;">
                    <h3 class="t3">
                        <a href="#" data-card-action>This is the card title</a>
                    </h3>
                </div>
            </w-card>
        `}},Y={args:{},render(){return r`
            <w-card>
                <div style="padding: 16px;">
                    <h3 class="t3">
                        <a href="#" data-card-action>This is the card title</a>
                    </h3>
                    <a href="http://google.com" data-card-secondary-action>Learn more</a>
                </div>
            </w-card>
        `}},X={args:{},render(){return r`
            <w-card>
                <div style="padding: 16px;">
                    <h3 class="t3">
                        <a href="#">This is the card title</a>
                    </h3>
                    <a href="http://google.com">Learn more</a>
                </div>
            </w-card>
        `}},Z={args:{},render(e){return r`
            <w-card ${g(_(e))}>
                <img
                    style="width: 100%; height: 200px; object-fit: cover;"
                    src="https://unsplash.it/300/200?random"
                    alt="Example image"
                />
                <div style="padding: 16px;">
                    <p style="font-size: 12px; color: #666; margin: 0 0 8px 0;">
                        DNB Eiendom
                    </p>
                    <h3 class="t4">
                        <a href="#" data-card-action>
                            Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019.
                        </a>
                    </h3>
                    <p style="font-size: 14px; color: #666; margin: 0 0 8px 0;">
                        Bøgata 25C, 0655 Oslo
                    </p>
                    <p style="font-weight: bold; margin: 0;">
                        52 m² Totalpris: 4 869 039 kr
                    </p>
                </div>
            </w-card>
        `}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    selected: false,
    flat: false,
    clickable: false
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    selected: true,
    flat: false,
    clickable: false
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    selected: false,
    flat: true,
    clickable: false
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    selected: true,
    flat: true,
    clickable: false
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    selected: false,
    flat: false,
    clickable: true
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    return html\`
            <w-card>
                <div style="padding: 16px;">
                    <h3 class="t3">This is the card title</h3>
                    <p>This is the card content</p>
                </div>
            </w-card>
        \`;
  }
}`,...q.parameters?.docs?.source},description:{story:`Example of a card that is not focusable or clickable, and has no interactive elements inside it.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    return html\`
            <w-card>
                <div style="padding: 16px;">
                    <h3 class="t3">
                        <a href="#" data-card-action>This is the card title</a>
                    </h3>
                </div>
            </w-card>
        \`;
  }
}`,...J.parameters?.docs?.source},description:{story:`Example of a card that has a single interactive element inside it that is both sematically correct and the clickable area expands to fill the card.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    return html\`
            <w-card>
                <div style="padding: 16px;">
                    <h3 class="t3">
                        <a href="#" data-card-action>This is the card title</a>
                    </h3>
                    <a href="http://google.com" data-card-secondary-action>Learn more</a>
                </div>
            </w-card>
        \`;
  }
}`,...Y.parameters?.docs?.source},description:{story:`Example of a card that has a sematically correct main clickable interactive element that expands to fill the card,
and also has a second interactive element inside it.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    return html\`
            <w-card>
                <div style="padding: 16px;">
                    <h3 class="t3">
                        <a href="#">This is the card title</a>
                    </h3>
                    <a href="http://google.com">Learn more</a>
                </div>
            </w-card>
        \`;
  }
}`,...X.parameters?.docs?.source},description:{story:`Example of a card that has two interactive elements inside it, but the card itself is not clickable.
The interactive elements are independently clickable and focusable, and the card itself is not focusable or clickable.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {},
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
                    <h3 class="t4">
                        <a href="#" data-card-action>
                            Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019.
                        </a>
                    </h3>
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
}`,...Z.parameters?.docs?.source}}},Q=[`Default`,`Selected`,`Flat`,`FlatSelected`,`Clickable`,`PropertyExample`,`StylingApi`,`CardNoNavigation`,`CardWholeCardClickable`,`CardCardClickablePlusASecondInteractiveElement`,`CardSeparateInteractiveElements`,`AdvancedExample`]})))()}export{G as a,$ as c,U as i,B as n,V as o,H as r,F as s,W as t};