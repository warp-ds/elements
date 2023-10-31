import tap, { test, beforeEach, teardown } from 'tap';
import { chromium } from 'playwright';
import { addContentToPage } from '../../tests/utils/index.js';

const wait = (duration = 0) => new Promise((resolve) => setTimeout(resolve, duration));
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

test('Initially no toasts are present', async (t) => {
  // GIVEN: A toast container component
  const component = `
    <w-toast-container></w-toast-container>
  `;

  // WHEN: the component is added to the page
  const page = await addContentToPage({
    page: t.context.page,
    content: component,
  });

  // THEN: the component is visible in the DOM
  const locator = await page.locator('w-toast-container');

  t.matchSnapshot(formatHTML(await locator.evaluate((el) => el.renderRoot.innerHTML)));
});

test('Initialization adds toast container to the dom', async (t) => {
  // GIVEN: An initialized page with no component
  const page = await addContentToPage({ page: t.context.page, content: '' });

  // WHEN: the component is initialized
  await page.evaluate("customElements.get('w-toast-container').init();");

  // THEN: the component is visible in the DOM
  const locator = await page.locator('w-toast-container');
  t.matchSnapshot(formatHTML(await locator.evaluate((el) => el.renderRoot.innerHTML)));
});

test('Multiple initializations adds only one toast container to the dom', async (t) => {
  // GIVEN: An initialized page with no component
  const page = await addContentToPage({ page: t.context.page, content: '' });

  // WHEN: the component is initialized
  await page.evaluate("customElements.get('w-toast-container').init();");
  await page.evaluate("customElements.get('w-toast-container').init();");
  await page.evaluate("customElements.get('w-toast-container').init();");

  // THEN: the correct number of components have been placed into the page
  const result = await page.evaluate("document.querySelectorAll('w-toast-container').length;");
  t.equal(result, 1);
});

test('set method: throws when no id provided', async (t) => {
  // GIVEN: An initialized page with no component
  const page = await addContentToPage({ page: t.context.page, content: '' });
  let error = null;

  // WHEN: the .set() is called with no id.
  try {
    await page.evaluate("customElements.get('w-toast-container').init().set();");
  } catch (err) {
    error = err;
  }

  // THEN an error is thrown
  t.match(error.message, "(reading 'id')");
});

test('set method: throws when invalid id provided (empty object)', async (t) => {
  // GIVEN: An initialized page with no component
  const page = await addContentToPage({ page: t.context.page, content: '' });
  let error = null;

  // WHEN: the .set() is called with an invalid id.
  try {
    await page.evaluate("customElements.get('w-toast-container').init().set({});");
  } catch (err) {
    error = err;
  }

  // THEN an error is thrown
  t.match(error.message, 'invalid or undefined "id" on toast object');
});

test('set method: does not throw when an id is provided', async (t) => {
  // GIVEN: An initialized page with no component
  const page = await addContentToPage({ page: t.context.page, content: '' });
  let error = null;

  // WHEN: the .set() is called with an id.
  try {
    await page.evaluate("customElements.get('w-toast-container').init().set({ id: 'abc' });");
  } catch (err) {
    error = err;
  }

  // THEN no error is thrown
  t.notOk(error);
});

test('set method: toast element created from given data', async (t) => {
  // GIVEN: An initialized page with no component
  const page = await addContentToPage({ page: t.context.page, content: '' });

  // WHEN: the .set() is called with an id.
  await page.evaluate(
    "customElements.get('w-toast-container').init().set({ id: 'abc', text: 'This is a toast' });",
  );

  // THEN: the toast is added to the page
  const locator = await page.locator('w-toast-container');
  t.matchSnapshot(formatHTML(await locator.evaluate((el) => el.renderRoot.innerHTML)));
});

test('get method: throws when no id is provided', async (t) => {
  // GIVEN: An initialized page with no component
  const page = await addContentToPage({ page: t.context.page, content: '' });
  let error = null;

  // WHEN: the .get() method is called with no id.
  try {
    await page.evaluate("customElements.get('w-toast-container').init().get();");
  } catch (err) {
    error = err;
  }

  // THEN an error is thrown
  t.match(error.message, 'undefined "id" given when attempting to retrieve toast');
});

test('get method: throws when invalid id provided (empty object)', async (t) => {
  // GIVEN: An initialized page with no component
  const page = await addContentToPage({ page: t.context.page, content: '' });
  let error = null;

  // WHEN: the .get() method is called with an invalid id.
  try {
    await page.evaluate("customElements.get('w-toast-container').init().get({});");
  } catch (err) {
    error = err;
  }

  // THEN an error is thrown
  t.match(error.message, '"id" must be number or string when attempting to retrieve toast');
});

