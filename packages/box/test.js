/* eslint-disable no-undef */
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

test('Box component with no attributes is rendered on the page', async (t) => {
  // GIVEN: A box component
  const component = `
    <f-box>
      <p>This is a box</p>
    </f-box>
  `;

  // WHEN: the component is added to the page
  const page = await addContentToPage({
    page: t.context.page,
    content: component,
  });

  // THEN: the component is visible in the DOM
  const locator = await page.locator('f-box');
  t.equal((await locator.innerHTML()).trim(), '<p>This is a box</p>', 'HTML should be rendered');
  t.equal(await locator.getAttribute('bleed'), null, 'Bleed attribute should be null');
  t.equal(await locator.getAttribute('bordered'), null, 'Bordered attribute should be null');
  t.equal(await locator.getAttribute('info'), null, 'Info attribute should be null');
  t.equal(await locator.getAttribute('neutral'), null, 'Neutral attribute should be null');
});

test('Box component with bordered attribute', async (t) => {
  // GIVEN: A box component
  const component = `
    <f-box bordered>
      <p>This is a box</p>
    </f-box>
  `;

  // WHEN: the component is added to the page
  const page = await addContentToPage({
    page: t.context.page,
    content: component,
  });

  // THEN: the component is visible in the DOM
  const locator = await page.locator('f-box');
  t.equal(await locator.evaluate((el) => el.bordered), true, 'Bordered property should be true');
  t.equal(await locator.getAttribute('bordered'), '', 'Bordered attribute should be set');
  t.equal(await locator.getAttribute('info'), null, 'Info attribute should be null');
  t.equal(await locator.getAttribute('neutral'), null, 'Neutral attribute should be null');
  t.equal(await locator.getAttribute('bleed'), null, 'Bleed attribute should be null');
});

test('Box component with info attribute', async (t) => {
  // GIVEN: A box component
  const component = `
    <f-box info>
      <p>This is a box</p>
    </f-box>
  `;

  // WHEN: the component is added to the page
  const page = await addContentToPage({
    page: t.context.page,
    content: component,
  });

  // THEN: the component is visible in the DOM
  const locator = await page.locator('f-box');
  t.equal(await locator.evaluate((el) => el.info), true, 'Info property should be true');
  t.equal(await locator.getAttribute('info'), '', 'Info attribute should be set');
});

test('Box component with neutral attribute', async (t) => {
  // GIVEN: A box component
  const component = `
    <f-box neutral>
      <p>This is a box</p>
    </f-box>
  `;

  // WHEN: the component is added to the page
  const page = await addContentToPage({
    page: t.context.page,
    content: component,
  });

  // THEN: the component is visible in the DOM
  const locator = await page.locator('f-box');
  t.equal(await locator.evaluate((el) => el.neutral), true, 'Neutral property should be true');
  t.equal(await locator.getAttribute('neutral'), '', 'Neutral attribute should be set');
});

test('Box component with bleed attribute', async (t) => {
  // GIVEN: A box component
  const component = `
    <f-box bleed>
      <p>This is a box</p>
    </f-box>
  `;

  // WHEN: the component is added to the page
  const page = await addContentToPage({
    page: t.context.page,
    content: component,
  });

  // THEN: the component is visible in the DOM
  const locator = await page.locator('f-box');
  t.equal(await locator.evaluate((el) => el.bleed), true, 'Bleed property should be true');
  t.equal(await locator.getAttribute('bleed'), '', 'Bleed attribute should be set');
});

test('Box component with paragraph child elements', async (t) => {
  // GIVEN: A component with 3 paragraphs
  const component = `
    <f-box>
      <p>Paragraph 1</p>
      <p id="second">Paragraph 2</p>
      <p id="last">Paragraph 3</p>
    </f-box>
  `;

  // WHEN: the component is added to the page
  const page = await addContentToPage({
    page: t.context.page,
    content: component,
  });

  // THEN: there should be three paragraphs in the DOM
  t.equal(await page.locator('f-box p').count(), 3, '3 p tags should be present');
  t.match(
    await page.innerText(':nth-match(f-box p, 1)'),
    'Paragraph 1',
    'The first text should be "Paragraph 1"',
  );
  t.match(
    await page.innerText(':nth-match(f-box p, 3)'),
    'Paragraph 3',
    'The third text should be "Paragraph 3"',
  );

  const secondElement = await page.locator('#second');
  const lastElement = await page.locator('#last');

  t.match(
    await lastElement.evaluate((el) => {
      return window.getComputedStyle(el).getPropertyValue('margin-bottom');
    }),
    '0px',
    'Bottom margin of last paragraph should be 0px',
  );

  t.match(
    await secondElement.evaluate((el) => {
      return window.getComputedStyle(el).getPropertyValue('margin-bottom');
    }),
    '8px',
    'Bottom margin of second paragraph should be 8px',
  );
});
