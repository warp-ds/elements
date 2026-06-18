import{i as e}from"./preload-helper-xPQekRTU.js";import{E as t,Ht as n,J as r,K as i,Lt as a,M as o,N as ee,Rt as s,Wt as c,b as l,c as u,d,f,j as te,k as ne,l as p,o as m,p as h,q as g,s as _,u as v,w as y,x as b}from"./iframe-Bdnm4cTV.js";import{t as x}from"./attention-BxBGWx8s.js";import{t as S}from"./button-DC8-ODN-.js";import{n as C,r as w,t as T}from"./modal-footer-CGHP19tg.js";var E,re=e((()=>{a(),E=c`
	:host {
		display: block;

		--_snackbar-item-bg: var(
			--w-c-snackbar-item-bg,
			var(--w-color-tooltip-background-static)
		);
		--_snackbar-item-action-bg-hover: var(
			--w-c-snackbar-item-action-bg-hover,
			var(--w-color-tooltip-background-static)
		);
		--_snackbar-item-action-bg-active: var(
			--w-c-snackbar-item-action-bg-active,
			var(--w-color-tooltip-background-static)
		);
		--_snackbar-item-border-radius: var(--w-c-snackbar-item-radius, 8px);
		--_snackbar-item-box-shadow: var(
			--w-c-snackbar-item-box-shadow,
			var(--w-shadow-l)
		);
		--_snackbar-item-color: var(
			--w-c-snackbar-item-color,
			var(--w-s-color-text-inverted-static)
		);
		--_snackbar-item-action-color-hover: var(
			--w-c-snackbar-item-action-color-hover,
			var(--w-s-color-text-inverted-static)
		);
		--_snackbar-item-action-color-active: var(
			--w-c-snackbar-item-action-color-active,
			var(--w-s-color-text-inverted-static)
		);
		--_snackbar-item-max-width: var(--w-c-snackbar-item-max-width, 480px);
		--_snackbar-item-min-width: var(--w-c-snackbar-item-min-width, 328px);
		--_snackbar-item-padding: var(--w-c-snackbar-item-padding, 8px);
	}

	/* Using a padding-less div as target so we get animation to and from zero height */
	.animation-wrapper {
		border-radius: var(
			--_snackbar-item-border-radius
		); /* Avoid sharp bottom corners during the transitino */
	}

	[part="item"] {
		background-color: var(--_snackbar-item-bg);
		border-radius: var(--_snackbar-item-border-radius);
		box-shadow: var(--_snackbar-item-box-shadow);
		color: var(--_snackbar-item-color);
		max-width: var(--_snackbar-item-max-width);
		min-width: var(--_snackbar-item-min-width);
		padding: var(--_snackbar-item-padding);

		display: grid;
		column-gap: 8px;
		grid-template:
			"icon message inline-action"
			"block-action block-action block-action";
		grid-template-columns: auto 1fr auto;
		align-items: center;
	}

	[part="item"] w-button,
	[part="item"] ::slotted(w-button) {
		--w-c-button-bg: var(--_snackbar-item-bg);
		--w-c-button-bg-active: var(--_snackbar-item-action-bg-active);
		--w-c-button-bg-hover: var(--_snackbar-item-action-bg-hover);
		--w-c-button-color: var(--_snackbar-item-color);
		--w-c-button-color-active: var(--_snackbar-item-action-color-active);
		--w-c-button-color-hover: var(--_snackbar-item-action-color-hover);
	}

	[part="icon"] {
		grid-area: icon;

		color: var(--_snackbar-item-color);
		padding-block: 4px;
	}

	[part="icon"] ::slotted(w-icon) {
		display: block; /* override default inline-block to avoid line-height */
		margin-inline-start: 4px;
	}

	[part="icon"] ::slotted(w-icon[name="SuccessFilled"]) {
		color: var(--w-s-color-icon-positive);
	}

	[part="icon"] ::slotted(w-icon[name="WarningFilled"]) {
		color: var(--w-s-color-icon-warning);
	}

	[part="icon"] ::slotted(w-icon[name="ErrorFilled"]) {
		color: var(--w-s-color-icon-negative);
	}

	[part="icon"] ::slotted(w-icon[name="InfoFilled"]) {
		color: var(--w-s-color-icon-info);
	}

	[part="message"] {
		grid-area: message;

		align-self: center;
		font-size: var(--w-font-size-s);
		line-height: var(--w-line-height-s);
		padding-block: 7px;
	}

	[part="action"] {
		grid-area: inline-action;

		display: flex;
		column-gap: 2px; /* to allow space for focus outline */
		justify-content: flex-end;
		padding-inline-start: 8px;
	}

	:host([action-placement="block"]) [part="action"] {
		grid-area: block-action;
	}

	w-attention [slot="message"] {
		font-size: var(--w-font-size-s);
		line-height: var(--w-line-height-s);
	}

	kbd {
		font-family: var(--w-font-family);
	}
`})),D,O,k=e((()=>{a(),l(),u(),p(),re(),h(),D=function(e){return e[e.Short=4e3]=`Short`,e[e.Long=1e4]=`Long`,e[e.Infinite=12e7]=`Infinite`,e}({}),O=class extends s{constructor(...e){super(...e),this.actionPlacement=`inline`,this.duration=4e3,this.hasAction=!1,this.#e=!1,this.#t=4e3,this.#n=null,this.#r=null,this.#i=!1}static{this.styles=[v,E]}#e;#t;#n;#r;#i;connectedCallback(){if(super.connectedCallback(),this.duration!==12e7){let e=1e3;this.#t=this.duration-e,this.#r=setInterval(()=>{this.#i||(this.#t-=e,this.#t<=0&&this.close())},e)}}disconnectedCallback(){this.#r&&clearInterval(this.#r)}async updated(){this.root&&(this.#e||(await this.updateComplete,_(this.root,()=>{this.#e=!0})))}close(){this.#n&&this.#n.focus(),this.#e&&this.root?m(this.root,()=>{this.remove()}):this.remove()}#a(e){this.#n||(this.#i=!0,e.relatedTarget&&e.relatedTarget.focus&&(this.#n=e.relatedTarget))}#o(e){(!e.relatedTarget||!this.shadowRoot?.host.contains(e.relatedTarget))&&(this.#i=!1,this.#n=null)}#s(){this.#i=!0}#c(){this.#n||(this.#i=!1)}#l(){let e=this.shadowRoot?.querySelector(`slot[name="action"]`);return e?e.assignedElements().length>0:!1}firstUpdated(){this.hasAction=this.#l()}render(){if(this.hasAction&&document.documentElement.dataset.wKeyboardinteraction===`true`){let e=window.navigator.userAgent.includes(`Macintosh`)?`⌥`:`Alt`;return n`
				<w-attention tooltip placement="top" distance="12" show>
					<div class="animation-wrapper" slot="target">
						<div
							part="item"
							@mouseenter=${this.#s}
							@mouseleave=${this.#c}
							@focusin=${this.#a}
							@focusout=${this.#o}
						>
							<div part="icon">
								<slot name="icon"></slot>
							</div>
							<div part="message">
								<slot></slot>
							</div>
							<div part="action">
								<slot name="action"></slot>
								<slot name="close"></slot>
							</div>
						</div>
					</div>
					<!-- The keyboard shortcut is announced as part of the action button label -->
					<span slot="message" aria-hidden="true">
						<kbd>${e}</kbd> + <kbd>Enter</kbd>
					</span>
				</w-attention>
			`}return n`
			<div class="animation-wrapper">
				<div
					part="item"
					@mouseenter=${this.#s}
					@mouseleave=${this.#c}
					@focusin=${this.#a}
					@focusout=${this.#o}
				>
					<div part="icon">
						<slot name="icon"></slot>
					</div>
					<div part="message">
						<slot></slot>
					</div>
					<div part="action">
						<slot name="action"></slot>
						<slot name="close"></slot>
					</div>
				</div>
			</div>
		`}},f([t({attribute:`action-placement`,reflect:!0,useDefault:!0})],O.prototype,`actionPlacement`,void 0),f([t({type:Number,reflect:!0,useDefault:!0})],O.prototype,`duration`,void 0),f([b(`.animation-wrapper`)],O.prototype,`root`,void 0),f([y()],O.prototype,`hasAction`,void 0),customElements.get(`w-snackbar-item`)||customElements.define(`w-snackbar-item`,O)})),A,j=e((()=>{A=JSON.parse(`{"snackbar.aria.close":["Dismiss message"]}`)})),M,N=e((()=>{M=JSON.parse(`{"snackbar.aria.close":["Dismiss message"]}`)})),P,F=e((()=>{P=JSON.parse(`{"snackbar.aria.close":["Dismiss message"]}`)})),I,L=e((()=>{I=JSON.parse(`{"snackbar.aria.close":["Dismiss message"]}`)})),R,z=e((()=>{R=JSON.parse(`{"snackbar.aria.close":["Dismiss message"]}`)})),B,V=e((()=>{a(),B=c`
	:host {
		position: fixed;
		pointer-events: none;

		--_snackbar-gap: var(--w-c-snackbar-container-gap, 8px);
		--_snackbar-position-top: var(--w-c-snackbar-position-top, initial);
		--_snackbar-position-right: var(--w-c-snackbar-position-right, 0);
		--_snackbar-position-bottom: var(--w-c-snackbar-position-bottom, 16px);
		--_snackbar-position-left: var(--w-c-snackbar-position-left, 0);
		--_snackbar-z-index: var(--w-c-snackbar-z-index, 50);

		bottom: var(--_snackbar-position-bottom);
		left: var(--_snackbar-position-left);
		right: var(--_snackbar-position-right);
		top: var(--_snackbar-position-top);

		z-index: var(--_snackbar-z-index);
	}

	[part="container"] {
		display: grid;
		gap: var(--_snackbar-gap);
		grid-template-rows: auto;
		justify-content: center;
		justify-items: center;
		margin-inline: auto;
		pointer-events: none;
	}

	::slotted(*) {
		pointer-events: initial;
	}
`})),H,U,W,G=e((()=>{r(),a(),k(),te(),j(),N(),F(),L(),z(),p(),V(),H={canClose:!0,duration:D.Short,variant:`neutral`},ne(M,I,P,A,R),U=/\s/,W=class extends s{static{this.styles=[v,B]}constructor(){super(),this.internals=this.attachInternals(),this.internals.ariaLive=`polite`,this.internals.role=`log`,this._onKeydown=this._onKeydown.bind(this)}connectedCallback(){super.connectedCallback(),document.addEventListener(`keydown`,this._onKeydown)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(`keydown`,this._onKeydown)}_onKeydown(e){if(e.key===`Escape`){let e=this.shadowRoot?.host.querySelector(`w-snackbar-item:last-of-type`);e&&e.close()}else if(e.altKey&&e.key===`Enter`){e.preventDefault();let t=this.shadowRoot?.host.querySelector(`w-snackbar-item:last-of-type`);if(console.log(`Found item!`),t){let e=t.querySelector(`w-button[slot="action"]`);console.log(`Found action!`),e&&(e.click(),console.log(`Clicked!`))}}}create(e,t={}){let n={...H,...t},r=document.createElement(`w-snackbar-item`);if(n.duration&&(r.duration=n.duration),r.innerText=e,n.variant!==`neutral`){let e=document.createElement(`w-icon`);switch(e.slot=`icon`,n.variant){case`positive`:e.name=`SuccessFilled`;break;case`warning`:e.name=`WarningFilled`;break;case`negative`:e.name=`ErrorFilled`;break;case`info`:e.name=`InfoFilled`;break}r.prepend(e)}if(n.action){r.duration<D.Long&&(r.duration=D.Long);let e=document.createElement(`w-button`);e.slot=`action`,e.variant=`utilityQuiet`,e.small=!0;let{label:t,onclick:i,placement:a}=n.action;e.innerText=t;let o=document.createElement(`span`);o.classList.add(`sr-only`),o.innerHTML=`<kbd>${window.navigator.userAgent.includes(`Macintosh`)?`Option`:`Alt`}</kbd> + <kbd>Enter</kbd>`,e.append(o),e.onclick=t=>{let n=i.call(e,t);return t.defaultPrevented||r.close(),n},a?r.actionPlacement=a:U.test(t)&&(r.actionPlacement=`block`),r.append(e)}if(r.duration>D.Long&&(n.canClose=!0),n.canClose){let e=document.createElement(`w-button`);e.slot=`close`,e.variant=`utilityQuiet`,e.small=!0,e.iconOnly=!0,typeof n.canClose==`function`?e.onclick=t=>{let i=n.canClose.call(e,t);return t.defaultPrevented||r.close(),i}:e.onclick=r.close.bind(r);let t=document.createElement(`w-icon`);t.name=`Close`,t.size=`small`,t.ariaLabel=g.t({id:`snackbar.aria.close`,message:`Dismiss message`,comment:`Accessibility label for the button that closes the snackbar/toast popup`}),e.append(t),r.append(e)}return this.shadowRoot?.host.prepend(r),r}render(){return n`
			<aside part="container">
				<slot></slot>
			</aside>
		`}},customElements.get(`w-snackbar`)||customElements.define(`w-snackbar`,W)})),K,q,J,Y,X,Z,Q,$;e((()=>{ee(),a(),i(),x(),S(),d(),w(),C(),T(),G(),k(),{events:K,args:q,argTypes:J}=o(`w-snackbar`),Y={title:`Overlays/Snackbar`,args:{...q,canClose:!0,duration:void 0},argTypes:{...J,duration:{control:{type:`select`},options:[`4 seconds`,`10 seconds`,`Infinite`]}},parameters:{actions:{handles:K}}},X={render({duration:e,canClose:t}){let r=e===`Infinite`?D.Infinite:e===`10 seconds`?D.Long:D.Short;return n`
            <div class="flex gap-8">
                <w-button
                    @click="${()=>{document.querySelector(`w-snackbar`).create(`The message should be short, but if it is not and spans multiple lines then the icon and actions should be centered vertically`,{variant:`positive`,duration:r,canClose:t})}}"
                    >Positive variant</w-button
                >

                <w-button
                    @click="${()=>{document.querySelector(`w-snackbar`).create(`The message should be short`,{variant:`warning`,duration:r,canClose:t})}}"
                    >Warning variant</w-button
                >

                <w-button
                    @click="${()=>{document.querySelector(`w-snackbar`).create(`The message should be short`,{variant:`negative`,duration:r,canClose:t})}}"
                    >Negative variant</w-button
                >

                <w-button
                    @click="${()=>{document.querySelector(`w-snackbar`).create(`The message should be short`,{variant:`info`,duration:r,canClose:t})}}"
                    >Info variant</w-button
                >

                <w-button
                    @click="${()=>{document.querySelector(`w-snackbar`).create(`The message should be short`,{duration:r,canClose:t})}}"
                    >Neutral variant</w-button
                >

                <w-button
                    @click="${()=>{let e=document.querySelector(`w-snackbar`).create(`The message should be short`,{duration:r,canClose:t}),n=document.createElement(`w-icon`);n.name=`Rocket`,n.slot=`icon`,e.prepend(n)}}"
                    >Neutral w/ icon</w-button
                >
            </div>
        `}},Z={render({duration:e,canClose:t}){let r=e===`Infinite`?D.Infinite:e===`10 seconds`?D.Long:D.Short;return n`
            <div class="flex gap-8">
                <w-button
                    @click="${()=>{document.querySelector(`w-snackbar`).create(`The message should be short, but if it is not and spans multiple lines then the icon and actions should be centered vertically`,{variant:`positive`,duration:r,canClose:t,action:{label:`Action`,onclick(){let e=document.getElementById(`with-action-modal`);e.show=!0}}})}}"
                    >Positive variant</w-button
                >

                <w-button
                    @click="${()=>{document.querySelector(`w-snackbar`).create(`The message should be short`,{variant:`warning`,duration:r,canClose:t,action:{label:`Action`,onclick(){let e=document.getElementById(`with-action-modal`);e.show=!0}}})}}"
                    >Warning variant</w-button
                >

                <w-button
                    @click="${()=>{document.querySelector(`w-snackbar`).create(`The message should be short`,{variant:`negative`,duration:r,canClose:t,action:{label:`Action`,onclick(){let e=document.getElementById(`with-action-modal`);e.show=!0}}})}}"
                    >Negative variant</w-button
                >

                <w-button
                    @click="${()=>{document.querySelector(`w-snackbar`).create(`The message should be short`,{variant:`info`,duration:r,canClose:t,action:{label:`Action`,onclick(){let e=document.getElementById(`with-action-modal`);e.show=!0}}})}}"
                    >Info variant</w-button
                >

                <w-button
                    @click="${()=>{document.querySelector(`w-snackbar`).create(`The message should be short`,{duration:r,canClose:t,action:{label:`Action`,onclick(){let e=document.getElementById(`with-action-modal`);e.show=!0}}})}}"
                    >Neutral variant</w-button
                >
            </div>

            <w-modal id="with-action-modal">
                <w-modal-header slot="header" no-close></w-modal-header>
                <div slot="content">
                    <p>Action was triggered</p>
                </div>
                <w-modal-footer slot="footer">
                    <div class="flex gap-16">
                        <w-button
                            variant="primary"
                            commandfor="with-action-modal"
                            command="--close"
                            >Close</w-button
                        >
                    </div>
                </w-modal-footer>
            </w-modal>
        `}},Q={render({duration:e,canClose:t}){let r=e===`Infinite`?D.Infinite:e===`10 seconds`?D.Long:D.Short;return n`
            <div class="flex gap-8">
                <w-button
                    @click="${()=>{document.querySelector(`w-snackbar`).create(`The message should be short, but if it is not and spans multiple lines then the icon and actions should be centered vertically`,{variant:`positive`,duration:r,canClose:t,action:{label:`Long action label`,onclick(){let e=document.getElementById(`with-long-action-modal`);e.show=!0}}})}}"
                    >Positive variant</w-button
                >

                <w-button
                    @click="${()=>{document.querySelector(`w-snackbar`).create(`The message should be short`,{variant:`warning`,duration:r,canClose:t,action:{label:`Long action label`,onclick(){let e=document.getElementById(`with-long-action-modal`);e.show=!0}}})}}"
                    >Warning variant</w-button
                >

                <w-button
                    @click="${()=>{document.querySelector(`w-snackbar`).create(`The message should be short`,{variant:`negative`,duration:r,canClose:t,action:{label:`Long action label`,onclick(){let e=document.getElementById(`with-long-action-modal`);e.show=!0}}})}}"
                    >Negative variant</w-button
                >

                <w-button
                    @click="${()=>{document.querySelector(`w-snackbar`).create(`The message should be short`,{variant:`info`,duration:r,canClose:t,action:{label:`Long action label`,onclick(){let e=document.getElementById(`with-long-action-modal`);e.show=!0}}})}}"
                    >Info variant</w-button
                >

                <w-button
                    @click="${()=>{document.querySelector(`w-snackbar`).create(`The message should be short`,{duration:r,canClose:t,action:{label:`Long action label`,onclick(){let e=document.getElementById(`with-long-action-modal`);e.show=!0}}})}}"
                    >Neutral variant</w-button
                >
            </div>

            <w-modal id="with-long-action-modal">
                <w-modal-header slot="header" no-close></w-modal-header>
                <div slot="content">
                    <p>Action was triggered</p>
                </div>
                <w-modal-footer slot="footer">
                    <div class="flex gap-16">
                        <w-button
                            variant="primary"
                            commandfor="with-long-action-modal"
                            command="--close"
                            >Close</w-button
                        >
                    </div>
                </w-modal-footer>
            </w-modal>
        `}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render({
    duration,
    canClose
  }) {
    const durationNum = duration === "Infinite" ? SnackbarDuration.Infinite : duration === "10 seconds" ? SnackbarDuration.Long : SnackbarDuration.Short;
    return html\`
            <div class="flex gap-8">
                <w-button
                    @click="\${() => {
      const snackbar = document.querySelector<WarpSnackbar>("w-snackbar");
      snackbar!.create("The message should be short, but if it is not and spans multiple lines then the icon and actions should be centered vertically", {
        variant: "positive",
        duration: durationNum,
        canClose
      });
    }}"
                    >Positive variant</w-button
                >

                <w-button
                    @click="\${() => {
      const snackbar = document.querySelector<WarpSnackbar>("w-snackbar");
      snackbar!.create("The message should be short", {
        variant: "warning",
        duration: durationNum,
        canClose
      });
    }}"
                    >Warning variant</w-button
                >

                <w-button
                    @click="\${() => {
      const snackbar = document.querySelector<WarpSnackbar>("w-snackbar");
      snackbar!.create("The message should be short", {
        variant: "negative",
        duration: durationNum,
        canClose
      });
    }}"
                    >Negative variant</w-button
                >

                <w-button
                    @click="\${() => {
      const snackbar = document.querySelector<WarpSnackbar>("w-snackbar");
      snackbar!.create("The message should be short", {
        variant: "info",
        duration: durationNum,
        canClose
      });
    }}"
                    >Info variant</w-button
                >

                <w-button
                    @click="\${() => {
      const snackbar = document.querySelector<WarpSnackbar>("w-snackbar");
      snackbar!.create("The message should be short", {
        duration: durationNum,
        canClose
      });
    }}"
                    >Neutral variant</w-button
                >

                <w-button
                    @click="\${() => {
      const snackbar = document.querySelector<WarpSnackbar>("w-snackbar");
      const item = snackbar!.create("The message should be short", {
        duration: durationNum,
        canClose
      });
      const customIcon = document.createElement("w-icon");
      customIcon.name = "Rocket";
      customIcon.slot = "icon";
      item.prepend(customIcon);
    }}"
                    >Neutral w/ icon</w-button
                >
            </div>
        \`;
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render({
    duration,
    canClose
  }) {
    const durationNum = duration === "Infinite" ? SnackbarDuration.Infinite : duration === "10 seconds" ? SnackbarDuration.Long : SnackbarDuration.Short;
    return html\`
            <div class="flex gap-8">
                <w-button
                    @click="\${() => {
      const snackbar = document.querySelector<WarpSnackbar>("w-snackbar");
      snackbar!.create("The message should be short, but if it is not and spans multiple lines then the icon and actions should be centered vertically", {
        variant: "positive",
        duration: durationNum,
        canClose,
        action: {
          label: "Action",
          onclick() {
            const modal = document.getElementById("with-action-modal") as WarpModal;
            modal.show = true;
          }
        }
      });
    }}"
                    >Positive variant</w-button
                >

                <w-button
                    @click="\${() => {
      const snackbar = document.querySelector<WarpSnackbar>("w-snackbar");
      snackbar!.create("The message should be short", {
        variant: "warning",
        duration: durationNum,
        canClose,
        action: {
          label: "Action",
          onclick() {
            const modal = document.getElementById("with-action-modal") as WarpModal;
            modal.show = true;
          }
        }
      });
    }}"
                    >Warning variant</w-button
                >

                <w-button
                    @click="\${() => {
      const snackbar = document.querySelector<WarpSnackbar>("w-snackbar");
      snackbar!.create("The message should be short", {
        variant: "negative",
        duration: durationNum,
        canClose,
        action: {
          label: "Action",
          onclick() {
            const modal = document.getElementById("with-action-modal") as WarpModal;
            modal.show = true;
          }
        }
      });
    }}"
                    >Negative variant</w-button
                >

                <w-button
                    @click="\${() => {
      const snackbar = document.querySelector<WarpSnackbar>("w-snackbar");
      snackbar!.create("The message should be short", {
        variant: "info",
        duration: durationNum,
        canClose,
        action: {
          label: "Action",
          onclick() {
            const modal = document.getElementById("with-action-modal") as WarpModal;
            modal.show = true;
          }
        }
      });
    }}"
                    >Info variant</w-button
                >

                <w-button
                    @click="\${() => {
      const snackbar = document.querySelector<WarpSnackbar>("w-snackbar");
      snackbar!.create("The message should be short", {
        duration: durationNum,
        canClose,
        action: {
          label: "Action",
          onclick() {
            const modal = document.getElementById("with-action-modal") as WarpModal;
            modal.show = true;
          }
        }
      });
    }}"
                    >Neutral variant</w-button
                >
            </div>

            <w-modal id="with-action-modal">
                <w-modal-header slot="header" no-close></w-modal-header>
                <div slot="content">
                    <p>Action was triggered</p>
                </div>
                <w-modal-footer slot="footer">
                    <div class="flex gap-16">
                        <w-button
                            variant="primary"
                            commandfor="with-action-modal"
                            command="--close"
                            >Close</w-button
                        >
                    </div>
                </w-modal-footer>
            </w-modal>
        \`;
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render({
    duration,
    canClose
  }) {
    const durationNum = duration === "Infinite" ? SnackbarDuration.Infinite : duration === "10 seconds" ? SnackbarDuration.Long : SnackbarDuration.Short;
    return html\`
            <div class="flex gap-8">
                <w-button
                    @click="\${() => {
      const snackbar = document.querySelector<WarpSnackbar>("w-snackbar");
      snackbar!.create("The message should be short, but if it is not and spans multiple lines then the icon and actions should be centered vertically", {
        variant: "positive",
        duration: durationNum,
        canClose,
        action: {
          label: "Long action label",
          onclick() {
            const modal = document.getElementById("with-long-action-modal") as WarpModal;
            modal.show = true;
          }
        }
      });
    }}"
                    >Positive variant</w-button
                >

                <w-button
                    @click="\${() => {
      const snackbar = document.querySelector<WarpSnackbar>("w-snackbar");
      snackbar!.create("The message should be short", {
        variant: "warning",
        duration: durationNum,
        canClose,
        action: {
          label: "Long action label",
          onclick() {
            const modal = document.getElementById("with-long-action-modal") as WarpModal;
            modal.show = true;
          }
        }
      });
    }}"
                    >Warning variant</w-button
                >

                <w-button
                    @click="\${() => {
      const snackbar = document.querySelector<WarpSnackbar>("w-snackbar");
      snackbar!.create("The message should be short", {
        variant: "negative",
        duration: durationNum,
        canClose,
        action: {
          label: "Long action label",
          onclick() {
            const modal = document.getElementById("with-long-action-modal") as WarpModal;
            modal.show = true;
          }
        }
      });
    }}"
                    >Negative variant</w-button
                >

                <w-button
                    @click="\${() => {
      const snackbar = document.querySelector<WarpSnackbar>("w-snackbar");
      snackbar!.create("The message should be short", {
        variant: "info",
        duration: durationNum,
        canClose,
        action: {
          label: "Long action label",
          onclick() {
            const modal = document.getElementById("with-long-action-modal") as WarpModal;
            modal.show = true;
          }
        }
      });
    }}"
                    >Info variant</w-button
                >

                <w-button
                    @click="\${() => {
      const snackbar = document.querySelector<WarpSnackbar>("w-snackbar");
      snackbar!.create("The message should be short", {
        duration: durationNum,
        canClose,
        action: {
          label: "Long action label",
          onclick() {
            const modal = document.getElementById("with-long-action-modal") as WarpModal;
            modal.show = true;
          }
        }
      });
    }}"
                    >Neutral variant</w-button
                >
            </div>

            <w-modal id="with-long-action-modal">
                <w-modal-header slot="header" no-close></w-modal-header>
                <div slot="content">
                    <p>Action was triggered</p>
                </div>
                <w-modal-footer slot="footer">
                    <div class="flex gap-16">
                        <w-button
                            variant="primary"
                            commandfor="with-long-action-modal"
                            command="--close"
                            >Close</w-button
                        >
                    </div>
                </w-modal-footer>
            </w-modal>
        \`;
  }
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`WithAction`,`WithLongActionLabel`]}))();export{X as Default,Z as WithAction,Q as WithLongActionLabel,$ as __namedExportsOrder,Y as default};