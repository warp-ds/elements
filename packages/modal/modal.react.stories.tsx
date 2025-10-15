import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Modal, ModalFooter, ModalHeader } from "./react";
import { Button } from '../button/react';

export default {
  title: 'Overlays/Modal',
  component: Modal,
} satisfies Meta<typeof Modal>;

export type Story = StoryObj<typeof Modal>;

export const Default: StoryObj = {
  args: {},
  render() {
    const [open, setOpen] = useState(false);
    const [back, setBack] = useState(false);
    return (
      <>
      <Button variant="primary" onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal show={open} id="example-modal-one">
        <ModalHeader slot="header" title="An example modal" back={back}></ModalHeader>
        <div slot="content">
          <div style={{ marginBottom: "12px" }}>
            <Button id="modal-toggle-back-one" variant="utility" small onClick={() => setBack(!back)}>Toggle back button</Button>
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
        <ModalFooter slot="footer">
          <Button variant="primary" id="modal-close-button-one" onClick={() => setOpen(false)}>OK</Button>
        </ModalFooter>
      </Modal>
      </>
    );
  },
};
