import{a as q,i as z,r as j,E as T,x as l,n,k as m,g as V}from"./iframe-CHAp8gQH.js";import"./index-D5z0CBGz.js";import"./index-BHDra87e.js";import{F as L}from"./FormControlMixin-DJnJZbro.js";import{_ as W}from"./preload-helper-Ct5FWWRu.js";import{e as A}from"./query-NYTjQBeo.js";import{e as B}from"./class-map-D0MAqLGG.js";import{o as F}from"./if-defined-Bj_RhKSW.js";const M=q`
  .w-slider {
    position: relative;
    border: none;
    padding: 0;
    margin: 0;
    display: grid;
    width: 100%;
    grid-template-areas:
      'label'
      'description'
      'slider';
    grid-template-columns: 1fr;

    --w-slider-track-background: var(--w-s-color-background-disabled-subtle);
    --w-slider-track-active-background: var(--w-s-color-background-primary);
    --w-slider-track-height: 4px;
    --w-slider-track-active-height: 6px;
    --w-slider-thumb-background: var(--w-s-color-background-primary);
    --w-slider-thumb-background-hover: var(--w-s-color-background-primary-hover);
    --w-slider-thumb-size: 28px;
    --w-slider-thumb-offset: calc(var(--w-slider-thumb-size) / 2);
    --w-slider-marker-color: var(--w-s-color-border);

    /* Math corner to calculate the fill of the slider and placement of markers. */

    /* The --min value can be non-zero, f. ex. choosing a year from 1950 to 2025. Normalize the values so we start at 0 and run to max - min. */
    --_value-range: calc(var(--max) - var(--min));
    --_from-in-range: max(calc(var(--from) - var(--min)), 0);

    /* limit to maximum value in range so typing a value larger than max doesn't explode layouts */
    --_to-in-range: min(calc(var(--to) - var(--min)), var(--_value-range));

    /* Position the starting point of the fill in the case of a non-zero --from value in a range slider.
     * In other words, given a width of 100% how many percent should be left unfilled/blank
     * at the beginning of the range slider (dashes in this ASCII-range-slider: |---O******O|) */
    --_from-as-percent-of-max: calc(var(--_from-in-range) / var(--_value-range) * 100);
    --_blank-values-before: var(--_from-as-percent-of-max);

    /* Set the width of the fill as a percentage.
     * In other words, given a width of 100% how many percent should be left unfilled/blank
     * at the end of the slider (dashes in this ASCII-slider: |******O---|) */
    --_to-as-percent-of-max: calc(var(--_to-in-range) / var(--_value-range) * 100);
    --_filled-values: calc(var(--_to-as-percent-of-max) - var(--_blank-values-before));

    /* Vertical position of range and markers */
    --_range-top: calc(
      var(--w-slider-thumb-size) / 2 + calc(var(--w-slider-track-active-height) - calc(var(--w-slider-track-height) / 2) + 1px)
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

  .w-slider__active-range {
    align-self: center;
    background: var(--w-slider-track-background);
    border-radius: 4px;
    position: absolute;
    top: var(--_range-top);
    left: 0;
    right: 0;
    grid-area: slider;
  }

  .w-slider__markers {
    --_marker-height: 7px;
    --_marker-width: 1px;

    align-self: center;

    /* Creates a linear gradient with --_marker-width wide markers
       followed by enough transparent that we can repeat the gradient
       along the X axis and have markers visible where we want them. */
    background: linear-gradient(to right, var(--w-slider-marker-color) var(--_marker-width), rgba(0, 0, 0, 0) 1px) repeat-x;
    --_step-width-as-percent: calc(var(--markers) / var(--_value-range) * 100);
    background-size: calc(var(--_step-width-as-percent) * 1% - 0.1%) var(--_marker-height);

    background-position: bottom 0 left 8px right 8px;
    position: absolute;
    top: calc(var(--_range-top) + 2px);
    left: 1px;
    right: 1px;
    grid-area: slider;
    height: var(--_marker-height);
  }

  .w-slider__active-range::before {
    background: var(--w-slider-track-active-background);
    border-radius: 4px;
    content: '';
    display: block;
    height: var(--w-slider-track-active-height);

    margin-left: calc(var(--_blank-values-before) * 1%);
    width: calc(var(--_filled-values) * 1%);
  }

  slot::slotted(w-slider-thumb) {
    position: static;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    grid-area: slider;
  }
`;var U=Object.defineProperty,c=(a,e,r,o)=>{for(var t=void 0,d=a.length-1,h;d>=0;d--)(h=a[d])&&(t=h(e,r,t)||t);return t&&U(e,r,t),t};class u extends L(z){constructor(){super(...arguments),this.disabled=!1,this.invalid=!1,this.required=!1}static{this.shadowRootOptions={...z.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[j,M]}#r;#e(){const e=this.querySelectorAll("w-slider-thumb");for(const r of e.values())r.min=this.min,r.max=this.max,r.step=this.step,r.suffix=this.suffix,r.required=this.required,r.formatter=this.formatter,r.ariaLabel||(r.slot||(r.ariaLabel=this.label),r.slot==="from"&&(r.ariaLabel=`${this.label} min`),r.slot==="to"&&(r.ariaLabel=`${this.label} max`)),r.forceDisabled=this.disabled,r.forceInvalid=this.invalid,this.#a(r)}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.style.setProperty("--min",this.min),this.style.setProperty("--max",this.max),this.markers&&this.style.setProperty("--markers",String(this.markers));const e=getComputedStyle(this.shadowRoot.querySelector(".w-slider"));this.#r=Number.parseFloat(e.getPropertyValue("--w-slider-thumb-size").replace("px","")),this.#e()}updated(e){(e.has("disabled")||e.has("invalid")||e.has("required")||e.has("min")||e.has("step")||e.has("max")||e.has("suffix")||e.has("formatter"))&&this.#e()}#t(e){const r=e.target;this.#a(r)}#i(e){e.stopPropagation(),this.invalid=e.detail.invalid}#a(e){const r=e.slot;if(r){const o=this.#s(),t=this.#r,d=t-o;o<=t&&this.style.setProperty("--thumb-offset",String(d))}if(r||this.style.setProperty("--from","0"),r==="from"){const o=e.value??=this.min;this.style.setProperty("--from",o)}if(!r||r==="to"){const o=e.value??=this.max;this.style.setProperty("--to",o)}}#s(){const e=window.getComputedStyle(this.shadowRoot.querySelector(".w-slider__active-range"),"::before").width;return Number.parseFloat(e.replace("px",""))}render(){return l`
      <fieldset id="fieldset" class="w-slider" @input="${this.#t}" @slidervalidity="${this.#i}">
        <legend class="w-slider__label">
          <slot id="label" name="label">${this.label}</slot>
        </legend>
        <slot class="w-slider__description" name="description"></slot>
        ${this.markers?l`<div class="w-slider__markers"></div>`:T}
        <div class="w-slider__active-range"></div>
        <slot class="w-slider__slider" @slotchange=${this.#e}></slot>
        <slot class="w-slider__slider" name="from" @slotchange=${this.#e}></slot>
        <slot class="w-slider__slider" name="to" @slotchange=${this.#e}></slot>
      </fieldset>
    `}}c([n()],u.prototype,"label");c([n({type:Boolean,reflect:!0})],u.prototype,"disabled");c([n({type:Boolean,reflect:!0})],u.prototype,"invalid");c([n({type:Boolean,reflect:!0})],u.prototype,"required");c([n({reflect:!0})],u.prototype,"min");c([n({reflect:!0})],u.prototype,"max");c([n({type:Number})],u.prototype,"markers");c([n({type:Number})],u.prototype,"step");c([n()],u.prototype,"suffix");c([n({attribute:!1})],u.prototype,"formatter");customElements.get("w-slider")||customElements.define("w-slider",u);const H=q`
  .w-slider-thumb {
    position: relative;
    display: grid;
    pointer-events: none; /* For range inputs we position two of these on top of each other. Let clicks go through the top one. */
    grid-template-areas:
      'slider slider slider'
      'frommarker . tomarker'
      'fromtextfield . totextfield';
    grid-template-columns: 1fr 24px 1fr;
  }

  .w-slider-thumb__range {
    appearance: none;
    background-color: transparent;
    grid-area: slider;
    height: 44px; /* touch target */
    pointer-events: none; /* let clicks pass through for range slider where we place two inputs over each other */
  }

  .w-slider-thumb__range::-webkit-slider-runnable-track {
    box-shadow: none;
    color: var(--w-s-color-text);
    height: var(--w-slider-track-height);
  }

  .w-slider-thumb__range:hover::-webkit-slider-thumb {
    background: var(--w-s-color-background-primary-hover);
  }

  .w-slider-thumb__range:hover::-moz-range-thumb {
    background: var(--w-s-color-background-primary-hover);
  }

  /*
    Use anchor positioning to place the tooltip target in relation to the slider thumb.
    We use a polyfill to bring support to older Safari, Firefox at time of writing.
   */
  .w-slider-thumb__range::-webkit-slider-thumb {
    anchor-name: --thumb;

    appearance: none;
    background: var(--w-s-color-background-primary);
    border-radius: 50%;
    height: var(--w-slider-thumb-size);
    margin-top: calc(-1 * calc(var(--w-slider-thumb-offset) - calc(var(--w-slider-track-height) / 2)));
    pointer-events: auto;
    width: var(--w-slider-thumb-size);
    z-index: 1;
  }

  .w-slider-thumb__range::-moz-range-thumb {
    anchor-name: --thumb;

    appearance: none;
    background: var(--w-s-color-background-primary);
    border-radius: 50%;
    border-color: transparent;
    height: var(--w-slider-thumb-size);
    margin-top: calc(-1 * calc(var(--w-slider-thumb-offset) - calc(var(--w-slider-track-height) / 2)));
    pointer-events: initial;
    width: var(--w-slider-thumb-size);
    z-index: 1;
  }

  .w-slider-thumb__tooltip {
    display: none;
    position: absolute;

    background-color: var(--w-s-color-background-inverted);
    color: var(--w-s-color-text-inverted-static);
    border-color: var(--w-s-color-background-inverted);

    padding: 4px 8px;
    border-radius: 4px;
    font-size: 12px;
    white-space: nowrap;
    z-index: 1;

    position-anchor: --thumb;

    bottom: calc(anchor(top) + 5px);
    justify-self: anchor-center;
  }

  .w-slider-thumb__tooltip--visible {
    display: block;
  }

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
    margin-top: 10px;
    pointer-events: auto;
    grid-row: 3 / 4;
    grid-column: 1 / 3; /* Single sliders should have the text field use the fromtextfield _and_ gap portion of the CSS grid. */
  }

  :host([name='from']) .w-slider-thumb__textfield {
    grid-column: 1 / 2; /* Range sliders should leave the gap empty. */
  }

  :host([name='from']) .w-slider-thumb__range::-webkit-slider-thumb {
    margin-left: calc(-1px * var(--thumb-offset) / 2);
  }

  :host([name='to']) .w-slider-thumb__textfield {
    grid-row: 3 / 4;
    grid-column: 3 / 4;
  }

  :host([name='to']) .w-slider-thumb__range::-webkit-slider-thumb {
    margin-left: calc(1px * var(--thumb-offset) / 2);
  }
`,K=q`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.hidden{display:none}.static{position:static}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}`;var X=Object.defineProperty,s=(a,e,r,o)=>{for(var t=void 0,d=a.length-1,h;d>=0;d--)(h=a[d])&&(t=h(e,r,t)||t);return t&&X(e,r,t),t};class i extends L(z){constructor(){super(...arguments),this._invalid=!1,this._showTooltip=!1,this.anchorPositioningStyleElement=null}static{this.shadowRootOptions={...z.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[j,K,H]}#r(){this._showTooltip=!0}#e(){this._showTooltip=!1}#t(e){const r=e.currentTarget.tagName==="W-TEXTFIELD";if(e instanceof CustomEvent)return;const o=e.currentTarget.value;if(o==="")return this.required&&(this._invalid=!0),!1;r&&this._invalid&&(this._invalid=!1);const t=Number.parseInt(o),d=Number.parseInt(this.max),h=Number.parseInt(this.min);(t>d||t<h)&&(this._invalid=!0);let E=!1;if(this.slot){const P=getComputedStyle(this);if(this.slot==="from"){const p=P.getPropertyValue("--to");if(t>Number.parseInt(p)){if(r)return this._invalid=!0,!1;E=!0,this.value=p}}else{const p=P.getPropertyValue("--from");if(t<Number.parseInt(p)){if(r)return this._invalid=!0,!1;E=!0,this.value=p}}}return E?(e.preventDefault(),this.range.value=this.value,!1):(this.value=o,!0)}async connectedCallback(){if(super.connectedCallback(),"anchorName"in document.documentElement.style)await this.updateComplete;else{const e=import.meta.url.substring(0,import.meta.url.lastIndexOf("/"));try{const[{default:r}]=await Promise.all([W(()=>import(`${e}/oddbird-css-anchor-positioning.js`),[],import.meta.url),this.updateComplete]);this.anchorPositioningStyleElement||(this.anchorPositioningStyleElement=document.createElement("style"),this.shadowRoot.prepend(this.anchorPositioningStyleElement)),this.anchorPositioningStyleElement.textContent=`
        /*
         * The polyfill can only anchor to ::before and ::after pseudo elements.
         * We work around that by recreating a transparent version of the active range
         * so that we can position relative to that, without crossing the shadow root boundary.
         */
        #anchor {
          anchor-name: --polyfilled-thumb;

          /* We have to compensate for the width of the thumb inside the track to find its center. */
          --_value: var(--_to-as-percent-of-max);
          --_offset-origin: 50; /* at this point the offset is zero */
          --_thumb-offset-percent: calc(var(--_value) - var(--_offset-origin));
          --_thumb-offset-pixels: calc(var(--w-slider-thumb-size) * calc(var(--_thumb-offset-percent) / 100));

          align-self: center;
          background: transparent;
          position: absolute;
          top: var(--_range-top);
          height: var(--w-slider-track-active-height);
          left: 0;
          right: 0;
          grid-area: slider;
          margin-left: calc(var(--_blank-values-before) * 1%);
          width: calc(calc(var(--_filled-values) * 1%) - var(--_thumb-offset-pixels));
        }

        #target {
          position: absolute;

          position-anchor: --polyfilled-thumb;
          bottom: calc(anchor(top) + 16px);
          left: anchor(--polyfilled-thumb right);
        }

        :host([name='from']) #anchor {
          --_value: var(--_from-as-percent-of-max);

          margin-left: calc(calc(var(--_blank-values-before) * 1%) - var(--_thumb-offset-pixels));
          width: calc(calc(var(--_filled-values) * 1%) - var(--w-slider-thumb-size));
        }

        :host([name='from']) #target {
          left: anchor(--polyfilled-thumb left);
        }
      `,await r.call(this,{elements:[this.anchorPositioningStyleElement]})}catch(r){console.error(new Error("Error registering the CSS anchor positioning polyfill. The UI will look broken.",{cause:r}))}}this.range.value=this.value??this.max}updated(e){if(e.has("value")&&(this.setValue(this.value),!("anchorName"in document.documentElement.style))){const r=this.shadowRoot.querySelector("#target"),o=getComputedStyle(r).getPropertyValue("width"),t=Number.parseFloat(o.replace("px",""))/2;r.style.setProperty("margin-left",`-${t}px`)}e.has("_invalid")&&this.dispatchEvent(new CustomEvent("slidervalidity",{bubbles:!0,detail:{invalid:this._invalid}}))}render(){return l`
      <div class="w-slider-thumb">
        <label for="range">${this.label}</label>
        ${"anchorName"in document.documentElement.style?T:l`<div id="anchor"></div>`}
        <input
          id="range"
          aria-label="${this.ariaLabel}"
          aria-describedby="${F(this.ariaDescription?"aria-description":void 0)}"
          class="w-slider-thumb__range"
          type="range"
          .value="${this.value}"
          min="${this.min}"
          max="${this.max}"
          name="${this.name}"
          step="${F(this.step?this.step:void 0)}"
          ?disabled="${this.disabled||this.forceDisabled}"
          @mousedown="${this.#r}"
          @mouseup="${this.#e}"
          @touchstart="${this.#r}"
          @touchend="${this.#e}"
          @focus="${this.#r}"
          @blur="${this.#e}"
          @input="${this.#t}" />

        <span class="w-slider-thumb__from-marker">${this.formatter?this.formatter(this.min):this.min} ${this.suffix}</span>
        <span class="w-slider-thumb__to-marker">${this.formatter?this.formatter(this.max):this.max} ${this.suffix}</span>

        <w-textfield
          aria-label="${this.ariaLabel}"
          aria-description="${F(this.ariaDescription)}"
          class="w-slider-thumb__textfield"
          type="number"
          min="${this.min}"
          max="${this.max}"
          .formatter=${this.formatter}
          .value="${this.value}"
          ?invalid="${this.forceInvalid||this._invalid}"
          @input="${this.#t}">
          ${this.suffix?l`<w-affix slot="suffix" label="${this.suffix}"></w-affix>`:T}
        </w-textfield>

        <div id="target" class="${B({"w-slider-thumb__tooltip":!0,"w-slider-thumb__tooltip--visible":this._showTooltip})}">
          ${this.value?this.formatter?this.formatter(this.value):this.value:0}${this.suffix?l`&nbsp;${this.suffix}`:T}
        </div>

        <!-- aria-description is still not recommended for general use, so make a visually hidden element and refer to it with aria-describedby -->
        <span class="sr-only" id="aria-description">${this.ariaDescription}</span>
      </div>
    `}}s([n({attribute:"aria-label"})],i.prototype,"ariaLabel");s([n({attribute:"aria-description"})],i.prototype,"ariaDescription");s([n()],i.prototype,"label");s([n()],i.prototype,"name");s([n({reflect:!0})],i.prototype,"value");s([n({type:Boolean,reflect:!0})],i.prototype,"disabled");s([m()],i.prototype,"markers");s([m()],i.prototype,"required");s([m()],i.prototype,"step");s([m()],i.prototype,"min");s([m()],i.prototype,"max");s([m()],i.prototype,"suffix");s([m()],i.prototype,"forceDisabled");s([m()],i.prototype,"forceInvalid");s([m()],i.prototype,"formatter");s([A('input[type="range"]')],i.prototype,"range");s([A("w-textfield")],i.prototype,"textfield");s([m()],i.prototype,"_invalid");s([m()],i.prototype,"_showTooltip");customElements.get("w-slider-thumb")||customElements.define("w-slider-thumb",i);var C=Object.freeze,G=Object.defineProperty,$=(a,e)=>C(G(a,"raw",{value:C(a.slice())})),N,I,D,R,O;const{events:J,args:Q,argTypes:Y}=V("w-slider"),Z={title:"Forms/Slider and Range Slider",args:Q,argTypes:Y,parameters:{actions:{handles:J}}},f={render(){return l`
      <w-slider label="Single" min="0" max="100">
        <w-slider-thumb name="value"></w-slider-thumb>
      </w-slider>
    `}},b={render(){return l`
      <w-slider label="Range" min="0" max="100">
        <w-slider-thumb slot="from" aria-label="From value" name="from"></w-slider-thumb>
        <w-slider-thumb slot="to" aria-label="To value" name="to"></w-slider-thumb>
      </w-slider>
    `}},w={args:{locale:"nb",suffix:"m²"},render({locale:a,suffix:e}){return l(N||(N=$([`
      <w-slider label="Apartment size" min="0" max="250" suffix="`,`" data-testid="sqm">
        <w-slider-thumb slot="from" aria-label="From size" name="from"></w-slider-thumb>
        <w-slider-thumb slot="to" aria-label="To size" name="to"></w-slider-thumb>
      </w-slider>
      <script type="module">
        const sqmSlider = document.querySelector('w-slider[data-testid="sqm"]');
        sqmSlider.formatter = window.getNumberFormatter('`,`').format;
      <\/script>
    `])),e,a)}},g={args:{locale:"nb",suffix:"kr"},render({locale:a,suffix:e}){return l(I||(I=$([`
      <w-slider label="Price" min="0" max="250000" suffix="`,`" data-testid="currency">
        <w-slider-thumb slot="from" aria-label="From price" name="from"></w-slider-thumb>
        <w-slider-thumb slot="to" aria-label="To price" name="to"></w-slider-thumb>
      </w-slider>
      <script type="module">
        const currencySlider = document.querySelector('w-slider[data-testid="currency"]');
        currencySlider.formatter = window.getNumberFormatter('`,`').format;
      <\/script>
    `])),e,a)}},v={args:{locale:"nb",suffix:"km"},render({locale:a,suffix:e}){return l(D||(D=$([`
      <w-slider label="Distance" min="0" max="250000" suffix="`,`" data-testid="km">
        <w-slider-thumb slot="from" aria-label="From distance" name="from"></w-slider-thumb>
        <w-slider-thumb slot="to" aria-label="To distance" name="to"></w-slider-thumb>
      </w-slider>
      <script type="module">
        const kmSlider = document.querySelector('w-slider[data-testid="km"]');
        kmSlider.formatter = window.getNumberFormatter('`,`').format;
      <\/script>
    `])),e,a)}},y={args:{locale:"nb",suffix:"km",step:"25000",markers:"25000"},render({locale:a,suffix:e,markers:r,step:o}){return l(R||(R=$([`
      <w-slider label="Distance" markers="`,'" step="','" min="0" max="250000" suffix="',`" data-testid="markers">
        <w-slider-thumb slot="from" aria-label="From distance" name="from"></w-slider-thumb>
        <w-slider-thumb slot="to" aria-label="To distance" name="to"></w-slider-thumb>
      </w-slider>

      <script type="module">
        const markersSlider = document.querySelector('w-slider[data-testid="markers"]');
        markersSlider.formatter = window.getNumberFormatter('`,`').format;
      <\/script>
    `])),r,o,e,a)}},x={args:{step:5},render({step:a}){return l`
      <w-slider label="Single" step="${a}" min="0" max="100">
        <w-slider-thumb name="value"></w-slider-thumb>
      </w-slider>
    `}},_={args:{},render(){return l(O||(O=$([`
      <form id="overunder" style="margin-bottom: 16px" lang="nb">
        <w-slider label="Produksjonsår" min="1950" max="2025" data-testid="overunder">
          <w-slider-thumb
            slot="from"
            aria-label="Fra år"
            aria-description="1950 inkluderer kjøretøy produsert fram til 1950"
            name="from"></w-slider-thumb>
          <w-slider-thumb
            slot="to"
            aria-label="Til år"
            aria-description="2025 inkluderer kjøretøy produsert etter 2025"
            name="to"></w-slider-thumb>
        </w-slider>
      </form>
      <p>Drag the slider to show the value below. See the Code tab for how to format the labels.</p>
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
        const overunderSlider = document.querySelector('w-slider[data-testid="overunder"]');
        overunderSlider.formatter = function (value) {
          if (value === '1950') {
            return 'Før 1950';
          }
          if (value === '2025') {
            return 'Etter 2025';
          }
          return value;
        };

        /** Code to show the form values in output */
        document.forms['overunder'].addEventListener('input', function () {
          const formData = new FormData(this);
          const from = formData.get('from');
          const to = formData.get('to');
          document.getElementById('overunder-from').innerText = from;
          document.getElementById('overunder-to').innerText = to;
        });
      <\/script>
    `])))}},k={args:{locale:"nb"},render(){return l`
      <w-slider label="Single" min="0" max="100">
        <p slot="description">Try typing a value over 100</p>
        <w-slider-thumb></w-slider-thumb>
      </w-slider>
    `}},S={args:{locale:"nb"},render(){return l`
      <w-slider label="Production year" min="1950" max="2025" over under>
        <p slot="description">Try typing a from value higher than a to value</p>
        <w-slider-thumb slot="from" name="from"></w-slider-thumb>
        <w-slider-thumb slot="to" name="to"></w-slider-thumb>
      </w-slider>
    `}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render() {
    return html\`
      <w-slider label="Single" min="0" max="100">
        <w-slider-thumb name="value"></w-slider-thumb>
      </w-slider>
    \`;
  }
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render() {
    return html\`
      <w-slider label="Range" min="0" max="100">
        <w-slider-thumb slot="from" aria-label="From value" name="from"></w-slider-thumb>
        <w-slider-thumb slot="to" aria-label="To value" name="to"></w-slider-thumb>
      </w-slider>
    \`;
  }
}`,...b.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'nb',
    suffix: 'm²'
  },
  render({
    locale,
    suffix
  }) {
    return html\`
      <w-slider label="Apartment size" min="0" max="250" suffix="\${suffix}" data-testid="sqm">
        <w-slider-thumb slot="from" aria-label="From size" name="from"></w-slider-thumb>
        <w-slider-thumb slot="to" aria-label="To size" name="to"></w-slider-thumb>
      </w-slider>
      <script type="module">
        const sqmSlider = document.querySelector('w-slider[data-testid="sqm"]');
        sqmSlider.formatter = window.getNumberFormatter('\${locale}').format;
      <\/script>
    \`;
  }
}`,...w.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'nb',
    suffix: 'kr'
  },
  render({
    locale,
    suffix
  }) {
    return html\`
      <w-slider label="Price" min="0" max="250000" suffix="\${suffix}" data-testid="currency">
        <w-slider-thumb slot="from" aria-label="From price" name="from"></w-slider-thumb>
        <w-slider-thumb slot="to" aria-label="To price" name="to"></w-slider-thumb>
      </w-slider>
      <script type="module">
        const currencySlider = document.querySelector('w-slider[data-testid="currency"]');
        currencySlider.formatter = window.getNumberFormatter('\${locale}').format;
      <\/script>
    \`;
  }
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'nb',
    suffix: 'km'
  },
  render({
    locale,
    suffix
  }) {
    return html\`
      <w-slider label="Distance" min="0" max="250000" suffix="\${suffix}" data-testid="km">
        <w-slider-thumb slot="from" aria-label="From distance" name="from"></w-slider-thumb>
        <w-slider-thumb slot="to" aria-label="To distance" name="to"></w-slider-thumb>
      </w-slider>
      <script type="module">
        const kmSlider = document.querySelector('w-slider[data-testid="km"]');
        kmSlider.formatter = window.getNumberFormatter('\${locale}').format;
      <\/script>
    \`;
  }
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'nb',
    suffix: 'km',
    step: '25000',
    markers: '25000'
  },
  render({
    locale,
    suffix,
    markers,
    step
  }) {
    return html\`
      <w-slider label="Distance" markers="\${markers}" step="\${step}" min="0" max="250000" suffix="\${suffix}" data-testid="markers">
        <w-slider-thumb slot="from" aria-label="From distance" name="from"></w-slider-thumb>
        <w-slider-thumb slot="to" aria-label="To distance" name="to"></w-slider-thumb>
      </w-slider>

      <script type="module">
        const markersSlider = document.querySelector('w-slider[data-testid="markers"]');
        markersSlider.formatter = window.getNumberFormatter('\${locale}').format;
      <\/script>
    \`;
  }
}`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    return html\`
      <form id="overunder" style="margin-bottom: 16px" lang="nb">
        <w-slider label="Produksjonsår" min="1950" max="2025" data-testid="overunder">
          <w-slider-thumb
            slot="from"
            aria-label="Fra år"
            aria-description="1950 inkluderer kjøretøy produsert fram til 1950"
            name="from"></w-slider-thumb>
          <w-slider-thumb
            slot="to"
            aria-label="Til år"
            aria-description="2025 inkluderer kjøretøy produsert etter 2025"
            name="to"></w-slider-thumb>
        </w-slider>
      </form>
      <p>Drag the slider to show the value below. See the Code tab for how to format the labels.</p>
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
        const overunderSlider = document.querySelector('w-slider[data-testid="overunder"]');
        overunderSlider.formatter = function (value) {
          if (value === '1950') {
            return 'Før 1950';
          }
          if (value === '2025') {
            return 'Etter 2025';
          }
          return value;
        };

        /** Code to show the form values in output */
        document.forms['overunder'].addEventListener('input', function () {
          const formData = new FormData(this);
          const from = formData.get('from');
          const to = formData.get('to');
          document.getElementById('overunder-from').innerText = from;
          document.getElementById('overunder-to').innerText = to;
        });
      <\/script>
    \`;
  }
}`,..._.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'nb'
  },
  render() {
    return html\`
      <w-slider label="Production year" min="1950" max="2025" over under>
        <p slot="description">Try typing a from value higher than a to value</p>
        <w-slider-thumb slot="from" name="from"></w-slider-thumb>
        <w-slider-thumb slot="to" name="to"></w-slider-thumb>
      </w-slider>
    \`;
  }
}`,...S.parameters?.docs?.source}}};const ee=["Single","Range","SuffixSquareMeters","SuffixCurrency","SuffixKilometers","Marks","Step","OverUnder","SingleError","RangeError"],de=Object.freeze(Object.defineProperty({__proto__:null,Marks:y,OverUnder:_,Range:b,RangeError:S,Single:f,SingleError:k,Step:x,SuffixCurrency:g,SuffixKilometers:v,SuffixSquareMeters:w,__namedExportsOrder:ee,default:Z},Symbol.toStringTag,{value:"Module"}));export{y as M,_ as O,b as R,de as S,f as a,w as b,g as c,v as d,x as e,k as f,S as g};
