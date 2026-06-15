import{i as e}from"./preload-helper-xPQekRTU.js";import{Bt as t,E as n,Ht as r,J as i,Lt as a,Rt as o,b as s,f as c,j as l,k as u,l as d,p as f,q as p,u as m,x as h}from"./iframe-CXcq5x_u.js";import{n as g,t as _}from"./form-control-DtXadPi-.js";import{r as v,t as y}from"./if-defined-Z8GPW2Jz.js";import{n as b,r as x,t as S}from"./link-DAXx3vPi.js";var C,w=e((()=>{C=JSON.parse(`{"button.aria.loading":["Indlæser..."]}`)})),T,E=e((()=>{T=JSON.parse(`{"button.aria.loading":["Loading..."]}`)})),D,O=e((()=>{D=JSON.parse(`{"button.aria.loading":["Ladataan..."]}`)})),k,A=e((()=>{k=JSON.parse(`{"button.aria.loading":["Laster..."]}`)})),j,M=e((()=>{j=JSON.parse(`{"button.aria.loading":["Laddar ..."]}`)})),N,P,F=e((()=>{i(),_(),a(),s(),l(),S(),y(),d(),w(),E(),O(),A(),M(),b(),f(),N=[`primary`,`secondary`,`negative`,`negativeQuiet`,`utility`,`pill`,`link`,`quiet`,`utilityQuiet`,`overlay`,`overlayInverted`,`overlayQuiet`,`overlayInvertedQuiet`],P=class extends g(o){static{this.styles=[m,x]}static{this.shadowRootOptions={...o.shadowRootOptions,delegatesFocus:!0}}#e;updated(e){e.has(`value`)&&this.setValue(this.value)}constructor(){super(),this.autofocus=!1,this.quiet=!1,this.iconOnly=!1,this.small=!1,this.loading=!1,this.disabled=!1,this.fullWidth=!1,this.#e=void 0,u(T,k,D,C,j),this.ariaValueTextLoading=p.t({id:`button.aria.loading`,message:`Loading...`,comment:`Screen reader message for buttons that are loading`})}connectedCallback(){super.connectedCallback();let e=this.variant||`secondary`;if(!N.includes(e))throw Error(`Invalid "variant" attribute. Set its value to one of the following:\n${N.join(`, `)}.`);this.#e=this.value}closestWithId(e){let t=this.shadowRoot,n=null;try{for(;t;){if(n=t.getElementById(e),n)return n;t=t.getRootNode().host?.getRootNode()}}catch{}return document.getElementById(e)}firstUpdated(){this.autofocus&&!this.href&&setTimeout(()=>this.focus(),0),this.buttonEl&&this.commandfor&&(this.buttonEl.commandForElement=this.closestWithId(this.commandfor))}_handleButtonClick(){this.type===`submit`?this.internals.form.requestSubmit():this.type===`reset`&&this.internals.form.reset()}resetFormControl(){this.value=this.#e}render(){let e=this.variant||`secondary`;return r` ${this.href?r`
          <w-link
            href=${this.href}
            target=${this.target}
            variant=${this.quiet?`quiet`:e}
            ?small=${this.small}
            ?loading=${this.loading}
            ?autofocus=${this.autofocus}
            ?full-width=${this.fullWidth}
            class=${this.buttonClass}
            rel=${this.target===`_blank`?this.rel||`noopener`:void 0}
          >
            <slot></slot>
          </w-link>
        `:r`
          <button
            type=${this.type||`button`}
            part="base"
            class=${v(this.buttonClass)}
            @click="${this._handleButtonClick}"
            commandfor=${v(this.commandfor)}
            command=${v(this.command)}
          >
            <slot></slot>
          </button>
        `}
    ${this.loading?r`<span
          class="sr-only"
          role="progressbar"
          aria-valuenow="{0}"
          aria-valuetext=${this.ariaValueTextLoading}
        ></span>`:t}`}},c([n({reflect:!0})],P.prototype,`type`,void 0),c([n({type:Boolean,reflect:!0})],P.prototype,`autofocus`,void 0),c([n({reflect:!0})],P.prototype,`variant`,void 0),c([n({type:Boolean,reflect:!0})],P.prototype,`quiet`,void 0),c([n({type:Boolean,reflect:!0,attribute:`icon-only`})],P.prototype,`iconOnly`,void 0),c([n({type:Boolean,reflect:!0})],P.prototype,`small`,void 0),c([n({type:Boolean,reflect:!0})],P.prototype,`loading`,void 0),c([n({reflect:!0})],P.prototype,`href`,void 0),c([n({reflect:!0})],P.prototype,`target`,void 0),c([n({type:Boolean,reflect:!0})],P.prototype,`disabled`,void 0),c([n({reflect:!0})],P.prototype,`rel`,void 0),c([n({attribute:`full-width`,type:Boolean,reflect:!0})],P.prototype,`fullWidth`,void 0),c([n({attribute:`button-class`,reflect:!0})],P.prototype,`buttonClass`,void 0),c([n({reflect:!0})],P.prototype,`name`,void 0),c([n({reflect:!0})],P.prototype,`value`,void 0),c([n()],P.prototype,`commandfor`,void 0),c([n()],P.prototype,`command`,void 0),c([h(`button`)],P.prototype,`buttonEl`,void 0),customElements.get(`w-button`)||customElements.define(`w-button`,P)}));export{F as t};