import{g as i,x as s}from"./iframe-CmTpjidg.js";import{s as d,p as n}from"./utilities-DSzbMNRU.js";var t=Object.freeze,c=Object.defineProperty,p=(e,k)=>t(c(e,"raw",{value:t(e.slice())})),o;const{events:l,args:u,argTypes:m}=i("w-datepicker"),g={title:"Forms/Datepicker",render(e){return s`
      <!-- Workaround for Storybook's overflow hidden -->
      <div style="min-height: 400px">
        <w-datepicker ${d(n(e))}></w-datepicker>
      </div>
    `},args:u,argTypes:m,parameters:{actions:{handles:l}}},r={args:{label:"Dato",lang:"nb"}},a={args:{label:"Dato",lang:"nb"},render(e){return s(o||(o=p([`
      <!-- Workaround for Storybook's overflow hidden -->
      <div style="min-height: 400px">
        <w-datepicker `,`></w-datepicker>
      </div>
      <script type="module">
        const datePicker = document.querySelector('w-datepicker');
        // No working on Sundays!
        datePicker.isDayDisabled = (day) => day.getDay() === 0;
      <\/script>
    `])),d(n(e)))}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Dato',
    lang: 'nb'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Dato',
    lang: 'nb'
  },
  render(args) {
    return html\`
      <!-- Workaround for Storybook's overflow hidden -->
      <div style="min-height: 400px">
        <w-datepicker \${spread(prespread(args))}></w-datepicker>
      </div>
      <script type="module">
        const datePicker = document.querySelector('w-datepicker');
        // No working on Sundays!
        datePicker.isDayDisabled = (day) => day.getDay() === 0;
      <\/script>
    \`;
  }
}`,...a.parameters?.docs?.source}}};const y=["Default","DisableCalendarDates"],f=Object.freeze(Object.defineProperty({__proto__:null,Default:r,DisableCalendarDates:a,__namedExportsOrder:y,default:g},Symbol.toStringTag,{value:"Module"}));export{f as D,r as a};