test('set/get methods: set a value then get it', async (t) => {
  // GIVEN: An initialized page with no component
  const page = await addContentToPage({ page: t.context.page, content: '' });

  // WHEN: the .set() is called with an id.
  await page.evaluate(
    "customElements.get('w-toast-container').init().set({ id: 'abc', text: 'This is a toast' });",
  );
  const message = await page.evaluate(
    "customElements.get('w-toast-container').init().get('abc').text;",
  );

  // THEN:
  t.equal(message, 'This is a toast');
});

test('del method, throws when no id provided', async (t) => {
  // GIVEN: An initialized page with no component
  const page = await addContentToPage({ page: t.context.page, content: '' });
  let error = null;

  // WHEN: the .del() is called with no id.
  try {
    await page.evaluate("customElements.get('w-toast-container').init().del();");
  } catch (err) {
    error = err;
  }

  // THEN an error is thrown
  t.match(error.message, 'undefined "id" given when attempting to retrieve toast');
});

test('del method, throws when invalid id provided', async (t) => {
  // GIVEN: An initialized page with no component
  const page = await addContentToPage({ page: t.context.page, content: '' });

  let error = null;

  // WHEN: the .del() is called with an invalid id.
  try {
    await page.evaluate("customElements.get('w-toast-container').init().del({});");
  } catch (err) {
    error = err;
  }

  // THEN an error is thrown
  t.match(error.message, '"id" must be number or string when attempting to retrieve toast');
});

test('del method, returns false when valid id does not exist', async (t) => {
  // GIVEN: An initialized page with no component
  const page = await addContentToPage({ page: t.context.page, content: '' });

  // WHEN: the .del() is called with an id but nothing with that id exists.
  const result = await page.evaluate("customElements.get('w-toast-container').init().del('abc');");

  // THEN false is returned
  t.equal(result, false);
});

test('set/del methods: set a toast then delete it', async (t) => {
  // GIVEN: An initialized page with no component
  const page = await addContentToPage({
    page: t.context.page,
    content: '',
  });

  // WHEN: the .set() is called with an id.
  await page.evaluate(
    "customElements.get('w-toast-container').init().set({ id: 'abc', text: 'This is a toast' });",
  );
  // AND: .del() is called after to remove it
  await page.evaluate("customElements.get('w-toast-container').init().del('abc');");

  // THEN: there should be no matching toasts in the dom
  const locator = await page.locator('w-toast-container');
  t.matchSnapshot(formatHTML(await locator.evaluate((el) => el.renderRoot.innerHTML)));
});

test('scheduling: toasts automatically deleted after duration', async (t) => {
  // GIVEN: An initialized page with no component
  const page = await addContentToPage({ page: t.context.page, content: '' });

  // WHEN: toasts with durations are added
  await page.evaluate(
    "customElements.get('w-toast-container').init().set({ id: 'abc', text: 'This is a toast', duration: 50 });",
  );
  await page.evaluate(
    "customElements.get('w-toast-container').init().set({ id: 'bbb', text: 'This is a toast', duration: 50 });",
  );
  await page.evaluate(
    "customElements.get('w-toast-container').init().set({ id: 'ccc', text: 'This is a toast', duration: 50 });",
  );
  await page.evaluate(
    "customElements.get('w-toast-container').init().set({ id: 'ddd', text: 'This is a toast' });",
  );
  const locator = await page.locator('w-toast-container');
  const numberofToastsBeforeWaiting = await locator.evaluate(
    (el) => el.renderRoot.querySelectorAll('w-toast').length,
  );
  await wait(1000);
  const numberofToastsAfterWaiting = await locator.evaluate(
    (el) => el.renderRoot.querySelectorAll('w-toast').length,
  );

  // THEN: there should be 4 toasts intially and 1 after the duration
  t.equal(numberofToastsBeforeWaiting, 4);
  t.equal(numberofToastsAfterWaiting, 1);
});

test('updating toast type', async (t) => {
  // GIVEN: An initialized page with no component
  const page = await addContentToPage({ page: t.context.page, content: '' });

  // WHEN:
  await page.evaluate(
    "customElements.get('w-toast-container').init().set({ id: 'abc', text: 'This is a toast' });",
  );
  await page.evaluate(
    "customElements.get('w-toast-container').init().set({ id: 'abc', text: 'This is a toast', type: 'error' });",
  );

  const locator = await page.locator('w-toast-container');
  const type = await locator.evaluate((el) => el.renderRoot.querySelector('w-toast').type);

  // THEN:
  t.equal(type, 'error');
});

