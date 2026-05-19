import{n as e}from"./chunk-DnJy8xQt.js";import{n as t,r as n,s as r,t as i}from"./lit-3R6oe-ov.js";import{n as a,t as o}from"./dist-BZcjgT0h.js";import{r as s,t as c}from"./i18n-BwuiYdgr.js";import{i as l,n as u,o as d,r as f,t as p}from"./decorate-BhMxcGWK.js";import{n as m,t as h}from"./styles-Dp7yDomj.js";import{n as g,t as _}from"./form-control-CGD42XQP.js";import{n as v,t as y}from"./if-defined-CC7CiPed.js";import{n as b,r as x,t as S}from"./link-CQeIVeiZ.js";var C,w=e((()=>{C=JSON.parse(`{"button.aria.loading":["Indlæser..."]}`)})),T,E=e((()=>{T=JSON.parse(`{"button.aria.loading":["Loading..."]}`)})),D,O=e((()=>{D=JSON.parse(`{"button.aria.loading":["Ladataan..."]}`)})),k,A=e((()=>{k=JSON.parse(`{"button.aria.loading":["Laster..."]}`)})),j,M=e((()=>{j=JSON.parse(`{"button.aria.loading":["Laddar ..."]}`)})),N,P,F=e((()=>{a(),_(),i(),f(),s(),S(),y(),h(),w(),E(),O(),A(),M(),b(),u(),N=[`primary`,`secondary`,`negative`,`negativeQuiet`,`utility`,`pill`,`link`,`quiet`,`utilityQuiet`,`overlay`,`overlayInverted`,`overlayQuiet`,`overlayInvertedQuiet`],P=class extends g(t){static{this.styles=[m,x]}static{this.shadowRootOptions={...t.shadowRootOptions,delegatesFocus:!0}}#e;updated(e){e.has(`value`)&&this.setValue(this.value)}constructor(){super(),this.autofocus=!1,this.quiet=!1,this.iconOnly=!1,this.small=!1,this.loading=!1,this.disabled=!1,this.fullWidth=!1,this.#e=null,c(T,k,D,C,j),this.ariaValueTextLoading=o.t({id:`button.aria.loading`,message:`Loading...`,comment:`Screen reader message for buttons that are loading`})}connectedCallback(){super.connectedCallback();let e=this.variant||`secondary`;if(!N.includes(e))throw Error(`Invalid "variant" attribute. Set its value to one of the following:\n${N.join(`, `)}.`);this.#e=this.value}closestWithId(e){let t=this.shadowRoot,n=null;try{for(;t;){if(n=t.getElementById(e),n)return n;t=t.getRootNode().host?.getRootNode()}}catch{}return document.getElementById(e)}firstUpdated(){this.autofocus&&!this.href&&setTimeout(()=>this.focus(),0),this.buttonEl&&this.commandfor&&(this.buttonEl.commandForElement=this.closestWithId(this.commandfor))}_handleButtonClick(){this.type===`submit`?this.internals.form.requestSubmit():this.type===`reset`&&this.internals.form.reset()}resetFormControl(){this.value=this.#e}render(){let e=this.variant||`secondary`;return r` ${this.href?r`
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
        ></span>`:n}`}},p([d({reflect:!0})],P.prototype,`type`,void 0),p([d({type:Boolean,reflect:!0})],P.prototype,`autofocus`,void 0),p([d({reflect:!0})],P.prototype,`variant`,void 0),p([d({type:Boolean,reflect:!0})],P.prototype,`quiet`,void 0),p([d({type:Boolean,reflect:!0,attribute:`icon-only`})],P.prototype,`iconOnly`,void 0),p([d({type:Boolean,reflect:!0})],P.prototype,`small`,void 0),p([d({type:Boolean,reflect:!0})],P.prototype,`loading`,void 0),p([d({reflect:!0})],P.prototype,`href`,void 0),p([d({reflect:!0})],P.prototype,`target`,void 0),p([d({type:Boolean,reflect:!0})],P.prototype,`disabled`,void 0),p([d({reflect:!0})],P.prototype,`rel`,void 0),p([d({attribute:`full-width`,type:Boolean,reflect:!0})],P.prototype,`fullWidth`,void 0),p([d({attribute:`button-class`,reflect:!0})],P.prototype,`buttonClass`,void 0),p([d({reflect:!0})],P.prototype,`name`,void 0),p([d({reflect:!0})],P.prototype,`value`,void 0),p([d()],P.prototype,`commandfor`,void 0),p([d()],P.prototype,`command`,void 0),p([l(`button`)],P.prototype,`buttonEl`,void 0),customElements.get(`w-button`)||customElements.define(`w-button`,P)}));export{F as t};