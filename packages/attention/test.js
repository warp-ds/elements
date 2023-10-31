/* eslint-disable no-undef */
import tap, { test, beforeEach, teardown } from 'tap';
import { chromium } from 'playwright';
import { addContentToPage } from '../../tests/utils/index.js';
import { opposites } from '@warp-ds/core/attention';

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

test('Attention component with no attributes is rendered on the page', async (t) => {
  // GIVEN: An attention component
  const component = `
    <w-attention>
      <div slot="target" class="p-16 rounded-8 bg-aqua-50">Target element to attention</div><p slot="message">This is an attention</p>
    </w-attention>
  `;

  const errorLogs = [];
  const registerErrorLogs = (exception) => {
    errorLogs.push(exception);
  };

  // Before adding content to the page, subscribe to all uncaught errors emitted there
  t.context.page.on('pageerror', registerErrorLogs);

  // WHEN: the component is added to the page
  const page = await addContentToPage({
    page: t.context.page,
    content: component,
  });

  // THEN: the component is visible in the DOM
  const locator = await page.locator('w-attention');
  t.equal((await locator.innerHTML()).trim(), '<div slot="target" class="p-16 rounded-8 bg-aqua-50">Target element to attention</div><p slot="message">This is an attention</p>', 'HTML should be rendered');
  t.equal(await locator.getAttribute('callout'), null, '"callout" attribute should be null');
  t.equal(await locator.evaluate((el) => el.callout), false, '"callout" property should default to false');
  t.equal(await locator.getAttribute('popover'), null, '"popover" attribute should be null');
  t.equal(await locator.evaluate((el) => el.popover), false, '"popover" property should default to false');
  t.equal(await locator.evaluate((el) => el.tooltip), false, '"tooltip" property should default to false');
  t.equal(await locator.getAttribute('no-arrow'), null, '"no-arrow" attribute should be null');
  t.equal(await locator.evaluate((el) => el.noArrow), false, '"noArrow" property should default to false');
  t.equal(await locator.evaluate((el) => el.show), false, '"show" property should default to false');

  t.equal(errorLogs[0].message, `Invalid "placement" attribute. Set its value to one of the following:\n${JSON.stringify(Object.keys(opposites))}`, 'Invalid attribute error was thrown');
  page.removeListener('pageerror', registerErrorLogs);
});

test('Attention component with invalid "placement" attribute is rendered on the page', async (t) => {
  const component = `
    <w-attention placement="hello">
      <div slot="target" class="p-16 rounded-8 bg-aqua-50">Target element to attention</div>
      <p slot="message">This is an attention with invalid "placement" attribute</p>
    </w-attention>
  `;

  const errorLogs = [];
  const registerErrorLogs = (exception) => {
    errorLogs.push(exception);
  };

  // Before adding content to the page, subscribe to all uncaught errors emitted there
  t.context.page.on('pageerror', registerErrorLogs);

  const page = await addContentToPage({
    page: t.context.page,
    content: component,
  });

  t.equal(errorLogs[0].message, `Invalid "placement" attribute. Set its value to one of the following:\n${JSON.stringify(Object.keys(opposites))}`, 'Invalid attribute error was thrown');

  page.removeListener('pageerror', registerErrorLogs);
});

test('Bottom placed tooltip attention component with show attribute is rendered on the page', async (t) => {
  const component = `
    <w-attention placement="bottom" show tooltip>
      <div slot="target" class="p-16 rounded-8 bg-aqua-50">Target element to tooltip attention</div>
      <p slot="message">This is a tooltip that should be visible on bottom</p>
    </w-attention>
  `;

  const errorLogs = [];
  const registerErrorLogs = (exception) => {
    errorLogs.push(exception);
  };

  t.context.page.on('pageerror', registerErrorLogs);

  const page = await addContentToPage({
    page: t.context.page,
    content: component,
  });

  const locator = await page.locator('w-attention');
  t.equal(await locator.evaluate((el) => el.placement), 'bottom', '"placement" property should be "bottom"');
  t.equal(await locator.evaluate((el) => el.tooltip), true, '"tooltip" property should be true');
  t.equal(await locator.evaluate((el) => el.show), true, '"show" property should be true');
  t.equal(errorLogs.length, 0, 'No errors should be thrown in the console');

  page.removeListener('pageerror', registerErrorLogs);
});

test('Right placed callout attention component with show attribute is rendered on the page', async (t) => {
  const component = `
      <w-attention placement="right" show callout class="flex items-center">
        <div slot="target" class="p-16 rounded-8 bg-aqua-50">Target element to callout attention</div>
        <p slot="message">This is a callout that should be visible on right</p>
      </w-attention>
  `;

  const page = await addContentToPage({
    page: t.context.page,
    content: component,
  });

  const locator = await page.locator('w-attention');
  t.equal(await locator.evaluate((el) => el.placement), 'right', '"placement" property should be "right"');
  t.equal(await locator.evaluate((el) => el.callout), true, '"callout" property should be true');
  t.equal(await locator.evaluate((el) => window.getComputedStyle(el.renderRoot.querySelector('#attention')).getPropertyValue('display')), 'block', '"display" should be "block"');
});

test('Order of target node for left placed attention component', async (t) => {
  const component = `
    <w-attention placement="left" show tooltip>
      <div slot="target" class="p-16 rounded-8 bg-aqua-50">Target element to tooltip attention</div><p slot="message">This is a tooltip that should be visible on left</p>
    </w-attention>
  `;

  const page = await addContentToPage({
    page: t.context.page,
    content: component,
  });

  const locator = await page.locator('w-attention');
  t.equal(await locator.evaluate((el) => el.renderRoot.querySelector('div').lastElementChild.name), 'target', 'Target should be rendered as last element');
});

test('Order of attention message for bottom placed attention component', async (t) => {
  const component = `
    <w-attention placement="bottom" show tooltip>
      <div slot="target" class="p-16 rounded-8 bg-aqua-50">Target element to tooltip attention</div><p slot="message">This is a tooltip that should be visible on bottom</p>
    </w-attention>
  `;

  const page = await addContentToPage({
    page: t.context.page,
    content: component,
  });

  const locator = await page.locator('w-attention');
  t.equal(await locator.evaluate((el) => el.renderRoot.querySelector('div').lastElementChild.id), 'attention', 'Attention message should be rendered as last element');
});

test('Default ARIA attributes', async (t) => {
  const component = `
    <w-attention placement="bottom" show tooltip>
      <div slot="target" class="p-16 rounded-8 bg-aqua-50">Target element to tooltip attention</div><p slot="message">This is a tooltip that should be visible on bottom</p>
    </w-attention>
  `;

  const page = await addContentToPage({
    page: t.context.page,
    content: component,
  });

  const locator = await page.locator('w-attention');
  t.equal(await locator.evaluate((el) => el.renderRoot.querySelector('slot[name="target"]').assignedNodes()[0].hasAttribute('aria-describedby')), true, 'Target elemement has aria-describedby attribute');

  t.equal(await locator.evaluate((el) => el.renderRoot.querySelector('slot[name="message"]').assignedNodes()[0].getAttribute('role')), 'tooltip', 'Message elemement has role="tooltip" attribute');
});
