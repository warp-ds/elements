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

test("Card component with no attributes is rendered on the page", async (t) => {
  // GIVEN: A card component
  const component = `
    <w-card>
      <div>This is an w-card</div>
    </w-card>
  `;

  // WHEN: the component is added to the page
  const page = await addContentToPage({
    page: t.context.page,
    content: component,
  });

  // THEN:
  const locator = await page.locator("w-card");
  t.equal(
    (await locator.innerHTML()).trim(),
    "<div>This is an w-card</div>",
    "HTML should be rendered",
  );
  t.equal(
    await locator.getAttribute("selected"),
    null,
    "Selected attribute should be null",
  );
  t.equal(
    await locator.getAttribute("flat"),
    null,
    "Flat attribute should be null",
  );
  t.equal(
    await locator.getAttribute("clickable"),
    null,
    "Clickable attribute should be null",
  );
  t.equal(
    await page.evaluate(
      'document.querySelector("w-card").renderRoot.querySelector("div").tabIndex',
    ),
    -1,
    "Tab index property should default to -1",
  );
  t.equal(
    await page.evaluate(
      'document.querySelector("w-card").renderRoot.querySelector("div").getAttribute("tabindex")',
    ),
    null,
    "Tab index attribute should be null",
  );
});

test("Card component with selected attribute", async (t) => {
  // GIVEN: A card component
  const component = `
    <w-card selected>
      <div>This is a selected w-card</div>
    </w-card>
  `;

  // WHEN: the component is added to the page
  const page = await addContentToPage({
    page: t.context.page,
    content: component,
  });

  // THEN:
  const locator = await page.locator("w-card");
  t.equal(
    (await locator.innerHTML()).trim(),
    "<div>This is a selected w-card</div>",
    "HTML should be rendered",
  );
  t.equal(
    await page.evaluate('document.querySelector("w-card").selected'),
    true,
    "Selected property should be true",
  );
  t.equal(
    await locator.getAttribute("selected"),
    "",
    "Selected attribute should be set",
  );
  t.equal(
    await locator.getAttribute("flat"),
    null,
    "Flat attribute should be null",
  );
  t.equal(
    await locator.getAttribute("clickable"),
    null,
    "Clickable attribute should be null",
  );
});

test("Card component with flat attribute", async (t) => {
  // GIVEN: A card component
  const component = `
    <w-card flat>
      <div>This is a flat w-card</div>
    </w-card>
  `;

  // WHEN: the component is added to the page
  const page = await addContentToPage({
    page: t.context.page,
    content: component,
  });

  // THEN:
  const locator = await page.locator("w-card");
  t.equal(
    (await locator.innerHTML()).trim(),
    "<div>This is a flat w-card</div>",
    "HTML should be rendered",
  );
  t.equal(
    await page.evaluate('document.querySelector("w-card").flat'),
    true,
    "Flat property should be true",
  );
  t.equal(
    await locator.getAttribute("flat"),
    "",
    "Flat attribute should be set",
  );
  t.equal(
    await locator.getAttribute("selected"),
    null,
    "Selected attribute should be null",
  );
  t.equal(
    await locator.getAttribute("clickable"),
    null,
    "Clickable attribute should be null",
  );
});

test("Card component with clickable attribute", async (t) => {
  // GIVEN: A card component
  const component = `
    <w-card clickable>
      <div>This is a clickable w-card</div>
    </w-card>
  `;

  // WHEN: the component is added to the page
  const page = await addContentToPage({
    page: t.context.page,
    content: component,
  });

  // THEN:
  const locator = await page.locator("w-card");
  t.equal(
    (await locator.innerHTML()).trim(),
    "<div>This is a clickable w-card</div>",
    "HTML should be rendered",
  );
  t.equal(
    await page.evaluate('document.querySelector("w-card").clickable'),
    true,
    "Clickable property should be true",
  );
  t.equal(
    await locator.getAttribute("clickable"),
    "",
    "Clickable attribute should be set",
  );
  t.equal(
    await page.evaluate(
      'document.querySelector("w-card").renderRoot.querySelector("div").tabIndex',
    ),
    0,
    "Tab index should be set to 0",
  );
  t.equal(
    await page.evaluate(
      'document.querySelector("w-card").renderRoot.querySelector("div").getAttribute("tabindex")',
    ),
    "0",
    "Tab index should be set to 0",
  );
  t.equal(
    await locator.getAttribute("flat"),
    null,
    "Flat attribute should be null",
  );
  t.equal(
    await locator.getAttribute("selected"),
    null,
    "Selected attribute should be null",
  );
});

test("Card component with clickable attribute is usable by keyboard", async (t) => {
  // GIVEN: A card component
  const component = `
    <w-card clickable onclick="this.selected = true">
      <div>This is a clickable w-card</div>
    </w-card>
  `;

  // WHEN: the component is added to the page and page interaction is performed
  const page = await addContentToPage({
    page: t.context.page,
    content: component,
  });
  await page.keyboard.press("Tab");
  await page.keyboard.press("Enter");

  // THEN: the card selected attribute is empty
  const locator = await page.locator("w-card");
  t.equal(
    await locator.getAttribute("selected"),
    "",
    "Selected attribute should be set",
  );
  t.equal(
    await page.evaluate('document.querySelector("w-card").selected'),
    true,
    "Selected property should be true",
  );
});

test("Card component with clickable attribute is usable by keyboard but alt+enter does not trigger", async (t) => {
  // GIVEN: A card component
  const component = `
    <w-card clickable onclick="this.selected = true">
      <div>This is a clickable w-card</div>
    </w-card>
  `;

  // WHEN: the component is added to the page and page interaction is performed
  const page = await addContentToPage({
    page: t.context.page,
    content: component,
  });
  await page.keyboard.press("Tab");
  await page.keyboard.press("Alt+Enter");

  // THEN: the card selected attribute is empty
  const locator = await page.locator("w-card");
  t.equal(
    await locator.getAttribute("selected"),
    null,
    "Selected attribute should not be set",
  );
  t.equal(
    await page.evaluate('document.querySelector("w-card").selected'),
    false,
    "Selected property should be false",
  );
});
