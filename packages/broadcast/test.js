import tap, { test, beforeEach, teardown } from "tap";
import { chromium } from "playwright";
import { addContentToPage } from "../../tests/utils/index.js";

const wait = (duration = 0) =>
  new Promise((resolve) => setTimeout(resolve, duration));
const formatHTML = (string) =>
  string
    .trim()
    // remove html comments
    .replace(/<!--.*?-->/g, "");

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

test("Single broadcast", async (t) => {
  // GIVEN: The broadcast component
  const component = `
    <w-broadcast 
        api="http://localhost:4053/single-broadcast"
        url="http://test"
        interval="5000"
    ></w-broadcast>
  `;

  // WHEN: the component is added to the page
  const page = await addContentToPage({
    page: t.context.page,
    content: component,
  });

  // THEN: the component is visible in the DOM
  await wait(50);
  const locator = await page.locator("w-broadcast");

  t.matchSnapshot(
    formatHTML(await locator.evaluate((el) => el.renderRoot.innerHTML)),
  );
});

test("Multiple broadcasts", async (t) => {
  // GIVEN: The broadcast component
  const component = `
    <w-broadcast api="http://localhost:4053/multiple-broadcasts"></w-broadcast>
  `;

  // WHEN: the component is added to the page
  const page = await addContentToPage({
    page: t.context.page,
    content: component,
  });

  // THEN: the component is visible in the DOM
  await wait(50);
  const locator = await page.locator("w-broadcast");

  t.matchSnapshot(
    formatHTML(await locator.evaluate((el) => el.renderRoot.innerHTML)),
  );
});
