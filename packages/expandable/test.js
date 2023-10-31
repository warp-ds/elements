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

test('Expandable component with no attributes is rendered on the page', async (t) => {
  // GIVEN: An expandable component
  const component = `
    <w-expandable>
      <p>This is an expandable element</p>
    </w-expandable>
  `;

  // WHEN: the component is added to the page
  const page = await addContentToPage({
    page: t.context.page,
    content: component,
  });

  // THEN: the component is visible in the DOM
  const locator = await page.locator('w-expandable');
  t.equal((await locator.innerHTML()).trim(), '<p>This is an expandable element</p>', 'HTML should be rendered');
  t.equal(await locator.getAttribute('info'), null, '"info" attribute should be null');
  t.equal(await locator.evaluate((el) => el.info), false, '"info" property should default to false');
  t.equal(await locator.getAttribute('box'), null, '"box" attribute should be null');
  t.equal(await locator.evaluate((el) => el.box), false, '"box" property should default to false');
  t.equal(await locator.evaluate((el) => el.bleed), false, '"bleed" property should default to false');
  t.equal(await locator.getAttribute('animated'), null, '"animated" attribute should be null');
  t.equal(await locator.evaluate((el) => el.animated), false, '"animated" property should default to false');
  t.equal(await locator.getAttribute('no-chevron'), null, '"no-chevron" attribute should be null');
  t.equal(await locator.evaluate((el) => el.noChevron), false, '"noChevron" property should default to false');
  t.equal(await locator.evaluate((el) => el.expanded), false, '"expanded" property should default to false');
});

test('Expandable component with info & expanded attribute is rendered on the page', async (t) => {
  const component = `
    <w-expandable info expanded>
      <p>This is an expandable element</p>
    </w-expandable>
  `;

  const page = await addContentToPage({
    page: t.context.page,
    content: component,
  });

  const locator = await page.locator('w-expandable');
  t.equal(await locator.evaluate((el) => el.info), true, '"info" property should be true');
  t.equal(await locator.evaluate((el) => el.expanded), true, '"expanded" property should be true');
});

test('Expandable component with box & title attribute is rendered on the page', async (t) => {
  const component = `
    <w-expandable box title="toggle">
      <p>This is an expandable element</p>
    </w-expandable>
  `;

  const page = await addContentToPage({
    page: t.context.page,
    content: component,
  });

  const locator = await page.locator('w-expandable');
  t.equal(await locator.evaluate((el) => el.box), true, '"box" property should be true');
  t.equal(await locator.evaluate((el) => el.title), 'toggle', '"title" property should be "toggle"');
});

test('Animated expandable component is rendered on the page', async (t) => {
  const component = `
    <w-expandable animated title="toggle">
      <p>This is an expandable element</p>
    </w-expandable>
  `;

  const page = await addContentToPage({
    page: t.context.page,
    content: component,
  });

  const locator = await page.locator('w-expandable');
  t.equal(await locator.evaluate((el) => el.animated), true, '"animated" property should be true');
});

test('Animated expandable component with custom title is rendered on the page', async (t) => {
  const component = `
    <w-expandable animated>
      <div slot="title" class="flex flex-row items-center">
        <w-icon-bag-16></w-icon-bag-16>
        <p class="ml-8 mb-0">This is a title with an icon</p>
      </div>
      <p>This is an expandable element</p>
    </w-expandable>
  `;

  const page = await addContentToPage({
    page: t.context.page,
    content: component,
  });

  const locator = await page.locator('w-expandable');

  t.equal(await locator.evaluate((el) => el.renderRoot.querySelector('slot[name="title"]').assignedNodes().length > 0), true, 'Custom title should be slotted');
});

test('Expandable component with title and no-chevron attribute is rendered on the page', async (t) => {
  const component = `
    <w-expandable no-chevron title="toggle">
      <p>This is an expandable element</p>
    </w-expandable>
  `;

  const page = await addContentToPage({
    page: t.context.page,
    content: component,
  });

  const locator = await page.locator('w-expandable');
  t.equal(await locator.evaluate((el) => el.noChevron), true, '"noChevron" property should be true');
  t.equal(await locator.evaluate((el) => el.renderRoot.querySelector('w-icon-chevron-down16')), null, 'Chevron icon should not be rendered');
});
