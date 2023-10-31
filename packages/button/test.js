/* eslint-disable no-undef */
import tap, { test, beforeEach, teardown } from "tap";
import { chromium } from "playwright";
import { addContentToPage } from "../../tests/utils/index.js";

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

test("Button component with no attributes is rendered on the page", async (t) => {
  // GIVEN: A button component
  const component = `
    <w-button>
      This is a button
    </w-button>
  `;

  // WHEN: the component is added to the page
  const page = await addContentToPage({
    page: t.context.page,
    content: component,
  });

  // THEN: the component is visible in the DOM
  const locator = await page.locator("w-button");
  t.equal(
    (await locator.innerHTML()).trim(),
    "This is a button",
    "HTML should be rendered",
  );
  t.equal(
    await locator.getAttribute("quiet"),
    null,
    '"quiet" attribute should be null',
  );
  t.equal(
    await locator.getAttribute("small"),
    null,
    '"small" attribute should be null',
  );
  t.equal(
    await locator.getAttribute("loading"),
    null,
    '"loading" attribute should be null',
  );
  t.equal(
    await locator.evaluate((el) => el.variant),
    "secondary",
    '"variant" property should default to "secondary"',
  );
});

test("Quiet small negative button", async (t) => {
  const component = `
    <w-button variant="negative" quiet small>
      This is a quiet small negative button
    </w-button>
  `;

  const page = await addContentToPage({
    page: t.context.page,
    content: component,
  });

  const locator = await page.locator("w-button");
  t.equal(
    (await locator.innerHTML()).trim(),
    "This is a quiet small negative button",
    "HTML should be rendered",
  );
  t.equal(
    await locator.evaluate((el) => el.quiet),
    true,
    '"quiet" property should be true',
  );
  t.equal(
    await locator.evaluate((el) => el.small),
    true,
    '"small" property should be true',
  );
  t.equal(
    await locator.evaluate((el) => el.variant),
    "negative",
    '"variant" property should be "negative"',
  );
});

test("Loading primary button", async (t) => {
  const component = `
    <w-button variant="primary" loading>
      This is a loading primary button
    </w-button>
  `;

  const page = await addContentToPage({
    page: t.context.page,
    content: component,
  });

  const locator = await page.locator("w-button");
  t.equal(
    (await locator.innerHTML()).trim(),
    "This is a loading primary button",
    "HTML should be rendered",
  );
  t.equal(
    await locator.evaluate((el) => el.loading),
    true,
    '"loading" property should be true',
  );
  t.equal(
    await locator.evaluate((el) => el.variant),
    "primary",
    '"variant" property should be "primary"',
  );
});

test("Button as an anchor", async (t) => {
  const component = `
    <w-button href="https://google.no">
      This is an anchor element
    </w-button>
  `;

  const page = await addContentToPage({
    page: t.context.page,
    content: component,
  });

  const locator = await page.locator("w-button");
  t.equal(
    (await locator.innerHTML()).trim(),
    "This is an anchor element",
    "HTML should be rendered",
  );
  t.equal(
    await locator.evaluate(
      (el) => el.renderRoot.querySelector('[href="https://google.no"]').tagName,
    ),
    "A",
    "Button is rendered as an anchor tag",
  );
});

test("Button with autofocus", async (t) => {
  const component = `
    <w-button autofocus>
      This button should be focused
    </w-button>
  `;

  const page = await addContentToPage({
    page: t.context.page,
    content: component,
  });

  const locator = await page.locator("w-button");
  t.equal(
    (await locator.innerHTML()).trim(),
    "This button should be focused",
    "HTML should be rendered",
  );
  t.equal(
    await locator.evaluate((el) => document.activeElement === el),
    true,
    "Button should be focused",
  );
});

test("Button with invalid variant name", async (t) => {
  const component = `
    <w-button variant="foo" loading>
      This is a foo button
    </w-button>
  `;

  const errorLogs = [];
  const registerErrorLogs = (exception) => {
    errorLogs.push(exception);
  };

  // Before adding content to the page, subscribe to all uncaught errors emitted there
  t.context.page.on("pageerror", registerErrorLogs);

  const page = await addContentToPage({
    page: t.context.page,
    content: component,
  });

  t.equal(
    errorLogs[0].message,
    `Invalid "variant" attribute. Set its value to one of the following:\nprimary, secondary, negative, utility, link, pill.`,
    "Invalid attribute error was thrown",
  );

  page.removeListener("pageerror", registerErrorLogs);
});
