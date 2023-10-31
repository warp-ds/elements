// /* eslint-disable no-undef */
import tap, { test, beforeEach, teardown } from 'tap';
import { chromium } from 'playwright';
import { addContentToPage } from '../../tests/utils/index.js';

tap.before(async () => {
  const browser = await chromium.launch({ headless: true });
  tap.context.browser = browser;
});

beforeEach(async (t) => {
  const { browser } = t.context;
  const context = await browser.newContext();
  t.context.page = await context.newPage();
});

teardown(async () => {
  const { browser } = tap.context;
  browser.close();
});

test('Text field component with a value attribute is rendered on the page', async (t) => {
  // GIVEN: A box component
  const component = `
    <w-textfield value="this is a textfield"></w-textfield>
  `;

  // WHEN: the component is added to the page
  const page = await addContentToPage({
    page: t.context.page,
    content: component,
  });

  // THEN: the component is visible in the DOM
  const locator = await page.locator('w-textfield');
  t.equal(await locator.getAttribute('value'), 'this is a textfield', 'value should be defined');
});

test('Text field number component with a min and max is rendered on the page', async (t) => {
  // GIVEN: A box component
  const component = `
    <w-textfield min="10" max="20" value="15" type="number"></w-textfield>
    <script>
      const el = document.querySelector('w-textfield')
      el.addEventListener('change', (e) => {
        el.value = e.detail.value;
      });
    </script>
  `;

  // WHEN: the component is added to the page
  const page = await addContentToPage({
    page: t.context.page,
    content: component,
  });

  // THEN: the component is visible in the DOM
  let locator = await page.locator('input');
  await locator.click();
  await locator.fill('10');
  await page.keyboard.press('Tab');
  t.equal(await locator.inputValue(), '10', 'value should be 10');

  await page.locator('w-textfield');
  t.equal(await locator.getAttribute('value'), '10', 'value should be 10');
});

test('Text field component with a label is rendered on the page', async (t) => {
  // GIVEN: A box component
  const component = `
    <w-textfield label="Name of a person"></w-textfield>
  `;

  // WHEN: the component is added to the page
  const page = await addContentToPage({
    page: t.context.page,
    content: component,
  });

  // THEN: the component is visible in the DOM
  let locator = await page.locator('text=Name of a person');
  t.equal(await locator.isVisible(), true, 'Label should be visible');
});

test('Text field component with a label and help text is rendered on the page', async (t) => {
  // GIVEN: A box component
  const component = `
    <w-textfield 
      label="Telefonnummer"
      help-text="Vil kun brukes til brukerverifisering">
    </w-textfield>
  `;

  // WHEN: the component is added to the page
  const page = await addContentToPage({
    page: t.context.page,
    content: component,
  });

  // THEN: the component is visible in the DOM
  t.equal(await page.locator('text=Telefonnummer').isVisible(), true, 'Label should be visible');
  t.equal(await page.locator('text=Vil kun brukes til brukerverifisering').isVisible(), true, 'Help text should be visible');
});

test('Invalid component with label and help text is rendered on the page', async (t) => {
  // GIVEN: A box component
  const component = `
    <w-textfield 
      label="E-post"
      invalid
      help-text="Ugyldig e-post">
    </w-textfield>
  `;

  // WHEN: the component is added to the page
  const page = await addContentToPage({
    page: t.context.page,
    content: component,
  });

  // THEN: the component is visible in the DOM
  t.equal(await page.locator('text=Ugyldig e-post').isVisible(), true, 'Help text should be visible');
  t.equal(await page.locator('input').getAttribute('aria-invalid'), 'true', 'Aria invalid should be set');
});

test('Invalid component with label and help text is rendered on the page', async (t) => {
  // GIVEN: A box component
  const component = `
    <w-textfield label="E-post" placeholder="puse@finn.no"></w-textfield>
  `;

  // WHEN: the component is added to the page
  const page = await addContentToPage({
    page: t.context.page,
    content: component,
  });

  // THEN: the component is visible in the DOM
  t.equal(await page.locator('text=E-post').isVisible(), true, 'Help text should be visible');
  t.equal(await page.locator('input').getAttribute('placeholder'), 'puse@finn.no', 'Placeholder text should be visible');
});

