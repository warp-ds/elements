import{a as L,i as P,q as ee,r as Z,A as c,b as i,n as s,m as h,p,k as te,g as re}from"./iframe-RMPxWOnk.js";import"./affix-DGL3zac6.js";import"./attention-DFNYM0mj.js";import"./textfield-CnfdtWIe.js";import{_ as ae}from"./preload-helper-Ct5FWWRu.js";import{e as B}from"./query-NYTjQBeo.js";import{o as C}from"./if-defined-BGMlMZzU.js";import{F as ie}from"./FormControlMixin-DJnJZbro.js";const se=JSON.parse('{"slider.label.from":["From"],"slider.placeholder.to":["Max"],"slider.placeholder.from":["Min"],"slider.error.overlap":["Maksimumværdien må ikke være mindre end minimumværdien"],"slider.error.required":["Dette felt er påkrævet"],"slider.label.to":["To"],"slider.error.out_of_bounds":["Værdien skal være mellem ",["min"]," og ",["max"]]}'),oe=JSON.parse('{"slider.label.from":["From"],"slider.placeholder.to":["Max"],"slider.placeholder.from":["Min"],"slider.error.overlap":["The maximum value cannot be less than the minimum"],"slider.error.required":["This field is required"],"slider.label.to":["To"],"slider.error.out_of_bounds":["Value must be between ",["min"]," and ",["max"]]}'),le=JSON.parse('{"slider.label.from":["From"],"slider.placeholder.to":["Max"],"slider.placeholder.from":["Min"],"slider.error.overlap":["Maksimiarvo ei voi olla pienempi kuin minimiarvo"],"slider.error.required":["Tämä kenttä on pakollinen"],"slider.label.to":["To"],"slider.error.out_of_bounds":["Arvon on oltava välillä ",["min"]," - ",["max"]]}'),ne=JSON.parse('{"slider.label.from":["From"],"slider.placeholder.to":["Max"],"slider.placeholder.from":["Min"],"slider.error.overlap":["Maksimumsverdien kan ikke være mindre enn minimumsverdien"],"slider.error.required":["Dette feltet er påkrevd"],"slider.label.to":["To"],"slider.error.out_of_bounds":["Verdien må være mellom ",["min"]," og ",["max"]]}'),de=JSON.parse('{"slider.label.from":["From"],"slider.placeholder.to":["Max"],"slider.placeholder.from":["Min"],"slider.error.overlap":["Maxvärdet kan inte vara mindre än minimivärdet"],"slider.error.required":["Detta fält är obligatoriskt"],"slider.label.to":["To"],"slider.error.out_of_bounds":["Värdet måste vara mellan ",["min"]," och ",["max"]]}'),me=L`
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
`;var ue=Object.defineProperty,m=(o,e,r,a)=>{for(var t=void 0,u=o.length-1,f;u>=0;u--)(f=o[u])&&(t=f(e,r,t)||t);return t&&ue(e,r,t),t};class d extends P{constructor(){super(),this.disabled=!1,this.openEnded=!1,this.error="",this.helpText="",this.invalid=!1,this.required=!1,this.suffix="",this.hiddenTextfield=!1,this._invalidMessage="",this._hasInternalError=!1,this._showError=!1,this._tabbableElements=[],ee(oe,ne,le,se,de)}static{this.shadowRootOptions={...P.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[Z,me]}#e(){const e=this.querySelectorAll("w-slider-thumb");let r=!1;for(const t of e.values())t.min=this.edgeMin,t.max=this.edgeMax,t.step=this.step,t.suffix=this.suffix,t.required=this.required,t.labelFormatter=this.labelFormatter,t.valueFormatter=this.valueFormatter,t.tooltipFormatter=this.tooltipFormatter,t.openEnded=this.openEnded,t._hiddenTextfield=this.hiddenTextfield,t.ariaLabel||(t.slot||(t.ariaLabel=this.label),t.slot==="from"&&(t.ariaLabel=`${this.label} min`),t.slot==="to"&&(t.ariaLabel=`${this.label} max`)),(t.slot==="from"||t.slot==="to")&&(r=!0),t.disabled=this.disabled,t.invalid=!!this.errorText,this.#l(t);const a=this.shadowRoot.querySelector("fieldset");r?(a.style.setProperty("--active-range-inline-start-padding","var(--w-slider-thumb-size, 28px)"),a.style.setProperty("--active-range-inline-end-padding","var(--w-slider-thumb-size, 28px)")):a.style.setProperty("--active-range-border-radius","4px")}get edgeMin(){return this.openEnded?(Number(this.min)-1).toString():this.min}get edgeMax(){return this.openEnded?(Number(this.max)+1).toString():this.max}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.step&&this.style.setProperty("--step",String(this.step)),this.style.setProperty("--min",this.edgeMin),this.style.setProperty("--max",this.max),this.markers&&this.style.setProperty("--markers",String(this.markers)),this.openEnded&&this.style.setProperty("--over-under-offset","1");const e=this.querySelectorAll("w-slider-thumb");if(e.length===2){this.style.setProperty("--range-slider-magic-pixel","1px");const a=Array.from(e);this._tabbableElements[0]=a[0].shadowRoot.querySelector("input"),this._tabbableElements[1]=a[1].shadowRoot.querySelector("input"),this._tabbableElements[2]=a[0].shadowRoot.querySelector("w-textfield"),this._tabbableElements[3]=a[1].shadowRoot.querySelector("w-textfield")}else{const a=Array.from(e);this._tabbableElements[0]=a[0].shadowRoot.querySelector("input"),this._tabbableElements[1]=a[0].shadowRoot.querySelector("w-textfield")}this.invalid&&this.error&&(this._showError=!0),this.#e()}updated(e){(e.has("disabled")||e.has("required")||e.has("min")||e.has("step")||e.has("max")||e.has("suffix")||e.has("labelFormatter")||e.has("valueFormatter")||e.has("_invalidMessage")||e.has("_hasInternalError"))&&this.#e(),(e.has("error")||e.has("invalid"))&&(this.error&&this.invalid?this._showError=!0:this._showError=!1,this.#e())}#r(e){const r=e.target;this.#l(r),r.slot&&this.#t()}#a(){this.componentHasError?this._showError=!0:this._showError=!1,this.#e()}#o(e){if(e.key==="Tab"){const r=this._tabbableElements.indexOf(e.target.shadowRoot.activeElement);if(r===-1)return;const a=e.shiftKey?-1:1,t=this._tabbableElements[r+a];if(!t)return;e.preventDefault(),t.focus()}}#t(){let e,r;const a=this.querySelectorAll("w-slider-thumb");for(const t of a.values())t.slot==="from"&&(e=t),t.slot==="to"&&(r=t);!e||!r||!e.invalid&&r.invalid}#i(e){e.stopPropagation();const r=this._hasInternalError||this.invalid,a=e.target;if(this._hasInternalError=!!e.detail.invalid||this.invalid,this._invalidMessage=e.detail.invalid,r===!0&&this._hasInternalError===!1){const t=this.querySelectorAll("w-slider-thumb");for(const u of t.values())u!==a&&u.updateFieldAfterValidation()}}#s(e,r){return(r.value===void 0||r.value===null)&&(r.value=this.openEnded?"":e),r.value===""?e:r.value}#l(e){const r=e.slot;r||this.style.setProperty("--from","0"),r==="from"&&this.style.setProperty("--from",this.#s(this.edgeMin,e)),(!r||r==="to")&&this.style.setProperty("--to",this.#s(this.edgeMax,e))}get componentHasError(){return this.invalid||this._hasInternalError}get errorText(){return this._showError?this.error||this._invalidMessage:""}render(){return i`
      <fieldset
        id="fieldset"
        class="w-slider"
        @input="${this.#r}"
        @focusout="${this.#a}"
        @slidervalidity="${this.#i}"
        @keydown="${this.#o}"
        aria-invalid="${this.errorText?"true":c}"
        ?disabled="${this.disabled}"
      >
        ${this.label?i`<legend class="w-slider__label">
              <slot id="label" name="label">${this.label}</slot>
            </legend>`:i`<slot id="label" name="label"></slot>`}
        <slot class="w-slider__description" name="description"></slot>
        ${this.markers?i`<div class="w-slider__markers"></div>`:c}
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
        ${this.errorText?i`<p class="w-slider__error" aria-describes="fieldset">
              ${this.errorText}
            </p>`:this.helpText?i`<p class="w-slider__help-text" aria-describes="fieldset">
                ${this.helpText}
              </p>`:c}
      </fieldset>
    `}}m([s({reflect:!0})],d.prototype,"label");m([s({type:Boolean,reflect:!0})],d.prototype,"disabled");m([s({type:Boolean,attribute:"open-ended"})],d.prototype,"openEnded");m([s({type:String,reflect:!0})],d.prototype,"error");m([s({type:String,reflect:!0,attribute:"help-text"})],d.prototype,"helpText");m([s({type:Boolean,reflect:!0})],d.prototype,"invalid");m([s({type:Boolean,reflect:!0})],d.prototype,"required");m([s({reflect:!0})],d.prototype,"min");m([s({reflect:!0})],d.prototype,"max");m([s({type:Number,reflect:!0})],d.prototype,"markers");m([s({type:Number,reflect:!0})],d.prototype,"step");m([s({reflect:!0})],d.prototype,"suffix");m([s({type:Boolean,reflect:!0,attribute:"hidden-textfield"})],d.prototype,"hiddenTextfield");m([s({attribute:!1})],d.prototype,"valueFormatter");m([s({attribute:!1})],d.prototype,"tooltipFormatter");m([s({attribute:!1})],d.prototype,"labelFormatter");m([h()],d.prototype,"_invalidMessage");m([h()],d.prototype,"_hasInternalError");m([h()],d.prototype,"_showError");m([h()],d.prototype,"_tabbableElements");customElements.get("w-slider")||customElements.define("w-slider",d);const he=L`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.hidden{display:none}.absolute{position:absolute}.relative{position:relative}.static{position:static}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}`,ce=L`
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
`;var pe=Object.defineProperty,n=(o,e,r,a)=>{for(var t=void 0,u=o.length-1,f;u>=0;u--)(f=o[u])&&(t=f(e,r,t)||t);return t&&pe(e,r,t),t};class l extends ie(P){constructor(){super(...arguments),this.invalid=!1,this.openEnded=!1,this.suffix="",this._showTooltip=!1,this._inputHasFocus=!1,this._hiddenTextfield=!1,this.#e=null,this.anchorPositioningStyleElement=null}static{this.shadowRootOptions={...P.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[Z,he,ce]}#e;resetFormControl(){this.value=this.#e}#r(){this._showTooltip=!0,this.shadowRoot.querySelector("w-attention").handleDone()}#a(){this._showTooltip=!1}#o(){this.range&&(this.value===""?this.range.value=this.boundaryValue:this.value&&(this.range.value=this.value))}#t(e){this.dispatchEvent(new CustomEvent("slidervalidity",{bubbles:!0,detail:{invalid:e,slot:this.slot}}))}async updateFieldAfterValidation(){const e=this.shadowRoot.querySelector("w-textfield");await this.#i(e.value,!0)}async#i(e,r){let a=Number.parseInt(e);if(this.openEnded&&!r&&this.step&&!(this.slot==="to"&&a>=Number(this.max)-1||this.slot==="from"&&a<=Number(this.min)+1)){const N=1/this.step;a=Math.round(a*N)/N,e=a.toString()}const t=Number.parseInt(this.max),u=Number.parseInt(this.min);if(!this.openEnded&&(a>t||a<u))return this.#t(p.t({id:"slider.error.out_of_bounds",message:"Value must be between {min} and {max}",values:{min:`${this.min} ${this.suffix}`.trim(),max:`${this.max} ${this.suffix}`.trim()}})),{shouldCancel:!0};e===""&&this.required&&this.#t(p.t({id:"slider.error.required",message:"This field is required"})),this.value=e;const f=e===this.max||e===this.min;let R=!1;if(this.slot){const O=this.parentElement.querySelector('w-slider-thumb[slot="to"]'),N=this.parentElement.querySelector('w-slider-thumb[slot="from"]'),H=O.textfield.value||this.max,I=N.textfield.value||this.min,A=Number.parseInt(H),j=Number.parseInt(I),X=p.t({id:"slider.error.overlap",message:"The maximum value cannot be less than the minimum"});if(this.slot==="from"){const g=this.openEnded&&A>t?A:Math.min(A,this.openEnded?t-1:t);a>g&&(R=!0,this.openEnded&&f?this.value=String(g):this.value=H,r&&(this.#t(X),await this.updateComplete,this.textfield.value=e))}else{const g=this.openEnded&&j<u?j:Math.max(Number.parseInt(I),this.openEnded?u+1:u);a<g&&(R=!0,this.openEnded&&f?this.value=String(g):this.value=I,r&&(this.#t(X),await this.updateComplete,this.textfield.value=e))}}return R?{shouldCancel:!0}:(this.#t(""),this.range.value=Math.min(Math.max(Number(e),Number(this.min)),Number(this.max)).toString(),this.value=this.openEnded&&!r&&f?"":e,this.shadowRoot.querySelector("w-attention").handleDone(),{shouldCancel:!1})}async#s(e){const r=e.currentTarget.tagName==="W-TEXTFIELD";if(e instanceof CustomEvent)return;const a=e.currentTarget.value;return(await this.#i(a,r)).shouldCancel?(e.preventDefault(),!1):!0}async#l(e){if(e.key!=="ArrowLeft"&&e.key!=="ArrowRight")return;const r=Number(this.range.value),a=this.step||1;let t;e.key==="ArrowLeft"?t=r-a:t=r+a,t=Math.min(Math.max(t,Number(this.min)),Number(this.max)),(await this.#i(t.toString(),!1)).shouldCancel&&e.preventDefault()}async connectedCallback(){if(super.connectedCallback(),this.#e=this.value,this.setValue(this.value),this.slot&&!this.ariaDescription&&(this.slot==="from"?this.ariaDescription=p.t({id:"slider.label.from",comment:"Accessible label for the 'from value' input field in a range slider",message:"From"}):this.slot==="to"&&(this.ariaDescription=p.t({id:"slider.label.to",comment:"Accessible label for the 'to value' input field in a range slider",message:"To"}))),"anchorName"in document.documentElement.style)await this.updateComplete;else{const a=import.meta.url.substring(0,import.meta.url.lastIndexOf("/"));try{const[{default:t}]=await Promise.all([ae(()=>import(`${a}/oddbird-css-anchor-positioning.js`),[],import.meta.url),this.updateComplete]);this.anchorPositioningStyleElement||(this.anchorPositioningStyleElement=document.createElement("style"),this.shadowRoot.prepend(this.anchorPositioningStyleElement)),this.anchorPositioningStyleElement.textContent=`
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
      `,await t({roots:[this.shadowRoot],elements:[this.anchorPositioningStyleElement]})}catch(t){console.error(new Error("Error registering the CSS anchor positioning polyfill. The UI will look broken.",{cause:t}))}}const e=window.navigator.userAgent;/WebKit/.test(e)&&!/Chrome/.test(e)&&this.tooltipTarget&&this.tooltipTarget.style.setProperty("--transform-offset","var(--w-slider-thumb-size, 28px)"),this.#o()}get boundaryValue(){return this.slot==="from"?this.min:this.max}get textFieldDisplayValue(){return this._inputHasFocus?this.value!==""?this.value:this.range?.value?Math.min(Math.max(Number(this.range.value),Number(this.min)+1),Number(this.max)-1).toString():"":this.value}get tooltipDisplayValue(){let e=0;return this.tooltipFormatter?e=this.tooltipFormatter(this.value,this.slot):this.valueFormatter?e=this.valueFormatter(this.value,this.slot):this.value===""?e=this.range?.value??this.boundaryValue:e=this.value||0,e}get ariaDescriptionText(){let e="";const r=this.ariaDescription||"",a=this.value==="";return this.openEnded&&a&&(e=this.slot==="from"?p.t({id:"slider.placeholder.from",message:"Min"}):p.t({id:"slider.placeholder.to",message:"Max"})),e?`${e}, ${r}`:r}updated(e){e.has("openEnded")&&this.openEnded&&!this.placeholder&&(this.slot==="to"||this.slot===""?this.placeholder=p.t({id:"slider.placeholder.to",message:"Max",comment:"Max as in short for Maximum"}):this.slot==="from"&&(this.placeholder=p.t({id:"slider.placeholder.from",message:"Min",comment:"Min as in short for Minimum"}))),e.has("value")&&(this.setValue(this.value),this.#o())}render(){const e=this.placeholder&&!this.value;return i`
      <div class="w-slider-thumb">
        ${"anchorName"in document.documentElement.style?c:i`<div class="polyfill-range">
              <div class="polyfill-active-range"></div>
            </div>`}
        <input
          id="range"
          aria-label="${this.ariaLabel}"
          aria-describedby="${C(this.ariaDescription?"aria-description":void 0)}"
          class="w-slider-thumb__range"
          type="range"
          .value="${this.value}"
          min="${this.min}"
          max="${this.max}"
          step="${C(!this.openEnded&&this.step?this.step:void 0)}"
          ?disabled="${this.disabled}"
          @mousedown="${this.#r}"
          @mouseup="${this.#a}"
          @touchstart="${this.#r}"
          @touchend="${this.#a}"
          @focus="${this.#r}"
          @blur="${this.#a}"
          @input="${this.#s}"
          @keydown="${this.openEnded?this.#l:c}"
        />

        ${this.slot==="from"||!this.slot?i`
              <span class="sr-only">
                ${p.t({id:"slider.label.from",message:"From"})+" "+(this.labelFormatter?this.labelFormatter("from"):this.min)+", "+p.t({id:"slider.label.to",message:"To"})+" "+(this.labelFormatter?this.labelFormatter("to"):this.max)}
              </span>`:c}

        <span
          aria-hidden="true"
          class="w-slider-thumb__from-marker"
        >
          ${this.labelFormatter?this.labelFormatter("from"):this.min}
        </span>
        <span
          aria-hidden="true"
          class="w-slider-thumb__to-marker"
        >
          ${this.labelFormatter?this.labelFormatter("to"):this.max}
        </span>

        <w-textfield
          aria-label="${this.ariaLabel}"
          aria-description="${C(this.ariaDescriptionText)}"
          class="${te({"w-slider-thumb__textfield":!0,"sr-only":this._hiddenTextfield})}"
          type="number"
          tabindex="${this._hiddenTextfield?-1:c}"
          placeholder="${this.placeholder}"
          .value="${this.textFieldDisplayValue}"
          .formatter=${this.valueFormatter&&!e?r=>this.valueFormatter(r,this.slot):c}
          min="${this.openEnded?c:this.min}"
          max="${this.openEnded?c:this.max}"
          step="${C(this.step)}"
          ?invalid="${!!this.invalid}"
          @input="${this.#s}"
          ?disabled="${this.disabled}"
        >
          ${this.suffix?i`<w-affix slot="suffix" label="${this.suffix}"></w-affix>`:c}
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
            ${this.tooltipDisplayValue}${this.suffix?i`&nbsp;${this.suffix}`:c}
          </span>
        </w-attention>

        <!-- aria-description is still not recommended for general use, so make a visually hidden element and refer to it with aria-describedby -->
        <span class="sr-only" id="aria-description">
          ${this.ariaDescriptionText}
        </span>
      </div>
    `}}n([s({attribute:"aria-label",reflect:!0})],l.prototype,"ariaLabel");n([s({attribute:"aria-description",reflect:!0})],l.prototype,"ariaDescription");n([s({reflect:!0})],l.prototype,"name");n([s({reflect:!0})],l.prototype,"value");n([s({type:Boolean,reflect:!0})],l.prototype,"disabled");n([s({type:Boolean,reflect:!0})],l.prototype,"invalid");n([s({attribute:!1,reflect:!1})],l.prototype,"openEnded");n([s({reflect:!0})],l.prototype,"placeholder");n([h()],l.prototype,"markers");n([h()],l.prototype,"required");n([h()],l.prototype,"step");n([h()],l.prototype,"min");n([h()],l.prototype,"max");n([h()],l.prototype,"suffix");n([s({attribute:!1})],l.prototype,"valueFormatter");n([s({attribute:!1})],l.prototype,"tooltipFormatter");n([s({attribute:!1})],l.prototype,"labelFormatter");n([B('input[type="range"]')],l.prototype,"range");n([B(".w-slider-thumb__tooltip-target")],l.prototype,"tooltipTarget");n([B("w-textfield")],l.prototype,"textfield");n([h()],l.prototype,"_showTooltip");n([h()],l.prototype,"_inputHasFocus");n([h()],l.prototype,"_hiddenTextfield");customElements.get("w-slider-thumb")||customElements.define("w-slider-thumb",l);var K=Object.freeze,fe=Object.defineProperty,b=(o,e)=>K(fe(o,"raw",{value:K(o.slice())})),U,W,J,G,Q,Y;const{events:be,args:ge,argTypes:we}=re("w-slider"),ve={title:"Forms/Slider and Range Slider",args:ge,argTypes:we,parameters:{actions:{handles:be}}},w={render(){return i`
      <w-slider label="Single" min="0" max="100">
        <w-slider-thumb name="value"></w-slider-thumb>
      </w-slider>
    `}},v={render(){return i`
      <w-slider label="Single disabled" min="0" max="100" disabled>
        <w-slider-thumb name="value"></w-slider-thumb>
      </w-slider>
    `}},x={render(){return i`
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
    `}},y={args:{locale:"nb",suffix:"m²"},render({locale:o,suffix:e}){return i`
      <w-slider
        label="Apartment size"
        min="0"
        max="250"
        suffix="${e}"
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
    `}},_={args:{locale:"nb",suffix:"kr"},render({locale:o,suffix:e}){return i(U||(U=b([`
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
    `])),e,o)}},S={args:{locale:"nb",suffix:"km"},render({locale:o,suffix:e}){return i(W||(W=b([`
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
    `])),e,o)}},k={args:{locale:"nb",step:"5",markers:"5"},render({markers:o,step:e}){return i`
      <w-slider
        label="Single"
        min="0"
        max="100"
        step="${e}"
        markers="${o}"
      >
        <w-slider-thumb name="value"></w-slider-thumb>
      </w-slider>
    `}},E={args:{step:5},render({step:o}){return i`
      <w-slider label="Single" step="${o}" min="0" max="100">
        <w-slider-thumb name="value"></w-slider-thumb>
      </w-slider>
    `}},F={args:{},render(){return i(J||(J=b([`
      <form id="openended" style="margin-bottom: 16px" lang="nb">
        <w-slider
          label="Produksjonsår"
          min="1950"
          max="2025"
          data-testid="openended"
          open-ended
        >
          <w-slider-thumb
            slot="from"
            aria-label="Fra år"
            name="from-year"
          ></w-slider-thumb>
          <w-slider-thumb
            slot="to"
            aria-label="Til år"
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
            return 'Før 1950';
          }
          return '2025 +';
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
    `])))}},T={args:{locale:"nb"},render(){return i`
      <w-slider label="Single" min="0" max="100">
        <p slot="description">Try typing a value over 100</p>
        <w-slider-thumb></w-slider-thumb>
      </w-slider>
    `}},$={args:{},render(){return i(G||(G=b([`
      <form id="rangeerror" style="margin-bottom: 16px">
        <w-slider label="Production year" min="1950" max="2025" over under>
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
    `])))}},D={args:{locale:"nb",error:"I'm an external error telling you something is wrong",invalid:!0},render(o){return i`
      <w-slider
        label="Production year"
        min="1950"
        max="2025"
        over
        under
        error="${o.error}"
        ?invalid="${o.invalid}"
      >
        <w-slider-thumb slot="from" name="from"></w-slider-thumb>
        <w-slider-thumb slot="to" name="to"></w-slider-thumb>
      </w-slider>
    `}},M={args:{locale:"nb"},render(){return i`
      <w-slider
        label="Production year"
        min="1950"
        max="2025"
        over
        under
        help-text="Production year of the car"
      >
        <w-slider-thumb slot="from" name="from"></w-slider-thumb>
        <w-slider-thumb slot="to" name="to"></w-slider-thumb>
      </w-slider>
    `}},V={args:{locale:"nb"},render(){return i`
      <w-slider
        min="1950"
        max="2025"
        help-text="Production year of the car"
      >
        <legend class="sr-only" slot="label">Production year</legend>
        <w-slider-thumb slot="from" name="from"></w-slider-thumb>
        <w-slider-thumb slot="to" name="to"></w-slider-thumb>
      </w-slider>
    `}},z={args:{locale:"nb"},render(){return i(Q||(Q=b([`
      <w-slider
        min="1950"
        max="2025"
        over
        under
        help-text="Production year of the car"
        data-testid="hidden-minmax-label"
      >
        <legend class="sr-only" slot="label">Production year</legend>
        <w-slider-thumb slot="from" name="from"></w-slider-thumb>
        <w-slider-thumb slot="to" name="to"></w-slider-thumb>
      </w-slider>
      <script>
        const hiddenMinMaxSlider = document.querySelector(
          'w-slider[data-testid="hidden-minmax-label"]',
        );
        hiddenMinMaxSlider.labelFormatter = () => "";
      <\/script>
    `])))}},q={args:{locale:"nb"},render({locale:o}){return i(Y||(Y=b([`
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
            formattedValue = formatter.format(numValue) + " m";
          } else {
            formattedValue = formatter.format(numValue / 1000) + " km";
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
    `])),o)}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render() {
    return html\`
      <w-slider label="Single" min="0" max="100">
        <w-slider-thumb name="value"></w-slider-thumb>
      </w-slider>
    \`;
  }
}`,...w.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render() {
    return html\`
      <w-slider label="Single disabled" min="0" max="100" disabled>
        <w-slider-thumb name="value"></w-slider-thumb>
      </w-slider>
    \`;
  }
}`,...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render() {
    return html\`
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
    \`;
  }
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    return html\`
      <form id="openended" style="margin-bottom: 16px" lang="nb">
        <w-slider
          label="Produksjonsår"
          min="1950"
          max="2025"
          data-testid="openended"
          open-ended
        >
          <w-slider-thumb
            slot="from"
            aria-label="Fra år"
            name="from-year"
          ></w-slider-thumb>
          <w-slider-thumb
            slot="to"
            aria-label="Til år"
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
            return 'Før 1950';
          }
          return '2025 +';
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
}`,...F.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'nb'
  },
  render() {
    return html\`
      <w-slider label="Single" min="0" max="100">
        <p slot="description">Try typing a value over 100</p>
        <w-slider-thumb></w-slider-thumb>
      </w-slider>
    \`;
  }
}`,...T.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    return html\`
      <form id="rangeerror" style="margin-bottom: 16px">
        <w-slider label="Production year" min="1950" max="2025" over under>
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
}`,...$.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'nb',
    error: "I'm an external error telling you something is wrong",
    invalid: true
  },
  render(args) {
    return html\`
      <w-slider
        label="Production year"
        min="1950"
        max="2025"
        over
        under
        error="\${args.error}"
        ?invalid="\${args.invalid}"
      >
        <w-slider-thumb slot="from" name="from"></w-slider-thumb>
        <w-slider-thumb slot="to" name="to"></w-slider-thumb>
      </w-slider>
    \`;
  }
}`,...D.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'nb'
  },
  render() {
    return html\`
      <w-slider
        label="Production year"
        min="1950"
        max="2025"
        over
        under
        help-text="Production year of the car"
      >
        <w-slider-thumb slot="from" name="from"></w-slider-thumb>
        <w-slider-thumb slot="to" name="to"></w-slider-thumb>
      </w-slider>
    \`;
  }
}`,...M.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'nb'
  },
  render() {
    return html\`
      <w-slider
        min="1950"
        max="2025"
        help-text="Production year of the car"
      >
        <legend class="sr-only" slot="label">Production year</legend>
        <w-slider-thumb slot="from" name="from"></w-slider-thumb>
        <w-slider-thumb slot="to" name="to"></w-slider-thumb>
      </w-slider>
    \`;
  }
}`,...V.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'nb'
  },
  render() {
    return html\`
      <w-slider
        min="1950"
        max="2025"
        over
        under
        help-text="Production year of the car"
        data-testid="hidden-minmax-label"
      >
        <legend class="sr-only" slot="label">Production year</legend>
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
}`,...z.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'nb'
  },
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
            formattedValue = formatter.format(numValue) + " m";
          } else {
            formattedValue = formatter.format(numValue / 1000) + " km";
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
}`,...q.parameters?.docs?.source}}};const xe=["Single","SingleDisabled","Range","SuffixSquareMeters","SuffixCurrency","SuffixKilometers","Marks","Step","OpenEnded","SingleError","RangeError","CustomError","Description","VisuallyHiddenLabel","HiddenMinimumMaximumLabels","VisuallyHiddenTextfield"],De=Object.freeze(Object.defineProperty({__proto__:null,CustomError:D,Description:M,HiddenMinimumMaximumLabels:z,Marks:k,OpenEnded:F,Range:x,RangeError:$,Single:w,SingleDisabled:v,SingleError:T,Step:E,SuffixCurrency:_,SuffixKilometers:S,SuffixSquareMeters:y,VisuallyHiddenLabel:V,VisuallyHiddenTextfield:q,__namedExportsOrder:xe,default:ve},Symbol.toStringTag,{value:"Module"}));export{k as M,F as O,x as R,De as S,w as a,y as b,_ as c,S as d,E as e,T as f,$ as g};
