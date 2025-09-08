import{g as l,k as s}from"./iframe-BkMFtFBJ.js";import{s as i,p as d}from"./utilities-DadZFdyE.js";var c=Object.freeze,u=Object.defineProperty,p=(e,I)=>c(u(e,"raw",{value:c(e.slice())})),h,m;const{events:g,args:b,argTypes:y}=l("w-modal"),{events:w,args:k,argTypes:f}=l("w-modal-header"),{events:v,args:S,argTypes:x}=l("w-modal-footer"),T={title:"Overlays/Modal"},t={args:{},render(){return s(h||(h=p([`
      <w-button id="modal-open-button-one" aria-haspopup="dialog">Open a modal</w-button>
      <w-modal id="example-modal-one">
        <w-modal-header id="modal-header-one" slot="header" title="An example modal"></w-modal-header>
        <div slot="content">
          <div style="margin-bottom: 12px">
            <w-button id="modal-toggle-back-one" variant="utility" small>Toggle back button</w-button>
          </div>
          <p>
            I bomb atomically, Socrates' philosophies and hypotheses Can't define how I be droppin' these mockeries Lyrically perform armed
            robbery Flee with the lottery, possibly they spotted me Battle-scarred Shogun, explosion when my pen hits tremendous
            Ultra-violet shine blind forensics I inspect view through the future see millennium Killa Beez sold fifty gold, sixty platinum
            Shackling the masses with drastic rap tactics Graphic displays melt the steel like blacksmiths Black Wu jackets, Queen Beez ease
            the guns in Rumble with patrolmen, tear gas laced the function Heads by the score take flight, incite a war Chicks hit the
            floor, diehard fans demand more Behold the bold soldier, control the globe slowly Proceeds to blow, swingin' swords like Shinobi
            Stomp grounds and pound footprints in solid rock Wu got it locked, performin' live on your hottest block
          </p>
          <p>
            First I'm gonna getcha, once I gotcha, I gat-cha, You could never capture the Method Man's stature. So uhh, tic toc and keep
            ticking, while I get you flipping off what I'm kicking. Yes, the rhythm, the rebel, alone in my level heat it up past the
            boiling point of metal. Shackling the masses with drastic rap tactics, graphic displays melt the steel like blacksmiths. My
            beats travel like a vortex through your spine, to the top of your cerebral cortex. Yes, the rhythm, the rebel, alone in my level
            heat it up past the boiling point of metal. Small change, they putting shame in the game. Murderous material, made by a madman,
            it's the mic wrecker, Inspector, bad man.
          </p>
          <p>
            My beats travel like a vortex through your spine, to the top of your cerebral cortex. The rebel, I make more noise than heavy
            metal. Now, lo and behold, another deadly episode, bound to catch another charge when I explode Perpendicular to the square we
            stay in gold like Flair, escape from your dragon's lair in particular. Handcuffed in the back of a bus, forty of us. Slammin a
            hype verse til ya head burst. Handcuffed in the back of a bus, forty of us. I bomb atomically Socrates' philosophies and
            hypothesis can't define how I be dropping these mockeries. I be that insane one from the psycho ward, I'm on the trigger, plus I
            got the Wu-Tang sword. Step through your section with the Force like Luke Skywalker, rhyme author, orchestrate mind torture.
          </p>
          <p>
            It was the night before New Year's all through the projects, not a handgun was silent, not even a Tec. I smoke on the mic like
            smoking Joe Frazier, the hell raiser, raising hell with the flavor. The Wu is comin thru, the outcome is critical, Muckin wit my
            style, is sort of like a Miracle. We got stick-up kids, corrupt cops, and pop rocks. Step through your section with the Force
            like Luke Skywalker, rhyme author, orchestrate mind torture. Rae got it going on pal, call me the rap assassinator, rhymes
            rugged and built like Schwarzenegger.
          </p>
        </div>
        <w-modal-footer slot="footer">
          <w-button variant="primary" id="modal-close-button-one">OK</w-button>
        </w-modal-footer>
      </w-modal>

      <script>
        const openButtonOne = document.querySelector('#modal-open-button-one');
        const closeButtonOne = document.querySelector('#modal-close-button-one');
        const toggleBackButtonOne = document.querySelector('#modal-toggle-back-one');
        const modalOne = document.querySelector('#example-modal-one');
        const modalHeaderOne = document.querySelector('#modal-header-one');
        openButtonOne.addEventListener('click', () => modalOne.open());
        closeButtonOne.addEventListener('click', () => modalOne.close());
        toggleBackButtonOne.addEventListener('click', () => {
          modalHeaderOne.back = !modalHeaderOne.back;
        });
      <\/script>
    `])))}},o={args:{},render(){return s(m||(m=p([`
      <w-button id="modal-open-button-two" aria-haspopup="dialog">Open a modal</w-button>
      <w-modal id="example-modal-two">
        <w-modal-header slot="header" title="Look a doggo!">
          <img
            slot="top"
            style="height: 256px; width: 100%; object-fit: cover;"
            src="https://images.unsplash.com/photo-1534361960057-19889db9621e"
            alt="A really nice dog" />
        </w-modal-header>
        <div slot="content">
          <p>
            I bomb atomically, Socrates' philosophies and hypotheses Can't define how I be droppin' these mockeries Lyrically perform armed
            robbery Flee with the lottery, possibly they spotted me Battle-scarred Shogun, explosion when my pen hits tremendous
            Ultra-violet shine blind forensics I inspect view through the future see millennium Killa Beez sold fifty gold, sixty platinum
            Shackling the masses with drastic rap tactics Graphic displays melt the steel like blacksmiths Black Wu jackets, Queen Beez ease
            the guns in Rumble with patrolmen, tear gas laced the function Heads by the score take flight, incite a war Chicks hit the
            floor, diehard fans demand more Behold the bold soldier, control the globe slowly Proceeds to blow, swingin' swords like Shinobi
            Stomp grounds and pound footprints in solid rock Wu got it locked, performin' live on your hottest block
          </p>
        </div>
        <w-modal-footer slot="footer">
          <w-button variant="primary" id="modal-close-button-two">OK</w-button>
        </w-modal-footer>
      </w-modal>

      <script>
        const openButtonTwo = document.querySelector('#modal-open-button-two');
        const closeButtonTwo = document.querySelector('#modal-close-button-two');
        const modalTwo = document.querySelector('#example-modal-two');
        openButtonTwo.addEventListener('click', () => modalTwo.open());
        closeButtonTwo.addEventListener('click', () => modalTwo.close());
      <\/script>
    `])))}},a={render(e){return s`
      <p>This is here to document attributes. See the Default example for a complete usage example.</p>
      <w-modal ${i(d(e))}></w-modal>
    `},args:b,argTypes:y,parameters:{actions:{handles:g}}},r={render(e){return s`
      <p>This is here to document attributes. See the Default example for a complete usage example.</p>
      <w-modal-header ${i(d(e))}></w-modal-header>
    `},args:k,argTypes:f,parameters:{actions:{handles:w}}},n={render(e){return s`
      <p>This is here to document attributes. See the Default example for a complete usage example.</p>
      <w-modal-footer ${i(d(e))}></w-modal-footer>
    `},args:S,argTypes:x,parameters:{actions:{handles:v}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    return html\`
      <w-button id="modal-open-button-one" aria-haspopup="dialog">Open a modal</w-button>
      <w-modal id="example-modal-one">
        <w-modal-header id="modal-header-one" slot="header" title="An example modal"></w-modal-header>
        <div slot="content">
          <div style="margin-bottom: 12px">
            <w-button id="modal-toggle-back-one" variant="utility" small>Toggle back button</w-button>
          </div>
          <p>
            I bomb atomically, Socrates' philosophies and hypotheses Can't define how I be droppin' these mockeries Lyrically perform armed
            robbery Flee with the lottery, possibly they spotted me Battle-scarred Shogun, explosion when my pen hits tremendous
            Ultra-violet shine blind forensics I inspect view through the future see millennium Killa Beez sold fifty gold, sixty platinum
            Shackling the masses with drastic rap tactics Graphic displays melt the steel like blacksmiths Black Wu jackets, Queen Beez ease
            the guns in Rumble with patrolmen, tear gas laced the function Heads by the score take flight, incite a war Chicks hit the
            floor, diehard fans demand more Behold the bold soldier, control the globe slowly Proceeds to blow, swingin' swords like Shinobi
            Stomp grounds and pound footprints in solid rock Wu got it locked, performin' live on your hottest block
          </p>
          <p>
            First I'm gonna getcha, once I gotcha, I gat-cha, You could never capture the Method Man's stature. So uhh, tic toc and keep
            ticking, while I get you flipping off what I'm kicking. Yes, the rhythm, the rebel, alone in my level heat it up past the
            boiling point of metal. Shackling the masses with drastic rap tactics, graphic displays melt the steel like blacksmiths. My
            beats travel like a vortex through your spine, to the top of your cerebral cortex. Yes, the rhythm, the rebel, alone in my level
            heat it up past the boiling point of metal. Small change, they putting shame in the game. Murderous material, made by a madman,
            it's the mic wrecker, Inspector, bad man.
          </p>
          <p>
            My beats travel like a vortex through your spine, to the top of your cerebral cortex. The rebel, I make more noise than heavy
            metal. Now, lo and behold, another deadly episode, bound to catch another charge when I explode Perpendicular to the square we
            stay in gold like Flair, escape from your dragon's lair in particular. Handcuffed in the back of a bus, forty of us. Slammin a
            hype verse til ya head burst. Handcuffed in the back of a bus, forty of us. I bomb atomically Socrates' philosophies and
            hypothesis can't define how I be dropping these mockeries. I be that insane one from the psycho ward, I'm on the trigger, plus I
            got the Wu-Tang sword. Step through your section with the Force like Luke Skywalker, rhyme author, orchestrate mind torture.
          </p>
          <p>
            It was the night before New Year's all through the projects, not a handgun was silent, not even a Tec. I smoke on the mic like
            smoking Joe Frazier, the hell raiser, raising hell with the flavor. The Wu is comin thru, the outcome is critical, Muckin wit my
            style, is sort of like a Miracle. We got stick-up kids, corrupt cops, and pop rocks. Step through your section with the Force
            like Luke Skywalker, rhyme author, orchestrate mind torture. Rae got it going on pal, call me the rap assassinator, rhymes
            rugged and built like Schwarzenegger.
          </p>
        </div>
        <w-modal-footer slot="footer">
          <w-button variant="primary" id="modal-close-button-one">OK</w-button>
        </w-modal-footer>
      </w-modal>

      <script>
        const openButtonOne = document.querySelector('#modal-open-button-one');
        const closeButtonOne = document.querySelector('#modal-close-button-one');
        const toggleBackButtonOne = document.querySelector('#modal-toggle-back-one');
        const modalOne = document.querySelector('#example-modal-one');
        const modalHeaderOne = document.querySelector('#modal-header-one');
        openButtonOne.addEventListener('click', () => modalOne.open());
        closeButtonOne.addEventListener('click', () => modalOne.close());
        toggleBackButtonOne.addEventListener('click', () => {
          modalHeaderOne.back = !modalHeaderOne.back;
        });
      <\/script>
    \`;
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    return html\`
      <w-button id="modal-open-button-two" aria-haspopup="dialog">Open a modal</w-button>
      <w-modal id="example-modal-two">
        <w-modal-header slot="header" title="Look a doggo!">
          <img
            slot="top"
            style="height: 256px; width: 100%; object-fit: cover;"
            src="https://images.unsplash.com/photo-1534361960057-19889db9621e"
            alt="A really nice dog" />
        </w-modal-header>
        <div slot="content">
          <p>
            I bomb atomically, Socrates' philosophies and hypotheses Can't define how I be droppin' these mockeries Lyrically perform armed
            robbery Flee with the lottery, possibly they spotted me Battle-scarred Shogun, explosion when my pen hits tremendous
            Ultra-violet shine blind forensics I inspect view through the future see millennium Killa Beez sold fifty gold, sixty platinum
            Shackling the masses with drastic rap tactics Graphic displays melt the steel like blacksmiths Black Wu jackets, Queen Beez ease
            the guns in Rumble with patrolmen, tear gas laced the function Heads by the score take flight, incite a war Chicks hit the
            floor, diehard fans demand more Behold the bold soldier, control the globe slowly Proceeds to blow, swingin' swords like Shinobi
            Stomp grounds and pound footprints in solid rock Wu got it locked, performin' live on your hottest block
          </p>
        </div>
        <w-modal-footer slot="footer">
          <w-button variant="primary" id="modal-close-button-two">OK</w-button>
        </w-modal-footer>
      </w-modal>

      <script>
        const openButtonTwo = document.querySelector('#modal-open-button-two');
        const closeButtonTwo = document.querySelector('#modal-close-button-two');
        const modalTwo = document.querySelector('#example-modal-two');
        openButtonTwo.addEventListener('click', () => modalTwo.open());
        closeButtonTwo.addEventListener('click', () => modalTwo.close());
      <\/script>
    \`;
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render(args) {
    return html\`
      <p>This is here to document attributes. See the Default example for a complete usage example.</p>
      <w-modal \${spread(prespread(args))}></w-modal>
    \`;
  },
  args: modalArgs,
  argTypes: modalArgTypes,
  parameters: {
    actions: {
      handles: modalEvents
    }
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render(args) {
    return html\`
      <p>This is here to document attributes. See the Default example for a complete usage example.</p>
      <w-modal-header \${spread(prespread(args))}></w-modal-header>
    \`;
  },
  args: modalHeaderArgs,
  argTypes: modalHeaderArgTypes,
  parameters: {
    actions: {
      handles: modalHeaderEvents
    }
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render(args) {
    return html\`
      <p>This is here to document attributes. See the Default example for a complete usage example.</p>
      <w-modal-footer \${spread(prespread(args))}></w-modal-footer>
    \`;
  },
  args: modalFooterArgs,
  argTypes: modalFooterArgTypes,
  parameters: {
    actions: {
      handles: modalFooterEvents
    }
  }
}`,...n.parameters?.docs?.source}}};const B=["Default","WithImage","Modal","ModalHeader","ModalFooter"],H=Object.freeze(Object.defineProperty({__proto__:null,Default:t,Modal:a,ModalFooter:n,ModalHeader:r,WithImage:o,__namedExportsOrder:B,default:T},Symbol.toStringTag,{value:"Module"}));export{t as D,H as M,o as W};
