## Usage

To creat a modal you need three different components:

- `<w-modal>` - the parent component.
- `<w-modal-header>` - for the title and close button.
- `<w-modal-footer>` - for the actions such as Cancel and Confirm.

### JavaScript API

To open and close the modal using JavaScript, get a reference to the `<w-modal>` and call `open()` and `close()` respectively.


<elements-example>

```html
<w-button data-testid="js-example-show" aria-haspopup="dialog">Show me some lyrics</w-button>
<w-modal data-testid="js-example-modal">
    <w-modal-header slot="header" title="Triumph by Wu Tang Clan"></w-modal-header>
    <div slot="content">
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
    </div>
    <w-modal-footer slot="footer">
        <div class="flex gap-16">
            <w-button variant="secondary" data-testid="js-example-cancel">Cancel</w-button>
            <w-button variant="primary" data-testid="js-example-confirm">Confirm</w-button>
        </div>
    </w-modal-footer>
</w-modal>

<script>
const modal = document.querySelector('w-modal[data-testid="js-example-modal"]');

const openButton = document.querySelector('w-button[data-testid="js-example-show"]');
const confirmButton = document.querySelector('w-button[data-testid="js-example-confirm"]');
const cancelButton = document.querySelector('w-button[data-testid="js-example-cancel"]');

openButton.addEventListener('click', () => modal.open());
confirmButton.addEventListener('click', () => modal.close());
cancelButton.addEventListener('click', () => modal.close());
</script>
```

</elements-example>

### Invoker Commands

In [supported browsers](https://caniuse.com/?search=commandfor) (or [if you include the polyfill](https://github.com/keithamus/invokers-polyfill)) you can use the [Invoker Commands API](https://developer.mozilla.org/en-US/docs/Web/API/Invoker_Commands_API) to potentially skip JavaScript alltogether.

The commands you need for `<w-modal>` are:

- `--show-modal`
- `--close`
- `--confirm`

<elements-example>

```html
<w-button commandfor="invoker-modal" command="--show-modal" aria-haspopup="dialog">Show me some lyrics</w-button>
<w-modal id="invoker-modal">
    <w-modal-header slot="header" title="Triumph by Wu Tang Clan"></w-modal-header>
    <div slot="content">
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
    </div>
    <w-modal-footer slot="footer">
        <div class="flex gap-16">
            <w-button variant="secondary" commandfor="invoker-modal" command="--close">Dope</w-button>
            <w-button variant="primary" commandfor="invoker-modal" command="--confirm">Dope</w-button>
        </div>
    </w-modal-footer>
</w-modal>
```

</elements-example>

Since `--confirm` and `--cancel` both close the modal, but mean different things, listen for the `command` event on `w-modal` to do stuff on the `--confirm` event, such as submit a response to an API. You can listen for the other commands as well (including `--show-modal`) if you need to add tracking events for example.

```ts
const modal = document.querySelector('w-modal');

modal.addEventListener('command', function (event: CommandEvent) {
    if (event.command === '--confirm') {
        console.log("Doing stuff!");
    }
});
```
