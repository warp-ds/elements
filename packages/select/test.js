import { chromium } from 'playwright';
import tap, { test, beforeEach, teardown } from 'tap';

import { addContentToPage } from '../../tests/utils/index.js';

const formatHTML = (string) =>
  string
    .trim()
    // remove html comments
    .replace(/<!--.*?-->/g, '');

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

test('Select component with no attributes is rendered on the page', async (t) => {
  // GIVEN: A button component
  const component = `
    <w-select>
      <option>First option</option>
      <option>Second option</option>
    </w-select>
  `;

  // WHEN: the component is added to the page
  const page = await addContentToPage({
    page: t.context.page,
    content: component,
  });

  // THEN: the component is visible in the DOM
  const locator = await page.locator('w-select select');

  t.matchSnapshot(formatHTML(await locator.innerHTML()));
});

test('Select renders label', async (t) => {
  // GIVEN: A button component
  const component = `
    <w-select id="withlabel" label="Options">
      <option>First option</option>
      <option>Second option</option>
    </w-select>
  `;

  // WHEN: the component is added to the page
  const page = await addContentToPage({
    page: t.context.page,
    content: component,
  });

  // THEN: the component is visible in the DOM
  const locator = await page.locator('w-select .input');

  t.matchSnapshot(formatHTML(await locator.innerHTML()));
});

test('Select renders with hint', async (t) => {
  // GIVEN: A button component
  const component = `
      <w-select id="hello" hint="Hello" always>
        <option>First option</option>
        <option>Second option</option>
      </w-select>
    `;

  // WHEN: the component is added to the page
  const page = await addContentToPage({
    page: t.context.page,
    content: component,
  });

  // THEN: the component is visible in the DOM
  const locator = await page.locator('w-select .input');

  t.matchSnapshot(formatHTML(await locator.innerHTML()));
});

test('Select renders with error', async (t) => {
  // GIVEN: A button component
  const component = `
        <w-select id="hello" hint="Something went wrong" invalid>
          <option>First option</option>
          <option>Second option</option>
        </w-select>
      `;

  // WHEN: the component is added to the page
  const page = await addContentToPage({
    page: t.context.page,
    content: component,
  });

  // THEN: the component is visible in the DOM
  const locator = await page.locator('w-select .input');

  t.matchSnapshot(formatHTML(await locator.innerHTML()));
});

test('Select renders with autofocus', async (t) => {
  // GIVEN: A button component
  const component = `
        <w-select id="hello" auto-focus>
          <option>First option</option>
          <option>Second option</option>
        </w-select>
      `;

  // WHEN: the component is added to the page
  const page = await addContentToPage({
    page: t.context.page,
    content: component,
  });

  // THEN: the component is visible in the DOM
  const locator = await page.locator('w-select');

  t.equal(await locator.evaluate((el) => document.activeElement === el), true, 'Select should be focused on render');
});
