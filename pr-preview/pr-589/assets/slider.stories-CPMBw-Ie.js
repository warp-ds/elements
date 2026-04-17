import{n as e,r as t}from"./chunk-BneVvdWh.js";import{n,t as r}from"./preload-helper-CV6hqhE5.js";import{m as i,n as a,r as o,s,t as c}from"./lit-C07f_Bua.js";import{n as l,t as u}from"./dist-WJrQKcXy.js";import{n as d,t as f}from"./dist-B1PfYo3w.js";import{t as p}from"./__uno-Cy9G7Sgf.js";import{a as m,i as h,n as g,o as _,r as v,t as y}from"./decorate-BZxMavXy.js";import{n as ee,t as te}from"./class-map-DFBsEYAd.js";import{r as ne,t as re}from"./i18n-CXAEKYxp.js";import{n as b,t as x}from"./styles-BM5RxtAH.js";import{n as S,t as ie}from"./if-defined-YNORsBYI.js";import{t as ae}from"./affix-C6RSXCRS.js";import{t as oe}from"./attention-BjsJiIlT.js";import{n as se,t as ce}from"./form-control-DxmguQIf.js";import{n as le,t as C}from"./taggedTemplateLiteral-BSp0U_4f.js";import{t as ue}from"./textfield-Dzbr6kmB.js";var w,de=e((()=>{w=JSON.parse(`{"slider.label.from":["From"],"slider.placeholder.to":["Max"],"slider.placeholder.from":["Min"],"slider.error.overlap":["Maksimumværdien må ikke være mindre end minimumværdien"],"slider.error.required":["Dette felt er påkrævet"],"slider.label.to":["To"],"slider.error.out_of_bounds":["Værdien skal være mellem ",["min"]," og ",["max"]]}`)})),fe,pe=e((()=>{fe=JSON.parse(`{"slider.label.from":["From"],"slider.placeholder.to":["Max"],"slider.placeholder.from":["Min"],"slider.error.overlap":["The maximum value cannot be less than the minimum"],"slider.error.required":["This field is required"],"slider.label.to":["To"],"slider.error.out_of_bounds":["Value must be between ",["min"]," and ",["max"]]}`)})),me,he=e((()=>{me=JSON.parse(`{"slider.label.from":["From"],"slider.placeholder.to":["Max"],"slider.placeholder.from":["Min"],"slider.error.overlap":["Maksimiarvo ei voi olla pienempi kuin minimiarvo"],"slider.error.required":["Tämä kenttä on pakollinen"],"slider.label.to":["To"],"slider.error.out_of_bounds":["Arvon on oltava välillä ",["min"]," - ",["max"]]}`)})),T,ge=e((()=>{T=JSON.parse(`{"slider.label.from":["From"],"slider.placeholder.to":["Max"],"slider.placeholder.from":["Min"],"slider.error.overlap":["Maksimumsverdien kan ikke være mindre enn minimumsverdien"],"slider.error.required":["Dette feltet er påkrevd"],"slider.label.to":["To"],"slider.error.out_of_bounds":["Verdien må være mellom ",["min"]," og ",["max"]]}`)})),E,_e=e((()=>{E=JSON.parse(`{"slider.label.from":["From"],"slider.placeholder.to":["Max"],"slider.placeholder.from":["Min"],"slider.error.overlap":["Maxvärdet kan inte vara mindre än minimivärdet"],"slider.error.required":["Detta fält är obligatoriskt"],"slider.label.to":["To"],"slider.error.out_of_bounds":["Värdet måste vara mellan ",["min"]," och ",["max"]]}`)})),D,ve=e((()=>{c(),D=i`
  .w-slider {
    position: relative;
    border: none;
    padding: 0;
    margin: 0;
    display: grid;
    width: 100%;
    grid-template-areas:
      "label"
      "description"
      "slider"
      "error";
    grid-template-columns: 1fr;

    --w-slider-track-background: var(--w-s-color-background-disabled-subtle);
    --w-slider-track-active-background: var(--w-s-color-background-primary);
    --w-slider-track-height: 4px;
    --w-slider-track-active-height: 6px;
    --w-slider-thumb-background: var(--w-s-color-background-primary);
    --w-slider-thumb-background-hover: var(
      --w-s-color-background-primary-hover
    );
    --w-slider-thumb-size: 28px;
    --w-slider-thumb-offset: calc(var(--w-slider-thumb-size) / 2);
    --w-slider-marker-color: var(--w-s-color-border);


    /* Vertical position of range and markers */
    --_range-top: calc(
      var(--w-slider-thumb-size) / 2 +
        calc(
          var(--w-slider-track-active-height) - calc(
              var(--w-slider-track-height) / 2
            ) + 1px
        )
    );
  }

  .w-slider[disabled] {
      --w-slider-track-active-background: var(--w-s-color-background-disabled-subtle);
      --w-slider-thumb-background: var(--w-s-color-background-disabled-subtle);
      --w-slider-thumb-background-hover: var(--w-s-color-background-disabled-subtle);
  }

  .w-slider__label {
    grid-area: label;
    font-size: var(--w-font-size-s);
    line-height: var(--w-line-height-s);
    font-weight: bold;
    padding-bottom: 8px;
    color: var(--w-s-color-text);
  }

  .w-slider__description {
    grid-area: description;
  }

  .w-slider__range {
    align-self: center;
    background: var(--w-slider-track-background);
    border-radius: 4px;
    height: var(--w-slider-track-active-height);
    position: absolute;
    /* For range sliders to avoid overlapping the slider thumbs we transform them to
    be visually to the left and right of their respective input[type="range"]. This
    padding is here so the active-range element is the same width as the input fields. */
    padding-inline-start: var(--active-range-inline-start-padding, 0);
    padding-inline-end: var(--active-range-inline-end-padding, 0);
    top: var(--_range-top);
    left: 0;
    right: 0;
    grid-area: slider;
  }

  .w-slider__active-range {
    box-sizing: content-box;
    background: var(--w-slider-track-active-background);
    height: var(--w-slider-track-active-height);

    border-start-start-radius: var(--active-range-border-radius, 0);
    border-end-start-radius: var(--active-range-border-radius, 0);

    /* takes over-under into the calculation if set, as this makes the ranges longer in reality */
    --max-with-offset: calc(var(--max) + var(--over-under-offset, 0));

    /* calculate the offset for the "from" thumb in percentage to move the range visualisation from the left edge, using max() to avoid going off screen */
    --offset-percentage: calc(calc(var(--from) - var(--min)) / calc(var(--max-with-offset) - var(--min)) * 100);
    margin-left: calc(max(var(--offset-percentage) * 1%, 0px) - var(--range-slider-magic-pixel, 0px));

    /* calculate the width of the selected range in percentage, clamped between min/max */
    --value-range: calc(var(--max-with-offset) - var(--min));
    --range-span-percentage: calc(calc(min(var(--to), var(--max-with-offset)) - max(var(--min), var(--from))) / var(--value-range) * 100 );
    width: calc(var(--range-span-percentage) * 1% + var(--range-slider-magic-pixel, 0px));


    z-index: 1;
  }

  .w-slider__markers {
    --_marker-height: 7px;
    --_marker-width: 1px;

    align-self: center;

    /* Creates a linear gradient with --_marker-width wide markers
       followed by enough transparent that we can repeat the gradient
       along the X axis and have markers visible where we want them. */
    background: linear-gradient(
        to right,
        var(--w-slider-marker-color) var(--_marker-width),
        rgba(0, 0, 0, 0) 1px calc(100% - 1px),
        var(--w-slider-marker-color) 100%
      )
      repeat-x;
    --_step-width-as-percent: calc(var(--markers) / var(--_value-range) * 100);
    background-size: calc(var(--_step-width-as-percent) * 1%)
      var(--_marker-height);

    background-position: bottom 0 left 8px right 8px;
    position: absolute;
    top: calc(var(--_range-top) + 2px);
    left: 1px;
    right: 1px;
    grid-area: slider;
    height: var(--_marker-height);
    margin-inline: var(--w-slider-thumb-offset);
  }

  .w-slider__error {
    grid-area: error;
    padding-top: 8px;
    font-size: var(--w-font-size-xs);
    line-height: var(--w-line-height-xs);
    color: var(--w-s-color-text-negative);
  }

  .w-slider__help-text {
    grid-area: error;
    padding-top: 8px;
    font-size: var(--w-font-size-xs);
    line-height: var(--w-line-height-xs);
  }

  slot::slotted(w-slider-thumb) {
    position: static;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    grid-area: slider;
  }
`})),O,ye=e((()=>{c(),v(),ne(),x(),de(),pe(),he(),ge(),_e(),ve(),g(),O=class extends a{static{this.shadowRootOptions={...a.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[b,D]}constructor(){super(),this.disabled=!1,this.openEnded=!1,this.invalid=!1,this.required=!1,this.hiddenTextfield=!1,this._invalidMessage=``,this._hasInternalError=!1,this._showError=!1,this._tabbableElements=[],re(fe,T,me,w,E)}#e(){let e=this.querySelectorAll(`w-slider-thumb`),t=!1;for(let n of e.values())n.min=this.edgeMin,n.max=this.edgeMax,n.step=this.step,n.suffix=this.suffix??``,n.required=this.required,n.labelFormatter=this.labelFormatter,n.valueFormatter=this.valueFormatter,n.tooltipFormatter=this.tooltipFormatter,n.openEnded=this.openEnded,n._hiddenTextfield=this.hiddenTextfield,n.ariaLabel||(n.slot||(n.ariaLabel=this.label),n.slot===`from`&&(n.ariaLabel=`${this.label} min`),n.slot===`to`&&(n.ariaLabel=`${this.label} max`)),(n.slot===`from`||n.slot===`to`)&&(t=!0),n.disabled=this.disabled,n.invalid=!!this.errorText,this.#c(n);let n=this.shadowRoot.querySelector(`fieldset`);t?(n.style.setProperty(`--active-range-inline-start-padding`,`var(--w-slider-thumb-size, 28px)`),n.style.setProperty(`--active-range-inline-end-padding`,`var(--w-slider-thumb-size, 28px)`)):n.style.setProperty(`--active-range-border-radius`,`4px`)}get edgeMin(){return this.openEnded?(Number(this.min)-1).toString():this.min}get edgeMax(){return this.openEnded?(Number(this.max)+1).toString():this.max}async connectedCallback(){super.connectedCallback(),await this.updateComplete,requestAnimationFrame(()=>{requestAnimationFrame(()=>{setTimeout(()=>{this.step&&this.style.setProperty(`--step`,String(this.step)),this.min!==void 0&&this.style.setProperty(`--min`,this.edgeMin),this.max!==void 0&&this.style.setProperty(`--max`,this.max),this.markers&&this.style.setProperty(`--markers`,String(this.markers)),this.openEnded&&this.style.setProperty(`--over-under-offset`,`1`),this.querySelectorAll(`w-slider-thumb`).length===2&&this.style.setProperty(`--range-slider-magic-pixel`,`1px`)},0)})});let e=this.querySelectorAll(`w-slider-thumb`);if(e.length===2){let t=Array.from(e);this._tabbableElements[0]=t[0].shadowRoot.querySelector(`input`),this._tabbableElements[1]=t[1].shadowRoot.querySelector(`input`),this._tabbableElements[2]=t[0].shadowRoot.querySelector(`w-textfield`),this._tabbableElements[3]=t[1].shadowRoot.querySelector(`w-textfield`)}else if(e.length===1){let t=Array.from(e);this._tabbableElements[0]=t[0].shadowRoot.querySelector(`input`),this._tabbableElements[1]=t[0].shadowRoot.querySelector(`w-textfield`)}this.invalid&&this.error&&(this._showError=!0),this.#e()}updated(e){(e.has(`disabled`)||e.has(`required`)||e.has(`min`)||e.has(`step`)||e.has(`max`)||e.has(`suffix`)||e.has(`labelFormatter`)||e.has(`valueFormatter`)||e.has(`_invalidMessage`)||e.has(`_hasInternalError`))&&this.#e(),(e.has(`error`)||e.has(`invalid`))&&(this.error&&this.invalid?this._showError=!0:this._showError=!1,this.#e())}#t(e){let t=e.target;this.#c(t)}#n(e){let t=e.target;this.#c(t),t.slot&&this.#a()}#r(){this.componentHasError?this._showError=!0:this._showError=!1,this.#e()}#i(e){if(e.key===`Tab`){let t=this._tabbableElements.indexOf(e.target.shadowRoot.activeElement);if(t===-1)return;let n=e.shiftKey?-1:1,r=this._tabbableElements[t+n];if(!r)return;e.preventDefault(),r.focus()}}#a(){let e,t,n=this.querySelectorAll(`w-slider-thumb`);for(let r of n.values())r.slot===`from`&&(e=r),r.slot===`to`&&(t=r);!e||!t||!e.invalid&&t.invalid}#o(e){e.stopPropagation();let t=this._hasInternalError||this.invalid,n=e.target;if(this._hasInternalError=!!e.detail.invalid||this.invalid,this._invalidMessage=e.detail.invalid,t===!0&&this._hasInternalError===!1){let e=this.querySelectorAll(`w-slider-thumb`);for(let t of e.values())t!==n&&t.updateFieldAfterValidation()}}#s(e,t){return(t.value===void 0||t.value===null)&&(t.value=this.openEnded?``:e),t.value===``?e:t.value}#c(e){let t=e.slot;t||this.style.setProperty(`--from`,`0`),t===`from`&&this.style.setProperty(`--from`,this.#s(this.edgeMin,e)),(!t||t===`to`)&&this.style.setProperty(`--to`,this.#s(this.edgeMax,e))}get componentHasError(){return this.invalid||this._hasInternalError}get errorText(){return this._showError?this.error||this._invalidMessage:``}render(){return s`
      <fieldset
        id="fieldset"
        class="w-slider"
        @input="${this.#n}"
        @focusout="${this.#r}"
        @slidervalidity="${this.#o}"
        @thumbreset="${this.#t}"
        @keydown="${this.#i}"
        aria-invalid="${this.errorText?`true`:o}"
        ?disabled="${this.disabled}"
      >
        ${this.label?s`<legend class="w-slider__label">
              <slot id="label" name="label">${this.label}</slot>
            </legend>`:s`<slot id="label" name="label"></slot>`}
        <slot class="w-slider__description" name="description"></slot>
        ${this.markers?s`<div class="w-slider__markers"></div>`:o}
        <div class="w-slider__range">
          <div class="w-slider__active-range"></div>
        </div>
        <slot
          class="w-slider__slider"
          @slotchange=${this.#e}
        ></slot>
        <slot
          class="w-slider__slider"
          name="from"
          @slotchange=${this.#e}
        ></slot>
        <slot
          class="w-slider__slider"
          name="to"
          @slotchange=${this.#e}
        ></slot>
        ${this.errorText?s`<p class="w-slider__error" aria-describes="fieldset">
              ${this.errorText}
            </p>`:this.helpText?s`<p class="w-slider__help-text" aria-describes="fieldset">
                ${this.helpText}
              </p>`:o}
      </fieldset>
    `}},y([_({reflect:!0})],O.prototype,`label`,void 0),y([_({type:Boolean,reflect:!0})],O.prototype,`disabled`,void 0),y([_({type:Boolean,attribute:`open-ended`})],O.prototype,`openEnded`,void 0),y([_({type:String,reflect:!0})],O.prototype,`error`,void 0),y([_({type:String,reflect:!0,attribute:`help-text`})],O.prototype,`helpText`,void 0),y([_({type:Boolean,reflect:!0})],O.prototype,`invalid`,void 0),y([_({type:Boolean,reflect:!0})],O.prototype,`required`,void 0),y([_({reflect:!0})],O.prototype,`min`,void 0),y([_({reflect:!0})],O.prototype,`max`,void 0),y([_({type:Number,reflect:!0})],O.prototype,`markers`,void 0),y([_({type:Number,reflect:!0})],O.prototype,`step`,void 0),y([_({reflect:!0})],O.prototype,`suffix`,void 0),y([_({type:Boolean,reflect:!0,attribute:`hidden-textfield`})],O.prototype,`hiddenTextfield`,void 0),y([_({attribute:!1})],O.prototype,`valueFormatter`,void 0),y([_({attribute:!1})],O.prototype,`tooltipFormatter`,void 0),y([_({attribute:!1})],O.prototype,`labelFormatter`,void 0),y([m()],O.prototype,`_invalidMessage`,void 0),y([m()],O.prototype,`_hasInternalError`,void 0),y([m()],O.prototype,`_showError`,void 0),y([m()],O.prototype,`_tabbableElements`,void 0),customElements.get(`w-slider`)||customElements.define(`w-slider`,O)})),k,be=e((()=>{c(),k=i`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.hidden{display:none}.absolute{position:absolute}.relative{position:relative}.static{position:static}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}`})),A,xe=e((()=>{c(),A=i`
  .w-slider-thumb {
    position: relative;
    display: grid;
    pointer-events: none; /* For range inputs we position two of these on top of each other. Let clicks go through the top one. */
    grid-template-areas:
      "slider slider slider"
      "frommarker . tomarker"
      "fromtextfield . totextfield";
    grid-template-columns: 1fr 24px 1fr;
  }

  .w-slider-thumb__range {
    appearance: none;
    background-color: transparent;
    grid-area: slider;
    height: 44px; /* touch target */
    margin-left: 0;
    pointer-events: none; /* let clicks pass through for range slider where we place two inputs over each other */
  }

  .w-slider-thumb__range::-webkit-slider-runnable-track {
    box-shadow: none;
    color: var(--w-s-color-text);
    height: var(--w-slider-track-height);
  }

  /*
    Use anchor positioning to place the tooltip target in relation to the slider thumb.
    We use a polyfill to bring support to older Safari, Firefox at time of writing.
   */
  .w-slider-thumb__range::-webkit-slider-thumb {
    anchor-name: --thumb;

    appearance: none;
    cursor: pointer;
    background: var(--w-slider-thumb-background);
    border-radius: 50%;
    height: var(--w-slider-thumb-size, 28px);
    margin-top: calc(
      -1 * calc(var(--w-slider-thumb-offset) - calc(
              var(--w-slider-track-height) / 2
            ))
    );
    pointer-events: initial;
    width: var(--w-slider-thumb-size, 28px);
    z-index: 1;
  }

  .w-slider-thumb__range[disabled]::-webkit-slider-thumb {
    cursor: auto;
  }

  .w-slider-thumb__range::-moz-range-thumb {
    anchor-name: --thumb;

    appearance: none;
    cursor: pointer;
    background: var(--w-slider-thumb-background);
    border-radius: 50%;
    border-color: transparent;
    height: var(--w-slider-thumb-size, 28px);
    margin-top: calc(
      -1 * calc(var(--w-slider-thumb-offset) - calc(
              var(--w-slider-track-height) / 2
            ))
    );
    pointer-events: initial;
    width: var(--w-slider-thumb-size, 28px);
    z-index: 1;

    box-shadow: none;
  }

  .w-slider-thumb__range[disabled]::-moz-range-thumb {
    cursor: auto;
  }

  .w-slider-thumb__range:active::-webkit-slider-thumb,
  .w-slider-thumb__range:hover::-webkit-slider-thumb {
    background: var(--w-slider-thumb-background);
    box-shadow: var(--w-shadow-slider-handle-hover);
  }

  .w-slider-thumb__range:focus,
  .w-slider-thumb__range:focus-visible {
    outline: none;
  }

  .w-slider-thumb__range:focus-visible::-webkit-slider-thumb {
    outline: 2px solid var(--w-s-color-border-focus);
    outline-offset: var(--w-outline-offset, 1px);
    box-shadow: none;
  }

  .w-slider-thumb__range:active::-moz-range-thumb,
  .w-slider-thumb__range:hover::-moz-range-thumb {
    background: var(--w-s-color-background-primary-hover);
    box-shadow: var(--w-shadow-slider-handle-hover);
  }

  .w-slider-thumb__range:focus-visible::-moz-range-thumb {
    outline: 2px solid var(--w-s-color-border-focus);
    outline-offset: var(--w-outline-offset, 1px);
    box-shadow: none;
  }

  .w-slider-thumb__tooltip-target {
    display: block;
    pointer-events: none;
    position: absolute;
    border: 2px solid transparent;
    border-radius: 20px;
    width: 8px;
    height: 8px;
    position-anchor: --thumb;
    position-area: center; /* Position the tooltip target right on the range thumb */
  }

  /* Uncomment this to debug the invisible anchor target */
  /* .w-slider-thumb__tooltip-target { border-color: lime; } */

  .w-slider-thumb__from-marker,
  .w-slider-thumb__to-marker {
    margin-inline: 2px; /* visual alignment with input border, slider thumb */
    color: var(--w-s-color-text-subtle);
    font-size: var(--w-font-size-s);
    line-height: var(--w-line-height-s);
  }

  .w-slider-thumb__from-marker {
    grid-area: frommarker;
  }

  .w-slider-thumb__to-marker {
    grid-area: tomarker;
    text-align: right;
  }

  .w-slider-thumb__textfield {
    margin-top: 12px;
    pointer-events: auto;
    grid-row: 3 / 4;
    grid-column: 1 / 3; /* Single sliders should have the text field use the fromtextfield _and_ gap portion of the CSS grid. */
  }

  :host([slot="from"]) .w-slider-thumb__textfield {
    grid-column: 1 / 2; /* Range sliders should leave the gap empty. */
  }

  :host([slot="from"]) .w-slider-thumb__range {
    margin-left: var(--w-slider-thumb-size, 28px);
  }

  :host([slot="to"]) .w-slider-thumb__range {
    margin-right: var(--w-slider-thumb-size, 28px);
  }


  :host([slot="from"]) .w-slider-thumb__tooltip-target {
    transform: translateX(calc(-1 * var(--transform-offset, 0px) - 1px));
  }

  :host([slot="from"]) .w-slider-thumb__range::-webkit-slider-thumb {
    transform: translateX(calc(-1 * var(--w-slider-thumb-size, 28px) - 1px));
  }

  :host([slot="from"]) .w-slider-thumb__range::-moz-range-thumb {
    transform: translateX(calc(-1 * var(--w-slider-thumb-size, 28px) - 1px));
  }

  :host([slot="to"]) .w-slider-thumb__textfield {
    grid-row: 3 / 4;
    grid-column: 3 / 4;
  }

  :host([slot="to"]) .w-slider-thumb__tooltip-target {
    transform: translateX(calc(var(--transform-offset, 0px) - 1px));
  }

  :host([slot="to"]) .w-slider-thumb__range::-webkit-slider-thumb {
    transform: translateX(calc(var(--w-slider-thumb-size, 28px) - 1px));
  }

  :host([slot="to"]) .w-slider-thumb__range::-moz-range-thumb {
    transform: translateX(calc(var(--w-slider-thumb-size, 28px) - 1px));
  }

  w-textfield {
    --w-textfield-placeholder-color-text: var(--w-s-color-text);
  }
`})),j,Se=e((()=>{d(),ce(),c(),v(),te(),ie(),be(),x(),xe(),g(),n(),j=class extends se(a){constructor(...e){super(...e),this.disabled=!1,this.invalid=!1,this.openEnded=!1,this.suffix=``,this._showTooltip=!1,this._inputHasFocus=!1,this._hiddenTextfield=!1,this.anchorPositioningStyleElement=null}static{this.shadowRootOptions={...a.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[b,k,A]}#e=null;resetFormControl(){this.value=this.#e,this.dispatchEvent(new CustomEvent(`thumbreset`,{bubbles:!0}))}#t(){this._showTooltip=!0,this.shadowRoot.querySelector(`w-attention`).handleDone()}#n(){this._showTooltip=!1}#r(){this.range&&(this.value===``?this.range.value=this.boundaryValue:this.value&&(this.range.value=this.value))}#i(e){this.dispatchEvent(new CustomEvent(`slidervalidity`,{bubbles:!0,detail:{invalid:e,slot:this.slot}}))}async updateFieldAfterValidation(){let e=this.shadowRoot.querySelector(`w-textfield`);await this.#a(e.value,!0)}async#a(e,t){let n=this.suffix??``,r=Number.parseInt(e);if(this.openEnded&&!t&&this.step&&!(this.slot===`to`&&r>=Number(this.max)-1||this.slot===`from`&&r<=Number(this.min)+1)){let t=1/this.step;r=Math.round(r*t)/t,e=r.toString()}let i=Number.parseInt(this.max),a=Number.parseInt(this.min);if(!this.openEnded&&(r>i||r<a))return this.#i(f.t({id:`slider.error.out_of_bounds`,message:`Value must be between {min} and {max}`,values:{min:`${this.min} ${n}`.trim(),max:`${this.max} ${n}`.trim()}})),{shouldCancel:!0};e===``&&this.required&&this.#i(f.t({id:`slider.error.required`,message:`This field is required`})),this.value=e;let o=e===this.max||e===this.min,s=!1;if(this.slot){let n=this.parentElement.querySelector(`w-slider-thumb[slot="to"]`),c=this.parentElement.querySelector(`w-slider-thumb[slot="from"]`),l=n.textfield.value||this.max,u=c.textfield.value||this.min,d=Number.parseInt(l),p=Number.parseInt(u),m=f.t({id:`slider.error.overlap`,message:`The maximum value cannot be less than the minimum`});if(this.slot===`from`){let n=this.openEnded&&d>i?d:Math.min(d,this.openEnded?i-1:i);r>n&&(s=!0,this.openEnded&&o?this.value=String(n):this.value=l,t&&(this.#i(m),await this.updateComplete,this.textfield.value=e))}else{let n=this.openEnded&&p<a?p:Math.max(Number.parseInt(u),this.openEnded?a+1:a);r<n&&(s=!0,this.openEnded&&o?this.value=String(n):this.value=u,t&&(this.#i(m),await this.updateComplete,this.textfield.value=e))}}return s?{shouldCancel:!0}:(this.#i(``),this.range.value=Math.min(Math.max(Number(e),Number(this.min)),Number(this.max)).toString(),this.value=this.openEnded&&!t&&o?``:e,this.shadowRoot.querySelector(`w-attention`).handleDone(),{shouldCancel:!1})}async#o(e){let t=e.currentTarget.tagName===`W-TEXTFIELD`;if(e instanceof CustomEvent)return;let n=e.currentTarget.value;return(await this.#a(n,t)).shouldCancel?(e.preventDefault(),!1):!0}async#s(e){if(e.key!==`ArrowLeft`&&e.key!==`ArrowRight`)return;let t=Number(this.range.value),n=this.step||1,r;r=e.key===`ArrowLeft`?t-n:t+n,r=Math.min(Math.max(r,Number(this.min)),Number(this.max)),(await this.#a(r.toString(),!1)).shouldCancel&&e.preventDefault()}async connectedCallback(){if(super.connectedCallback(),this.#e=this.value,this.setValue(this.value),this.slot&&!this.ariaDescription&&(this.slot===`from`?this.ariaDescription=f.t({id:`slider.label.from`,comment:`Accessible label for the 'from value' input field in a range slider`,message:`From`}):this.slot===`to`&&(this.ariaDescription=f.t({id:`slider.label.to`,comment:`Accessible label for the 'to value' input field in a range slider`,message:`To`}))),`anchorName`in document.documentElement.style)await this.updateComplete;else{let e=import.meta.url.substring(0,import.meta.url.lastIndexOf(`/`));try{let[{default:t}]=await Promise.all([r(()=>import(`${e}/oddbird-css-anchor-positioning.js`),[],import.meta.url),this.updateComplete]);this.anchorPositioningStyleElement||(this.anchorPositioningStyleElement=document.createElement(`style`),this.shadowRoot.prepend(this.anchorPositioningStyleElement)),this.anchorPositioningStyleElement.textContent=`
        /*
         * The polyfill can only anchor to ::before and ::after pseudo elements, not the pseudo element slider thumb.
         * We work around that by recreating a transparent version of the active range
         * so that we can position relative to that, without crossing the shadow root boundary.
         */
        .polyfill-range {
          align-self: center;
          background: transparent;
          height: var(--w-slider-track-active-height);
          position: absolute;
          padding-inline-start: var(--active-range-inline-start-padding, 0);
          padding-inline-end: var(--active-range-inline-end-padding, 0);
          top: var(--_range-top);
          left: 0;
          right: 0;
          grid-area: slider;
        }

        .polyfill-active-range {
          anchor-name: --polyfilled-thumb;

          box-sizing: content-box;
          background: transparent;
          height: var(--w-slider-track-active-height);

          border-start-start-radius: var(--active-range-border-radius, 0);
          border-end-start-radius: var(--active-range-border-radius, 0);

          margin-left: calc(calc(var(--_blank-values-before) * 1%) - var(--active-range-inline-start-padding, 0px));
          width: calc(calc(var(--_filled-values) * 1%) + var(--active-range-inline-end-padding, 0px));
        }

        #target {
          position: absolute;
          top: anchor(--polyfilled-thumb top);
          right: anchor(--polyfilled-thumb right);
          margin-right: 12px;
        }

        :host([name='from']) .polyfill-active-range {
          margin-left: calc(calc(var(--_blank-values-before) * 1%) - var(--active-range-inline-start-padding, 0px));
          width: calc(calc(var(--_filled-values) * 1%) + var(--active-range-inline-end-padding, 0px));
        }

        :host([name='from']) #target {
          left: anchor(--polyfilled-thumb left);
          margin-left: 38px;
        }
      `,await t({roots:[this.shadowRoot],elements:[this.anchorPositioningStyleElement]})}catch(e){console.error(Error(`Error registering the CSS anchor positioning polyfill. The UI will look broken.`,{cause:e}))}}let e=window.navigator.userAgent;/WebKit/.test(e)&&!/Chrome/.test(e)&&this.tooltipTarget&&this.tooltipTarget.style.setProperty(`--transform-offset`,`var(--w-slider-thumb-size, 28px)`),this.#r()}get boundaryValue(){return this.slot===`from`?this.min:this.max}get textFieldDisplayValue(){return this._inputHasFocus&&this.value===``?this.range?.value?Math.min(Math.max(Number(this.range.value),Number(this.min)+1),Number(this.max)-1).toString():``:this.value}get tooltipDisplayValue(){let e=0;return e=this.tooltipFormatter?this.tooltipFormatter(this.value,this.slot):this.valueFormatter?this.valueFormatter(this.value,this.slot):this.value===``?this.range?.value??this.boundaryValue:this.value||0,e}get ariaDescriptionText(){let e=``,t=this.ariaDescription||``,n=this.value===``;return this.openEnded&&n&&(e=this.slot===`from`?f.t({id:`slider.placeholder.from`,message:`Min`}):f.t({id:`slider.placeholder.to`,message:`Max`})),e?`${e}, ${t}`:t}updated(e){e.has(`openEnded`)&&this.openEnded&&!this.placeholder&&(this.slot===`to`||this.slot===``?this.placeholder=f.t({id:`slider.placeholder.to`,message:`Max`,comment:`Max as in short for Maximum`}):this.slot===`from`&&(this.placeholder=f.t({id:`slider.placeholder.from`,message:`Min`,comment:`Min as in short for Minimum`}))),e.has(`value`)&&(this.#e===void 0&&this.value!==void 0&&(this.#e=this.value),this.setValue(this.value),this.#r())}render(){let e=this.placeholder&&!this.value;return s`
      <div class="w-slider-thumb">
        ${`anchorName`in document.documentElement.style?o:s`<div class="polyfill-range">
              <div class="polyfill-active-range"></div>
            </div>`}
        <input
          id="range"
          aria-label="${this.ariaLabel}"
          aria-describedby="${S(this.ariaDescription?`aria-description`:void 0)}"
          class="w-slider-thumb__range"
          type="range"
          .value="${this.value}"
          min="${this.min}"
          max="${this.max}"
          step="${S(!this.openEnded&&this.step?this.step:void 0)}"
          ?disabled="${this.disabled}"
          @mousedown="${this.#t}"
          @mouseup="${this.#n}"
          @touchstart="${this.#t}"
          @touchend="${this.#n}"
          @focus="${this.#t}"
          @blur="${this.#n}"
          @input="${this.#o}"
          @keydown="${this.openEnded?this.#s:o}"
        />

        ${this.slot===`from`||!this.slot?s`
              <span class="sr-only">
                ${f.t({id:`slider.label.from`,message:`From`})+` `+(this.labelFormatter?this.labelFormatter(`from`):this.min)+`, `+f.t({id:`slider.label.to`,message:`To`})+` `+(this.labelFormatter?this.labelFormatter(`to`):this.max)}
              </span>`:o}

        <span
          aria-hidden="true"
          class="w-slider-thumb__from-marker"
        >
          ${this.labelFormatter?this.labelFormatter(`from`):this.min}
        </span>
        <span
          aria-hidden="true"
          class="w-slider-thumb__to-marker"
        >
          ${this.labelFormatter?this.labelFormatter(`to`):this.max}
        </span>

        <w-textfield
          aria-label="${this.ariaLabel}"
          aria-description="${S(this.ariaDescriptionText)}"
          class="${ee({"w-slider-thumb__textfield":!0,"sr-only":this._hiddenTextfield})}"
          type="number"
          tabindex="${this._hiddenTextfield?-1:o}"
          placeholder="${this.placeholder}"
          .value="${this.textFieldDisplayValue}"
          .formatter=${this.valueFormatter&&!e?e=>this.valueFormatter(e,this.slot):o}
          min="${this.openEnded?o:this.min}"
          max="${this.openEnded?o:this.max}"
          step="${S(this.step)}"
          ?invalid="${!!this.invalid}"
          @input="${this.#o}"
          ?disabled="${this.disabled}"
        >
          ${this.suffix??``?s`<w-affix slot="suffix" label="${this.suffix??``}"></w-affix>`:o}
        </w-textfield>
        <w-attention
          tooltip
          placement="top"
          flip
          distance="24"
          .show="${this._showTooltip}"
        >
          <output
            id="target"
            class="w-slider-thumb__tooltip-target"
            slot="target"
          ></output>
          <span slot="message">
            ${this.tooltipDisplayValue}${this.suffix??``?s`&nbsp;${this.suffix??``}`:o}
          </span>
        </w-attention>

        <!-- aria-description is still not recommended for general use, so make a visually hidden element and refer to it with aria-describedby -->
        <span class="sr-only" id="aria-description">
          ${this.ariaDescriptionText}
        </span>
      </div>
    `}},y([_({attribute:`aria-label`})],j.prototype,`ariaLabel`,void 0),y([_({attribute:`aria-description`})],j.prototype,`ariaDescription`,void 0),y([_({reflect:!0})],j.prototype,`name`,void 0),y([_({reflect:!0})],j.prototype,`value`,void 0),y([_({type:Boolean,reflect:!0})],j.prototype,`disabled`,void 0),y([_({type:Boolean,reflect:!0})],j.prototype,`invalid`,void 0),y([_({attribute:!1,reflect:!1})],j.prototype,`openEnded`,void 0),y([_({reflect:!0})],j.prototype,`placeholder`,void 0),y([m()],j.prototype,`markers`,void 0),y([m()],j.prototype,`required`,void 0),y([m()],j.prototype,`step`,void 0),y([m()],j.prototype,`min`,void 0),y([m()],j.prototype,`max`,void 0),y([m()],j.prototype,`suffix`,void 0),y([_({attribute:!1})],j.prototype,`valueFormatter`,void 0),y([_({attribute:!1})],j.prototype,`tooltipFormatter`,void 0),y([_({attribute:!1})],j.prototype,`labelFormatter`,void 0),y([h(`input[type="range"]`)],j.prototype,`range`,void 0),y([h(`.w-slider-thumb__tooltip-target`)],j.prototype,`tooltipTarget`,void 0),y([h(`w-textfield`)],j.prototype,`textfield`,void 0),y([m()],j.prototype,`_showTooltip`,void 0),y([m()],j.prototype,`_inputHasFocus`,void 0),y([m()],j.prototype,`_hiddenTextfield`,void 0),customElements.get(`w-slider-thumb`)||customElements.define(`w-slider-thumb`,j)})),Ce=t({CustomError:()=>q,Description:()=>J,HiddenMinimumMaximumLabels:()=>X,Marks:()=>H,OpenEnded:()=>W,Range:()=>R,RangeError:()=>K,Single:()=>I,SingleDisabled:()=>L,SingleError:()=>G,Step:()=>U,SuffixCurrency:()=>B,SuffixKilometers:()=>V,SuffixSquareMeters:()=>z,VisuallyHiddenLabel:()=>Y,VisuallyHiddenTextfield:()=>Z,__namedExportsOrder:()=>Q,default:()=>F}),we,Te,Ee,De,Oe,ke,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$=e((()=>{l(),c(),p(),ae(),oe(),ue(),ye(),Se(),le(),{events:M,args:N,argTypes:P}=u(`w-slider`),F={title:`Forms/Slider and Range Slider`,args:N,argTypes:P,parameters:{actions:{handles:M}}},I={render(){return s`
      <w-slider label="Single" min="0" max="100">
        <w-slider-thumb name="value"></w-slider-thumb>
      </w-slider>
    `}},L={render(){return s`
      <w-slider label="Single disabled" min="0" max="100" disabled>
        <w-slider-thumb name="value"></w-slider-thumb>
      </w-slider>
    `}},R={render(){return s`
      <form>
        <w-slider label="Range" min="0" max="100">
          <w-slider-thumb
            slot="from"
            aria-label="From value"
            name="from"
          ></w-slider-thumb>
          <w-slider-thumb
            slot="to"
            aria-label="To value"
            name="to"
          ></w-slider-thumb>
        </w-slider>
        <div class="py-8">
          <w-button type="reset">Reset</w-button>
          <w-button type="submit">Submit</w-button>
        </div>
      </form>
    `}},z={args:{locale:`nb`,suffix:`m²`},render({locale:e,suffix:t}){return s`
      <w-slider
        label="Apartment size"
        min="0"
        max="250"
        suffix="${t}"
        data-testid="sqm"
      >
        <w-slider-thumb
          slot="from"
          aria-label="From size"
          name="from"
        ></w-slider-thumb>
        <w-slider-thumb
          slot="to"
          aria-label="To size"
          name="to"
        ></w-slider-thumb>
      </w-slider>
    `}},B={args:{locale:`nb`,suffix:`kr`},render({locale:e,suffix:t}){return s(we||=C([`
      <w-slider
        label="Price"
        min="0"
        max="250000"
        suffix="`,`"
        data-testid="currency"
      >
        <w-slider-thumb
          slot="from"
          aria-label="From price"
          name="from"
        ></w-slider-thumb>
        <w-slider-thumb
          slot="to"
          aria-label="To price"
          name="to"
        ></w-slider-thumb>
      </w-slider>
      <script type="module">
        const numberFormatter = window.getNumberFormatter(
          "`,`",
        ).format;
        const currencySlider = document.querySelector(
          'w-slider[data-testid="currency"]',
        );
        currencySlider.labelFormatter = (slot) => {
          if (slot === "from") return "0";
          return numberFormatter("250000");
        };
        currencySlider.valueFormatter = numberFormatter;
      <\/script>
    `]),t,e)}},V={args:{locale:`nb`,suffix:`km`},render({locale:e,suffix:t}){return s(Te||=C([`
      <w-slider
        label="Distance"
        min="0"
        max="250000"
        suffix="`,`"
        data-testid="km"
      >
        <w-slider-thumb
          slot="from"
          aria-label="From distance"
          name="from"
        ></w-slider-thumb>
        <w-slider-thumb
          slot="to"
          aria-label="To distance"
          name="to"
        ></w-slider-thumb>
      </w-slider>
      <script type="module">
        const numberFormatter = window.getNumberFormatter(
          "`,`",
        ).format;
        const kmSlider = document.querySelector('w-slider[data-testid="km"]');
        kmSlider.labelFormatter = (slot) => {
          if (slot === "from") return "0";
          return numberFormatter("250000");
        };
        kmSlider.valueFormatter = numberFormatter;
      <\/script>
    `]),t,e)}},H={args:{locale:`nb`,step:`5`,markers:`5`},render({markers:e,step:t}){return s`
      <w-slider
        label="Single"
        min="0"
        max="100"
        step="${t}"
        markers="${e}"
      >
        <w-slider-thumb name="value"></w-slider-thumb>
      </w-slider>
    `}},U={args:{step:5},render({step:e}){return s`
      <w-slider label="Single" step="${e}" min="0" max="100">
        <w-slider-thumb name="value"></w-slider-thumb>
      </w-slider>
    `}},W={args:{},render(){return s(Ee||=C([`
      <form id="openended" style="margin-bottom: 16px">
        <w-slider
          label="Model year"
          min="1950"
          max="2025"
          data-testid="openended"
          open-ended
        >
          <w-slider-thumb
            slot="from"
            aria-label="From year"
            name="from-year"
          ></w-slider-thumb>
          <w-slider-thumb
            slot="to"
            aria-label="To year"
            name="to-year"
          ></w-slider-thumb>
        </w-slider>
      </form>
      <p>
        Drag the slider to show the value below. See the Code tab for how to
        format the labels.
      </p>
      <output>
        <dl>
          <dt>From:</dt>
          <dd id="openended-from"></dd>
          <dt>To:</dt>
          <dd id="openended-to"></dd>
        </dl>
      </output>
      <script>
        /** Here is how you can show labels to indicate min and max values are "up to and including" and "this value and above". */
        const overunderSlider = document.querySelector(
          'w-slider[data-testid="openended"]',
        );
        overunderSlider.labelFormatter = function (slot) {
          if (slot === 'from') {
            return 'Before 1950';
          }
          return '2025+';
        };
        overunderSlider.valueFormatter = function (value, slot) {
          if (slot === 'from' && value === '') {
            return 'Min';
          }
          if (slot === 'to' && value === '') {
            return 'Max';
          }
          return value;
        };

        /** Code to show the form values in output */
        document.forms["openended"].addEventListener("input", function () {
          const formData = new FormData(this);
          const from = formData.get("from-year");
          const to = formData.get("to-year");
          document.getElementById("openended-from").innerText = from;
          document.getElementById("openended-to").innerText = to;
        });
      <\/script>
    `]))}},G={render(){return s`
      <w-slider label="Single" min="0" max="100">
        <p slot="description">Try typing a value over 100</p>
        <w-slider-thumb></w-slider-thumb>
      </w-slider>
    `}},K={args:{},render(){return s(De||=C([`
      <form id="rangeerror" style="margin-bottom: 16px">
        <w-slider label="Model year" min="1950" max="2025">
          <p slot="description">
            Try typing a from value higher than a to value
          </p>
          <w-slider-thumb slot="from" name="from"></w-slider-thumb>
          <w-slider-thumb slot="to" name="to"></w-slider-thumb>
        </w-slider>
      </form>
      <p>
        Drag the slider to show the value below. See the Code tab for how to
        format the labels.
      </p>
      <output>
        <dl>
          <dt>From:</dt>
          <dd id="rangeerror-from"></dd>
          <dt>To:</dt>
          <dd id="rangeerror-to"></dd>
        </dl>
      </output>
      <script>
        /** Code to show the form values in output */
        document.forms["rangeerror"].addEventListener("input", function () {
          const formData = new FormData(this);
          const from = formData.get("from");
          const to = formData.get("to");
          document.getElementById("rangeerror-from").innerText = from;
          document.getElementById("rangeerror-to").innerText = to;
        });
      <\/script>
    `]))}},q={args:{error:`I'm an external error telling you something is wrong`,invalid:!0},render(e){return s`
      <w-slider
        label="Model year"
        min="1950"
        max="2025"
        error="${e.error}"
        ?invalid="${e.invalid}"
      >
        <w-slider-thumb slot="from" name="from"></w-slider-thumb>
        <w-slider-thumb slot="to" name="to"></w-slider-thumb>
      </w-slider>
    `}},J={render(){return s`
      <w-slider
        label="Model year"
        min="1950"
        max="2025"
        help-text="Model year of the car"
      >
        <w-slider-thumb slot="from" name="from"></w-slider-thumb>
        <w-slider-thumb slot="to" name="to"></w-slider-thumb>
      </w-slider>
    `}},Y={render(){return s`
      <w-slider
        min="1950"
        max="2025"
        help-text="Model year of the car"
      >
        <legend class="sr-only" slot="label">Model year</legend>
        <w-slider-thumb slot="from" name="from"></w-slider-thumb>
        <w-slider-thumb slot="to" name="to"></w-slider-thumb>
      </w-slider>
    `}},X={render(){return s(Oe||=C([`
      <w-slider
        min="1950"
        max="2025"
        help-text="Model year of the car"
        data-testid="hidden-minmax-label"
      >
        <legend class="sr-only" slot="label">Model year</legend>
        <w-slider-thumb slot="from" name="from"></w-slider-thumb>
        <w-slider-thumb slot="to" name="to"></w-slider-thumb>
      </w-slider>
      <script>
        const hiddenMinMaxSlider = document.querySelector(
          'w-slider[data-testid="hidden-minmax-label"]',
        );
        hiddenMinMaxSlider.labelFormatter = () => "";
      <\/script>
    `]))}},Z={render({locale:e}){return s(ke||=C([`
      <output class="text-xs">
        <span class="font-bold">Distance:</span>
        <span id="distance-value"></span>
      </output>
      <form name="map">
        <w-slider min="0" max="20" hidden-textfield data-testid="map-radius">
          <legend class="sr-only" slot="label">Location filter radius</legend>
          <w-slider-thumb name="distance"></w-slider-thumb>
        </w-slider>
      </form>
      <script>
        const radiusSteps = [
          200, 300, 400, 500, 700, 1000, 1500, 2000, 3000, 5000, 7000, 10000,
          20000, 30000, 50000, 75000, 100000, 200000, 300000, 400000, 500000,
        ];
        const mapRadiusSlider = document.querySelector(
          'w-slider[data-testid="map-radius"]',
        );
        const formatter = window.getNumberFormatter("`,`");
        function formatDistance(value) {
          const index = Number.parseInt(value);
          const numValue = radiusSteps[index];

          let formattedValue = "";

          if (numValue < 1000) {
            // Use non-breaking space here
            formattedValue = formatter.format(numValue) + "\xA0m";
          } else {
            formattedValue = formatter.format(numValue / 1000) + "\xA0km";
          }
          return formattedValue;
        };
        mapRadiusSlider.labelFormatter = (slot) => {
          if (slot === "from") {
            return formatDistance("0");
          }
          return formatDistance(String(radiusSteps.length - 1));
        };
        mapRadiusSlider.valueFormatter = (value) => {
          const formattedValue = formatDistance(value);
          document.getElementById("distance-value").innerText = formattedValue;
          return formattedValue;
        };

        document.forms["map"].addEventListener("input", function () {
          const formData = new FormData(this);
          const distance = formData.get("distance");
        });
      <\/script>
    `]),e)}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render() {
    return html\`
      <w-slider label="Single" min="0" max="100">
        <w-slider-thumb name="value"></w-slider-thumb>
      </w-slider>
    \`;
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render() {
    return html\`
      <w-slider label="Single disabled" min="0" max="100" disabled>
        <w-slider-thumb name="value"></w-slider-thumb>
      </w-slider>
    \`;
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render() {
    return html\`
      <form>
        <w-slider label="Range" min="0" max="100">
          <w-slider-thumb
            slot="from"
            aria-label="From value"
            name="from"
          ></w-slider-thumb>
          <w-slider-thumb
            slot="to"
            aria-label="To value"
            name="to"
          ></w-slider-thumb>
        </w-slider>
        <div class="py-8">
          <w-button type="reset">Reset</w-button>
          <w-button type="submit">Submit</w-button>
        </div>
      </form>
    \`;
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'nb',
    suffix: 'm²'
  },
  render({
    locale,
    suffix
  }) {
    return html\`
      <w-slider
        label="Apartment size"
        min="0"
        max="250"
        suffix="\${suffix}"
        data-testid="sqm"
      >
        <w-slider-thumb
          slot="from"
          aria-label="From size"
          name="from"
        ></w-slider-thumb>
        <w-slider-thumb
          slot="to"
          aria-label="To size"
          name="to"
        ></w-slider-thumb>
      </w-slider>
    \`;
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'nb',
    suffix: 'kr'
  },
  render({
    locale,
    suffix
  }) {
    return html\`
      <w-slider
        label="Price"
        min="0"
        max="250000"
        suffix="\${suffix}"
        data-testid="currency"
      >
        <w-slider-thumb
          slot="from"
          aria-label="From price"
          name="from"
        ></w-slider-thumb>
        <w-slider-thumb
          slot="to"
          aria-label="To price"
          name="to"
        ></w-slider-thumb>
      </w-slider>
      <script type="module">
        const numberFormatter = window.getNumberFormatter(
          "\${locale}",
        ).format;
        const currencySlider = document.querySelector(
          'w-slider[data-testid="currency"]',
        );
        currencySlider.labelFormatter = (slot) => {
          if (slot === "from") return "0";
          return numberFormatter("250000");
        };
        currencySlider.valueFormatter = numberFormatter;
      <\/script>
    \`;
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'nb',
    suffix: 'km'
  },
  render({
    locale,
    suffix
  }) {
    return html\`
      <w-slider
        label="Distance"
        min="0"
        max="250000"
        suffix="\${suffix}"
        data-testid="km"
      >
        <w-slider-thumb
          slot="from"
          aria-label="From distance"
          name="from"
        ></w-slider-thumb>
        <w-slider-thumb
          slot="to"
          aria-label="To distance"
          name="to"
        ></w-slider-thumb>
      </w-slider>
      <script type="module">
        const numberFormatter = window.getNumberFormatter(
          "\${locale}",
        ).format;
        const kmSlider = document.querySelector('w-slider[data-testid="km"]');
        kmSlider.labelFormatter = (slot) => {
          if (slot === "from") return "0";
          return numberFormatter("250000");
        };
        kmSlider.valueFormatter = numberFormatter;
      <\/script>
    \`;
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'nb',
    step: '5',
    markers: '5'
  },
  render({
    markers,
    step
  }) {
    return html\`
      <w-slider
        label="Single"
        min="0"
        max="100"
        step="\${step}"
        markers="\${markers}"
      >
        <w-slider-thumb name="value"></w-slider-thumb>
      </w-slider>
    \`;
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    step: 5
  },
  render({
    step
  }) {
    return html\`
      <w-slider label="Single" step="\${step}" min="0" max="100">
        <w-slider-thumb name="value"></w-slider-thumb>
      </w-slider>
    \`;
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    return html\`
      <form id="openended" style="margin-bottom: 16px">
        <w-slider
          label="Model year"
          min="1950"
          max="2025"
          data-testid="openended"
          open-ended
        >
          <w-slider-thumb
            slot="from"
            aria-label="From year"
            name="from-year"
          ></w-slider-thumb>
          <w-slider-thumb
            slot="to"
            aria-label="To year"
            name="to-year"
          ></w-slider-thumb>
        </w-slider>
      </form>
      <p>
        Drag the slider to show the value below. See the Code tab for how to
        format the labels.
      </p>
      <output>
        <dl>
          <dt>From:</dt>
          <dd id="openended-from"></dd>
          <dt>To:</dt>
          <dd id="openended-to"></dd>
        </dl>
      </output>
      <script>
        /** Here is how you can show labels to indicate min and max values are "up to and including" and "this value and above". */
        const overunderSlider = document.querySelector(
          'w-slider[data-testid="openended"]',
        );
        overunderSlider.labelFormatter = function (slot) {
          if (slot === 'from') {
            return 'Before 1950';
          }
          return '2025+';
        };
        overunderSlider.valueFormatter = function (value, slot) {
          if (slot === 'from' && value === '') {
            return 'Min';
          }
          if (slot === 'to' && value === '') {
            return 'Max';
          }
          return value;
        };

        /** Code to show the form values in output */
        document.forms["openended"].addEventListener("input", function () {
          const formData = new FormData(this);
          const from = formData.get("from-year");
          const to = formData.get("to-year");
          document.getElementById("openended-from").innerText = from;
          document.getElementById("openended-to").innerText = to;
        });
      <\/script>
    \`;
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render() {
    return html\`
      <w-slider label="Single" min="0" max="100">
        <p slot="description">Try typing a value over 100</p>
        <w-slider-thumb></w-slider-thumb>
      </w-slider>
    \`;
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    return html\`
      <form id="rangeerror" style="margin-bottom: 16px">
        <w-slider label="Model year" min="1950" max="2025">
          <p slot="description">
            Try typing a from value higher than a to value
          </p>
          <w-slider-thumb slot="from" name="from"></w-slider-thumb>
          <w-slider-thumb slot="to" name="to"></w-slider-thumb>
        </w-slider>
      </form>
      <p>
        Drag the slider to show the value below. See the Code tab for how to
        format the labels.
      </p>
      <output>
        <dl>
          <dt>From:</dt>
          <dd id="rangeerror-from"></dd>
          <dt>To:</dt>
          <dd id="rangeerror-to"></dd>
        </dl>
      </output>
      <script>
        /** Code to show the form values in output */
        document.forms["rangeerror"].addEventListener("input", function () {
          const formData = new FormData(this);
          const from = formData.get("from");
          const to = formData.get("to");
          document.getElementById("rangeerror-from").innerText = from;
          document.getElementById("rangeerror-to").innerText = to;
        });
      <\/script>
    \`;
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    error: "I'm an external error telling you something is wrong",
    invalid: true
  },
  render(args) {
    return html\`
      <w-slider
        label="Model year"
        min="1950"
        max="2025"
        error="\${args.error}"
        ?invalid="\${args.invalid}"
      >
        <w-slider-thumb slot="from" name="from"></w-slider-thumb>
        <w-slider-thumb slot="to" name="to"></w-slider-thumb>
      </w-slider>
    \`;
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render() {
    return html\`
      <w-slider
        label="Model year"
        min="1950"
        max="2025"
        help-text="Model year of the car"
      >
        <w-slider-thumb slot="from" name="from"></w-slider-thumb>
        <w-slider-thumb slot="to" name="to"></w-slider-thumb>
      </w-slider>
    \`;
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render() {
    return html\`
      <w-slider
        min="1950"
        max="2025"
        help-text="Model year of the car"
      >
        <legend class="sr-only" slot="label">Model year</legend>
        <w-slider-thumb slot="from" name="from"></w-slider-thumb>
        <w-slider-thumb slot="to" name="to"></w-slider-thumb>
      </w-slider>
    \`;
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render() {
    return html\`
      <w-slider
        min="1950"
        max="2025"
        help-text="Model year of the car"
        data-testid="hidden-minmax-label"
      >
        <legend class="sr-only" slot="label">Model year</legend>
        <w-slider-thumb slot="from" name="from"></w-slider-thumb>
        <w-slider-thumb slot="to" name="to"></w-slider-thumb>
      </w-slider>
      <script>
        const hiddenMinMaxSlider = document.querySelector(
          'w-slider[data-testid="hidden-minmax-label"]',
        );
        hiddenMinMaxSlider.labelFormatter = () => "";
      <\/script>
    \`;
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render({
    locale
  }) {
    return html\`
      <output class="text-xs">
        <span class="font-bold">Distance:</span>
        <span id="distance-value"></span>
      </output>
      <form name="map">
        <w-slider min="0" max="20" hidden-textfield data-testid="map-radius">
          <legend class="sr-only" slot="label">Location filter radius</legend>
          <w-slider-thumb name="distance"></w-slider-thumb>
        </w-slider>
      </form>
      <script>
        const radiusSteps = [
          200, 300, 400, 500, 700, 1000, 1500, 2000, 3000, 5000, 7000, 10000,
          20000, 30000, 50000, 75000, 100000, 200000, 300000, 400000, 500000,
        ];
        const mapRadiusSlider = document.querySelector(
          'w-slider[data-testid="map-radius"]',
        );
        const formatter = window.getNumberFormatter("\${locale}");
        function formatDistance(value) {
          const index = Number.parseInt(value);
          const numValue = radiusSteps[index];

          let formattedValue = "";

          if (numValue < 1000) {
            // Use non-breaking space here
            formattedValue = formatter.format(numValue) + "\xA0m";
          } else {
            formattedValue = formatter.format(numValue / 1000) + "\xA0km";
          }
          return formattedValue;
        };
        mapRadiusSlider.labelFormatter = (slot) => {
          if (slot === "from") {
            return formatDistance("0");
          }
          return formatDistance(String(radiusSteps.length - 1));
        };
        mapRadiusSlider.valueFormatter = (value) => {
          const formattedValue = formatDistance(value);
          document.getElementById("distance-value").innerText = formattedValue;
          return formattedValue;
        };

        document.forms["map"].addEventListener("input", function () {
          const formData = new FormData(this);
          const distance = formData.get("distance");
        });
      <\/script>
    \`;
  }
}`,...Z.parameters?.docs?.source}}},Q=[`Single`,`SingleDisabled`,`Range`,`SuffixSquareMeters`,`SuffixCurrency`,`SuffixKilometers`,`Marks`,`Step`,`OpenEnded`,`SingleError`,`RangeError`,`CustomError`,`Description`,`VisuallyHiddenLabel`,`HiddenMinimumMaximumLabels`,`VisuallyHiddenTextfield`]}));$();export{q as CustomError,J as Description,X as HiddenMinimumMaximumLabels,H as Marks,W as OpenEnded,R as Range,K as RangeError,I as Single,L as SingleDisabled,G as SingleError,U as Step,B as SuffixCurrency,V as SuffixKilometers,z as SuffixSquareMeters,Y as VisuallyHiddenLabel,Z as VisuallyHiddenTextfield,Q as __namedExportsOrder,F as default,Ce as n,$ as t};