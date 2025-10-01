import{a as P,i as z,r as j,E as T,x as o,n as l,k as u,g as A}from"./iframe-DQhzE2Ry.js";import"./index-C4mMAA14.js";import"./index-BskDQxtK.js";import"./index-1u7VZUsA.js";import{F as L}from"./FormControlMixin-DJnJZbro.js";import{_ as B}from"./preload-helper-Ct5FWWRu.js";import{e as V}from"./query-NYTjQBeo.js";import{o as E}from"./if-defined-By2RKSRC.js";const M=P`
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

    /* Position the starting point of the fill in the case of a non-zero --from value */
    --_thumb-width-as-percent-of-max: calc(var(--w-slider-thumb-size) / var(--_value-range) * 100);
    --_from-as-percent-of-max: calc(var(--_from-in-range) / var(--_value-range) * 100);
    --_blank-values-before: var(--_from-as-percent-of-max);

    /* Set the width of the fill as a percentage. */
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
`;var W=Object.defineProperty,c=(a,e,t,n)=>{for(var r=void 0,d=a.length-1,h;d>=0;d--)(h=a[d])&&(r=h(e,t,r)||r);return r&&W(e,t,r),r};class m extends L(z){constructor(){super(...arguments),this.disabled=!1,this.invalid=!1,this.required=!1}static{this.shadowRootOptions={...z.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[j,M]}#t;#e(){const e=this.querySelectorAll("w-slider-thumb");for(const t of e.values())t.min=this.min,t.max=this.max,t.step=this.step,t.suffix=this.suffix,t.formatter=this.formatter,t.ariaLabel||(t.slot||(t.ariaLabel=this.label),t.slot==="from"&&(t.ariaLabel=`${this.label} min`),t.slot==="to"&&(t.ariaLabel=`${this.label} max`)),t.forceDisabled=this.disabled,t.forceInvalid=this.invalid,this.#a(t)}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.style.setProperty("--min",this.min),this.style.setProperty("--max",this.max),this.markers&&this.style.setProperty("--markers",String(this.markers));const e=getComputedStyle(this.shadowRoot.querySelector(".w-slider"));this.#t=Number.parseFloat(e.getPropertyValue("--w-slider-thumb-size").replace("px","")),this.#e()}updated(e){(e.has("disabled")||e.has("invalid")||e.has("required")||e.has("min")||e.has("step")||e.has("max")||e.has("suffix")||e.has("formatter"))&&this.#e()}#r(e){const t=e.target;this.#a(t)}#i(e){e.stopPropagation(),this.invalid=e.detail.invalid}#a(e){const t=e.slot;if(t){const n=this.#s(),r=this.#t,d=r-n;n<=r&&this.style.setProperty("--thumb-offset",String(d))}if(t||this.style.setProperty("--from","0"),t==="from"){const n=e.value??=this.min;this.style.setProperty("--from",n)}if(!t||t==="to"){const n=e.value??=this.max;this.style.setProperty("--to",n)}}#s(){const e=window.getComputedStyle(this.shadowRoot.querySelector(".w-slider__active-range"),"::before").width;return Number.parseFloat(e.replace("px",""))}render(){return o`
      <fieldset id="fieldset" class="w-slider" @input="${this.#r}" @slidervalidity="${this.#i}">
        <legend class="w-slider__label">
          <slot id="label" name="label">${this.label}</slot>
        </legend>
        <slot class="w-slider__description" name="description"></slot>
        ${this.markers?o`<div class="w-slider__markers"></div>`:T}
        <div class="w-slider__active-range"></div>
        <slot class="w-slider__slider" @slotchange=${this.#e}></slot>
        <slot class="w-slider__slider" name="from" @slotchange=${this.#e}></slot>
        <slot class="w-slider__slider" name="to" @slotchange=${this.#e}></slot>
      </fieldset>
    `}}c([l()],m.prototype,"label");c([l({type:Boolean,reflect:!0})],m.prototype,"disabled");c([l({type:Boolean,reflect:!0})],m.prototype,"invalid");c([l({type:Boolean,reflect:!0})],m.prototype,"required");c([l({reflect:!0})],m.prototype,"min");c([l({reflect:!0})],m.prototype,"max");c([l({type:Number})],m.prototype,"markers");c([l({type:Number})],m.prototype,"step");c([l()],m.prototype,"suffix");c([l({attribute:!1})],m.prototype,"formatter");customElements.get("w-slider")||customElements.define("w-slider",m);const U=P`
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

  .w-slider-thumb__tooltip-target {
    display: block;
    pointer-events: none;
    position: absolute;
    width: 1px;
    height: 1px;
    position-anchor: --thumb;
    position-area: center; /* Position the tooltip target right on the range thumb */
  }

  /* Uncomment this to debug the invisible anchor target */
  /* .w-slider-thumb__tooltip-target {
    border: 2px solid lime;
    width: 10px;
    height: 10px;
    border-radius: 20px;
  } */

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
`,H=P`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.hidden{display:none}.static{position:static}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}`;var K=Object.defineProperty,s=(a,e,t,n)=>{for(var r=void 0,d=a.length-1,h;d>=0;d--)(h=a[d])&&(r=h(e,t,r)||r);return r&&K(e,t,r),r};class i extends L(z){constructor(){super(...arguments),this._invalid=!1,this._showTooltip=!1,this.anchorPositioningStyleElement=null}static{this.shadowRootOptions={...z.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[j,H,U]}#t(){this._showTooltip=!0}#e(){this._showTooltip=!1}#r(e){const t=e.detail?.value;t&&this._invalid&&(this._invalid=!1);const n=t||e.currentTarget.value,r=Number.parseInt(n),d=Number.parseInt(this.max),h=Number.parseInt(this.min);(r>d||r<h)&&(this._invalid=!0);let F=!1;if(this.slot){const q=getComputedStyle(this);if(this.slot==="from"){const p=q.getPropertyValue("--to");if(r>Number.parseInt(p)){if(t)return this._invalid=!0,!1;F=!0,this.value=p}}else{const p=q.getPropertyValue("--from");if(r<Number.parseInt(p)){if(t)return this._invalid=!0,!1;F=!0,this.value=p}}}return F?(e.preventDefault(),this.range.value=this.value,!1):(this.value=n,!0)}async connectedCallback(){if(super.connectedCallback(),"anchorName"in document.documentElement.style)await this.updateComplete;else{const e=import.meta.url.substring(0,import.meta.url.lastIndexOf("/")),[{default:t}]=await Promise.all([B(()=>import(`${e}/oddbird-anchor-positioning.js`),[],import.meta.url),this.updateComplete]);this.anchorPositioningStyleElement||(this.anchorPositioningStyleElement=document.createElement("style"),this.shadowRoot.prepend(this.anchorPositioningStyleElement)),this.anchorPositioningStyleElement.textContent=`
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
          top: anchor(--polyfilled-thumb center);
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
      `,await t.call(this,{elements:[this.anchorPositioningStyleElement]})}this.range.value=this.value??this.max}updated(e){e.has("value")&&this.setValue(this.value),e.has("_invalid")&&this.dispatchEvent(new CustomEvent("slidervalidity",{bubbles:!0,detail:{invalid:this._invalid}}))}render(){return o`
      <div class="w-slider-thumb">
        <label for="range">${this.label}</label>
        ${"anchorName"in document.documentElement.style?T:o`<div id="anchor"></div>`}
        <input
          id="range"
          aria-label="${this.ariaLabel}"
          aria-describedby="${E(this.ariaDescription?"aria-description":void 0)}"
          class="w-slider-thumb__range"
          type="range"
          .value="${this.value}"
          min="${this.min}"
          max="${this.max}"
          name="${this.name}"
          step="${E(this.step?this.step:void 0)}"
          ?disabled="${this.disabled||this.forceDisabled}"
          @mousedown="${this.#t}"
          @mouseup="${this.#e}"
          @touchstart="${this.#t}"
          @touchend="${this.#e}"
          @focus="${this.#t}"
          @blur="${this.#e}"
          @input="${this.#r}" />

        <span class="w-slider-thumb__from-marker">${this.formatter?this.formatter(this.min):this.min} ${this.suffix}</span>
        <span class="w-slider-thumb__to-marker">${this.formatter?this.formatter(this.max):this.max} ${this.suffix}</span>

        <w-textfield
          aria-label="${this.ariaLabel}"
          aria-description="${E(this.ariaDescription)}"
          class="w-slider-thumb__textfield"
          type="number"
          min="${this.min}"
          max="${this.max}"
          .formatter=${this.formatter}
          .value="${this.value}"
          ?invalid="${this.forceInvalid||this._invalid}"
          @input="${this.#r}">
          ${this.suffix?o`<w-affix slot="suffix" label="${this.suffix}"></w-affix>`:T}
        </w-textfield>

        <w-attention tooltip placement="top" flip distance="24" .show="${this._showTooltip}">
          <output id="target" class="w-slider-thumb__tooltip-target" slot="target"></output>
          <span slot="message">
            ${this.value?this.formatter?this.formatter(this.value):this.value:0}${this.suffix?o`&nbsp;${this.suffix}`:T}
          </span>
        </w-attention>

        <!-- aria-description is still not recommended for general use, so make a visually hidden element and refer to it with aria-describedby -->
        <span class="sr-only" id="aria-description">${this.ariaDescription}</span>
      </div>
    `}}s([l({attribute:"aria-label"})],i.prototype,"ariaLabel");s([l({attribute:"aria-description"})],i.prototype,"ariaDescription");s([l()],i.prototype,"label");s([l()],i.prototype,"name");s([l({reflect:!0})],i.prototype,"value");s([l({type:Boolean,reflect:!0})],i.prototype,"disabled");s([u()],i.prototype,"markers");s([u()],i.prototype,"step");s([u()],i.prototype,"min");s([u()],i.prototype,"max");s([u()],i.prototype,"suffix");s([u()],i.prototype,"forceDisabled");s([u()],i.prototype,"forceInvalid");s([u()],i.prototype,"formatter");s([V('input[type="range"]')],i.prototype,"range");s([V("w-textfield")],i.prototype,"textfield");s([u()],i.prototype,"_invalid");s([u()],i.prototype,"_showTooltip");customElements.get("w-slider-thumb")||customElements.define("w-slider-thumb",i);var C=Object.freeze,X=Object.defineProperty,$=(a,e)=>C(X(a,"raw",{value:C(a.slice())})),N,D,R,I,O;const{events:G,args:J,argTypes:Q}=A("w-slider"),Y={title:"Forms/Slider and Range Slider",args:J,argTypes:Q,parameters:{actions:{handles:G}}},f={render(){return o`
      <w-slider label="Single" min="0" max="100">
        <w-slider-thumb name="value"></w-slider-thumb>
      </w-slider>
    `}},b={render(){return o`
      <w-slider label="Range" min="0" max="100">
        <w-slider-thumb slot="from" aria-label="From value" name="from"></w-slider-thumb>
        <w-slider-thumb slot="to" aria-label="To value" name="to"></w-slider-thumb>
      </w-slider>
    `}},w={args:{locale:"nb",suffix:"m²"},render({locale:a,suffix:e}){return o(N||(N=$([`
      <w-slider label="Apartment size" min="0" max="250" suffix="`,`" data-testid="sqm">
        <w-slider-thumb slot="from" aria-label="From size" name="from"></w-slider-thumb>
        <w-slider-thumb slot="to" aria-label="To size" name="to"></w-slider-thumb>
      </w-slider>
      <script type="module">
        const sqmSlider = document.querySelector('w-slider[data-testid="sqm"]');
        sqmSlider.formatter = window.getNumberFormatter('`,`').format;
      <\/script>
    `])),e,a)}},g={args:{locale:"nb",suffix:"kr"},render({locale:a,suffix:e}){return o(D||(D=$([`
      <w-slider label="Price" min="0" max="250000" suffix="`,`" data-testid="currency">
        <w-slider-thumb slot="from" aria-label="From price" name="from"></w-slider-thumb>
        <w-slider-thumb slot="to" aria-label="To price" name="to"></w-slider-thumb>
      </w-slider>
      <script type="module">
        const currencySlider = document.querySelector('w-slider[data-testid="currency"]');
        currencySlider.formatter = window.getNumberFormatter('`,`').format;
      <\/script>
    `])),e,a)}},v={args:{locale:"nb",suffix:"km"},render({locale:a,suffix:e}){return o(R||(R=$([`
      <w-slider label="Distance" min="0" max="250000" suffix="`,`" data-testid="km">
        <w-slider-thumb slot="from" aria-label="From distance" name="from"></w-slider-thumb>
        <w-slider-thumb slot="to" aria-label="To distance" name="to"></w-slider-thumb>
      </w-slider>
      <script type="module">
        const kmSlider = document.querySelector('w-slider[data-testid="km"]');
        kmSlider.formatter = window.getNumberFormatter('`,`').format;
      <\/script>
    `])),e,a)}},x={args:{locale:"nb",suffix:"km",step:"25000",markers:"25000"},render({locale:a,suffix:e,markers:t,step:n}){return o(I||(I=$([`
      <w-slider label="Distance" markers="`,'" step="','" min="0" max="250000" suffix="',`" data-testid="markers">
        <w-slider-thumb slot="from" aria-label="From distance" name="from"></w-slider-thumb>
        <w-slider-thumb slot="to" aria-label="To distance" name="to"></w-slider-thumb>
      </w-slider>

      <script type="module">
        const markersSlider = document.querySelector('w-slider[data-testid="markers"]');
        markersSlider.formatter = window.getNumberFormatter('`,`').format;
      <\/script>
    `])),t,n,e,a)}},y={args:{step:5},render({step:a}){return o`
      <w-slider label="Single" step="${a}" min="0" max="100">
        <w-slider-thumb name="value"></w-slider-thumb>
      </w-slider>
    `}},_={args:{},render(){return o(O||(O=$([`
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
    `])))}},k={args:{locale:"nb"},render(){return o`
      <w-slider label="Single" min="0" max="100">
        <p slot="description">Try typing a value over 100</p>
        <w-slider-thumb></w-slider-thumb>
      </w-slider>
    `}},S={args:{locale:"nb"},render(){return o`
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
}`,...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};const Z=["Single","Range","SuffixSquareMeters","SuffixCurrency","SuffixKilometers","Marks","Step","OverUnder","SingleError","RangeError"],ne=Object.freeze(Object.defineProperty({__proto__:null,Marks:x,OverUnder:_,Range:b,RangeError:S,Single:f,SingleError:k,Step:y,SuffixCurrency:g,SuffixKilometers:v,SuffixSquareMeters:w,__namedExportsOrder:Z,default:Y},Symbol.toStringTag,{value:"Module"}));export{x as M,_ as O,b as R,ne as S,f as a,w as b,g as c,v as d,y as e,k as f,S as g};
