import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{c as n,d as r,h as i,l as a,s as o,t as s,y as c}from"./decorators-CPAv1fbk.js";import{C as l,N as u,P as d,S as f,f as p,l as m,p as h,u as g,x as _,y as v}from"./iframe-JOZezF-2.js";import{a as y,n as b,r as x,t as S}from"./utilities-CIV6bzq0.js";import{r as C,t as w}from"./if-defined-B0oikEng.js";var T,E=t((()=>{T=JSON.parse(`{"card.button.text":["Vælg"]}`)})),D,O=t((()=>{D=JSON.parse(`{"card.button.text":["Select"]}`)})),k,A=t((()=>{k=JSON.parse(`{"card.button.text":["Valitse"]}`)})),j,M=t((()=>{j=JSON.parse(`{"card.button.text":["Velg"]}`)})),N,P=t((()=>{N=JSON.parse(`{"card.button.text":["Välj"]}`)})),F,I=t((()=>{n(),F=c`
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
`})),L,R,z=t((()=>{d(),n(),s(),w(),_(),m(),E(),O(),A(),M(),P(),I(),h(),L={ENTER:`Enter`,SPACE:` `},R=class extends a{static{this.styles=[g,F,c`
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
		`]}constructor(){super(),this.selected=!1,this.flat=!1,this.clickable=!1,v(D,j,k,T,N),this.buttonText=u._({id:`card.button.text`,message:`Select`,comment:`Screenreader message to indicate that the card is clickable`})}keypressed(e){!this.clickable||e.altKey||e.ctrlKey||(e.key===L.ENTER||e.key===L.SPACE)&&(e.preventDefault(),this.click())}render(){return i`
			<div
				part="base"
				tabindex=${C(this.clickable?`0`:void 0)}
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
		`}},p([o({type:Boolean,reflect:!0})],R.prototype,`selected`,void 0),p([o({type:Boolean})],R.prototype,`flat`,void 0),p([o({type:Boolean})],R.prototype,`clickable`,void 0),customElements.get(`w-card`)||customElements.define(`w-card`,R)})),B=e({Clickable:()=>Y,Default:()=>G,Flat:()=>q,FlatSelected:()=>J,PropertyExample:()=>X,Selected:()=>K,StylingApi:()=>Z,__namedExportsOrder:()=>Q,default:()=>W}),V,H,U,W,G,K,q,J,Y,X,Z,Q,$=t((()=>{x(),l(),n(),S(),z(),{events:V,args:H,argTypes:U}=f(`w-card`),W={title:`Navigation/Card`,render(e){return i`
            <w-card ${y(b(e))}>
                <div style="padding: 16px;">
                    <h3>Card Title</h3>
                    <p>This is card content with some example text.</p>
                </div>
            </w-card>
        `},args:H,argTypes:U,parameters:{actions:{handles:V}}},G={args:{selected:!1,flat:!1,clickable:!1}},K={args:{selected:!0,flat:!1,clickable:!1}},q={args:{selected:!1,flat:!0,clickable:!1}},J={args:{selected:!0,flat:!0,clickable:!1}},Y={args:{selected:!1,flat:!1,clickable:!0}},X={args:{selected:!1,flat:!1,clickable:!0},render(e){return i`
            <w-card ${y(b(e))}>
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
        `}},Z={args:{clickable:!1,selected:!1,flat:!1},render(e){return i`
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
            <w-card ${y(b(e))}>
                <div style="padding: 16px;">
                    <h3>Card Title</h3>
                    <p>This is card content with some example text.</p>
                </div>
            </w-card>
        `}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    selected: false,
    flat: false,
    clickable: false
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    selected: true,
    flat: false,
    clickable: false
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    selected: false,
    flat: true,
    clickable: false
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    selected: true,
    flat: true,
    clickable: false
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    selected: false,
    flat: false,
    clickable: true
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},Q=[`Default`,`Selected`,`Flat`,`FlatSelected`,`Clickable`,`PropertyExample`,`StylingApi`]}));$();export{Y as Clickable,G as Default,q as Flat,J as FlatSelected,X as PropertyExample,K as Selected,Z as StylingApi,Q as __namedExportsOrder,W as default,$ as n,B as t};