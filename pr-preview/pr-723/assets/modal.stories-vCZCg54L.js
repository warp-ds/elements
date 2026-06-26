import{a as e,i as t}from"./preload-helper-xPQekRTU.js";import{Ht as n,Lt as r,M as i,N as a}from"./iframe-C-gIJc8-.js";import{a as o,n as s,r as c,t as l}from"./utilities-B5i-q1bD.js";import{t as u}from"./button-BfY3a027.js";import{n as d,r as f,t as p}from"./modal-footer-gDWvPhTT.js";var m=e({Default:()=>T,InvokerCommands:()=>E,Modal:()=>O,ModalFooter:()=>A,ModalHeader:()=>k,WithImage:()=>D,__namedExportsOrder:()=>j,default:()=>w}),h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M=t((()=>{c(),a(),r(),l(),u(),f(),d(),p(),{events:h,args:g,argTypes:_}=i(`w-modal`),{events:v,args:y,argTypes:b}=i(`w-modal-header`),{events:x,args:S,argTypes:C}=i(`w-modal-footer`),w={title:`Overlays/Modal`},T={args:{show:!1,back:!1,noClose:!1},render({show:e,back:t,noClose:r}){return n`
            <w-button id="modal-open-button-one" aria-haspopup="dialog">
                Open a modal
            </w-button>
            <w-modal id="example-modal-one" ?show="${e}">
                <w-modal-header
                    id="modal-header-one"
                    slot="header"
                    title="An example modal"
                    ?back="${t}"
                    ?no-close="${r}"
                ></w-modal-header>
                <div slot="content">
                    <p class="t4">Triumph by Wu Tang Clan</p>
                    <p>
                        I bomb atomically, Socrates' philosophies and hypotheses Can't
                        define how I be droppin' these mockeries Lyrically perform armed
                        robbery Flee with the lottery, possibly they spotted me
                        Battle-scarred Shogun, explosion when my pen hits tremendous
                        Ultra-violet shine blind forensics I inspect view through the future
                        see millennium Killa Beez sold fifty gold, sixty platinum Shackling
                        the masses with drastic rap tactics Graphic displays melt the steel
                        like blacksmiths Black Wu jackets, Queen Beez ease the guns in
                        Rumble with patrolmen, tear gas laced the function Heads by the
                        score take flight, incite a war Chicks hit the floor, diehard fans
                        demand more Behold the bold soldier, control the globe slowly
                        Proceeds to blow, swingin' swords like Shinobi Stomp grounds and
                        pound footprints in solid rock Wu got it locked, performin' live on
                        your hottest block
                    </p>
                    <p>
                        First I'm gonna getcha, once I gotcha, I gat-cha, You could never
                        capture the Method Man's stature. So uhh, tic toc and keep ticking,
                        while I get you flipping off what I'm kicking. Yes, the rhythm, the
                        rebel, alone in my level heat it up past the boiling point of metal.
                        Shackling the masses with drastic rap tactics, graphic displays melt
                        the steel like blacksmiths. My beats travel like a vortex through
                        your spine, to the top of your cerebral cortex. Yes, the rhythm, the
                        rebel, alone in my level heat it up past the boiling point of metal.
                        Small change, they putting shame in the game. Murderous material,
                        made by a madman, it's the mic wrecker, Inspector, bad man.
                    </p>
                    <p>
                        My beats travel like a vortex through your spine, to the top of your
                        cerebral cortex. The rebel, I make more noise than heavy metal. Now,
                        lo and behold, another deadly episode, bound to catch another charge
                        when I explode Perpendicular to the square we stay in gold like
                        Flair, escape from your dragon's lair in particular. Handcuffed in
                        the back of a bus, forty of us. Slammin a hype verse til ya head
                        burst. Handcuffed in the back of a bus, forty of us. I bomb
                        atomically Socrates' philosophies and hypothesis can't define how I
                        be dropping these mockeries. I be that insane one from the psycho
                        ward, I'm on the trigger, plus I got the Wu-Tang sword. Step through
                        your section with the Force like Luke Skywalker, rhyme author,
                        orchestrate mind torture.
                    </p>
                    <p>
                        It was the night before New Year's all through the projects, not a
                        handgun was silent, not even a Tec. I smoke on the mic like smoking
                        Joe Frazier, the hell raiser, raising hell with the flavor. The Wu
                        is comin thru, the outcome is critical, Muckin wit my style, is sort
                        of like a Miracle. We got stick-up kids, corrupt cops, and pop
                        rocks. Step through your section with the Force like Luke Skywalker,
                        rhyme author, orchestrate mind torture. Rae got it going on pal,
                        call me the rap assassinator, rhymes rugged and built like
                        Schwarzenegger.
                    </p>
                </div>
                <w-modal-footer slot="footer">
                    <w-button variant="secondary" id="modal-close-button-cancel">
                        Cancel
                    </w-button>
                    <w-button variant="primary" id="modal-close-button-one">
                        Confirm
                    </w-button>
                </w-modal-footer>
            </w-modal>
        `},play:async({canvasElement:e})=>{await Promise.all([customElements.whenDefined(`w-button`),customElements.whenDefined(`w-modal`),customElements.whenDefined(`w-modal-header`),customElements.whenDefined(`w-modal-footer`)]);let t=e.querySelector(`#modal-open-button-one`),n=e.querySelector(`#modal-close-button-one`),r=e.querySelector(`#modal-close-button-cancel`),i=e.querySelector(`#example-modal-one`);t&&i&&t.addEventListener(`click`,()=>i.open()),n&&i&&n.addEventListener(`click`,()=>i.close()),r&&i&&r.addEventListener(`click`,()=>i.close())},parameters:{docs:{story:{autoplay:!0}}}},E={args:{show:!1,back:!1,noClose:!1},render({show:e,back:t,noClose:r}){return n`
            <w-button
                commandfor="invoker-modal"
                command="--show-modal"
                aria-haspopup="dialog"
                >Open a modal</w-button
            >
            <w-modal id="invoker-modal" ?show="${e}">
                <w-modal-header
                    id="modal-header-one"
                    slot="header"
                    title="An example modal"
                    ?back="${t}"
                    ?no-close="${r}"
                ></w-modal-header>
                <div slot="content">
                    <p class="t4">Triumph by Wu Tang Clan</p>
                    <p>
                        I bomb atomically, Socrates' philosophies and hypotheses Can't
                        define how I be droppin' these mockeries Lyrically perform armed
                        robbery Flee with the lottery, possibly they spotted me
                        Battle-scarred Shogun, explosion when my pen hits tremendous
                        Ultra-violet shine blind forensics I inspect view through the future
                        see millennium Killa Beez sold fifty gold, sixty platinum Shackling
                        the masses with drastic rap tactics Graphic displays melt the steel
                        like blacksmiths Black Wu jackets, Queen Beez ease the guns in
                        Rumble with patrolmen, tear gas laced the function Heads by the
                        score take flight, incite a war Chicks hit the floor, diehard fans
                        demand more Behold the bold soldier, control the globe slowly
                        Proceeds to blow, swingin' swords like Shinobi Stomp grounds and
                        pound footprints in solid rock Wu got it locked, performin' live on
                        your hottest block
                    </p>
                    <p>
                        First I'm gonna getcha, once I gotcha, I gat-cha, You could never
                        capture the Method Man's stature. So uhh, tic toc and keep ticking,
                        while I get you flipping off what I'm kicking. Yes, the rhythm, the
                        rebel, alone in my level heat it up past the boiling point of metal.
                        Shackling the masses with drastic rap tactics, graphic displays melt
                        the steel like blacksmiths. My beats travel like a vortex through
                        your spine, to the top of your cerebral cortex. Yes, the rhythm, the
                        rebel, alone in my level heat it up past the boiling point of metal.
                        Small change, they putting shame in the game. Murderous material,
                        made by a madman, it's the mic wrecker, Inspector, bad man.
                    </p>
                    <p>
                        My beats travel like a vortex through your spine, to the top of your
                        cerebral cortex. The rebel, I make more noise than heavy metal. Now,
                        lo and behold, another deadly episode, bound to catch another charge
                        when I explode Perpendicular to the square we stay in gold like
                        Flair, escape from your dragon's lair in particular. Handcuffed in
                        the back of a bus, forty of us. Slammin a hype verse til ya head
                        burst. Handcuffed in the back of a bus, forty of us. I bomb
                        atomically Socrates' philosophies and hypothesis can't define how I
                        be dropping these mockeries. I be that insane one from the psycho
                        ward, I'm on the trigger, plus I got the Wu-Tang sword. Step through
                        your section with the Force like Luke Skywalker, rhyme author,
                        orchestrate mind torture.
                    </p>
                    <p>
                        It was the night before New Year's all through the projects, not a
                        handgun was silent, not even a Tec. I smoke on the mic like smoking
                        Joe Frazier, the hell raiser, raising hell with the flavor. The Wu
                        is comin thru, the outcome is critical, Muckin wit my style, is sort
                        of like a Miracle. We got stick-up kids, corrupt cops, and pop
                        rocks. Step through your section with the Force like Luke Skywalker,
                        rhyme author, orchestrate mind torture. Rae got it going on pal,
                        call me the rap assassinator, rhymes rugged and built like
                        Schwarzenegger.
                    </p>
                </div>
                <w-modal-footer slot="footer">
                    <div class="flex gap-16">
                        <w-button
                            variant="secondary"
                            commandfor="invoker-modal"
                            command="--close"
                            >Cancel</w-button
                        >
                        <w-button variant="primary" id="invoker-confirm">Confirm</w-button>
                    </div>
                </w-modal-footer>
            </w-modal>
        `},parameters:{docs:{story:{autoplay:!0}}}},D={args:{show:!1,noClose:!1},render({show:e,noClose:t}){return n`
            <w-button id="modal-open-button-two" aria-haspopup="dialog"
                >Open a modal</w-button
            >
            <w-modal id="example-modal-two" ?show="${e}">
                <w-modal-header
                    slot="header"
                    title="Look a doggo!"
                    ?no-close="${t}"
                >
                    <img
                        slot="top"
                        style="height: 256px; width: 100%; object-fit: cover;"
                        src="https://images.unsplash.com/photo-1534361960057-19889db9621e"
                        alt="A really nice dog"
                    />
                </w-modal-header>
                <div slot="content">
                    <p>
                        I bomb atomically, Socrates' philosophies and hypotheses Can't
                        define how I be droppin' these mockeries Lyrically perform armed
                        robbery Flee with the lottery, possibly they spotted me
                        Battle-scarred Shogun, explosion when my pen hits tremendous
                        Ultra-violet shine blind forensics I inspect view through the future
                        see millennium Killa Beez sold fifty gold, sixty platinum Shackling
                        the masses with drastic rap tactics Graphic displays melt the steel
                        like blacksmiths Black Wu jackets, Queen Beez ease the guns in
                        Rumble with patrolmen, tear gas laced the function Heads by the
                        score take flight, incite a war Chicks hit the floor, diehard fans
                        demand more Behold the bold soldier, control the globe slowly
                        Proceeds to blow, swingin' swords like Shinobi Stomp grounds and
                        pound footprints in solid rock Wu got it locked, performin' live on
                        your hottest block
                    </p>
                </div>
                <w-modal-footer slot="footer">
                    <w-button variant="primary" id="modal-close-button-two">OK</w-button>
                </w-modal-footer>
            </w-modal>
        `},play:async({canvasElement:e})=>{await Promise.all([customElements.whenDefined(`w-button`),customElements.whenDefined(`w-modal`),customElements.whenDefined(`w-modal-header`),customElements.whenDefined(`w-modal-footer`)]);let t=e.querySelector(`#modal-open-button-two`),n=e.querySelector(`#modal-close-button-two`),r=e.querySelector(`#example-modal-two`);t&&r&&t.addEventListener(`click`,()=>r.open()),n&&r&&n.addEventListener(`click`,()=>r.close())},parameters:{docs:{story:{autoplay:!0}}}},O={render(e){return n`
            <p>
                This is here to document attributes. See the Default example for a
                complete usage example.
            </p>
            <w-modal ${o(s(e))}></w-modal>
        `},args:g,argTypes:_,parameters:{actions:{handles:h}}},k={render(e){return n`
            <p>
                This is here to document attributes. See the Default example for a
                complete usage example.
            </p>
            <w-modal-header ${o(s(e))}></w-modal-header>
        `},args:y,argTypes:b,parameters:{actions:{handles:v}}},A={render(e){return n`
            <p>
                This is here to document attributes. See the Default example for a
                complete usage example.
            </p>
            <w-modal-footer ${o(s(e))}></w-modal-footer>
        `},args:S,argTypes:C,parameters:{actions:{handles:x}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    show: false,
    back: false,
    noClose: false
  },
  render({
    show,
    back,
    noClose
  }) {
    return html\`
            <w-button id="modal-open-button-one" aria-haspopup="dialog">
                Open a modal
            </w-button>
            <w-modal id="example-modal-one" ?show="\${show}">
                <w-modal-header
                    id="modal-header-one"
                    slot="header"
                    title="An example modal"
                    ?back="\${back}"
                    ?no-close="\${noClose}"
                ></w-modal-header>
                <div slot="content">
                    <p class="t4">Triumph by Wu Tang Clan</p>
                    <p>
                        I bomb atomically, Socrates' philosophies and hypotheses Can't
                        define how I be droppin' these mockeries Lyrically perform armed
                        robbery Flee with the lottery, possibly they spotted me
                        Battle-scarred Shogun, explosion when my pen hits tremendous
                        Ultra-violet shine blind forensics I inspect view through the future
                        see millennium Killa Beez sold fifty gold, sixty platinum Shackling
                        the masses with drastic rap tactics Graphic displays melt the steel
                        like blacksmiths Black Wu jackets, Queen Beez ease the guns in
                        Rumble with patrolmen, tear gas laced the function Heads by the
                        score take flight, incite a war Chicks hit the floor, diehard fans
                        demand more Behold the bold soldier, control the globe slowly
                        Proceeds to blow, swingin' swords like Shinobi Stomp grounds and
                        pound footprints in solid rock Wu got it locked, performin' live on
                        your hottest block
                    </p>
                    <p>
                        First I'm gonna getcha, once I gotcha, I gat-cha, You could never
                        capture the Method Man's stature. So uhh, tic toc and keep ticking,
                        while I get you flipping off what I'm kicking. Yes, the rhythm, the
                        rebel, alone in my level heat it up past the boiling point of metal.
                        Shackling the masses with drastic rap tactics, graphic displays melt
                        the steel like blacksmiths. My beats travel like a vortex through
                        your spine, to the top of your cerebral cortex. Yes, the rhythm, the
                        rebel, alone in my level heat it up past the boiling point of metal.
                        Small change, they putting shame in the game. Murderous material,
                        made by a madman, it's the mic wrecker, Inspector, bad man.
                    </p>
                    <p>
                        My beats travel like a vortex through your spine, to the top of your
                        cerebral cortex. The rebel, I make more noise than heavy metal. Now,
                        lo and behold, another deadly episode, bound to catch another charge
                        when I explode Perpendicular to the square we stay in gold like
                        Flair, escape from your dragon's lair in particular. Handcuffed in
                        the back of a bus, forty of us. Slammin a hype verse til ya head
                        burst. Handcuffed in the back of a bus, forty of us. I bomb
                        atomically Socrates' philosophies and hypothesis can't define how I
                        be dropping these mockeries. I be that insane one from the psycho
                        ward, I'm on the trigger, plus I got the Wu-Tang sword. Step through
                        your section with the Force like Luke Skywalker, rhyme author,
                        orchestrate mind torture.
                    </p>
                    <p>
                        It was the night before New Year's all through the projects, not a
                        handgun was silent, not even a Tec. I smoke on the mic like smoking
                        Joe Frazier, the hell raiser, raising hell with the flavor. The Wu
                        is comin thru, the outcome is critical, Muckin wit my style, is sort
                        of like a Miracle. We got stick-up kids, corrupt cops, and pop
                        rocks. Step through your section with the Force like Luke Skywalker,
                        rhyme author, orchestrate mind torture. Rae got it going on pal,
                        call me the rap assassinator, rhymes rugged and built like
                        Schwarzenegger.
                    </p>
                </div>
                <w-modal-footer slot="footer">
                    <w-button variant="secondary" id="modal-close-button-cancel">
                        Cancel
                    </w-button>
                    <w-button variant="primary" id="modal-close-button-one">
                        Confirm
                    </w-button>
                </w-modal-footer>
            </w-modal>
        \`;
  },
  play: async ({
    canvasElement
  }) => {
    await Promise.all([customElements.whenDefined("w-button"), customElements.whenDefined("w-modal"), customElements.whenDefined("w-modal-header"), customElements.whenDefined("w-modal-footer")]);
    const openButton = canvasElement.querySelector("#modal-open-button-one");
    const closeButton = canvasElement.querySelector("#modal-close-button-one");
    const cancelButton = canvasElement.querySelector("#modal-close-button-cancel");
    const modal = canvasElement.querySelector("#example-modal-one") as WarpModal;
    if (openButton && modal) {
      openButton.addEventListener("click", () => modal.open());
    }
    if (closeButton && modal) {
      closeButton.addEventListener("click", () => modal.close());
    }
    if (cancelButton && modal) {
      cancelButton.addEventListener("click", () => modal.close());
    }
  },
  parameters: {
    docs: {
      story: {
        autoplay: true
      }
    }
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    show: false,
    back: false,
    noClose: false
  },
  render({
    show,
    back,
    noClose
  }) {
    return html\`
            <w-button
                commandfor="invoker-modal"
                command="--show-modal"
                aria-haspopup="dialog"
                >Open a modal</w-button
            >
            <w-modal id="invoker-modal" ?show="\${show}">
                <w-modal-header
                    id="modal-header-one"
                    slot="header"
                    title="An example modal"
                    ?back="\${back}"
                    ?no-close="\${noClose}"
                ></w-modal-header>
                <div slot="content">
                    <p class="t4">Triumph by Wu Tang Clan</p>
                    <p>
                        I bomb atomically, Socrates' philosophies and hypotheses Can't
                        define how I be droppin' these mockeries Lyrically perform armed
                        robbery Flee with the lottery, possibly they spotted me
                        Battle-scarred Shogun, explosion when my pen hits tremendous
                        Ultra-violet shine blind forensics I inspect view through the future
                        see millennium Killa Beez sold fifty gold, sixty platinum Shackling
                        the masses with drastic rap tactics Graphic displays melt the steel
                        like blacksmiths Black Wu jackets, Queen Beez ease the guns in
                        Rumble with patrolmen, tear gas laced the function Heads by the
                        score take flight, incite a war Chicks hit the floor, diehard fans
                        demand more Behold the bold soldier, control the globe slowly
                        Proceeds to blow, swingin' swords like Shinobi Stomp grounds and
                        pound footprints in solid rock Wu got it locked, performin' live on
                        your hottest block
                    </p>
                    <p>
                        First I'm gonna getcha, once I gotcha, I gat-cha, You could never
                        capture the Method Man's stature. So uhh, tic toc and keep ticking,
                        while I get you flipping off what I'm kicking. Yes, the rhythm, the
                        rebel, alone in my level heat it up past the boiling point of metal.
                        Shackling the masses with drastic rap tactics, graphic displays melt
                        the steel like blacksmiths. My beats travel like a vortex through
                        your spine, to the top of your cerebral cortex. Yes, the rhythm, the
                        rebel, alone in my level heat it up past the boiling point of metal.
                        Small change, they putting shame in the game. Murderous material,
                        made by a madman, it's the mic wrecker, Inspector, bad man.
                    </p>
                    <p>
                        My beats travel like a vortex through your spine, to the top of your
                        cerebral cortex. The rebel, I make more noise than heavy metal. Now,
                        lo and behold, another deadly episode, bound to catch another charge
                        when I explode Perpendicular to the square we stay in gold like
                        Flair, escape from your dragon's lair in particular. Handcuffed in
                        the back of a bus, forty of us. Slammin a hype verse til ya head
                        burst. Handcuffed in the back of a bus, forty of us. I bomb
                        atomically Socrates' philosophies and hypothesis can't define how I
                        be dropping these mockeries. I be that insane one from the psycho
                        ward, I'm on the trigger, plus I got the Wu-Tang sword. Step through
                        your section with the Force like Luke Skywalker, rhyme author,
                        orchestrate mind torture.
                    </p>
                    <p>
                        It was the night before New Year's all through the projects, not a
                        handgun was silent, not even a Tec. I smoke on the mic like smoking
                        Joe Frazier, the hell raiser, raising hell with the flavor. The Wu
                        is comin thru, the outcome is critical, Muckin wit my style, is sort
                        of like a Miracle. We got stick-up kids, corrupt cops, and pop
                        rocks. Step through your section with the Force like Luke Skywalker,
                        rhyme author, orchestrate mind torture. Rae got it going on pal,
                        call me the rap assassinator, rhymes rugged and built like
                        Schwarzenegger.
                    </p>
                </div>
                <w-modal-footer slot="footer">
                    <div class="flex gap-16">
                        <w-button
                            variant="secondary"
                            commandfor="invoker-modal"
                            command="--close"
                            >Cancel</w-button
                        >
                        <w-button variant="primary" id="invoker-confirm">Confirm</w-button>
                    </div>
                </w-modal-footer>
            </w-modal>
        \`;
  },
  parameters: {
    docs: {
      story: {
        autoplay: true
      }
    }
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    show: false,
    noClose: false
  },
  render({
    show,
    noClose
  }) {
    return html\`
            <w-button id="modal-open-button-two" aria-haspopup="dialog"
                >Open a modal</w-button
            >
            <w-modal id="example-modal-two" ?show="\${show}">
                <w-modal-header
                    slot="header"
                    title="Look a doggo!"
                    ?no-close="\${noClose}"
                >
                    <img
                        slot="top"
                        style="height: 256px; width: 100%; object-fit: cover;"
                        src="https://images.unsplash.com/photo-1534361960057-19889db9621e"
                        alt="A really nice dog"
                    />
                </w-modal-header>
                <div slot="content">
                    <p>
                        I bomb atomically, Socrates' philosophies and hypotheses Can't
                        define how I be droppin' these mockeries Lyrically perform armed
                        robbery Flee with the lottery, possibly they spotted me
                        Battle-scarred Shogun, explosion when my pen hits tremendous
                        Ultra-violet shine blind forensics I inspect view through the future
                        see millennium Killa Beez sold fifty gold, sixty platinum Shackling
                        the masses with drastic rap tactics Graphic displays melt the steel
                        like blacksmiths Black Wu jackets, Queen Beez ease the guns in
                        Rumble with patrolmen, tear gas laced the function Heads by the
                        score take flight, incite a war Chicks hit the floor, diehard fans
                        demand more Behold the bold soldier, control the globe slowly
                        Proceeds to blow, swingin' swords like Shinobi Stomp grounds and
                        pound footprints in solid rock Wu got it locked, performin' live on
                        your hottest block
                    </p>
                </div>
                <w-modal-footer slot="footer">
                    <w-button variant="primary" id="modal-close-button-two">OK</w-button>
                </w-modal-footer>
            </w-modal>
        \`;
  },
  play: async ({
    canvasElement
  }) => {
    await Promise.all([customElements.whenDefined("w-button"), customElements.whenDefined("w-modal"), customElements.whenDefined("w-modal-header"), customElements.whenDefined("w-modal-footer")]);
    const openButton = canvasElement.querySelector("#modal-open-button-two");
    const closeButton = canvasElement.querySelector("#modal-close-button-two");
    const modal = canvasElement.querySelector("#example-modal-two") as WarpModal;
    if (openButton && modal) {
      openButton.addEventListener("click", () => modal.open());
    }
    if (closeButton && modal) {
      closeButton.addEventListener("click", () => modal.close());
    }
  },
  parameters: {
    docs: {
      story: {
        autoplay: true
      }
    }
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render(args) {
    return html\`
            <p>
                This is here to document attributes. See the Default example for a
                complete usage example.
            </p>
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render(args) {
    return html\`
            <p>
                This is here to document attributes. See the Default example for a
                complete usage example.
            </p>
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render(args) {
    return html\`
            <p>
                This is here to document attributes. See the Default example for a
                complete usage example.
            </p>
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
}`,...A.parameters?.docs?.source}}},j=[`Default`,`InvokerCommands`,`WithImage`,`Modal`,`ModalHeader`,`ModalFooter`]}));M();export{T as Default,E as InvokerCommands,O as Modal,A as ModalFooter,k as ModalHeader,D as WithImage,j as __namedExportsOrder,w as default,m as n,M as t};