test('Setting all properties', async (t) => {
  // GIVEN: An initialized page with no component
  const page = await addContentToPage({
    page: t.context.page,
    content: '<w-toast id="abc" type="success" canclose text="This is my toast"></w-toast>',
  });

  // WHEN/THEN:
  const locator = await page.locator('w-toast');
  t.equal(await locator.evaluate((el) => el.getAttribute('id')), 'abc');
  t.equal(await locator.evaluate((el) => el.getAttribute('type')), 'success');
  t.equal(await locator.evaluate((el) => el.getAttribute('canclose')), '');
  t.equal(await locator.evaluate((el) => el.getAttribute('text')), 'This is my toast');
});

test('Id assigned when not provided', async (t) => {
  // GIVEN: An initialized page with no component
  const page = await addContentToPage({
    page: t.context.page,
    content: '<w-toast text="This is my toast"></w-toast>',
  });

  // WHEN/THEN:
  const locator = await page.locator('w-toast');
  t.equal(typeof (await locator.evaluate((el) => el.getAttribute('id'))), 'string');
  t.equal(await locator.evaluate((el) => el.getAttribute('id').length), 11);
});

test('Type defaults to success', async (t) => {
  // GIVEN: An initialized page with no component
  const page = await addContentToPage({
    page: t.context.page,
    content: '<w-toast text="This is my toast"></w-toast>',
  });

  // WHEN/THEN:
  const locator = await page.locator('w-toast');
  t.equal(await locator.evaluate((el) => el.getAttribute('type')), 'success');
});

test('Setting type to warning', async (t) => {
  // GIVEN: An initialized page with no component
  const page = await addContentToPage({
    page: t.context.page,
    content: '<w-toast text="This is my toast" type="warning"></w-toast>',
  });

  // WHEN/THEN:
  const locator = await page.locator('w-toast');
  t.equal(await locator.evaluate((el) => el.getAttribute('type')), 'warning');
});

test('Setting type to info', async (t) => {
  // GIVEN: An initialized page with no component
  const page = await addContentToPage({
    page: t.context.page,
    content: '<w-toast text="This is my toast" type="info"></w-toast>',
  });

  // WHEN/THEN:
  const locator = await page.locator('w-toast');
  t.equal(await locator.evaluate((el) => el.getAttribute('type')), 'info');
});

test('Setting type to error', async (t) => {
  // GIVEN: An initialized page with no component
  const page = await addContentToPage({
    page: t.context.page,
    content: '<w-toast text="This is my toast" type="error"></w-toast>',
  });

  // WHEN/THEN:
  const locator = await page.locator('w-toast');
  t.equal(await locator.evaluate((el) => el.getAttribute('type')), 'error');
});

test('Close button shows when canclose=true', async (t) => {
  // GIVEN: An initialized page with no component
  const page = await addContentToPage({
    page: t.context.page,
    content: '<w-toast text="This is my toast" canclose></w-toast>',
  });

  // WHEN/THEN:
  const locator = await page.locator('w-toast');
  t.equal(await locator.evaluate((el) => el.canclose), true);
});

test('Close button does not show when canclose is not applied', async (t) => {
  // GIVEN: An initialized page with no component
  const page = await addContentToPage({
    page: t.context.page,
    content: '<w-toast text="This is my toast"></w-toast>',
  });

  // WHEN/THEN:
  const locator = await page.locator('w-toast');
  t.equal(await locator.evaluate((el) => el.canclose), false);
});

test('Nothing shows when text not provided', async (t) => {
  // GIVEN: An initialized page with no component
  const page = await addContentToPage({
    page: t.context.page,
    content: '<w-toast></w-toast>',
  });

  // WHEN/THEN:
  const locator = await page.locator('w-toast');
  t.matchSnapshot(formatHTML(await locator.evaluate((el) => el.renderRoot.innerHTML)));
});

test('Collapse method collapses markup', async (t) => {
  // GIVEN: An initialized page with no component
  const page = await addContentToPage({
    page: t.context.page,
    content: '<w-toast text="This is my toast" canclose></w-toast>',
  });
  await wait(2000);

  // WHEN:
  const locator = await page.locator('w-toast');
  const beforeHeight = await locator.evaluate(
    (el) => el.renderRoot.querySelector('section').style.height,
  );
  await locator.evaluate((el) => el.collapse());
  const afterHeight = await locator.evaluate(
    (el) => el.renderRoot.querySelector('section').style.height,
  );

  // THEN:
  t.equal(beforeHeight, 'auto');
  t.equal(afterHeight, '0px');
});