test('Disabled component with label and value is rendered on the page', async (t) => {
  // GIVEN: A box component
  const component = `
    <w-textfield label="E-post" disabled value="puse@finn.no"></w-textfield>
  `;

  // WHEN: the component is added to the page
  const page = await addContentToPage({
    page: t.context.page,
    content: component,
  });

  // THEN: the component is visible in the DOM
  t.equal(await page.locator('text=E-post').isVisible(), true, 'Help text should be visible');
  t.equal(await page.locator('input').getAttribute('disabled'), '', 'Disabled should be set on input');
});

test('Component with prefix is rendered on the page', async (t) => {
  // GIVEN: A box component
  const component = `
    <w-textfield label="Price" placeholder="1 000 000">
      <w-affix slot="prefix" label="kr"></w-affix>
    </w-textfield>
  `;

  // WHEN: the component is added to the page
  const page = await addContentToPage({
    page: t.context.page,
    content: component,
  });

  // THEN: the component is visible in the DOM
  t.equal(await page.locator('text=kr').isVisible(), true, 'Prefix text should be visible');
});

test('Component with search suffix is rendered on the page', async (t) => {
  // GIVEN: A box component
  const component = `
    <w-textfield label="Price" placeholder="1 000 000">
      <w-affix slot="suffix" search></w-affix>
    </w-textfield>
  `;

  // WHEN: the component is added to the page
  const page = await addContentToPage({
    page: t.context.page,
    content: component,
  });

  // THEN: the component is visible in the DOM
  t.equal(await page.locator('button[type=submit]').isVisible(), true, 'Suffix search button should be visible');
});

test('Component with clear suffix is rendered on the page', async (t) => {
  // GIVEN: A box component
  const component = `
    <w-textfield label="Price" placeholder="1 000 000">
      <w-affix slot="suffix" clear></w-affix>
    </w-textfield>
  `;

  // WHEN: the component is added to the page
  const page = await addContentToPage({
    page: t.context.page,
    content: component,
  });

  // THEN: the component is visible in the DOM
  t.equal(await page.locator('button[type=reset]').isVisible(), true, 'Suffix clear button should be visible');
});

test('Component with prefix label and clear suffix is rendered on the page', async (t) => {
  // GIVEN: A box component
  const component = `
    <w-textfield label="Price" placeholder="1 000 000">
      <w-affix slot="prefix" label="kr"></w-affix>
      <w-affix slot="suffix" clear></w-affix>
    </w-textfield>
  `;

  // WHEN: the component is added to the page
  const page = await addContentToPage({
    page: t.context.page,
    content: component,
  });

  // THEN: the component is visible in the DOM
  t.equal(await page.locator('text=kr').isVisible(), true, 'Prefix text should be visible');
  t.equal(await page.locator('button[type=reset]').isVisible(), true, 'Suffix clear button should be visible');
});

test('Affix component button events bubble', async (t) => {
  // GIVEN: A box component
  const component = `
    <w-textfield label="Price" placeholder="1 000 000">
      <w-affix slot="suffix" clear></w-affix>
    </w-textfield>
    <script>
      const el = document.querySelector('w-affix');
      el.addEventListener('click', (e) => {
        el.setAttribute('hasBeenClicked', true);
      });
    </script>
  `;

  // WHEN: the component is added to the page
  const page = await addContentToPage({
    page: t.context.page,
    content: component,
  });

  // THEN: the component is visible in the DOM
  const loc = await page.locator('button[type=reset]');
  await loc.click();
  t.equal(await page.locator('w-affix').getAttribute('hasBeenClicked'), 'true', 'Clicked element should have bubbled to the parent');
});
