import{a as N,i as F,p as K,r as W,E as m,x as a,n as s,k as c,b as q,g as G}from"./iframe-BQz87I7Q.js";import"./index-BJnLp1tU.js";import"./index-B71aFOxV.js";import"./index-CeRqrDbu.js";import{F as X}from"./FormControlMixin-DJnJZbro.js";import{_ as Q}from"./preload-helper-Ct5FWWRu.js";import{e as J}from"./query-NYTjQBeo.js";import{o as V}from"./if-defined-DLpkOU4L.js";const Y=JSON.parse('{"slider.error.overlap":["Maksimumværdien må ikke være mindre end minimumværdien"],"slider.error.required":["Dette felt er påkrævet"],"slider.error.out_of_bounds":["Værdien skal være mellem ",["min"]," og ",["max"]]}'),Z=JSON.parse('{"slider.error.overlap":["The maximum value cannot be less than the minimum"],"slider.error.required":["This field is required"],"slider.error.out_of_bounds":["Value must be between ",["min"]," and ",["max"]]}'),ee=JSON.parse('{"slider.error.overlap":["Maksimiarvo ei voi olla pienempi kuin minimiarvo"],"slider.error.required":["Tämä kenttä on pakollinen"],"slider.error.out_of_bounds":["Arvon on oltava välillä ",["min"]," - ",["max"]]}'),re=JSON.parse('{"slider.error.overlap":["Maksimumsverdien kan ikke være mindre enn minimumsverdien"],"slider.error.required":["Dette feltet er påkrevd"],"slider.error.out_of_bounds":["Verdien må være mellom ",["min"]," og ",["max"]]}'),te=JSON.parse('{"slider.error.overlap":["Maxvärdet kan inte vara mindre än minimivärdet"],"slider.error.required":["Detta fält är obligatoriskt"],"slider.error.out_of_bounds":["Värdet måste vara mellan ",["min"]," och ",["max"]]}'),ae=N`
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

    /* Math corner to calculate the fill of the slider and placement of markers. */

    /* The --min value can be non-zero, f. ex. choosing a year from 1950 to 2025. Normalize the values so we start at 0 and run to max - min. */
    --_value-range: calc(var(--max) - var(--min));

    /** Round up to the nearest --step, which defaults to 1 (https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/range#step) */
    --_from-in-range: round(
      up,
      max(calc(var(--from) - var(--min)), 0),
      var(--step, 1)
    );

    /* limit to maximum value in range so typing a value larger than max doesn't explode layouts */
    --_to-in-range: round(
      up,
      min(calc(var(--to) - var(--min)), var(--_value-range)),
      var(--step, 1)
    );

    /* Position the starting point of the fill in the case of a non-zero --from value in a range slider.
     * In other words, given a width of 100% how many percent should be left unfilled/blank
     * at the beginning of the range slider (dashes in this ASCII-range-slider: |---O******O|) */
    --_from-as-percent-of-max: calc(
      var(--_from-in-range) / var(--_value-range) * 100
    );
    --_blank-values-before: var(--_from-as-percent-of-max);

    /* Set the width of the fill as a percentage.
     * In other words, given a width of 100% how many percent should be left unfilled/blank
     * at the end of the slider (dashes in this ASCII-slider: |******O---|) */
    --_to-as-percent-of-max: calc(
      var(--_to-in-range) / var(--_value-range) * 100
    );
    --_filled-values: calc(
      var(--_to-as-percent-of-max) - var(--_blank-values-before)
    );

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

    margin-left: calc(
      calc(var(--_blank-values-before) * 1%) - var(
          --active-range-inline-start-padding,
          0px
        )
    );
    width: calc(
      calc(var(--_filled-values) * 1%) +
        var(--active-range-inline-end-padding, 0px)
    );
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
`;var ie=Object.defineProperty,u=(o,e,t,i)=>{for(var r=void 0,h=o.length-1,p;h>=0;h--)(p=o[h])&&(r=p(e,t,r)||r);return r&&ie(e,t,r),r};class d extends X(F){constructor(){super(),this.disabled=!1,this.allowValuesOutsideRange=!1,this.error="",this.helpText="",this.invalid=!1,this.required=!1,this.suffix="",this._invalidMessage="",this._hasInternalError=!1,K(Z,re,ee,Y,te)}static{this.shadowRootOptions={...F.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[W,ae]}#e(){const e=this.querySelectorAll("w-slider-thumb");let t=!1;for(const r of e.values())r.min=this.edgeMin,r.max=this.edgeMax,r.step=this.step,r.suffix=this.suffix,r.required=this.required,r.formatter=this.formatter,r.allowValuesOutsideRange=this.allowValuesOutsideRange,r.ariaLabel||(r.slot||(r.ariaLabel=this.label),r.slot==="from"&&(r.ariaLabel=`${this.label} min`),r.slot==="to"&&(r.ariaLabel=`${this.label} max`)),(r.slot==="from"||r.slot==="to")&&(t=!0),r.disabled=this.disabled,r.invalid=this.invalid||this._hasInternalError,this.#i(r);const i=this.shadowRoot.querySelector("fieldset");t?(i.style.setProperty("--active-range-inline-start-padding","var(--w-slider-thumb-size)"),i.style.setProperty("--active-range-inline-end-padding","var(--w-slider-thumb-size)")):i.style.setProperty("--active-range-border-radius","4px")}get edgeMin(){return this.allowValuesOutsideRange?(Number(this.min)-1).toString():this.min}get edgeMax(){return this.allowValuesOutsideRange?(Number(this.max)+1).toString():this.max}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.step&&this.style.setProperty("--step",String(this.step)),this.style.setProperty("--min",this.edgeMin),this.style.setProperty("--max",this.max),this.markers&&this.style.setProperty("--markers",String(this.markers)),this.#e()}updated(e){(e.has("disabled")||e.has("invalid")||e.has("required")||e.has("min")||e.has("step")||e.has("max")||e.has("suffix")||e.has("formatter")||e.has("_invalidMessage")||e.has("_hasInternalError"))&&this.#e()}#t(e){const t=e.target;this.#i(t),t.slot&&this.#s()}#s(){let e,t;const i=this.querySelectorAll("w-slider-thumb");for(const r of i.values())r.slot==="from"&&(e=r),r.slot==="to"&&(t=r);!e||!t||!e.invalid&&t.invalid}#r(e){e.stopPropagation(),this._hasInternalError=!!e.detail.invalid,this._invalidMessage=e.detail.invalid}#a(e,t){return(t.value===void 0||t.value===null)&&(t.value=this.allowValuesOutsideRange?"":e),t.value===""?e:t.value}#i(e){const t=e.slot;t||this.style.setProperty("--from","0"),t==="from"&&this.style.setProperty("--from",this.#a(this.edgeMin,e)),(!t||t==="to")&&this.style.setProperty("--to",this.#a(this.edgeMax,e))}get componentHasError(){return this.invalid||this._hasInternalError}get errorText(){return this.componentHasError?this.error||this._invalidMessage:""}render(){return a`
      <fieldset
        id="fieldset"
        class="w-slider"
        @input="${this.#t}"
        @slidervalidity="${this.#r}"
        aria-invalid="${this.errorText?"true":m}"
      >
        ${this.label?a`<legend class="w-slider__label">
              <slot id="label" name="label">${this.label}</slot>
            </legend>`:m}
        <slot class="w-slider__description" name="description"></slot>
        ${this.markers?a`<div class="w-slider__markers"></div>`:m}
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
        ${this.errorText?a`<p class="w-slider__error" aria-describes="fieldset">
              ${this.errorText}
            </p>`:this.helpText?a`<p class="w-slider__help-text" aria-describes="fieldset">
                ${this.helpText}
              </p>`:m}
      </fieldset>
    `}}u([s({reflect:!0})],d.prototype,"label");u([s({type:Boolean,reflect:!0})],d.prototype,"disabled");u([s({type:Boolean,attribute:"allow-values-outside-range"})],d.prototype,"allowValuesOutsideRange");u([s({type:String,reflect:!0})],d.prototype,"error");u([s({type:String,reflect:!0,attribute:"help-text"})],d.prototype,"helpText");u([s({type:Boolean,reflect:!0})],d.prototype,"invalid");u([s({type:Boolean,reflect:!0})],d.prototype,"required");u([s({reflect:!0})],d.prototype,"min");u([s({reflect:!0})],d.prototype,"max");u([s({type:Number,reflect:!0})],d.prototype,"markers");u([s({type:Number,reflect:!0})],d.prototype,"step");u([s({reflect:!0})],d.prototype,"suffix");u([s({attribute:!1})],d.prototype,"formatter");u([c()],d.prototype,"_invalidMessage");u([c()],d.prototype,"_hasInternalError");customElements.get("w-slider")||customElements.define("w-slider",d);const se=N`
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
    background: var(--w-s-color-background-primary);
    border-radius: 50%;
    height: var(--w-slider-thumb-size);
    margin-top: calc(
      -1 * calc(var(--w-slider-thumb-offset) - calc(
              var(--w-slider-track-height) / 2
            ))
    );
    pointer-events: initial;
    width: var(--w-slider-thumb-size);
    z-index: 1;
  }

  .w-slider-thumb__range::-moz-range-thumb {
    anchor-name: --thumb;

    appearance: none;
    cursor: pointer;
    background: var(--w-s-color-background-primary);
    border-radius: 50%;
    border-color: transparent;
    height: var(--w-slider-thumb-size);
    margin-top: calc(
      -1 * calc(var(--w-slider-thumb-offset) - calc(
              var(--w-slider-track-height) / 2
            ))
    );
    pointer-events: initial;
    width: var(--w-slider-thumb-size);
    z-index: 1;

    box-shadow: none;
  }

  .w-slider-thumb__range:active::-webkit-slider-thumb,
  .w-slider-thumb__range:hover::-webkit-slider-thumb {
    background: var(--w-s-color-background-primary-hover);
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

  :host([name="from"]) .w-slider-thumb__textfield {
    grid-column: 1 / 2; /* Range sliders should leave the gap empty. */
  }

  :host([name="from"]) .w-slider-thumb__range {
    margin-left: var(--w-slider-thumb-size);
  }

  :host([name="to"]) .w-slider-thumb__range {
    margin-right: var(--w-slider-thumb-size);
  }

  :host([name="from"]) .w-slider-thumb__range::-webkit-slider-thumb,
  :host([name="from"]) .w-slider-thumb__tooltip-target {
    transform: translateX(calc(-1 * var(--w-slider-thumb-size) - 1px));
  }

  :host([name="from"]) .w-slider-thumb__range::-moz-range-thumb {
    transform: translateX(calc(-1 * var(--w-slider-thumb-size) - 1px));
  }

  :host([name="to"]) .w-slider-thumb__textfield {
    grid-row: 3 / 4;
    grid-column: 3 / 4;
  }

  :host([name="to"]) .w-slider-thumb__tooltip-target,
  :host([name="to"]) .w-slider-thumb__range::-webkit-slider-thumb {
    transform: translateX(calc(var(--w-slider-thumb-size) - 1px));
  }

  :host([name="to"]) .w-slider-thumb__range::-moz-range-thumb {
    transform: translateX(calc(var(--w-slider-thumb-size) - 1px));
  }
`,oe=N`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.hidden{display:none}.absolute{position:absolute}.relative{position:relative}.static{position:static}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}`;var ne=Object.defineProperty,l=(o,e,t,i)=>{for(var r=void 0,h=o.length-1,p;h>=0;h--)(p=o[h])&&(r=p(e,t,r)||r);return r&&ne(e,t,r),r};class n extends X(F){constructor(){super(...arguments),this.invalid=!1,this.allowValuesOutsideRange=!1,this.suffix="",this._showTooltip=!1,this._inputHasFocus=!1,this.anchorPositioningStyleElement=null}static{this.shadowRootOptions={...F.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[W,oe,se]}#e(){this._showTooltip=!0,this.shadowRoot.querySelector("w-attention").handleDone()}#t(){this._showTooltip=!1}#s(){this.range&&(this.value===""?this.range.value=this.boundaryValue:this.value&&(this.range.value=this.value))}#r(e){this.dispatchEvent(new CustomEvent("slidervalidity",{bubbles:!0,detail:{invalid:e,slot:this.slot}}))}async#a(e,t){let i=Number.parseInt(e);if(this.allowValuesOutsideRange&&!t&&this.step&&!(this.slot==="to"&&i>=Number(this.max)-1||this.slot==="from"&&i<=Number(this.min)+1)){const g=1/this.step;i=Math.round(i*g)/g,e=i.toString()}const r=Number.parseInt(this.max),h=Number.parseInt(this.min);if(!this.allowValuesOutsideRange&&(i>r||i<h))return this.#r(q.t({id:"slider.error.out_of_bounds",message:"Value must be between {min} and {max}",values:{min:`${this.min} ${this.suffix}`.trim(),max:`${this.max} ${this.suffix}`.trim()}})),{shouldCancel:!0};if(e==="")return this.required&&this.#r(q.t({id:"slider.error.required",message:"This field is required"})),{shouldCancel:!0};this.value=e;const p=e===this.max||e===this.min;let O=!1;if(this.slot){const R=getComputedStyle(this),g=R.getPropertyValue("--to"),I=R.getPropertyValue("--from"),P=q.t({id:"slider.error.overlap",message:"The maximum value cannot be less than the minimum"});if(this.slot==="from"){const b=Math.min(Number.parseInt(g),this.allowValuesOutsideRange?r-1:r);i>b&&(O=!0,this.allowValuesOutsideRange&&p?this.value=String(b):this.value=g,t&&(this.#r(P),await this.updateComplete,this.textfield.value=e))}else{const b=Math.max(Number.parseInt(I),this.allowValuesOutsideRange?h+1:h);i<b&&(O=!0,this.allowValuesOutsideRange&&p?this.value=String(b):this.value=I,t&&(this.#r(P),await this.updateComplete,this.textfield.value=e))}}return O?{shouldCancel:!0}:(this.#r(""),this.range.value=Math.min(Math.max(Number(e),Number(this.min)),Number(this.max)).toString(),this.value=this.allowValuesOutsideRange&&!t&&p?"":e,this.shadowRoot.querySelector("w-attention").handleDone(),{shouldCancel:!1})}async#i(e){const t=e.currentTarget.tagName==="W-TEXTFIELD";if(e instanceof CustomEvent)return;const i=e.currentTarget.value;return(await this.#a(i,t)).shouldCancel?(e.preventDefault(),!1):!0}async#o(e){if(e.key!=="ArrowLeft"&&e.key!=="ArrowRight")return;const t=Number(this.range.value),i=this.step||1;let r;e.key==="ArrowLeft"?r=t-i:r=t+i,r=Math.min(Math.max(r,Number(this.min)),Number(this.max)),(await this.#a(r.toString(),!1)).shouldCancel&&e.preventDefault()}async connectedCallback(){if(super.connectedCallback(),"anchorName"in document.documentElement.style)await this.updateComplete;else{const e=import.meta.url.substring(0,import.meta.url.lastIndexOf("/"));try{const[{default:t}]=await Promise.all([Q(()=>import(`${e}/oddbird-css-anchor-positioning.js`),[],import.meta.url),this.updateComplete]);this.anchorPositioningStyleElement||(this.anchorPositioningStyleElement=document.createElement("style"),this.shadowRoot.prepend(this.anchorPositioningStyleElement)),this.anchorPositioningStyleElement.textContent=`
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
      `,await t({roots:[this.shadowRoot],elements:[this.anchorPositioningStyleElement]})}catch(t){console.error(new Error("Error registering the CSS anchor positioning polyfill. The UI will look broken.",{cause:t}))}}this.#s()}#n(e){e instanceof CustomEvent&&e.type==="focus"&&(this._inputHasFocus=!0)}#l(e){e instanceof CustomEvent&&e.type==="blur"&&(this._inputHasFocus=!1)}get boundaryValue(){return this.slot==="from"?this.min:this.max}get textFieldDisplayValue(){return this._inputHasFocus?this.value!==""?this.value:this.range?.value?Math.min(Math.max(Number(this.range.value),Number(this.min)+1),Number(this.max)-1).toString():"":this.value}get tooltipDisplayValue(){return this.formatter?this.formatter(this.value,this.slot):this.value===""?this.range?.value??this.boundaryValue:this.value||0}updated(e){e.has("value")&&(this.setValue(this.value),this.#s())}render(){return a`
      <div class="w-slider-thumb">
        <label for="range">${this.label}</label>
        ${"anchorName"in document.documentElement.style?m:a`<div class="polyfill-range">
              <div class="polyfill-active-range"></div>
            </div>`}
        <input
          id="range"
          aria-label="${this.ariaLabel}"
          aria-describedby="${V(this.ariaDescription?"aria-description":void 0)}"
          class="w-slider-thumb__range"
          type="range"
          .value="${this.value}"
          aria-valuetext="${this.tooltipDisplayValue}"
          min="${this.min}"
          max="${this.max}"
          step="${V(!this.allowValuesOutsideRange&&this.step?this.step:void 0)}"
          ?disabled="${this.disabled}"
          @mousedown="${this.#e}"
          @mouseup="${this.#t}"
          @touchstart="${this.#e}"
          @touchend="${this.#t}"
          @focus="${this.#e}"
          @blur="${this.#t}"
          @input="${this.#i}"
          @keydown="${this.allowValuesOutsideRange?this.#o:m}"
        />

        ${this.slot==="from"?a`<span class="w-slider-thumb__from-marker"
              >${this.formatter?this.formatter(this.allowValuesOutsideRange?"":this.min,"from"):this.min}
              ${this.suffix}</span
            >`:m}
        ${this.slot==="to"?a`<span class="w-slider-thumb__to-marker"
              >${this.formatter?this.formatter(this.allowValuesOutsideRange?"":this.max,"to"):this.max}
              ${this.suffix}</span
            >`:m}

        <w-textfield
          aria-label="${this.ariaLabel}"
          aria-description="${V(this.ariaDescription)}"
          class="w-slider-thumb__textfield"
          type="number"
          .formatter=${this.formatter?e=>this.formatter(e,this.slot):m}
          .value="${this.textFieldDisplayValue}"
          min="${this.allowValuesOutsideRange?m:this.min}"
          max="${this.allowValuesOutsideRange?m:this.max}"
          step="${V(this.step)}"
          ?invalid="${!!this.invalid}"
          @input="${this.#i}"
          @focus="${this.#n}"
          @blur="${this.#l}"
        >
          ${this.suffix?a`<w-affix slot="suffix" label="${this.suffix}"></w-affix>`:m}
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
            ${this.tooltipDisplayValue}${this.suffix?a`&nbsp;${this.suffix}`:m}
          </span>
        </w-attention>

        <!-- aria-description is still not recommended for general use, so make a visually hidden element and refer to it with aria-describedby -->
        <span class="sr-only" id="aria-description"
          >${this.ariaDescription}</span
        >
      </div>
    `}}l([s({attribute:"aria-label",reflect:!0})],n.prototype,"ariaLabel");l([s({attribute:"aria-description",reflect:!0})],n.prototype,"ariaDescription");l([s({reflect:!0})],n.prototype,"label");l([s({reflect:!0})],n.prototype,"name");l([s({reflect:!0})],n.prototype,"value");l([s({type:Boolean,reflect:!0})],n.prototype,"disabled");l([s({type:Boolean,reflect:!0})],n.prototype,"invalid");l([s({attribute:!1,reflect:!1})],n.prototype,"allowValuesOutsideRange");l([c()],n.prototype,"markers");l([c()],n.prototype,"required");l([c()],n.prototype,"step");l([c()],n.prototype,"min");l([c()],n.prototype,"max");l([c()],n.prototype,"suffix");l([c()],n.prototype,"formatter");l([J('input[type="range"]')],n.prototype,"range");l([J("w-textfield")],n.prototype,"textfield");l([c()],n.prototype,"_showTooltip");l([c()],n.prototype,"_inputHasFocus");customElements.get("w-slider-thumb")||customElements.define("w-slider-thumb",n);var M=Object.freeze,le=Object.defineProperty,f=(o,e)=>M(le(o,"raw",{value:M(o.slice())})),B,L,j,A,H,U;const{events:de,args:ue,argTypes:me}=G("w-slider"),he={title:"Forms/Slider and Range Slider",args:ue,argTypes:me,parameters:{actions:{handles:de}}},w={render(){return a`
      <w-slider label="Single" min="0" max="100">
        <w-slider-thumb name="value"></w-slider-thumb>
      </w-slider>
    `}},v={render(){return a`
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
    `}},x={args:{locale:"nb",suffix:"m²"},render({locale:o,suffix:e}){return a(B||(B=f([`
      <w-slider
        label="Apartment size"
        min="0"
        max="250"
        suffix="`,`"
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
      <script type="module">
        const sqmSlider = document.querySelector('w-slider[data-testid="sqm"]');
        sqmSlider.formatter = window.getNumberFormatter("`,`").format;
      <\/script>
    `])),e,o)}},y={args:{locale:"nb",suffix:"kr"},render({locale:o,suffix:e}){return a(L||(L=f([`
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
        const currencySlider = document.querySelector(
          'w-slider[data-testid="currency"]'
        );
        currencySlider.formatter = window.getNumberFormatter(
          "`,`"
        ).format;
      <\/script>
    `])),e,o)}},_={args:{locale:"nb",suffix:"km"},render({locale:o,suffix:e}){return a(j||(j=f([`
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
        const kmSlider = document.querySelector('w-slider[data-testid="km"]');
        kmSlider.formatter = window.getNumberFormatter("`,`").format;
      <\/script>
    `])),e,o)}},k={args:{locale:"nb",step:"5",markers:"5"},render({markers:o,step:e}){return a`
      <w-slider
        label="Single"
        min="0"
        max="100"
        step="${e}"
        markers="${o}"
      >
        <w-slider-thumb name="value"></w-slider-thumb>
      </w-slider>
    `}},S={args:{step:5},render({step:o}){return a`
      <w-slider label="Single" step="${o}" min="0" max="100">
        <w-slider-thumb name="value"></w-slider-thumb>
      </w-slider>
    `}},$={args:{},render(){return a(A||(A=f([`
      <form id="overunder" style="margin-bottom: 16px" lang="nb">
        <w-slider
          label="Produksjonsår"
          min="1950"
          max="2025"
          data-testid="overunder"
          allow-values-outside-range="true"
        >
          <w-slider-thumb
            slot="from"
            aria-label="Fra år"
            aria-description="1950 inkluderer kjøretøy produsert fram til 1950"
            name="from"
          ></w-slider-thumb>
          <w-slider-thumb
            slot="to"
            aria-label="Til år"
            aria-description="2025 inkluderer kjøretøy produsert etter 2025"
            name="to"
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
          <dd id="overunder-from"></dd>
          <dt>To:</dt>
          <dd id="overunder-to"></dd>
        </dl>
      </output>
      <script>
        /** Here is how you can show labels to indicate min and max values are "up to and including" and "this value and above". */
        const overunderSlider = document.querySelector(
          'w-slider[data-testid="overunder"]'
        );
        overunderSlider.formatter = function (value, type) {
          if (value === "" && type === "from") {
            return "Før 1950";
          }
          if (value === "" && type === "to") {
            return "Etter 2025";
          }
          return value;
        };

        /** Code to show the form values in output */
        document.forms["overunder"].addEventListener("input", function () {
          const formData = new FormData(this);
          const from = formData.get("from");
          const to = formData.get("to");
          document.getElementById("overunder-from").innerText = from;
          document.getElementById("overunder-to").innerText = to;
        });
      <\/script>
    `])))}},T={args:{locale:"nb"},render(){return a`
      <w-slider label="Single" min="0" max="100">
        <p slot="description">Try typing a value over 100</p>
        <w-slider-thumb></w-slider-thumb>
      </w-slider>
    `}},E={args:{},render(){return a(H||(H=f([`
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
    `])))}},D={args:{},render(){return a(U||(U=f([`
      <form id="overunder" style="margin-bottom: 16px" lang="nb">
        <w-slider
          label="Pris"
          suffix="kr"
          min="0"
          max="700000"
          data-testid="overunder"
          allow-values-outside-range="true"
          step="10000"
        >
          <w-slider-thumb
            slot="from"
            aria-label="Fra år"
            aria-description="1950 inkluderer kjøretøy produsert fram til 1950"
            name="from"
            value="0"
          ></w-slider-thumb>
          <w-slider-thumb
            slot="to"
            aria-label="Til år"
            aria-description="2025 inkluderer kjøretøy produsert etter 2025"
            name="to"
            value="150000"
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
          <dd id="overunder-from"></dd>
          <dt>To:</dt>
          <dd id="overunder-to"></dd>
        </dl>
      </output>
      <script>
        /** Here is how you can show labels to indicate min and max values are "up to and including" and "this value and above". */
        const overunderSlider = document.querySelector(
          'w-slider[data-testid="overunder"]'
        );
        overunderSlider.formatter = function (value, type) {
          if (value === "" && type === "from") {
            return "0";
          }
          if (value === "" && type === "to") {
            return "Over 700 000";
          }
          return value;
        };

        /** Code to show the form values in output */
        document.forms["overunder"].addEventListener("input", function () {
          const formData = new FormData(this);
          const from = formData.get("from");
          const to = formData.get("to");
          document.getElementById("overunder-from").innerText = from;
          document.getElementById("overunder-to").innerText = to;
        });
      <\/script>
    `])))}},z={args:{locale:"nb"},render(){return a`
      <w-slider
        label="Production year"
        min="1950"
        max="2025"
        over
        under
        error="I'm an external error telling you something is wrong"
        invalid
      >
        <w-slider-thumb slot="from" name="from"></w-slider-thumb>
        <w-slider-thumb slot="to" name="to"></w-slider-thumb>
      </w-slider>
    `}},C={args:{locale:"nb"},render(){return a`
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
    `}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
      <script type="module">
        const sqmSlider = document.querySelector('w-slider[data-testid="sqm"]');
        sqmSlider.formatter = window.getNumberFormatter("\${locale}").format;
      <\/script>
    \`;
  }
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
        const currencySlider = document.querySelector(
          'w-slider[data-testid="currency"]'
        );
        currencySlider.formatter = window.getNumberFormatter(
          "\${locale}"
        ).format;
      <\/script>
    \`;
  }
}`,...y.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
        const kmSlider = document.querySelector('w-slider[data-testid="km"]');
        kmSlider.formatter = window.getNumberFormatter("\${locale}").format;
      <\/script>
    \`;
  }
}`,..._.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    return html\`
      <form id="overunder" style="margin-bottom: 16px" lang="nb">
        <w-slider
          label="Produksjonsår"
          min="1950"
          max="2025"
          data-testid="overunder"
          allow-values-outside-range="true"
        >
          <w-slider-thumb
            slot="from"
            aria-label="Fra år"
            aria-description="1950 inkluderer kjøretøy produsert fram til 1950"
            name="from"
          ></w-slider-thumb>
          <w-slider-thumb
            slot="to"
            aria-label="Til år"
            aria-description="2025 inkluderer kjøretøy produsert etter 2025"
            name="to"
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
          <dd id="overunder-from"></dd>
          <dt>To:</dt>
          <dd id="overunder-to"></dd>
        </dl>
      </output>
      <script>
        /** Here is how you can show labels to indicate min and max values are "up to and including" and "this value and above". */
        const overunderSlider = document.querySelector(
          'w-slider[data-testid="overunder"]'
        );
        overunderSlider.formatter = function (value, type) {
          if (value === "" && type === "from") {
            return "Før 1950";
          }
          if (value === "" && type === "to") {
            return "Etter 2025";
          }
          return value;
        };

        /** Code to show the form values in output */
        document.forms["overunder"].addEventListener("input", function () {
          const formData = new FormData(this);
          const from = formData.get("from");
          const to = formData.get("to");
          document.getElementById("overunder-from").innerText = from;
          document.getElementById("overunder-to").innerText = to;
        });
      <\/script>
    \`;
  }
}`,...$.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    return html\`
      <form id="overunder" style="margin-bottom: 16px" lang="nb">
        <w-slider
          label="Pris"
          suffix="kr"
          min="0"
          max="700000"
          data-testid="overunder"
          allow-values-outside-range="true"
          step="10000"
        >
          <w-slider-thumb
            slot="from"
            aria-label="Fra år"
            aria-description="1950 inkluderer kjøretøy produsert fram til 1950"
            name="from"
            value="0"
          ></w-slider-thumb>
          <w-slider-thumb
            slot="to"
            aria-label="Til år"
            aria-description="2025 inkluderer kjøretøy produsert etter 2025"
            name="to"
            value="150000"
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
          <dd id="overunder-from"></dd>
          <dt>To:</dt>
          <dd id="overunder-to"></dd>
        </dl>
      </output>
      <script>
        /** Here is how you can show labels to indicate min and max values are "up to and including" and "this value and above". */
        const overunderSlider = document.querySelector(
          'w-slider[data-testid="overunder"]'
        );
        overunderSlider.formatter = function (value, type) {
          if (value === "" && type === "from") {
            return "0";
          }
          if (value === "" && type === "to") {
            return "Over 700 000";
          }
          return value;
        };

        /** Code to show the form values in output */
        document.forms["overunder"].addEventListener("input", function () {
          const formData = new FormData(this);
          const from = formData.get("from");
          const to = formData.get("to");
          document.getElementById("overunder-from").innerText = from;
          document.getElementById("overunder-to").innerText = to;
        });
      <\/script>
    \`;
  }
}`,...D.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
        error="I'm an external error telling you something is wrong"
        invalid
      >
        <w-slider-thumb slot="from" name="from"></w-slider-thumb>
        <w-slider-thumb slot="to" name="to"></w-slider-thumb>
      </w-slider>
    \`;
  }
}`,...z.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};const ce=["Single","Range","SuffixSquareMeters","SuffixCurrency","SuffixKilometers","Marks","Step","OverUnder","SingleError","RangeError","TestCase","CustomError","Description"],_e=Object.freeze(Object.defineProperty({__proto__:null,CustomError:z,Description:C,Marks:k,OverUnder:$,Range:v,RangeError:E,Single:w,SingleError:T,Step:S,SuffixCurrency:y,SuffixKilometers:_,SuffixSquareMeters:x,TestCase:D,__namedExportsOrder:ce,default:he},Symbol.toStringTag,{value:"Module"}));export{k as M,$ as O,v as R,_e as S,w as a,x as b,y as c,_ as d,S as e,T as f,E as g};
