import { html } from "lit";
import { expect, test } from "vitest";
import { render } from "vitest-browser-lit";
import "./index.js";

test("renders the slotted label", async () => {
  const component = html`<w-button>This is a button</w-button>`;

  const screen = render(component);
  await expect.element(screen.getByText("This is a button")).toBeVisible();
  await expect.element(screen.getByRole("button")).toBeVisible();
});

test("by default button type is button", async () => {
  const component = html`<w-button>This is a button</w-button>`;

  const screen = render(component);
  await expect.element(screen.getByRole("button")).toHaveAttribute("type", "button");
});
