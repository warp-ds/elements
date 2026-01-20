import { spread } from '@open-wc/lit-helpers';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { getStorybookHelpers } from '@wc-toolkit/storybook-helpers';
import { html } from 'lit';

import { prespread } from '../../.storybook/utilities.js';

import type { WarpModal, WarpModalFooter, WarpModalHeader } from './index.js';
import type { ModalMain } from './modal.js';
import type { ModalHeader as ModalHeaderType } from '../modal-header/modal-header.js';
import './modal.js';
import '../modal-header/modal-header.js';
import '../modal-footer/modal-footer.js';

const { events: modalEvents, args: modalArgs, argTypes: modalArgTypes } = getStorybookHelpers<WarpModal>('w-modal');
const {
  events: modalHeaderEvents,
  args: modalHeaderArgs,
  argTypes: modalHeaderArgTypes,
} = getStorybookHelpers<WarpModalHeader>('w-modal-header');
const {
  events: modalFooterEvents,
  args: modalFooterArgs,
  argTypes: modalFooterArgTypes,
} = getStorybookHelpers<WarpModalFooter>('w-modal-footer');

const meta: Meta = {
  title: 'Overlays/Modal',
};

export default meta;

export const Default: StoryObj = {
  args: {},
  render() {
    return html`
      <w-button id="modal-open-button-one" aria-haspopup="dialog"
        >Open a modal</w-button
      >
      <w-modal id="example-modal-one">
        <w-modal-header
          id="modal-header-one"
          slot="header"
          title="An example modal"
        ></w-modal-header>
        <div slot="content">
          <h2 class="h4 mb-16">Triumph by Wu Tang Clan</h2>
          <div style="margin-bottom: 12px">
            <w-button id="modal-toggle-back-one" variant="utility" small
              >Toggle back button</w-button
            >
          </div>
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
            <w-button variant="secondary" id="modal-close-button-cancel"
              >Cancel</w-button
            >
            <w-button variant="primary" id="modal-close-button-one"
              >Confirm</w-button
            >
          </div>
        </w-modal-footer>
      </w-modal>
    `;
  },
  play: async ({ canvasElement }) => {
    await Promise.all([
      customElements.whenDefined('w-button'),
      customElements.whenDefined('w-modal'),
      customElements.whenDefined('w-modal-header'),
      customElements.whenDefined('w-modal-footer'),
    ]);

    const openButton = canvasElement.querySelector('#modal-open-button-one');
    const closeButton = canvasElement.querySelector('#modal-close-button-one');
    const toggleBackButton = canvasElement.querySelector('#modal-toggle-back-one');
    const cancelButton = canvasElement.querySelector('#modal-close-button-cancel');
    const modal: ModalMain = canvasElement.querySelector('#example-modal-one');
    const modalHeader: ModalHeaderType = canvasElement.querySelector('#modal-header-one');

    if (openButton && modal) {
      openButton.addEventListener('click', () => modal.open());
    }
    if (closeButton && modal) {
      closeButton.addEventListener('click', () => modal.close());
    }
    if (cancelButton && modal) {
      cancelButton.addEventListener('click', () => modal.close());
    }
    if (toggleBackButton && modalHeader) {
      toggleBackButton.addEventListener('click', () => {
        modalHeader.back = !modalHeader.back;
      });
    }
  },
  parameters: {
    docs: {
      story: {
        autoplay: true,
      },
    },
  },
};

export const WithImage: StoryObj = {
  args: {},
  render() {
    return html`
      <w-button id="modal-open-button-two" aria-haspopup="dialog"
        >Open a modal</w-button
      >
      <w-modal id="example-modal-two" style="--w-s-color-icon: var(--w-s-color-icon-inverted)">
        <w-modal-header slot="header" title="Look a doggo!">
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
    `;
  },
  play: async ({ canvasElement }) => {
    await Promise.all([
      customElements.whenDefined('w-button'),
      customElements.whenDefined('w-modal'),
      customElements.whenDefined('w-modal-header'),
      customElements.whenDefined('w-modal-footer'),
    ]);

    const openButton = canvasElement.querySelector('#modal-open-button-two');
    const closeButton = canvasElement.querySelector('#modal-close-button-two');
    const modal: ModalMain = canvasElement.querySelector('#example-modal-two');

    if (openButton && modal) {
      openButton.addEventListener('click', () => modal.open());
    }
    if (closeButton && modal) {
      closeButton.addEventListener('click', () => modal.close());
    }
  },
  parameters: {
    docs: {
      story: {
        autoplay: true,
      },
    },
  },
};

export const Modal: StoryObj<typeof modalArgs> = {
  render(args) {
    return html`
      <p>
        This is here to document attributes. See the Default example for a
        complete usage example.
      </p>
      <w-modal ${spread(prespread(args))}></w-modal>
    `;
  },
  args: modalArgs,
  argTypes: modalArgTypes,
  parameters: {
    actions: {
      handles: modalEvents,
    },
  },
};

export const ModalHeader: StoryObj<typeof modalHeaderArgs> = {
  render(args) {
    return html`
      <p>
        This is here to document attributes. See the Default example for a
        complete usage example.
      </p>
      <w-modal-header ${spread(prespread(args))}></w-modal-header>
    `;
  },
  args: modalHeaderArgs,
  argTypes: modalHeaderArgTypes,
  parameters: {
    actions: {
      handles: modalHeaderEvents,
    },
  },
};

export const ModalFooter: StoryObj<typeof modalFooterArgs> = {
  render(args) {
    return html`
      <p>
        This is here to document attributes. See the Default example for a
        complete usage example.
      </p>
      <w-modal-footer ${spread(prespread(args))}></w-modal-footer>
    `;
  },
  args: modalFooterArgs,
  argTypes: modalFooterArgTypes,
  parameters: {
    actions: {
      handles: modalFooterEvents,
    },
  },
};