test('Emits close event when close button clicked', async (t) => {
  // GIVEN: An initialized page with no component
  const page = await addContentToPage({
    page: t.context.page,
    content: '<w-toast text="This is my toast" canclose></w-toast>',
  });

  // WHEN:
  const locator = await page.locator('w-toast');
  await locator.evaluate(
    (el) => el.addEventListener('close', () => {
      // @ts-ignore
      window.toastWasClosed = true;
      el.click();
    }),
  );
  const closeButton = await page.locator('w-toast button');
  await closeButton.click();

  // THEN:
  t.equal(await page.evaluate('window.toastWasClosed'), true);
});

test('API: first call to toast adds toast container to the dom', async (t) => {
  // GIVEN: Toast API scripts are added to the page
  await t.context.page.addScriptTag({
    content: `
        import 'http://localhost:4053/scripts/index.js';
        import { toast } from 'http://localhost:4053/scripts/api.js';
        window.toast = toast;
    `,
    type: 'module',
  });

  // WHEN:
  const locator = await t.context.page.locator('w-toast-container');
  const countBefore = await locator.count();
  await t.context.page.evaluate("window.toast('This is a toast')");
  const countAfter = await locator.count();

  // THEN:
  t.equal(countBefore, 0);
  t.equal(countAfter, 1);
});

test('API: toast method: options: duration is set correctly', async (t) => {
  // GIVEN: Toast API scripts are added to the page
  await t.context.page.addScriptTag({
    content: `
        import 'http://localhost:4053/scripts/index.js';
        import { toast } from 'http://localhost:4053/scripts/api.js';
        window.toast = toast;
    `,
    type: 'module',
  });
  await wait(2000);

  // WHEN:
  const locator = await t.context.page.locator('w-toast');
  const countBefore = await locator.count();
  await t.context.page.evaluate("window.toast('This is a toast', { duration: 50 })");
  const countAfter = await locator.count();

  // THEN:
  t.equal(countBefore, 0);
  t.equal(countAfter, 1);
});

test('API: toast method: options: canclose creates close button', async (t) => {
  // GIVEN: Toast API scripts are added to the page
  await t.context.page.addScriptTag({
    content: `
        import 'http://localhost:4053/scripts/index.js';
        import { toast } from 'http://localhost:4053/scripts/api.js';
        window.toast = toast;
    `,
    type: 'module',
  });
  await wait(500);

  // WHEN:
  const locator = await t.context.page.locator('w-toast button');
  await t.context.page.evaluate("window.toast('This is a toast', { canclose: true })");

  // THEN:
  t.equal(await locator.count(), 1);
});

test('API: toast method: options: type changes visual appearance', async (t) => {
  // GIVEN: Toast API scripts are added to the page
  await t.context.page.addScriptTag({
    content: `
        import 'http://localhost:4053/scripts/index.js';
        import { toast } from 'http://localhost:4053/scripts/api.js';
        window.toast = toast;
    `,
    type: 'module',
  });
  await wait(500);

  // WHEN:
  const locator = await t.context.page.locator('w-toast section > div');
  await t.context.page.evaluate("window.toast('This is a toast', { type: 'error' })");
  const classList = Object.values(await locator.evaluate((el) => el.classList));

  // THEN:
  t.ok(classList.includes('bg-red-50'));
  t.ok(classList.includes('border-red-300'));
  t.ok(classList.includes('text-red-800'));
});

test('API: update toast modifies existing toast', async (t) => {
  // GIVEN: Toast API scripts are added to the page
  await t.context.page.addScriptTag({
    content: `
        import 'http://localhost:4053/scripts/index.js';
        import { toast, updateToast } from 'http://localhost:4053/scripts/api.js';
        window.toast = toast;
        window.updateToast = updateToast;
    `,
    type: 'module',
  });
  const locator = await t.context.page.locator('w-toast');
  await wait(500);

  // WHEN:
  await t.context.page.evaluate("window.identifier = window.toast('This is a toast')");
  await t.context.page.evaluate(
    "window.updateToast(window.identifier.id, { text: 'This is an updated toast' })",
  );
  const text = await locator.evaluate((el) => el.text);

  // THEN:
  t.equal(text, 'This is an updated toast');
});

test('API: remove toast removes existing toast', async (t) => {
  // GIVEN: Toast API scripts are added to the page
  await t.context.page.addScriptTag({
    content: `
          import 'http://localhost:4053/scripts/index.js';
          import { toast, removeToast } from 'http://localhost:4053/scripts/api.js';
          window.toast = toast;
          window.removeToast = removeToast;
      `,
    type: 'module',
  });
  const locator = await t.context.page.locator('w-toast');
  await wait(500);

  // WHEN:
  await t.context.page.evaluate("window.identifier = window.toast('This is a toast')");
  await t.context.page.evaluate('window.removeToast(window.identifier.id)');

  // THEN:
  t.equal(await locator.count(), 0);
});
