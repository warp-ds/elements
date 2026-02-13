import { html } from 'lit';
import { describe, expect, test } from 'vitest';
import { render } from 'vitest-browser-lit';

import '../step/step.js';
import './step-indicator.js';

describe('w-step-indicator accessibility (WCAG 2.2)', () => {
  test('default state has no violations', async () => {
    const page = render(html`
        <w-step-indicator>
          <w-step>Step one</w-step>
          <w-step active>Step two</w-step>
          <w-step>Step three</w-step>
        </w-step-indicator>
      `);

    await expect(page).toHaveNoAxeViolations();
  });

  test('horizontal state has no violations', async () => {
    const page = render(html`
        <w-step-indicator horizontal>
          <w-step completed>Step one</w-step>
          <w-step active>Step two</w-step>
          <w-step>Step three</w-step>
        </w-step-indicator>
      `);

    await expect(page).toHaveNoAxeViolations();
  });
});

describe('WCAG 1.3.1 - Info and Relationships', () => {
  test('steps are exposed as a list of listitems', async () => {
    const page = render(html`
        <w-step-indicator>
          <w-step>Step one</w-step>
          <w-step>Step two</w-step>
        </w-step-indicator>
      `);

    await expect.element(page.getByRole('list')).toBeVisible();
    await expect.poll(() => page.getByRole('listitem').all().length).toBeGreaterThan(0);
  });
});

describe('WCAG 4.1.2 - Name, Role, Value', () => {
  test('active step is exposed via aria-current', async () => {
    render(html`
        <w-step-indicator>
          <w-step>Step one</w-step>
          <w-step active>Step two</w-step>
        </w-step-indicator>
      `);

    const activeStep = document.querySelector('w-step[active]') as HTMLElement | null;
    expect(activeStep).toBeTruthy();
    await expect.poll(() => activeStep?.shadowRoot?.querySelector('[aria-current="step"]')).toBeTruthy();
  });

  test('step status icon has an accessible name', async () => {
    render(html`
        <w-step-indicator>
          <w-step completed>Step one</w-step>
          <w-step>Step two</w-step>
        </w-step-indicator>
      `);

    const completedStep = document.querySelector('w-step[completed]') as HTMLElement | null;
    expect(completedStep).toBeTruthy();
    await expect
      .poll(() => completedStep?.shadowRoot?.querySelector('[aria-label="Step indicator completed circle"]'))
      .toBeTruthy();

    const incompleteStep = document.querySelector('w-step:not([completed])') as HTMLElement | null;
    expect(incompleteStep).toBeTruthy();
    await expect
      .poll(() => incompleteStep?.shadowRoot?.querySelector('[aria-label="Step indicator completed circle"]'))
      .toBeFalsy();
  });
});
