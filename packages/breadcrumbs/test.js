/* eslint-disable no-undef */
import tap, { test, beforeEach, teardown } from 'tap';
import { chromium } from 'playwright';

tap.before(async () => {
  const browser = await chromium.launch({ headless: true });
  tap.context.browser = browser;
});

beforeEach(async (t) => {
  const { browser } = t.context;
  const context = await browser.newContext();
  // context.setDefaultTimeout(2000);
  t.context.page = await context.newPage();
});

teardown(async () => {
  const { browser } = tap.context;
  browser.close();
});

test('Breadcrumb component renders on the page', async (t) => {
  // GIVEN: A component with 1 breadcrumb
  const component = `
    <f-breadcrumbs>
      <a href="#/url/1">Eiendom</a>
    </f-breadcrumbs>
  `;

  // WHEN: the component is added to the page
  const { page } = t.context;
  await page.setContent(component);
  await page.addScriptTag({ path: './dist/index.js', type: 'module' });

  // THEN: the component is visible in the DOM
  t.equal(await page.innerText('nav a'), 'Eiendom', 'An Eiendom a tag should be added to the page');
});

test('Breadcrumb component interleaves / characters between breadcrumb items', async (t) => {
  // GIVEN: A component with 2 breadcrumbs
  const component = `
    <f-breadcrumbs>
        <a href="#/url/1">Eiendom</a>
        <a href="#/url/2">Torget</a>
    </f-breadcrumbs>
  `;

  // WHEN: the component is added to the page AND spans are selected
  const { page } = t.context;
  await page.setContent(component);
  await page.addScriptTag({ path: './dist/index.js', type: 'module' });

  // THEN: a single divider should have been interleaved with the breadcrumbs
  t.equal(await page.innerText('f-breadcrumbs span'), '/', 'Divider slashes should be added');
});

test('Breadcrumb component with anchor child elements', async (t) => {
  // GIVEN: A component with 3 breadcrumbs
  const component = `
    <f-breadcrumbs>
      <a href="#/url/1">Eiendom</a>
      <a href="#/url/2">Torget</a>
      <a href="#/url/3">Oslo</a>
    </f-breadcrumbs>
  `;

  // WHEN: the component is added to the page AND a elements are selected
  const { page } = t.context;
  await page.setContent(component);
  await page.addScriptTag({ path: './dist/index.js', type: 'module' });

  // THEN: there should be three breadcrumbs in the DOM
  t.equal(await page.locator('f-breadcrumbs a').count(), 3, '3 a tags should be present');
  t.equal(await page.locator('f-breadcrumbs span').count(), 2, '2 span tags should be present');
  t.match(
    await page.innerText(':nth-match(f-breadcrumbs a, 1)'),
    'Eiendom',
    'The first segment should be Eiendom',
  );
  t.match(
    await page.innerText(':nth-match(f-breadcrumbs a, 2)'),
    'Torget',
    'The second segment should be Torget',
  );
  t.match(
    await page.innerText(':nth-match(f-breadcrumbs a, 3)'),
    'Oslo',
    'The third segment should be Oslo',
  );
});

test('Breadcrumb component with last element as a span', async (t) => {
  // GIVEN: A component with 3 breadcrumbs
  const component = `
    <f-breadcrumbs>
      <a href="#/url/1">Eiendom</a>
      <a href="#/url/2">Torget</a>
      <span aria-current="page">Oslo</span>
    </f-breadcrumbs>
  `;

  // WHEN: the component is added to the page AND a elements are selected
  const { page } = t.context;
  await page.setContent(component);
  await page.addScriptTag({ path: './dist/index.js', type: 'module' });

  // THEN: there should be three breadcrumbs in the DOM
  t.equal(await page.locator('f-breadcrumbs a').count(), 2, '2 child a tags should be present');
  t.equal(
    await page.locator('f-breadcrumbs span').count(),
    3,
    '3 child span tags should be present',
  );
});
